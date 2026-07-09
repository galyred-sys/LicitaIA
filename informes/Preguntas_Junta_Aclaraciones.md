# Preguntas para la Junta de Aclaraciones
## Servicio Administrado de Centro de Datos SEP 2026‑2027

**Convocante:** Secretaría de Educación Pública (SEP) · DGTIC
**Documento base:** Anexo Técnico (fecha de elaboración 31/03/2026)
**Uso:** documento de trabajo interno para preparar la oferta. Cada pregunta indica la referencia del Anexo Técnico y, cuando aplica, una **▸ nota interna** (estrategia — **no incluir** en la pregunta que se presente formalmente).

> **Por qué importa:** la adjudicación es **binaria** (gana el precio más bajo que cumpla el 100%). Cada respuesta de esta junta o **reduce el precio** al que podemos ofertar, o **evita una descalificación**. Las preguntas marcadas **[PRIORIDAD]** son las que más mueven el resultado.

---

## A. Aspectos comerciales y de contratación

**1.** Siendo un contrato abierto plurianual con máximos y mínimos (Art. 68 LAASSP), ¿cuáles son los **montos mínimo y máximo** del presupuesto autorizado que sirven de base para cotizar los precios unitarios? *(Ref. C.4, D.4)*

**2.** La cotización se pide por **precios unitarios en periodos de seis meses** (Ref. I.13). ¿El precio unitario es **fijo durante toda la vigencia** o admite ajuste por inflación/tipo de cambio? ¿Existe un formato/plantilla obligatorio de cotización?
> ▸ *Nota interna: precio fijo plurianual + variación de tipo de cambio (hardware/nube en USD) erosiona margen; si no hay ajuste, cubrir el riesgo cambiario en el precio.*

**3.** La vigencia corre del fallo al 31/dic/2027 y se pide continuar el servicio hasta **3 meses adicionales** mientras la SEP migra (Ref. D.2). ¿Esos 3 meses de continuidad se **pagan** a los precios unitarios del contrato?

**4.** Respecto al equipamiento **nuevo** que se suministra para el Centro de Datos Principal: ¿se confirma que pasa a ser **propiedad de la SEP** al término del contrato **sin valor residual**? ¿Aplica también a las licencias perpetuas adquiridas? *(Ref. C.2.2, C.4)*

**5.** ¿Se confirma que el **tope conjunto** de deductivas y penas convencionales es **10% del monto máximo** del contrato (sin IVA), equivalente a la fianza de cumplimiento? *(Ref. C.7, C.8, I.2)*

---

## B. Volumetría e inventario — discrepancias **[PRIORIDAD]**

**6.** El inventario (Tabla 2) lista **454** máquinas virtuales y el resumen de procesamiento (Tabla 14) refiere **421**. ¿Cuál es la **cifra contractual** para dimensionar la oferta? *(Ref. B.4.2.1.2)*

**7.** El alcance cita **1,018** bases de datos y otras secciones **~1,008**. ¿Cuál es la **cifra oficial**? *(Ref. B.4, C.4)*

**8.** La columna de memoria del inventario mezcla unidades (**MB y GB** en distintas filas). ¿Cuál es la unidad correcta por fila o la **cifra agregada oficial** de RAM a considerar? *(Ref. B.4.2.1.2)*

**9.** Existen tamaños de base de datos **anómalos** (p. ej. MariaDB por encima de 1 PB, `cnspd` MySQL ~217 TB, `moodle` ~262 TB, y valores que parecen seriales de fecha de Excel). ¿Puede la SEP **validar las unidades/valores reales**? Estos datos definen el dimensionamiento de la SAN (700 TB) y del respaldo. *(Ref. B.4.2.1.2)*
> ▸ *Nota interna: sin esta aclaración es imposible costear storage sin sobre/sub-dimensionar; es la mayor fuente de error del sizing.*

**10.** La relación de **7 Unidades Administrativas** puede modificarse durante la vigencia (Ref. B.1.2). ¿Cómo se refleja esa variación en los precios unitarios y en la volumetría facturable?

---

## C. Coubicación y sedes

**11.** La norma pide **TIER III o ICREA IV o superior**. ¿Se aceptan **indistintamente** ambas certificaciones? ¿La certificación debe ser del **inmueble** o basta la del **operador**? *(Ref. H.1)*

