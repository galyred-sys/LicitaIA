# Propuesta Económica — estructura de precios unitarios
## Servicio Administrado de Centro de Datos SEP 2026‑2027

**Base contractual.** Cotización por **precios unitarios sin IVA, en pesos mexicanos, por periodos de seis meses** (Ref. I.13). Contrato **abierto, plurianual, con máximos y mínimos** (Art. 68): se cotiza el **precio unitario**, y el importe se ejerce entre el mínimo y el máximo del presupuesto de la SEP (pendiente de aclarar — pregunta #1 de la junta). Los importes de este documento son de **referencia (ROM)**; el consorcio debe sustituir cada **precio unitario** por su costeo real.

## Periodos de facturación (vigencia 1/sep/2026 – 31/dic/2027 = 16 meses)

| Periodo | Rango | Duración |
|---|---|---|
| Periodo 1 | 01/sep/2026 – 28/feb/2027 | 6 meses |
| Periodo 2 | 01/mar/2027 – 31/ago/2027 | 6 meses |
| Periodo 3 | 01/sep/2027 – 31/dic/2027 | 4 meses (parcial) |

## Resumen por partida (referencia, MXN sin IVA)

| Partida | Periodo 1 (6m) | Periodo 2 (6m) | Periodo 3 (4m) | Total 16m |
|---|---:|---:|---:|---:|
| 1 · Servicios transversales | $36.6 M | $36.6 M | $24.4 M | $97.6 M |
| 2 · Centro de Datos Principal (servicios) | $24.0 M | $24.0 M | $16.0 M | $64.0 M |
| 3 · Centro de Datos DRP (servicios) | $10.2 M | $10.2 M | $6.8 M | $27.2 M |
| Nube pública AWS + Azure | $7.8 M | $7.8 M | $5.2 M | $20.8 M |
| Servicios (bóveda) | $0.9 M | $0.9 M | $0.6 M | $2.4 M |
| **Subtotal recurrente** | **$79.5 M** | **$79.5 M** | **$53.0 M** | **$212.0 M** |
| Implementación (aprovisionamiento + migración, única) | $266.0 M | — | — | $266.0 M |
| Contingencia + margen (~12%) | — | — | — | $57.0 M |
| **TOTAL orientativo (sin IVA)** | — | — | — | **~$535 M** |

*Escenario de referencia (extremo bajo). Rango ROM completo: $480–780 M; base ~$600 M.*

## Notas de cotización

- El **aprovisionamiento de hardware** del CDP (que se **dona** a la SEP) puede facturarse como **implementación en el Periodo 1** o **amortizarse** en el precio mensual del servicio; definir el esquema y confirmar con la SEP el modelo de pago (Ref. I.5, pagos a mes vencido / avance).
- Los **motores de base de datos** (Oracle EE/RAC, SQL, Informix) **no se incluyen** si la SEP los licencia (pregunta #20). Si la SEP no los aporta, agregar la partida correspondiente (impacto +$50–120 M).
- El **DRP** casi no lleva compra de equipo (se reutiliza el parque de la SEP): su precio es principalmente **servicio + soporte + los pocos elementos nuevos** (antiransomware, respaldo a disco, enlaces).
- Verificar el **formato oficial** de la propuesta económica de la convocatoria; esta estructura debe volcarse a ese formato.

**El detalle editable (por concepto, con base mensual y por periodo) está en `Propuesta_Economica_Template.csv`.**
