import type { AnalisisLicitacion } from "./tipos";

/** Una entrada del historial: el análisis más metadatos. */
export interface EntradaHistorial {
  id: string;
  fecha: number; // timestamp en milisegundos
  analisis: AnalisisLicitacion;
}

const CLAVE = "licitaia:historial";
const MAX_ENTRADAS = 50;

// Referencia estable para el snapshot en servidor (evita bucles en
// useSyncExternalStore, que compara referencias).
const VACIO: EntradaHistorial[] = [];

// Caché del snapshot en cliente: se invalida al mutar para forzar recarga.
let cache: EntradaHistorial[] | null = null;
const listeners = new Set<() => void>();

function disponible(): boolean {
  return typeof window !== "undefined" && !!window.localStorage;
}

function cargar(): EntradaHistorial[] {
  if (!disponible()) return VACIO;
  try {
    const bruto = window.localStorage.getItem(CLAVE);
    if (!bruto) return VACIO;
    const datos = JSON.parse(bruto);
    return Array.isArray(datos) ? (datos as EntradaHistorial[]) : VACIO;
  } catch {
    return VACIO;
  }
}

function escribir(entradas: EntradaHistorial[]): void {
  if (disponible()) {
    try {
      window.localStorage.setItem(CLAVE, JSON.stringify(entradas));
    } catch {
      // Cuota superada u otro error: se ignora silenciosamente.
    }
  }
  cache = entradas;
  for (const l of listeners) l();
}

/** Suscripción para useSyncExternalStore (incluye sincronización entre pestañas). */
export function subscribeHistorial(callback: () => void): () => void {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === CLAVE) {
      cache = null;
      callback();
    }
  };
  if (disponible()) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    if (disponible()) window.removeEventListener("storage", onStorage);
  };
}

/** Snapshot en cliente: devuelve una referencia estable mientras no haya cambios. */
export function getSnapshotHistorial(): EntradaHistorial[] {
  if (cache === null) cache = cargar();
  return cache;
}

/** Snapshot en servidor (SSR): siempre vacío y con referencia estable. */
export function getServerSnapshotHistorial(): EntradaHistorial[] {
  return VACIO;
}

/** Guarda un análisis nuevo al principio del historial y lo devuelve. */
export function guardarEnHistorial(
  analisis: AnalisisLicitacion,
): EntradaHistorial {
  const entrada: EntradaHistorial = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.round(Math.random() * 1e9)}`,
    fecha: Date.now(),
    analisis,
  };
  escribir([entrada, ...getSnapshotHistorial()].slice(0, MAX_ENTRADAS));
  return entrada;
}

/** Elimina una entrada por su id. */
export function eliminarDelHistorial(id: string): void {
  escribir(getSnapshotHistorial().filter((e) => e.id !== id));
}

/** Vacía por completo el historial. */
export function limpiarHistorial(): void {
  escribir([]);
}
