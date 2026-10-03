# A12 — Change Log
**Artifact ID:** A12
**Artifact Name:** Change Log
**Version:** 1.0.0
**Status:** Definition · Active
**Authority:** PMBOK8 Guide §2.1.6.6 · AUTHORITY-ROUTING.md · Process-Groups §4.4
**Source Type:** PMI-derived
**File Path:** `artifacts/monitoring-and-decisions/A12-change-log.md`

---

## Definition

The Change Log is the authoritative record of all change requests raised against the project — covering scope, schedule, cost, quality, resources, and any approved deviation from baselined plans. Every change request has a lifecycle entry in A12 from submission through disposition (approved / rejected / deferred) through implementation verification.

**PMI Source:** PMBOK8 Guide §2.1.6.6 — Assess and Implement Changes; AUTHORITY-ROUTING.md (T1–T4 threshold model).

---

## Artifact Type

| Field | Value |
|-------|-------|
| **Category** | Monitoring & Decisions |
| **Type** | Living change control record |
| **Lifecycle** | Opened at first change request · Maintained throughout execution and M&C · Closed at project closure |
| **Baseline?** | No — living record. Approved changes update the relevant baselines (A08, A15, A16, A19, A14) |
| **Ownership** | Project Manager / Change Control Board (CCB) |

---

## Purpose

- Provide a single, auditable record of every change request and its disposition
- Enforce the T1–T4 threshold model for change authority
- Track baseline impacts of approved changes
- Prevent unauthorized scope, schedule, or cost changes (scope creep control)
- Feed the Final Performance Report (A17) and Closure Record (A27) with change history

---

## Change Request Entry Schema

| Field | Description |
|-------|-------------|
| **CR ID** | Unique ID — format: CR-NNN (e.g., CR-001) |
| **Date Raised** | Date change request was submitted |
| **Raised By** | Name and role of requestor |
| **Description** | Clear description of the requested change |
| **Justification** | Business reason or driver |
| **Impact — Scope** | Effect on scope baseline (A08) |
| **Impact — Schedule** | Effect on schedule baseline (A15) in days |
| **Impact — Cost** | Effect on cost baseline (A16) in currency |
| **Impact — Risk** | New or modified risks triggered (A19) |
| **Impact — Quality** | Quality criteria affected |
| **Authority Threshold** | T1 / T2 / T3 / T4 per AUTHORITY-ROUTING.md |
| **Disposition** | Approved / Rejected / Deferred |
| **Disposition Date** | Date of CCB or authority decision |
| **Decided By** | Decision authority (PM / Sponsor / Governing Body) |
| **Baseline Updates** | Which baselines were updated (A08 / A15 / A16 / A19 / A14) |
| **Implementation Status** | Not Started / In Progress / Complete / Verified |
| **Verification Date** | Date implementation was confirmed |
| **Notes** | Any additional context, conditions, or constraints |

---

## Change Control Process (per AUTHORITY-ROUTING.md)

| Step | Action |
|------|--------|
| 1 | Change request raised and logged in A12 (CR-NNN assigned) |
| 2 | Impact analysis completed (scope / schedule / cost / risk / quality) |
| 3 | Authority threshold determined (T1–T4) |
| 4 | Routed to correct decision authority |
| 5 | Disposition recorded (Approved / Rejected / Deferred) |
| 6 | If approved: baselines updated, A14 version incremented |
| 7 | Implementation tracked to completion |
| 8 | Implementation verified and CR closed |

---

## Sections

| Section | Content | Populated By |
|---------|---------|-------------|
| §1 Change Register | All CR entries using schema above | SKL-05-02 (ongoing) |
| §2 Baseline Update Log | Record of which baselines changed per approved CR | SKL-05-02 |
| §3 Change Summary Statistics | Open / approved / rejected / deferred counts per period | SKL-05-01 (reporting) |

---

## Inputs

| Input | Source |
|-------|--------|
| Change requests (any source) | Any project stakeholder |
| Baselines to assess impact against | A08 · A15 · A16 · A19 · A14 |
| Authority threshold model | AUTHORITY-ROUTING.md |
| Performance data (variance triggers) | SKL-05-01 · SKL-05-04 · SKL-05-05 |

---

## Outputs / Produces

| Output | Used By |
|--------|--------|
| Approved change record | Baseline updates (A08 / A15 / A16 / A19 / A14) |
| Rejected / deferred log | Audit trail |
| Change summary statistics | A17 (Performance Report) · A27 (Closure Record) |

---

## Quality Criteria

- Every change request has a unique CR-NNN ID
- No baseline may be changed without an approved CR in A12
- Authority threshold correctly applied per AUTHORITY-ROUTING.md
- Baseline update recorded for every approved CR
- Implementation verified before CR is closed
- Change log reviewed at every status cycle

---

## Related Artifacts

| Artifact | Relationship |
|----------|--------------|
| A06 / A14 — PM Plan | Primary target of approved changes |
| A08 — Scope Document | Scope baseline updated by approved CRs |
| A15 — Schedule Model | Schedule baseline updated by approved CRs |
| A16 — Financial Record | Cost baseline updated by approved CRs |
| A19 — Risk Record | Risk responses may trigger CRs |
| A17 — Performance Report | Change statistics reported |
| A27 — Closure Record | Full change history summarized |

---

## PMBOK8 Anchors

| Reference | Detail |
|-----------|--------|
| PMBOK8 Guide §2.1.6.6 | Assess and Implement Changes · Figure 2-8 |
| AUTHORITY-ROUTING.md | T1–T4 threshold model and escalation rules |
| Process-Groups §4.4 | Perform Integrated Change Control |
| Change-Guide §3 | Change management approach |

---

*Owner: Project Manager / CCB · Version Control: Living record, no baseline · Change Control: T1–T4 per AUTHORITY-ROUTING.md*
*Last Updated: 2026-05-30 · Patch E*
