# shared/components/field-blocks/status-fields.md — Standard Status Fields
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md
**File Path:** `shared/components/field-blocks/status-fields.md`

---

## Purpose

This component defines standard metadata status fields to be used across all artifact templates and planning logs. Standardizing status naming ensures machine readability and reliable query/filter performance.

---

## Status Classification Schema

| Status Value | Meaning / Scope | Allowed Transitions |
|---|---|---|
| **Draft** | The artifact is currently being drafted or refactored; WIP. | → `Under Review` |
| **Under Review**| The artifact has passed self-audit and is undergoing review. | → `Draft` or `Approved` |
| **Approved** | The artifact has passed all validation gates and is baselined. | → `Archived` or `Under Review` (for updates) |
| **Archived** | The project is complete or the artifact has been superseded. | None (Read-Only) |

---

## Front-Matter Pattern Examples

```yaml
# Used in L1/L2 front-matter schemas
status: "Approved" # Must be exactly one of: Draft, Under Review, Approved, Archived
```

---

*Authority: PMOSkills Shared Component Standard*
