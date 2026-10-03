# shared/components/field-blocks/date-fields.md — Standard Date Fields
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md
**File Path:** `shared/components/field-blocks/date-fields.md`

---

## Purpose

This component defines standardized date and timeline field formats for all repository schedules, change records, and milestone markers, ensuring robust ISO 8601 parsing.

---

## Standardized Date Formats

| Date Field Type | Format Standard | Format Example | Notes |
|---|---|---|---|
| **Calendar Date** | `YYYY-MM-DD` | `2026-06-02` | Used for target milestones, baselines, and logs. |
| **Date-Time (UTC)**| `YYYY-MM-DDThh:mm:ssZ` | `2026-06-02T14:50:00Z`| Used in version histories and system log stamps. |
| **Fiscal Quarter** | `YYYY-QN` | `2026-Q2` | Used for strategic macro-level portfolio planning. |

---

## Code/Markdown Integration Examples

```yaml
# Front-matter standard
target_date: "2026-06-02"
last_updated: "2026-06-02T14:50:00Z"
```

---

*Authority: PMOSkills Shared Component Standard*
