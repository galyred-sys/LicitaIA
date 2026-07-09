import { NextRequest, NextResponse } from "next/server";
import { compararLicitaciones } from "@/lib/comparar";
import { AnalisisLicitacionSchema } from "@/lib/tipos";
import { z } from "zod";

export const runtime = "nodejs";
export const maxDuration = 60;

const CuerpoSchema = z.object({
  analisis: z.array(AnalisisLicitacionSchema).min(2).max(4),
});

export async function POST(req: NextRequest) {
  let datos: unknown;
  try {
    datos = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Cuerpo de la petición inválido." },
      { status: 400 },
    );
  }

  const parseado = CuerpoSchema.safeParse(datos);
  if (!parseado.success) {
    return NextResponse.json(
      { error: "Selecciona entre 2 y 4 licitaciones válidas para comparar." },
      { status: 400 },
    );
  }

  try {
    const comparativa = await compararLicitaciones(parseado.data.analisis);
    return NextResponse.json({ comparativa });
  } catch (error) {
    const mensaje =
      error instanceof Error ? error.message : "Error inesperado al comparar.";
    console.error("[LicitaIA] Error al comparar licitaciones:", error);
    return NextResponse.json({ error: mensaje }, { status: 500 });
  }
}
