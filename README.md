# LicitaIA

Análisis de **licitaciones y contratación pública** con inteligencia artificial.

Pega el texto de un pliego o anuncio de licitación y LicitaIA extrae, mediante
la API de Claude, la información clave: objeto del contrato, órgano contratante,
presupuesto, plazos, criterios de adjudicación, requisitos de solvencia,
garantías y posibles riesgos.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **API de Claude** (`@anthropic-ai/sdk`) con salida estructurada validada con **Zod**

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local y añade tu ANTHROPIC_API_KEY

# 3. Arrancar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable            | Descripción                                  | Por defecto        |
| ------------------- | -------------------------------------------- | ------------------ |
| `ANTHROPIC_API_KEY` | Clave de la API de Claude (obligatoria)      | —                  |
| `ANTHROPIC_MODEL`   | Modelo de Claude a utilizar                  | `claude-sonnet-5`  |

## Estructura

```
src/
├── app/
│   ├── api/analizar/route.ts   # Endpoint POST que analiza el texto
│   ├── layout.tsx
│   ├── page.tsx                # Interfaz principal
│   └── globals.css
├── components/
│   └── ResultadoAnalisis.tsx   # Render del análisis estructurado
└── lib/
    ├── anthropic.ts            # Cliente de la API de Claude
    ├── analizar.ts             # Lógica de análisis (tool use)
    └── tipos.ts                # Esquema Zod y tipos
```

## Scripts

| Comando             | Acción                        |
| ------------------- | ----------------------------- |
| `npm run dev`       | Servidor de desarrollo        |
| `npm run build`     | Compilación de producción     |
| `npm run start`     | Servidor de producción        |
| `npm run lint`      | Linter                        |
| `npm run typecheck` | Comprobación de tipos         |

## Aviso

El análisis es orientativo y generado por IA. **Verifica siempre** los datos con
los pliegos oficiales antes de tomar decisiones.
