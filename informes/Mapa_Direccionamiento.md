# Mapa de Direccionamiento a Marca del Anexo Técnico
## Licitación Centro de Datos SEP 2026‑2027

**Qué es.** Barrido de todo el Anexo Técnico buscando cláusulas con "huella de marca": especificaciones redactadas con terminología, patentes o cifras propietarias que un solo fabricante cumple. Verificado contra datasheets oficiales. Clasificación: 🟠 **mono‑fabricante encubierto (grave)** · 🟡 **evitable / barrera / nombrado** · 🟢 **limpio o legado justificado**.

## Mapa completo (por gravedad)

| # | Componente | Fabricante al que apunta | Grav. | Mono/Varios | Confianza | Tell principal |
|---|---|---|:--:|---|---|---|
| 1 | Switches LAN (Core/Leaf) | **Huawei CloudEngine** | 🟠 | Mono (encubierto) | ~95% | NetStream (protocolo Huawei) + **GB4943** (norma china) + BDIF/16M tenants |
| 2 | SAN productivo | **Huawei OceanStor Dorado 18000** | 🟠 | Mono (Dell 8/9) | Alta | 16 controladoras simétricas + S3 en arreglo unificado |
| 3 | Respaldo a disco | **Huawei OceanProtect X3000** | 🟠 | Mono | Alta | "6.2 TB/h físico / 18.5 TB/h lógico" (cifras del datasheet) |
| 4 | Firewall/NGFW/IPS/Sandbox | **Palo Alto Networks** | 🟠 | Mono | Muy alta | App‑ID, User‑ID, WildFire, ZTNA 2.0 (marcas/patentes) |
| 5 | Antiransomware/EDR | **Palo Alto Cortex XDR** | 🟠 | Mono | Muy alta | MITRE Turla 2023 "19 pasos, 0 delayed, 100%" (solo Cortex) |
| 6 | DNS / DDI | **Infoblox** | 🟠 | Mono | Muy alta | **ThreatAdapt** (marca), DFP, RPZ, ≥25 fuentes/≥70 categorías |
| 7 | SIEM / Correlacionador | **McAfee / Trellix ESM (NitroEDB)** | 🟠 | Mono de facto | Alta | "BD no genérica" + appliance + endpoint/IPS/sandbox "mismo fabricante" (DXL) |
| 8 | Firewall de BD (DBF) | **McAfee / Trellix DB Security** | 🟠 | Mono | Alta | System Tree, DVM, sin agente (+ contradicción interna "sí agentes") |
| 9 | Borrado seguro | **Blancco** | 🟠 | Mono de facto | Muy alta | "método **patentado** de SSD" (patente exclusiva) |
| 10 | ADC / Balanceo + WAF | **F5 (iRules/TCL)** + Fastly/Signal Sciences | 🟡 | Cuasi‑mono | Media‑alta | Scripting TCL con eventos cliente/servidor + taxonomía de señales NGWAF |
| 11 | Antivirus de servidores | **Trend Micro Deep Security** | 🟡 | Mono de facto | Alta | Agente **Solaris** + Docker + reputación "mismo fabricante" (validar inventario) |
| 12 | Administrador de ancho de banda | Appliance de OS propietario | 🟡 | Estructural | Baja‑media | "OS propietario, ni Windows ni Linux" + "Virtual Window Expansion" |
| 13 | Procesamiento SPARC | **Oracle** (Solaris/LDoms) | 🟡 | Mono (legado) | Alta | Término "UltraSPARC" + GHz/bus/núcleos exactos |
| 14 | Procesamiento RISC | **IBM Power / AIX** | 🟢 | Mono (legado) | Total | Parque instalado (PowerVM/HMC/AIX) — justificado |
| 15 | Virtualización | **VMware / Broadcom** | 🟡 | Mono (nombrado) | Total | "VMWARE" en el título + DRS/DPM/vMotion |
| 16 | Nube pública | **AWS + Azure** | 🟡 | Cierra a 2 | Alta | SKUs EC2 (c5/m5/c4) + taxonomía GuardDuty + "partner con nivel" |
| 17 | SIEM/mesa: WSO2 | **WSO2** | 🟢 | Mono (legado) | Total | Nombrado; activo preexistente de la SEP |
| 18 | Monitoreo BD | **Oracle OEM** | 🟢 | Mono (legado) | Total | Nombrado; licencia ya propiedad de la SEP |
| 19 | Mesa de servicios | Guiño a **Ivanti** | 🟡 | Barrera | Media | "certificación de 11 prácticas ITIL 4" |
| 20 | Monitoreo general | ¿CA‑UIM / ScienceLogic? | 🟡 | Débil | Baja | "arquitectura de probe", "plataforma unificada", "Corba" |
| 21 | Certificados SSL | Sin marca | 🟡 | — | Alta (defecto) | Pide EV **+** wildcard (técnicamente imposible) + "barra verde" obsoleta |
| 22 | Coubicación | TIER / ICREA (estándares) | 🟢 | Varios operadores | Alta | Limpio — sin huella de marca |

