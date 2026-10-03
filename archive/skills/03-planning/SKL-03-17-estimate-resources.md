---
skill_id: SKL-03-17
skill_name: Estimate Resources
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A17 — Resource Estimates
artifacts_updated:
- A06 — Project Management Plan (resource requirements reference)
pmbok8_process_anchor: Guide §2.6.6.2 Estimate Activity Resources · Guide §2.6 Resources
  Domain
performance_domains:
- Resources
focus_area: Planning
upstream_prerequisites:
- SKL-03-16 — Resource Management section of A06 must be baselined
- SKL-03-05 — A11 WBS must be baselined
downstream_skills:
- SKL-03-14 — Estimate Costs (uses resource types and rates)
- SKL-04-03 — Acquire Resources
file_path: skills/03-planning/SKL-03-17-estimate-resources.md
tests: 7
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-17 — Estimate Resources

**Skill ID:** SKL-03-17  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.6.6.2 Estimate Activity Resources · Guide §2.6 Resources Domain  
**File path:** `skills/03-planning/SKL-03-17-estimate-resources.md`

---

## Purpose

Estimate the type and quantity of resources required for each work package and activity in the project. The output is A17 (Resource Estimates), which feeds both cost estimation (SKL-03-14) and resource acquisition (SKL-04-03).

---

## Scope

This skill produces A17 (Resource Estimates) at the work package level. It does not acquire resources (SKL-04-03) or cost them (SKL-03-14) — it quantifies what is needed so those skills can proceed.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A11 — WBS + WBS Dictionary | SKL-03-05 | Yes |
| A06 — Resource Management section | SKL-03-16 | Yes |
| A05 — EEF (resource availability calendar, productivity rates) | SKL-01-01 | Yes |

---

## Instructions

### Step 1 — Identify Resource Requirements per Work Package
1. For each work package in A11, identify:
   - Required human resources by role (not individual name)
   - Required physical resources (equipment, facilities)
   - Required material resources (quantities and specifications)
2. Reference WBS Dictionary for work package descriptions and acceptance criteria.
3. Record requirements in A17.

### Step 2 — Estimate Resource Quantities
1. For each resource type, estimate:
   - **Human resources:** effort in hours, availability percentage, duration implied
   - **Physical resources:** units required and duration needed
   - **Material resources:** quantities consumed
2. Apply the estimating approach from A06 Resource Management section.
3. Document assumptions (e.g., "assumes senior developer at 80% availability").
4. Record in A17.

### Step 3 — Build Resource Histogram (Optional)
1. If resource-constrained scheduling is needed, create a resource histogram:
   - Plot resource demand by time period for each key role
   - Identify peaks that exceed availability
   - Flag resource conflicts for resolution
2. Record in A17.

### Step 4 — Baseline A17
1. Review with PM and functional managers.
2. Record version, date, and approver.
3. Hand off to SKL-03-14 for cost estimation and SKL-04-03 for acquisition.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Resource Estimates | A17 | Type, quantity, and availability requirements per work package |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | All work packages covered | Every WBS work package has a resource estimate entry in A17 | Any work package without estimate |
| T-2 | All resource types addressed | Human, physical, and material types considered for each work package | Any type not considered |
| T-3 | Human resources estimated in hours | Effort in hours and availability percentage recorded per role | Hours or availability absent |
| T-4 | Assumptions documented | Availability and productivity assumptions recorded per estimate | Assumptions absent |
| T-5 | Resource conflicts identified | Any work packages with peak demand exceeding availability are flagged | Conflicts present but not flagged |
| T-6 | A17 baselined | Version, date, approver recorded | A17 unsigned |
| T-7 | A15 and A04-03 can proceed | A17 handed off; resource types and quantities available for cost estimation | Handoff not completed |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.6.6.2 Estimate Activity Resources*  
*Source type: PMI-derived*
