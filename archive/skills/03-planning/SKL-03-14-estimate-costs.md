---
skill_id: SKL-03-14
skill_name: Estimate Costs
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A15 — Cost Estimates
artifacts_updated:
- A06 — Project Management Plan (Cost Baseline reference)
pmbok8_process_anchor: Guide §2.4.6.2 Estimate Costs · Guide §2.4 Finance Domain
performance_domains:
- Finance
focus_area: Planning
upstream_prerequisites:
- SKL-03-05 — A11 WBS must be baselined
- SKL-03-13 — Financial Management section of A06 must be baselined
downstream_skills:
- SKL-03-15 — Develop Budget
file_path: skills/03-planning/SKL-03-14-estimate-costs.md
tests: 7
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-14 — Estimate Costs

**Skill ID:** SKL-03-14  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.4.6.2 Estimate Costs · Guide §2.4 Finance Domain  
**File path:** `skills/03-planning/SKL-03-14-estimate-costs.md`

---

## Purpose

Develop a cost estimate for each work package in the WBS (A11) using the methods defined in the Financial Management Plan (A06). The output is A15 (Cost Estimates), which feeds directly into budget development (SKL-03-15).

---

## Scope

This skill produces A15 (Cost Estimates) at the work package level. It does not develop the cost baseline or budget (SKL-03-15). It must be run after A11 (WBS) is baselined.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A11 — WBS + WBS Dictionary | SKL-03-05 | Yes |
| A06 — Financial Management section | SKL-03-13 | Yes |
| A06 — Resource Management section (resource rates) | SKL-03-16 | If available |
| A05 — EEF/OPA (historical cost data, vendor rates) | SKL-01-01 | Yes |

---

## Instructions

### Step 1 — Identify Cost Components per Work Package
1. For each work package in A11, identify all cost components:
   - Labor (hours × rate by resource type)
   - Materials and supplies
   - Equipment and tools
   - Subcontractors and vendors
   - Travel and logistics
   - Other direct costs
2. Record components in A15.

### Step 2 — Apply Estimating Methods
1. Apply the methods defined in A06 Financial Management section:
   - **Bottom-up:** Estimate each cost component for each work package, then roll up.
   - **Parametric:** Apply unit cost rates (e.g., $X per square meter, $Y per function point).
   - **Three-point:** For uncertain work packages: estimate Optimistic (O), Most Likely (M), Pessimistic (P). Calculate expected cost = (O + 4M + P) / 6.
2. Record the method used for each work package in A15.

### Step 3 — Document Estimating Assumptions and Basis of Estimate
1. For each estimate, document:
   - Data sources used (OPA, vendor quotes, parametric rates)
   - Assumptions made (e.g., "assumes resource A available 80% of sprint weeks")
   - Constraints applied (e.g., "vendor rate locked until [date]")
   - Confidence level (High / Medium / Low)
2. Record in A15 as Basis of Estimate.

### Step 4 — Calculate Contingency Reserve Estimate
1. Apply the contingency reserve method from A06 Financial Management section.
2. Record the calculated contingency reserve in A15.

### Step 5 — Baseline A15
1. Review with PM and Finance lead.
2. Record version, date, and approver.
3. Hand off A15 to SKL-03-15 for budget development.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Cost Estimates | A15 | Work package level estimates with basis of estimate |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | All WBS work packages estimated | Every work package in A11 has a cost estimate in A15 | Any work package without estimate |
| T-2 | All cost components identified | Labor, materials, equipment, subcontractors, travel listed per work package | Any component type not considered |
| T-3 | Estimating methods documented | Method used for each estimate recorded | Methods absent |
| T-4 | Basis of Estimate documented | Data sources, assumptions, constraints, confidence level recorded per estimate | Basis of Estimate absent |
| T-5 | Three-point applied to uncertain items | Work packages with Low confidence have three-point estimates | Any low-confidence estimate using single-point only |
| T-6 | Contingency reserve calculated | Reserve amount and calculation method recorded | Reserve absent from A15 |
| T-7 | A15 baselined | Version, date, approver recorded | A15 unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.4.6.2 Estimate Costs*  
*Source type: PMI-derived*
