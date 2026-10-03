# tests/integration-tests/index.md — Integration Test catalog
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md §7.5 Phase 6 gate
**File Path:** `tests/integration-tests/index.md`

---

## Purpose

This catalog indexes all **7 cross-skill integration flow test suites** designed to trace artifact flows, verify gate transition conditions, and check system integrity throughout the lifecycle.

---

## Integration Test Index

| Integration Test ID | Flow Focus | Scope / Lifecycle Transition | Reference File Link |
|---|---|---|---|
| **IT-01** | Setup to Initiating | Pack 01 Governance ➔ Pack 02 Initiating Handovers | [`IT-01-setup-to-initiating.md`](./IT-01-setup-to-initiating.md) |
| **IT-02** | Initiating to Planning | Pack 02 Charter ➔ Pack 03 Detailed Baselines | [`IT-02-initiating-to-planning.md`](./IT-02-initiating-to-planning.md) |
| **IT-03** | Planning to Executing | Pack 03 Baselines ➔ Pack 04 Execution and Boarding | [`IT-03-planning-to-executing.md`](./IT-03-planning-to-executing.md) |
| **IT-04** | Executing to Monitoring | Pack 04 Actuals ➔ Pack 05 EVM, Waste Tests, & Change Requests | [`IT-04-executing-to-mc.md`](./IT-04-executing-to-mc.md) |
| **IT-05** | Controlling to Closing | Pack 05 Validations ➔ Pack 06 Operations Handover & Archiving | [`IT-05-mc-to-closing.md`](./IT-05-mc-to-closing.md) |
| **IT-06** | Hybrid Overlay | Pack 07 Agile backlog iteration ➔ Pack 03/05 Predictive Controls | [`IT-06-hybrid-overlay.md`](./IT-06-hybrid-overlay.md) |
| **IT-07** | E2E Full Lifecycle | Pack 01 Setup ➔ Pack 06 Decommissioning & Full Lifecycle Sync | [`IT-07-full-lifecycle.md`](./IT-07-full-lifecycle.md) |

---

*Authority: PMBOK8 Core Standard & PMO Governance Board*
