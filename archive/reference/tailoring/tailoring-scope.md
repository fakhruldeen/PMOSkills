---
ref_id: TAILOR-SCOPE
ref_type: FocusArea
ref_name: "Scope Domain Tailoring Guidance"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.4 (Scope PD) · WBS Practice Standard §3"
file_path: "reference/tailoring/tailoring-scope.md"
---

# Scope Domain Tailoring Guidance

**Ref ID:** TAILOR-SCOPE  
**Type:** FocusArea  
**PMBOK8 Source:** PMBOK 8 Scope Performance Domain  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Scope Tailoring Factors

Scope tailoring ensures that the effort invested in collecting requirements, defining the boundaries of work, decomposing the WBS, and verifying deliverables is proportional to the stability and complexity of the project.

Key tailoring factors include:
* **Stability of Requirements:** Whether requirements are fully understood (predictive) or emergent/evolving (adaptive).
* **Work Decomposition Level:** The depth of WBS required to maintain financial and operational controls.
* **Customer Involvement:** How frequently the customer participates in verification and scope validation meetings.
* **Technology Novelty:** Projects using brand new technologies require adaptive scope tailoring to handle technical discovery.

---

## 2. Scaling Scope Across T1–T4

Scope management mechanisms are adapted according to complexity levels:

| Scope Element | T1 (Low Complexity) | T2 (Medium Complexity) | T3 (High Complexity) | T4 (Strategic/Enterprise) |
|---|---|---|---|---|
| **Elicitation Methods** | Simple interviews | Structured workshops | Multicriteria decision panels | Focus groups + Prototyping |
| **Requirements Capture** | Core list in Excel | Standard Requirements Doc | Requirements Doc + RTM | Dynamic PMIS system (e.g. Jira) |
| **WBS Decomposition** | Down to 2 Levels | Down to 3–4 Levels | Detailed WBS + Dictionary | Enterprise Program / WBS |
| **Verification Gate** | Informal demo | Standard walkthroughs | Quality control audit gates | Multi-stage regulatory audits |

---

## 3. Scenario Integration (Meridian CRM System Upgrade)

In the *Meridian CRM System Upgrade* project, the scope baseline was tailored based on legacy system complexity.
* **Tailoring Decision:** The WBS was decomposed to Level 4 specifically for the "Database Migration" work package because data structures were legacy and highly volatile.
* **RTM Integration:** An automated **Requirements Traceability Matrix (RTM)** was instantiated (`PR05`) to track data migration fields to the verified outputs, ensuring that zero data fields were dropped during customer validation (`PR32`).
* **Outcome:** Prevented critical path scope creep while ensuring 100% data integrity upon final deployment.

---

## 4. Scope Tailoring Checklist

When tailoring project scope, answer these key questions:

- [ ] **How stable are the project requirements?** If stability is high, select a predictive scope baseline. If volatility is high, use user stories and sprint backlogs.
- [ ] **What level of WBS detail is required?** Ensure work packages represent manageable packages (usually the 8/80 rule: between 8 and 80 hours of effort).
- [ ] **Is an RTM necessary?** For T2–T4, a formal Requirements Traceability Matrix is required to ensure deliverables map directly back to business needs.
- [ ] **How is scope creep minimized?** Set rigid scope tolerances and require formal change requests (`PR31`) for any work outside the defined scope statement boundaries.

---

*Authority: PMBOK8 Guide §2.4 · WBS Practice Standard §3*
