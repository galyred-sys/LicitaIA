"use client";

import { useState } from "react";
import { ResultadoAnalisis } from "@/components/ResultadoAnalisis";
import type { AnalisisLicitacion } from "@/lib/tipos";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analisis, setAnalisis] = useState<AnalisisLicitacion | null>(null);

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
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error inesperado.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Licita<span className="text-accent">IA</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">
          Pega el texto de un pliego o anuncio de licitación y obtén al instante
          un análisis de criterios, plazos, requisitos de solvencia y riesgos.
        </p>
      </header>

      <div className="space-y-4">
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
            disabled={cargando || texto.trim().length < 50}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {cargando ? "Analizando…" : "Analizar licitación"}
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
        </p>
      )}

      {analisis && <ResultadoAnalisis analisis={analisis} />}

      <footer className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/30">
        LicitaIA · Análisis orientativo generado con IA. Verifica siempre los
        datos con los pliegos oficiales.
      </footer>
    </main>
  );
}
