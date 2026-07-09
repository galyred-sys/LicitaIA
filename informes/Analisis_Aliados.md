# Análisis de Aliados Potenciales
## B Drive IT · Ikusi (Micronet) · CIIMA — para la licitación Centro de Datos SEP 2026‑2027

**Objetivo.** Evaluar tres posibles aliados contra los requisitos del Anexo Técnico: qué puede cumplir cada uno, y **qué no cumple ninguno** para buscar socios adicionales. Basado en investigación de fuentes públicas (julio 2026); varios sitios propios bloquearon el acceso, así que lo **autodeclarado** se marca como tal y debe verificarse con documentos.

## ⚠ Tres advertencias que cambian el planteamiento

1. **"Ikusi + Micronet" es UNA sola empresa.** *Micronet de México, S.A. de C.V.* **es la razón social de Ikusi** en México (Ikusi adquirió y fusionó a Micronet en 2012). No suman dos padrones, ni dos data centers, ni dos juegos de certificaciones. *(Existe otra empresa homónima, "Grupo Micronet / Tasmicro", que es un distribuidor de ciberseguridad — no operador de datacenter. Confirma cuál es tu contraparte.)*
2. **"CIIMA" probablemente es "CIIME"** (Consultoría Integral en Informática de México). No existe una empresa TIC llamada exactamente "CIIMA". **Verifica la razón social/RFC exacto** de tu contacto.
3. **Banderas de riesgo (due diligence):** **B Drive IT fue descalificada en 2025** en la licitación de la CURP biométrica de SEGOB (requisitos casi idénticos) por deficiencias en **certificaciones de datacenter y documentación técnica**. **CIIME** tuvo un contrato con la **CFE rescindido en 2022** por incumplimiento. Ambos deben verificarse a fondo.

## Perfil breve de cada aliado

**B Drive IT** (bdrive.ai). Fundada 2016 (~9 años, cumple ≥5). 51–200 empleados; CDMX/QRO/MTY. Especialidad de marca: gestión y migración de datacenters, SOC/NOC, nube, ciberseguridad. Partners confirmados: **Oracle, IBM, Infoblox, Palo Alto, Extreme, Splunk, NetScout, Google**. Certificaciones ISO/TIER/ICREA **autodeclaradas** (sin verificación independiente). Riesgo: descalificación SEGOB‑CURP 2025.

**Ikusi (Micronet de México).** Grupo grande (>800 profesionales), décadas de operación. **Data center propio ICREA IV en Monterrey**, **SOC/CSIRT certificado** (FIRST/CERT), ISO 9001/27001/22301/27018/20000 (AENOR), **Cisco Gold** (15 años), **AWS Partner**. Gobierno: CFE, INFOTEC, SENASICA. Es el perfil **más sólido** de los tres para el core del servicio.

**CIIME (¿CIIMA?).** ~16 años, ~90 empleados; integrador/revendedor (Oracle partner; Lenovo/Dell/H3C/Veritas). Gobierno: INFOTEC, CENACE, INEEL (no SEP). **No opera datacenter certificado**, sin ISO/ICREA/SOC públicos. Riesgo: rescisión CFE 2022.

## Matriz comparativa (🟢 Sí · 🟡 Parcial/verificar · 🟠 No / sin evidencia)

| Requisito del Anexo | B Drive IT | Ikusi (Micronet) | CIIME (¿CIIMA?) |
|---|---|---|---|
| Datacenter Tier III/ICREA IV — sede Principal | 🟡 declarado (no acreditó en SEGOB) | 🟢 ICREA IV propio (MTY) | 🟠 no (integrador) |
| 2ª sede DRP certificada (≥50 km) | 🟡 declarado | 🟡 solo 1 sede evidenciada | 🟠 no |
| ISO 9001 / 20000‑1 / 27001 / 27017 / 27018 | 🟡 autodeclaradas | 🟢 la mayoría (AENOR) | 🟠 sin evidencia |
| SOC 24×7 con ISO 27001 | 🟢 SOC/NOC | 🟢 C‑SOC + CSIRT | 🟠 no |
| Seguridad (WAF/DBF/NGFW/IPS/DNS/EDR/AV) | 🟡 Palo Alto + Infoblox; resto no | 🟡 SOC fuerte; marcas sin evidencia | 🟠 sin evidencia |
| Red LAN spine‑leaf / enlaces | 🟡 Extreme | 🟢 Cisco Gold 15 años | 🟠 no |
| Nube AWS (partner + carta) | 🟡 Google sí; AWS sin confirmar | 🟢 AWS Partner | 🟡 menciona, sin carta |
| Nube Azure (partner + carta) | 🟠 sin evidencia | 🟡 sin evidencia clara | 🟠 sin evidencia |
| Cómputo x86 / VMware | 🟡 probable | 🟡 probable | 🟡 reventa/integración |
| IBM Power / AIX (11 LPAR nómina) | 🟠 sin evidencia | 🟠 sin evidencia | 🟠 sin evidencia |
| SPARC / Solaris (67 hosts) | 🟠 sin evidencia | 🟠 sin evidencia | 🟠 sin evidencia |
| Informix (nómina / padrón) | 🟠 sin evidencia | 🟠 sin evidencia | 🟠 sin evidencia |
| Oracle EE + RAC (DBAs acreditados) | 🟡 partner; RAC no evidenciado | 🟡 plausible | 🟡 partner; RAC no evidenciado |
| SQL Server / MySQL / MariaDB | 🟡 probable | 🟡 probable | 🟡 probable |
| Almacenamiento SAN all‑NVMe + Commvault | 🟠 Commvault no; SAN no | 🟡 hosting; Commvault no | 🟡 Veritas (no Commvault) |
| Mesa ITIL v4 / monitoreo | 🟡 NOC/help desk | 🟡 ISO 20000 (probable) | 🟡 básico |
| Plantilla ~55+ / ≥5 años | 🟢 ~9 años (51–200) | 🟢 800+, décadas | 🟡 ~16 años, ~90 |
| Solvencia para fianza 10% | 🟡 verificar | 🟢 grupo grande (verificar) | 🟡 pequeña‑mediana |
| Experiencia gobierno federal MX | 🟡 SEGOB (rechazado) | 🟢 CFE, INFOTEC, SENASICA | 🟢 INFOTEC, CENACE, INEEL |
| **Bandera de riesgo** | ⚠ descalificado SEGOB‑CURP 2025 | ⚠ = Micronet (1 sola empresa) | ⚠ rescisión CFE 2022 · RFC a verificar |

