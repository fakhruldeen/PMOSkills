---
artifact_id: A35
name: RACI and Authority Matrix
template_version: "1.0.0"
status: "Template · Active"
category: Governance Framework
authority: "PMBOK8 Guide Governance Performance Domain · GPPP"
source_type: synthesis
file_path: artifacts/governance/A35-raci-authority-matrix-template.md
---

## [A35] — RACI and Authority Matrix | Template

> **Usage note:** This is a blank template for mapping project roles to responsibilities and decision authority. Replace every `[FIELD: ...]` placeholder with project-specific content.

---

## Section 1 — Header / Identification

| Field | Value |
|---|---|
| Project Name | [FIELD: full project name] |
| Project Manager | [FIELD: PM name] |
| Document Version | [FIELD: e.g., v1.0] |
| Status | [FIELD: Draft / Active / Under Review] |
| Date | [FIELD: YYYY-MM-DD] |

---

## Section 2 — RACI Matrix Definitions

*   **R - Responsible:** The role performing the work to complete the task/decision.
*   **A - Accountable:** The role with final decision-making authority and answerable for the outcome (only one 'A' per row).
*   **C - Consulted:** The roles whose input is sought prior to or during the task/decision.
*   **I - Informed:** The roles who are updated after the task/decision is completed.

---

## Section 3 — RACI and Authority Matrix

| Project Lifecycle Phase / Decision | Sponsor | Steering Comm. | PM | PMO | Functional Lead | Business Analyst | Team Member |
|---|---|---|---|---|---|---|---|
| **Initiating Phase** | | | | | | | |
| Project Charter Approval (`A04`) | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: C] | [FIELD: I] | [FIELD: I] | [FIELD: I] |
| Stakeholder Identification (`A07`) | [FIELD: I] | [FIELD: I] | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: R] | [FIELD: I] |
| **Planning Phase** | | | | | | | |
| Scope & Requirements Baseline (`A08`) | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: C] | [FIELD: C] | [FIELD: R] | [FIELD: I] |
| Schedule Baseline Approval (`A15`) | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: C] | [FIELD: C] | [FIELD: I] | [FIELD: I] |
| Budget Baseline Approval (`A16`) | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: C] | [FIELD: C] | [FIELD: I] | [FIELD: I] |
| **Executing Phase** | | | | | | | |
| Deliverable Execution & Build | [FIELD: I] | [FIELD: I] | [FIELD: A] | [FIELD: I] | [FIELD: R] | [FIELD: I] | [FIELD: R] |
| Quality Standard Auditing (`PR37`) | [FIELD: I] | [FIELD: I] | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: I] | [FIELD: R] |
| **Monitoring & Controlling** | | | | | | | |
| Minor Change Requests (`< 5%` budget) | [FIELD: I] | [FIELD: I] | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: C] | [FIELD: I] |
| Major Change Requests (`> 5%` budget) | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: C] | [FIELD: C] | [FIELD: I] | [FIELD: I] |
| **Closing Phase** | | | | | | | |
| Deliverable Acceptance sign-off | [FIELD: A] | [FIELD: C] | [FIELD: R] | [FIELD: I] | [FIELD: C] | [FIELD: I] | [FIELD: I] |
| Lessons Learned Archiving (`A30`) | [FIELD: I] | [FIELD: I] | [FIELD: A] | [FIELD: R] | [FIELD: R] | [FIELD: R] | [FIELD: R] |

---

## Section 4 — Waste Test

- [ ] Every task or decision has exactly one role marked **Accountable (A)**.
- [ ] No role is overwhelmed with **Responsible (R)** indicators without sufficient capacity.
- [ ] Consulted (C) and Informed (I) roles are minimized to prevent communication waste and delays.

---

## Change Log

| Version | Date | Author / Event | Description |
|---|---|---|---|
| 1.0.0 | 2026-06-07 | PMO Director | Initial RACI Matrix template |

---

*Template for: RACI and Authority Matrix*  
*Authority: PMBOK8 Guide Governance Performance Domain · GPPP*  
*See definition file: `artifacts/governance/A35-governance-decision-authority-record.md`*
