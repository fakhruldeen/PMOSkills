---
artifact_id: A27
artifact_name: Project Closure Record
artifact_type: template
version: "1.0.0"
status: Template · Active
parent_definition: artifacts/closure/A27-project-closure-record.md
authority: PMBOK8 Guide §2.1.8 Closing; Figure 2-6
---

# A27 — Project Closure Record Template

> **Usage:** Produce one instance per closure event (phase closure or final project closure). Sections 1–10 and the checklist apply to all closures. Section 11 (Premature Closure Supplement) applies only to terminated projects. Replace every `[FIELD: ...]` placeholder. Sponsor or governance body approval is mandatory — PM cannot self-approve.

---

## Section 1 — Closure Overview

| Field | Entry |
|---|---|
| Project name | [FIELD: Full project name] |
| Project ID | [FIELD: Project identifier] |
| Closure type | [FIELD: Phase closure / Final project closure / Premature termination] |
| Phase name (if phase closure) | [FIELD: Phase name or N/A] |
| Closure initiated by | [FIELD: PM name and role] |
| Closure date | [FIELD: YYYY-MM-DD] |
| Project sponsor | [FIELD: Sponsor name] |
| Project manager | [FIELD: PM name] |
| Reference: A14 Integrated PM Plan | [FIELD: Version: v? · Date: YYYY-MM-DD] |
| Reference: A17 Final Performance Report | [FIELD: Version: v? · Date: YYYY-MM-DD] |

---

## Section 2 — Objectives Achievement Summary

| Objective ID | Objective description (from A04) | Achievement status | Notes / variance |
|---|---|---|---|
| OBJ-001 | [FIELD: Copy from A04 Charter] | [FIELD: ☐ Achieved ☐ Partially achieved ☐ Not achieved] | [FIELD: Explain variance if not fully achieved] |
| OBJ-002 | [FIELD: Copy from A04 Charter] | [FIELD: ☐ Achieved ☐ Partially achieved ☐ Not achieved] | [FIELD: Notes] |

**Overall objectives achievement assessment:**
[FIELD: One paragraph narrative summarizing overall achievement against charter objectives]

---

## Section 3 — Deliverable Acceptance Log

> Every deliverable in A08 must have a row. All must be accepted before final closure approval.

| Deliverable ID | Deliverable name | A08 reference | Acceptance authority | Acceptance date | Acceptance method | Status | Notes |
|---|---|---|---|---|---|---|---|
| DEL-001 | [FIELD: Name from A08] | [FIELD: A08 WBS code or section] | [FIELD: Name and role] | [FIELD: YYYY-MM-DD] | [FIELD: ☐ Formal sign-off ☐ Review board ☐ Sprint review ☐ Other] | [FIELD: ☐ Accepted ☐ Conditionally accepted ☐ Rejected] | [FIELD: Conditions, exceptions, or notes] |

**Outstanding deliverable items (if any):** [FIELD: Describe or state "None"]

---

## Section 4 — Scope, Schedule, and Quality Final Assessment

| Dimension | Baseline (from A14) | Final actual | Variance | Variance within threshold? | Notes |
|---|---|---|---|---|---|
| Scope | [FIELD: Approved scope from A08] | [FIELD: Actual scope delivered] | [FIELD: Describe additions or omissions] | [FIELD: ☐ Yes ☐ No] | [FIELD: Approved CRs ref — A12] |
| Schedule — planned end date | [FIELD: YYYY-MM-DD from A15] | [FIELD: YYYY-MM-DD actual] | [FIELD: +/− days] | [FIELD: ☐ Yes ☐ No] | |
| Schedule — milestone achievement | [FIELD: % milestones met on time] | [FIELD: Actual %] | [FIELD: Delta] | [FIELD: ☐ Yes ☐ No] | |
| Quality — acceptance rate | [FIELD: Target acceptance rate from A09] | [FIELD: Actual rate] | [FIELD: Delta] | [FIELD: ☐ Yes ☐ No] | |

---

## Section 5 — Financial Closure

| Field | Entry |
|---|---|
| Original budget at completion (BAC) — from A16 | [FIELD: Currency amount] |
| Approved budget changes via A12 | [FIELD: +/− currency amount cumulative] |
| Final approved BAC | [FIELD: Currency amount] |
| Actual cost at completion (AC) | [FIELD: Currency amount] |
| Cost variance (CV = BAC − AC) | [FIELD: Currency amount — positive is favourable] |
| Final contingency reserve consumed | [FIELD: Currency amount] |
| Final contingency reserve remaining (returned) | [FIELD: Currency amount] |
| Management reserve consumed | [FIELD: Currency amount or "None"] |
| Management reserve remaining (returned) | [FIELD: Currency amount] |
| Outstanding invoices or obligations | [FIELD: ☐ None ☐ Details: describe] |
| Financial closure confirmed by | [FIELD: Name and role] |
| Financial closure date | [FIELD: YYYY-MM-DD] |

---

## Section 6 — Contract and Procurement Closure

| Contract / Supplier | A31 reference | Contract close date | Final settlement status | Outstanding claims | Closed by |
|---|---|---|---|---|---|
| [FIELD: Supplier name] | [FIELD: A31 Contract ID] | [FIELD: YYYY-MM-DD] | [FIELD: ☐ Settled ☐ Pending ☐ Disputed] | [FIELD: Describe or "None"] | [FIELD: Name] |

