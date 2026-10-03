---
artifact_id: A26
name: Resource Capacity and Acquisition Record
template_version: 1.0.0
status: Template · Active
category: Resources
authority: "PMBOK8 Guide Resources Performance Domain §2.7; Table 2-1 Plan Resource Management, Acquire Resources"
source_type: synthesis
file_path: artifacts/resources/A26-resource-capacity-acquisition-record-template.md
---

> **Usage:** Create this record during resource planning (SKL-03-16, SKL-03-17). It is the single resource baseline and control reference for staffing, shared capacity, physical resources, and acquisition decisions. A25 defines roles and governance — A26 manages capacity and acquisition. Maintain this record throughout execution — update when resource commitments, conflicts, or acquisition decisions change. Reference during monitoring to track capacity and release.

---

## Section 1 — Record Header

| Field | Value |
|---|---|
| Project Name | [FIELD: project name] |
| Project ID | [FIELD: project identifier] |
| PM Name | [FIELD: name] |
| Record Version | [FIELD: version number] |
| Last Updated | [FIELD: date] |
| Status | [FIELD: select from Draft / Active / Closed] |
| Linked Artifacts | A08 · A15 · A16 · A22 · A25 |

---

## Section 2 — Staffing Requirements

Define all human resource requirements for the project.

| Role (from A25) | Required Skills | Acquisition Path | Quantity | Start Date | End Date | Allocation % | Cost Rate / Budget | Status |
|---|---|---|---|---|---|---|---|---|
| [FIELD: role name as defined in A25] | [FIELD: list required skills or competencies] | [FIELD: select from Internal Assignment / External Hire / Contractor / Shared Pool / Vendor] | [FIELD: number] | [FIELD: date] | [FIELD: date] | [FIELD: %] | [FIELD: rate or budget amount] | [FIELD: select from Planned / Confirmed / Acquired / Released] |
| [FIELD: role name as defined in A25] | [FIELD: list required skills or competencies] | [FIELD: select from Internal Assignment / External Hire / Contractor / Shared Pool / Vendor] | [FIELD: number] | [FIELD: date] | [FIELD: date] | [FIELD: %] | [FIELD: rate or budget amount] | [FIELD: select from Planned / Confirmed / Acquired / Released] |
| [FIELD: role name as defined in A25] | [FIELD: list required skills or competencies] | [FIELD: select from Internal Assignment / External Hire / Contractor / Shared Pool / Vendor] | [FIELD: number] | [FIELD: date] | [FIELD: date] | [FIELD: %] | [FIELD: rate or budget amount] | [FIELD: select from Planned / Confirmed / Acquired / Released] |
| [FIELD: role name as defined in A25] | [FIELD: list required skills or competencies] | [FIELD: select from Internal Assignment / External Hire / Contractor / Shared Pool / Vendor] | [FIELD: number] | [FIELD: date] | [FIELD: date] | [FIELD: %] | [FIELD: rate or budget amount] | [FIELD: select from Planned / Confirmed / Acquired / Released] |
| [FIELD: role name as defined in A25] | [FIELD: list required skills or competencies] | [FIELD: select from Internal Assignment / External Hire / Contractor / Shared Pool / Vendor] | [FIELD: number] | [FIELD: date] | [FIELD: date] | [FIELD: %] | [FIELD: rate or budget amount] | [FIELD: select from Planned / Confirmed / Acquired / Released] |

---

## Section 3 — Shared Resource and Capacity Conflict Register

Document cross-project resource conflicts and shared-pool demand. Reference A22 (Portfolio Interdependency Record) for portfolio-level conflicts.

| Resource / Role | Competing Project(s) | Conflict Description | Impact on This Project | Resolution Status | Resolved By | Resolution Date |
|---|---|---|---|---|---|---|
| [FIELD: resource or role name] | [FIELD: project name(s)] | [FIELD: describe the conflict] | [FIELD: describe impact] | [FIELD: select from Open / In Negotiation / Resolved / Escalated] | [FIELD: name or role] | [FIELD: date] |
| [FIELD: resource or role name] | [FIELD: project name(s)] | [FIELD: describe the conflict] | [FIELD: describe impact] | [FIELD: select from Open / In Negotiation / Resolved / Escalated] | [FIELD: name or role] | [FIELD: date] |
| [FIELD: resource or role name] | [FIELD: project name(s)] | [FIELD: describe the conflict] | [FIELD: describe impact] | [FIELD: select from Open / In Negotiation / Resolved / Escalated] | [FIELD: name or role] | [FIELD: date] |

---

## Section 4 — Physical Resource Requirements

