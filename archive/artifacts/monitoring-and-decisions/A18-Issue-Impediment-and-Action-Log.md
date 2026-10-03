---
artifact_id: A18
artifact_name: Issue, Impediment, and Action Log
artifact_type: Execution and delivery control artifact
source_type: synthesis
governance_layer: Project Governance · Delivery Ways of Working
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Item 21 (Continuous Project Issue Log Ledger)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.1.6.3 Manage Project Execution; Table 2-1 Manage Project Execution; Lexicon — issue, action item"
performance_domains:
  - Governance
  - Resources
  - Stakeholders
  - Risk
focus_areas:
  - Executing
  - Monitoring and Controlling
related_processes:
  - Manage Project Execution
  - Monitor and Control Project Performance
  - Lead the Team
linked_artifacts:
  - A12
  - A17
  - A19
  - A25
  - A28
owner: Project manager or delivery lead
approval_authority: Project manager for routine issues; governance body or sponsor for escalated items per A06 thresholds
---

# A18 Issue, Impediment, and Action Log

**Artifact ID:** A18  
**Artifact type:** Execution and delivery control artifact  
**Source type:** Synthesis  
**Governance layer:** Project Governance · Delivery Ways of Working  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Item 21 (Continuous Project Issue Log Ledger)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Capture, track, and resolve issues, impediments, and action items arising during execution and monitoring in one lean, continuously maintained log. |
| When used | Throughout Executing and Monitoring and Controlling focus areas; updated at every status cycle. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.1.6.3 Manage Project Execution; Table 2-1 Manage Project Execution; Lexicon — issue, action item |
| Purpose of citation | Ground issue and action tracking in PMBOK 8 execution management and the Lexicon definitions for issue and action item. |
| Performance domains | Governance, Resources, Stakeholders, Risk |
| Focus areas | Executing; Monitoring and Controlling |
| Related processes | Manage Project Execution; Monitor and Control Project Performance; Lead the Team |
| Inputs | Work performance data; team retrospectives; risk triggers (A19); change decisions (A12); stakeholder concerns (A07) |
| Outputs | Issue status; resolution decisions; action assignments; escalation flags; input to A17 performance reporting |
| Core fields | Issue/impediment ID; type; description; raised by; date raised; priority; impact; owner; due date; status; resolution; escalation flag; linked records |
| Owner | Project manager or delivery lead |
| Approval authority | Project manager for routine issues; governance body or sponsor for escalated items per A06 thresholds |
| Tailoring guidance | For predictive approaches, maintain a formal log with priority and impact fields. For adaptive approaches, integrate with the team's backlog tool and cross-reference sprint impediment removals here for governance traceability. |
| Waste test | Fail if a separate issue register, impediment board, and action tracker are maintained in parallel without distinct governance purposes. |
| Notes | Replaces v1.0.2 Item 21. Items that require a formal decision or change authority action must be escalated to A12. A18 does not replace A12 — it feeds it. |

---

## 2. Log Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Project manager | |
| Log version | |
| Last updated | |
| Reporting period | |
| Open items count | |
| Escalated items count | |
| Linked artifacts | A12, A17, A19, A25, A28 |

---

## 3. Issue, Impediment, and Action Register

| ID | Type | Description | Raised by | Date raised | Priority | Impact domain | Owner | Due date | Status | Resolution / note | Escalated to A12? | Linked record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| I-001 | | | | | | | | | Open | | No | |
| | | | | | | | | | | | | |

**Type values:** `Issue` / `Impediment` / `Action Item` / `Decision Required`  
**Priority values:** `Critical` / `High` / `Medium` / `Low`  
**Impact domain values:** `Scope` / `Schedule` / `Finance` / `Risk` / `Resources` / `Stakeholders` / `Quality` / `Team`  
**Status values:** `Open` / `In Progress` / `Resolved` / `Escalated` / `Closed`

---

## 4. Escalation Register

> Items escalated from Section 3 to A12 for formal decision authority.

| A18 ID | A12 reference | Escalation date | Escalation reason | Decision authority | Resolution date | Outcome |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 5. Closed Items Archive

> Move resolved and closed items here to keep the active register lean.

| ID | Type | Description | Resolution | Closed date | Owner |
|---|---|---|---|---|---|
| | | | | | |

---

## 6. Operating Rules

1. Every unresolved issue, impediment, or action item from a status meeting, retrospective, or risk trigger must be logged in Section 3 before the next status cycle.
2. Any item that requires a formal change authority decision must be escalated to A12 and flagged in Section 4.
3. Items resolved within the team's authority do not require A12 escalation — record resolution in Section 3.
4. A18 entries feed A17 (performance reporting) and A19 (if the item is risk-related).
5. For adaptive approaches, link each impediment to the sprint/iteration in which it was raised and resolved.
6. Fail the waste test if a separate issue list, impediment wall, and action tracker carry the same items without a distinct governance reason for separation.

---

## 7. Migration Note

| Legacy item | Legacy name | Migration action |
|---|---|---|
| 21 | Continuous Project Issue Log Ledger | REPLACED BY A18 |

---

*Primary PMI source: PMBOK8 — Guide §2.1.6.3 Manage Project Execution; Lexicon — issue, action item*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
