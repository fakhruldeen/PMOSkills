---
artifact_id: A19
artifact_name: Risk Management Record
artifact_type: Risk planning and control artifact
source_type: synthesis
governance_layer: Project Governance
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Items 170–173 (risk register, risk management plan, risk response log)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.7 Risk Performance Domain; Table 2-1 Plan Risk Management, Identify Risks, Perform Risk Analysis, Plan Risk Responses, Implement Risk Responses, Monitor Risks"
performance_domains:
  - Risk
  - Governance
  - Finance
  - Schedule
  - Stakeholders
focus_areas:
  - Planning
  - Executing
  - Monitoring and Controlling
related_processes:
  - Plan Risk Management
  - Identify Risks
  - Perform Risk Analysis
  - Plan Risk Responses
  - Implement Risk Responses
  - Monitor Risks
linked_artifacts:
  - A06
  - A07
  - A12
  - A14
  - A15
  - A16
  - A17
  - A18
  - A20
  - A21
owner: Project manager with risk lead support
approval_authority: Project manager for risk responses within thresholds; sponsor or governance body for reserve drawdown and risk exceptions per A06
---

# A19 Risk Management Record

**Artifact ID:** A19  
**Artifact type:** Risk planning and control artifact  
**Source type:** Synthesis  
**Governance layer:** Project Governance  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Items 170–173 (risk register, risk management plan, risk response log)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Define the risk management approach, maintain the risk register, document analysis results, record response plans, and track risk monitoring decisions in one integrated record. |
| When used | Initiated during Planning; maintained and updated continuously through Executing, Monitoring and Controlling, and Closing. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.7 Risk Performance Domain; Table 2-1 Plan Risk Management, Identify Risks, Perform Risk Analysis, Plan Risk Responses, Implement Risk Responses, Monitor Risks |
| Purpose of citation | Ground all risk management activity in PMBOK 8 risk performance domain guidance and the six risk-related processes. |
| Performance domains | Risk, Governance, Finance, Schedule, Stakeholders |
| Focus areas | Planning; Executing; Monitoring and Controlling |
| Related processes | Plan Risk Management; Identify Risks; Perform Risk Analysis; Plan Risk Responses; Implement Risk Responses; Monitor Risks |
| Inputs | Charter (A04); context register (A05); scope decisions (A08); schedule (A15); budget and reserves (A16); stakeholder engagement risks (A07); issues (A18) |
| Outputs | Risk management approach; risk register; qualitative and quantitative analysis results; response plans; reserve justification; monitoring status |
| Core fields | Risk management approach; risk appetite; risk thresholds; risk register entries; probability and impact ratings; risk score; response strategy; response owner; response actions; residual risk; reserve linkage; monitoring status |
| Owner | Project manager with risk lead support |
| Approval authority | Project manager for risk responses within thresholds; sponsor or governance body for reserve drawdown and risk exceptions per A06 |
| Tailoring guidance | For low-complexity work, maintain a concise register with qualitative analysis only. For high-risk or high-uncertainty work, add quantitative analysis (linked to A20) and a formal response plan. Do not maintain a separate risk management plan, risk register, and response log in parallel. |
| Waste test | Fail if a risk management plan, a risk register spreadsheet, and a risk response tracker are maintained separately with reconciled data. |
| Notes | Replaces v1.0.2 Items 170–173. A20 is the linked record for quantitative analysis and reserve calculation. Engagement risks first captured in SKL-02-02 and SKL-03-07 are formally owned here from Plan Risk Management onward. |

---

## 2. Record Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Sponsor | |
| Project manager | |
| Risk lead | |
| Version | |
| Status | Draft / Approved / Active / Closed |
| Last updated | |
| Linked artifacts | A06, A07, A12, A14, A15, A16, A17, A18, A20, A21 |

---

## 3. Risk Management Approach

