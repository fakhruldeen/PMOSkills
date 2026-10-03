---
skill_id: SKL-03-15
skill_name: Develop Budget
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A16 — Cost Baseline
artifacts_updated:
- A06 — Project Management Plan (Cost Baseline section)
pmbok8_process_anchor: Guide §2.4.6.3 Determine Budget · Guide §2.4 Finance Domain
performance_domains:
- Finance
focus_area: Planning
upstream_prerequisites:
- SKL-03-14 — A15 Cost Estimates must be baselined
downstream_skills:
- SKL-03-01 — Integrate and Align Project Plans
- SKL-05-05 — Control Costs
file_path: skills/03-planning/SKL-03-15-develop-budget.md
tests: 7
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-15 — Develop Budget

**Skill ID:** SKL-03-15  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.4.6.3 Determine Budget · Guide §2.4 Finance Domain  
**File path:** `skills/03-planning/SKL-03-15-develop-budget.md`

---

## Purpose

Aggregate cost estimates from A15 into a time-phased cost baseline (A16) that serves as the authorized project budget. A16 is the S-curve or time-phased spending plan against which actual costs are measured during execution.

---

## Scope

This skill produces A16 (Cost Baseline) by aggregating A15 estimates and applying time-phasing. It does not re-estimate costs (SKL-03-14) or control costs during execution (SKL-05-05).

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A15 — Cost Estimates | SKL-03-14 | Yes |
| A11 — WBS | SKL-03-05 | Yes |
| A06 — Schedule Management section (time-phasing) | SKL-03-06 | Yes |
| A06 — Financial Management section (reserve policy) | SKL-03-13 | Yes |

---

## Instructions

### Step 1 — Aggregate Work Package Costs
1. Sum all work package cost estimates from A15 by WBS level:
   - Level 3 work package totals
   - Level 2 deliverable totals
   - Level 1 project total
2. Record in A16.

### Step 2 — Apply Time-Phasing
1. Link each work package cost to its scheduled dates from the project schedule.
2. Distribute costs across the time periods when the work will be performed.
3. Create the time-phased spending plan (monthly or reporting-period-based).
4. Generate the cumulative cost curve (S-curve).
5. Record in A16.

### Step 3 — Add Contingency Reserve
1. Add the contingency reserve from A15 to the cost baseline:
   - Cost Baseline = sum of all work package estimates + contingency reserve
2. Confirm the contingency reserve is visible as a separate line item.
3. Record in A16.

### Step 4 — Confirm Against Charter Budget Ceiling
1. Compare the cost baseline against the budget ceiling in A04.
2. If the cost baseline exceeds the A04 ceiling:
   - Identify reduction options (scope reduction, resource changes, risk response deferrals)
   - Escalate to Sponsor if the gap cannot be closed within PM authority
3. Document the reconciliation in A16.

### Step 5 — Define Management Reserve (Outside Cost Baseline)
1. Calculate management reserve per A06 Financial Management section (typically 5–10% of cost baseline).
2. Record management reserve as a separate amount outside the cost baseline.
3. Note: Project Budget = Cost Baseline + Management Reserve.
4. Record in A16.

### Step 6 — Baseline A16 and Update A06
1. Obtain sponsor and PMO sign-off on A16.
2. Record version, baseline date, and approver.
3. Update A06 Cost Baseline section to reference A16.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Cost Baseline | A16 | Time-phased; includes contingency reserve; S-curve |
| A06 update | A06 | Cost Baseline section references A16 |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | All WBS costs aggregated | Every work package cost from A15 included in A16 | Any work package missing |
| T-2 | Time-phasing applied | Costs distributed across reporting periods matching schedule | Lump-sum only; no time-phasing |
| T-3 | S-curve generated | Cumulative cost curve present in A16 | S-curve absent |
| T-4 | Contingency reserve visible | Reserve line item present and amount documented | Reserve absent or not visible |
| T-5 | Charter budget ceiling reconciled | A16 cost baseline vs A04 ceiling documented and resolved | Reconciliation absent |
| T-6 | Management reserve defined | Amount and draw conditions documented outside cost baseline | Management reserve absent |
| T-7 | A16 baselined and A06 updated | Version, date, approver in A16; A06 Cost Baseline references A16 | Either unsigned or not updated |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.4.6.3 Determine Budget*  
*Source type: PMI-derived*
