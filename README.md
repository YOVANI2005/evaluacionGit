# evaluacionGit

Repositorio de evaluación — Taller práctico de control de versiones con Git y GitHub.

**Asignatura:** Ingeniería de Software III (FI303290)
**Estudiante:** César Yovany Rua Quiñones
**Usuario de GitHub:** [YOVANI2005](https://github.com/YOVANI2005)
**Período académico:** 2026-2

## Contexto

Este repositorio simula la organización de un proyecto de microservicios para
una **EPS (Entidad Promotora de Salud)**, gestionado mediante tres ramas con
contenido divergente:

| Rama | Contenido |
|---|---|
| `main` | Esqueleto de microservicios + documento de estructura |
| `desarrollo` | Todo lo anterior + `Docs/` (arquitectura) + `Algoritmos_pruebas/` |
| `pruebas` | Todo lo anterior (creada desde `main`) + `Algoritmos_pruebas/` (sin `Docs/`) |

## Estructura de microservicios (`eps-microservicios/`)

- `api-gateway/` — enrutamiento y autenticación de entrada
- `ms-autenticacion/` — login, roles y JWT
- `ms-afiliados/` — registro y consulta de usuarios EPS
- `ms-citas-medicas/` — agenda y disponibilidad de citas
- `ms-historia-clinica/` — diagnósticos y evolución clínica
- `ms-autorizaciones/` — procedimientos y remisiones
- `ms-facturacion/` — pagos, copagos y cuotas moderadoras
- `ms-farmacia/` — dispensación de medicamentos
- `ms-notificaciones/` — envío de email, SMS y push

Ver el documento `EstructuraMicroservicios_EPS.docx` para el detalle completo.
