"use client";

import { useState } from "react";
import { exportarMarkdown, exportarPDF } from "@/lib/exportar";
import type { AnalisisLicitacion } from "@/lib/tipos";

const CLASE_BOTON =
  "rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-accent/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export function BotonesExportar({
  analisis,
}: {
  analisis: AnalisisLicitacion;
}) {
  const [ocupado, setOcupado] = useState<null | "pdf" | "md">(null);
  const [error, setError] = useState<string | null>(null);
  const [estado, setEstado] = useState<string>("");

  async function exportar(formato: "pdf" | "md") {
    setOcupado(formato);
    setError(null);
    setEstado(
      `Generando informe en ${formato === "pdf" ? "PDF" : "Markdown"}…`,
    );
    try {
      if (formato === "pdf") await exportarPDF(analisis);
      else exportarMarkdown(analisis);
      setEstado("Informe descargado.");
    } catch (e) {
      console.error("[LicitaIA] Error al exportar:", e);
      setError("No se pudo generar el informe. Inténtalo de nuevo.");
      setEstado("");
    } finally {
      setOcupado(null);
    }
  }

  return (
    <div
      className="flex flex-col items-end gap-1"
      role="group"
      aria-label="Exportar informe"
      aria-busy={ocupado !== null}
    >
      <div className="flex gap-2">
        <button
          onClick={() => exportar("pdf")}
          disabled={ocupado !== null}
          aria-label="Descargar informe en PDF"
          className={`${CLASE_BOTON} ${
            ocupado !== null && ocupado !== "pdf" ? "opacity-40" : ""
          }`}
        >
          <span aria-hidden="true">↓</span>{" "}
          {ocupado === "pdf" ? "Generando…" : "PDF"}
        </button>
        <button
          onClick={() => exportar("md")}
          disabled={ocupado !== null}
          aria-label="Descargar informe en Markdown"
          className={`${CLASE_BOTON} ${
            ocupado !== null && ocupado !== "md" ? "opacity-40" : ""
          }`}
        >
          <span aria-hidden="true">↓</span>{" "}
          {ocupado === "md" ? "Generando…" : "Markdown"}
        </button>
      </div>

      {/* Región viva para lectores de pantalla (progreso y resultado). */}
      <span className="sr-only" role="status" aria-live="polite">
        {estado}
      </span>
      {error && (
        <span role="alert" className="text-xs text-red-300">
          {error}
        </span>
      )}
    </div>
  );
}
