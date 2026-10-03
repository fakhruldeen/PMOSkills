---
artifact_id: A20
name: Quantitative Risk and Reserve Decision Record
template_version: 1.0.0
status: Template · Active
category: Quantitative Risk Analysis
authority: "PMBOK8 Guide §2.7.2.3 Perform Risk Analysis (quantitative path); Risk-PPP"
source_type: synthesis
file_path: artifacts/monitoring-and-decisions/A20-quantitative-risk-reserve-decision-record-template.md
---

**Artifact ID:** A20  
**Name:** Quantitative Risk and Reserve Decision Record  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide §2.7.2.3 Perform Risk Analysis (quantitative path); Risk-PPP  
**Owner:** PM or Quantitative Risk Analyst  
**Approval Authority:** Sponsor or Governance Body  

> **Usage Note:** This record is CONDITIONAL — produce it only when qualitative analysis in A19 is insufficient to justify reserve levels or when the project's risk exposure requires probabilistic evidence for sponsor or governance approval. Do not produce A20 as a routine artifact on every project. When complete, the approved reserve amounts must be entered into A16. A20 holds the justification and audit trail; A16 holds the approved reserve.

---

## Section 1 — Record Header

| Field | Value |
|---|---|
| Project Name | [FIELD: full project name] |
| Project ID | [FIELD: unique project identifier] |
| Analysis Version | [FIELD: e.g., 1.0, 1.1, 2.0] |
| Analysis Date | [FIELD: date analysis was performed] |
| Performed By | [FIELD: name and role of analyst] |
| Reviewed By | [FIELD: name and role of reviewer] |
| Status | [FIELD: valid values — Draft / Reviewed / Approved] |
| Analysis Trigger | [FIELD: reason this quantitative analysis was initiated] |
| Linked Artifacts | A16 · A19 · A21 |

---

## Section 2 — Analysis Scope and Method

| Field | Value |
|---|---|
| Risks Included (from A19) | [FIELD: list the risk IDs from A19 included in this analysis] |
| Risks Excluded and Rationale | [FIELD: list any A19 risks excluded and the reason for exclusion] |
| Analysis Method | [FIELD: select from — Monte Carlo / Decision Tree / Sensitivity Analysis / Three-Point Estimation / EMV / Other] |
| Tool or Model Used | [FIELD: name and version of tool or model used] |
| Model Basis | [FIELD: select from — Cost Model / Schedule Model / Combined] |
| Number of Iterations (if simulation) | [FIELD: number of iterations run, e.g., 10,000 — leave blank if not applicable] |
| Confidence Level Target | [FIELD: e.g., P70 / P80 / P90 — the confidence level selected for reserve recommendation] |
| Key Assumptions | [FIELD: list the key assumptions underpinning the model inputs and structure] |
| Limitations | [FIELD: describe known limitations of the model, data quality, or scope] |

---

## Section 3 — Risk Driver Inputs

> **Note:** Distribution types: Triangular / PERT / Uniform / Normal / Lognormal / Fixed

| Risk ID | Risk Description | Distribution Type | Optimistic | Most Likely | Pessimistic | Cost Impact Range | Schedule Impact Range | Correlation to Other Risks |
|---|---|---|---|---|---|---|---|---|
| [FIELD: ID] | [FIELD: description] | [FIELD: type] | [FIELD: value] | [FIELD: value] | [FIELD: value] | [FIELD: low–high] | [FIELD: low–high] | [FIELD: correlated risk IDs or None] |
| [FIELD: ID] | [FIELD: description] | [FIELD: type] | [FIELD: value] | [FIELD: value] | [FIELD: value] | [FIELD: low–high] | [FIELD: low–high] | [FIELD: correlated risk IDs or None] |
| [FIELD: ID] | [FIELD: description] | [FIELD: type] | [FIELD: value] | [FIELD: value] | [FIELD: value] | [FIELD: low–high] | [FIELD: low–high] | [FIELD: correlated risk IDs or None] |
| [FIELD: ID] | [FIELD: description] | [FIELD: type] | [FIELD: value] | [FIELD: value] | [FIELD: value] | [FIELD: low–high] | [FIELD: low–high] | [FIELD: correlated risk IDs or None] |
| [FIELD: ID] | [FIELD: description] | [FIELD: type] | [FIELD: value] | [FIELD: value] | [FIELD: value] | [FIELD: low–high] | [FIELD: low–high] | [FIELD: correlated risk IDs or None] |

---

## Section 4 — Cost Risk Analysis Results

### 4.1 Confidence Level Table

| Confidence Level | Estimated Cost at Risk | Reserve Implied | Notes |
|---|---|---|---|
| P50 | [FIELD: estimated cost] | [FIELD: reserve amount] | [FIELD: notes] |
| P70 | [FIELD: estimated cost] | [FIELD: reserve amount] | [FIELD: notes] |
| P80 | [FIELD: estimated cost] | [FIELD: reserve amount] | [FIELD: notes] |
| P90 | [FIELD: estimated cost] | [FIELD: reserve amount] | [FIELD: notes] |