## Lo que puede cumplir cada uno (síntesis)

- **Ikusi (Micronet):** el **core del servicio administrado** — 1 sede ICREA IV, SOC/CSIRT, ISO robustas, red Cisco, AWS, plantilla y solvencia. Mejor candidato a **liderar o co‑liderar**.
- **B Drive IT:** aporta **gestión/migración de datacenter, SOC/NOC, nube y seguridad perimetral** (Palo Alto/Infoblox). Útil como **aliado parcial**, condicionado a verificar sus certificaciones (autodeclaradas) y su solvencia, dado el antecedente SEGOB.
- **CIIME (¿CIIMA?):** encaje **débil**; a lo sumo integrador/revendedor de apoyo. **No** aporta datacenter, ISO, SOC ni legacy; con bandera reputacional. No apoyar en él ningún requisito binario.

## 🎯 Lo que NO cumple NINGUNO (hueco a cubrir con otros aliados)

Estos requisitos salen en **🟠 (o sin evidencia)** en los tres — son el hueco crítico:

| Hueco | Por qué es crítico | Aliado a sumar |
|---|---|---|
| **IBM Power / AIX** | 11 LPAR de nómina (Oracle sobre AIX) | **GBM** o **Redsis** (+ soporte IBM TSS) |
| **SPARC / Solaris** | 67 hosts productivos de la SEP | Especialista SPARC + **soporte Oracle Premier** |
| **Informix** | Nómina y padrón; tecnología más escasa del país | **Deister Software** (pieza casi obligada) |
| **Oracle EE + RAC (operación acreditada)** | DBAs certificados RAC; ninguno lo acredita | **SPS Solutions** / **GTIM** |
| **2ª sede certificada Tier III/ICREA IV (DRP, ≥50 km)** | Ikusi solo tiene 1 sede (MTY) | Operador colo: **KIO / Triara / Alestra / HostDime** |
| **Almacenamiento SAN all‑NVMe gama alta + Commvault** | 700 TB usables, no ALUA; Commvault de facto | Fabricante (**HPE / Dell / Hitachi**) + partner **Commvault** |
| **Nube Azure con carta de partner** | Multinube obligatoria (@prende + USICAMM) | **Northware / Cloud Continuity** (Azure) |
| **Marcas de seguridad específicas** | F5/Radware, Imperva WAF/DBF, Fortinet, Trend Micro | Confirmar/complementar vía **Scitum** o partners de fabricante |

## Recomendación

1. **Núcleo del consorcio: Ikusi (Micronet de México)** como ancla del datacenter certificado, SOC, red, nube AWS, ISO y plantilla. Es el más sólido y verificable.
2. **Resolver primero los dos huecos que deciden la propuesta:** (a) el **legacy** (Power/AIX + SPARC/Solaris + **Informix** + Oracle RAC) sumando **GBM/Redsis + Deister + SPS/GTIM**; y (b) la **2ª sede certificada** para el DRP (coubicación con KIO/Triara/Alestra/HostDime, respetando ≥50 km del sitio Principal).
3. **B Drive IT: due diligence antes de sumarlo** — pedir certificados TIER III/ICREA IV con folio verificable, cartas de partner AWS/Azure, evidencia de legacy y estados financieros. Su descalificación en SEGOB‑CURP 2025 es una señal a despejar.
4. **CIIME (¿CIIMA?): verificar identidad (RFC)** y no asignarle requisitos binarios; su rol viable es menor.
5. **Completar** almacenamiento+Commvault, Azure y marcas de seguridad con los partners indicados.

*Perfiles basados en fuentes públicas; los puntos 🟡/🟠 reflejan ausencia de evidencia pública, no necesariamente ausencia de capacidad. Validar todo con documentos (certificados vigentes con folio, cartas de fabricante, currículos y estados financieros) antes de comprometer la propuesta.*
