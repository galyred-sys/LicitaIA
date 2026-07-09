# Matriz de Cumplimiento — Propuesta Técnica
## Servicio Administrado de Centro de Datos SEP 2026‑2027

**Instrucciones de uso.** Documento para adjuntar a la propuesta técnica. La adjudicación es **binaria**: se debe declarar **Cumple = SÍ** en **todos** los renglones y remitir a la evidencia (página/anexo de la propuesta). Completar la columna **Folio** con la referencia exacta dentro de la propuesta. La columna **Solución / responsable** es orientación interna del consorcio.

Leyenda estado interno: 🟢 cubierto · 🟡 vía consorcio / carta de socio · 🟠 confirmar en junta.

| # | Ref. Anexo | Requisito | Cumple | Solución / responsable (interno) | Folio propuesta |
|---|---|---|:--:|---|---|
| 1 | B.1 / B.4 | Servicio administrado de coubicación 7×24 en dos sedes (Principal + DRP) | SÍ | Operador de colocación + integrador | |
| 2 | B.4 | Duplicar en ambas sedes: 385 aplicativos, 7 nóminas, 454 VMs, 11 LPAR, ~1,008 BD | SÍ | 🟢 Arquitectura espejo | |
| 3 | B.1.3 | Replicación/actualización en tiempo real Principal→DRP | SÍ | 🟠 Enlace L2L (síncrona/asíncrona, aclarar) | |
| 4 | C.2.1.1 | Certificados SSL EV/wildcard (~74, +10%) y servicio administrado | SÍ | 🟢 CA reconocida + gestión | |
| 5 | C.2.1.2 | Mesa de Servicios ITIL v4 (herramienta certificada 11 prácticas, 9 personas, ~1,300 tickets/mes) | SÍ | 🟡 Integrador (Softtek/HITSS) | |
| 6 | C.2.1.3 | Centro de Operaciones de Seguridad (SOC) 24×7×365 | SÍ | 🟡 Scitum / Ikusi / A2Secure | |
| 7 | C.2.1.4 | Borrado seguro (HDD/SSD/NVMe, método patentado, por evento, ambas sedes) | SÍ | 🟢 Perfil Blancco | |
| 8 | C.2.1.5 | Correlacionador de eventos SIEM (BD propietaria, 100,000 EPS) | SÍ | 🟢 Perfil QRadar (appliance HW) | |
| 9 | C.2.1.6 | Servicios administrados (misma solución y equipo para ambas sedes) | SÍ | 🟢 Integrador | |
| 10 | C.2.2.1 | Migración del Centro de Datos Principal | SÍ | 🟢 Plan de migración | |
| 11 | C.2.2.2 | Coubicación Principal: espacio, energía 2N + UPS 7 días, clima 2N, multi‑ISP | SÍ | 🟡 Operador colo | |
| 12 | C.2.2.2 / H.1 | Sede Principal certificada TIER III o ICREA IV+ | SÍ | 🟡 Carta del operador | |
| 13 | C.2.2.2 | Seguridad física 7×24, biométrico, CCTV 45 días | SÍ | 🟡 Operador colo | |
| 14 | C.2.2.3.1 | Procesamiento SPARC/Solaris (UltraSPARC equiv. o superior, LDoms/Zonas/ZFS) | SÍ | 🟠 Fujitsu M12 / equivalencia (aclarar) | |
| 15 | C.2.2.3.2 | Procesamiento x86 (VMware vSphere HA/DRS/DPM, vMotion, overcommit ≤3:1) | SÍ | 🟢 Hosts densos + VMware | |
| 16 | C.2.2.3.3 | Procesamiento RISC/IBM Power‑AIX (PowerVM/HMC, AIX 7.2) | SÍ | 🟡 Power nuevo + GBM/Redsis | |
| 17 | C.2.2.3.4 | Servicio administrado de BD (Oracle EE+RAC+ASM, SQL, MySQL/MariaDB, Informix; ARCHIVELOG; RMAN/Data Pump) | SÍ | 🟡 DBAs consorcio: Deister + SPS/GTIM | |
| 18 | C.2.2.4 | SAN productiva ≥700 TB usables all‑NVMe (activo‑activo simétrico, no ALUA, ≥2 TB caché, 0.05 ms) | SÍ | 🟢 Array gama alta | |
| 19 | C.2.2.4 | Respaldo a disco ≥700 TB usables + software (perfil Commvault) | SÍ | 🟢 Commvault + partner | |
| 20 | C.2.2.4 | Bóveda externa (>20 km): 1,500 históricas + 500 DGSANEF; medios LTO7 (lectura LTO5/6) | SÍ | 🟡 Operador de bóveda | |
| 21 | C.2.2.5.1 | Balanceo (ADC local/global + WAF, anti‑SYN ≥7M/s) | SÍ | 🟢 F5 / Radware | |
| 22 | C.2.2.5.2 | Firewall de Aplicaciones (WAF) | SÍ | 🟢 Imperva | |
| 23 | C.2.2.5.3 | Firewall de Bases de Datos (DBF) | SÍ | 🟠 Imperva (aclarar "sin agentes" vs DGSANEF) | |
| 24 | C.2.2.5.4 | Firewall perimetral + IPS + Sandbox + URL (App‑ID/WildFire) | SÍ | 🟡 Palo Alto / Fortinet | |
| 25 | C.2.2.5.5 | DNS secundario / DDI (ThreatAdapt, RPZ) | SÍ | 🟢 Infoblox | |
| 26 | C.2.2.5.6 | Antiransomware / EDR (Líder Gartner, MITRE Turla >98%) | SÍ | 🟢 Cortex XDR / CrowdStrike / SentinelOne | |
| 27 | C.2.2.5.7 | Administrador de ancho de banda | SÍ | 🟢 Appliance dedicado | |
| 28 | C.2.2.5.8 | Antivirus/antimalware 450 endpoints (incl. Solaris + Docker) | SÍ | 🟢 Trend Micro | |
| 29 | C.2.2.6 | Sistema y servicio administrado de monitoreo (poleo ≤5 min, consola dedicada por sitio) | SÍ | 🟢 Stack de monitoreo on‑prem | |
| 30 | C.2.2.7.1 | Nube pública @prende (9 VMs Azure) | SÍ | 🟡 Partner Azure (Northware) | |
| 31 | C.2.2.7.2 | Nube pública USICAMM (63 VMs AWS) | SÍ | 🟡 Partner AWS (Nubity) | |
| 32 | C.2.2.8 | Soporte y licenciamiento WSO2 (fabricante, no community; ingeniero dedicado) | SÍ | 🟢 Contrato WSO2 | |
| 33 | C.2.2.9 | Equipo de red LAN spine‑leaf CLOS (core 8 Tbps, GB4943) | SÍ | 🟢 Huawei / HPE | |
| 34 | C.2.2.10 | Servicios bajo demanda y/o adicionales (catálogo a precio unitario) | SÍ | 🟢 Catálogo | |
| 35 | C.2.2.11 | Sistemas operativos (licencia de SO por el licitante) | SÍ | 🟢 Licencias SO | |
| 36 | C.2.2.12 | Servicio administrado de virtualización VMware | SÍ | 🟢 VMware | |
| 37 | C.2.2.13 | Enlaces de comunicación dedicados (5 en CDP, redundantes) | SÍ | 🟡 Carrier del operador | |
| 38 | C.2.3.1 | Migración del Centro de Datos DRP (mudanza desde Querétaro) | SÍ | 🟠 Ubicación/ventana (aclarar) | |
| 39 | C.2.3.2 | Coubicación DRP TIER III/ICREA IV+, ≥50 km, ≥8 gabinetes 26U | SÍ | 🟡 Operador colo | |
| 40 | C.2.3.3 | Servicio administrado de procesamiento DRP (reactivar SPARC T8‑4, Power E950, SDFlex de la SEP) | SÍ | 🟠 Reactivación equipo SEP | |
| 41 | C.2.3.4 | Almacenamiento/respaldo DRP (Alletra 9060, StoreOnce 3660, MSL6480 de la SEP + respaldo a disco ≥35 TB) | SÍ | 🟢 Reutilización + añadidos | |
| 42 | C.2.3.5 | Seguridad DRP (reactivar F5, Imperva, Fortinet de la SEP; añadir antiransomware/EDR) | SÍ | 🟢 Reutilización + EDR nuevo | |
| 43 | C.2.3.6 | Monitoreo DRP (consola dedicada, no compartible) | SÍ | 🟢 Monitoreo on‑prem | |
| 44 | C.2.3.7 | Licenciamiento y soporte WSO2 en DRP | SÍ | 🟢 WSO2 | |
| 45 | C.2.3.8 | Red LAN DRP (reutilizar Aruba de la SEP) | SÍ | 🟢 Reutilización | |
| 46 | C.2.3.12 | Enlaces dedicados DRP (4, incl. L2L ≥1 Gbps al Principal) | SÍ | 🟡 Carrier | |
| 47 | C.5.1 | Mantenimiento preventivo (mín. 1 al DRP, plan de trabajo) | SÍ | 🟢 Plan preventivo | |
| 48 | C.5.2 | Mantenimiento correctivo (refaccionamiento, carta bajo protesta) | SÍ | 🟢 Refacciones + soporte fabricante | |
| 49 | C.6 | Estándares técnicos del centro de datos | SÍ | 🟡 Operador colo | |
| 50 | C.7 | Niveles de disponibilidad 99.982%–99.99% (100% DNS/WSO2/entregables) | SÍ | 🟢 Diseño HA + SOC | |
| 51 | C.8 | Tiempos de respuesta (ticket ≤5 min; crítico ≤4 h; alto ≤8 h; medio ≤12 h; bajo ≤24 h) 7×24 | SÍ | 🟢 Mesa + SOC + manos remotas | |
| 52 | E | Entregables recurrentes y de única ocasión (actas de entrega/cierre) | SÍ | 🟢 Gestión de entregables | |
| 53 | H.1 | Certificado TIER III o ICREA IV+ (Principal) | SÍ | 🟡 Carta operador | |
| 54 | H.1 | Certificado TIER III o ICREA IV+ (DRP) | SÍ | 🟡 Carta operador | |
| 55 | H.1 | ISO 9001 (Principal y DRP) | SÍ | 🟡 Certificado a nombre del licitante/asociado | |
| 56 | H.1 | ISO/IEC 20000‑1:2018 (gestión de servicios TI) | SÍ | 🟡 Certificado | |
| 57 | H.1 | ISO 27001 y 27002 (SOC) | SÍ | 🟡 Scitum/SOC | |
| 58 | H.1 | ISO/IEC 27017:2015 y 27018:2019 (Nube) | SÍ | 🟡 Partner nube | |
| 59 | H.1 | NMX‑R‑025‑SCFI‑2015 (igualdad laboral) — escrito membretado | SÍ | 🟢 Escrito | |
| 60 | H.2 | Plantilla ~55+ perfiles certificados (VMware, AIX, Solaris/SPARC, Power, DBAs Oracle+RAC/SQL/MySQL/Informix/PostgreSQL, seguridad, nube AWS+Azure, CKA, ITIL v4, PMP, ISO 22301) | SÍ | 🟡 Integrador + nicho | |
| 61 | H.2 | CV + cédula + certificado vigente + ID + alta IMSS por cada perfil | SÍ | 🟡 Expediente por persona | |
| 62 | H.2 | Currículum del licitante (≥5 años, clientes, casos de éxito) | SÍ | 🟢 Currículum empresa | |
| 63 | I.1 | Manifiesto de confidencialidad (representante legal) | SÍ | 🟢 Escrito | |
| 64 | I.2 | Garantía de cumplimiento: fianza 10% del contrato (10 días tras firma) | SÍ | 🟢 Afianzadora | |
| 65 | I.6 | Evaluación binaria: cumplimiento total al precio más bajo | SÍ | 🟢 Estrategia de precio | |
| 66 | I.8 | Escritos: patentes/marcas (art. 66 XX), confidencialidad, no patrón sustituto, gastos por su cuenta | SÍ | 🟢 Escritos legales | |
| 67 | I.13 | Cotización por precios unitarios sin IVA, MXN, periodos de 6 meses | SÍ | 🟢 Propuesta económica | |

*Documento de trabajo. Verificar numeración de secciones y requisitos contra el Anexo Técnico y la convocatoria oficial antes de presentar.*
