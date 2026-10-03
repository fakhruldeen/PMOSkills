---
ref_id: KA-CROSSREF-INDEX
ref_name: "Knowledge Area Cross-Reference Index"
version: "1.0.0"
status: Complete
authority: PMBOK8 Primary
pmbok8_source: "PMBOK8 Guide §2.1–§2.8 · Process Groups: A Practice Guide §2"
file_path: "reference/knowledge-areas/KA-Crossref-Index.md"
migrated_from: "C5-KA-Crossref/KA-Crossref-Index.md"
migration_date: "2026-06-02"
migration_phase: "Phase 4 — C5"
---

# Knowledge Area Cross-Reference Index

**Ref ID:** KA-CROSSREF-INDEX  
**Type:** Index  
**PMBOK8 Source:** PMBOK 8 Performance Domains · Process Groups: A Practice Guide §2  
**Version:** 1.0.0  
**Status:** Complete  

---

## Purpose

This index provides a single, authoritative cross-reference mapping every PMBOK process record (**PR01–PR41**) maintained in `reference/processes/` to its respective **PMI Knowledge Area** (what domain of project management knowledge it addresses) and **Process Group** (when in the project lifecycle it is executed).

Use this index to:
- Navigate from any of the 10 Knowledge Areas to its respective detailed process records.
- Understand how processes flow within and across project lifecycle stages.
- Track primary outputs and baselines to their originating source processes.
- Facilitate quick routing of process-related queries for practitioners and AI agents.

---

## Process Summary by Knowledge Area

### KA1 — Project Integration Management
Integration Management coordinates and aligns project activities, deliverables, and lifecycle phases. It spans all five Process Groups.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR01 | Develop Project Charter | Initiating | A04 Project Charter, Assumption Log |
| PR03 | Develop Project Management Plan | Planning | A14 Integrated PMP |
| PR28 | Direct and Manage Project Work | Executing | Deliverables, Work Performance Data, Issue Log |
| PR29 | Manage Project Knowledge | Executing | Lessons Learned Register, OPA Updates |
| PR30 | Monitor and Control Project Work | Monitoring & Controlling | Work Performance Reports, Change Requests |
| PR31 | Perform Integrated Change Control | Monitoring & Controlling | Approved Change Requests, PMP Updates |
| PR40 | Close Project or Phase | Closing | Final Project Report, Product Transition, OPA Updates |

* **Process Count:** 7
* **Practitioner Note:** Integration Management acts as the core spine of project delivery; all change requests and performance reports flow through here.

---

### KA2 — Project Scope Management
Scope Management ensures the project includes all the work required, and only the work required, to complete the project successfully.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR04 | Plan Scope Management | Planning | Scope Management Plan, Requirements Plan |
| PR05 | Collect Requirements | Planning | Requirements Documentation, A13 RTM |
| PR06 | Define Scope | Planning | Project Scope Statement |
| PR07 | Create WBS | Planning | Scope Baseline (WBS + WBS Dictionary) |
| PR32 | Validate Scope | Monitoring & Controlling | Accepted Deliverables |
| PR33 | Control Scope | Monitoring & Controlling | Work Performance Info, Change Requests |

* **Process Count:** 6
* **Key Baseline:** Scope Baseline (created in PR07, validated in PR32, controlled in PR33).

---

### KA3 — Project Schedule Management
Schedule Management establishes policies, network structures, durations, and baselines to manage timely project completion.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR08 | Plan Schedule Management | Planning | Schedule Management Plan |
| PR09 | Define Activities | Planning | Activity List, Milestone List |
| PR10 | Sequence Activities | Planning | Schedule Network Diagram |
| PR11 | Estimate Activity Durations | Planning | Duration Estimates, Basis of Estimates |
| PR12 | Develop Schedule | Planning | A15 Schedule Baseline, Project Schedule |
| PR13 | Monitor and Control Schedule | Planning | Schedule Forecasts, Work Performance Info |
| PR34 | Control Schedule | Monitoring & Controlling | Work Performance Info, Change Requests |

* **Process Count:** 7
* **Key Baseline:** Schedule Baseline (created in PR12, controlled in PR34).

---

### KA4 — Project Cost Management
Cost Management involves estimating, budgeting, financing, and controlling costs so the project can be completed within the approved budget.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR14 | Plan Cost Management | Planning | Cost Management Plan |
| PR15 | Estimate Costs | Planning | Cost Estimates, Basis of Estimates |
| PR16 | Determine Budget | Planning | A16 Cost Baseline, Project Funding Requirements |
| PR35 | Control Costs | Monitoring & Controlling | Cost Forecasts, Work Performance Info |

