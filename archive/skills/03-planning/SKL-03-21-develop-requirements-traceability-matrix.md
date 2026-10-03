---
skill_id: SKL-03-21
skill_name: Develop Requirements Traceability Matrix
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A08 — Scope and Requirements Decision Record (RTM section)
artifacts_updated:
- A14 — Integrated Project Management Plan
pmbok8_process_anchor: Guide §2.2.2.2 Elicit and Analyze Requirements · Guide §2.2
  Scope Domain
performance_domains:
- Scope
focus_area: Planning
upstream_prerequisites:
- SKL-03-03 — Elicit and Analyze Requirements
- SKL-03-04 — Define Scope
downstream_skills:
- SKL-05-03 — Control Scope
- SKL-05-09 — Quality Control
file_path: skills/03-planning/SKL-03-21-develop-requirements-traceability-matrix.md
tests: 9
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-21 — Develop Requirements Traceability Matrix

**Skill ID:** SKL-03-21  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.2.2.2 Elicit and Analyze Requirements · Guide §2.2 Scope Domain  
**File path:** `skills/03-planning/SKL-03-21-develop-requirements-traceability-matrix.md`

---

## Purpose

Link product requirements from their origin (e.g., stakeholder request, business case) to the corresponding deliverables, WBS work packages, design elements, and test cases to ensure that all requirements are fully realized, tested, and validated. The output is the Requirements Traceability Matrix (RTM) section of A08.

---

## Scope

This skill designs and populates the RTM (Requirements Traceability Matrix) structure. It does not perform the initial elicitation of requirements (SKL-03-03) or the WBS creation (SKL-03-05). It runs during planning and is updated during execution as changes occur (SKL-05-02) and testing completes (SKL-05-09).

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A08 — Scope and Requirements (Elicited list) | SKL-03-03 | Yes |
| WBS / WBS Dictionary | SKL-03-05 | Yes |
| Quality Control / Test Cases | SKL-03-19 | Yes |
| Stakeholder Register (A07) | SKL-02-02 | Yes |

---

## Instructions

### Step 1 — Define the RTM Schema and Columns
1. Define the columns of the RTM to track key attributes of each requirement.
2. Required columns must include:
   - **Requirement ID:** Unique identifier (e.g., REQ-01).
   - **Requirement Description:** Brief text explaining the requirement.
   - **Source:** Stakeholder or document requesting the requirement (e.g., Sponsor, Business Case).
   - **WBS Work Package:** The WBS code where the requirement is implemented (e.g., WBS-1.2.1).
   - **Design/Build Owner:** The team lead or role responsible for implementing it.
   - **Test Case ID:** Reference to the validation/testing case (e.g., TC-04).
   - **Status:** Current state of implementation (e.g., Planned, In Progress, Verified, Completed).
3. Record the matrix schema in the RTM section of A08.

### Step 2 — Map Requirements to Business Needs and Sources
1. For each elicited requirement in A08, trace it back to the business case goal or strategic objective it supports.
2. Identify the specific stakeholder who requested the requirement.
3. Record need, objective, and stakeholder source in the RTM.

### Step 3 — Map Requirements to WBS Work Packages
1. Review the WBS (A08/A11).
2. For each requirement, identify the specific WBS work package(s) where the work to implement this requirement is scheduled.
3. Record WBS codes in the RTM.

### Step 4 — Map Requirements to Test Cases
1. Review the testing and validation plan (from SKL-03-19/Quality).
2. For each requirement, map it to one or more test cases, user stories, or acceptance tests that will prove the requirement has been successfully delivered.
3. Record test case IDs in the RTM.

### Step 5 — Assign Ownership and Define Status Tracking
1. Assign a clear owner (role or person) for the design and implementation of each requirement.
2. Set the initial status of all requirements to "Planned".
3. Record owner and status in the RTM.

### Step 6 — Review and Baseline the RTM
1. Review the RTM with the Sponsor, Business Analyst, QA Lead, and technical leads to confirm completeness.
2. Ensure there are no "orphaned" requirements (requirements without a WBS package or test case) and no "gold plating" (work packages without a tracing requirement source).
3. Baseline the RTM in A08.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Requirements Traceability Matrix | A08 | Requirements Traceability Matrix (RTM) section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | RTM Columns Defined | Required tracking columns (ID, description, source, WBS, test case, status) present | Columns missing |
| T-2 | Source Tracing | Every requirement traces back to a business objective/stakeholder source | Requirement lacks a source |
| T-3 | WBS Tracing | Every requirement traces to a specific WBS work package | Requirement lacks WBS code |
| T-4 | Test Tracing | Every requirement traces to at least one test case | Requirement lacks test case ID |
| T-5 | Ownership Assigned | Every requirement has an assigned owner | Requirement has no owner |
| T-6 | Status Populated | All requirements have a valid status from vocabulary | Status field blank |
| T-7 | No Gold Plating | No WBS work packages exist that do not trace to a requirement source | Orphan work packages found |
| T-8 | Integration verified | RTM incorporated into A08 | RTM missing |
| T-9 | Baseline lock | Sponsor/QA Lead signature and baseline timestamp recorded | Baseline unapproved |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 business analysis and scope traceability |

---

*Authority: PMBOK8 Guide §2.2.2.2 · Requirements Management Practice Guide*  
*Source type: PMI-derived*