| Field | Value |
|---|---|
| Baseline Cost (from A16) | [FIELD: approved baseline cost as recorded in A16] |
| Recommended Contingency Reserve | [FIELD: recommended contingency reserve amount and confidence level basis] |
| Recommended Management Reserve | [FIELD: recommended management reserve amount and rationale] |
| Basis for Recommendation | [FIELD: explain why this confidence level and reserve amount were selected] |

### 4.2 Schedule Risk Analysis (if applicable)

| Confidence Level | Estimated Completion Date | Schedule Reserve Implied | Notes |
|---|---|---|---|
| P50 | [FIELD: estimated completion date] | [FIELD: schedule buffer] | [FIELD: notes] |
| P70 | [FIELD: estimated completion date] | [FIELD: schedule buffer] | [FIELD: notes] |
| P80 | [FIELD: estimated completion date] | [FIELD: schedule buffer] | [FIELD: notes] |
| P90 | [FIELD: estimated completion date] | [FIELD: schedule buffer] | [FIELD: notes] |

| Field | Value |
|---|---|
| Baseline Completion Date (from A15) | [FIELD: approved baseline completion date as recorded in A15] |
| Recommended Schedule Buffer | [FIELD: recommended schedule buffer and confidence level basis] |

---

## Section 5 — Sensitivity Analysis

Identifies which risks contribute most to overall cost or schedule variance.

| Risk ID | Risk Description | Contribution to Variance % | Rank | Action Implication |
|---|---|---|---|---|
| [FIELD: ID] | [FIELD: description] | [FIELD: %] | [FIELD: rank] | [FIELD: recommended action] |
| [FIELD: ID] | [FIELD: description] | [FIELD: %] | [FIELD: rank] | [FIELD: recommended action] |
| [FIELD: ID] | [FIELD: description] | [FIELD: %] | [FIELD: rank] | [FIELD: recommended action] |
| [FIELD: ID] | [FIELD: description] | [FIELD: %] | [FIELD: rank] | [FIELD: recommended action] |
| [FIELD: ID] | [FIELD: description] | [FIELD: %] | [FIELD: rank] | [FIELD: recommended action] |

---

## Section 6 — Decision Tree Analysis (if applicable)

Complete this section only if decision tree analysis was used.

| Decision Point | Option A | Option B | Option C | EMV Option A | EMV Option B | EMV Option C | Recommended Option | Rationale |
|---|---|---|---|---|---|---|---|---|
| [FIELD: decision point] | [FIELD: description] | [FIELD: description] | [FIELD: description] | [FIELD: EMV value] | [FIELD: EMV value] | [FIELD: EMV value] | [FIELD: option] | [FIELD: rationale] |
| [FIELD: decision point] | [FIELD: description] | [FIELD: description] | [FIELD: description] | [FIELD: EMV value] | [FIELD: EMV value] | [FIELD: EMV value] | [FIELD: option] | [FIELD: rationale] |
| [FIELD: decision point] | [FIELD: description] | [FIELD: description] | [FIELD: description] | [FIELD: EMV value] | [FIELD: EMV value] | [FIELD: EMV value] | [FIELD: option] | [FIELD: rationale] |

---

## Section 7 — Reserve Recommendation and Approval

| Reserve Type | Recommended Amount | Confidence Level Basis | Approval Authority | Approval Status | Approved Amount | A16 Reference | Approval Date |
|---|---|---|---|---|---|---|---|
| Contingency Reserve | [FIELD: amount] | [FIELD: e.g., P80] | [FIELD: name/role] | [FIELD: Pending / Approved / Rejected] | [FIELD: approved amount] | [FIELD: A16 section/line reference] | [FIELD: date] |
| Management Reserve | [FIELD: amount] | [FIELD: e.g., P90] | [FIELD: name/role] | [FIELD: Pending / Approved / Rejected] | [FIELD: approved amount] | [FIELD: A16 section/line reference] | [FIELD: date] |

**Recommendation Narrative:** [FIELD: Explain the reasoning for the recommended reserve levels, the confidence level basis, and how the reserve will be monitored and adjusted]

> **Note:** Once approved, reserve figures must be entered into A16 — Financial Management and Cost Baseline Record. A20 holds the justification; A16 holds the approved reserve.

---

## Section 8 — Re-analysis Triggers

The following conditions require re-running the quantitative analysis:

- A high-priority risk from A19 is triggered or materially changes
- Reserve is drawn down beyond the threshold defined in A16
- A significant scope, schedule, or cost change is approved via A12
- A phase gate requires updated risk posture evidence
- Sponsor or governance body requests updated reserve justification

---

## Section 9 — Review and Update Log

| Version | Date | Updated By | Trigger | Key Changes |
|---|---|---|---|---|
| [FIELD: version] | [FIELD: date] | [FIELD: name] | [FIELD: trigger event] | [FIELD: summary of changes] |
| [FIELD: version] | [FIELD: date] | [FIELD: name] | [FIELD: trigger event] | [FIELD: summary of changes] |

---

**Change Log**

| Version | Date | Event | Notes |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch 3 | Initial template |

---

*Template for: A20 — Quantitative Risk and Reserve Decision Record*  
*Authority: PMBOK8 Guide §2.7.2.3; Risk-PPP*  
*See definition file: `artifacts/monitoring-and-decisions/A20-Quantitative-Risk-and-Reserve-Decision-Record.md`*
