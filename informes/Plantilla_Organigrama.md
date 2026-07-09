# Plantilla y Organigrama del Consorcio
## Servicio Administrado de Centro de Datos SEP 2026‑2027

**Base.** Perfiles y cantidades de la tabla **H.2** del Anexo Técnico. Todo el personal debe presentar **CV, cédula profesional, certificación vigente, identificación y acreditación de relación laboral (IMSS)**; el servicio es **7×24 en español** con personal certificado. Considerar **personal extra** para cubrir vacaciones, permisos y ventanas de fin de semana (Ref. H.2).

## Estructura de dirección

- **Gerente de Proyecto** (PMP · ITIL v4 · COBIT) — responsable único ante la SEP
  - **Líder Técnico A** (ITIL v4 · PMP) — Infraestructura (cómputo, almacenamiento, red)
  - **Líder Técnico B** (ITIL v4 · PMP) — Bases de datos, seguridad y nube
  - **Administrador de Servicios DRP** (ITIL v4 · ISO 22301) — continuidad y DRP
  - **Encargados de Mesa de Servicio** (ITIL v4 Professional) — operación de tickets y SLAs

## Plantilla por rol, certificación y socio asignado

| Rol | Cant. | Certificación clave | Socio asignado |
|---|:--:|---|---|
| Gerente de Proyecto | 1 | PMP · ITIL v4 · COBIT | Integrador (Softtek/HITSS) |
| Líder Técnico | 2 | ITIL v4 · PMP | Integrador |
| Administrador de servicios DRP | 1 | ITIL v4 · ISO 22301 | Integrador |
| Admin. Plataforma de Virtualización (VMware) | 1 | Cert. VMware vigente | Integrador |
| Admin. SO AIX | 1 | Cert. AIX | GBM / Redsis |
| Admin. SO Windows Server | 1 | Cert. Windows Server | Integrador |
| Admin. SO Oracle Solaris | 1 | Cert. Solaris | GBM / especialista SPARC |
| Admin. SO Red Hat Enterprise Linux | 2 | Cert. RHEL | Integrador |
| Admin. conectividad LAN/WAN | 1 | Cert. redes de datos | Operador / integrador |
| Admin. Solución RISC (Power) | 1 | Cert. Power | GBM / Redsis |
| Admin. Solución SPARC (Solaris) | 1 | Cert. SPARC | Especialista SPARC |
| Admin. Solución x86 | 1 | Cert. x86 | Integrador |
| Admin. herramienta de respaldos | 3 | Cert. Commvault | Integrador / partner Commvault |
| Admin. infraestructura de almacenamiento | 2 | Cert. de la solución | Integrador / fabricante SAN |
| Admin. Seguridad (FW/IPS/AV/Antimalware) | 1 | Cert. de la solución | Scitum / seguridad |
| Admin. Firewall de BD y de Aplicaciones | 1 | Cert. Imperva | Scitum / seguridad |
| Admin. Balanceo | 1 | Cert. del fabricante (F5/Radware) | Scitum / seguridad |
| DBA Oracle | 4 | Oracle DBA (≥1 con **RAC**) | SPS / GTIM |
| DBA SQL Server | 1 | Cert. SQL Server | Integrador |
| DBA MySQL | 1 | Cert. MySQL | Integrador |
| DBA Informix | 2 | Cert. Informix | **Deister** |
| DBA PostgreSQL | 1 | Cert. PostgreSQL (5 años) | Integrador |
| Admin. Servidor de Aplicaciones | 2 | Cert. + Java/PHP/.Net | Integrador |
| Admin. herramienta de monitoreo | 1 | Cert. de la herramienta | Integrador |
| Arquitecto de Nube Pública | 1 | Arquitecto **AWS y Azure** | Partner nube (Nubity/Northware) |
| Admin. Contenedores y Orquestación | 1 | **CKA** o DCA (5 años) | Integrador / nube |
| Ingeniero DevOps / Infraestructura | 1 | Cert. DevOps + arquitecto nube | Integrador / nube |
| Soporte WSO2 | 1 | Cert. WSO2 (N1/N2/N3 fabricante) | Fabricante WSO2 |
| Encargados de Mesa de Servicio | 2 | ITIL v4 **Professional** | Integrador |
| Personal de Mesa de Servicio | 7 | ITIL v4 | Integrador |
| **Subtotal núcleo** | **~47** | | |
| Personal de reserva (vacaciones/permisos/ventanas) | +8 | según rol | Todos los socios |
| **Total plantilla** | **~55+** | | |

## Reparto de la plantilla por socio (aprox.)

| Socio | Perfiles que aporta | Certificaciones que acredita |
|---|---|---|
| **Integrador** (Softtek / HITSS) | ~30 (gestión, x86/VMware, SO Windows/RHEL, DBAs SQL/MySQL/PostgreSQL, apps, monitoreo, mesa, DevOps, contenedores) | PMP, ITIL v4, VMware, MS, CKA, nube |
| **GBM / Redsis** | AIX, Power/RISC, apoyo Solaris | AIX, Power, IBM TSS |
| **Especialista SPARC** | SPARC/Solaris | Oracle Solaris/SPARC, Oracle Premier |
| **Deister** | Informix (×2) | Informix (pieza crítica y escasa) |
| **SPS / GTIM** | DBAs Oracle (×4, incl. RAC) | Oracle DBA + RAC |
| **Scitum / seguridad** | Seguridad, FW BD/Apps, balanceo, SOC | ISO 27001/27002, F5/Imperva/Palo Alto |
| **Partners nube** (Nubity / Northware) | Arquitecto nube, apoyo DevOps/contenedores | AWS + Azure (cartas de partner) |
| **Operador de colocación** | Conectividad LAN/WAN, manos remotas en sitio | Redes; TIER/ICREA de las sedes |
| **Fabricante WSO2** | Soporte WSO2 | Certificación WSO2 |

## Notas de acreditación

- **El cuello de botella no son los metros del datacenter, es la plantilla certificada**: Informix (Deister), SPARC/Solaris y Oracle RAC son los perfiles más escasos — blindarlos con cartas y contratos de los especialistas.
- Confirmar en junta (pregunta #36) si las certificaciones pueden ser de **personal de los socios/subcontratistas** o deben ser de relación laboral directa del licitante.
- Cada cambio de personal debe notificarse con **5 días hábiles** y reponerse en **10 días hábiles** con perfil equivalente (Ref. H.2).

*Cantidades y perfiles conforme a la tabla H.2 del Anexo Técnico; verificar contra la convocatoria oficial. La asignación por socio es una recomendación de la estrategia de consorcio.*
