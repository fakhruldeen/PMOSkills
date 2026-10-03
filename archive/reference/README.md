# reference/ — PMBOK 8 Reference Layer

**Status:** Fully Aligned · Core Reference Complete
**Version:** 4.5.0
**Authority:** PMBOK8 Primary · PMI Companion References Secondary
**File Path:** `reference/README.md`
**Last Updated:** 2026-06-01 · Phase 0 — Structural Cleanup Finalization

---

## Purpose

This directory contains the authoritative PMBOK 8 reference layer — structured, source-grounded content for every principle, performance domain, focus area, process, input/output, tool/technique, and appendix. It is designed to support book authoring, AI agent knowledge bases, and MCP server resource endpoints.

---

## Current State

```
reference/
├── README.md                                    ← This file
│
├── processes/                                   ← ✅ COMPLETE (42 files)
│   ├── index.md                              ← Master index of all 40 processes
│   ├── index.md                                 ← Navigation index
│   └── PR01–PR40 *.md                           ← One file per PMBOK 8 process (40 files)
│
├── principles/                                  ← ✅ COMPLETE (14 files)
│   ├── index.md                              ← Master index of principles
│   ├── index.md                                 ← Navigation index
│   └── P01–P12 *.md                             ← One file per PMBOK 8 principle (12 files)
│
├── performance-domains/                         ← ✅ COMPLETE (10 files)
│   ├── index.md                              ← Master index of domains
│   ├── index.md                                 ← Navigation index
│   └── PD01–PD08 *.md                           ← One file per performance domain (8 files)
│
├── focus-areas/                                 ← ✅ COMPLETE (6 files)
│   ├── index.md                                 ← Navigation index
│   └── FA01–FA05 *.md                           ← One file per lifecycle focus area (5 files)
│
├── knowledge-areas/                             ← ✅ COMPLETE (1 file)
│   └── KA-Crossref-Index.md                     ← Knowledge Area cross-reference index (migrated from C5)
│
├── tools-techniques/                            ← ✅ COMPLETE (1 file)
│   └── TT-Taxonomy-Index.md                     ← Tools & Techniques taxonomy index (migrated from C6)
│
├── inputs-outputs/                              ← ✅ COMPLETE (1 file)
│   └── IO-Registry-Index.md                     ← Master I/O registry (73 artifacts, 40 processes) (migrated from C7)
│
└── appendices/                                  ← [planned]
    ├── X2-pmo.md
    ├── X3-ai.md
    ├── X4-procurement.md
    └── X5-evolution.md
```

---

## Build Status

| Directory | Status | Files | Notes |
|---|---|---|---|
| `principles/` | ✅ Complete | 14 | 12 principles + index + 00-index |
| `performance-domains/` | ✅ Complete | 10 | 8 performance domains + index + 00-index |
| `focus-areas/` | ✅ Complete | 6 | 5 focus areas + index |
| `processes/` | ✅ Complete | 42 | PR01–PR40 + 2 index files |
| `knowledge-areas/` | ✅ Complete | 1 | KA cross-reference index |
| `tools-techniques/` | ✅ Complete | 1 | TT taxonomy index |
| `inputs-outputs/` | ✅ Complete | 1 | IO master registry (73 artifacts) |
| `appendices/` | ⏳ Planned | 0 | 4 files |

---

## Build Priority (Future Layers)

| Priority | Directory | Rationale |
|---|---|---|
| 1 | `appendices/` | Supplementary PMO, AI, Sourcing appendices |
| 2 | `companion-references/` | Detailed mappings for 23 PMI references |
| 3 | `tailoring/` | Tailoring heuristics per project profile |

---

## Key Reference Files

| File | Description |
|---|---|
| `principles/index.md` | Master index of all 12 PMBOK principles |
| `performance-domains/index.md` | Master index of all 8 performance domains |
| `focus-areas/index.md` | Lifecycle phase mappings |
| `processes/index.md` | Master index of all 40 PMBOK processes |
| `processes/PR01–PR40` | Individual process records with I/T&T/O |
| `knowledge-areas/KA-Crossref-Index.md` | KA → Process cross-reference |
| `tools-techniques/TT-Taxonomy-Index.md` | Full TT taxonomy (PMBOK 8) |
| `inputs-outputs/IO-Registry-Index.md` | 73 artifacts × 40 processes registry |

---

## Dependencies

- `SKILL-REGISTRY.md` — skills reference process anchors defined in `processes/`
- `PRINCIPLES-CROSSWALK.md` — draws from `principles/` and `performance-domains/` content
- MCP server resource endpoints serve content from this directory
- Book authoring chapters draw source content from `processes/` and `principles/`

---

*Authority: PMBOK 8th Edition Primary | Process Groups Practice Guide Secondary*
*Phase 0 — Structural Cleanup complete 2026-06-01*
