---
skill_id: SKL-03-02
skill_name: Plan Scope Management
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan (Scope Management section)
artifacts_updated:
- A06 — Project Management Plan (Scope Management Plan section)
pmbok8_process_anchor: Guide §2.2.6.1 Plan Scope Management · Guide §2.2 Scope Domain
performance_domains:
- Scope
focus_area: Planning
upstream_prerequisites:
- SKL-02-01 — A04 Project Charter must be baselined
downstream_skills:
- SKL-03-03 — Elicit and Analyze Requirements
- SKL-03-04 — Define Scope
- SKL-03-05 — Develop Scope Structure
file_path: skills/03-planning/SKL-03-02-plan-scope-management.md
tests: 7
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-02 — Plan Scope Management

**Skill ID:** SKL-03-02  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.2.6.1 Plan Scope Management · Guide §2.2 Scope Domain  
**File path:** `skills/03-planning/SKL-03-02-plan-scope-management.md`

---

## Purpose

Define how project scope will be defined, validated, and controlled throughout the project lifecycle. The output is the Scope Management section of A06 (Project Management Plan), which governs all subsequent scope-related activities.

---

## Scope

This skill produces the Scope Management Plan section of A06 only. It does not create the scope baseline (SKL-03-04) or the WBS (SKL-03-05). It provides the governance rules that those skills must follow.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter (baselined) | SKL-02-01 | Yes |
| A05 — Context Register (EEF/OPA) | SKL-01-01 | Yes |
| A07 — Stakeholder Register | SKL-02-02 | Yes |

---

## Instructions

### Step 1 — Define Scope Statement Process
1. Define who creates the scope statement (PM, Business Analyst, or joint).
2. Define who approves the scope statement (Sponsor, governance body).
3. Define the scope statement format (narrative, tabular, or both).
4. Record in A06 Scope Management section.

### Step 2 — Define Requirements Collection Process
1. Define the methods used to collect requirements (interviews, workshops, surveys, document analysis).
2. Define the level of detail required for requirements (functional, non-functional, constraints).
3. Define who approves requirements (business owner, sponsor).
4. Record in A06 Scope Management section.

### Step 3 — Define WBS Creation Rules
1. Define the WBS decomposition approach (deliverable-based or phase-based).
2. Define the WBS dictionary requirements (what each work package entry must contain).
3. Define the WBS approval authority.
4. Record in A06 Scope Management section.

### Step 4 — Define Scope Validation Process
1. Define how completed deliverables will be formally accepted (walkthrough, testing, sign-off).
2. Define who can formally accept deliverables (customer, sponsor, business owner).
3. Define what happens to rejected deliverables (rework, escalation).
4. Record in A06 Scope Management section.

### Step 5 — Define Scope Change Control
1. Define what constitutes a scope change (any addition, removal, or modification to agreed scope).
2. Define the change request process (A12 Change and Exception Decision Log).
3. Define the change approval authority per A05 governance tiers.
4. Record in A06 Scope Management section.

### Step 6 — Baseline Scope Management Section
1. Review with sponsor or PMO lead.
2. Record version, date, and approval.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Scope Management Plan | A06 | Scope Management section |

---

## Constraints

- This skill must complete before SKL-03-03, SKL-03-04, and SKL-03-05 run.
- All scope-related decisions must follow the rules defined here.

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Scope statement process defined | Author, approver, and format documented | Any field blank |
| T-2 | Requirements collection methods defined | At least two methods documented | Section blank |
| T-3 | WBS rules defined | Decomposition approach and dictionary requirements documented | WBS rules absent |
| T-4 | Scope validation process defined | Acceptance criteria and approver documented | Validation process absent |
| T-5 | Scope change control defined | A12 process and approval authority referenced | Change control absent |
| T-6 | Scope Management section in A06 | Section present and populated | Section missing from A06 |
| T-7 | Sponsor/PMO sign-off | Sign-off recorded in A06 | Section unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.2.6.1 Plan Scope Management*  
*Source type: PMI-derived*
