---
artifact_id: A14
artifact_name: Integrated Project Management Plan
artifact_type: Integrated baseline and management artifact
source_type: PMI-derived
governance_layer: Project Governance
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Item 23 (Project Management Plan Subsidiary Component Integrity Framework)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.1.6.2 Integrate and Align Project Plans; Planning Focus Area; Process-Groups"
performance_domains:
  - Governance
  - Scope
  - Schedule
  - Finance
  - Stakeholders
  - Resources
  - Risk
focus_areas:
  - Planning
related_processes:
  - Integrate and Align Project Plans
linked_artifacts:
  - A05
  - A06
  - A07
  - A08
  - A09
  - A13
  - A15
  - A16
  - A17
  - A19
  - A25
  - A26
  - A28
owner: Project manager
approval_authority: Sponsor or designated governance body consistent with project risk and organizational policy
---

# A14 Integrated Project Management Plan

**Artifact ID:** A14  
**Artifact type:** Integrated baseline and management artifact  
**Source type:** PMI-derived  
**Governance layer:** Project Governance  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Item 23 (Project Management Plan Subsidiary Component Integrity Framework)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Integrate approved planning content into one coherent project management plan that references all subsidiary plans, baselines, and governance decisions. |
| When used | After charter approval and before major execution begins; maintained under change control throughout the project. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.1.6.2 Integrate and Align Project Plans; Planning Focus Area; Process-Groups |
| Purpose of citation | Establish the integrated planning basis and the role of the project management plan as the authoritative reference for how the project will be executed, monitored, and controlled. |
| Performance domains | Governance, Scope, Schedule, Finance, Stakeholders, Resources, Risk |
| Focus areas | Planning |
| Related processes | Integrate and Align Project Plans |
| Inputs | Approved subsidiary planning records across all applicable domains; charter (A04); tailoring decisions (A06); lifecycle decision (A13) |
| Outputs | Integrated management plan; baseline references; governance and control approach; planning assumption set |
| Core fields | Subsidiary plan index; baseline references; planning assumptions; control thresholds; governance calendar; reporting cadence |
| Owner | Project manager |
| Approval authority | Sponsor or designated governance body consistent with project risk and organizational policy |
| Tailoring guidance | Scale structure to context. Do not force full subsidiary plans for small low-risk work. A14 may be a lean index document for simple projects and a structured plan set for complex ones. |
| Waste test | Fail if A14 becomes a document container for redundant content already maintained in living subsidiary records. |
| Notes | Replaces the heavyweight v1.0.2 Item 23 framework. A14 is an index and integration record, not a re-statement of subsidiary plan content. |

---

## 2. Plan Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Sponsor | |
| Project manager | |
| Version | |
| Status | Draft / Approved / Rebaselined / Closed |
| Plan approval date | |
| Baseline date | |
| Lifecycle approach | Predictive / Adaptive / Iterative / Hybrid |
| Linked charter (A04) | |
| Linked tailoring record (A06) | |
| Linked lifecycle record (A13) | |

---

## 3. Subsidiary Plan Index

> Each row references the living subsidiary record. Do not copy content from subsidiary records into A14.

| Plan / Record | Artifact ID | File / Location | Version | Status | Owner |
|---|---|---|---|---|---|
| Scope and Requirements Decision Record | A08 | | | | |
| Development Approach and Lifecycle Decision Record | A13 | | | | |
| Schedule Model and Baseline Record | A15 | | | | |
| Financial Management and Cost Baseline Record | A16 | | | | |
| Stakeholder Register and Engagement Strategy | A07 | | | | |
| Communications and Reporting Record | A28 | | | | |
| Risk Management Record | A19 | | | | |
| Resource Capacity and Acquisition Record | A26 | | | | |
| Team Operating and Responsibility Record | A25 | | | | |
| Procurement and Supplier Management Record | A31 | | | | |
| Change and Exception Decision Log | A12 | | | | |
| Tailoring Decision Record | A06 | | | | |
| Context Register | A05 | | | | |

> Add or remove rows based on tailoring decisions documented in A06.

---

## 4. Baseline Summary

| Baseline | Reference artifact | Version | Baseline date | Tolerance | Rebaseline trigger |
|---|---|---:|---|---|---|
| Scope baseline | A08 | | | | |
| Schedule baseline | A15 | | | | |
| Cost baseline | A16 | | | | |
| Benefits baseline | A02 | | | | |

---

## 5. Planning Assumptions

| ID | Assumption | Domain | Impact if false | Owner | Review trigger |
|---|---|---|---|---|---|
| | | | | | |

---

## 6. Control Thresholds

| Domain | Metric | Warning threshold | Escalation threshold | Decision authority | Escalation route |
|---|---|---|---|---|---|
| Scope | | | | | |
| Schedule | | | | | |
| Finance | | | | | |
| Risk | | | | | |
| Resources | | | | | |

> Thresholds must align with A06 (Tailoring Decision Record) governance settings.

---

## 7. Governance and Review Calendar

| Event | Frequency | Owner | Participants | Output | Linked artifact |
|---|---|---|---|---|---|
| Status review | | | | | A17 |
| Baseline review | | | | | A14 |
| Risk review | | | | | A19 |
| Stakeholder review | | | | | A07 |
| Change authority meeting | | | | | A12 |
| Phase gate / checkpoint | | | | | A06 |

---

## 8. Reporting Cadence

| Report / Record | Frequency | Owner | Audience | Artifact | Format |
|---|---|---|---|---|---|
| Performance report | | | | A17 | |
| Risk summary | | | | A19 | |
| Financial status | | | | A16 | |
| Stakeholder update | | | | A07/A28 | |

---

## 9. Plan Change Control

Changes to A14 or any baselined subsidiary plan must go through:

1. Submit change request — record in A12 (Change and Exception Decision Log)
2. Impact assessment — review against affected subsidiary records
3. Approval — per authority thresholds in A06
4. Update — revise affected subsidiary record(s) and update A14 baseline table
5. Communicate — per A28 Communication and Reporting Record

---

## 10. Operating Rules

1. A14 is an index and integration record — it references subsidiary plans, not re-states them.
2. No subsidiary plan content should be duplicated inside A14.
3. All baseline changes must be approved per A06 and tracked in A12.
4. The subsidiary plan index must be updated whenever a new planning record is baselined or retired.
5. Fail the artifact waste test if maintaining A14 requires reconciling duplicated fields across this record and its subsidiary records.

---

## 11. Migration Note

| Legacy item | Legacy name | Migration action |
|---|---|---|
| 23 | Project Management Plan Subsidiary Component Integrity Framework | REPLACED BY A14 |

---

*Primary PMI source: PMBOK8 — Guide §2.1.6.2 Integrate and Align Project Plans; Planning Focus Area*  
*Source type: PMI-derived*  
*Repository version: 1.0.5*
