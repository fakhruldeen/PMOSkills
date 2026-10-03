---
artifact_id: A28
artifact_name: Communications and Reporting Record
artifact_type: Communications planning and execution artifact
source_type: PMI-derived
governance_layer: Project Governance
version: "1.0.5"
status: Draft
performance_domains:
  - Stakeholders
  - Governance
focus_areas:
  - Planning
  - Executing
  - Monitoring and Controlling
related_processes:
  - Plan Communications Management
  - Manage Communications
  - Monitor Communications
linked_artifacts:
  - A07
  - A14
  - A15
  - A17
  - A25
owner: Project manager
approval_authority: "Project manager; sponsor or governance body for high-sensitivity, external, or confidential communications"
file_path: "artifacts/stakeholders-communications/A28-communications-and-reporting-record.md"
---

# A28 Communications and Reporting Record

**Artifact ID:** A28
**Artifact type:** Communications planning and execution artifact
**Source type:** PMI-derived
**Governance layer:** Project Governance
**Version:** 1.0.5
**Status:** Draft
**Supersedes:** v1.0.2 Items 190–192, 211 (communications management plan, stakeholder reporting log, reporting matrix)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Define the communications management approach, specify what will be communicated to whom, by what method, at what frequency, and track delivery and effectiveness in one integrated record. |
| When used | During Planning (communications plan section); maintained through Executing and M&C. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.5.2.3 Plan Communications Management; Figure 2-35; Table 2-1 Plan Communications Management, Manage Communications, Monitor Communications |
| Performance domains | Stakeholders, Governance |
| Focus areas | Planning; Executing; Monitoring and Controlling |
| Related processes | Plan Communications Management; Manage Communications; Monitor Communications |
| Inputs | A07 (Stakeholder register); A15 (project schedule); A06 (tailoring record); A14 reporting cadence |
| Outputs | Communications plan; stakeholder-specific communication entries; delivery log; effectiveness monitoring |
| Core fields | Stakeholder; information need; content; method; frequency; sender; format; feedback route; sensitivity; delivery log; effectiveness signal |
| Owner | Project manager |
| Approval authority | PM; sponsor or governance body for high-sensitivity, external, or confidential communications |
| Tailoring guidance | Every stakeholder in A07 must have at least one entry in A28. Do not produce a separate Communications Management Plan document. |
| Waste test | Fail if a separate communications plan document, a reporting matrix, and a stakeholder update log each contain the same communication entries. |
| Notes | Replaces v1.0.2 Items 190–192 and 211. Every A28 entry must reference an A07 stakeholder — orphan entries are not permitted. |

---

## 2. Record Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Project manager | |
| Communications lead (if assigned) | |
| Version | |
| Last updated | |
| Total communication entries | |
| Linked artifacts | A07, A14, A15, A17, A25 |

---

## 3. Communications Approach

| Field | Entry |
|---|---|
| Communication philosophy | |
| Default communication method | Interactive / Push / Pull |
| Communication technology platform | |
| Language and cross-cultural considerations | |
| Confidentiality and sensitivity handling | |
| Communication model in use | PMBOK8 Figure 5-2 (Sender–Message–Receiver) |
| Feedback collection approach | |
| Escalation for missed communications | |
| Monitoring cadence | |
| Linked stakeholder record | A07 |

---

## 4. Communication Plan (Per Stakeholder)

> Every stakeholder in A07 must have at least one row here.

| Entry ID | Stakeholder (A07 ref) | Information need | Content / message | Method | Frequency | Sender | Format | Feedback route | Sensitivity | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| C-001 | | | | Interactive / Push / Pull | | | | | Standard / Sensitive / Confidential | | Active |

**Method values:** `Interactive` (meetings, calls) / `Push` (email, report distribution) / `Pull` (portal, shared drive, dashboard)
**Sensitivity values:** `Standard` / `Sensitive` / `Confidential` / `Restricted`

---

## 5. Communication Delivery Log

| Entry ID | Stakeholder | Communication date | Content summary | Delivered by | Delivery method | Feedback received | Issues noted | Follow-up required |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

---

## 6. Communications Effectiveness Monitoring

| Entry ID | Stakeholder | Monitoring signal | Current effectiveness | Issue identified | Corrective action | Action owner | Due date | Status |
|---|---|---|---|---|---|---|---|---|
| | | Engagement level / Feedback quality / Message comprehension / Response timeliness | Effective / Partially effective / Ineffective | | | | | |

---

## 7. Communication Change Log

| Change date | Entry ID affected | Change description | Reason | Approved by | Linked A12 entry |
|---|---|---|---|---|---|
| | | | | | |

---

## 8. Operating Rules

1. A28 is the single communications record — no separate communications management plan document.
2. Every A07 stakeholder must have at least one A28 entry.
3. Every A28 entry must reference a named A07 stakeholder — orphan entries are not permitted.
4. Every entry must specify all applicable communication methods (interactive, push, pull); push-only plans are flagged incomplete.
5. Every entry must have a feedback route — no feedback mechanism = incomplete.
6. Cross-cultural entries must reference PMBOK8 Figure 5-2 in the approach section.
7. Communication events preceding key decisions must be scheduled in A15 and cross-referenced here.
8. Fail waste test if separate communications plan, reporting matrix, and stakeholder update log all hold the same entries.

---

## 9. Migration Note

| Legacy items | Legacy names | Migration action |
|---|---|---|
| 190 | Communications Management Plan | CONSOLIDATED INTO A28 Section 3–4 |
| 191 | Stakeholder Reporting Log | CONSOLIDATED INTO A28 Section 5 |
| 192 | Reporting Matrix | CONSOLIDATED INTO A28 Section 4 |
| 211 | Communication Effectiveness Tracker | CONSOLIDATED INTO A28 Section 6 |

---

## 10. Change Log

| Version | Date | Change |
|---|---|---|
| 1.0.5 | 2026-05-31 | Canonical definition |
| 1.0.6 | 2026-06-01 | Migrated from artifacts/stakeholders/ to artifacts/stakeholders-communications/ (P0-0I) |

---

*Primary PMI source: PMBOK8 — Guide §2.5.2.3 Plan Communications Management; Figure 2-35*
*Source type: PMI-derived*
*Repository version: 1.0.6*