| Field | Entry |
|---|---|
| Risk methodology | |
| Risk appetite statement | |
| Probability scale | e.g., Very Low / Low / Medium / High / Very High |
| Impact scale | e.g., Very Low / Low / Medium / High / Very High |
| Probability–Impact matrix in use | Yes / No |
| Risk score calculation | Probability × Impact (numeric) / Qualitative label |
| Escalation threshold | |
| Reserve management approach | Link to A16 / Link to A20 |
| Review cadence | |
| Risk owner assignment rule | |
| Re-identification triggers | |
| Linked tailoring record | A06 |

---

## 4. Risk Register

| Risk ID | Category | Description | Cause | Effect | Probability | Impact | Risk score | Priority | Response strategy | Response owner | Response actions | Residual risk | Reserve link | Status | Last reviewed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | | | | | | | | | | | | | | Open | |
| | | | | | | | | | | | | | | | |

**Category values:** `Technical` / `Schedule` / `Finance` / `Stakeholder` / `Resource` / `Scope` / `External` / `Governance` / `Quality` / `Opportunity`  
**Response strategy (threats):** `Avoid` / `Transfer` / `Mitigate` / `Accept (active)` / `Accept (passive)` / `Escalate`  
**Response strategy (opportunities):** `Exploit` / `Share` / `Enhance` / `Accept` / `Escalate`  
**Status values:** `Identified` / `Active` / `Triggered` / `Closed` / `Transferred to A20`

---

## 5. Qualitative Analysis Summary

| Risk ID | Probability rating | Impact rating | Risk score | Priority band | Rationale | Analysis date | Analyst |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

---

## 6. Quantitative Analysis Reference

> For risks requiring quantitative analysis, link to A20 — Quantitative Risk and Reserve Decision Record. Do not embed quantitative worksheets here.

| Risk ID | Quantitative analysis required? | A20 reference | Reserve recommendation | Reserve approved? | Notes |
|---|---|---|---|---|---|
| | | | | | |

---

## 7. Risk Response Plans

| Risk ID | Response strategy | Specific actions | Owner | Due date | Resources required | Cost implication | Linked A16 reserve | Trigger / condition | Status |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

---

## 8. Residual and Secondary Risks

| Original risk ID | Residual risk description | Residual probability | Residual impact | Residual owner | Secondary risk created? | Secondary risk ID |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 9. Risk Monitoring Log

| Risk ID | Monitoring date | Status | Change from last review | Action taken | Next review date | Escalated to A12? |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 10. Triggered Risks and Outcomes

| Risk ID | Trigger date | Description of trigger | Response activated | Outcome | Reserve used | Lessons flag |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 11. Operating Rules

1. A19 is the single risk management record — it holds the risk management approach, register, analysis, responses, and monitoring log.
2. Qualitative analysis is the default. Quantitative analysis is performed in A20 and referenced here — never embedded.
3. All reserve drawdown decisions must be recorded in A16 and cross-referenced here.
4. Risks that require a formal change or exception decision must be escalated to A12.
5. Risk monitoring output feeds A17 (performance reporting) every status cycle.
6. Engagement risks first identified during stakeholder identification (A07) are formally owned in A19 from Plan Risk Management onward.
7. Fail the waste test if a separate risk management plan document, risk register spreadsheet, and response tracker each hold overlapping risk data requiring manual reconciliation.

---

## 12. Migration Note

| Legacy items | Legacy names | Migration action |
|---|---|---|
| 170 | Risk Register | CONSOLIDATED INTO A19 Section 4 |
| 171 | Risk Management Plan Template | CONSOLIDATED INTO A19 Section 3 |
| 172 | Risk Response Log | CONSOLIDATED INTO A19 Section 7 |
| 173 | Risk Monitoring Tracker | CONSOLIDATED INTO A19 Section 9 |

---

*Primary PMI source: PMBOK8 — Guide §2.7 Risk Performance Domain; Table 2-1 Plan Risk Management through Monitor Risks*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
