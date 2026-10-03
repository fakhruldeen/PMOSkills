---
artifact_id: A15
artifact_name: Schedule Model and Baseline Record
artifact_type: Schedule planning and control artifact
source_type: synthesis
governance_layer: Project Governance
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Items 43–60 (schedule-related planning and tracking templates)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.3 Schedule Performance Domain; Table 2-1 Plan Schedule Management, Develop Schedule, Monitor and Control Schedule"
performance_domains:
  - Schedule
  - Governance
  - Risk
  - Resources
focus_areas:
  - Planning
  - Monitoring and Controlling
related_processes:
  - Plan Schedule Management
  - Develop Schedule
  - Monitor and Control Schedule
linked_artifacts:
  - A06
  - A08
  - A13
  - A14
  - A16
  - A17
  - A19
  - A20
  - A26
owner: Project manager with scheduling support
approval_authority: Sponsor or designated governance body when baseline affects commitments; project manager within thresholds
---

# A15 Schedule Model and Baseline Record

**Artifact ID:** A15  
**Artifact type:** Schedule planning and control artifact  
**Source type:** Synthesis  
**Governance layer:** Project Governance  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Items 43–60 (schedule-related planning and tracking templates)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Define schedule management approach, capture the schedule model, establish the baseline, and record all schedule monitoring and control decisions in one integrated record. |
| When used | During planning; maintained and updated throughout execution and monitoring. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.3 Schedule Performance Domain; Table 2-1 Plan Schedule Management, Develop Schedule, Monitor and Control Schedule |
| Purpose of citation | Ground schedule planning, model development, baseline management, and control in PMBOK 8 schedule guidance. |
| Performance domains | Schedule, Governance, Risk, Resources |
| Focus areas | Planning; Monitoring and Controlling |
| Related processes | Plan Schedule Management; Develop Schedule; Monitor and Control Schedule |
| Inputs | Scope structure (A08/WBS), resource estimates (A26), risk information (A19), lifecycle approach (A13), delivery approach (A09), financial constraints (A16) |
| Outputs | Schedule management approach; schedule model; schedule baseline; milestone list; critical path or delivery cadence; approved schedule changes |
| Core fields | Scheduling approach; activity list; duration estimates; dependencies; resource assignments; milestone list; schedule baseline; float/lead/lag; control thresholds; approved changes |
| Owner | Project manager with scheduling support |
| Approval authority | Sponsor or designated governance body when baseline affects external commitments; project manager within thresholds |
| Tailoring guidance | For predictive approaches, use a full schedule model with baseline and critical path analysis. For adaptive approaches, maintain a release roadmap and sprint/iteration cadence instead of a detailed activity-level baseline. Do not force both formats. |
| Waste test | Fail if a separate schedule management plan, schedule baseline log, and milestone tracker are maintained in parallel with the same information. |
| Notes | Replaces or consolidates v1.0.2 schedule cluster items 43–60. One record holds schedule management plan, model, baseline, and change history. |

---

## 2. Record Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Sponsor | |
| Project manager | |
| Scheduling support contact | |
| Version | |
| Status | Draft / Approved / Rebaselined / Closed |
| Baseline date | |
| Lifecycle approach | Predictive / Adaptive / Iterative / Hybrid |
| Linked artifacts | A06, A08, A13, A14, A16, A19, A26 |

---

## 3. Schedule Management Approach

| Field | Entry |
|---|---|
| Scheduling method | CPM / Agile roadmap / Rolling wave / Resource-leveled / Other |
| Scheduling tool or system | |
| Time unit | Days / Weeks / Sprints |
| Calendar and working hours basis | |
| Level of detail | Summary milestones only / WBS-linked activities / Full activity list |
| Float management rule | |
| Dependency convention | FS default unless documented otherwise |
| Re-baseline triggers | |
| Linked financial management approach | A16 |
| Linked risk management approach | A19 |

---

## 4. Activity List

> For predictive approaches. For adaptive approaches, replace with a release roadmap and backlog reference in Section 5b.

| Activity ID | Activity name | WBS reference | Duration estimate | Basis | Dependencies (predecessors) | Resource | Owner | Notes |
|---|---|---|---:|---|---|---|---|---|
| | | | | | | | | |

---

## 5a. Schedule Baseline (Predictive)

| Milestone | Planned date | Baseline date | Critical path? | Float (days) | Owner | Notes |
|---|---|---|---|---:|---|---|
| Project start | | | — | — | | |
| | | | | | | |
| Project completion | | | — | — | | |

**Planned duration:**  
**Baseline critical path summary:**  
**Total float (project):**  

---

## 5b. Release Roadmap and Cadence (Adaptive / Hybrid)

| Release / Iteration | Target date | Planned deliverables / features | Capacity assumption | Status | Notes |
|---|---|---|---|---|---|
| | | | | | |

**Sprint / iteration length:**  
**Team velocity basis:**  
**Roadmap confidence level:**  

---

## 6. Resource Assignments

| Activity / milestone | Resource name or role | Type | Allocation % | From | To | Notes |
|---|---|---|---:|---|---|---|
| | | | | | | |

> Full resource capacity data lives in A26. This section captures schedule-relevant assignments only.

---

## 7. Lead, Lag, and Constraint Register

| ID | Activity or milestone | Constraint type | Value | Rationale | Owner |
|---|---|---|---|---|---|
| | | | | | |

---

## 8. Control Thresholds and Variance Actions

| Threshold | Trigger | Required action | Decision authority | Escalation route |
|---|---|---|---|---|
| Schedule variance | | | | |
| Float erosion | | | | |
| Milestone slip | | | | |
| Critical path change | | | | |

---

## 9. Approved Baseline Changes

| Change ID | Date | Description | Schedule impact | Approved by | Linked record (A12) | New baseline reference |
|---|---|---:|---|---|---|---|
| | | | | | | |

---

## 10. Monitoring Notes

| Field | Entry |
|---|---|
| Current schedule status | |
| Forecast completion | |
| Key variance explanation | |
| Critical path status | |
| Float / buffer status | |
| Decision required | |
| Cross-reference | A17 / A12 / A19 |

---

## 11. Operating Rules

1. One A15 record replaces separate schedule management plan, baseline log, milestone tracker, and schedule changelog unless regulation requires separation.
2. For predictive approaches: maintain an activity-level model with critical path; use A20 for quantitative schedule risk analysis.
3. For adaptive approaches: maintain a release roadmap and cadence; document velocity basis and re-planning triggers.
4. All approved schedule baseline changes must be recorded in Section 9 and cross-referenced to A12.
5. Performance reporting draws from A15; do not maintain a duplicate schedule status tracker in A17.
6. Fail the waste test if schedule data is reconciled manually across multiple separate records.

---

## 12. Migration Note

| Legacy items | Legacy names | Migration action |
|---|---|---|
| 43–60 | Schedule planning, tracking, and control templates (various) | CONSOLIDATED INTO A15 |

---

*Primary PMI source: PMBOK8 — Guide §2.3 Schedule Performance Domain; Table 2-1 Plan Schedule Management, Develop Schedule, Monitor and Control Schedule*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
