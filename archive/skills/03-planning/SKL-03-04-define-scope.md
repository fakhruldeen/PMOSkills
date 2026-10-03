---
skill_id: SKL-03-04
skill_name: Define Scope
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A10 — Project Scope Statement
artifacts_updated:
- A06 — Project Management Plan (Scope Baseline section)
pmbok8_process_anchor: Guide §2.2.6.3 Define Scope · Guide §2.2 Scope Domain
performance_domains:
- Scope
focus_area: Planning
upstream_prerequisites:
- SKL-03-03 — A08 Requirements Documentation must be baselined
downstream_skills:
- SKL-03-05 — Develop Scope Structure (WBS)
file_path: skills/03-planning/SKL-03-04-define-scope.md
tests: 7
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-04 — Define Scope

**Skill ID:** SKL-03-04  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.2.6.3 Define Scope · Guide §2.2 Scope Domain  
**File path:** `skills/03-planning/SKL-03-04-define-scope.md`

---

## Purpose

Create the detailed project scope statement (A10) that defines what the project will and will not produce. A10 is the authoritative scope boundary document for the project and the foundation for the WBS.

---

## Scope

This skill produces A10 (Project Scope Statement) only. It does not create the WBS (SKL-03-05) but directly feeds it. It translates approved requirements from A08 into a structured scope statement with explicit inclusions and exclusions.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A08 — Requirements Documentation | SKL-03-03 | Yes |
| A06 — Scope Management Plan section | SKL-03-02 | Yes |

---

## Instructions

### Step 1 — Write the Project Description
1. Describe the project in terms of what it will produce (product/service/result).
2. Include key characteristics and attributes of the final deliverable.
3. Record in A10.

### Step 2 — Define Deliverables
1. List all major deliverables the project must produce.
2. For each deliverable, define:
   - Name and description
   - Acceptance criteria (specific, measurable)
   - Source requirement reference (A08/A09 ID)
3. Record in A10.

### Step 3 — Define Acceptance Criteria
1. Confirm acceptance criteria for each deliverable.
2. Ensure criteria are objective and testable.
3. Confirm who will perform acceptance (from A05 governance RACI).
4. Record in A10.

### Step 4 — Define Explicit Exclusions
1. List what the project will NOT produce (items that stakeholders might assume are in scope).
2. Reference the source requirement if a request was formally deferred or rejected (A09 status: Deferred/Rejected).
3. Record in A10.

### Step 5 — Define Constraints and Assumptions
1. List all project constraints (schedule, budget, resource, regulatory).
2. List all planning assumptions not already in A05.
3. Record in A10 and cross-reference to A05 Assumption Log.

### Step 6 — Baseline A10
1. Obtain sponsor and business owner approval.
2. Record version, date, and approver in A10.
3. Update A06 Scope Baseline section to reference A10.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Project Scope Statement | A10 | Deliverables, exclusions, acceptance criteria, constraints |
| Scope Baseline reference | A06 | Pointer to A10 in A06 Scope Baseline section |

---

## Constraints

- Exclusions must be explicit — "not in scope" sections cannot be blank.
- Every deliverable must have at least one acceptance criterion.
- Post-baseline scope changes require A12 entry and re-approval.

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Project description present | Clear description of final product/service/result in A10 | Description blank |
| T-2 | All major deliverables listed | Every deliverable from A08 is listed in A10 | Any deliverable missing |
| T-3 | Acceptance criteria defined | Every deliverable has at least one measurable acceptance criterion | Any deliverable without criteria |
| T-4 | Exclusions documented | At least one explicit exclusion recorded | Exclusions section blank |
| T-5 | Constraints and assumptions | All known constraints and assumptions recorded | Either section blank |
| T-6 | A10 baselined | Version, date, approver recorded | A10 unsigned |
| T-7 | A06 updated | A06 Scope Baseline section references A10 | A06 not updated |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.2.6.3 Define Scope*  
*Source type: PMI-derived*
