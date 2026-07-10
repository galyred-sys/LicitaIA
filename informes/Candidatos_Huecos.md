# Candidatos Confirmados para los 8 Huecos del Consorcio
## Licitación Centro de Datos SEP 2026‑2027

**Qué es.** Investigación de candidatos reales (con evidencia) para cerrar los huecos que **ninguno** de los aliados base (B Drive IT, Ikusi/Micronet, CIIME) cubre. Veredictos: **confirmado** (evidencia pública directa) · **probable** (indicio fuerte, validar) · **descartado**. Toda "carta de fabricante" y toda certificación de personal debe **acreditarse con documento** antes de licitar.

## ⚠ Correcciones importantes a las recomendaciones iniciales
- **GBM (Power/AIX) → DESCARTADO:** su propia web no lista México (opera en Centroamérica, Caribe y Colombia). La vía real es **Redsis México** o **SinergiaSys**.
- **HPE Alletra MP (SAN) → DESCARTADO:** su documentación confirma que **usa ALUA** — el pliego exige "activo‑activo simétrico, no ALUA". Ofertarlo = descalificación técnica.
- **Alestra/Axtel (2ª sede) → DESCARTADO:** vendió sus 3 datacenters a **Equinix** en 2020. Ya no es suyo.

---

## Hueco 1 · Informix  🟢 candidato confirmado
- **Recomendado: Deister Software de México, S.A. de C.V.** — único con práctica Informix explícita ("DBA Virtual 24×7"), **centro de soporte en México** y entidad legal mexicana (facilita el requisito IMSS). *Due diligence:* nº de DBAs Informix certificados **residentes en México**, CVs+cédulas+certificados, experiencia Solaris/SPARC.
- **Respaldo:** SIXE (IBM BP, España) · XTIVIA/Virtual‑DBA (EE.UU.) · DbaExperts (Colombia) · HCLSoftware/Actian (dueño del producto).
- **Nota de cumplimiento:** IBM **retiró las certificaciones clásicas** de Informix. Hoy valen el **IIUG Informix 14.10 Badge** y la **HCL/Actian Informix 14.10 Certification** → precisar en junta qué certificado se acepta.

## Hueco 2 · IBM Power / AIX  🟢 candidato confirmado
- **Recomendado (operación AIX): SinergiaSys** (partner IBM real, entidad mexicana con IMSS, oficinas CDMX y **Monterrey** — misma plaza que el DC de Ikusi) **o Redsis México** (RedsisUSA S. de R.L. de C.V., Tlalnepantla; respaldada por la práctica Power Expert de Redsis Colombia).
- **Suministro Power (E1050/S10xx):** **CompuSoluciones** (mayorista IBM, Guadalajara/CDMX).
- **Soporte back‑to‑back:** **IBM de México (TSS / Technology Expert Labs)**.
- **Alternativas:** Sonda México · Kyndryl México (modernización Power) · Ciomex.
- ~~GBM~~ **descartado (no opera en México).**

## Hueco 3 · SPARC / Solaris  🟢 confirmado (con salvedad crítica de junta)
- **Hardware: Oracle de México** — vende los **Fujitsu SPARC M12 "by Oracle"** (M12‑1/2/2S) con **Oracle Premier Support** (Solaris 11.4 hasta 2031/2037; M12 con soporte a 2034). Es el único SPARC nuevo de fábrica comprable en México.
- **⛔ Salvedad crítica:** el requisito literal "hardware **≤2 años de comercialización**" **no lo cumple ningún SPARC del mundo** (M12 y M8 son de 2017). **Obligatorio** pedir en junta que se acepte "equipo nuevo de fábrica, en comercialización vigente y con soporte comprometido".
- **Operación/soporte:** Nuestro Site de México · Iterati (partner Oracle servidores) · **Park Place** (mantenimiento de tercero post‑EOSL) · **Stromasys Charon‑SSP** (emulación SPARC sobre x86 — vía técnica para reducir dependencia de hardware físico).
- **Riesgo de fechas:** Solaris 10 solo tiene Extended Support hasta **ene‑2027** (el contrato lo cruza) → considerar migración/soporte especial.

## Hueco 4 · Oracle EE + RAC  🟢 candidato confirmado
- **Recomendado: GTIM (Grupo TI México)** — la mayor práctica Oracle de México (+1.000 empleados, AMS Oracle, centros ISO 20000/27001, **nómina propia** que resuelve el IMSS de los 4 DBAs) **+ iTechDev** (Monterrey, la **evidencia RAC más explícita**, misma plaza que Ikusi, probablemente el precio más competitivo).
- **Oficial: Oracle ACS (Advanced Customer Services)** — soporte administrado de BD 24/7 (confirmado).
- **Respaldo:** SPS · NTT DATA México · Entersoft · OBS · FIT Consulting · K2 (staffing).
- **Certificación RAC verificable:** examen **1Z0‑078**.

