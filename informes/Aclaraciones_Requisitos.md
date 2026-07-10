# Registro de Aclaraciones de Requisitos
## Licitación Centro de Datos SEP 2026‑2027

Registro de interpretaciones confirmadas contra el texto del Anexo Técnico. Cada entrada cita la sección y el texto literal, para respaldar decisiones de la propuesta.

---

## AC‑01 · Experiencia de ≥5 años y su aplicación en participación conjunta

**Pregunta.** ¿Dónde se exige que la empresa participante tenga más de 5 años de experiencia? En consorcio, ¿todas las empresas deben tener ≥5 años?

**Ubicación en el Anexo Técnico.** Sección **H.2 "Certificaciones y capacidades técnicas del licitante"**, apartado **"Currículum de 'EL LICITANTE'"**, bloque **"Experiencia profesional"** (parte final del Anexo, antes de la sección I).
*(Nota: el `.docx` no conserva numeración de página fiable al extraer el texto; localizar con Ctrl+F por las frases citadas.)*

**Texto literal citado.**
> "Experiencia profesional — **Años de operación (5 años)**"

> "**En participación conjunta la empresa que se identifique como la representante legal debe tener por lo menos 5 años de experiencia.**"

**Interpretación (confirmada por el texto).**
- El requisito de **≥5 años** aplica a **EL LICITANTE**.
- En **participación conjunta (consorcio)**, la exigencia de ≥5 años recae **únicamente sobre la empresa designada como representante legal**. **Las demás integrantes NO** están obligadas a acreditar 5 años por esta cláusula.

**Implicación estratégica.**
- Designar como **representante legal** a una empresa con trayectoria suficiente (p. ej. **Ikusi / Micronet de México** —décadas—, o **B Drive IT** —~9 años—).
- Se pueden **sumar socios más nuevos o de nicho** (p. ej. iTechDev u otros especialistas) sin que su antigüedad descalifique al consorcio.

**Salvedades (verificar).**
1. Esto proviene del **Anexo Técnico**; la **CONVOCATORIA** (documento aparte, aún no disponible) podría añadir requisitos propios sobre participación conjunta (Art. 34 LAASSP). **Confirmar cuando se publique.**
2. Distinguir dos requisitos diferentes:
   - **"Años de operación (5 años)"** = antigüedad de la empresa (solo el representante en consorcio).
   - **Experiencia en contratos similares** (contratos + cartas de satisfacción, secciones E / I.8) = la puede aportar **cualquier** integrante del consorcio, no solo el representante.

**Estado:** confirmado contra el Anexo Técnico · pendiente de cotejo con la convocatoria.

---

## AC‑02 · Sección C.2.2.4 (Almacenamiento): direccionamiento a marca (Huawei)

**Pregunta.** Un vendedor de Huawei afirma que "solo Huawei" puede prestar la parte de almacenamiento (SAN + respaldo) de la licitación. ¿Es cierto, o hay otros proveedores?

**Verificación (contra datasheets oficiales).**

**a) SAN productivo.** Tal como está redactada, la especificación la cumple de forma literal (9/9) **únicamente Huawei OceanStor Dorado 18000**. La razón son dos cláusulas combinadas:
- **Punto 7:** "≥16 controladoras físicas simétricas activo‑activo, **no ALUA**". El umbral exacto de **16** elimina a Hitachi VSP 5600 (12), HPE Alletra MP (4), Infinidat (3), Pure y IBM FlashSystem (2), y a NetApp AFF (usa ALUA).
- **Punto 8:** servir **S3** desde el mismo arreglo unificado SAN+NAS.
- **Dell PowerMax 8500** cumple **8 de 9** (16 controladoras simétricas sin ALUA, NVMe E2E, caché >2 TB): solo falla en "S3 servido nativamente". Es decir, **una corrección menor lo habilitaría**.

**b) Respaldo a disco.** Las cifras **"ancho de banda físico hasta 6.2 TB/hora"** y **"lógico hasta 18.5 TB/hora"** son la **huella textual del datasheet del Huawei OceanProtect X3000**. A ello se suman "caché ≥1 TB en DIMM, sin caché de segundo nivel" y "2 controladoras simétricas activo‑activo, no ALUA", que son argumentos de marketing de Huawei. **Ningún competidor cumple limpio** (Dell PowerProtect DD = activo/standby; Infinidat = caché SSD; ExaGrid/StoreOnce/Quantum = sin FC/bloque ni controladoras simétricas).

**Veredicto.** La afirmación del vendedor es, **tal como está redactado el pliego, prácticamente cierta — pero precisamente porque la especificación está escrita calcada sobre los datasheets de Huawei** (OceanStor Dorado 18000 + OceanProtect X3000). Es un caso de manual de **direccionamiento a marca**, contrario a los **artículos 29 fr. y 40 de la LAASSP** (las especificaciones no deben favorecer a un fabricante y deben permitir **equivalentes funcionales**). El propio encabezado de C.2.2.4 dice *"de carácter enunciativo más no limitativo"*, lo que refuerza el argumento de aceptar equivalentes.

**Implicaciones estratégicas.**
- **Riesgo:** de no corregirse, quedas atado a Huawei — precio no competitivo en fallo **binario** (el rival controla tu costo) y **riesgo geopolítico/regulatorio** para infraestructura de gobierno federal.
- **Inteligencia competitiva:** que **dos** sub‑especificaciones estén calcadas a Huawei sugiere que el Anexo fue moldeado por/para un competidor con solución Huawei → probable **favorito**. Es un factor de **go/no‑go**.

**Acciones recomendadas (junta de aclaraciones / inconformidad).**
1. Pedir que el punto 7 baje de "16" a **"≥8 controladoras físicas en activo‑activo simétrico"** (habilita Dell PowerMax; sigue exigiendo gama alta).
2. Pedir que el punto 8 acepte **"S3 nativo o vía nodo/gateway de objeto integrado"**.
3. Pedir que el ancho de banda de respaldo se exprese por **mínimos funcionales** (≥X TB/h + RTO/RPO), **no** por cifras puntuales de un modelo (6.2 / 18.5 TB/h).
4. Pedir **justificación técnica** de "prohibir ALUA" y "caché solo en DIMM sin 2º nivel" (restricciones que no aportan función y cierran el mercado a un fabricante).
5. Si no se corrige → base para **inconformidad** ante la SFP / Órgano Interno de Control por direccionamiento (art. 29/40 LAASSP).

**Caveat de evidencia.** La verificación se hizo con snippets de datasheet (los PDF de fabricante dieron 403 por política de red). Para un escrito formal, **descargar y adjuntar** los datasheets de Huawei OceanProtect X3000 y OceanStor Dorado 18000, y de Dell PowerMax 8500, desde una red sin restricción, para citar la tabla textual.

**Fuentes:** Huawei OceanProtect X3000 (6.2/18.5 TB/h) · Huawei OceanStor Dorado 18000 V6 (SmartMatrix 16 ctrl, block‑file‑object) · Dell PowerMax 8500 spec/PowerMax File (NFS/SMB, sin S3 servido) · Hitachi VSP 5600 (12 ctrl) · NetApp ASA/AFF (ASA SAN‑only / AFF ALUA).

**Estado:** verificado (confianza alta) · pendiente adjuntar datasheets para escrito formal.

---

*Documento de trabajo. Las citas corresponden al Anexo Técnico proporcionado; verificar contra la convocatoria oficial antes de tomar decisiones vinculantes.*
