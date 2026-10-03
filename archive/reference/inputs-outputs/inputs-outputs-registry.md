---
ref_id: IO-REGISTRY
ref_name: "Inputs and Outputs Master Registry"
version: "1.0.0"
status: Complete
authority: PMBOK8 Primary
pmbok8_source: "PMBOK8 Guide §2 · Process Groups: A Practice Guide §2"
file_path: "reference/inputs-outputs/inputs-outputs-registry.md"
migrated_from: "C7-IO-Registry/IO-Registry-Index.md"
migration_date: "2026-06-02"
migration_phase: "Phase 4 — C7"
---

# Inputs & Outputs Master Registry

**Ref ID:** IO-REGISTRY  
**Type:** Registry  
**PMBOK8 Source:** PMBOK 8 Performance Domains · Process Groups: A Practice Guide §4–§12  
**Version:** 1.0.0  
**Status:** Complete  

---

## Purpose

This registry serves as the **authoritative, deduplicated master catalog of all project inputs and outputs** across the 41 process records (**PR01–PR41**) in `reference/processes/`. Each project plan, baseline, document, register, or data stream is classified, defined, and mapped back to the exact process that produces it and the processes that consume it.

---

## Artifact Classification System

All project artifacts are categorized using the following standardized type codes:

| Code | Type | Description |
|---|---|---|
| **PL** | Subsidiary Plan | Management plans that form components of the Project Management Plan (PMP). |
| **BL** | Baseline | Change-controlled baseline (Scope, Schedule, Cost, or PMB). |
| **DOC** | Project Document | Dynamic working files updated throughout the project lifecycle. |
| **REG** | Register | Structured logs that accumulate and track historical/living details. |
| **REP** | Performance Report | Formally formatted summaries of status, metrics, and forecasts. |
| **REQ** | Request / Decision | Change requests, approved changes, or defect repair instructions. |
| **DATA** | Performance Data | Raw data, analyzed performance information, and metrics. |
| **ENV** | Enterprise / Org Asset | EEFs and OPAs — external conditions or organizational assets. |
| **BUS** | Business Document | Strategic justifications (Business Case, Benefits Management Plan). |
| **OUT** | Primary Output | Main physical deliverables or final transition results. |

---

## Section 1 — Subsidiary Management Plans (PL)

Subsidiary plans form the component building blocks of the comprehensive **A14 Integrated Project Management Plan (PMP)**.

| Plan Component | Type | Produced By | Consumed As Input By |
|---|---|---|---|
| **Scope Management Plan** | PL | PR04 Plan Scope | PR03, PR05, PR06, PR07, PR32, PR33 |
| **Requirements Management Plan**| PL | PR04 Plan Scope | PR03, PR05, PR33 |
| **Schedule Management Plan** | PL | PR08 Plan Schedule | PR03, PR09, PR10, PR11, PR12, PR34 |
| **Cost Management Plan** | PL | PR14 Plan Cost | PR03, PR15, PR16, PR35 |
| **Quality Management Plan** | PL | PR17 Plan Quality | PR03, PR37 |
| **Resource Management Plan** | PL | PR18 Plan Resource | PR03, PR19, PR38 |
| **Communications Management Plan**| PL | PR20 Plan Comm | PR03, PR36 |
| **Risk Management Plan** | PL | PR21 Plan Risk | PR03, PR22, PR23, PR24, PR25, PR39 |
| **Procurement Management Plan** | PL | PR26 Plan Procurement| PR03, PR41 |
| **Stakeholder Engagement Plan** | PL | PR27 Plan Stakeholder | PR02, PR03 |
| **Change Management Plan** | PL | PR03 Develop PMP | PR31 Perform Change Control |
| **Configuration Management Plan**| PL | PR03 Develop PMP | PR31 Perform Change Control |

---

## Section 2 — Project Baselines (BL)

Baselines represent change-controlled standards against which project execution is measured.

| Baseline | Type | Produced By | Consumed As Input By |
|---|---|---|---|
| **Scope Baseline**<br>*(Scope Statement + WBS + Dictionary)* | BL | PR07 Create WBS | PR09, PR11, PR12, PR15, PR16, PR32, PR33 |
| **Schedule Baseline (A15)** | BL | PR12 Develop Schedule| PR13, PR34, PR35 |
| **Cost Baseline (A16)** | BL | PR16 Determine Budget| PR35 |
| **Performance Measurement Baseline**| BL | PR03 Develop PMP | PR30 Monitor & Control Work |

