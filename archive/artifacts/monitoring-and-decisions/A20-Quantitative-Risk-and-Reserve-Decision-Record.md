---
artifact_id: A20
artifact_name: Quantitative Risk and Reserve Decision Record
artifact_type: Quantitative risk analysis and reserve justification record
source_type: synthesis
governance_layer: Project Governance
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Item 174 (Decision Tree Analysis and Quantitative Risk Worksheets)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.7.2.3 Perform Risk Analysis (quantitative path); Risk-PPP"
performance_domains:
  - Risk
  - Finance
  - Governance
focus_areas:
  - Planning
  - Monitoring and Controlling
related_processes:
  - Perform Risk Analysis
  - Plan Risk Responses
  - Monitor Risks
linked_artifacts:
  - A16
  - A19
  - A21
owner: Project manager or quantitative risk analyst
approval_authority: Sponsor or governance body — reserve recommendations require formal approval per A06 thresholds
---

# A20 Quantitative Risk and Reserve Decision Record

**Artifact ID:** A20  
**Artifact type:** Quantitative risk analysis and reserve justification record  
**Source type:** Synthesis  
**Governance layer:** Project Governance  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Item 174 (Decision Tree Analysis and Quantitative Risk Worksheets)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Document quantitative risk analysis methods, results, and the logic used to determine contingency and management reserve levels; provide the formal justification for reserve decisions. |
| When used | When qualitative analysis in A19 indicates high uncertainty, high financial exposure, or where reserve levels require formal justification for sponsor or governance body approval. Conditional — not required on all projects. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.7.2.3 Perform Risk Analysis (quantitative path); Risk-PPP |
| Purpose of citation | Ground quantitative risk analysis and reserve determination in PMBOK 8 and the PMI Risk Management practice guide. |
| Performance domains | Risk, Finance, Governance |
| Focus areas | Planning; Monitoring and Controlling |
| Related processes | Perform Risk Analysis; Plan Risk Responses; Monitor Risks |
| Inputs | A19 risk register (prioritized risks); A15 schedule model; A16 cost baseline; A06 tailoring and thresholds |
| Outputs | Quantitative analysis results; probability distributions; S-curve; recommended contingency reserve; recommended management reserve; approved reserve levels for A16 |
| Core fields | Analysis scope and method; risk drivers; model inputs; simulation or decision tree results; confidence levels; reserve recommendation; approval decision |
| Owner | Project manager or quantitative risk analyst |
| Approval authority | Sponsor or governance body — reserve recommendations require formal approval per A06 thresholds |
| Tailoring guidance | Use A20 only when qualitative analysis is insufficient and reserve justification requires quantitative evidence. Skip for low-complexity, low-value, or well-precedented work where analogous estimating is sufficient. |
| Waste test | Fail if A20 is produced routinely on all projects regardless of complexity, or if it duplicates reserve figures already approved in A16. |
| Notes | Replaces v1.0.2 Item 174. A20 feeds reserve decisions into A16 — it does not hold the approved reserve; A16 does. |

---

## 2. Record Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Analysis version | |
| Analysis date | |
| Performed by | |
| Reviewed by | |
| Status | Draft / Reviewed / Approved |
| Analysis trigger | High qualitative score / Governance requirement / Sponsor request / Re-analysis |
| Linked artifacts | A16, A19, A21 |

---

## 3. Analysis Scope and Method

| Field | Entry |
|---|---|
| Risks included | Risk IDs from A19 (list) |
| Risks excluded and rationale | |
| Analysis method | Monte Carlo simulation / Decision tree / Sensitivity analysis / Three-point estimation / Expected Monetary Value (EMV) / Other |
| Tool or model used | |
| Model basis | Cost model / Schedule model / Combined |
| Number of iterations (if simulation) | |
| Confidence level target | e.g., P70 / P80 / P90 |
| Key assumptions | |
| Limitations | |

---

## 4. Risk Driver Inputs

| Risk ID | Risk description | Distribution type | Optimistic | Most likely | Pessimistic | Cost impact range | Schedule impact range | Correlation to other risks |
|---|---|---|---:|---:|---:|---|---|---|
| | | | | | | | | |

**Distribution types:** `Triangular` / `PERT` / `Uniform` / `Normal` / `Lognormal` / `Fixed`

---

## 5. Analysis Results

### 5a. Cost Risk Analysis

| Confidence level | Estimated cost at risk | Reserve implied | Notes |
|---|---:|---:|---|
| P50 | | | |
| P70 | | | |
| P80 | | | |
| P90 | | | |

**Baseline cost (from A16):**  
**Recommended contingency reserve:**  
**Recommended management reserve:**  
**Basis for recommendation:**

### 5b. Schedule Risk Analysis (if applicable)

| Confidence level | Estimated completion date | Schedule reserve implied | Notes |
|---|---|---|---|
| P50 | | | |
| P70 | | | |
| P80 | | | |
| P90 | | | |

**Baseline completion date (from A15):**  
**Recommended schedule buffer:**

---

## 6. Sensitivity Analysis

> Identifies which risks contribute most to overall cost or schedule variance.

| Risk ID | Risk description | Contribution to variance % | Rank | Action implication |
|---|---|---:|---|---|
| | | | | |

---

## 7. Decision Tree Analysis (if applicable)

| Decision point | Option A | Option B | Option C | EMV Option A | EMV Option B | EMV Option C | Recommended option | Rationale |
|---|---|---|---|---:|---:|---:|---|---|
| | | | | | | | | |

---

## 8. Reserve Recommendation and Approval

| Reserve type | Recommended amount | Confidence level basis | Approval authority | Approval status | Approved amount | A16 reference | Approval date |
|---|---:|---|---|---|---:|---|---|
| Contingency reserve | | | | | | | |
| Management reserve | | | | | | | |

**Recommendation narrative:**

> Once approved, reserve figures must be entered into A16 — Financial Management and Cost Baseline Record. A20 holds the justification; A16 holds the approved reserve.

---

## 9. Re-analysis Triggers

This record should be updated when any of the following occur:

- A high-priority risk from A19 is triggered or materially changes
- Reserve is drawn down beyond the threshold defined in A16
- A significant scope, schedule, or cost change is approved via A12
- A phase gate requires updated risk posture evidence
- Sponsor or governance body requests updated reserve justification

---

## 10. Operating Rules

1. A20 is conditional — produce it only when qualitative analysis in A19 is insufficient for the decision at hand.
2. All quantitative analysis results feed reserve recommendations in Section 8, which must be formally approved before being entered into A16.
3. A20 does not hold the approved reserve — A16 does. A20 holds the justification and audit trail.
4. Re-run A20 when triggers in Section 9 occur; version each re-run.
5. Fail the waste test if A20 is produced on every project regardless of complexity or if it simply restates qualitative scores from A19.

---

## 11. Migration Note

| Legacy item | Legacy name | Migration action |
|---|---|---|
| 174 | Decision Tree Analysis and Quantitative Risk Worksheets | REPLACED BY A20 |

---

*Primary PMI source: PMBOK8 — Guide §2.7.2.3 Perform Risk Analysis (quantitative path); Risk-PPP*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