## Hueco 5 · 2ª sede certificada (DRP)  🟢 confirmado
- **Recomendado: KIO** como **operador único de ambas sedes** — Principal en CDMX/ZMVM (Santa Fe MEX1/MEX3 o Tultitlán, ICREA IV‑V) + **DRP en Querétaro (QRO1/QRO2, El Marqués, ICREA V documentado, QRO2 recién inaugurado dic‑2025)**. Ventaja: un solo contrato/carta, SLAs homogéneos, ~200 km (≫50 km), experiencia con gobierno federal.
- **Alternativa sólida: Triara/Telmex** (QRO y MTY, ICREA V/VI verificable).
- **Probables:** Equinix (MX1‑MX3 en Querétaro, ojo: sus "Mexico City" están físicamente en El Marqués, QRO) · Ascenty · Odata · HostDime GDL.
- **Dato confirmado:** cualquier DC de Querétaro cumple ≥50 km desde CDMX (~200 km).

## Hueco 6 · SAN all‑NVMe + Commvault  🟢 confirmado
- **Array recomendado: NetApp ASA A‑Series** (el que **más literalmente** cumple "simétrico, no ALUA/ANA") **o Hitachi VSP One Block / VSP 5000** (mejor latencia publicada, **39 µs** < 0.05 ms exigidos).
- **Premium seguro:** Dell PowerMax 8500 (cumple; mayor precio).
- **Comodín de precio:** Huawei OceanStor Dorado (cumple técnicamente, más barato) — **pero riesgo geopolítico/regulatorio** para gobierno federal.
- **⛔ NO ofertar HPE Alletra MP** (usa ALUA → descalifica). HPE Primera cumple pero está en fin de vida.
- **A validar en el modelo cotizado:** caché **≥2 TB** por par de nodos (no todos lo publican).
- **Commvault:** mayoristas en México = **solo Adistec y TD SYNNEX** (Nova/CompuSoluciones/Ingram **no** lo distribuyen). Integrador: **MSR IT** (validar). Modelo: **MSP Partner Advantage Program**.

## Hueco 7 · Partner Azure  🟢 confirmado
- **Recomendado: Northware** — **Solutions Partner for Azure Infrastructure** confirmado, enfoque 100% Azure, tamaño adecuado para 9 VMs, emite carta.
- **Respaldo institucional:** Migesa (partner Microsoft desde 1992) · Definity First (3 designaciones, oficinas MX).
- **Descartados para este rol:** KIO y MCM (solo conectividad ExpressRoute, no operación) · Nubosoft (es Google/AWS).
- *(AWS ya lo cubre Ikusi.)*

## Hueco 8 · Marcas de seguridad  🟢 confirmado (¡el consorcio ya cubre parte!)
- **F5 + Fortinet:** ya los aporta **Ikusi** (F5 **Platinum**/"Partner of the Year México"; especialistas Fortinet). **No hace falta sumar socio** para estas dos.
- **Imperva (WAF + Database Firewall):** **SECNESYS** (canal certificado Imperva) o **QMA** (MSSP). *Validar capacidad de DBF/DAM a ~1.008 BD.*
- **Trend Micro:** **Grupo Smartekh** (especialista, ISO 27001). *Validar soporte Solaris de la versión cotizada.*
- **Infoblox:** **Iterati** + mayoristas TD SYNNEX / Grupo DICE.
- **Alternativa de un solo ancla:** **Scitum** cubre F5+Fortinet+Imperva a la vez (pero es competidor natural — evaluar aliado vs. rival).

---

## Tabla resumen — a quién sumar

| Hueco | Candidato principal (confirmado) | Respaldo | Nota clave |
|---|---|---|---|
| 1 · Informix | **Deister Software de México** | SIXE, XTIVIA, HCL/Actian | Aclarar certificación IIUG/HCL en junta |
| 2 · Power/AIX | **SinergiaSys** o **Redsis México** | CompuSoluciones (HW), IBM TSS | **GBM no opera en México** |
| 3 · SPARC/Solaris | **Oracle de México** (M12) | Park Place, Stromasys, Iterati | "≤2 años" imposible → junta |
| 4 · Oracle RAC | **GTIM** + **iTechDev** | Oracle ACS, SPS, NTT | iTechDev en MTY (junto a Ikusi) |
| 5 · 2ª sede DRP | **KIO** (Principal CDMX + DRP QRO) | Triara, Equinix, Odata | Un operador = un contrato |
| 6 · SAN + Commvault | **NetApp ASA** o **Hitachi VSP One** | Dell PowerMax | **HPE Alletra MP = ALUA, descartar** · Commvault: Adistec/TD SYNNEX |
| 7 · Azure | **Northware** | Migesa, Definity First | KIO/MCM solo dan conectividad |
| 8 · Seguridad | **Ikusi** (F5+Fortinet, ya dentro) | Imperva: SECNESYS/QMA · Trend: Smartekh · Infoblox: Iterati | O Scitum como ancla (F5+Fortinet+Imperva) |

## Tres puntos que se resuelven en la junta de aclaraciones (no con socios)
1. **SPARC "≤2 años de comercialización"** — imposible; pedir redacción por equivalencia.
2. **Certificación de Informix** — precisar si se acepta IIUG/HCL 14.10 (las clásicas de IBM ya no existen).
3. **Solaris 10** — su soporte extendido termina ene‑2027; aclarar responsabilidad del soporte especial.

*Candidatos basados en investigación de fuentes públicas (jul 2026); "probable" = validar con documentos. La carta de fabricante y las certificaciones de personal se acreditan caso por caso: prioriza la due diligence de Deister, SinergiaSys/Redsis, GTIM/iTechDev y KIO, que son los que cierran los huecos más críticos y descalificadores.*
