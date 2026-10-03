# shared/components/index.md — Component Catalog
**Status:** Active
**Version:** 1.0.0
**Authority:** Repo Operating Rules · SKILL-REGISTRY.md
**File Path:** `shared/components/index.md`

---

## Purpose

The `shared/components/` directory contains reusable building blocks—field blocks and section patterns—designed to maintain consistent schemas and styling across all skills and artifact templates in the repository.

---

## Component Index

### Field Blocks
These define micro-level schemas for individual data points.

| Component | File Path | Scope |
|-----------|-----------|-------|
| **Status Fields** | [`field-blocks/status-fields.md`](./field-blocks/status-fields.md) | Standard status levels (`Draft`, `Under Review`, `Approved`, `Archived`) |
| **Date Fields** | [`field-blocks/date-fields.md`](./field-blocks/date-fields.md) | Standardized formats for milestones, baselines, and changes |
| **ID Formats** | [`field-blocks/id-formats.md`](./field-blocks/id-formats.md) | Standardized unique identifier formatting rules |

### Section Patterns
These define macro-level layouts and section templates for larger blocks.

| Component | File Path | Scope |
|-----------|-----------|-------|
| **Inputs Section** | [`section-patterns/inputs-section.md`](./section-patterns/inputs-section.md) | Standardized input document routing format |
| **Outputs Section** | [`section-patterns/outputs-section.md`](./section-patterns/outputs-section.md) | Standardized output deliverable schema |
| **Quality Criteria**| [`section-patterns/quality-criteria-section.md`](./section-patterns/quality-criteria-section.md) | Metric gates and threshold tables |

---

*Authority: PMBOK8 Governance Performance Domain §2.1 · PMOSkills Repository*
*Last Updated: 2026-06-02 · Initial Release*
