---
skill_id: SKL-03-05
skill_name: Develop Scope Structure (WBS)
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A11 — Work Breakdown Structure
artifacts_updated:
- A06 — Project Management Plan (Scope Baseline section)
- A09 — Requirements Traceability Matrix (WBS linkage)
pmbok8_process_anchor: Guide §2.2.6.4 Create WBS · Guide §2.2 Scope Domain
performance_domains:
- Scope
focus_area: Planning
upstream_prerequisites:
- SKL-03-04 — A10 Scope Statement must be baselined
downstream_skills:
- SKL-03-06 — Plan Schedule Management
- SKL-03-14 — Estimate Costs
- SKL-03-17 — Estimate Resources
file_path: skills/03-planning/SKL-03-05-develop-scope-structure.md
tests: 7
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-05 — Develop Scope Structure (WBS)

**Skill ID:** SKL-03-05  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.2.6.4 Create WBS · Guide §2.2 Scope Domain  
**File path:** `skills/03-planning/SKL-03-05-develop-scope-structure.md`

---

## Purpose

Decompose the project scope into a hierarchical Work Breakdown Structure (A11 — WBS) with a WBS Dictionary that defines each work package in sufficient detail for scheduling, costing, and resource assignment. A11 is the scope decomposition baseline that all downstream planning tools depend on.

---

## Scope

This skill produces A11 (WBS + WBS Dictionary) only. It feeds SKL-03-06 (schedule), SKL-03-14 (cost estimates), and SKL-03-17 (resource estimates). It does not create those downstream plans.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A10 — Project Scope Statement | SKL-03-04 | Yes |
| A08 — Requirements Documentation | SKL-03-03 | Yes |
| A09 — Requirements Traceability Matrix | SKL-03-03 | Yes |
| A06 — Scope Management section | SKL-03-02 | Yes |

---

## Instructions

### Step 1 — Choose Decomposition Approach
1. Confirm decomposition approach per A06 Scope Management Plan (deliverable-based or phase-based).
2. For most projects: use deliverable-based decomposition.
3. For lifecycle-phased projects: use phase as the top level, then deliverables within each phase.

### Step 2 — Build the WBS Hierarchy
1. Level 1: Project name (single node).
2. Level 2: Major deliverables or project phases (from A10).
3. Level 3 and below: Sub-deliverables and work packages.
4. Rule: Decompose until each work package meets the 8/80 rule (no less than 8 hours, no more than 80 hours of effort).
5. Assign a unique WBS code to every node (e.g., 1.0, 1.1, 1.1.1).

### Step 3 — Create the WBS Dictionary
1. For each work package (lowest-level WBS node), create a dictionary entry with:
   - WBS ID and name
   - Description of work
   - Acceptance criteria (from A10)
   - Responsible party (role)
   - Estimated effort (hours) — preliminary; refined in SKL-03-14 and SKL-03-17
   - Dependencies (predecessor and successor WBS elements)
   - Required resources (type and quantity)
   - Quality requirements
2. Record all dictionary entries in A11.

### Step 4 — Link Requirements to WBS (Update A09)
1. For every work package in A11, identify the source requirement(s) from A08/A09.
2. Update A09 with the WBS element reference for each requirement.
3. Confirm 100% requirements coverage — every approved requirement must link to at least one WBS element.

### Step 5 — Baseline A11
1. Review with PM, scope lead, and sponsor.
2. Record version, date, and approver.
3. Update A06 Scope Baseline section to reference A11.
4. Update A09 with WBS linkages.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Work Breakdown Structure + Dictionary | A11 | Full hierarchical decomposition with dictionary entries |
| Scope Baseline update | A06 | A06 Scope Baseline references A10 + A11 |
| RTM update | A09 | WBS element column populated |

---

## Constraints

- 100% rule: the WBS must include ALL project work — nothing done on the project should be outside the WBS.
- Work packages must not overlap.
- Every work package must have an owner (responsible party).

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | All A10 deliverables in WBS | Every deliverable from A10 has a WBS branch | Any A10 deliverable missing from WBS |
| T-2 | 8/80 rule applied | All work packages are 8–80 hours | Any work package outside range without justification |
| T-3 | WBS codes assigned | Every node has a unique WBS code | Any node without a code |
| T-4 | WBS Dictionary complete | Every work package has a dictionary entry with all required fields | Any work package with incomplete dictionary entry |
| T-5 | 100% requirements coverage | Every approved A09 requirement links to at least one WBS element | Any requirement without WBS linkage |
| T-6 | A11 baselined | Version, date, approver recorded | A11 unsigned |
| T-7 | A06 and A09 updated | A06 Scope Baseline references A11; A09 WBS column populated | Either artifact not updated |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.2.6.4 Create WBS*  
*Source type: PMI-derived*
