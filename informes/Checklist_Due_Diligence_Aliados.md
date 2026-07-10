# Lista de Verificación (Due Diligence) de Aliados
## Documentos a solicitar antes de comprometer la propuesta — Centro de Datos SEP 2026‑2027

**Cómo usarla.** Enviar a cada aliado potencial (**B Drive IT**, **Ikusi/Micronet**, **CIIME/¿CIIMA?**) y a los socios de nicho que se sumen. Pedir **copia vigente con folio verificable** y original para cotejo. En adjudicación **binaria**, un documento faltante o vencido descalifica; marca **⛔** = imprescindible para no ser desechado. Registrar recibido/pendiente y la fecha de vigencia.

---

## A. Legal, fiscal y de identidad (todos los aliados)
- [ ] ⛔ Acta constitutiva y **RFC / razón social exacta** (verificar especialmente el caso "CIIMA" vs "CIIME")
- [ ] ⛔ Poder notarial del representante legal
- [ ] ⛔ Opinión de cumplimiento del SAT (32‑D en sentido positivo)
- [ ] ⛔ Opinión de cumplimiento del IMSS e INFONAVIT
- [ ] ⛔ Escrito de **no encontrarse inhabilitado** ni en supuestos de los art. 50 y 60 de la LAASSP
- [ ] Currículum de empresa con **≥5 años** de operación, sedes y cobertura
- [ ] Escrito de participación conjunta / convenio de consorcio (si aplica)

## B. Solvencia financiera (para la fianza 10%)
- [ ] ⛔ Estados financieros dictaminados de los últimos 2 ejercicios
- [ ] Carta de una **afianzadora** confirmando capacidad para la fianza del 10%
- [ ] Líneas de crédito / referencias bancarias

## C. Certificaciones de sede / centro de datos
- [ ] ⛔ Certificado **TIER III (Uptime)** o **ICREA IV+** vigente, **sede Principal**, con folio
- [ ] ⛔ Certificado **TIER III / ICREA IV+** vigente, **sede DRP** (o plan de coubicación en tercero certificado, ≥50 km)
- [ ] ⛔ **ISO 9001** vigente (alcance data center)
- [ ] ⛔ **ISO/IEC 20000‑1:2018** vigente
- [ ] ⛔ **ISO 27001** y **27002** vigentes (SOC)
- [ ] ⛔ **ISO/IEC 27017** y **27018** vigentes (nube)
- [ ] Carta del **ente certificador** confirmando vigencia si el certificado solo muestra fecha de emisión

## D. Seguridad y SOC
- [ ] ⛔ Evidencia de **SOC 24×7** con alcance ISO 27001 (no solo NOC)
- [ ] Cartas de **distribuidor autorizado / fabricante** por marca: F5 o Radware, **Imperva** (WAF/DBF), **Palo Alto** o Fortinet (NGFW/IPS), **Infoblox** (DNS), EDR (Cortex/CrowdStrike/SentinelOne), **Trend Micro** (AV)
- [ ] SIEM: marca, capacidad en **EPS** y appliance

## E. Nube pública
- [ ] ⛔ **Carta de partner AWS** vigente (indicar nivel: Advanced/Premier)
- [ ] ⛔ **Carta de partner Azure** vigente (Solutions Partner / Expert MSP)
- [ ] Evidencia ISO 27017/27018 aplicada a la operación de nube

## F. Plataformas legacy (el hueco crítico — pedir con máximo detalle)
- [ ] ⛔ **IBM Power / AIX:** casos de operación + certificaciones del personal + carta de soporte **IBM (TSS/Expert Labs)**
- [ ] ⛔ **SPARC / Solaris:** casos + carta de **soporte Oracle Premier** (Solaris)
- [ ] ⛔ **Informix:** DBAs certificados y casos (tecnología escasa)
- [ ] ⛔ **Oracle EE + RAC:** DBAs con **certificación RAC** y casos de clúster

## G. Almacenamiento y respaldo
- [ ] Carta de distribuidor de **SAN gama alta** (HPE / Dell / Hitachi) con la línea all‑NVMe
- [ ] ⛔ **Commvault:** partner autorizado y evidencia de capacidad de **restaurar respaldos históricos** de Commvault

## H. Personal (plantilla ~55+)
- [ ] ⛔ Por cada perfil: **CV firmado + cédula profesional + certificación vigente + identificación + alta IMSS** (o documentación de patrón solidario/sustituto si es de un socio)
- [ ] Matriz de la plantilla con rol, cantidad, certificación y empresa que lo aporta

---

## Puntos específicos por aliado (por sus banderas de riesgo)

### B Drive IT — sus certificaciones son autodeclaradas
- [ ] ⛔ **Certificados TIER III / ICREA IV con folio verificable** ante Uptime/ICREA (dado el **rechazo en la licitación SEGOB‑CURP 2025** por deficiencias de certificación de datacenter y documentación)
- [ ] ⛔ Explicación formal del **antecedente SEGOB‑CURP 2025** y evidencia de subsanación
- [ ] ⛔ Cartas de partner **AWS y Azure** (hoy solo Google está confirmado públicamente)
- [ ] ⛔ Evidencia real de **legacy** (Power/AIX, SPARC/Solaris, Informix, RAC) y de marcas de seguridad (F5/Imperva/Fortinet/Trend/Commvault)
- [ ] ⛔ **Estados financieros** para la fianza

### Ikusi (Micronet de México) — confirmar identidad y la 2ª sede
- [ ] ⛔ Aclarar cuál **"Micronet"** es la contraparte (Micronet de México = Ikusi, o "Grupo Micronet/Tasmicro", que es distinta)
- [ ] ⛔ Certificado del **DRP (2ª sede)** o **plan de coubicación** en un tercero certificado (Ikusi solo tiene 1 DC ICREA IV en Monterrey; respetar ≥50 km)
- [ ] ⛔ **ISO 20000‑1:2018** y **27017** vigentes con alcance de servicios administrados de datacenter
- [ ] ⛔ **Carta de partner Azure** (su fuerte documentado es AWS)
- [ ] ⛔ Evidencia de capacidad en **legacy** (Power/AIX, SPARC/Solaris, Informix, Oracle RAC) — no hay huella pública

### CIIME (¿CIIMA?) — verificar identidad y rol acotado
- [ ] ⛔ Confirmar **razón social y RFC exacto** (no existe "CIIMA" como empresa TIC; el match es "CIIME")
- [ ] ⛔ Aclaración formal del **contrato con la CFE rescindido en 2022** (impresoras) y su situación ante el Órgano Interno de Control
- [ ] Definir por escrito el **rol acotado** (integrador/revendedor) y con qué respaldo documental de terceros cubriría datacenter, ISO, SOC y nube

---

*En adjudicación binaria, la evidencia documental es la que gana o pierde: prioriza los renglones ⛔. Ningún requisito debe darse por cumplido con base en declaraciones — solo con certificados vigentes, cartas de fabricante y estados financieros verificables.*
