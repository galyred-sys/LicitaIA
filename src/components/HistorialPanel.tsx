import type { EntradaHistorial } from "@/lib/historial";

const MAX_COMPARAR = 4;

function formatearFecha(ms: number): string {
  return new Date(ms).toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function HistorialPanel({
  entradas,
  seleccionados,
  onSeleccionar,
  onAlternarSeleccion,
  onComparar,
  onEliminar,
  onLimpiar,
}: {
  entradas: EntradaHistorial[];
  seleccionados: string[];
  onSeleccionar: (entrada: EntradaHistorial) => void;
  onAlternarSeleccion: (id: string) => void;
  onComparar: () => void;
  onEliminar: (id: string) => void;
  onLimpiar: () => void;
}) {
  if (entradas.length === 0) return null;

  const nSel = seleccionados.length;
  const limiteAlcanzado = nSel >= MAX_COMPARAR;

  return (
    <section className="mt-12">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
          Historial ({entradas.length})
        </h2>
        <button
          onClick={onLimpiar}
          className="text-xs text-white/40 transition hover:text-red-300"
        >
          Vaciar historial
        </button>
      </div>

      {entradas.length >= 2 && (
        <div className="mb-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2">
          <span className="text-xs text-white/50">
            Marca 2–{MAX_COMPARAR} licitaciones para compararlas ({nSel}{" "}
            seleccionadas)
          </span>
          <button
            onClick={onComparar}
            disabled={nSel < 2}
            className="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Comparar ({nSel})
          </button>
        </div>
      )}

      <ul className="space-y-2">
        {entradas.map((e) => {
          const marcado = seleccionados.includes(e.id);
          return (
            <li
              key={e.id}
              className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-accent/40"
            >
              <input
                type="checkbox"
                checked={marcado}
                onChange={() => onAlternarSeleccion(e.id)}
                disabled={!marcado && limiteAlcanzado}
                aria-label={`Seleccionar «${e.analisis.titulo}» para comparar`}
                className="h-4 w-4 shrink-0 accent-accent disabled:opacity-30"
              />
              <button
                onClick={() => onSeleccionar(e)}
                className="min-w-0 flex-1 text-left"
              >
                <p className="truncate text-sm font-medium text-white/90">
                  {e.analisis.titulo}
                </p>
                <p className="mt-0.5 text-xs text-white/40">
                  {formatearFecha(e.fecha)} · {e.analisis.organoContratante}
                </p>
              </button>
              <button
                onClick={() => onEliminar(e.id)}
                aria-label="Eliminar del historial"
                title="Eliminar"
                className="shrink-0 rounded-md px-2 py-1 text-xs text-white/30 opacity-0 transition hover:bg-red-500/10 hover:text-red-300 group-hover:opacity-100"
              >
                ✕
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
