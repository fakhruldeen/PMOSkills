---
skill_id: SKL-03-13
skill_name: Plan Financial Management
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan (Financial Management section)
artifacts_updated:
- A06 — Project Management Plan
pmbok8_process_anchor: Guide §2.4.6.1 Plan Financial Management · Guide §2.4 Finance
  Domain
performance_domains:
- Finance
focus_area: Planning
upstream_prerequisites:
- SKL-02-01 — A04 Project Charter must be baselined
- SKL-01-01 — A05 Governance section must be baselined
downstream_skills:
- SKL-03-14 — Estimate Costs
- SKL-03-15 — Develop Budget
- SKL-05-05 — Control Costs
file_path: skills/03-planning/SKL-03-13-plan-financial-management.md
tests: 7
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-13 — Plan Financial Management

**Skill ID:** SKL-03-13  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.4.6.1 Plan Financial Management · Guide §2.4 Finance Domain  
**File path:** `skills/03-planning/SKL-03-13-plan-financial-management.md`

---

## Purpose

Define how project finances will be planned, tracked, controlled, and reported. The output is the Financial Management section of A06, which governs cost estimation (SKL-03-14), budget development (SKL-03-15), and cost control (SKL-05-05) throughout the project lifecycle.

---

## Scope

This skill produces the Financial Management Plan section of A06. It does not estimate costs (SKL-03-14) or develop the budget (SKL-03-15) — it defines the rules those skills must follow.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter (budget ceiling) | SKL-02-01 | Yes |
| A05 — Context Register (EEF: financial systems, OPA: cost data) | SKL-01-01 | Yes |
| A05 — Governance section (authority thresholds) | SKL-01-01 | Yes |

---

## Instructions

### Step 1 — Define Cost Estimating Approach
1. Select the cost estimating methods to be used:
   - Analogous estimating (top-down, based on similar past projects)
   - Parametric estimating (unit cost × quantity)
   - Bottom-up estimating (work package level)
   - Three-point estimating (Optimistic, Most Likely, Pessimistic)
2. Define when each method is appropriate (e.g., analogous at project start; bottom-up at WBS completion).
3. Define the level of accuracy expected at each project phase (e.g., ±50% at initiation; ±10% at planning baseline).
4. Record in A06.

### Step 2 — Define Budget Structure
1. Define cost categories (labor, materials, equipment, travel, contingency, management reserve).
2. Define the cost tracking unit (hours, currency, both).
3. Define the budget baseline structure:
   - Work package cost estimates (from SKL-03-14)
   - Contingency reserve
   - Cost baseline = direct costs + contingency reserve
   - Management reserve (separate from cost baseline)
   - Project budget = cost baseline + management reserve
4. Record in A06.

### Step 3 — Define Cost Control Rules
1. Define the earned value metrics to be used (if any): PV, EV, AC, SV, CV, SPI, CPI.
2. Define cost variance thresholds:
   - Acceptable: CPI ≥ 0.95
   - Amber: CPI 0.85–0.94 (recovery plan required)
   - Red: CPI < 0.85 (sponsor notification + re-baseline required)
3. Define contingency reserve draw rules:
   - PM authority: up to [threshold] per draw
   - Sponsor authority: above PM threshold
4. Define the reporting period for cost tracking.
5. Record in A06.

### Step 4 — Define Financial Change Control
1. Define what constitutes a cost baseline change requiring A12 entry.
2. Define approval authority per A05 governance tiers.
3. Record in A06.

### Step 5 — Baseline Financial Management Section
1. Review with Sponsor and PMO.
2. Record version, date, and approval in A06.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Financial Management Plan | A06 | Financial Management section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Estimating methods defined | At least two methods documented with applicability rules | Methods absent |
| T-2 | Accuracy targets defined | Phase-by-phase accuracy range documented | Accuracy targets absent |
| T-3 | Budget structure defined | All five budget components (work packages, contingency, cost baseline, management reserve, project budget) defined | Any component missing |
| T-4 | Cost control metrics defined | EV metrics or equivalent variance thresholds documented | Metrics absent |
| T-5 | Variance thresholds defined | CPI thresholds for Green/Amber/Red with response actions | Thresholds absent |
| T-6 | Financial change control defined | A12 trigger and authority level documented | Change control absent |
| T-7 | Section in A06 signed off | Version, date, approver recorded | Section unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.4.6.1 Plan Financial Management*  
*Source type: PMI-derived*
