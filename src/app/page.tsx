"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { ResultadoAnalisis } from "@/components/ResultadoAnalisis";
import { HistorialPanel } from "@/components/HistorialPanel";
import {
  eliminarDelHistorial,
  getServerSnapshotHistorial,
  getSnapshotHistorial,
  guardarEnHistorial,
  limpiarHistorial,
  subscribeHistorial,
  type EntradaHistorial,
} from "@/lib/historial";
import type { AnalisisLicitacion } from "@/lib/tipos";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);
  const [subiendoPdf, setSubiendoPdf] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [analisis, setAnalisis] = useState<AnalisisLicitacion | null>(null);
  const historial = useSyncExternalStore(
    subscribeHistorial,
    getSnapshotHistorial,
    getServerSnapshotHistorial,
  );
  const inputArchivo = useRef<HTMLInputElement>(null);

  async function subirPdf(archivo: File) {
    setSubiendoPdf(true);
    setError(null);
    setAviso(null);
    try {
      const form = new FormData();
      form.append("archivo", archivo);
      const res = await fetch("/api/extraer-pdf", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al leer el PDF.");
      setTexto(data.texto);
      setAviso(
        `Texto extraído de «${archivo.name}» (${data.paginas} pág.). Revísalo y pulsa «Analizar».`,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al leer el PDF.");
    } finally {
      setSubiendoPdf(false);
    }
  }

  function onSeleccionArchivo(e: React.ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0];
    if (archivo) subirPdf(archivo);
    e.target.value = ""; // permite volver a subir el mismo archivo
  }

  function onSoltar(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const archivo = e.dataTransfer.files?.[0];
    if (archivo) subirPdf(archivo);
  }

  async function analizar() {
    setCargando(true);
    setError(null);
    setAnalisis(null);
    try {
      const res = await fetch("/api/analizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al analizar.");
      setAnalisis(data.analisis);
      guardarEnHistorial(data.analisis);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error inesperado.");
    } finally {
      setCargando(false);
    }
  }

  function seleccionarDelHistorial(entrada: EntradaHistorial) {
    setAnalisis(entrada.analisis);
    setError(null);
    setAviso(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function eliminarEntrada(id: string) {
    eliminarDelHistorial(id);
  }

  function vaciarHistorial() {
    limpiarHistorial();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Licita<span className="text-accent">IA</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">
          Sube el PDF del pliego o pega su texto y obtén al instante un análisis
          de criterios, plazos, requisitos de solvencia y riesgos.
        </p>
      </header>

      <div className="space-y-4">
        <div
          onDrop={onSoltar}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputArchivo.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-8 text-center transition hover:border-accent/50 hover:bg-accent/5"
        >
          <input
            ref={inputArchivo}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={onSeleccionArchivo}
          />
          <span className="text-sm font-medium text-white/80">
            {subiendoPdf
              ? "Extrayendo texto del PDF…"
              : "Arrastra aquí el PDF del pliego o haz clic para subirlo"}
          </span>
          <span className="mt-1 text-xs text-white/40">PDF · máx. 10 MB</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-white/30">
          <span className="h-px flex-1 bg-white/10" />o pega el texto
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Pega aquí el texto de la licitación (pliego, anuncio, PPT/PCAP)..."
          rows={12}
          className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-accent/50"
        />

        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">
            {texto.length.toLocaleString("es-ES")} caracteres
          </span>
          <button
            onClick={analizar}
            disabled={cargando || subiendoPdf || texto.trim().length < 50}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {cargando ? "Analizando…" : "Analizar licitación"}
          </button>
        </div>
      </div>

      {aviso && (
        <p className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-white/80">
          {aviso}
        </p>
      )}

      {error && (
        <p className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
        </p>
      )}

      {analisis && <ResultadoAnalisis analisis={analisis} />}

      <HistorialPanel
        entradas={historial}
        onSeleccionar={seleccionarDelHistorial}
        onEliminar={eliminarEntrada}
        onLimpiar={vaciarHistorial}
      />

      <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/30">
        LicitaIA · Análisis orientativo generado con IA. Verifica siempre los
        datos con los pliegos oficiales.
      </footer>
    </main>
  );
}
