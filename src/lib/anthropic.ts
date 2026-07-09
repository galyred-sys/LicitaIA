import Anthropic from "@anthropic-ai/sdk";

let client: Anthropic | null = null;

/**
 * Devuelve un cliente de Anthropic reutilizable.
 * Lanza un error claro si falta la clave de API para facilitar la depuración.
 */
export function getAnthropicClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Falta la variable de entorno ANTHROPIC_API_KEY. Copia .env.example a .env.local y añade tu clave.",
    );
  }
  if (!client) {
    client = new Anthropic({ apiKey });
  }
  return client;
}

/** Modelo por defecto: configurable vía ANTHROPIC_MODEL. */
export const MODELO_POR_DEFECTO = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-5";
