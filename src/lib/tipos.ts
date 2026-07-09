import { z } from "zod";

/**
 * Esquema del análisis estructurado que devuelve Claude para una licitación.
 * Se usa tanto para validar la salida del modelo como para tipar el frontend.
 */
export const AnalisisLicitacionSchema = z.object({
  titulo: z.string().describe("Título u objeto del contrato"),
  organoContratante: z
    .string()
    .describe("Órgano o entidad que convoca la licitación"),
  tipoContrato: z
    .string()
    .describe("Tipo de contrato: obras, servicios, suministros, etc."),
  presupuestoBase: z
    .string()
    .describe("Presupuesto base de licitación (con IVA si se indica)"),
  plazoEjecucion: z.string().describe("Plazo de ejecución del contrato"),
  fechaLimitePresentacion: z
    .string()
    .describe("Fecha y hora límite de presentación de ofertas"),
  criteriosAdjudicacion: z
    .array(
      z.object({
        criterio: z.string(),
        peso: z.string().describe("Puntuación o porcentaje del criterio"),
      }),
    )
    .describe("Criterios de adjudicación y su ponderación"),
  requisitosSolvencia: z
    .array(z.string())
    .describe("Requisitos de solvencia técnica y económica"),
  garantias: z
    .string()
    .describe("Garantías provisionales y definitivas exigidas"),
  riesgos: z
    .array(z.string())
    .describe("Riesgos, cláusulas restrictivas o puntos de atención detectados"),
  resumen: z
    .string()
    .describe("Resumen ejecutivo en 2-4 frases para decidir si presentarse"),
});

export type AnalisisLicitacion = z.infer<typeof AnalisisLicitacionSchema>;