* **Process Count:** 4
* **Key Baseline:** Cost Baseline (created in PR16, controlled in PR35).

---

### KA5 — Project Quality Management
Quality Management incorporates the organization's quality policies to ensure project deliverables meet standard specifications and customer requirements.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR17 | Plan Quality Management | Planning | Quality Management Plan, Quality Metrics |
| PR37 | Control Quality | Monitoring & Controlling | Verified Deliverables, Quality Control Measurements |

* **Process Count:** 2
* **Note:** Quality Control verifies work deliverables (PR37) before they are sent to the customer for formal acceptance in Validate Scope (PR32).

---

### KA6 — Project Resource Management
Resource Management identifies, estimates, acquires, and manages team and physical resources needed for project success.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR18 | Plan Resource Management | Planning | Resource Management Plan, Team Charter |
| PR19 | Estimate Activity Resources | Planning | Resource Requirements, Resource Breakdown Structure (RBS) |
| PR38 | Control Resources | Monitoring & Controlling | Work Performance Info, Change Requests |

* **Process Count:** 3
* **Note:** Covers team organization, physical equipment tracking, resource estimates, and utilization monitoring.

---

### KA7 — Project Communications Management
Communications Management ensures timely planning, collection, creation, distribution, storage, and monitoring of project information.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR20 | Plan Communications Management | Planning | Communications Management Plan |
| PR36 | Monitor Communications | Monitoring & Controlling | Work Performance Info, Change Requests |

* **Process Count:** 2
* **Core Goal:** Delivers the right message to the right stakeholder in the right format at the right time.

---

### KA8 — Project Risk Management
Risk Management identifies, analyzes, and plans risk responses to increase positive opportunities and minimize negative threats.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR21 | Plan Risk Management | Planning | Risk Management Plan |
| PR22 | Identify Risks | Planning | A19 Risk Register, Risk Report |
| PR23 | Perform Qualitative Risk Analysis | Planning | Prioritized Risk Register |
| PR24 | Perform Quantitative Risk Analysis | Planning | Numerical Risk Exposure Estimates |
| PR25 | Plan Risk Responses | Planning | Risk Response Strategies, Change Requests |
| PR39 | Monitor Risks | Monitoring & Controlling | Work Performance Info, Change Requests |

* **Process Count:** 6
* **Key Flow:** Identify (PR22) → Analyze (PR23, PR24) → Respond (PR25) → Monitor (PR39).

---

### KA9 — Project Procurement Management
Procurement Management handles contract generation, supplier evaluations, claims administration, and closeouts for external resources and vendors.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR26 | Plan Procurement Management | Planning | A11 Procurement Plan, SOW, Source Selection Criteria |
| PR41 | Control Procurements | Monitoring & Controlling | Closed Procurements, Claims Decisions, Change Requests |

* **Process Count:** 2
* **Procurement Cycle:** Plan (PR26) → Execute/Award → Monitor/Close (PR41).

---

### KA10 — Project Stakeholder Management
Stakeholder Management identifies all parties impacted by the project and builds strategic engagement plans to maximize positive support.

| ID | Process Name | Process Group | Primary Outputs |
|---|---|---|---|
| PR02 | Identify Stakeholders | Initiating | A07 Stakeholder Register, Change Requests |
| PR27 | Plan Stakeholder Engagement | Planning | Stakeholder Engagement Plan |

* **Process Count:** 2
* **Stakeholder Circle:** Identify (PR02) → Strategy Plan (PR27).

---

## Master Process Index by Process Group

This table lists all **41 process records** mapped sequentially by Process Group.

