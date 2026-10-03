---
artifact_id: A27
artifact_name: Project Closure Record
version: "1.0.0"
status: "Template · Active"
pack: "06 — Closing"
primary_skill: "SKL-06-01 — Close Project or Phase"
secondary_skills:
  - "SKL-06-02 — Transfer Deliverables"
  - "SKL-06-03 — Capture and Archive Lessons Learned"
feeds_into:
  - "A21 — Lessons Learned Record (closure knowledge package)"
  - "A05 — Context Register (OPA update)"
receives_from:
  - "A14 — Integrated PM Plan (baseline references)"
  - "A17 — Integrated Performance Reporting Record (final status)"
  - "A21 — Lessons Learned Record (accumulated lessons)"
  - "A08 — Scope and Requirements Decision Record (acceptance status)"
  - "A16 — Financial Management and Cost Baseline Record (final financial data)"
pmbok8_anchor: "Guide §2.1.8 Closing · Figure 2-6"
performance_domains:
  - Governance
  - Delivery
  - Stakeholders
file_path: "artifacts/closure/A27-project-closure-record.md"
---

# A27 — Project Closure Record

**Artifact ID:** A27  
**Version:** 1.0.0  
**Status:** Template · Active  
**Pack:** 06 — Closing  
**Primary skill:** SKL-06-01 — Close Project or Phase  
**File path:** `artifacts/closure/A27-project-closure-record.md`

---

## Purpose

The Project Closure Record is the authoritative closing document for a project or project phase. It confirms that all deliverables have been formally accepted, all contractual and financial obligations have been settled, all organizational process assets (OPA) have been updated, and the project has been formally closed by the appropriate authority.

A27 is the final mandatory artifact of the project lifecycle. Nothing closes without it.

---

## Operating Rules

1. **One record per closure event.** A separate A27 is produced for each phase closure and for final project closure. Phase closure records feed the final closure record.
2. **Formal acceptance required.** Every deliverable in A08 must have a corresponding acceptance entry in Section 3 before this record can be approved.
3. **Financial settlement required.** A16 final financial data must be reconciled before Section 5 can be completed.
4. **OPA transfer required.** A21 closure knowledge package must be transferred to the organizational knowledge base before final closure approval.
5. **Sponsor or governance body approval required.** The PM cannot self-approve closure.
6. **Premature closure uses Section 7.** If the project is terminated before completion, Section 7 must be completed in addition to the applicable standard sections.

---

## Sections

---

### Section 1 — Closure Overview

| Field | Value |
|---|---|
| Project name | |
| Project ID | |
| Closure type | Phase closure / Final project closure / Premature termination |
| Phase name (if phase closure) | |
| Closure initiated by | |
| Closure date | |
| Project sponsor | |
| Project manager | |
| Reference: A14 (Integrated PM Plan) | Version: · Date: |
| Reference: A17 (Final Performance Report) | Version: · Date: |

---

### Section 2 — Objectives Achievement Summary

*Assess each project objective from A04 (Charter) against actual achievement.*

| Objective ID | Objective description (from A04) | Achievement status | Notes / variance |
|---|---|---|---|
| OBJ-001 | | ☐ Achieved ☐ Partially achieved ☐ Not achieved | |
| OBJ-002 | | ☐ Achieved ☐ Partially achieved ☐ Not achieved | |
| OBJ-003 | | ☐ Achieved ☐ Partially achieved ☐ Not achieved | |

**Overall objectives achievement assessment:**

---

### Section 3 — Deliverable Acceptance Log

*Every deliverable in A08 Scope Statement must have a row. All must be accepted before final closure approval.*

| Deliverable ID | Deliverable name | A08 Reference | Acceptance authority | Acceptance date | Acceptance method | Status | Notes |
|---|---|---|---|---|---|---|---|
| DEL-001 | | | | | ☐ Formal sign-off ☐ Review board ☐ Sprint review ☐ Other | ☐ Accepted ☐ Conditionally accepted ☐ Rejected | |
| DEL-002 | | | | | | | |

**Outstanding deliverable items (if any):**

---

### Section 4 — Scope, Schedule, and Quality Final Assessment

| Dimension | Baseline (from A14) | Final actual | Variance | Variance within threshold? | Notes |
|---|---|---|---|---|---|
| Scope | | | | ☐ Yes ☐ No | |
| Schedule — planned end date | | | | ☐ Yes ☐ No | |
| Schedule — milestone achievement | | | | ☐ Yes ☐ No | |
| Quality — defect rate or acceptance rate | | | | ☐ Yes ☐ No | |

---

### Section 5 — Financial Closure

