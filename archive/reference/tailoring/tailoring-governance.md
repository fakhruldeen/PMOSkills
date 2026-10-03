---
ref_id: TAILOR-GOV
ref_type: FocusArea
ref_name: "Governance Domain Tailoring Guidance"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.3 (Governance PD) · PMO Practice Guide §3"
file_path: "reference/tailoring/tailoring-governance.md"
---

# Governance Domain Tailoring Guidance

**Ref ID:** TAILOR-GOV  
**Type:** FocusArea  
**PMBOK8 Source:** PMBOK 8 Governance Performance Domain  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Governance Tailoring Factors

Governance tailoring involves scaling the oversight, authority routing, and decision-making bodies (e.g., CCB and PMO) to fit the size, criticality, and budget boundaries of the project.

Key tailoring factors include:
* **Organizational Complexity:** The structure of the performing organization (matrix vs. projectized).
* **Regulatory Compliance:** Extreme audits or safety-critical constraints requiring formal governance.
* **Sponsor Experience:** The level of involvement and decision frequency desired by the executive sponsor.
* **Portfolio Dependencies:** Interconnected projects requiring cross-portfolio governance.

---

## 2. Scaling Governance Across T1–T4

The governance structure is scaled systematically according to project complexity tiers:

| Governance Area | T1 (Low Complexity) | T2 (Medium Complexity) | T3 (High Complexity) | T4 (Strategic/Enterprise) |
|---|---|---|---|---|
| **Oversight Body** | PM Discretionary / Direct Sponsor | Controlling PMO Review Board | Enterprise PMO (EPMO) | Executive Steering Committee |
| **Change Authority** | Project Manager & Sponsor | Formal CCB (PM + Key Leads) | Portfolio Change Board | Corporate Board of Directors |
| **Reporting Cycle** | Monthly ad-hoc email | Bi-weekly PMIS dashboards | Weekly status + EVM reviews | Real-time dashboards + Board audits |
| **Phase Gate Reviews** | Simple informal sign-off | Formal PMO sign-off gates | Multi-stage investment audits | Third-party regulatory audits |

---

## 3. Scenario Integration (Meridian CRM System Upgrade)

During the *Meridian CRM System Upgrade*, the project was designated as a **T3 High Complexity** project due to data privacy laws and massive multi-system dependencies.
* **Governing Body Tailored:** Instead of relying on the PM's direct discretion, a formal **EPMO Governance Board** was instantiated.
* **Tailored Decision Path:** For any cost change exceeding $10,000 or schedule deviation beyond 10 business days, approval had to be routed through the steering committee rather than a simple PM-sponsor agreement.
* **Outcome:** This structure successfully audited regulatory data compliance and prevented unauthorized budget hikes in API development.

---

## 4. Governance Tailoring Checklist

When tailoring project governance, answer these key questions to establish your boundaries:

- [ ] **Who has final sign-off authority?** Identify the exact dollar value threshold above which the PM must route approvals to the CCB or Sponsor.
- [ ] **How is change managed?** For T1, use an informal log. For T2–T4, instantiate a formal CCB with pre-scheduled review cycles.
- [ ] **What is the PMO's oversight level?** Confirm whether the PMO serves a supportive, controlling, or directive function for this project tier.
- [ ] **How are lessons learned routed?** Establish if logs are filed in local directories (T1) or pushed to the central OPA knowledge base (T2–T4).

---

*Authority: PMBOK8 Guide §2.3 · PMO Practice Guide §3*
