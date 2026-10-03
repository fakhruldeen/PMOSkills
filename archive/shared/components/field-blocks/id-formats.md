# shared/components/field-blocks/id-formats.md — Standard ID Formats
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md
**File Path:** `shared/components/field-blocks/id-formats.md`

---

## Purpose

This component defines standard ID prefix rules and regex constraints to enforce clean traceability across all project documents, issues, changes, and risks.

---

## ID Formatting Standard

| Prefix | Domain / Scope | Regex Constraint | Example |
|---|---|---|---|
| **A-NN** | Canonical Core Artifact | `^A\d{2}$` | `A04`, `A15` |
| **A-NEW-XXX**| Extension/New Artifacts | `^A-NEW-[A-Z]{3,8}$` | `A-NEW-SUST` |
| **PR-NN** | PMI Process Records | `^PR\d{2}$` | `PR01`, `PR41` |
| **SKL-NN-NN**| Core Skills Registry | `^SKL-\d{2}-\d{2}$` | `SKL-03-02` |
| **CR-NNN** | Change Requests | `^CR-\d{3}$` | `CR-001` |
| **R-NNN** | Risk Registry | `^R-\d{3}$` | `R-012` |
| **I-NNN** | Issues | `^I-\d{3}$` | `I-004` |
| **ACT-NNN** | Action Items | `^ACT-\d{3}$` | `ACT-108` |

---

*Authority: PMOSkills Shared Component Standard*
