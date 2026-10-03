---
skill_id: SKL-02-01
skill_name: Project Charter Creation
pack: 02 — Initiating
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A04 — Project Charter
artifacts_updated:
- A05 — Context Register (Assumption Log)
pmbok8_process_anchor: Guide §2.1.6.1 Initiate Project or Phase · Guide §2.1 Governance
  Domain · Standard §3.6 Be an Accountable Leader
version: 1.0.0
performance_domains:
- Governance
focus_area: Initiating
upstream_prerequisites:
- SKL-01-01 — A05 Governance section must be baselined
- SKL-01-02 — Document Control Standards must be baselined
- SKL-01-03 — Repository configured
downstream_skills:
- SKL-02-02 — Stakeholder Identification
- SKL-03-01 — Integrate and Align Project Plans
file_path: skills/02-initiating/SKL-02-01-project-charter.md
tests: 10
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-02-01 — Project Charter Creation

**Skill ID:** SKL-02-01  
**Pack:** 02 — Initiating  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1.6.1 Initiate Project or Phase · Guide §2.1 Governance Domain  
**File path:** `skills/02-initiating/SKL-02-01-project-charter.md`

---

## Purpose

Formally authorize the project by creating, reviewing, and obtaining sponsor approval for the Project Charter (A04). The charter establishes the project's existence, defines the PM's authority, confirms strategic alignment, records key constraints and assumptions, and provides the authorization foundation for all subsequent planning and execution.

---

## Scope

This skill covers the creation, review, and baselining of A04 (Project Charter) only. It does not create the full Project Management Plan (SKL-03-01), identify all stakeholders beyond initial identification (SKL-02-02), or develop the scope baseline (SKL-03-04). It runs once per project initiation or phase gate.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| Business case or project mandate | Sponsor / Portfolio / Program | Yes |
| Benefits Management Plan (A02) or equivalent | Portfolio / Program / Sponsor | If available |
| Organizational governance standards | EEF / OPA (A05 Governance section) | Yes |
| PM assignment confirmation | PMO / Sponsor | Yes |
| Preliminary scope description | Sponsor / Business Owner | Yes |
| Preliminary stakeholder map | Sponsor (informal list) | Yes |
| Regulatory or contractual constraints | EEF / Legal | If applicable |
| Relevant historical OPA (similar past projects) | OPA (A05 or organizational records) | If available |

**Gate check:** A05 Governance, Document Control, and Repository Configuration (SKL-01-01 through SKL-01-03) must be complete before this skill runs.

---

## Instructions

### Step 1 — Confirm PM Authority and Assignment
1. Confirm in writing that the PM is formally assigned to this project.
2. Confirm the PM's authority level as defined in A05 governance (Tier 1 authority scope).
3. If the PM's authority has not been explicitly defined, escalate to sponsor to confirm before proceeding.
4. Record PM assignment and authority confirmation in A04.

### Step 2 — Establish Strategic Alignment
1. Review the Business Case or project mandate.
2. Identify which organizational strategic objective(s) this project serves.
3. Identify the sponsoring business unit or program.
4. Confirm that the project is still strategically aligned (if there is a gap between Business Case date and charter creation date, re-validate alignment with sponsor).
5. Record strategic alignment in A04.

### Step 3 — Define the Project Purpose and Objectives
1. Write a clear, one-paragraph project purpose statement (what the project will achieve, for whom, and why now).
2. Define 3–7 SMART project objectives:
   - Each objective must be: Specific, Measurable, Achievable, Relevant, Time-bound
   - Each objective must align to at least one strategic goal
   - Each objective must be testable at project closure
3. Record purpose and objectives in A04.

### Step 4 — Define High-Level Scope and Exclusions
1. Write a preliminary scope statement describing:
   - What the project will produce (key deliverables at a high level)
   - What the project will NOT produce (explicit exclusions)
2. This is NOT the full scope baseline — that comes in SKL-03-04. This is a high-level boundary statement for governance purposes.
3. Record high-level scope and exclusions in A04.

### Step 5 — Identify Key Milestones and Constraints
1. Identify 3–7 key milestones for the project:
   - Phase completion dates
   - Critical external dependency dates (regulatory approvals, seasonal windows)
   - Contractual delivery commitments
2. Identify and record all known constraints:
   - **Schedule constraints:** fixed completion dates, regulatory deadlines
   - **Budget constraints:** approved budget ceiling, contingency reserve status
   - **Resource constraints:** key resource availability, vendor lead times
   - **Scope constraints:** regulatory requirements that define scope boundaries
   - **Quality constraints:** compliance standards, acceptance criteria thresholds
3. Record milestones and constraints in A04.

### Step 6 — Document Assumptions and Initial Risks
1. List all significant planning assumptions:
   - Technology availability
   - Regulatory approval timelines
   - Stakeholder cooperation
   - Resource availability
   - External dependency delivery