| Field | Value |
|---|---|
| Original budget at completion (BAC) — from A16 | |
| Approved budget changes (via A12) | |
| Final approved BAC | |
| Actual cost at completion (AC) | |
| Cost variance (CV = BAC – AC) | |
| Final contingency reserve consumed | |
| Final contingency reserve remaining (returned) | |
| Management reserve consumed | |
| Management reserve remaining (returned) | |
| Outstanding invoices or obligations | ☐ None ☐ Details below |
| Outstanding invoice / obligation details | |
| Financial closure confirmed by | |
| Financial closure date | |

---

### Section 6 — Contract and Procurement Closure

*Reference A31 (Procurement and Supplier Management Record) for each contract.*

| Contract / Supplier | A31 reference | Contract close date | Final settlement status | Outstanding claims | Closed by |
|---|---|---|---|---|---|
| | | | ☐ Settled ☐ Pending ☐ Disputed | | |

**Procurement closure confirmed:** ☐ Yes — all contracts closed and recorded in A31  
**Notes:**

---

### Section 7 — Resource Release Record

| Resource / Role | A26 reference | Release date | Return destination | Handover completed | Notes |
|---|---|---|---|---|---|
| | | | ☐ Internal pool ☐ Next project ☐ External release | ☐ Yes ☐ No | |

**All resources formally released:** ☐ Yes ☐ Pending (details below)

---

### Section 8 — Organizational Process Assets (OPA) Update Log

*Confirm that all relevant knowledge and records have been transferred to the organizational knowledge base.*

| OPA Item | Source artifact | Transfer destination | Transfer date | Confirmed by |
|---|---|---|---|---|
| Lessons learned (closure knowledge package) | A21 | | | |
| Final project plan and baselines | A14 | | | |
| Final risk register | A19 | | | |
| Final performance reports | A17 | | | |
| Templates updated or created | | | | |
| Estimating data (cost and schedule actuals) | A15, A16 | | | |
| Other | | | | |

**OPA transfer complete:** ☐ Yes ☐ Pending (details below)

---

### Section 9 — Lessons Learned Reference

*Do not duplicate lessons here — A21 is the authoritative lessons record. Cross-reference only.*

| A21 Reference | Phase or area | Key theme | Status |
|---|---|---|---|
| | | | ☐ Transferred to OPA ☐ Pending transfer |

**A21 Closure Knowledge Package reference:** Version: · Date transferred:

---

### Section 10 — Stakeholder Notifications

*Confirm that all relevant stakeholders have been notified of project closure per A28.*

| Stakeholder / Group | A07 reference | Notification method | Notification date | Confirmed by |
|---|---|---|---|---|
| Sponsor | | | | |
| Customer / client | | | | |
| Functional managers | | | | |
| Other key stakeholders | | | | |

---

### Section 11 — Premature Closure Supplement

*Complete this section only if the project is being terminated before planned completion.*

| Field | Value |
|---|---|
| Reason for premature closure | ☐ Strategic decision ☐ Funding withdrawal ☐ Scope no longer viable ☐ Force majeure ☐ Other |
| Termination decision authority | |
| Termination decision date | |
| Deliverables completed and accepted at termination | List: |
| Deliverables in progress — disposition | ☐ Transferred ☐ Archived ☐ Destroyed |
| Work in progress — disposition | |
| Sunk costs | |
| Salvage value (if any) | |
| Organizational impact assessment | |
| Escalation required? | ☐ Yes — details below ☐ No |

---

### Section 12 — Final Closure Approval

| Field | Value |
|---|---|
| Closure declared by (Project Manager) | |
| Date declared | |
| Approved by (Sponsor / Governance body) | |
| Approval date | |
| Conditions of approval (if any) | |
| A27 record status | ☐ Approved — project formally closed |

---

## Closure Checklist

Before submitting A27 for final approval, confirm all items below:

| # | Item | Status |
|---|---|---|
| 1 | All deliverables in Section 3 accepted (no Rejected status) | ☐ |
| 2 | Financial closure complete (Section 5 reconciled) | ☐ |
| 3 | All contracts closed and recorded in A31 (Section 6) | ☐ |
| 4 | All resources formally released (Section 7) | ☐ |
| 5 | OPA transfer complete (Section 8) | ☐ |
| 6 | A21 closure knowledge package transferred (Section 9) | ☐ |
| 7 | All stakeholders notified (Section 10) | ☐ |
| 8 | Premature closure supplement completed if applicable (Section 11) | ☐ |
| 9 | Section 12 approval obtained from sponsor or governance body | ☐ |

---

## Change Log

| Version | Date | Change description | Changed by |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | Initial template | Knowledge base |
| 1.0.1 | 2026-06-01 | Migrated from artifacts/closing/ to artifacts/closure/ (P0-0I) | Phase 0 cleanup |

---

*Authority: PMBOK8 — Guide §2.1.8 Closing · Figure 2-6*  
*Source type: PMI-derived*  
*Owner: Project manager*  
*Approval authority: Sponsor or designated governance body — mandatory*
