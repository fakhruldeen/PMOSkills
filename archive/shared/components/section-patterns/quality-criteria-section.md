# shared/components/section-patterns/quality-criteria-section.md — Standard Quality Criteria Pattern
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md §3.5 Headings Schema
**File Path:** `shared/components/section-patterns/quality-criteria-section.md`

---

## Purpose

This section pattern defines a standard markdown template layout for documenting quality criteria and gates inside skill files, guaranteeing unified testing metrics.

---

## The Quality Criteria Markdown Template

```markdown
## Quality Criteria

Metric-based gates required for successful delivery approval:

| Gate ID | Quality Gate Criteria | Target Metric / Tolerance | Verification Tool |
|---|---|---|---|
| Q-Scope-01 | All WBS packages have dictionary definitions. | 100% dictionary coverage | `artifact-quality-check.md` |
| Q-Scope-02 | WBS package IDs map to unique cost lines. | 100% budget alignment | `baseline-integrity-check.md`|
```

---

*Authority: PMOSkills Shared Component Standard*
