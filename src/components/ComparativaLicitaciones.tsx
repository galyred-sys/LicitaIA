"use client";

import { useState } from "react";
import type { AnalisisLicitacion, Comparativa } from "@/lib/tipos";

const FILAS: { etiqueta: string; valor: (a: AnalisisLicitacion) => string }[] = [
  { etiqueta: "Órgano contratante", valor: (a) => a.organoContratante },
  { etiqueta: "Tipo de contrato", valor: (a) => a.tipoContrato },
  { etiqueta: "Presupuesto base", valor: (a) => a.presupuestoBase },
  { etiqueta: "Plazo de ejecución", valor: (a) => a.plazoEjecucion },
  { etiqueta: "Fecha límite", valor: (a) => a.fechaLimitePresentacion },
  { etiqueta: "Garantías", valor: (a) => a.garantias },
  {
    etiqueta: "Nº de criterios",
    valor: (a) => String(a.criteriosAdjudicacion.length),
  },
  {
    etiqueta: "Nº de requisitos",
    valor: (a) => String(a.requisitosSolvencia.length),
  },
  { etiqueta: "Nº de riesgos", valor: (a) => String(a.riesgos.length) },
];

export function ComparativaLicitaciones({
  analisis,
  onCerrar,
}: {
  analisis: AnalisisLicitacion[];
  onCerrar: () => void;
}) {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comparativa, setComparativa] = useState<Comparativa | null>(null);

  async function pedirRecomendacion() {
    setCargando(true);
    setError(null);
    try {
      const res = await fetch("/api/comparar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analisis }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al comparar.");
      setComparativa(data.comparativa);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error inesperado.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <section className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Comparativa de {analisis.length} licitaciones
        </h2>
        <button
          onClick={onCerrar}
          className="rounded-md px-2 py-1 text-xs text-white/40 transition hover:text-white/80"
        >
          Cerrar ✕
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-40 border-b border-white/10 p-2 text-left text-xs font-medium uppercase tracking-wide text-white/40">
                Campo
              </th>
              {analisis.map((a, i) => (
                <th
                  key={i}
                  className="border-b border-white/10 p-2 text-left align-top font-semibold text-white/90"
                >
                  {a.titulo}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FILAS.map((fila) => (
              <tr key={fila.etiqueta} className="align-top">
                <td className="border-b border-white/5 p-2 text-xs font-medium text-white/50">
                  {fila.etiqueta}
                </td>
                {analisis.map((a, i) => (
                  <td
                    key={i}
                    className="border-b border-white/5 p-2 text-white/85"
                  >
                    {fila.valor(a)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="align-top">
              <td className="p-2 text-xs font-medium text-white/50">Resumen</td>
              {analisis.map((a, i) => (
                <td key={i} className="p-2 text-xs text-white/70">
                  {a.resumen}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={pedirRecomendacion}
          disabled={cargando}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {cargando ? "Analizando…" : "Recomendación con IA"}
        </button>
        <span className="text-xs text-white/40">
          La IA valorará a cuál conviene presentarse.
        </span>
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
        </p>
      )}

      {comparativa && (
        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              Opción recomendada
            </p>
            <p className="mt-1 text-base font-semibold">
              {comparativa.mejorOpcion}
            </p>
            <p className="mt-2 text-sm text-white/80">
              {comparativa.justificacion}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Ranking
            </h3>
            <ol className="space-y-2">
              {[...comparativa.ranking]
                .sort((a, b) => a.posicion - b.posicion)
                .map((r, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                  >
                    <p className="text-sm font-medium text-white/90">
                      <span className="mr-2 font-mono text-accent">
                        #{r.posicion}
                      </span>
                      {r.titulo}
                    </p>
                    <p className="mt-1 text-xs text-white/60">{r.valoracion}</p>
                  </li>
                ))}
            </ol>
          </div>

          {comparativa.factoresClave.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                Factores clave
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-white/85">
                {comparativa.factoresClave.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
