---
skill_id: SKL-03-03
skill_name: Elicit and Analyze Requirements
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A08 — Requirements Documentation
artifacts_updated:
- A09 — Requirements Traceability Matrix
pmbok8_process_anchor: Guide §2.2.6.2 Collect Requirements · Guide §2.2 Scope Domain
performance_domains:
- Scope
focus_area: Planning
upstream_prerequisites:
- SKL-03-02 — Scope Management section of A06 must be complete
downstream_skills:
- SKL-03-04 — Define Scope
- SKL-03-05 — Develop Scope Structure
file_path: skills/03-planning/SKL-03-03-elicit-analyze-requirements.md
tests: 8
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-03 — Elicit and Analyze Requirements

**Skill ID:** SKL-03-03  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.2.6.2 Collect Requirements · Guide §2.2 Scope Domain  
**File path:** `skills/03-planning/SKL-03-03-elicit-analyze-requirements.md`

---

## Purpose

Elicit, analyze, and document all stakeholder and project requirements needed to meet the project objectives. The output is A08 (Requirements Documentation) and A09 (Requirements Traceability Matrix), which provide the foundation for the scope baseline and all downstream planning activities.

---

## Scope

This skill covers requirements elicitation and documentation only. It does not define the scope statement (SKL-03-04) or create the WBS (SKL-03-05), but it feeds directly into both.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A06 — Scope Management Plan section | SKL-03-02 | Yes |
| A07 — Stakeholder Register | SKL-02-02 | Yes |

---

## Instructions

### Step 1 — Plan Elicitation Sessions
1. Identify the primary stakeholders for requirements elicitation (Tier 1 and 2 from A07).
2. Select elicitation methods per A06 Scope Management Plan:
   - Interviews (one-on-one structured or semi-structured)
   - Facilitated workshops (JAD, focus groups)
   - Surveys and questionnaires
   - Observation / job shadowing
   - Document analysis (existing systems, policies, regulations)
   - Prototyping (for unclear or emerging requirements)
3. Schedule elicitation sessions.

### Step 2 — Conduct Elicitation
1. Execute planned elicitation sessions.
2. Capture all raw requirements inputs — do not filter during elicitation.
3. Record sources (who provided each requirement).
4. Document assumptions made during elicitation.

### Step 3 — Analyze and Classify Requirements
1. Review raw inputs and classify each requirement:
   - **Business requirement:** Why the project is being undertaken
   - **Stakeholder requirement:** What a stakeholder needs
   - **Solution requirement:** Functional (what the solution must do) or Non-functional (how well it must do it)
   - **Transition requirement:** What is needed to move from current to future state
   - **Constraint:** A limiting condition the solution must operate within
2. Check each requirement for:
   - **Completeness:** Is enough detail present to build or test against it?
   - **Unambiguity:** Is there only one valid interpretation?
   - **Consistency:** Does it conflict with any other requirement?
   - **Testability:** Can it be verified or validated?
3. Flag incomplete, ambiguous, conflicting, or untestable requirements for resolution.

### Step 4 — Resolve Requirement Issues
1. For each flagged requirement, conduct follow-up with the source stakeholder.
2. Revise the requirement until it meets all four quality criteria.
3. Re-classify after revision if needed.

### Step 5 — Build Requirements Traceability Matrix (A09)
1. For each approved requirement, create an A09 entry with:
   - Requirement ID
   - Requirement description
   - Source stakeholder
   - Priority (High / Medium / Low)
   - Status (Proposed / Approved / Deferred / Rejected)
   - Linked WBS element (populated in SKL-03-05)
   - Acceptance criterion
2. Record all requirements in A09.

### Step 6 — Baseline A08 and A09
1. Obtain approval from business owner and sponsor.
2. Record version, baseline date, and approver.
3. Distribute to scope and planning team.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Requirements Documentation | A08 | All classified and approved requirements |
| Requirements Traceability Matrix | A09 | Linked to stakeholders, WBS, and acceptance criteria |

---

## Constraints

- Every requirement must be approved by a named stakeholder before being baselined.
- Requirements marked "Deferred" must be recorded in A12 for future phase consideration.
- A09 must be updated whenever WBS elements are assigned (in SKL-03-05).

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Elicitation methods documented | Methods used recorded in A08 | Methods section blank |
| T-2 | All Tier 1 and 2 stakeholders consulted | Every Tier 1 and 2 stakeholder in A07 has at least one elicitation session recorded | Any Tier 1 stakeholder not consulted |
| T-3 | Requirements classified | Every requirement has a classification type | Any requirement unclassified |
| T-4 | Quality check completed | Every requirement checked for completeness, unambiguity, consistency, testability | Any requirement with unresolved quality flag |
| T-5 | A09 populated | Every approved requirement has an A09 entry with all fields | Any requirement without A09 entry |
| T-6 | Acceptance criteria defined | Every approved requirement has at least one acceptance criterion | Any requirement without acceptance criterion |
| T-7 | A08 baselined | Version, date, approver recorded | A08 unsigned |
| T-8 | A09 baselined | Version, date, approver recorded | A09 unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.2.6.2 Collect Requirements*  
*Source type: PMI-derived*