**12.** ¿Se confirma la exigencia de **separación ≥50 km** y región sísmica "B", y que el **DRP puede ubicarse en Querétaro** (donde ya se encuentra el equipo propiedad de la SEP)? *(Ref. C.2.3.2)*
> ▸ *Nota interna: si el DRP puede quedar donde ya está el equipo SEP, se minimiza el costo/riesgo de la mudanza especializada — palanca de precio.*

**13.** ¿La SEP exige que **ambas sedes** (Principal y DRP) sean del **mismo operador**, o admite operadores distintos?

**14.** Los metros/gabinetes de referencia (19.34 m² + 9.2 m²; ≥8 gabinetes 26U en DRP): ¿son **mínimos obligatorios** a cotizar o dimensionamiento sujeto a la solución propuesta? *(Ref. C.2.2.2, C.2.3.2)*

---

## D. Cómputo (x86, Power, SPARC)

**15. [PRIORIDAD — la más importante]** Sobre la regla de dimensionamiento **40/60** (los recursos de la SEP deben ser el 40% del total, reservando 60% para crecimiento): ¿significa **instalar hoy ~2.5× la capacidad** utilizada, o entregar **capacidad escalable a +60% sin cambio de hardware** (chasis/licencias ampliables)? *(Ref. dimensionamiento CDP)*
> ▸ *Nota interna: la diferencia entre "2.5× instalado" y "headroom escalable" puede ser de +120–180 M MXN. Es la pregunta que más define el precio; quien la interprete conservadora pierde, quien la ignore se descalifica.*

**16. [PRIORIDAD]** Para SPARC se pide **equipo nuevo de ≤2 años de comercialización**. Dado que Oracle congeló el roadmap de SPARC, ¿se acepta como equivalente **Fujitsu SPARC M12** o **hardware SPARC con soporte Oracle Premier vigente** (Solaris soportado hasta 2031/2034)? *(Ref. C.2.2.3.1)*
> ▸ *Nota interna: SPARC "nuevo" prácticamente no existe; si la SEP no flexibiliza, es riesgo de descalificación para TODOS — conviene nivelar el campo con esta aclaración.*

**17.** El sobre-aprovisionamiento (overcommit) permitido es **≤3:1 en CDP** y **≤6:1 en DRP**. ¿Se mide **por host** o **por clúster**? *(Ref. C.2.2.3.2)*

**18.** Respecto al equipo **propiedad de la SEP** para el DRP (SPARC T8‑4, HPE SDFlex 280, IBM Power E950/P9, HMC, etc.), entregado "en su última configuración estable": ¿puede la SEP confirmar el **inventario exacto, estado, disponibilidad de refacciones** y **quién asume el riesgo** si un equipo retirado **falla al reactivarse**? *(Ref. B.4.2.2.2.1)*
> ▸ *Nota interna: reutilizar este parque es la palanca #1 de precio; el riesgo de falla de hardware antiguo debe quedar acotado o repercutido.*

**19.** El licenciamiento de **virtualización VMware** del DRP (equipo propio de la SEP): ¿lo aporta la SEP o el licitante? ¿Cuál es la **edición mínima** requerida (HA/DRS/DPM, vMotion)? *(Ref. C.2.2.12, C.2.3.11)*

---

## E. Bases de datos y licenciamiento **[PRIORIDAD]**

**20. [PRIORIDAD — crítica para el precio]** Las secciones de Firewall de BD y del DRP indican que **la SEP provee las licencias de los motores** (Oracle EE/RAC, SQL Server, Informix) y que el licitante solo aporta las de **sistema operativo**. ¿Se **confirma** que la SEP licencia los motores de base de datos en **AMBAS** sedes (Principal y DRP)? *(Ref. C.2.2.5.3, C.2.3.4, C.2.2.11)*
> ▸ *Nota interna: es el rubro de licenciamiento más caro (Oracle EE+RAC por core Power = multiplicador altísimo). Si lo aporta la SEP, baja el precio ~50–120 M MXN. Confirmar por escrito.*

