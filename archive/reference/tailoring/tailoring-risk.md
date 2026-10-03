---
ref_id: TAILOR-RISK
ref_type: FocusArea
ref_name: "Risk Domain Tailoring Guidance"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.8 (Uncertainty PD) · Risk Practice Standard §3"
file_path: "reference/tailoring/tailoring-risk.md"
---

# Risk Domain Tailoring Guidance

**Ref ID:** TAILOR-RISK  
**Type:** FocusArea  
**PMBOK8 Source:** PMBOK 8 Uncertainty Performance Domain  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Risk Tailoring Factors

Risk tailoring ensures that the effort, tools, and analytical methods used to identify, analyze, and respond to project risks are proportional to the project's complexity, technical uncertainty, and stakeholder risk tolerance.

Key tailoring factors include:
* **Uncertainty Levels:** Projects involving new technologies or volatile markets require continuous risk identification loops.
* **Stakeholder Risk Appetite:** High risk-averse sponsors require exhaustive risk analysis and massive contingency buffers.
* **Project Criticality:** Strategic or safety-critical initiatives require quantitative risk analysis (e.g., Monte Carlo simulations).
* **Team Experience:** Teams executing familiar projects can utilize standard historical checklists; new teams need structured brainstorming.

---

## 2. Scaling Risk Management Across T1–T4

Risk tracking and analysis methods are adapted according to complexity tiers:

| Risk Element | T1 (Low Complexity) | T2 (Medium Complexity) | T3 (High Complexity) | T4 (Strategic/Enterprise) |
|---|---|---|---|---|
| **Identification Frequency** | Ad-hoc / Monthly | Bi-weekly standard | Weekly team meetings | Continuous / Automated alerts |
| **Qualitative Analysis** | Simple high/med/low | Standard Probability-Impact | Weighted multi-point grid | Multi-variable utility theory |
| **Quantitative Analysis** | None | None | Monte Carlo schedule simulations | Full cost & schedule Monte Carlo |
| **Risk Audit Frequency** | Informally at milestones | Standard phase gates | Dedicated monthly audits | Weekly steering audits |

---

## 3. Scenario Integration (Meridian CRM System Upgrade)

During the *Meridian CRM System Upgrade* planning stage (`PR21`), risk management was tailored.
* **Tailored Quantitative Modeling:** We performed a **Monte Carlo Schedule Simulation** (`PR24`) for the API deployment phase due to high technical uncertainty.
* **Contingency Strategy:** Identified a critical threat (vendor developer availability) and established a pre-negotiated retainer contract with an alternative agency as our approved risk response (`PR25`).
* **Outcome:** When the vendor experienced developer turnover, the fallback agency was activated within 2 business days, preventing critical path delay.

---

## 4. Risk Tailoring Checklist

When tailoring project risk management, answer these key questions:

- [ ] **What is the stakeholder risk threshold?** Document the organization's appetite boundaries for cost peaks and timeline extensions.
- [ ] **Is Quantitative Analysis required?** For T3–T4 projects with high budgets, perform statistical schedule simulations to justify contingency reserve sizes (`PR24`).
- [ ] **Are risk owners assigned?** Ensure every active threat listed in the Risk Register (`PR22`) has a specific, accountable individual assigned to monitor triggers and execute responses.
- [ ] **Are opportunity responses defined?** Do not focus only on threats; actively identify and plan responses to exploit, share, or enhance project opportunities.

---

*Authority: PMBOK8 Guide §2.8 · Risk Practice Standard §3*