---

## Section 3 — Project Documents (DOC)

Dynamic files that record specific data points and are elaborately updated.

| Document | Type | Produced By | Consumed As Input By |
|---|---|---|---|
| **Project Charter (A04)** | DOC | PR01 Develop Charter | PR02, PR03, PR04, PR08, PR14, PR17, PR18, PR20, PR21, PR26, PR27 |
| **Project Scope Statement** | DOC | PR06 Define Scope | PR07 |
| **Requirements Documentation** | DOC | PR05 Collect Req | PR06, PR07, PR17, PR26, PR32, PR37 |
| **Requirements Traceability Matrix**| DOC | PR05 Collect Req | PR32, PR37 |
| **Activity List** | DOC | PR09 Define Activities| PR10, PR11, PR12, PR19 |
| **Activity Attributes** | DOC | PR09 Define Activities| PR10, PR11, PR12, PR19 |
| **Milestone List** | DOC | PR09 Define Activities| PR10, PR12 |
| **Schedule Network Diagrams** | DOC | PR10 Sequence Act | PR12 |
| **Duration Estimates** | DOC | PR11 Estimate Durations| PR12 |
| **Basis of Estimates** | DOC | PR11 & PR15 | PR12, PR16 |
| **Project Schedule** | DOC | PR12 Develop Schedule| PR13, PR30, PR34, PR38 |
| **Project Calendars** | DOC | PR12 Develop Schedule| PR19 |
| **Cost Estimates** | DOC | PR15 Estimate Costs | PR16 |
| **Funding Requirements** | DOC | PR16 Determine Budget| PR35 |
| **Quality Metrics** | DOC | PR17 Plan Quality | PR37 |
| **Resource Requirements** | DOC | PR19 Estimate Res | PR11, PR12, PR15, PR16, PR38 |
| **Resource Breakdown Structure** | DOC | PR19 Estimate Res | PR38 |
| **Resource Calendars** | DOC | PR19 Estimate Res | PR12 |
| **Project Team Assignments** | DOC | PR18 Plan Resource | PR38 |
| **Agreements / Contracts** | DOC | External (or PR26) | PR40, PR41 |
| **Procurement SOW & Bid Docs** | DOC | PR26 Plan Procurement| PR41 |

---

## Section 4 — Living Registers (REG)

Logs that accumulate entries and track real-time project states.

| Register | Type | Created By | Updated Throughout / Consumed By |
|---|---|---|---|
| **Stakeholder Register (A07)** | REG | PR02 Identify Stakeholder| PR03, PR05, PR20, PR21, PR27, PR36 |
| **Risk Register (A19)** | REG | PR22 Identify Risks | PR23, PR24, PR25, PR30, PR39 |
| **Assumption Log** | REG | PR01 Develop Charter | PR03, PR05, PR06, PR09, PR11, PR15, PR22 |
| **Issue Log** | REG | PR28 Direct & Manage | PR30, PR36, PR38, PR39 |
| **Lessons Learned Register** | REG | PR29 Manage Knowledge| PR03, PR30, PR40 |
| **Change Log** | REG | PR31 Perform ICC | PR30, PR33, PR34, PR35 |

---

## Section 5 — Performance Reports (REP)

Formatted records detailing metrics, variances, and forecasts.

| Report | Type | Produced By | Consumed As Input By |
|---|---|---|---|
| **Work Performance Reports** | REP | PR30 Monitor & Control | PR31 ICC, PR36, PR38, PR39 |
| **Quality Reports** | REP | PR37 Control Quality | PR30 Monitor & Control |
| **Risk Report** | REP | PR22 Identify Risks | PR23, PR24, PR25, PR30, PR39 |
| **Schedule Forecasts** | REP | PR34 Control Schedule| PR30 Monitor & Control |
| **Cost Forecasts** | REP | PR35 Control Costs | PR30 Monitor & Control |
| **Final Project Report** | REP | PR40 Close Project | Sponsor, Customer, PMO Archives |

---

## Section 6 — Performance Data Flow (DATA)

