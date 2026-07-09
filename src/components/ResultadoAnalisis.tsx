import type { AnalisisLicitacion } from "@/lib/tipos";

function Campo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <dt className="text-xs font-medium uppercase tracking-wide text-white/50">
        {etiqueta}
      </dt>
      <dd className="mt-1 text-sm text-white/90">{valor}</dd>
    </div>
  );
}

export function ResultadoAnalisis({ analisis }: { analisis: AnalisisLicitacion }) {
  return (
    <section className="mt-8 space-y-6">
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
        <h2 className="text-lg font-semibold">{analisis.titulo}</h2>
        <p className="mt-2 text-sm text-white/80">{analisis.resumen}</p>
      </div>

      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Campo etiqueta="Órgano contratante" valor={analisis.organoContratante} />
        <Campo etiqueta="Tipo de contrato" valor={analisis.tipoContrato} />
        <Campo etiqueta="Presupuesto base" valor={analisis.presupuestoBase} />
        <Campo etiqueta="Plazo de ejecución" valor={analisis.plazoEjecucion} />
        <Campo
          etiqueta="Fecha límite de presentación"
          valor={analisis.fechaLimitePresentacion}
        />
        <Campo etiqueta="Garantías" valor={analisis.garantias} />
      </dl>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Criterios de adjudicación
          </h3>
          <ul className="space-y-2">
            {analisis.criteriosAdjudicacion.map((c, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm"
              >
                <span className="text-white/90">{c.criterio}</span>
                <span className="ml-3 shrink-0 font-mono text-accent">{c.peso}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
            Requisitos de solvencia
          </h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-white/85">
            {analisis.requisitosSolvencia.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {analisis.riesgos.length > 0 && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-300">
            ⚠ Riesgos y puntos de atención
          </h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-amber-100/90">
            {analisis.riesgos.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