**21.** En el inventario hay **SQL Server 2012 SP4** (fin de soporte) y **SQL Server 2017 Developer Edition en producción**. ¿El **soporte extendido (ESU)** y la **regularización/migración** de esas licencias corren por cuenta de la SEP o del licitante? (La edición Developer en producción implica riesgo de EULA.) *(Ref. inventario de BD)*

**22.** ¿Puede la SEP indicar **en qué bases de datos exactas** se exige **Oracle RAC / alta disponibilidad** (marcadas "SÍ"), para no sobre-dimensionar el resto? *(Ref. C.2.2.3.4)*

---

## F. Almacenamiento y respaldo

**23.** Los **700 TB** de SAN y **700 TB** de respaldo se piden "**usables antes de** deduplicación/compresión/thin provisioning". ¿Se confirma que la capacidad se mide **bruta**, y si la regla 40/60 aplica también al almacenamiento? *(Ref. C.2.2.4)*

**24.** La especificación de controladoras ("**activo-activo simétrico, no ALUA**, escalable a 16, caché ≥2 TB en DIMM, latencia 0.05 ms") ¿admite **arquitecturas equivalentes** de distintos fabricantes que cumplan la métrica funcional? *(Ref. C.2.2.4)*

**25. [PRIORIDAD]** El software de respaldo se describe con terminología de **Commvault** ("CommCell", "MediaAgents", "recuperar respaldos históricos de Commvault"). ¿Es **obligatorio Commvault**, o se acepta cualquier software que pueda **restaurar los respaldos históricos** de Commvault? *(Ref. C.2.2.4)*
> ▸ *Nota interna: el DRP ya usa CommVault Simpana de la SEP → estandarizar en Commvault evita incompatibilidad y descalificación; conviene que la respuesta lo permita explícitamente.*

**26.** Bóveda externa: ¿puede confirmarse la **cantidad exacta de cintas** (1,500 históricas + 500 DGSANEF en CDP; 1,500 + hasta 3,000 de operación en DRP) y que el servicio de **custodia y transporte** (>20 km) es responsabilidad del licitante? *(Ref. C.2.2.4)*

---

## G. Seguridad

**27. [PRIORIDAD]** El stack de seguridad del CDP se describe con **terminología propietaria** (App‑ID/WildFire/ZTNA = Palo Alto; DDI/ThreatAdapt = Infoblox; iRules/TCL = F5). ¿Se aceptan las **mismas familias que la SEP ya posee en el DRP** (F5, Imperva, Fortinet) u otros equivalentes que cumplan los requisitos **funcionales**? *(Ref. C.2.2.5)*
> ▸ *Nota interna: estandarizar CDP=DRP baja precio, consolas y plantilla. Si la SEP exige marca, hay riesgo de impugnación por direccionamiento y hay que cotizar la marca exacta.*

**28.** En el Firewall de Base de Datos hay una **contradicción**: se pide operación "**sin agentes**" pero también "**considerar agentes para todas las BD de DGSANEF**". ¿Cuál criterio aplica? *(Ref. C.2.2.5.3)*

**29.** La certificación del **NGFW** se refiere a **NSS Labs**, organismo que **cerró en 2021**. ¿Qué **evidencia alterna** se acepta (MITRE Engenuity, CyberRatings, etc.)? *(Ref. C.2.2.5.4)*

**30.** El **SIEM** exige "**base de datos propietaria**" (excluye MySQL/PostgreSQL/Oracle/MSSQL) a **100,000 EPS**. ¿Se confirma el EPS contractual y que picos sostenidos **>100k EPS** se atienden como **servicio bajo demanda**? *(Ref. C.2.1.5)*

**31.** El **EDR/Antiransomware** se pide con certificaciones puntuales (MITRE Turla 2023 >98%/100%, SOC2 Tipo II Plus, Cyberthreat Alliance). ¿Existe una **lista de fabricantes aceptados** o se evalúa por **criterio funcional**? *(Ref. C.2.2.5.6)*

---

## H. Nube pública

**32.** ¿Cuál es el **nivel mínimo** de las cartas de **partner AWS y Azure** exigido (p. ej. AWS Advanced/Premier, Azure Solutions Partner) y deben estar a nombre del **licitante** o se admite el de un **miembro del consorcio**? *(Ref. C.2.2.7)*

