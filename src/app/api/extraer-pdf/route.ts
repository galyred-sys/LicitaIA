import { NextRequest, NextResponse } from "next/server";
import { extractText, getDocumentProxy } from "unpdf";

export const runtime = "nodejs";
export const maxDuration = 60;

// Límite de tamaño del PDF (10 MB) para evitar cargas excesivas.
const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  let archivo: File | null = null;
  try {
    const form = await req.formData();
    const valor = form.get("archivo");
    if (valor instanceof File) archivo = valor;
  } catch {
    return NextResponse.json(
      { error: "Petición inválida. Envía el PDF como campo 'archivo'." },
      { status: 400 },
    );
  }

  if (!archivo) {
    return NextResponse.json(
      { error: "No se recibió ningún archivo." },
      { status: 400 },
    );
  }

  if (archivo.type && archivo.type !== "application/pdf") {
    return NextResponse.json(
      { error: "El archivo debe ser un PDF." },
      { status: 400 },
    );
  }

  if (archivo.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "El PDF supera el tamaño máximo permitido (10 MB)." },
      { status: 400 },
    );
  }

  try {
    const buffer = new Uint8Array(await archivo.arrayBuffer());
    const pdf = await getDocumentProxy(buffer);
    const { text, totalPages } = await extractText(pdf, { mergePages: true });
    const texto = text.trim();

    if (texto.length < 20) {
      return NextResponse.json(
        {
          error:
            "No se pudo extraer texto del PDF. Puede ser un documento escaneado (imagen); pega el texto manualmente.",
        },
        { status: 422 },
      );
    }

    return NextResponse.json({ texto, paginas: totalPages });
  } catch (error) {
    console.error("[LicitaIA] Error al extraer PDF:", error);
    return NextResponse.json(
      { error: "No se pudo leer el PDF. Comprueba que el archivo es válido." },
      { status: 500 },
    );
  }
}
