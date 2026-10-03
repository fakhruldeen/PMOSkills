---
doc_id: DOC-PM-HANDBOOK
doc_name: PMOSkills Project Delivery standard operating Handbook
version: "1.0.0"
status: Active
authority: PMBOK8 Section 3 & 4 (Primary)
file_path: "docs/human-practitioners/pm-handbook.md"
---

# 📘 PMOSkills Project Delivery SOP Handbook

This handbook serves as the authoritative operational manual for human Project Managers, PMO Directors, and delivery leads executing projects within the **PMOSkills Reference Architecture**. Mapped directly to the **PMI PMBOK® Guide – Eighth Edition**, it details the concrete workflows, gates, and baselines required to deliver value under different project lifecycles.

---

## 1. Core Principles of Triple Constraint Control

Regardless of lifecycle, the project manager is accountable for establishing, tracking, and locking the project's Triple Constraints. In the PMOSkills framework, this is achieved via the **Baseline Locking Protocol (BLP)**:

### 1.1 Scope Baseline Lock
*   **Trigger:** Successful completion of skill `SKL-03-03` (Define Scope & WBS).
*   **Required Outputs:** Work Breakdown Structure (`A09`), WBS Dictionary (`A10`), and Requirements Traceability Matrix (`A13`).
*   **Locking Gate:** PMO Director and Sponsor sign-off on the Scope Statement. The status in the YAML front-matter of `A09` is updated to `Locked`.

### 1.2 Schedule Baseline Lock
*   **Trigger:** Execution of schedule modeling (`SKL-03-05`).
*   **Required Outputs:** Schedule Model and Baseline Record (`A15`) showing the critical path, task network diagrams, and baseline start/finish dates.
*   **Locking Gate:** Formal integration into the master IPM plan.

### 1.3 Cost Baseline Lock
*   **Trigger:** Execution of cost estimation and budget determination (`SKL-03-08`).
*   **Required Outputs:** Financial Management and Cost Baseline Record (`A16`) with time-phased S-curve projections.
*   **Locking Gate:** Finance Controller approval.

---

## 2. The Predictive (Waterfall) Lifecycle Workflow

When project scope is stable, well-understood, and predictability is paramount, follow this linear delivery loop:

```
  ┌─────────────────┐      ┌──────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌───────────────┐
  │ 1. Setup Gov    ├─────►│ 2. Initiating├─────►│ 3. Baseline Plan├─────►│ 4. Exec & Ctrl  ├─────►│ 5. Formal Close│
  └─────────────────┘      └──────────────┘      └─────────────────┘      └─────────────────┘      └───────────────┘
```

### 2.1 Step 1: Establish Governance
*   **Skill to Execute:** `SKL-01-01` (Establish PM Governance Framework).
*   **Primary Artifact:** Context and Governance Register (`A05`).
*   **Activity:** Map T1-T4 decision authorities and establish the project change control board (CCB).

### 2.2 Step 2: Initiating
*   **Skills to Execute:** `SKL-02-01` (Develop Project Charter), `SKL-02-02` (Identify and Map Stakeholders).
*   **Primary Artifacts:** Business Case (`A01`), Stakeholder Register (`A02`), and Project Charter (`A04`).
*   **Activity:** Obtain formal charter approval from the sponsor. Register stakeholders and map their influence levels.

### 2.3 Step 3: Planning and Baselining
*   **Skills to Execute:** Full Pack 03 (Planning) skills.
*   **Primary Artifact:** Integrated Project Management Plan (`A14`).
*   **Activity:** Complete subsidiary plans, establish triple constraints, and lock baselines.

### 2.4 Step 4: Executing and Controlling
*   **Skills to Execute:** Pack 04 and Pack 05 skills.
*   **Primary Artifacts:** Issue and Impediment Log (`A18`), Risk Management Record (`A19`), Change Request (`A20`).
*   **Activity:** Direct work, monitor variances, implement risk responses, and process baseline changes through the formal change control procedure (`SKL-05-02`).

### 2.5 Step 5: Closure and Transition
*   **Skills to Execute:** Pack 06 skills.
*   **Primary Artifacts:** Post-Project Review (`A21`), Closure and Transition Record (`A24`).
*   **Activity:** Obtain customer acceptance, transfer benefits, archive assets to `Archive/`, and log lessons learned.

---

## 3. The Adaptive (Agile) Lifecycle Workflow

When requirements are volatile and value must be delivered iteratively:

```
  ┌─────────────────┐      ┌──────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌───────────────┐
  │ 1. Vision Setup ├─────►│ 2. Story Map ├─────►│ 3. Iterative Run├─────►│ 4. Waste Audit  ├─────►│ 5. Increment  │
  └─────────────────┘      └──────────────┘      └─────────────────┘      └─────────────────┘      └───────────────┘
```

### 3.1 Step 1: Vision and Backlog Scoping
*   **Skill to Execute:** `SKL-07-01` (Initialize Adaptive Environment).
*   **Primary Artifact:** Agile Product Backlog and Vision Record (`A28`).
*   **Activity:** Establish product vision, define user persona cards, and catalog initial epics.

### 3.2 Step 2: Release and Story Mapping
*   **Skill to Execute:** `SKL-07-02` (Facilitate Story Mapping).
*   **Primary Artifact:** Portfolio Interdependency Record (`A22`).
*   **Activity:** Group user stories horizontally by release and vertically by priority. Map technical dependencies.

### 3.3 Step 3: Sprint Execution Loop
*   **Skill to Execute:** `SKL-07-03` (Manage Sprint Execution).
*   **Primary Artifact:** Sprint Backlog and Burndown Record (`A30`).
*   **Activity:** Execute sprint planning, facilitate daily standups, and monitor sprint burndown charts.

### 3.4 Step 4: Programmatic Waste Audits
*   **Skill to Execute:** Continuous waste auditing using the shared waste test suite.
*   **Primary Checker:** `shared/validators/waste-test.md`.
*   **Activity:** Scan sprint deliverables for TIMWOODS waste (Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills Underutilized).

---

## 4. The Hybrid Lifecycle Strategy

In hybrid environments (e.g., hardware/software integration), PMs must blend both models:
1.  **Macro-Level Control:** Use a Predictive shell for Budget and Procurement (`A16` and `A17`) to manage financial and vendor contracts.
2.  **Micro-Level Delivery:** Use Agile Sprints for software components, mapping story points to milestone completion dates in the master S-Curve model (`A15`).
3.  **Coordination:** Ensure sprint reviews align with monthly steering committee gate gates (`SKL-05-04`).

---

*Authority: PMBOK 8 Core Standard · PMI Companion References Secondary · PMO Shared Governance Board*
