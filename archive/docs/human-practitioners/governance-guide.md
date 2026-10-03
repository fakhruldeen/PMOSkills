---
doc_id: DOC-GOV-GUIDE
doc_name: PMOSkills PMO Governance and RACI Handbook
version: "1.0.0"
status: Active
authority: PMBOK8 Section 1 & 2 (Primary) · PMI OPM Standard (Secondary)
file_path: "docs/human-practitioners/governance-guide.md"
---

# ⚖️ PMOSkills PMO Governance & RACI Handbook

This handbook provides the official governance framework, Organizational Project Management (OPM) alignment rules, master RACI definitions, and T1-T4 threshold routing workflows governing the PMOSkills repository environment.

---

## 1. Organizational Project Management (OPM) & Strategy

OPM bridges organizational strategy with execution by ensuring that all projects, programs, and portfolios are aligned with business objectives. In the PMOSkills environment:

```
  ┌──────────────────────────────────────────────────────────────────┐
  │                 Corporate Strategy & Objectives                  │
  └────────────────────────────────┬─────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────┐
  │         Portfolio Board (Value Maximization & Selection)         │
  └────────────────────────────────┬─────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────┐
  │          Program Board (Benefits Realization & Governance)        │
  └────────────────────────────────┬─────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────┐
  │          Project Layer (Deliverables & Executable Skills)        │
  └──────────────────────────────────────────────────────────────────┘
```

*   **Portfolio Management Layer:** Selects the correct mix of projects using strategic prioritization criteria documented in `A22` (Portfolio Interdependency Record).
*   **Program Management Layer:** Coordinates related projects to capture synergy benefits that could not be achieved independently.
*   **Project Management Layer:** Utilizes the **48 Executable Skills** and **78 Artifacts** to build quality deliverables, reporting metrics back through standard phase-gate templates (`A24` and `A21`).

---

## 2. Master RACI Matrix for PMO Roles

To prevent ambiguity, accountability for executing PMOSkills is mapped across the four primary roles:
*   **Accountable (A):** The person with ultimate decision authority (only one per skill).
*   **Responsible (R):** The person who performs the work to execute the skill.
*   **Consulted (C):** Key subject matter experts whose inputs are gathered.
*   **Informed (I):** Stakeholders updated on progress and outcomes.

| Skill Group (Packs) | Project Sponsor | PMO Director | Project Manager (PM) | Team Lead / BA |
|---|---|---|---|---|
| **Pack 01: Setup Governance** | I | A | R | C |
| **Pack 02: Project Initiating** | A | I | R | C |
| **Pack 03: Subsidiary Planning** | I | C | A / R | C / R |
| **Pack 04: Execution Direction** | I | I | A / R | R |
| **Pack 05: Monitoring & variance** | C | A | R | I |
| **Pack 06: Closure & transitioning** | A | C | R | I |
| **Pack 07: Adaptive Execution** | I | C | C | A / R |

---

## 3. T1-T4 Decision Threshold Routing Schema

When variances occur in cost, schedule, or quality, project managers must route the change requests according to the **Decision Threshold Matrix**:

```
                 ┌──────────────────────────────────────┐
                 │          Project Variance            │
                 └──────────────────┬───────────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
   [T1 Operational]           [T2 Controlled]           [T3/T4 Governance]
     Variance < 5%              5% - 10% Variance          Variance > 10%
   ┌─────────────────┐        ┌─────────────────┐        ┌──────────────────┐
   │ PM Direct Action│        │ formal CCB Form │        │ sponsor/OPM Board│
   │ Log in A18      │        │ Submit A20      │        │ Steering Commit. │
   └─────────────────┘        └─────────────────┘        └──────────────────┘
```

### 3.1 T1 (Operational Path)
*   **Trigger:** Variance < 5% on a single baseline, or minor risk occurrence.
*   **Action:** PM initiates immediate corrective action (`SKL-04-03`) and records it in the Action Log (`A18`). No baseline updates required.

### 3.2 T2 (Controlled Path)
*   **Trigger:** Variance between 5% and 10% on a baseline.
*   **Action:** PM drafts a formal Change Request (`A20`) and submits it to the project CCB (`SKL-05-02`). Baseline is updated only after formal CCB vote and signature.

### 3.3 T3 (Governance Path)
*   **Trigger:** Variance > 10% on schedule or cost, or multiple baseline failure.
*   **Action:** PM escalates directly to the PMO Director and Program sponsor. Requires a steering committee review (`SKL-05-04`) and baseline re-authorization.

### 3.4 T4 (Enterprise Path)
*   **Trigger:** Strategic realignments, regulatory compliance audits, or portfolio-wide impact.
*   **Action:** Escalated to the Portfolio Board or Executive OPM council for strategic intervention.

---

*Authority: PMBOK 8 Section 1 & 2 · PMO Shared Governance Board · OPM Steering Council*
