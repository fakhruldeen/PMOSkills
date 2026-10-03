---
artifact_id: A16
artifact_name: Financial Management and Cost Baseline Record
artifact_type: Financial planning and control artifact
source_type: synthesis
governance_layer: Project Governance
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Items 117, 118, 122, 123, 124, 125"
primary_pmi_source: PMBOK8
exact_section: "Guide, Finance Performance Domain 2.4; Table 2-1 Plan Financial Management, Estimate Costs, Develop Budget, Monitor and Control Finances"
performance_domains:
  - Finance
  - Governance
  - Risk
focus_areas:
  - Planning
  - Monitoring and Controlling
related_processes:
  - Plan Financial Management
  - Estimate Costs
  - Develop Budget
  - Monitor and Control Finances
linked_artifacts:
  - A01
  - A08
  - A14
  - A15
  - A17
  - A19
  - A20
  - A21
  - A24
owner: Project manager with finance support
approval_authority: Sponsor, finance authority, or project governing body according to spending authority thresholds
---

# A16 Financial Management and Cost Baseline Record

**Artifact ID:** A16  
**Artifact type:** Financial planning and control artifact  
**Source type:** Synthesis  
**Governance layer:** Project Governance  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Items 117, 118, 122, 123, 124, 125

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Define financial rules, estimates, funding timing, reserves, baseline, and cost control logic in one integrated record. |
| When used | During planning and ongoing financial monitoring. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide, Finance Performance Domain 2.4; Table 2-1 Plan Financial Management, Estimate Costs, Develop Budget, Monitor and Control Finances |
| Purpose of citation | Ground financial planning, budgeting, and control in PMBOK 8. |
| Performance domains | Finance, Governance, Risk |
| Focus areas | Planning; Monitoring and Controlling |
| Related processes | Plan Financial Management; Estimate Costs; Develop Budget; Monitor and Control Finances |
| Inputs | Business case, scope decisions, schedule information, resource estimates, risk data |
| Outputs | Cost baseline, funding plan, reserve logic, financial thresholds, approved changes |
| Core fields | Estimating basis; budget structure; contingency and management reserves; funding release assumptions; control thresholds; variance actions; approved baseline changes |
| Owner | Project manager with finance support |
| Approval authority | Sponsor, finance authority, or project governing body according to spending authority thresholds |
| Tailoring guidance | One integrated record replaces separate cost management plan, cost baseline ledger, funding horizon log, and baseline changelog unless regulation requires separation. |
| Waste test | Fail if financial information is duplicated across multiple ledgers with manual reconciliation effort. |
| Notes | Replaces or consolidates v1.0.2 Items 117, 118, 122, 123, 124, and 125. Sits in the Planning and Baselines family with A14 and A15. |

---

## 2. Record Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Sponsor | |
| Project manager | |
| Finance support contact | |
| Version | |
| Status | Draft / Approved / Rebaselined / Closed |
| Baseline date | |
| Reporting currency | |
| Exchange-rate basis (if applicable) | |
| Linked artifacts | A01, A08, A14, A15, A17, A19, A20, A21, A24 |

---

## 3. Financial Context

- Business case reference:  
- Funding source or sources:  
- Affordability assumptions:  
- Financial constraints and spending limits:  
- Policy, audit, tax, capitalization, or compliance constraints affecting budget treatment:  
- Time-phasing assumptions for funding release and expenditure:  

---

## 4. Estimating Basis

| Field | Entry |
|---|---|
| Estimate version | |
| Estimate date | |
| Estimating method | Analogous / Parametric / Bottom-up / Expert judgment / Vendor quote / Hybrid |
| Confidence statement | |
| Assumptions | |
| Exclusions | |
| Source data reference | |
| Estimate owner | |
| Review note | |

---

## 5. Budget Structure

