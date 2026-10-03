---
artifact_id: A14
name: Integrated Project Management Plan
template_version: 1.0.0
status: Template · Active
category: Planning
authority: "PMBOK8 Guide §4.5.2 · Planning Focus Area"
source_type: PMI-derived
file_path: artifacts/planning-and-baselines/A14-integrated-project-management-plan-template.md
---

# A14 — Integrated Project Management Plan Template

**Artifact ID:** A14  
**Artifact Name:** Integrated Project Management Plan  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide §4.5.2 — Integrate and Align Project Plans · Planning Focus Area  
**Source Type:** PMI-derived  
**File Path:** `artifacts/planning-and-baselines/A14-integrated-project-management-plan-template.md`

> **Usage note:** The Integrated PM Plan is not a document container — it is the integration hub that references and links all subsidiary plans and baselines. Complete the subsidiary plan index (Section 2) by referencing existing artifact files. Do not paste subsidiary plan content into this document. Size to context: small low-risk projects may integrate everything in this single file; large projects reference separate subsidiary plans.

---

## Section 1 — Plan Identity

| Field | Value |
|---|---|
| **Project Name** | [FIELD: Project name] |
| **Project ID** | [FIELD: Project ID] |
| **Plan Version** | [FIELD: e.g. 1.0 — increment on each baseline change] |
| **Plan Status** | Draft / Pending Approval / Approved / Under Change Control |
| **Prepared By** | [FIELD: Project manager name] |
| **Approved By** | [FIELD: Sponsor name] |
| **Approval Date** | [FIELD: YYYY-MM-DD] |
| **Baseline Reference** | [FIELD: Baseline ID or commit SHA if version-controlled] |

---

## Section 2 — Subsidiary Plan Index

[FIELD: For each domain, indicate whether a subsidiary plan exists as a separate artifact file or is integrated into this document. Link to the relevant artifact file where applicable.]

| Domain | Subsidiary Plan / Approach | Artifact File | Status |
|---|---|---|---|
| Integration | Project Management Approach | This document | ✅ Integrated |
| Scope | Scope and Requirements Decision Record | `artifacts/planning-and-baselines/A08-scope-and-requirements-decision-record.md` | [FIELD: ✅ Complete / 🟡 Draft / ❌ Not started] |
| Schedule | Schedule Baseline and Forecast Record | `artifacts/planning-and-baselines/A15-schedule-baseline.md` | [FIELD: Status] |
| Cost | Financial Baseline and Funding Record | `artifacts/planning-and-baselines/A16-financial-baseline.md` | [FIELD: Status] |
| Quality | Quality Management Plan | `artifacts/quality/A09-quality-management-plan.md` | [FIELD: Status] |
| Resource | Resource Capacity and Acquisition Record | `artifacts/resources/A26-resource-capacity-acquisition-record.md` | [FIELD: Status] |
| Communications | Communications Management Plan | `artifacts/communications/A10-communications-management-plan.md` | [FIELD: Status] |
| Risk | Risk Management Record | `artifacts/planning-and-baselines/A19-risk-management-record.md` | [FIELD: Status] |
| Procurement | Procurement Management Plan | `artifacts/extended-procurement/A11-procurement-management-plan.md` | [FIELD: Status / N/A if no procurement] |
| Stakeholder Engagement | Stakeholder Register and Engagement Strategy | `artifacts/stakeholders/A07-stakeholder-register-and-engagement-strategy.md` | [FIELD: Status] |
| Change Management | Change Readiness and Adoption Record | `artifacts/stakeholders-communications/A29-change-readiness-adoption-record.md` | [FIELD: Status / N/A] |
| Lifecycle / Tailoring | Tailoring Decision Record | `artifacts/planning-and-baselines/A06-tailoring-decision-record.md` | [FIELD: Status] |

---

## Section 3 — Baseline References

[FIELD: Record the approved baselines for this project. These are the performance measurement baselines against which variances are tracked.]

| Baseline | Description | Version / ID | Approval Date | Artifact Reference |
|---|---|---|---|---|
| Scope Baseline | Approved scope boundary and requirements summary | [FIELD: version] | [FIELD: date] | A08 |
| Schedule Baseline | Approved activity plan, milestones, and critical path | [FIELD: version] | [FIELD: date] | A15 |
| Cost Baseline | Approved budget, cost distribution, and reserves | [FIELD: version] | [FIELD: date] | A16 |

---

## Section 4 — Planning Assumptions

[FIELD: List the key planning assumptions that underpin this plan. These should cross-reference A05 (Context Register).]

| # | Assumption | Impact if False | Source (A05 ref) |
|---|---|---|---|
| 1 | [FIELD: Assumption statement] | [FIELD: Impact] | [FIELD: A05 entry ID] |
| 2 | [FIELD: Assumption statement] | [FIELD: Impact] | [FIELD: A05 entry ID] |

---

## Section 5 — Control Thresholds

[FIELD: Define the variance thresholds that will trigger a formal change request or escalation. These should match A06 Section 6.]

| Dimension | Threshold (Escalate if exceeded) | Authority |
|---|---|---|
| Cost variance | [FIELD: e.g. ±5% of approved budget] | [FIELD: PM / CCB / Sponsor] |
| Schedule variance | [FIELD: e.g. ±2 weeks on critical path] | [FIELD: PM / CCB / Sponsor] |
| Scope change | [FIELD: e.g. any addition to agreed scope] | [FIELD: CCB / Sponsor] |
| Risk exposure | [FIELD: e.g. any risk moving to High] | [FIELD: PM / Sponsor] |

---

## Section 6 — Governance Calendar

[FIELD: List the recurring governance events for this project.]

| Event | Participants | Frequency | Purpose | Artifact Produced |
|---|---|---|---|---|
| Steering / governance review | [FIELD: Sponsor, PM, key stakeholders] | [FIELD: Monthly] | [FIELD: Decision-making, escalation] | A12 (decisions) |
| Project status review | [FIELD: PM + team] | [FIELD: Weekly] | [FIELD: Progress, issues, risks] | A17 (performance report) |
| Risk review | [FIELD: PM + risk owner] | [FIELD: Fortnightly] | [FIELD: Risk register update] | A19 |
| [FIELD: Add event] | [FIELD: Participants] | [FIELD: Frequency] | [FIELD: Purpose] | [FIELD: Artifact] |

---

## Section 7 — Reporting Cadence

| Report | Audience | Frequency | Artifact |
|---|---|---|---|
| Executive status report | Sponsor + steering group | [FIELD: Monthly] | A17 |
| Detailed project status | PMO + team | [FIELD: Fortnightly] | A17 |
| Financial report | Finance / sponsor | [FIELD: Monthly] | A16 |
| Risk summary | Sponsor + governance | [FIELD: Monthly] | A19 |

---

## Section 8 — Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0 | [FIELD: YYYY-MM-DD] | [FIELD: Author] | Initial plan — approved baseline |
| [Version] | [FIELD: YYYY-MM-DD] | [FIELD: Author] | [FIELD: Change description and change request reference] |

---

*Template for: A14 — Integrated Project Management Plan*  
*Authority: PMBOK8 Guide §4.5.2*  
*See definition file: `artifacts/planning-and-baselines/A14-integrated-project-management-plan.md`*
