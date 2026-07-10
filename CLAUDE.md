# CLAUDE.md — Guía del proyecto LicitaIA

Este archivo lo lee Claude Code automáticamente al inicio de cada sesión en este repositorio.

## Contexto del proyecto

**LicitaIA** apoya el análisis de **licitaciones y contratación pública en México** (con foco en TIC / centros de datos). El trabajo tiene dos vertientes:
1. La **app** (Next.js 16 + TypeScript + Tailwind) en `src/`, que analiza pliegos con la API de Claude.
2. Los **análisis de licitaciones reales** en `informes/`, que son el entregable de consultoría (dossier, matriz de cumplimiento, costeo, aliados, direccionamiento, etc.).

Idioma de trabajo y entregables: **español**.

---

## ⭐ Metodología OBLIGATORIA para revisar una licitación

Siempre que se me pida analizar, revisar o preparar la oferta de una licitación, el análisis **debe incluir SIEMPRE**, además de lo técnico y comercial, un **ANÁLISIS DE DIRECCIONAMIENTO A MARCA ("huella de fabricante")**. Este paso no es opcional.

### 1. Análisis de direccionamiento a marca (SIEMPRE)
Barrer **todo** el Anexo Técnico buscando cláusulas escritas con terminología, patentes o cifras propietarias que solo un fabricante cumple. Para cada componente relevante (almacenamiento, red, cómputo, seguridad —firewall/IPS/EDR/WAF/DBF/DNS/balanceo/antivirus/SIEM/borrado—, nube, virtualización, monitoreo, mesa de servicios, etc.):
- Identificar el **tell** (p. ej. nombres de marca como App‑ID/WildFire/ZTNA 2.0=Palo Alto, ThreatAdapt=Infoblox, "método patentado de SSD"=Blancco, NetStream/GB4943=Huawei, cifras exactas de datasheet como "6.2/18.5 TB/h").
- Determinar el **fabricante/producto** al que apunta y **verificarlo con datasheets** (WebSearch/WebFetch).
- Clasificar: **🟠 mono‑fabricante encubierto (grave)** · **🟡 evitable/barrera/nombrado** · **🟢 limpio o legado justificado**.
- **Distinguir** el *direccionamiento evitable* del *legado justificado* (marca inevitable porque la convocante ya opera esa tecnología —p. ej. AIX/Solaris/WSO2/OEM—; validar contra el inventario del propio anexo).
- Proponer una **reformulación neutral por función** ("… o equivalente") para la junta de aclaraciones.
- Fundamentar en la ley aplicable (en México: **art. 40 LAASSP** —prohibición de marcas salvo justificación técnica— y **art. 29 fr. VI**).
- Cerrar con: ¿el pliego es un **"traje a la medida"**? ¿hay un **favorito**? y una **lectura de go/no‑go** condicionada a la junta de aclaraciones.

Entregar como tabla (componente → fabricante → gravedad → mono/varios → confianza → tell → reformulación), como el `informes/Mapa_Direccionamiento.md`.

### 2. Componentes estándar del análisis completo
Salvo que el usuario pida algo más acotado, una revisión completa incluye:
- **Análisis técnico a detalle** (objeto, volumetría, arquitectura por dominio, retos).
- **Marco comercial y de calificación**: criterio de adjudicación (¿binario/puntos?), vigencia, SLAs/penas, garantías, certificaciones y **plantilla** exigidas, requisitos de experiencia/participación conjunta.
- **Arquitectura de mínimo precio** (clave si la adjudicación es binaria a precio más bajo) + estimación de **costos** (ROM, con supuestos explícitos; nunca presentar como cotización).
- **Direccionamiento a marca** (punto 1, SIEMPRE).
- **Matriz de cumplimiento**, **checklist de documentos** para no ser desechado.
- **Mapa de proveedores/consorcio**, **huecos** y **candidatos reales** (verificados), **due diligence** de aliados.
- **Preguntas para la junta de aclaraciones** (incluyendo las de saneamiento del direccionamiento).
- **Registro de aclaraciones** (citas textuales del anexo, con sección/apartado).

### 3. Principios de rigor
- **Verificar con fuentes** (datasheets, LAASSP, Compranet/ComprasMX); citar. No afirmar marca/fabricante sin evidencia.
- **Honestidad de confianza**: distinguir *confirmado* de *probable*; señalar cuando la evidencia sea de snippet y no del PDF original.
- **No es asesoría legal**: para impugnaciones/inconformidades, recomendar abogado de contratación pública.
- Cotejar siempre contra la **convocatoria oficial** (el Anexo Técnico no es el único documento).

---

## Entregables y formato

- Los análisis viven en `informes/` como **Markdown** (editable) + **PDF** (con el conversor `convert.py` del scratchpad, estilo guinda) y, cuando aplique, **CSV** para Excel.
- Mantener el **dossier único** (`informes/00_Dossier_*.pdf`) y su índice/`README.md` actualizados al añadir secciones.
- Datos numéricos/costos siempre etiquetados como **orientativos** hasta tener cotizaciones reales.

## Flujo de trabajo git

- Desarrollar en la rama designada; **commit + push** al terminar cada entregable, con mensajes claros en español.
- No incluir `node_modules`, `.env*` ni datos confidenciales en commits.

## La app (Next.js)

- Verificar cambios con `npm run typecheck`, `npm run lint` y `npm run build` antes de commitear.
- `next lint` fue removido en Next 16; el lint usa `eslint .`.
