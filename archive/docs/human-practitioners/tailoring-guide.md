---
doc_id: DOC-TAILOR-GUIDE
doc_name: PMOSkills Repository Tailoring and Scaling Guide
version: "1.0.0"
status: Active
authority: PMBOK8 Section 4 (Primary) · PMI PMO Practice Guide (Secondary)
file_path: "docs/human-practitioners/tailoring-guide.md"
---

# ✂️ PMOSkills Repository Tailoring & Scaling Guide

This guide provides the authoritative methodology for customizing, scaling, and configuring the PMOSkills template catalog and executable skills. Project managers must align their tailoring choices with the **four-step PMBOK® 8th Edition Tailoring Process** and the **T1-T4 complexity bands** established by the PMO.

---

## 1. The PMBOK 8 Four-Step Tailoring Process

Every project manager must execute and document the following four steps during the project setup phase (`SKL-01-01`):

```
  ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
  │ 1. Select Lifecycle  ├─────►│ 2. Modify Processes  ├─────►│ 3. Adjust Artifacts  ├─────►│ 4. Continuous QA     │
  └──────────────────────┘      └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

1.  **Step 1: Select Lifecycle Model**
    *   Assess project volatility, stability of requirements, and constraints.
    *   Choose between **Predictive (Waterfall)**, **Adaptive (Agile)**, or **Hybrid** delivery paths.
2.  **Step 2: Modify Processes**
    *   Determine which of the **41 standard processes (PR01-PR41)** are required.
    *   Decommission irrelevant process steps to prevent administrative overhead.
3.  **Step 3: Adjust Artifacts & Deliverables**
    *   Determine which of the **78 templates and examples** are mandatory.
    *   Add or consolidate metadata parameters based on stakeholder reporting needs.
4.  **Step 4: Continuous Quality Improvement (QA)**
    *   Audit and refine tailoring choices at project phase gates (`SKL-05-04`).
    *   Use waste tests to eliminate process inefficiencies.

---

## 2. The T1-T4 Complexity & Scaling Matrix

To ensure governance proportionality, PMOSkills employs a strict **Complexity Scaling Model** linking project size and risk profile to mandatory documentation and verification levels:

| Complexity Band | Selection Criteria | Required Skills | Required Artifacts | QA Gate Frequency |
|---|---|---|---|---|
| **T1 Operational** | Low risk, within local budget, short schedule (< 3 months) | Local Pack 01 & Pack 06 skills | Basic Charter (`A04`), Action Log (`A18`), Closure (`A24`) | Entry & Exit Gates only |
| **T2 Controlled** | Single baseline material impact, budget < $100k | Pack 01, Pack 02, basic Pack 03, Pack 05, and Pack 06 | Basic Charter (`A04`), IPM Plan (`A14`), Action Log (`A18`), Closure (`A24`) | Mid-point review + phase gates |
| **T3 Governance** | Multiple baseline impact, strategic target risk | Full Predictive or Agile tracks | Charter (`A04`), stakeholder (`A02`), all baselines (`A13`, `A15`, `A16`), master IPM (`A14`), Risk (`A19`), Lessons (`A21`) | Monthly PMO audits + phase gates |
| **T4 Enterprise** | Cross-portfolio impact, regulatory audits, major budget | Full repository catalog (48 skills, 78 artifacts) | Complete audited template suite | Weekly PMO inspections + steering committee reviews |

---

## 3. Industry-Specific Tailoring Guidelines

Different industries have distinct regulatory, compliance, and velocity constraints. PMOSkills provides specialized tailoring models:

### 3.1 Space Tech & Aerospace Model (Zero-Failure)
*   **Aesthetics & Style:** Absolute predictive rigors.
*   **SOP Focus:** Extensive quantitative risk analysis (`PR24`) and heavy configuration management.
*   **Mandatory Skills:** Pack 03 (Planning) and Pack 05 (Monitoring/Controlling) must be implemented at **100% compliance**.
*   **Key Artifacts:** Detailed Risk Registers (`A19`) and formal Change Control records (`A20`).

### 3.2 Green Energy Grid Model (Infrastructure & Hybrid)
*   **Aesthetics & Style:** Hybrid framework combining hardware infrastructure with digital controls.
*   **SOP Focus:** Environmental stewardship, ESG reporting, and strict procurement contract controls (`PR26` and `PR41`).
*   **Key Artifacts:** Financial Management Record (`A16`), Sustainability Index (`A17`), and vendor contract SLA registers.

### 3.3 Clinical Healthcare Model (Highly Regulated)
*   **Aesthetics & Style:** strict compliance overlay with regulatory verification.
*   **SOP Focus:** Traceability of requirements (`PR05`), privacy/security registers, and clinical trial stage gates.
*   **Key Artifacts:** Requirements Traceability Matrix (`A13`) and Phase Gate verification checkers.

---

*Authority: PMBOK 8 Section 4 · PMO Shared Governance Board · Repository Tailoring Committee*
