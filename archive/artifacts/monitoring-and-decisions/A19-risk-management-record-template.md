---
artifact_id: A19
artifact_name: Risk Management Record
artifact_type: template
version: "1.0.5"
status: Template · Active
parent_definition: artifacts/monitoring-and-decisions/A19-Risk-Management-Record.md
authority: PMBOK8 Guide §2.7 Risk Performance Domain; Table 2-1 Plan Risk Management through Monitor Risks
---

# A19 — Risk Management Record Template

> **Usage:** Initiate this record during Planning. Maintain and update continuously through Executing, Monitoring and Controlling, and Closing. Replace every `[FIELD: ...]` placeholder. Do not maintain a separate risk management plan, risk register spreadsheet, and response tracker — A19 is the single integrated record.

---

## Section 1 — Record Header

| Field | Entry |
|---|---|
| Project or initiative name | [FIELD: Full project name] |
| Project ID | [FIELD: Project identifier] |
| Sponsor | [FIELD: Sponsor name and role] |
| Project manager | [FIELD: PM name] |
| Risk lead | [FIELD: Name and role — or "PM" if no dedicated risk lead] |
| Version | [FIELD: e.g., v1.0] |
| Status | [FIELD: Draft / Approved / Active / Closed] |
| Last updated | [FIELD: YYYY-MM-DD] |
| Linked artifacts | A06 · A07 · A12 · A14 · A15 · A16 · A17 · A18 · A20 · A21 |

---

## Section 2 — Risk Management Approach

| Field | Entry |
|---|---|
| Risk methodology | [FIELD: Brief description of approach — qualitative / quantitative / hybrid] |
| Risk appetite statement | [FIELD: Describe organizational or sponsor risk appetite — e.g., "Low tolerance for schedule risk; moderate tolerance for cost risk"] |
| Probability scale | [FIELD: e.g., Very Low (0.05) / Low (0.1) / Medium (0.2) / High (0.4) / Very High (0.8)] |
| Impact scale | [FIELD: e.g., Very Low / Low / Medium / High / Very High — with numeric thresholds for cost and schedule] |
| Probability–Impact matrix in use | [FIELD: Yes / No] |
| Risk score calculation | [FIELD: Probability × Impact (numeric) or qualitative label — define method] |
| Escalation threshold | [FIELD: Define score or condition that triggers escalation to sponsor or governance] |
| Reserve management approach | [FIELD: Contingency in A16 / Quantitative analysis in A20 — describe linkage] |
| Review cadence | [FIELD: e.g., Weekly at status meeting / Monthly at governance review] |
| Risk owner assignment rule | [FIELD: Describe how risk owners are assigned — e.g., closest accountable person] |
| Re-identification triggers | [FIELD: List events that trigger a new risk identification cycle — e.g., scope change, new phase, external shock] |
| Linked tailoring record | A06 |

---

## Section 3 — Risk Register

| Risk ID | Category | Description | Cause | Effect | Probability | Impact | Risk score | Priority | Response strategy | Response owner | Response actions | Residual risk | Reserve link | Status | Last reviewed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | [FIELD: Category] | [FIELD: Clear risk statement — condition and consequence] | [FIELD: Root cause] | [FIELD: Effect on project objectives] | [FIELD: VL/L/M/H/VH] | [FIELD: VL/L/M/H/VH] | [FIELD: Numeric or label] | [FIELD: High/Medium/Low] | [FIELD: Strategy] | [FIELD: Name] | [FIELD: Specific actions] | [FIELD: Residual probability × impact] | [FIELD: A16 contingency ref or A20 ref] | [FIELD: Identified/Active/Triggered/Closed] | [FIELD: YYYY-MM-DD] |