| Budget element | Amount | Basis | Time period | Owner | Notes |
|---|---:|---|---|---|---|
| Labor | | | | | |
| External services | | | | | |
| Materials / equipment | | | | | |
| Software / licenses | | | | | |
| Facilities / environment | | | | | |
| Travel / training | | | | | |
| Quality / testing | | | | | |
| Contingency reserve | | | | | |
| Other | | | | | |
| **Total** | | | | | |

---

## 6. Funding Timing and Release Assumptions

| Funding tranche | Amount | Planned release date | Release condition | Source | Notes |
|---|---:|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

---

## 7. Reserves

| Reserve type | Amount | Basis | Trigger | Release authority | Linked risk or analysis | Notes |
|---|---:|---|---|---|---|---|
| Contingency reserve | | | | | | |
| Management reserve | | | | | | |

> Where reserve levels depend on quantitative analysis, link to A20 Quantitative Risk and Reserve Decision Record rather than embedding worksheets here.

---

## 8. Cost Baseline Summary

| Baseline item | Amount | Baseline date | Tolerance | Notes |
|---|---:|---|---|---|
| Total approved budget | | | | |
| Approved contingency reserve | | | | |
| Approved management reserve | | | | |
| Current forecast at completion | | | | |
| Funding authorized to date | | | | |

---

## 9. Control Thresholds and Variance Actions

| Threshold category | Trigger | Required action | Decision authority | Escalate to | Target response time |
|---|---|---|---|---|---|
| Forecast variance | | | | | |
| Spend-rate variance | | | | | |
| Reserve drawdown | | | | | |
| Funding delay | | | | | |
| Unapproved scope-cost impact | | | | | |

> Approval authority follows spending thresholds and governance layer design. Do not route all approvals upward by default.

---

## 10. Approved Baseline Changes

| Change ID | Date | Description | Financial impact | Approved by | Linked decision record | New baseline reference |
|---|---|---:|---|---:|---|---|
| | | | | | | |

> Approved changes are stored here by default. A separate baseline changelog is not required unless policy mandates separation.

---

## 11. Monitoring Notes

| Field | Entry |
|---|---|
| Current financial status | |
| Forecast summary | |
| Key variance explanation | |
| Reserve status | |
| Funding risk or timing concern | |
| Decision required | |
| Cross-reference | A17 / A19 / A20 / A21 / A12 |

> A16 is the authoritative baseline and control record. Reporting-heavy presentation of financial results belongs in A17 Integrated Performance Reporting Record.

---

## 12. Operating Rules

1. Use one integrated A16 record instead of separate cost management plan, funding horizon log, reserve note, and baseline changelog unless regulation, contract terms, or audit requirements require separation.
2. Keep governance layer, owner, and approval authority distinct within the artifact.
3. Use PMBOK8 finance terminology and the listed related processes. Do not apply older knowledge-area labels as the default structure.
4. If reserve justification requires quantitative analysis, reference A20 rather than embedding large analytical workbooks inside A16.
5. If a cost variance becomes a material project-control decision, route the decision through A12 or A21 and reflect the approved change back into A16.
6. Fail the artifact waste test if teams are manually reconciling duplicate finance data across multiple records without a distinct control purpose.

---

## 13. Migration Note

A16 replaces or consolidates the following v1.0.2 legacy items:

| Legacy item | Legacy name | Migration action |
|---|---|---|
| 117 | Project Financial Cost Baseline Ledger | MERGE TO A16 |
| 118 | Project Scope, Schedule, and Cost Baseline Changelog Ledger | MERGE TO A16 |
| 122 | Risk-Weighted Contingency Reserve Escalation Planner | MERGE TO A16 |
| 123 | Cost Management Plan Template | MERGE TO A16 |
| 124 | Granular Activity Cost Sizing Estimating Sheet | MERGE TO A16 |
| 125 | Project Operational Funding Cash-Flow Horizon Log | MERGE TO A16 |

---

*Primary PMI source: PMBOK8 — Guide, Finance Performance Domain 2.4; Table 2-1 Plan Financial Management, Estimate Costs, Develop Budget, Monitor and Control Finances*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
