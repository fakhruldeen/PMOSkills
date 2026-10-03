# shared/ — Reusable Components and Validators
**Status:** Planned · Not yet built
**Version:** 0.1.0-planned
**Authority:** Repo Operating Rules · SKILL-REGISTRY.md
**File Path:** `shared/README.md`

---

## Purpose

This directory will contain reusable, modular components that are shared across multiple skills — field blocks, section patterns, validators, routing logic, and readiness checklists. The goal is to avoid duplication across skill files and enable consistent, machine-readable skill execution.

---

## Planned Structure

```
shared/
├── README.md                          ← This file
├── components/
│   ├── index.md                       ← [planned] Component catalog
│   ├── field-blocks/
│   │   ├── status-fields.md           ← [planned] Standard status field definitions
│   │   ├── date-fields.md             ← [planned] Date and timeline field patterns
│   │   └── id-formats.md              ← [planned] ID format definitions (CR-NNN, R-NNN, etc.)
│   └── section-patterns/
│       ├── inputs-section.md          ← [planned] Reusable inputs section template
│       ├── outputs-section.md         ← [planned] Reusable outputs section template
│       └── quality-criteria-section.md ← [planned] Standard quality criteria pattern
├── validators/
│   ├── index.md                       ← [planned] Validator catalog
│   ├── waste-test.md                  ← [planned] Waste detection routine
│   ├── artifact-quality-check.md      ← [planned] Artifact completeness validator
│   └── baseline-integrity-check.md    ← [planned] Cross-baseline consistency checker
├── routing/
│   ├── index.md                       ← [planned] Routing logic catalog
│   ├── threshold-router.md            ← [planned] T1–T4 decision routing logic
│   └── escalation-paths.md            ← [planned] Escalation path definitions per decision type
└── checklists/
    ├── index.md                       ← [planned] Checklist catalog
    ├── pack-readiness/
    │   ├── pack-01-readiness.md       ← [planned]
    │   ├── pack-02-readiness.md       ← [planned]
    │   ├── pack-03-readiness.md       ← [planned]
    │   ├── pack-04-readiness.md       ← [planned]
    │   ├── pack-05-readiness.md       ← [planned]
    │   ├── pack-06-readiness.md       ← [planned]
    │   └── pack-07-readiness.md       ← [planned]
    └── domain-checklists/
        ├── scope-readiness.md         ← [planned]
        ├── schedule-readiness.md      ← [planned]
        ├── risk-readiness.md          ← [planned]
        └── closure-readiness.md       ← [planned]
```

---

## Build Priority

| Priority | Directory | Rationale |
|----------|-----------|----------|
| 1 | `routing/` | Supports MCP server and AI agent routing logic |
| 2 | `validators/` | Supports skill quality gates |
| 3 | `checklists/` | Supports pack readiness verification |
| 4 | `components/` | Refactoring support — lowest urgency |

---

## Dependencies

- `AUTHORITY-ROUTING.md` — routing logic source for `routing/threshold-router.md`
- All 47 skills — validators will run against skill outputs
- MCP server — routing logic will be exposed as tool endpoints

---

*Status: Planned · Build begins after reference layer · Authority: Repo Operating Rules*
*Last Updated: 2026-05-30 · Patch I*