**Procurement closure confirmed:** [FIELD: ☐ Yes — all contracts closed · ☐ Pending — details below]

---

## Section 7 — Resource Release Record

| Resource / Role | A26 reference | Release date | Return destination | Handover completed | Notes |
|---|---|---|---|---|---|
| [FIELD: Name / Role] | [FIELD: A26 entry reference] | [FIELD: YYYY-MM-DD] | [FIELD: ☐ Internal pool ☐ Next project ☐ External release] | [FIELD: ☐ Yes ☐ No] | [FIELD: Notes] |

**All resources formally released:** [FIELD: ☐ Yes ☐ Pending — details:]

---

## Section 8 — OPA Update Log

| OPA Item | Source artifact | Transfer destination | Transfer date | Confirmed by |
|---|---|---|---|---|
| Lessons learned (closure knowledge package) | A21 | [FIELD: OPA system / folder] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Final project plan and baselines | A14 | [FIELD: Archive location] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Final risk register | A19 | [FIELD: Archive location] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Final performance reports | A17 | [FIELD: Archive location] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Templates updated or created | [FIELD: List] | [FIELD: Location] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Estimating data (cost and schedule actuals) | A15 · A16 | [FIELD: Estimating database or folder] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |

**OPA transfer complete:** [FIELD: ☐ Yes ☐ Pending — details:]

---

## Section 9 — Lessons Learned Reference

| A21 Reference | Phase or area | Key theme | Status |
|---|---|---|---|
| [FIELD: A21 version and LL IDs] | [FIELD: Phase or domain] | [FIELD: One-line theme] | [FIELD: ☐ Transferred to OPA ☐ Pending transfer] |

**A21 Closure Knowledge Package reference:** [FIELD: Version: v? · Date transferred: YYYY-MM-DD]

---

## Section 10 — Stakeholder Notifications

| Stakeholder / Group | A07 reference | Notification method | Notification date | Confirmed by |
|---|---|---|---|---|
| Sponsor | [FIELD: A07 row] | [FIELD: Meeting / Email / Formal letter] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Customer / client | [FIELD: A07 row] | [FIELD: Method] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Functional managers | [FIELD: A07 row] | [FIELD: Method] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |
| Other key stakeholders | [FIELD: A07 rows] | [FIELD: Method] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |

---

## Section 11 — Premature Closure Supplement

> **Complete only if the project is being terminated before planned completion.**

| Field | Entry |
|---|---|
| Reason for premature closure | [FIELD: ☐ Strategic decision ☐ Funding withdrawal ☐ Scope no longer viable ☐ Force majeure ☐ Other — describe] |
| Termination decision authority | [FIELD: Name and role] |
| Termination decision date | [FIELD: YYYY-MM-DD] |
| Deliverables completed and accepted | [FIELD: List DEL IDs accepted before termination] |
| Work in progress — disposition | [FIELD: ☐ Transferred ☐ Archived ☐ Destroyed — describe] |
| Sunk costs | [FIELD: Currency amount of spend to date with no recoverable value] |
| Salvage value (if any) | [FIELD: Currency amount or "None"] |
| Organizational impact assessment | [FIELD: Brief description of business impact of termination] |
| Escalation required? | [FIELD: ☐ Yes — details ☐ No] |

---

## Closure Checklist

| # | Item | Status |
|---|---|---|
| 1 | All deliverables in Section 3 accepted (no Rejected status) | [FIELD: ☐ Complete ☐ Pending] |
| 2 | Financial closure complete (Section 5 reconciled) | [FIELD: ☐ Complete ☐ Pending] |
| 3 | All contracts closed and recorded in A31 (Section 6) | [FIELD: ☐ Complete ☐ Pending ☐ N/A] |
| 4 | All resources formally released (Section 7) | [FIELD: ☐ Complete ☐ Pending] |
| 5 | OPA transfer complete (Section 8) | [FIELD: ☐ Complete ☐ Pending] |
| 6 | A21 closure knowledge package transferred (Section 9) | [FIELD: ☐ Complete ☐ Pending] |
| 7 | All stakeholders notified (Section 10) | [FIELD: ☐ Complete ☐ Pending] |
| 8 | Premature closure supplement completed if applicable (Section 11) | [FIELD: ☐ Complete ☐ N/A] |
| 9 | Section 12 approval obtained from sponsor or governance body | [FIELD: ☐ Complete ☐ Pending] |

---

## Section 12 — Final Closure Approval

| Field | Entry |
|---|---|
| Closure declared by (Project Manager) | [FIELD: PM name · Date: YYYY-MM-DD] |
| Approved by (Sponsor / Governance body) | [FIELD: Name · Role] |
| Approval date | [FIELD: YYYY-MM-DD] |
| Conditions of approval (if any) | [FIELD: Describe any conditions or state "None"] |
| A27 record status | [FIELD: ☐ Approved — project formally closed] |

---

*Authority: PMBOK8 Guide §2.1.8 Closing; Figure 2-6*
*Source type: PMI-derived · Version: 1.0.0 · Parent definition: artifacts/closure/A27-project-closure-record.md*