**Category values:** `Technical` / `Schedule` / `Finance` / `Stakeholder` / `Resource` / `Scope` / `External` / `Governance` / `Quality` / `Opportunity`
**Response strategy (threats):** `Avoid` / `Transfer` / `Mitigate` / `Accept (active)` / `Accept (passive)` / `Escalate`
**Response strategy (opportunities):** `Exploit` / `Share` / `Enhance` / `Accept` / `Escalate`

---

## Section 4 — Qualitative Analysis Summary

| Risk ID | Probability rating | Impact rating | Risk score | Priority band | Rationale | Analysis date | Analyst |
|---|---|---|---|---|---|---|---|
| R-001 | [FIELD: VL/L/M/H/VH] | [FIELD: VL/L/M/H/VH] | [FIELD: Numeric] | [FIELD: High/Medium/Low] | [FIELD: Brief rationale for ratings] | [FIELD: YYYY-MM-DD] | [FIELD: Name] |

---

## Section 5 — Quantitative Analysis Reference

> For risks requiring quantitative analysis, link to A20 — Quantitative Risk and Reserve Decision Record. Do not embed quantitative worksheets here.

| Risk ID | Quantitative analysis required? | A20 reference | Reserve recommendation | Reserve approved? | Notes |
|---|---|---|---|---|---|
| R-001 | [FIELD: Yes / No] | [FIELD: A20 section and entry reference or N/A] | [FIELD: Amount or N/A] | [FIELD: Yes / No / Pending] | [FIELD: Notes] |

---

## Section 6 — Risk Response Plans

| Risk ID | Response strategy | Specific actions | Owner | Due date | Resources required | Cost implication | Linked A16 reserve | Trigger / condition | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-001 | [FIELD: Strategy] | [FIELD: Numbered action steps] | [FIELD: Name] | [FIELD: YYYY-MM-DD] | [FIELD: People / budget / tools] | [FIELD: Cost estimate or "Within reserve"] | [FIELD: A16 line reference] | [FIELD: Condition that activates this response] | [FIELD: Not started / In progress / Complete] |

---

## Section 7 — Residual and Secondary Risks

| Original risk ID | Residual risk description | Residual probability | Residual impact | Residual owner | Secondary risk created? | Secondary risk ID |
|---|---|---|---|---|---|---|
| R-001 | [FIELD: Describe remaining exposure after response] | [FIELD: VL/L/M/H/VH] | [FIELD: VL/L/M/H/VH] | [FIELD: Name] | [FIELD: Yes / No] | [FIELD: New R-NNN or N/A] |

---

## Section 8 — Risk Monitoring Log

| Risk ID | Monitoring date | Status | Change from last review | Action taken | Next review date | Escalated to A12? |
|---|---|---|---|---|---|---|
| R-001 | [FIELD: YYYY-MM-DD] | [FIELD: Identified/Active/Triggered/Closed] | [FIELD: Describe any change in probability, impact, or status] | [FIELD: Action taken this cycle] | [FIELD: YYYY-MM-DD] | [FIELD: Yes — CR-NNN / No] |

---

## Section 9 — Triggered Risks and Outcomes

| Risk ID | Trigger date | Description of trigger | Response activated | Outcome | Reserve used | Lessons flag |
|---|---|---|---|---|---|---|
| R-001 | [FIELD: YYYY-MM-DD] | [FIELD: What occurred to trigger this risk] | [FIELD: Which response plan was activated] | [FIELD: Describe the actual outcome] | [FIELD: Amount drawn from A16 reserve] | [FIELD: Flag for A21 — Yes / No] |

---

## Section 10 — Record Version History

| Version | Date | Updated by | Change description |
|---|---|---|---|
| 1.0 | [FIELD: YYYY-MM-DD] | [FIELD: Name] | Initial record — risk management approach established |

---

*Authority: PMBOK8 Guide §2.7 Risk Performance Domain; Table 2-1 Plan Risk Management through Monitor Risks*
*Source type: Synthesis · Version: 1.0.5 · Parent definition: A19-Risk-Management-Record.md*