The structural data flow that bridges execution to monitoring, analysis, and reporting.

| Data Stage | Type | Originating Process | Consumed By |
|---|---|---|---|
| **Work Performance Data** | DATA | PR28 Direct & Manage | M&C Processes (`PR32–PR39`, `PR41`) |
| **Work Performance Info** | DATA | M&C Processes (`PR32–PR39`, `PR41`) | PR30 Monitor & Control Project Work |
| **Work Performance Reports** | DATA | PR30 Monitor & Control | PR31 Perform ICC (Change Control) |

---

## Section 7 — Requests, Repairs, and Decisions (REQ)

Formal actions seeking modifications or documenting approvals.

| Request Type | Type | Produced By | Consumed / Approved By |
|---|---|---|---|
| **Change Requests** | REQ | Almost all processes | PR31 Perform Integrated Change Control |
| **Approved Change Requests** | REQ | PR31 Perform ICC | PR28 Direct and Manage Project Work |
| **Defect Repairs** | REQ | PR37 Control Quality | PR28 Direct and Manage Project Work |

---

## Section 8 — Strategic & Business Documents (BUS)

Inputs representing business goals and investment boundaries.

| Document | Type | Produced By | Consumed As Input By |
|---|---|---|---|
| **Business Case** | BUS | Enterprise | PR01 Develop Charter, PR03, PR40 |
| **Benefits Management Plan** | BUS | Enterprise | PR01 Develop Charter, PR03, PR40 |

---

## Section 9 — Primary Deliverables & Transitions (OUT)

Physical deliverable handoffs representing value realization.

| Deliverable State | Type | Originating Process | Transition Gate Process |
|---|---|---|---|
| **Deliverables (Raw)** | OUT | PR28 Direct & Manage | PR37 Control Quality (for verification) |
| **Verified Deliverables** | OUT | PR37 Control Quality | PR32 Validate Scope (for acceptance) |
| **Accepted Deliverables** | OUT | PR32 Validate Scope | PR40 Close Project (for transition) |
| **Final Product/Service Handoff**| OUT | PR40 Close Project | Sponsor / Operations Transition |

---

## Master Artifact Usage Frequency

| Rank | Artifact Name | Process Input Count | Primary Type |
|---|---|---|---|
| 1 | **Enterprise Environmental Factors (EEF)** | 41 | ENV |
| 2 | **Organizational Process Assets (OPA)** | 41 | ENV |
| 3 | **Integrated Project Management Plan (PMP)** | 32 | PL |
| 4 | **Risk Register** | 12 | REG |
| 5 | **Stakeholder Register** | 8 | REG |
| 6 | **Project Charter** | 11 | DOC |
| 7 | **Assumption Log** | 7 | REG |
| 8 | **Scope Baseline** | 7 | BL |
| 9 | **Work Performance Data** | 9 | DATA |
| 10 | **Work Performance Information** | 8 | DATA |

---

## Core Operational Chains

### 1. Scope and WBS Baseline Chain
```
PR01 Charter 
  → PR05 Collect Requirements (creates Requirements Doc & RTM)
    → PR06 Define Scope (creates Scope Statement)
      → PR07 Create WBS (creates WBS Dictionary & Scope Baseline)
        → PR09 Define Activities (Activity List) 
          → PR10 Sequence Activities 
            → PR12 Develop Schedule (creates Schedule Baseline)
```

### 2. Work Performance Data-to-Report Chain
```
PR28 Direct & Manage (produces raw Work Performance Data & Deliverables)
  → PR32-39, PR41 M&C Processes (analyze data to produce Work Performance Info)
    → PR30 Monitor & Control (compiles Info into Work Performance Reports)
      → PR31 Perform ICC (evaluates Reports for Change Requests)
        → PR28 Executing (applies Approved Change Requests to work)
```

### 3. Quality Verification & Customer Acceptance Chain
```
PR28 Direct & Manage (produces raw Deliverables)
  → PR37 Control Quality (checks deliverables to produce Verified Deliverables)
    → PR32 Validate Scope (customer reviews to produce Accepted Deliverables)
      → PR40 Close Project (transitions deliverables to produce Final Transition)
```

---

*Authority: PMBOK8 Guide §2 · Process Groups Practice Guide §4–§12 · PMOSkills Repository*
