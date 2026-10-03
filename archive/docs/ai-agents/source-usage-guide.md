# PMI Companion Reference Source Usage Guide

This guide establishes the standardized procedures, citation conventions, short-codes, and authority hierarchy for using the 24 official PMI companion reference sources mapped within the **PMOSkills** repository.

---

## 1. Source Authority Hierarchy

When resolving conflicting guidelines or designing processes, practitioners and AI agents must follow this strict **four-tier authority hierarchy**:

```
┌────────────────────────────────────────────────────────┐
│             LEVEL 1: CANONICAL STANDARDS               │
│             PMBOK 8th Edition Core Standard            │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│             LEVEL 2: COMPANION GUIDES                  │
│             PMBOK 8th Edition Guide                    │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│             LEVEL 3: PRACTICE STANDARDS                │
│  WBS, Scheduling, Earned Value, Risk Practice Standards│
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│             LEVEL 4: PRACTICE GUIDES                   │
│   PMO, Agile, Benefits Realization Practice Guides     │
└────────────────────────────────────────────────────────┘
```

*   **Level 1: Primary Authority (Canonical Standards):** PMBOK 8th Edition Core Standard. Governs all core principles, governance models, and project lifecycle boundaries.
*   **Level 2: Execution Authority (Companion Guides):** PMBOK 8th Edition Guide. Details the 8 Performance Domains, metrics, and tailoring guidelines.
*   **Level 3: Operational Authority (Practice Standards):** Specialized standards (WBS, Scheduling, Risk, EVM). Governs deep technical configurations.
*   **Level 4: Supportive Authority (Practice Guides):** Industry-specific guides (Agile, PMO, Benefits, Sourcing). Governs localized delivery models and capability optimization.

---

## 2. Standardized Reference Short-Codes

All citations within process records (`reference/processes/`), skills, and artifacts must use these standardized short-codes:

| Short-Code | Publication Name | Primary Phase / Domain | Authority Level |
|---|---|---|---|
| `PMBOK8-STD` | PMBOK 8th Edition Core Standard | Portfolio / All Domains | Level 1 |
| `PMBOK8-GUIDE` | PMBOK 8th Edition Guide | Lifecycle / All Domains | Level 2 |
| `PMO-PG` | PMO Practice Guide | Governance / PMO | Level 4 |
| `AGILE-PG` | Agile Practice Guide | Delivery / Agile / Hybrid | Level 4 |
| `WBS-PS` | WBS Practice Standard | Planning / Scope | Level 3 |
| `SCHED-PS` | Scheduling Practice Standard | Planning / Schedule | Level 3 |
| `EV-PS` | Earned Value Practice Standard | Monitoring / Cost | Level 3 |
| `RISK-PS` | Risk Practice Standard | Planning / Uncertainty | Level 3 |
| `BENEFITS-PG` | Benefits Realization Practice Guide | Closing / Value | Level 4 |
| `PROCURE-PS` | Procurement Practice Standard | Planning / Resources | Level 3 |
| `EST-PS` | Estimating Practice Standard | Planning / Schedule & Cost | Level 3 |
| `GOV-PG` | Governance of Portfolios, Programs, Projects | Governance | Level 3 |

---

## 3. How to Cite Sources

To maintain a professional, standardized reference layer, all citations must be written in the following markdown formats:

### 3.1 In Process Records (YAML Front-Matter)
The `pmbok8_source` field in the front-matter of any reference file must cite the short-code followed by the section/page details:
```yaml
pmbok8_source: "PMBOK8-GUIDE §2.6 (Finance PD) · EV-PS §3.2"
```

### 3.2 In Markdown Body (Inline Citations)
Format inline text citations using clean bold bracket identifiers followed by specific page/section paths:
*   *Correct:* "We calculate the Cost Performance Index (CPI) to measure budget efficiency **[EV-PS §4.1]**."
*   *Correct:* "The project must establish a CCB to govern baseline updates **[PMBOK8-STD §3.4]**."

---

## 4. Source Application Map (By Project Phase)

Apply companion references strategically to support different project phases:

```
                  INITIATION & GOVERNANCE
        ┌─────────────────────────────────────────┐
        │  PMBOK8-STD · GOV-PG · PMO-PG           │
        └────────────────────┬────────────────────┘
                             ▼
                 PLANNING & BASELINING
        ┌─────────────────────────────────────────┐
        │  WBS-PS · SCHED-PS · RISK-PS · EST-PS   │
        └────────────────────┬────────────────────┘
                             ▼
                MONITORING, CONTROL & EVM
        ┌─────────────────────────────────────────┐
        │  EV-PS · PROCURE-PS · PMBOK8-GUIDE      │
        └────────────────────┬────────────────────┘
                             ▼
                CLOSEOUT & BENEFITS VALUE
        ┌─────────────────────────────────────────┐
        │  BENEFITS-PG · PMBOK8-STD               │
        └─────────────────────────────────────────┘
```

---

*Authority: PMBOK8 Core Standard & PMOSkills Governance Board*