2. For each assumption, note what happens if the assumption proves false.
3. List the 3–5 highest-priority initial risks (detail will come in SKL-03-09 and SKL-03-10).
4. Record assumptions in A05 Assumption Log section and summarize in A04.
5. Record initial risks in A04 (full risk management comes in Pack 03).

### Step 7 — Identify Initial Stakeholders
1. List the key stakeholders identified at this stage:
   - Project Sponsor
   - Key business owners / beneficiaries
   - PMO representative
   - Known external stakeholders (regulators, major vendors)
2. This is the seed list for SKL-02-02 (Stakeholder Identification). It does not replace the full stakeholder register.
3. Record initial stakeholders in A04.

### Step 8 — Define Budget Authority and Financial Boundaries
1. Record the approved project budget (or budget ceiling if formal approval is pending).
2. Confirm the PM's budget authority threshold (from A05 governance Tier 1).
3. Confirm the sponsor's budget authority threshold (from A05 governance Tier 2).
4. Record financial boundaries in A04.

### Step 9 — Review, Obtain Sign-off, and Baseline A04
1. Circulate draft A04 to:
   - Project Sponsor (must sign off)
   - PMO lead (if applicable)
   - Key senior stakeholders (Consulted per RACI)
2. Incorporate review feedback.
3. Obtain formal sponsor sign-off.
4. Record version, baseline date, and approver in A04.
5. Distribute A04 to all project team leads and governance participants.
6. Update SKILL-REGISTRY.md — mark SKL-02-01 as complete.

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Project Charter | A04 | Full document | Baselined after sponsor sign-off |
| Assumption log entries | A05 | Assumption Log section | From Step 6 |

---

## Constraints

- A04 must have exactly one Accountable approver (the project sponsor or designated authority).
- The charter must be baselined before any planning skill (Pack 03) runs.
- High-level scope in A04 is not the scope baseline — do not treat it as such.
- Budget figures in A04 must match the approved Business Case or be confirmed by the sponsor if there is a variance.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Small / single-phase project | Simplified one-page charter. Combine purpose, scope, and milestones in one table. |
| Large / multi-phase project | Phase-gated charter with phase objectives. Separate charter per phase or charter addendum per phase gate. |
| Agile / adaptive project | Charter authorizes the program increment or release train, not a fixed scope. Objectives are outcome-based. |
| Hybrid project | Charter covers predictive phases; product backlog items are noted as TBD pending sprint planning. |
| Program or portfolio | Charter links to program or portfolio charter. Dependency on program-level approval noted. |
| Externally funded / contractual | Charter references contract number and obligations. Budget authority defined by contract terms. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| No sponsor sign-off | A04 not baselined; planning cannot start | Escalate to PMO; do not begin planning until charter is signed |
| Strategic alignment not confirmed | Project may be cancelled at next portfolio review | Re-confirm with sponsor and portfolio manager before proceeding |
| Scope too vague | Planning team cannot estimate or define WBS | Return to sponsor for scope clarification; update charter before proceeding |
| Assumptions not recorded | Planning assumptions fail silently during execution | Audit A05 Assumption Log; add all known assumptions before planning |
| Budget not confirmed | PM cannot authorize any expenditure | Escalate to sponsor for budget confirmation; do not proceed without budget authorization |
| PM authority not confirmed | Decisions escalate unnecessarily; team confusion | Confirm PM authority level in A05; communicate to team |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | PM assignment confirmed | PM name and authority level recorded in A04 | PM field blank or authority undefined |
| T-2 | Strategic alignment documented | At least one organizational strategic objective linked to project purpose | Strategic alignment field blank |
| T-3 | SMART objectives defined | 3–7 objectives, each with measurable success criteria and time bound | Any objective vague, unmeasurable, or without time bound |
| T-4 | High-level scope and exclusions defined | Scope statement includes what is IN and what is explicitly OUT | Exclusions section blank |
| T-5 | Key milestones identified | 3–7 milestones with target dates | Milestones section blank or dates missing |
| T-6 | Constraints documented | All five constraint types (schedule, budget, resource, scope, quality) addressed | Any constraint type missing |
| T-7 | Assumptions recorded in A05 | A05 Assumption Log has at least 3 entries from this skill | Assumption Log empty |
| T-8 | Initial risk list included | 3–5 initial risks noted in A04 | Initial risks section blank |
| T-9 | Budget authority defined | PM and sponsor authority thresholds recorded in A04 | Budget authority blank or "TBD" |
| T-10 | A04 baselined and distributed | Sponsor sign-off, version, baseline date recorded; distributed to team leads | A04 in draft or unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.1.6.1 Initiate Project or Phase · Guide §2.1 Governance Domain*  
*Source type: PMI-derived*  
*Owner: Project Manager*  
*Approval authority: Project Sponsor*
