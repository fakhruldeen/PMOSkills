---
artifact_id: A25
artifact_name: Team Operating and Responsibility Record
artifact_type: Team governance and responsibility artifact
source_type: synthesis
governance_layer: Project Governance · Delivery Ways of Working
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Items 100–105 (RACI matrix, team charter, team operating agreement templates)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.6 Resource Performance Domain; §2.1.6.3 Manage Project Execution; Table 2-1 Lead the Team, Manage Project Execution"
performance_domains:
  - Resources
  - Governance
  - Stakeholders
focus_areas:
  - Planning
  - Executing
related_processes:
  - Lead the Team
  - Manage Project Execution
  - Plan Resource Management
linked_artifacts:
  - A06
  - A07
  - A09
  - A14
  - A17
  - A18
  - A26
owner: Project manager or delivery lead
approval_authority: Project manager; sponsor awareness for authority or escalation changes
---

# A25 Team Operating and Responsibility Record

**Artifact ID:** A25  
**Artifact type:** Team governance and responsibility artifact  
**Source type:** Synthesis  
**Governance layer:** Project Governance · Delivery Ways of Working  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Items 100–105 (RACI matrix, team charter, team operating agreement templates)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Define team roles, responsibilities, authority levels, operating norms, decision rules, and escalation paths in one maintained record. |
| When used | At planning startup; updated when team composition, authority, or operating model materially changes. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.6 Resource Performance Domain; §2.1.6.3 Manage Project Execution; Table 2-1 Lead the Team |
| Purpose of citation | Ground team governance and responsibility assignment in PMBOK 8 resource performance domain and execution management guidance. |
| Performance domains | Resources, Governance, Stakeholders |
| Focus areas | Planning; Executing |
| Related processes | Lead the Team; Manage Project Execution; Plan Resource Management |
| Inputs | Charter (A04); stakeholder register (A07); delivery approach (A09); tailoring record (A06); org structure and authority context |
| Outputs | Role definitions; responsibility assignment; authority levels; team operating norms; escalation paths |
| Core fields | Team roster; role descriptions; responsibility matrix (RACI); authority levels; team norms; meeting cadence; decision rules; escalation path; conflict resolution approach |
| Owner | Project manager or delivery lead |
| Approval authority | Project manager; sponsor awareness for authority or escalation changes |
| Tailoring guidance | For small teams, a simple roster with role descriptions and a brief norms section is sufficient. For complex or multi-team programs, a full RACI and formal operating agreement is warranted. |
| Waste test | Fail if a RACI matrix, a team charter, and a team operating agreement are maintained in parallel with the same role and responsibility data. |
| Notes | Replaces v1.0.2 Items 100–105. A25 is the single team governance record. Resource capacity and acquisition planning lives in A26. |

---

## 2. Record Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Project manager | |
| Delivery lead (if different) | |
| Version | |
| Last updated | |
| Lifecycle approach | Predictive / Adaptive / Hybrid |
| Linked artifacts | A06, A07, A09, A14, A26 |

---

## 3. Team Roster

| Name | Role | Type | Organization / Vendor | Start date | End date | Allocation % | Linked A26 entry |
|---|---|---|---|---|---|---:|---|
| | | | | | | | |

**Type values:** `Internal` / `Contractor` / `Vendor` / `Secondment` / `Volunteer`

---

## 4. Role Definitions

| Role | Responsibilities | Authority level | Decision rights | Reporting to | Backup |
|---|---|---|---|---|---|
| Project Manager | Overall project accountability, planning, reporting, stakeholder management | Full within approved thresholds | All project decisions within A06 thresholds | Sponsor | |
| | | | | | |

---

## 5. Responsibility Assignment Matrix (RACI)

> Scale to project complexity. For small teams, a simplified table is acceptable.

| Deliverable / Activity | [Role 1] | [Role 2] | [Role 3] | [Role 4] | [Role 5] | Notes |
|---|---|---|---|---|---|---|
| Project Charter (A04) | | | | | | |
| Planning records | | | | | | |
| Status reporting (A17) | | | | | | |
| Risk management (A19) | | | | | | |
| Change decisions (A12) | | | | | | |
| Stakeholder engagement (A07) | | | | | | |
| Team management | | | | | | |
| Procurement (A31) | | | | | | |
| Closure (A27) | | | | | | |

**RACI codes:** `R` = Responsible (does the work) · `A` = Accountable (owns the outcome) · `C` = Consulted (provides input) · `I` = Informed (receives output)

---

## 6. Authority Levels

| Decision type | Team authority | PM authority | Sponsor / Governance authority |
|---|---|---|---|
| Day-to-day task decisions | Full | — | — |
| Scope clarifications (minor) | — | Full within thresholds | Notify |
| Schedule changes (within float) | — | Full within thresholds | Notify |
| Budget reallocation (within contingency) | — | Full within thresholds | Notify |
| Baseline changes | — | None | Required |
| Change requests | Raise to PM | Assess and route | Approve / reject |
| Team membership changes | — | Full within budget | Notify |
| Escalations | Raise to PM | Resolve or escalate | Final authority |

> Authority boundaries must align with A06 (Tailoring Decision Record) thresholds.

---

## 7. Team Operating Norms

| Norm area | Agreement |
|---|---|
| Working hours and availability | |
| Communication channels | |
| Meeting cadence and format | |
| Decision-making approach | Consensus / Majority / PM decides / Escalate |
| Conflict resolution approach | |
| Documentation standards | |
| Quality expectations | |
| Retrospective or lessons cadence | |
| Onboarding approach for new members | |

---

## 8. Escalation Path

| Issue type | First contact | Escalation level 1 | Escalation level 2 | Final authority |
|---|---|---|---|---|
| Technical issue | Team lead | Project manager | | Sponsor |
| Schedule risk | Team member | Project manager | | Sponsor |
| Interpersonal conflict | Parties + PM | | | HR / Sponsor |
| Scope question | Team member | PM + product owner | | Change authority |
| Budget concern | PM | | | Sponsor |
| Governance breach | PM | Sponsor | | Governance body |

---

## 9. Team Changes Log

| Change date | Team member | Change type | Reason | Impact | Approved by |
|---|---|---|---|---|---|
| | | | | | |

**Change type values:** `Join` / `Exit` / `Role change` / `Allocation change`

---

## 10. Operating Rules

1. A25 is the single team governance record — RACI, team charter, and operating agreement are not maintained as separate documents.
2. Authority levels in Section 6 must align with A06 thresholds — do not set independent authority limits here.
3. Resource capacity, cost, and acquisition planning lives in A26 — A25 holds governance and norms only.
4. Update Section 9 whenever a team member joins, exits, or changes role.
5. RACI must have exactly one `A` per row — never zero, never two.
6. Fail the waste test if a separate team charter, RACI spreadsheet, and operating agreement each hold overlapping role data.

---

## 11. Migration Note

| Legacy items | Legacy names | Migration action |
|---|---|---|
| 100–105 | RACI matrix, team charter, team operating agreement templates | CONSOLIDATED INTO A25 |

---

*Primary PMI source: PMBOK8 — Guide §2.6 Resource Performance Domain; §2.1.6.3 Manage Project Execution*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
