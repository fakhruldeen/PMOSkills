# shared/components/section-patterns/inputs-section.md — Standard Inputs Section Pattern
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md §3.5 Headings Schema
**File Path:** `shared/components/section-patterns/inputs-section.md`

---

## Purpose

This section pattern defines a standard markdown template layout for documenting inputs to a process or skill file. Enforcing this structure guarantees that all downstream tools can map data flows consistently.

---

## The Inputs Markdown Template

```markdown
## Inputs

Standard input artifacts required to execute this skill:

| Input ID | Input Artifact Name | Source Process / Artifact | Mandatory? | Reference Link |
|---|---|---|---|---|
| A01 | Business Case | Initiating | Yes | [A01](../../artifacts/planning-and-baselines/A01-business-case.md) |
| A04 | Project Charter | PR01 Develop Charter | Yes | [A04](../../artifacts/planning-and-baselines/A04-project-charter.md) |
```

---

*Authority: PMOSkills Shared Component Standard*
