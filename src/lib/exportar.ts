import type { AnalisisLicitacion } from "./tipos";

/** Convierte un texto en un slug seguro para nombres de archivo. */
function slug(texto: string): string {
  const s = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 60)
    .replace(/(^-+|-+$)/g, ""); // recortar guiones DESPUÉS de cortar a 60
  return s || "informe";
}

/** Escapa un valor para usarlo dentro de una celda de tabla Markdown. */
function celdaMarkdown(texto: string): string {
  return texto.replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
}

/** Dispara la descarga de un Blob en el navegador. */
function descargar(blob: Blob, nombre: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function fechaLegible(): string {
  return new Date().toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Genera y descarga un informe PDF con formato profesional.
 * Usa importación dinámica para no incluir jsPDF en el bundle inicial.
 */
export async function exportarPDF(analisis: AnalisisLicitacion): Promise<void> {
  // Cargar ambas libs en paralelo (evita un waterfall en la 1.ª exportación).
  const [{ jsPDF }, { autoTable }] = await Promise.all([
    import("jspdf"),
    import("jspdf-autotable"),
  ]);

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const anchoPagina = doc.internal.pageSize.getWidth();
  const altoPagina = doc.internal.pageSize.getHeight();
  const margen = 40;
  const anchoUtil = anchoPagina - margen * 2;
  const AZUL: [number, number, number] = [59, 130, 246];
  const GRIS: [number, number, number] = [90, 100, 115];
  let y = margen;

  // autoTable (importación funcional) no aumenta el tipo jsPDF, así que
  // leemos finalY con un acceso tipado seguro.
  const finalYTabla = (): number =>
    (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? y;

  function nuevaPaginaSiHaceFalta(alto: number): void {
    if (y + alto > altoPagina - margen) {
      doc.addPage();
      y = margen;
    }
  }

  function parrafo(
    texto: string,
    tamano: number,
    opciones: { negrita?: boolean; color?: [number, number, number] } = {},
  ): void {
    doc.setFont("helvetica", opciones.negrita ? "bold" : "normal");
    doc.setFontSize(tamano);
    const [r, g, b] = opciones.color ?? [20, 24, 33];
    doc.setTextColor(r, g, b);
    const alturaLinea = tamano * 1.35;
    for (const linea of doc.splitTextToSize(texto, anchoUtil) as string[]) {
      nuevaPaginaSiHaceFalta(alturaLinea);
      doc.text(linea, margen, y);
      y += alturaLinea;
    }
  }

  function tituloSeccion(texto: string): void {
    y += 8;
    nuevaPaginaSiHaceFalta(24);
    parrafo(texto.toUpperCase(), 11, { negrita: true, color: AZUL });
    y += 2;
  }

  function lista(items: string[]): void {
    if (items.length === 0) {
      parrafo("No especificado.", 10, { color: GRIS });
      return;
    }
    for (const item of items) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(20, 24, 33);
      const alturaLinea = 10 * 1.35;
      const lineas = doc.splitTextToSize(item, anchoUtil - 14) as string[];
      lineas.forEach((linea, i) => {
        nuevaPaginaSiHaceFalta(alturaLinea);
        if (i === 0) doc.text("•", margen, y);
        doc.text(linea, margen + 14, y);
        y += alturaLinea;
      });
    }
  }

  // Cabecera
  parrafo("LicitaIA", 22, { negrita: true, color: AZUL });
  parrafo("Informe de análisis de licitación", 11, { color: GRIS });
  parrafo(`Generado el ${fechaLegible()}`, 9, { color: GRIS });
  y += 6;
  doc.setDrawColor(220, 224, 230);
  doc.line(margen, y, anchoPagina - margen, y);
  y += 14;

  // Título del contrato y resumen
  parrafo(analisis.titulo, 15, { negrita: true });
  y += 4;
  parrafo(analisis.resumen, 10, { color: [55, 62, 74] });

  // Datos principales
  tituloSeccion("Datos principales");
  autoTable(doc, {
    startY: y,
    margin: { left: margen, right: margen },
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 4, textColor: [20, 24, 33] },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 150, textColor: GRIS },
    },
    body: [
      ["Órgano contratante", analisis.organoContratante],
      ["Tipo de contrato", analisis.tipoContrato],
      ["Presupuesto base", analisis.presupuestoBase],
      ["Plazo de ejecución", analisis.plazoEjecucion],
      ["Fecha límite", analisis.fechaLimitePresentacion],
      ["Garantías", analisis.garantias],
    ],
  });
  y = finalYTabla() + 4;

  // Criterios de adjudicación
  tituloSeccion("Criterios de adjudicación");
  autoTable(doc, {
    startY: y,
    margin: { left: margen, right: margen },
    theme: "striped",
    headStyles: { fillColor: AZUL, textColor: [255, 255, 255], fontSize: 10 },
    styles: { fontSize: 10, cellPadding: 5 },
    columnStyles: { 1: { halign: "right", cellWidth: 90 } },
    head: [["Criterio", "Peso"]],
    body:
      analisis.criteriosAdjudicacion.length > 0
        ? analisis.criteriosAdjudicacion.map((c) => [c.criterio, c.peso])
        : [["No especificado", "—"]],
  });
  y = finalYTabla() + 4;

  // Requisitos de solvencia
  tituloSeccion("Requisitos de solvencia");
  lista(analisis.requisitosSolvencia);

  // Riesgos
  tituloSeccion("Riesgos y puntos de atención");
  lista(analisis.riesgos);

  // Pie de página en todas las páginas
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 156, 165);
    doc.text(
      "Análisis orientativo generado con IA. Verifica siempre los pliegos oficiales.",
      margen,
      altoPagina - 20,
    );
    doc.text(`${i} / ${total}`, anchoPagina - margen, altoPagina - 20, {
      align: "right",
    });
  }

  doc.save(`LicitaIA-informe-${slug(analisis.titulo)}.pdf`);
}

