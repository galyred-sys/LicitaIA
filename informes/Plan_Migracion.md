# Plan de Migración y Transición
## Servicio Administrado de Centro de Datos SEP 2026‑2027

**Objetivo.** Poner en operación el Centro de Datos **Principal (nuevo)** y el **DRP (equipo propio de la SEP)** con la operación crítica migrada y replicada, para el **arranque de servicio el 1/sep/2026** (fecha límite de entrega, Ref. D.3), sin afectación a los servicios productivos.

**Restricción de plazo.** El calendario cuenta desde **T‑0 = firma del contrato** (posterior al fallo). La ventana hasta el 1/sep/2026 **se comprime** si el fallo es tardío; la migración es **camino crítico** y debe iniciar de inmediato. Todas las ventanas de corte requieren **autorización previa de la SEP** (administración de cambios).

## Fases del plan de trabajo (Ref. G.2)

| Fase | Actividades clave | Duración ref. | Depende de | Entregable |
|---|---|---|---|---|
| 0 · Arranque y planeación | Kickoff, matriz de escalamiento, plan detallado, cronograma, procedimientos de cambio | Semana 1–2 | Firma | Plan de trabajo avalado por la SEP |
| 1 · Aprovisionamiento | Contratar/habilitar coubicación (CDP CDMX + DRP QRO), pedir hardware nuevo CDP, contratar enlaces, altas de partner nube | Semana 1–8 | Fase 0 | Sedes listas, HW en sitio, enlaces activos |
| 2 · Mudanza equipo SEP → DRP | Desconexión, embalaje y traslado desde Querétaro (SPARC T8‑4, Power E950, SDFlex, Alletra/StoreOnce, F5/Imperva/Fortinet/Aruba), reactivación y hardening | Semana 4–9 | Fase 1 (sitio DRP) | Equipo SEP operativo en DRP |
| 3 · Configuración y restauración | Instalar/configurar 454 VMs, 11 LPAR, ~1,008 BD (restauración 1:1 por specs de Tabla 2/3); SO, seguridad, red, monitoreo | Semana 6–12 | Fases 1–2 | Plataforma configurada en CDP y DRP |
| 4 · Replicación y pruebas | Establecer replicación Principal↔DRP (síncrona/asíncrona, aclarar), pruebas de integridad, pruebas de rendimiento, simulacro de DRP | Semana 9–13 | Fase 3 | Replicación validada + acta de pruebas |
| 5 · Cutover / puesta en producción | Ventanas de corte autorizadas por servicio, migración final de datos, conmutación, verificación funcional | Semana 12–14 (hito **1/sep/2026**) | Fase 4 | Acta de puesta en producción |
| 6 · Estabilización (hipercare) | Operación asistida 7×24, ajuste fino, cierre de pendientes, transferencia a operación regular | Semana 14–18 | Fase 5 | Acta de cierre + inicio de SLAs |

## Camino crítico

**Coubicación DRP en Querétaro → mudanza y reactivación del equipo SEP → restauración de las 11 LPAR de nómina (Oracle/AIX) → replicación → cutover.**
El bloque de **nómina** (oraclelpar1‑4) es el más sensible: debe migrarse con ventana autorizada y validación de los 7 procesos de nómina antes del arranque.

## Estrategia de corte por criticidad

1. **Servicios no críticos primero** (validar procedimiento de migración con bajo riesgo).
2. **Aplicativos de criticidad media** con ventana corta.
3. **Nómina y bases de datos críticas** al final, con ventana autorizada, respaldo previo y plan de rollback.
4. **Verificación funcional** por Unidad Administrativa antes de liberar cada servicio.

## Riesgos y mitigación

| Riesgo | Mitigación |
|---|---|
| Fallo tardío comprime la ventana a <8 semanas | Iniciar aprovisionamiento en paralelo desde T‑0; pre‑pedidos de HW condicionados |
| Hardware SEP retirado falla al reactivarse (sin hardening) | Auditoría física pre‑oferta, refacciones y soporte de fabricante 7×24 |
| SPARC/Power nuevos con lead time largo | Confirmar disponibilidad y equivalencias en junta; pedir con anticipación |
| Restauración 1:1 con discrepancias de inventario (454 vs 421, RAM MB/GB) | Aclarar cifras en junta; congelar inventario antes de migrar |
| Ventanas de corte insuficientes para nómina | Negociar ventanas con la SEP; migración por olas con rollback |
| Replicación “tiempo real” a ≥50 km (latencia) | Definir síncrona/asíncrona en junta; dimensionar enlace L2L |

## Hitos hacia el 1/sep/2026

- **T‑0 + 2 sem:** plan de trabajo avalado por la SEP.
- **T‑0 + 8 sem:** sedes, hardware y enlaces listos; equipo SEP en DRP.
- **T‑0 + 12 sem:** plataforma configurada y replicando; pruebas iniciadas.
- **1/sep/2026:** puesta en producción (hito contractual).
- **+4 sem:** cierre de estabilización e inicio pleno de medición de SLAs.

*Duraciones de referencia; ajustar al cronograma real (sección G) una vez conocida la fecha de fallo. Toda ventana de mantenimiento/corte requiere autorización de la SEP.*
