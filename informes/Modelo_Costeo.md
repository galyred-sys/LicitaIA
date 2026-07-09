# Modelo de Costeo (detallado por partida)
## Servicio Administrado de Centro de Datos SEP 2026‑2027

**Naturaleza:** estimación **orientativa (ROM ±35%)** modelada a partir de la volumetría del Anexo Técnico y supuestos de mercado (México, 2026). **No sustituye** cotizaciones de fabricante. Todos los importes en **MXN sin IVA**, para el término de **~16 meses** (1/sep/2026 – 31/dic/2027). El detalle editable está en `Modelo_Costeo.csv`.

## Resumen por bloque

| Bloque | Subtotal BAJO | Subtotal ALTO |
|---|---:|---:|
| Servicios transversales (plantilla, SOC/SIEM, mesa, SSL, borrado) | $80.8 M | $120.0 M |
| CD Principal — cómputo (x86/Power/SPARC) | $55.0 M | $125.0 M |
| CD Principal — almacenamiento y respaldo | $45.0 M | $100.0 M |
| CD Principal — seguridad y red | $45.0 M | $97.0 M |
| CD Principal — coubicación, enlaces y software | $60.0 M | $116.0 M |
| CD DRP — coubicación, reactivación, EDR, enlaces, soporte | $29.0 M | $66.0 M |
| Nube AWS + Azure (72 servidores) | $16.0 M | $32.0 M |
| Servicios (bóveda, migración/transición) | $14.0 M | $32.0 M |
| **Subtotal** | **~$348 M** | **~$688 M** |
| Contingencia + margen (~12%) | $42 M | $82 M |
| **TOTAL orientativo (16 meses, sin IVA)** | **~$480 M** | **~$780 M** |

**Escenario base ≈ $600 M MXN.**

## Los dos factores que más mueven el total

| Factor | Efecto |
|---|---|
| **Regla 40/60** interpretada como 2.5× instalada (vs. escalable) | **+$120–180 M** en cómputo y almacenamiento del CDP |
| **Motores de BD licenciados por la SEP** (Oracle EE/RAC, SQL, Informix) | **−$50–120 M** si se confirma que no van en la cotización |

## Estructura de cotización (cómo se presenta)

- El pliego pide **precios unitarios en periodos de 6 meses** (Ref. I.13). Este modelo agrega el costo; para la propuesta económica hay que **desglosarlo por partida y periodo semestral**.
- Contrato **abierto, máximos y mínimos**: cotizar el **precio unitario**, no un monto cerrado. La cifra total depende del consumo entre el mínimo y el máximo del presupuesto de la SEP (pendiente de aclarar, ver pregunta #1 de la junta).

## Palancas para bajar el precio (decisivo en adjudicación binaria)

1. **Reutilizar el 100% del parque de la SEP en el DRP** (cero compra de cómputo/almacenamiento/red/seguridad para el DRP).
2. **Confirmar que la SEP licencia los motores de BD** (elimina el rubro más caro).
3. **Leer la regla 40/60 como capacidad escalable**, no 2.5× instalada.
4. **Estandarizar marcas CDP = DRP** (F5/Imperva/Fortinet/Commvault): una consola, una plantilla, refacciones comunes.
5. **Right‑sizing y densidad** en x86 (overcommit exacto 3:1) para minimizar hosts y licencias VMware.
6. **Open source** donde el inventario ya lo permite (MySQL/MariaDB/PostgreSQL, monitoreo).
7. **Cotizar cada mínimo al literal**, sin sobre‑diseñar (no da puntos y sube el precio).

*Supuestos de costo unitario detallados en el CSV. Validar con cotizaciones de fabricante y distribuidor antes de ofertar.*