| ID | Process Name | Knowledge Area | Performance Domain |
|---|---|---|---|
| **Initiating** | | | |
| PR01 | Develop Project Charter | Integration | Governance |
| PR02 | Identify Stakeholders | Stakeholder | Stakeholders |
| **Planning** | | | |
| PR03 | Develop Project Management Plan | Integration | Governance |
| PR04 | Plan Scope Management | Scope | Scope |
| PR05 | Collect Requirements | Scope | Scope |
| PR06 | Define Scope | Scope | Scope |
| PR07 | Create WBS | Scope | Scope |
| PR08 | Plan Schedule Management | Schedule | Schedule |
| PR09 | Define Activities | Schedule | Schedule |
| PR10 | Sequence Activities | Schedule | Schedule |
| PR11 | Estimate Activity Durations | Schedule | Schedule |
| PR12 | Develop Schedule | Schedule | Schedule |
| PR13 | Monitor and Control Schedule | Schedule | Schedule |
| PR14 | Plan Cost Management | Cost | Finance |
| PR15 | Estimate Costs | Cost | Finance |
| PR16 | Determine Budget | Cost | Finance |
| PR17 | Plan Quality Management | Quality | Scope / Quality |
| PR18 | Plan Resource Management | Resource | Resources |
| PR19 | Estimate Activity Resources | Resource | Resources |
| PR20 | Plan Communications Management | Communications | Stakeholders |
| PR21 | Plan Risk Management | Risk | Risk |
| PR22 | Identify Risks | Risk | Risk |
| PR23 | Perform Qualitative Risk Analysis | Risk | Risk |
| PR24 | Perform Quantitative Risk Analysis | Risk | Risk |
| PR25 | Plan Risk Responses | Risk | Risk |
| PR26 | Plan Procurement Management | Procurement | Resources |
| PR27 | Plan Stakeholder Engagement | Stakeholder | Stakeholders |
| **Executing** | | | |
| PR28 | Direct and Manage Project Work | Integration | Delivery |
| PR29 | Manage Project Knowledge | Integration | Team / Delivery |
| **Monitoring & Controlling** | | | |
| PR30 | Monitor and Control Project Work | Integration | Measurement |
| PR31 | Perform Integrated Change Control | Integration | Governance |
| PR32 | Validate Scope | Scope | Scope |
| PR33 | Control Scope | Scope | Scope |
| PR34 | Control Schedule | Schedule | Schedule |
| PR35 | Control Costs | Cost | Finance |
| PR36 | Monitor Communications | Communications | Stakeholders |
| PR37 | Control Quality | Quality | Scope / Quality |
| PR38 | Control Resources | Resource | Resources |
| PR39 | Monitor Risks | Risk | Risk |
| PR41 | Control Procurements | Procurement | Resources |
| **Closing** | | | |
| PR40 | Close Project or Phase | Integration | Integration |

---

## Process Distribution Matrix

| Knowledge Area | Initiating | Planning | Executing | M&C | Closing | Total |
|---|---|---|---|---|---|---|
| 1. Integration | 1 | 1 | 2 | 2 | 1 | **7** |
| 2. Scope | — | 4 | — | 2 | — | **6** |
| 3. Schedule | — | 6 | — | 1 | — | **7** |
| 4. Cost | — | 3 | — | 1 | — | **4** |
| 5. Quality | — | 1 | — | 1 | — | **2** |
| 6. Resource | — | 2 | — | 1 | — | **3** |
| 7. Communications | — | 1 | — | 1 | — | **2** |
| 8. Risk | — | 5 | — | 1 | — | **6** |
| 9. Procurement | — | 1 | — | 1 | — | **2** |
| 10. Stakeholder | 1 | 1 | — | — | — | **2** |
| **TOTAL** | **2** | **25** | **2** | **11** | **1** | **41** |

---

## Baseline and PMB Traceability

The Performance Measurement Baseline (PMB) is formed by combining the following three key baselines:

| Baseline | Originating Process | Control Process | Associated Artifacts |
|---|---|---|---|
| **Scope Baseline** | PR07 Create WBS | PR33 Control Scope | Scope Statement, WBS, WBS Dictionary |
| **Schedule Baseline** | PR12 Develop Schedule | PR34 Control Schedule | Schedule Baseline (A15), Gantt Charts |
| **Cost Baseline** | PR16 Determine Budget | PR35 Control Costs | Cost Baseline (A16), Funding Requirements |

All changes impacting these baselines must be approved via **PR31 (Perform Integrated Change Control)**.

---

## Related Master Indexes

| File | Type | Description |
|---|---|---|
| `reference/processes/index.md` | Master Index | Catalog of all 41 detailed process files. |
| `SKILL-REGISTRY.md` | Registry | Complete catalog of skills mapped to domains and tasks. |
| `PRINCIPLES-CROSSWALK.md` | Crosswalk | Map of 12 PMBOK 8 principles to the performance domains. |
| `LIFECYCLE-MAP.md` | Map | Phase-by-phase physical process and artifact flows. |

---

*Authority: PMBOK8 Guide §2; Process Groups Practice Guide §2 · PMOSkills Repository*
