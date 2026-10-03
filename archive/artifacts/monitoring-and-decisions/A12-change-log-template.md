---
artifact_id: A12
artifact_name: Change Log
artifact_type: template
version: "1.0.0"
status: Template · Active
parent_definition: artifacts/monitoring-and-decisions/A12-change-log.md
authority: PMBOK8 Guide §2.1.6.6; AUTHORITY-ROUTING.md; Process-Groups §4.4
---

# A12 — Change Log Template

> **Usage:** Open this record at project start. Log every change request from submission through final disposition. No baseline may be changed without an approved CR in A12. A12 is a living record — it has no baseline version of its own. Replace every `[FIELD: ...]` placeholder with project-specific content.

---

## Section 1 — Record Header

| Field | Entry |
|---|---|
| Project or initiative name | [FIELD: Full project name] |
| Project ID | [FIELD: Project identifier] |
| Project manager | [FIELD: PM name] |
| Change control authority | [FIELD: Name of CCB chair or decision authority] |
| Record opened | [FIELD: YYYY-MM-DD] |
| Linked artifacts | A06 · A08 · A14 · A15 · A16 · A17 · A19 · A27 |

---

## Section 2 — Change Register

> One row per change request. Assign CR-NNN sequentially. Do not reuse or delete IDs — use "Cancelled" status instead.

| CR ID | Date raised | Raised by | Description | Justification | Impact — Scope | Impact — Schedule (days) | Impact — Cost | Impact — Risk | Impact — Quality | Authority threshold | Disposition | Disposition date | Decided by | Baseline updates | Implementation status | Verification date | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-001 | [FIELD: YYYY-MM-DD] | [FIELD: Name · Role] | [FIELD: Clear description of the requested change] | [FIELD: Business reason or driver] | [FIELD: Effect on A08 scope baseline] | [FIELD: +/− days on critical path] | [FIELD: +/− currency amount] | [FIELD: New or modified risks — A19 ref] | [FIELD: Quality criteria affected or None] | [FIELD: T1 / T2 / T3 / T4] | [FIELD: Approved / Rejected / Deferred / Cancelled] | [FIELD: YYYY-MM-DD] | [FIELD: PM / Sponsor / Governance body] | [FIELD: A08 v? / A15 v? / A16 v? / A19 ref / None] | [FIELD: Not started / In progress / Complete / Verified] | [FIELD: YYYY-MM-DD or N/A] | [FIELD: Additional context] |

---

## Section 3 — Baseline Update Log

> Record every baseline that was updated as a result of an approved CR.

| CR ID | Baseline artifact | Previous version | New version | Update date | Updated by | Change summary |
|---|---|---|---|---|---|---|
| CR-001 | [FIELD: A08 / A15 / A16 / A19 / A14] | [FIELD: v?] | [FIELD: v?] | [FIELD: YYYY-MM-DD] | [FIELD: Name] | [FIELD: Brief description of what changed in the baseline] |

---

## Section 4 — Change Summary Statistics

> Update at each reporting cycle for inclusion in A17.

| Metric | Count | Notes |
|---|---|---|
| Total CRs raised to date | [FIELD: Number] | |
| Approved | [FIELD: Number] | |
| Rejected | [FIELD: Number] | |
| Deferred | [FIELD: Number] | |
| In review (open) | [FIELD: Number] | |
| Cancelled | [FIELD: Number] | |
| CRs resulting in scope change | [FIELD: Number] | |
| CRs resulting in schedule change | [FIELD: Number] | |
| CRs resulting in cost change | [FIELD: Number] | |
| Cumulative approved cost change | [FIELD: Currency amount — positive = increase] | |
| Cumulative approved schedule change | [FIELD: +/− days] | |

---

*Authority: PMBOK8 Guide §2.1.6.6 Assess and Implement Changes; AUTHORITY-ROUTING.md T1–T4; Process-Groups §4.4*
*Source type: PMI-derived · Version: 1.0.0 · Parent definition: A12-change-log.md*
