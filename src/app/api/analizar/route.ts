import { NextRequest, NextResponse } from "next/server";
import { analizarLicitacion } from "@/lib/analizar";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  let texto: unknown;
  try {
    const body = await req.json();
    texto = body?.texto;
  } catch {
    return NextResponse.json(
      { error: "Cuerpo de la petición inválido. Se espera JSON con { texto }." },
      { status: 400 },
    );
  }

  if (typeof texto !== "string" || texto.trim().length < 50) {
    return NextResponse.json(
      { error: "Proporciona el texto de la licitación (mínimo 50 caracteres)." },
      { status: 400 },
    );
  }

  try {
    const analisis = await analizarLicitacion(texto);
    return NextResponse.json({ analisis });
  } catch (error) {
    const mensaje =
      error instanceof Error ? error.message : "Error inesperado al analizar.";
    console.error("[LicitaIA] Error al analizar licitación:", error);
    return NextResponse.json({ error: mensaje }, { status: 500 });
  }
}