**33.** De los **72 servidores** en nube (9 Azure @prende + 63 AWS USICAMM, varios en **Ubuntu 18.04 EOL**): ¿se permite **right‑sizing/actualización** de instancias o se exige restauración **1:1**? ¿El **soporte extendido** del SO EOL corre por cuenta de quién? *(Ref. C.2.2.7.1, C.2.2.7.2)*

---

## I. Red y enlaces

**34.** El switch core "**8 Tbps, fabricante Líder Gartner + certificación GB4943**": ¿es **criterio funcional** o **marca específica**? *(Ref. C.2.2.9)*

**35.** Los **enlaces dedicados** (5 en CDP + 4 en DRP): ¿los **contrata el licitante** (OPEX) o los provee el operador de colocación? Confirmar direcciones fijas de entrega y la reubicación anual sin costo. *(Ref. C.2.2.13, D.1)*

---

## J. Servicios, personal y certificaciones

**36. [PRIORIDAD]** Sobre la plantilla de la tabla **H.2** (~55+ perfiles certificados): ¿todas las certificaciones deben corresponder a **personal con relación laboral directa (IMSS)** del licitante, o se admite personal de los **socios/subcontratistas del consorcio** presentando la documentación que acredite la relación (patrón solidario/sustituto)? *(Ref. H.2)*
> ▸ *Nota interna: define si el modelo de consorcio/subcontratación es viable para cubrir Informix, SPARC, Power y demás perfiles escasos. Es determinante para la estructura del equipo.*

**37.** El personal debe ubicarse "**en las instalaciones del licitante**". ¿Se admiten esquemas **híbridos/remotos** para perfiles no presenciales y **manos remotas 7×24** en el DRP? *(Ref. H.2)*

**38.** La **herramienta de Mesa de Servicios** debe tener "**certificado ITIL v4** de 11 prácticas". ¿Qué **evidencia** acredita esa certificación de la herramienta? *(Ref. C.2.1.2)*

---

## K. Migración y transición

**39.** Sobre la **mudanza física** del equipo de la SEP "**desde Querétaro**": ¿ubicación exacta de origen, **ventana disponible** y **responsabilidad por daños** durante desconexión, traslado y reactivación? *(Ref. C.2.3.1)*

**40.** Con arranque el **1/sep/2026**: ¿puede confirmarse el **cronograma de hitos** (sección G) y que la migración de 454 VMs / 11 LPAR / ~1,008 BD dispone de **ventanas de mantenimiento con corte autorizado**? *(Ref. G.1‑G.3, D.3)*

**41.** La replicación "**en tiempo real**" Principal→DRP: ¿se exige **síncrona (RPO=0)** o **asíncrona**? Define el requisito de enlace y de latencia entre sedes. *(Ref. B.1.3)*
> ▸ *Nota interna: síncrona a ≥50 km es exigente y cara (latencia); asíncrona es más barata. La respuesta condiciona el diseño del enlace L2L.*

---

## L. Alcance

**42.** Las cláusulas "**enunciativo mas no limitativo**", la obligación de **integrar dispositivos no inventariados** y de prestar servicios "**sin costo adicional**": ¿cuál es el **límite del alcance** no repercutible en precio, para acotar el riesgo de trabajo no previsto? *(Ref. varios)*

---

### Prioridades de la junta (resumen)

| # | Pregunta | Impacto |
|---|---|---|
| 15 | Regla 40/60: ¿2.5× instalado o escalable? | El mayor amplificador de precio |
| 20 | ¿La SEP licencia los motores de BD? | Ahorro ~50–120 M MXN |
| 16 | SPARC "nuevo ≤2 años": ¿equivalencia? | Riesgo de descalificación general |
| 6–9 | Discrepancias de inventario (VMs, BD, RAM, tamaños) | Precisión del sizing |
| 25 | ¿Commvault obligatorio? | Compatibilidad/descalificación |
| 27 | Marca de seguridad: ¿equivalencia funcional? | Precio + riesgo de impugnación |
| 36 | Personal del consorcio para H.2 | Viabilidad de la estructura de equipo |

---

*Documento de trabajo generado con apoyo de IA a partir del Anexo Técnico. Verificar cada referencia contra la convocatoria oficial antes de presentar las preguntas en el formato y plazo establecidos por la SEP.*
