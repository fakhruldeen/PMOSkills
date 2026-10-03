---
artifact_id: A10
name: Communications Management Plan
version: 1.0.0
status: Active
category: Communications Planning
governance_layer: Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide §2.5 Stakeholders Performance Domain; Table 2-1 Plan Communications Management"
authority: PMI-derived
performance_domains:
  - Stakeholders
  - Governance
  - Resources
focus_areas:
  - Planning
  - Executing
  - Monitoring and Controlling
required_by_skills:
  - SKL-03-13
  - SKL-04-07
  - SKL-05-09
created_by_skills:
  - SKL-03-13
linked_artifacts:
  - A07
  - A14
  - A17
  - A28
file_path: "artifacts/stakeholders-communications/A10-communications-management-plan.md"
---

# A10 — Communications Management Plan

**Artifact ID:** A10
**Name:** Communications Management Plan
**Version:** 1.0.0
**Status:** Active
**Source Type:** PMI-derived
**Governance Layer:** Project Governance
**Authority:** PMBOK8 Guide §2.5 Stakeholders Performance Domain; Table 2-1 Plan Communications Management

---

## 1. Purpose

The Communications Management Plan describes how project communications will be planned, structured, monitored, and controlled throughout the project lifecycle. It defines what information will be communicated, to whom, by whom, how often, through which channels, and in what format — ensuring that all stakeholders receive timely and appropriate information to support their engagement and decision-making needs.

Effective communications planning prevents information gaps, reduces stakeholder surprise, and ensures that governance authorities receive the performance information they need to exercise oversight.

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Communications needs by stakeholder group | Stakeholder identification and engagement strategy (belongs in A07) |
| Communication frequency, format, and channel | Detailed meeting minutes and action logs (living execution records) |
| Sender and receiver responsibilities | Performance data and metrics content (belongs in A17) |
| Escalation communications approach | Change request documentation (belongs in A12) |
| Sensitive communications handling rules | Procurement communications (governed by A11 and A31) |
| Communication feedback and monitoring approach | Organizational change management communications (governed by A39) |
| Information distribution methods and tools | HR or personnel communications |

---

## 3. Trigger Conditions

The Communications Management Plan is created when:

- Planning begins and stakeholders have been identified in A07.
- The project involves multiple stakeholder groups with different information needs.
- Governance or contractual requirements mandate a documented communications approach.

The plan is updated when:

- Key stakeholders are added, removed, or change roles.
- Communications approach proves ineffective (stakeholder feedback, missed escalations).
- Project phase transition changes the information needs of governance stakeholders.
- Sensitive communications requirements change (confidentiality, regulatory disclosure).

---

## 4. Required Sections / Fields

| Field | Description | Required |
|---|---|---|
| Stakeholder communications needs | Summary of what information each key stakeholder group requires | Mandatory |
| Communication item register | What is communicated, to whom, by whom, frequency, format, channel | Mandatory |
| Sender and receiver responsibilities | Who is accountable for producing and distributing each communication | Mandatory |
| Communication channels and tools | Approved tools and channels (email, portal, meetings, reports, dashboards) | Mandatory |
| Escalation communications | How and when escalation communications are triggered and structured | Mandatory |
| Sensitive information handling | Rules for confidential, commercially sensitive, or regulated information | Mandatory |
| Communication feedback mechanism | How the team will know whether communications are effective | Recommended |
| Glossary / terminology alignment | Common terms used to ensure clarity across stakeholder groups | Optional |

**Communication item register — minimum fields per item:**

| Field | Description |
|---|---|
| Item ID | Unique identifier |
| Communication name | What is being communicated (e.g., Weekly Status Report) |
| Purpose | Why this communication is needed |
| Audience | Named stakeholders or groups |
| Frequency | How often (daily, weekly, monthly, event-triggered) |
| Format | Written report, verbal update, dashboard, meeting, email |
| Channel | Distribution method or platform |
| Owner | Who produces and sends it |
| Review / approval required | Yes/No — and by whom if yes |

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | §2.5 Stakeholders Performance Domain | Grounds communications planning in stakeholder engagement |
| PMBOK8 Guide | Table 2-1 Plan Communications Management | Confirms the Communications Management Plan as process output |
| PMBOK8 Guide | Table 2-1 Manage Communications | Links the plan to the execution process |
| PMBOK8 Guide | Table 2-1 Monitor Communications | Links the plan to the monitoring process |
| PMI Lexicon | Communications Management Plan definition | Canonical PMI definition |

---

## 6. Used By

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-03-13 | Plan Communications Management | Primary producing skill |
| SKL-04-07 | Manage Communications | Executes the distribution approach |
| SKL-05-07 | Monitor Stakeholder Engagement | Uses communications effectiveness data |
| SKL-05-09 | Monitor Communications | Verifies communications per the plan |
| SKL-06-01 | Close Project or Phase | Final communications follow plan |

---

## 7. Created By

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-03-13 | Plan Communications Management | Defines the complete communications approach |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A07 | Stakeholder Register and Engagement Strategy | A07 drives communications needs |
| A14 | Integrated Project Management Plan | Communications Management Plan is a subsidiary plan within A14 |
| A17 | Integrated Performance Reporting Record | Performance reports governed by this plan |
| A28 | Communications and Reporting Record | A28 is the living execution record |
| A06 | Tailoring Decision Record | Tailoring decisions affect depth and formality |

---

## 9. Validation Criteria

| Check | Validation Rule |
|---|---|
| All key stakeholder groups covered | Every stakeholder group from A07 has at least one identified communication item |
| Communication item register populated | Minimum five communication items documented with full fields |
| Senders assigned | Every communication item has a named owner |
| Escalation path defined | At least one escalation communication type described |
| Sensitive information rules present | Confidentiality handling explicitly addressed |
| Linked to A07 | Stakeholder communications needs trace to the stakeholder register |
| Not duplicating A07 | Stakeholder identification not re-stated here |
| Waste test pass | No separate communications matrix, distribution list, and meeting schedule duplicating same information |

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 5 |
| 1.0.1 | 2026-06-01 | Phase 0 cleanup | Migrated from artifacts/communications/ to artifacts/stakeholders-communications/ (P0-0I) |