## El patrón: un "traje a la medida" multi‑fabricante

Nueve componentes 🟠 forman un **stack coherente de un integrador**:
**Huawei** (almacenamiento + red) · **Palo Alto** (firewall + EDR) · **Infoblox** (DNS) · **McAfee/Trellix** (SIEM + firewall de BD) · **Blancco** (borrado) — más **Trend Micro** (AV), **F5** (balanceo), **VMware**, **Commvault**, **WSO2** y **AWS/Azure**.

**Conclusión:** el Anexo Técnico **no describe requisitos funcionales neutrales, sino una arquitectura de referencia concreta** — casi con certeza la de un competidor que ya tiene ese stack preintegrado y participó (directa o indirectamente) en la elaboración del Anexo. **Hay un favorito.** En una adjudicación **binaria a precio más bajo**, un consorcio ajeno arranca en **desventaja estructural**: tendría que cotizar exactamente ese stack (sin margen para optimizar por precio) y aun así competir contra quien lo conoce mejor.

## Lectura de GO / NO‑GO

| Escenario | Implicación |
|---|---|
| **La SEP corrige el Anexo en la junta** (acepta equivalentes funcionales) | Se abre la cancha → **GO** con opción real de competir por precio |
| **La SEP mantiene las cláusulas de marca** | Traje a la medida confirmado → **NO‑GO** o **inconformidad** (art. 29/40 LAASSP) |
| **Entrar igualando el stack sin pelear el pliego** | Alto costo, sin ventaja de precio, detrás del favorito → **no recomendado** |

**Recomendación:** **condicionar el GO al resultado de la junta de aclaraciones.** Presentar un paquete fuerte de preguntas de saneamiento (reescribir por función + "o equivalente" las 9 cláusulas 🟠). **Medir cuántas acepta la SEP:**
- Si acepta la mayoría → el pliego se vuelve competible → **GO**.
- Si rechaza casi todas → confirmación de direccionamiento → **NO‑GO** o base sólida para **inconformidad** ante la SFP / Órgano Interno de Control.

## Prioridad de impugnación (las más sólidas y de mayor monto)

1. **Switches Huawei (GB4943 + NetStream)** — el direccionamiento encubierto más claro y de alto monto; norma **china** exigida a un equipo de gobierno federal mexicano.
2. **Almacenamiento Huawei (SAN + respaldo)** — cifras de datasheet (6.2/18.5 TB/h) + "16 controladoras".
3. **Palo Alto (firewall + EDR)** — marcas registradas/patentadas (App‑ID/WildFire/ZTNA 2.0) + resultado MITRE exacto.
4. **Infoblox (ThreatAdapt)** y **Trellix (System Tree/DVM + contradicción de agentes)** — marcas propietarias y una contradicción interna demostrable.
5. **Blancco** — "método patentado" solo lo acredita el titular de la patente.

Todas se neutralizan pidiendo: *"reescribir por capacidad funcional y aceptar cualquier fabricante o equivalente que la cumpla; sustituir cifras/nomenclatura propietaria por mínimos justificados"*, invocando el **art. 40 de la LAASSP** (prohibición de marcas salvo justificación técnica documentada) y el **art. 29 fr. VI**.

*Análisis de fuentes públicas y datasheets (jul 2026); los sitios de fabricante dieron 403 en varios casos, por lo que la evidencia proviene de contenido de datasheet extraído por búsqueda. Para un escrito formal (inconformidad), descargar y adjuntar los datasheets citados desde una red sin restricción. Distinguir el legado justificado (IBM/Oracle/WSO2/OEM, por parque instalado de la SEP) del direccionamiento evitable (Huawei, Palo Alto, Infoblox, Trellix, Blancco).*
