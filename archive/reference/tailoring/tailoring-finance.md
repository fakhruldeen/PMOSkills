---
ref_id: TAILOR-FIN
ref_type: FocusArea
ref_name: "Finance Domain Tailoring Guidance"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.6 (Finance PD) · Earned Value Practice Standard §3"
file_path: "reference/tailoring/tailoring-finance.md"
---

# Finance Domain Tailoring Guidance

**Ref ID:** TAILOR-FIN  
**Type:** FocusArea  
**PMBOK8 Source:** PMBOK 8 Finance Performance Domain  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Finance Tailoring Factors

Finance tailoring ensures that cost estimating methods, funding tracking, reserve sizes, and financial control metrics are directly proportional to the project's total budget, corporate capital boundaries, and risk profile.

Key tailoring factors include:
* **Budget Size:** High-budget projects require multi-layered accounting and detailed Earned Value Management (EVM).
* **Funding Structures:** Projects funded via external grants, bank loans, or fixed corporate allocations require specialized compliance audits.
* **Organizational Cost Rules:** Strict internal finance policies dictates cost code structures, capitalization of software labor, and billing cycles.
* **Inflation and Exchange Rates:** Multi-national projects require contingency modeling for currency shifts and inflation peaks.

---

## 2. Scaling Finance Across T1–T4

Financial mechanisms are scaled according to complexity tiers:

| Finance Element | T1 (Low Complexity) | T2 (Medium Complexity) | T3 (High Complexity) | T4 (Strategic/Enterprise) |
|---|---|---|---|---|
| **Estimating Accuracy** | +/- 25% (ROM) | +/- 10% (Budgetary) | +/- 5% (Definitive) | +/- 3% (Strict) |
| **Funding Reviews** | Ad-hoc / Monthly | Monthly standard | Bi-weekly steering | Weekly / Stage-gate audits |
| **Contingency Reserves** | 5% (PM managed) | 10% (CCB managed) | 15% (CCB + Sponsor) | 20% (Board managed) |
| **EVM Reporting** | None (simple spend logs) | Core EVM (CV, SV, CPI) | Full EVM + EAC / ETC | Enterprise EVM audits |

---

## 3. Scenario Integration (Meridian CRM System Upgrade)

During the *Meridian CRM System Upgrade* budgeting phase (`PR16`), financial tailoring was executed.
* **Definitive Estimating:** We used bottom-up estimating (`PR15`) for high-uncertainty legacy migration tasks to hit a +/- 5% accuracy boundary.
* **Reserve Allocation:** Allocated a **15% Contingency Reserve** specifically for API structural integration failures and a **5% Management Reserve** for portfolio-directed database changes.
* **Outcome:** When structural integration issues occurred in sprint 3, the PM spent $8,500 of contingency funds (`PR35`) without delaying the main project schedule.

---

## 4. Finance Tailoring Checklist

When tailoring project finance, answer these key questions:

- [ ] **What is the required estimating accuracy?** ROM estimates (+/- 25%) are fine during initiation, but a definitive estimate (+/- 5% to 10%) is required before establishing the Cost Baseline (`PR16`).
- [ ] **Are contingency reserves defined?** Calculate reserves based on qualitative risk rating scores (`PR23`) rather than arbitrary percentage guesses.
- [ ] **Is EVM required?** For T2–T4, map EVA metrics monthly to track cost variance (CV), schedule variance (SV), and cost performance index (CPI in `PR35`).
- [ ] **Who approves budget releases?** Set up clear approval thresholds indicating when the PM can release reserves, and when sponsor authorization is required.

---

*Authority: PMBOK8 Guide §2.6 · Earned Value Practice Standard §3*
