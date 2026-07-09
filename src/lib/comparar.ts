import type Anthropic from "@anthropic-ai/sdk";
import { getAnthropicClient, MODELO_POR_DEFECTO } from "./anthropic";
import {
  AnalisisLicitacion,
  Comparativa,
  ComparativaSchema,
} from "./tipos";

const SYSTEM_PROMPT = `Eres un experto en contratación pública española que asesora a empresas
sobre a qué licitaciones presentarse cuando tienen recursos limitados.
Comparas varias licitaciones ya analizadas y recomiendas cuál priorizar,
considerando presupuesto, plazos, dificultad de los requisitos de solvencia,
riesgos detectados y atractivo de los criterios de adjudicación.
Sé objetivo y justifica cada valoración con datos concretos de cada licitación.
Usa el título EXACTO de cada licitación tal como aparece en los datos.`;

const HERRAMIENTA = {
  name: "registrar_comparativa",
  description: "Registra la comparativa estructurada de las licitaciones.",
  input_schema: {
    type: "object" as const,
    properties: {
      mejorOpcion: { type: "string" },
      justificacion: { type: "string" },
      ranking: {
        type: "array",
        items: {
          type: "object",
          properties: {
            titulo: { type: "string" },
            posicion: { type: "number" },
            valoracion: { type: "string" },
          },
          required: ["titulo", "posicion", "valoracion"],
        },
      },
      factoresClave: { type: "array", items: { type: "string" } },
    },
    required: ["mejorOpcion", "justificacion", "ranking", "factoresClave"],
  },
};

/**
 * Compara varias licitaciones ya analizadas y devuelve una recomendación
 * estructurada de a cuál presentarse.
 */
export async function compararLicitaciones(
  analisis: AnalisisLicitacion[],
): Promise<Comparativa> {
  const client = getAnthropicClient();

  const resumenLicitaciones = analisis
    .map((a, i) => `Licitación ${i + 1}:\n${JSON.stringify(a, null, 2)}`)
    .join("\n\n");

  const respuesta = await client.messages.create({
    model: MODELO_POR_DEFECTO,
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    tools: [HERRAMIENTA],
    tool_choice: { type: "tool", name: HERRAMIENTA.name },
    messages: [
      {
        role: "user",
        content: `Compara estas ${analisis.length} licitaciones y registra la comparativa:\n\n${resumenLicitaciones}`,
      },
    ],
  });

  const bloqueHerramienta = respuesta.content.find(
    (bloque): bloque is Anthropic.ToolUseBlock => bloque.type === "tool_use",
  );

  if (!bloqueHerramienta) {
    throw new Error("El modelo no devolvió una comparativa estructurada.");
  }

  return ComparativaSchema.parse(bloqueHerramienta.input);
}
