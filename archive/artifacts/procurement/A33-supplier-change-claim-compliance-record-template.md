---
artifact_id: A33
name: Supplier Change, Claim, and Compliance Record
template_version: "1.0.0"
status: "Template · Active"
category: Supplier Administration and Exceptions
authority: "PMBOK8 Appendix X4 procurement-related guidance; Table 2-1 Assess and Implement Changes; Close Project or Phase"
source_type: synthesis
file_path: artifacts/procurement/A33-supplier-change-claim-compliance-record-template.md
---

## [A33] — Supplier Change, Claim, and Compliance Record | Template

> **Usage note:** This is a blank template. Every `[FIELD: ...]` cell must be completed by the project team before use. Static text, rules, and checklist items are pre-filled and must not be removed.

---

## Section 1 — Header / Identification

| Field | Value |
|---|---|
| Project Name | [FIELD: Full project name] |
| Supplier Name / ID | [FIELD: Legal name and internal identifier] |
| Contract Reference | [FIELD: Contract number or agreement reference] |
| Contract Administrator | [FIELD: Name and title] |
| Date | [FIELD: YYYY-MM-DD] |
| Version | [FIELD: e.g. 1.0] |
| Status | [FIELD: Active / Suspended / Closed / Terminated] |
| Linked Artifacts | A31 · A32 · A12 · A19 |

---

## Section 2 — Event Register

Event Types: **Change Order / Claim / Dispute / Compliance Finding / Acceptance Finding**
Status values: **Open / In Progress / Resolved / Escalated / Closed**

| Event ID | Date | Type | Description | Impact Summary | Decision Authority | Resolution | Follow-up Action | Owner | Due Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [FIELD: EV-001] | [FIELD: YYYY-MM-DD] | [FIELD: type] | [FIELD: description] | [FIELD: cost/schedule/scope/quality impact] | [FIELD: authority name and role] | [FIELD: resolution or "Pending"] | [FIELD: action or "None"] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: status] |
| [FIELD: EV-002] | [FIELD: YYYY-MM-DD] | [FIELD: type] | [FIELD: description] | [FIELD: impact] | [FIELD: authority] | [FIELD: resolution] | [FIELD: action] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: status] |

---

## Section 3 — Change Order Log

Decision values: **Approved / Rejected / Pending**

| CO ID | Event Ref | Original Contract Ref | Change Description | Cost Impact | Schedule Impact | Decision | Approving Authority | Approval Date |
|---|---|---|---|---|---|---|---|---|
| [FIELD: CO-001] | [FIELD: EV ref] | [FIELD: contract section] | [FIELD: description] | [FIELD: currency or "None"] | [FIELD: days or "None"] | [FIELD: Approved / Rejected / Pending] | [FIELD: authority] | [FIELD: YYYY-MM-DD or "Pending"] |
| [FIELD: CO-002] | [FIELD: EV ref] | [FIELD: contract ref] | [FIELD: description] | [FIELD: impact] | [FIELD: impact] | [FIELD: decision] | [FIELD: authority] | [FIELD: date] |

---

## Section 4 — Claims and Disputes Log

Resolution Status: **Negotiated / Arbitration / Litigation / Withdrawn / Settled / Pending**

| Claim ID | Event Ref | Claim Description | Amount Claimed | Basis | Resolution | Resolution Status | Date Resolved |
|---|---|---|---|---|---|---|---|
| [FIELD: CL-001] | [FIELD: EV ref] | [FIELD: description] | [FIELD: currency or "Non-monetary"] | [FIELD: contractual/legal basis] | [FIELD: resolution outcome] | [FIELD: status] | [FIELD: YYYY-MM-DD or "Pending"] |

---

## Section 5 — Compliance Findings Log

Severity: **Minor / Moderate / Major / Critical**

| Finding ID | Event Ref | Compliance Area | Finding Description | Severity | Required Action | Responsible Party | Resolution Date | Status |
|---|---|---|---|---|---|---|---|---|
| [FIELD: CF-001] | [FIELD: EV ref] | [FIELD: H&S / Regulatory / Contractual / Data Protection] | [FIELD: description] | [FIELD: severity] | [FIELD: required action] | [FIELD: project team or supplier] | [FIELD: YYYY-MM-DD] | [FIELD: Open / In Progress / Resolved / Closed] |

---

## Section 6 — Acceptance Findings Log

Disposition: **Accepted / Conditionally Accepted / Rejected / Resubmission Required**

| Finding ID | Event Ref | Deliverable | Acceptance Criterion | Finding Description | Disposition | Resolution Notes | Date |
|---|---|---|---|---|---|---|---|
| [FIELD: AF-001] | [FIELD: EV ref] | [FIELD: deliverable name or ref] | [FIELD: acceptance criterion] | [FIELD: finding] | [FIELD: disposition] | [FIELD: resolution notes] | [FIELD: YYYY-MM-DD] |

---

## Section 7 — Contract Closeout Checklist

| # | Closeout Item | Status | Confirmed Date | Notes |
|---|---|---|---|---|
| 1 | All contractual deliverables received and formally accepted | [FIELD: Complete / Incomplete / N/A] | [FIELD: YYYY-MM-DD or N/A] | [FIELD: exceptions] |
| 2 | All open Change Orders resolved and closed | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 3 | All claims and disputes resolved or formally settled | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 4 | All compliance findings resolved and closed | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 5 | Final invoice received, verified, and processed | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 6 | Supplier performance evaluation completed and filed | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 7 | Project-owned assets/IP in supplier possession returned or destroyed | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 8 | Contract closeout notice issued to supplier in writing | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 9 | Lessons learned captured in A30 | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |
| 10 | Contract file archived in document management system | [FIELD: Complete / Incomplete / N/A] | [FIELD: date] | [FIELD: notes] |

---

## Section 8 — Waste Test

- [ ] Every event in Sections 3–6 has a corresponding entry in the Event Register (Section 2)?
- [ ] All open Change Orders tracked with a named approving authority and due date?
- [ ] All claims with "Pending" resolution escalated appropriately?
- [ ] All Critical compliance findings linked to an open corrective action?
- [ ] All rejected or conditionally accepted deliverables followed up?
- [ ] Contract Closeout Checklist only marked complete when all items are confirmed?
- [ ] Entries consistent with A12 for all approved change orders?
- [ ] Unresolved issues flagged in A19?
- [ ] Contract administrator reviewed and signed off at each update?
- [ ] Record referenced in the Project Closure Report at closeout?

---

## Change Log

| Version | Date | Author/Event | Description |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch B | Initial template |
| 1.0.1 | 2026-06-01 | Phase 0 cleanup | Migrated from artifacts/extended-procurement/ to artifacts/procurement/ (P0-0I) |

---

*Template for: A33 — Supplier Change, Claim, and Compliance Record*
*Authority: PMBOK8 Appendix X4; Table 2-1 Assess and Implement Changes*
*See definition file: `artifacts/procurement/A33-supplier-change-claim-compliance-record.md`*