/** Genera y descarga el informe en formato Markdown. */
export function exportarMarkdown(analisis: AnalisisLicitacion): void {
  const l: string[] = [];
  l.push(`# Informe de análisis — ${analisis.titulo}`);
  l.push("");
  l.push(`_Generado por LicitaIA · ${fechaLegible()}_`);
  l.push("");
  l.push("## Resumen ejecutivo");
  l.push("");
  l.push(analisis.resumen);
  l.push("");
  l.push("## Datos principales");
  l.push("");
  l.push(`- **Órgano contratante:** ${analisis.organoContratante}`);
  l.push(`- **Tipo de contrato:** ${analisis.tipoContrato}`);
  l.push(`- **Presupuesto base:** ${analisis.presupuestoBase}`);
  l.push(`- **Plazo de ejecución:** ${analisis.plazoEjecucion}`);
  l.push(`- **Fecha límite:** ${analisis.fechaLimitePresentacion}`);
  l.push(`- **Garantías:** ${analisis.garantias}`);
  l.push("");
  l.push("## Criterios de adjudicación");
  l.push("");
  if (analisis.criteriosAdjudicacion.length > 0) {
    l.push("| Criterio | Peso |");
    l.push("| --- | --- |");
    for (const c of analisis.criteriosAdjudicacion) {
      l.push(`| ${celdaMarkdown(c.criterio)} | ${celdaMarkdown(c.peso)} |`);
    }
  } else {
    l.push("_No especificado._");
  }
  l.push("");
  l.push("## Requisitos de solvencia");
  l.push("");
  if (analisis.requisitosSolvencia.length > 0) {
    for (const r of analisis.requisitosSolvencia) l.push(`- ${r}`);
  } else {
    l.push("_No especificado._");
  }
  l.push("");
  l.push("## Riesgos y puntos de atención");
  l.push("");
  if (analisis.riesgos.length > 0) {
    for (const r of analisis.riesgos) l.push(`- ${r}`);
  } else {
    l.push("_No especificado._");
  }
  l.push("");
  l.push("---");
  l.push(
    "_Análisis orientativo generado con IA. Verifica siempre los datos con los pliegos oficiales._",
  );

  const blob = new Blob([l.join("\n")], {
    type: "text/markdown;charset=utf-8",
  });
  descargar(blob, `LicitaIA-informe-${slug(analisis.titulo)}.md`);
}
