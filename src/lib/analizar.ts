import type Anthropic from "@anthropic-ai/sdk";
import { getAnthropicClient, MODELO_POR_DEFECTO } from "./anthropic";
import { AnalisisLicitacion, AnalisisLicitacionSchema } from "./tipos";

const SYSTEM_PROMPT = `Eres un experto en contratación pública española y en la Ley 9/2017 de Contratos del Sector Público.
Analizas pliegos y anuncios de licitación y extraes la información clave de forma precisa y objetiva.
Si un dato no aparece en el texto, indícalo explícitamente con "No especificado" en lugar de inventarlo.
Presta especial atención a cláusulas restrictivas, plazos ajustados y requisitos de solvencia elevados,
que pueden suponer riesgos para un licitador.`;

/** Definición de herramienta para forzar una salida estructurada y validable. */
const HERRAMIENTA = {
  name: "registrar_analisis_licitacion",
  description: "Registra el análisis estructurado de una licitación.",
  input_schema: {
    type: "object" as const,
    properties: {
      titulo: { type: "string" },
      organoContratante: { type: "string" },
      tipoContrato: { type: "string" },
      presupuestoBase: { type: "string" },
      plazoEjecucion: { type: "string" },
      fechaLimitePresentacion: { type: "string" },
      criteriosAdjudicacion: {
        type: "array",
        items: {
          type: "object",
          properties: {
            criterio: { type: "string" },
            peso: { type: "string" },
          },
          required: ["criterio", "peso"],
        },
      },
      requisitosSolvencia: { type: "array", items: { type: "string" } },
      garantias: { type: "string" },
      riesgos: { type: "array", items: { type: "string" } },
      resumen: { type: "string" },
    },
    required: [
      "titulo",
      "organoContratante",
      "tipoContrato",
      "presupuestoBase",
      "plazoEjecucion",
      "fechaLimitePresentacion",
      "criteriosAdjudicacion",
      "requisitosSolvencia",
      "garantias",
      "riesgos",
      "resumen",
    ],
  },
};

/**
 * Analiza el texto de una licitación con Claude y devuelve un análisis
 * estructurado y validado.
 */
export async function analizarLicitacion(
  texto: string,
): Promise<AnalisisLicitacion> {
  const client = getAnthropicClient();

  const respuesta = await client.messages.create({
    model: MODELO_POR_DEFECTO,
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    tools: [HERRAMIENTA],
    tool_choice: { type: "tool", name: HERRAMIENTA.name },
    messages: [
      {
        role: "user",
        content: `Analiza la siguiente licitación y registra el análisis estructurado:\n\n${texto}`,
      },
    ],
  });

  const bloqueHerramienta = respuesta.content.find(
    (bloque): bloque is Anthropic.ToolUseBlock => bloque.type === "tool_use",
  );

  if (!bloqueHerramienta) {
    throw new Error("El modelo no devolvió un análisis estructurado.");
  }

  return AnalisisLicitacionSchema.parse(bloqueHerramienta.input);
}
