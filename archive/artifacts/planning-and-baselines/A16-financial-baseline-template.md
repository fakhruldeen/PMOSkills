---
artifact_id: A16
name: Financial Baseline and Funding Record
template_version: 1.0.0
status: Template · Active
category: Planning
authority: "PMBOK8 Guide Table 2-1 · Finance Performance Domain"
source_type: synthesis
file_path: artifacts/planning-and-baselines/A16-financial-baseline-template.md
---

# A16 — Financial Baseline and Funding Record Template

**Artifact ID:** A16  
**Artifact Name:** Financial Baseline and Funding Record  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide Table 2-1 · Finance Performance Domain · Planning Performance Domain §2.3  
**Source Type:** synthesis  
**File Path:** `artifacts/planning-and-baselines/A16-financial-baseline-template.md`

> **Usage note:** The cost baseline is the approved time-phased budget used to measure financial performance. Section 2 contains the budget summary (always required). Section 3 contains the time-phased cost distribution (required for projects where cash flow timing matters). Update the forecast (Section 5) at each reporting cycle. Do not alter baseline figures without a formal change request.

---

## Section 1 — Financial Record Identity

| Field | Value |
|---|---|
| **Project Name** | [FIELD: Project name] |
| **Project ID** | [FIELD: Project ID] |
| **Record Version** | [FIELD: e.g. Baseline v1.0] |
| **Baseline Approval Date** | [FIELD: YYYY-MM-DD] |
| **Approved By** | [FIELD: Finance authority / Sponsor] |
| **Currency** | [FIELD: e.g. USD / EUR / GBP / EGP] |
| **Financial Year** | [FIELD: e.g. FY2026 / multi-year: FY2026–FY2027] |
| **Record Owner** | [FIELD: Project manager / finance partner] |

---

## Section 2 — Budget Summary (Baseline)

| Budget Component | Amount | Notes |
|---|---|---|
| **Direct labour costs** | [FIELD: Amount] | [FIELD: Basis — e.g. X FTEs × Y months] |
| **Contractor / consultant costs** | [FIELD: Amount] | [FIELD: Basis] |
| **Materials and equipment** | [FIELD: Amount] | [FIELD: Basis] |
| **Technology / licences / tools** | [FIELD: Amount] | [FIELD: Basis] |
| **Travel and expenses** | [FIELD: Amount] | [FIELD: Basis] |
| **Third-party services / procurement** | [FIELD: Amount] | [FIELD: Reference A31 if procurement plan exists] |
| **Training and capability** | [FIELD: Amount] | [FIELD: Basis] |
| **Overhead / indirect allocation** | [FIELD: Amount] | [FIELD: Basis] |
| **Other direct costs** | [FIELD: Amount] | [FIELD: Describe] |
| **Subtotal — Direct Costs** | [FIELD: Sum] | |
| **Management Reserve** | [FIELD: Amount] | [FIELD: e.g. 10% of direct costs — owner: Sponsor] |
| **Contingency Reserve** | [FIELD: Amount] | [FIELD: e.g. 8% of direct costs — owner: PM — for known risks in A19] |
| **TOTAL APPROVED BUDGET (BAC)** | **[FIELD: Total]** | |

> **Reserve guidance:** Management reserve is held by the sponsor for unknown unknowns — the PM must request release. Contingency reserve is held by the PM for known risks documented in A19.

---

## Section 3 — Time-Phased Cost Distribution (Baseline)

[FIELD: Complete this section where cash flow timing is important — e.g. multi-year projects, fixed-price contracts, or projects with significant procurement spend. For short simple projects, this section may be marked N/A.]

| Period | Labour | Contractors | Materials | Technology | Other | Period Total | Cumulative Total |
|---|---|---|---|---|---|---|---|
| [FIELD: Month/Quarter 1] | [Amount] | [Amount] | [Amount] | [Amount] | [Amount] | [Subtotal] | [Cumulative] |
| [FIELD: Month/Quarter 2] | [Amount] | [Amount] | [Amount] | [Amount] | [Amount] | [Subtotal] | [Cumulative] |
| [FIELD: Month/Quarter 3] | [Amount] | [Amount] | [Amount] | [Amount] | [Amount] | [Subtotal] | [Cumulative] |
| **TOTAL** | | | | | | **[Total]** | |

---

## Section 4 — Funding Record

| Field | Value |
|---|---|
| **Total approved funding** | [FIELD: Amount — should equal BAC] |
| **Funding source(s)** | [FIELD: Budget line / cost centre / program fund / grant / other] |
| **Funding release schedule** | [FIELD: e.g. 50% at kickoff, 30% at midpoint, 20% at closure — or reference finance policy] |
| **Funding authority** | [FIELD: Name or role of person/body who controls fund release] |
| **Funding conditions or restrictions** | [FIELD: Any conditions on use — e.g. restricted to capex, spend-by date, ring-fenced to specific activities] |

---

## Section 5 — Financial Forecast (Updated Each Reporting Cycle)

> **Do not modify baseline figures.** Record Estimate at Completion (EAC) and variance below.

| Metric | Baseline | Actual to Date | Estimate to Complete (ETC) | Estimate at Completion (EAC) | Variance at Completion (VAC) |
|---|---|---|---|---|---|
| Total project cost | [FIELD: BAC] | [FIELD: AC] | [FIELD: ETC] | [FIELD: EAC] | [FIELD: VAC = BAC − EAC] |
| Labour | [FIELD: Budget] | [FIELD: Actual] | [FIELD: ETC] | [FIELD: EAC] | [FIELD: Variance] |
| Contractors | [FIELD: Budget] | [FIELD: Actual] | [FIELD: ETC] | [FIELD: EAC] | [FIELD: Variance] |
| Contingency used | [FIELD: Contingency budget] | [FIELD: Amount used] | [FIELD: Remaining] | — | — |

**Cost Performance Index (CPI):** [FIELD: CPI = EV ÷ AC — from EVM if used]
**Cost Variance (CV):** [FIELD: CV = EV − AC — or N/A]
**Forecast narrative:** [FIELD: Brief explanation of current financial status, any variances, and outlook]

---

## Section 6 — Assumptions and Constraints

| Type | Description | Financial Impact |
|---|---|---|
| Assumption | [FIELD: e.g. Labour rates remain stable at current market rates] | [FIELD: Rate increase of 5% would add ~X to total cost] |
| Assumption | [FIELD: Add from A05] | [FIELD: Impact] |
| Constraint | [FIELD: e.g. Approved budget is fixed — no supplementary budget available] | [FIELD: Any overrun requires scope reduction] |

---

## Section 7 — Change Log

| Version | Date | Author | Change Description | Change Request Ref |
|---|---|---|---|---|
| Baseline v1.0 | [FIELD: YYYY-MM-DD] | [FIELD: Author] | Initial approved cost baseline | — |
| [Version] | [FIELD: YYYY-MM-DD] | [FIELD: Author] | [FIELD: What changed] | [FIELD: CR-###] |

---

*Template for: A16 — Financial Baseline and Funding Record*  
*Authority: PMBOK8 Guide Table 2-1 · Finance Performance Domain*  
*See definition file: `artifacts/planning-and-baselines/A16-financial-baseline-funding-record.md`*
