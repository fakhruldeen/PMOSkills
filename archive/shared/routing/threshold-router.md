# shared/routing/threshold-router.md — Threshold Decision Router
**Status:** Active
**Version:** 1.0.0
**Authority:** AUTHORITY-ROUTING.md · PMBOK8 §3.5 Be an Accountable Leader
**File Path:** `shared/routing/threshold-router.md`

---

## Purpose

The **Threshold Router** provides a deterministic classification framework for mapping any proposed change, variance, or issue to its corresponding authority band. By evaluating specific qualitative and quantitative limits, it prevents unapproved scope creep, ensures regulatory compliance, and protects overall project value.

---

## The Classification Matrix

| Threshold Band | Impact Limits (Quantitative) | Risk / Scope Factors (Qualitative) | Default Authority |
|---|---|---|---|
| **T1 Operational** | Cost variance < 5%  <br>Schedule variance < 5 days  <br>Contingency spend < $10k | - Localized task adjustment<br>- No change to baselined requirements<br>- No change to vendor contracts | **Project Manager** (or delegated lead) |
| **T2 Controlled Change**| Cost variance 5% - 10%  <br>Schedule variance 5 - 15 days  <br>Contingency spend $10k - $50k | - Modifies secondary artifact requirements<br>- Requires amendment of active vendor contract<br>- Triggers moderate ESG metric variations | **Change Control Board (CCB)** or Sponsor-delegated board |
| **T3 Governance Change**| Cost variance > 10%  <br>Schedule variance > 15 days  <br>Contingency spend > $50k | - Cross-baseline impacts (Cost + Scope)<br>- Alters value assumptions in Business Case (A01)<br>- Materially shifts ESG/Sustainability goals | **Project Sponsor** or Governing Body |
| **T4 Enterprise Portfolio**| Cross-initiative budget shift  <br>Enterprise resource contention | - Changes organizational governance policies<br>- Affects multi-project shared-capacity<br>- Strategic alignment redirection | **Portfolio Board** or Executive Council |

---

## Routing Evaluation Flowchart

```mermaid
flowchart TD
    A[Start Evaluation] --> B[Assess Quantitative Impacts]
    B --> C{Does Cost exceed 10% OR Schedule > 15 days?}
    C -->|Yes| D[Route to T3 Governance Change]
    C -->|No| E{Does Cost exceed 5% OR Schedule > 5 days?}
    E -->|Yes| F[Route to T2 Controlled Change]
    E -->|No| G[Assess Qualitative Factors]
    
    G --> H{Does it shift Business Case or ESG goals?}
    H -->|Yes| D
    H -->|No| I{Does it require vendor contract amendment?}
    I -->|Yes| F
    I -->|No| J[Route to T1 Operational Approval]
```

---

## Router Execution Protocol

1. **Step 1: Metric Identification** — Measure the projected delta in cost, time, scope, or expected value.
2. **Step 2: Worst-Case Mapping** — Match the delta against the criteria above. If a decision triggers a T2 cost impact but a T3 risk impact, the decision **must** be escalated to the highest matching band (**T3**).
3. **Step 3: Document and Audit** — Log the decision pathway in `A12Change Log` and reference the router criteria applied.

---

*Authority: PMBOK8 Standard §3.5 · PMOSkills Repository*
*Last Updated: 2026-06-02 · Initial Release*