| Resource | Type | Quantity | Required From | Required Until | Acquisition Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| [FIELD: resource name] | [FIELD: select from Equipment / Facility / Material / Tool / System / License] | [FIELD: quantity] | [FIELD: date] | [FIELD: date] | [FIELD: acquisition path] | [FIELD: status] | [FIELD: notes] |
| [FIELD: resource name] | [FIELD: select from Equipment / Facility / Material / Tool / System / License] | [FIELD: quantity] | [FIELD: date] | [FIELD: date] | [FIELD: acquisition path] | [FIELD: status] | [FIELD: notes] |
| [FIELD: resource name] | [FIELD: select from Equipment / Facility / Material / Tool / System / License] | [FIELD: quantity] | [FIELD: date] | [FIELD: date] | [FIELD: acquisition path] | [FIELD: status] | [FIELD: notes] |

---

## Section 5 — Acquisition Plan

| Resource / Role | Acquisition Method | Lead Time | Sourcing Owner | Target Date | Budget Allocated | Approval Required | Status |
|---|---|---|---|---|---|---|---|
| [FIELD: resource or role name] | [FIELD: e.g., internal transfer / recruitment / procurement / contract extension] | [FIELD: lead time in days or weeks] | [FIELD: name or role] | [FIELD: date] | [FIELD: amount] | [FIELD: select from Yes — T1 / Yes — T2 / Yes — T3 / No] | [FIELD: status] |
| [FIELD: resource or role name] | [FIELD: e.g., internal transfer / recruitment / procurement / contract extension] | [FIELD: lead time in days or weeks] | [FIELD: name or role] | [FIELD: date] | [FIELD: amount] | [FIELD: select from Yes — T1 / Yes — T2 / Yes — T3 / No] | [FIELD: status] |
| [FIELD: resource or role name] | [FIELD: e.g., internal transfer / recruitment / procurement / contract extension] | [FIELD: lead time in days or weeks] | [FIELD: name or role] | [FIELD: date] | [FIELD: amount] | [FIELD: select from Yes — T1 / Yes — T2 / Yes — T3 / No] | [FIELD: status] |
| [FIELD: resource or role name] | [FIELD: e.g., internal transfer / recruitment / procurement / contract extension] | [FIELD: lead time in days or weeks] | [FIELD: name or role] | [FIELD: date] | [FIELD: amount] | [FIELD: select from Yes — T1 / Yes — T2 / Yes — T3 / No] | [FIELD: status] |

---

## Section 6 — Resource Release Schedule

| Resource / Team Member | Type | Planned Release Date | Release Condition | Reassignment Plan | Approved By |
|---|---|---|---|---|---|
| [FIELD: name or resource] | [FIELD: type] | [FIELD: date] | [FIELD: what must be true before this resource can be released — e.g., deliverable X accepted, handover complete] | [FIELD: describe reassignment or return plan] | [FIELD: name or role] |
| [FIELD: name or resource] | [FIELD: type] | [FIELD: date] | [FIELD: what must be true before this resource can be released — e.g., deliverable X accepted, handover complete] | [FIELD: describe reassignment or return plan] | [FIELD: name or role] |
| [FIELD: name or resource] | [FIELD: type] | [FIELD: date] | [FIELD: what must be true before this resource can be released — e.g., deliverable X accepted, handover complete] | [FIELD: describe reassignment or return plan] | [FIELD: name or role] |
| [FIELD: name or resource] | [FIELD: type] | [FIELD: date] | [FIELD: what must be true before this resource can be released — e.g., deliverable X accepted, handover complete] | [FIELD: describe reassignment or return plan] | [FIELD: name or role] |

---

## Section 7 — Allocation Assumptions and Constraints

| Assumption / Constraint | Type | Impact on Planning | Owner |
|---|---|---|---|
| [FIELD: describe the assumption or constraint] | [FIELD: select from Assumption / Constraint] | [FIELD: describe impact on resource planning] | [FIELD: name or role] |
| [FIELD: describe the assumption or constraint] | [FIELD: select from Assumption / Constraint] | [FIELD: describe impact on resource planning] | [FIELD: name or role] |
| [FIELD: describe the assumption or constraint] | [FIELD: select from Assumption / Constraint] | [FIELD: describe impact on resource planning] | [FIELD: name or role] |
| [FIELD: describe the assumption or constraint] | [FIELD: select from Assumption / Constraint] | [FIELD: describe impact on resource planning] | [FIELD: name or role] |

---

## Section 8 — Review and Update Log

| Date | Updated By | Trigger | Key Changes |
|---|---|---|---|
| [FIELD: date] | [FIELD: name or role] | [FIELD: what triggered the update — e.g., new resource conflict, acquisition decision, scope change] | [FIELD: summarise key changes made] |
| [FIELD: date] | [FIELD: name or role] | [FIELD: what triggered the update — e.g., new resource conflict, acquisition decision, scope change] | [FIELD: summarise key changes made] |

---

## Change Log

| Version | Date | Batch | Notes |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch 3 | Initial template |

---

*Template for: A26 — Resource Capacity and Acquisition Record*
*Authority: PMBOK8 Guide Resources Performance Domain §2.7; Table 2-1 Plan Resource Management*
*See definition file: `artifacts/resources/A26-resource-capacity-acquisition-record.md`*
