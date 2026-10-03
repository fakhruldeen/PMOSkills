---
ref_id: APP-X4
ref_type: Appendix
ref_name: "Appendix X4 — Procurement & Sourcing Strategy"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide Appendix X4 (Sourcing Strategy) · Procurement Practice Standards"
companion_ref_shortcode: "PROC-STD"
file_path: "reference/appendices/X4-procurement.md"
---

# Appendix X4 — Sourcing Strategy & Procurement

**Ref ID:** APP-X4  
**Type:** Appendix  
**PMBOK8 Source:** PMBOK 8 Appendix X4 (Sourcing Strategy)  
**Companion Reference:** Procurement Practice Standards (PROC-STD)  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Purpose & Scope

This appendix provides a structured guide to implementing **PMBOK 8th Edition Sourcing Strategy** and contract management practices. It details the decision-making framework, delivery structures, payment methods, and lifecycle controls that govern external acquisition of goods, software licenses, or specialized labor.

---

## 2. Sourcing Strategy Framework

Sourcing strategy is the foundational setup that dictates how the project team leverages the global supply market. It is divided into four key decisions:

```
                  ┌───────────────────────────────┐
                  │   SOURCING STRATEGY DECISION  │
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ Make-or-Buy     │      │ Delivery Method │      │ Contract Type   │
│ PR26 Plan Proc. │      │ Agile vs. Fixed │      │ FFP, CPIF, T&M  │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### 2.1 Make-or-Buy Assessment
* **Core Rule:** Evaluate internal team capacity, proprietary skills, IP constraints, and financial feasibility before deciding to outsource.
* **Outputs:** Formal Make-or-Buy Decisions.

### 2.2 Sourcing Delivery Methods
* **Predictive Delivery:** Design-Bid-Build or Design-Build structures where requirements are fully locked prior to contract award.
* **Adaptive / Agile Delivery:** Professional services contracting based on sprint deliverables, velocity clauses, and continuous value reviews.

### 2.3 Contract Types & Risk Sharing
Contract selection determines how financial risk is shared between the buyer and the seller:

| Contract Type | Financial Risk Profile | Ideal Scenario |
|---|---|---|
| **Firm Fixed Price (FFP)** | **Buyer:** Low <br>**Seller:** High | Requirements are mature, scope is fully detailed, and seller has high domain experience. |
| **Cost Plus Incentive Fee (CPIF)** | **Buyer:** Medium <br>**Seller:** Medium | Complex scope where both parties share in cost savings or cost overruns based on target formulas. |
| **Cost Plus Fixed Fee (CPFF)** | **Buyer:** High <br>**Seller:** Low | High-uncertainty R&D projects where the scope cannot be defined easily. |
| **Time & Materials (T&M)** | **Buyer:** High (cap needed) <br>**Seller:** Low | Small staff augmentation tasks, rapid consulting needs, or emergency system patches. |

---

## 3. Sourcing Lifecycle Flow

Procurements follow a formal three-phase governance cycle:

### Phase A — Planning (PR26)
1. **Inputs:** Project Charter, Requirements Documentation.
2. **Key Outputs:** Procurement Management Plan, Procurement SOW (Statement of Work), Bid Documents (RFP/RFI), Source Selection Criteria, independent cost estimates.

### Phase B — Selection (Conducting)
1. **Execution:** Advertise bid opportunities, hold bidder conferences, receive proposals, and evaluate vendors.
2. **Key Outputs:** Selected Sellers, Signed Agreements (Contracts), approved change requests.

### Phase C — Control & Closure (PR41)
1. **Execution:** Administer contract terms, verify and accept vendor deliverables, process contract changes, manage claims, and audit vendor performance.
2. **Key Outputs:** Closed Procurements, final seller evaluations, Work Performance Info.

---

## 4. Scenario Integration (Meridian CRM System Upgrade)

In the *Meridian CRM System Upgrade* project, the organization decided to procure a customized API integration module rather than building it in-house (Make-or-Buy decision).
* **Planning (PR26):** Drafted a detailed SOW and RFP, setting Multicriteria Decision Analysis weights (60% Technical Ability, 40% Cost).
* **Selection:** Awarded the contract to *Apex Integra* under a **Firm Fixed Price (FFP)** model with performance milestone payments.
* **Control (PR41):** Administered the contract. When Apex requested an extension due to API changes, the PM facilitated a change request (`CR-015`) to re-align the schedule baseline, ensuring contractual compliance and preventing legal disputes.

---

## 5. Procurement Compliance Checklist

Practitioners managing vendor agreements must ensure strict adherence to procurement governance:

- [ ] **SOW Completeness:** Verify that the Procurement Statement of Work describes the deliverables with sufficient clarity to minimize scope creep.
- [ ] **Selection Bias Mitigation:** Establish objective, weighted Source Selection Criteria prior to receiving any vendor proposals.
- [ ] **Claims Prevention:** Document all verbal agreements, performance failures, and project delays in writing in the central PMIS repository.
- [ ] **Vendor Performance Audits:** Conduct periodic structural quality audits of vendor deliverables (`PR37`) before processing milestone payments.
- [ ] **Contract Closeout:** Obtain formal written sign-off from the project sponsor and legal counsel before logging a procurement as Closed in `PR41`.

---

*Authority: PMBOK8 Guide Appendix X4 · Procurement Practice Standards*
