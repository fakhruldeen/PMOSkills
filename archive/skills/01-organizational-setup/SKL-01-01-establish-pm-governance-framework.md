---
skill_id: SKL-01-01
skill_name: Establish PM Governance Framework
pack: 01 — Organizational Setup
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A05 — Context Register (Governance section)
artifacts_updated:
- A06 — Project Management Plan (governance reference)
pmbok8_process_anchor: PMBOK8 Standard §3.6 Be an Accountable Leader · Guide §2.1
  Governance Domain · Guide §4.5.2 Governance structures
performance_domains:
- Governance
focus_area: Organizational Setup
upstream_prerequisites: []
downstream_skills:
- SKL-01-02 — Define Artifact and Document Control Standards
- SKL-01-03 — Configure Project Repository and Tool Environment
- SKL-02-01 — Initiate Project or Phase
file_path: skills/01-organizational-setup/SKL-01-01-establish-pm-governance-framework.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-01-01 — Establish PM Governance Framework

**Skill ID:** SKL-01-01  
**Pack:** 01 — Organizational Setup  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Standard §3.6 Be an Accountable Leader · Guide §2.1 Governance Domain · Guide §4.5.2  
**File path:** `skills/01-organizational-setup/SKL-01-01-establish-pm-governance-framework.md`

---

## Purpose

Establish, document, and baseline the governance framework that will govern all project decisions, authority, escalation paths, and accountability structures for this project. The output is the Governance section of A05 (Context Register / OPA), which becomes the authority record for who decides what, at what threshold, and through which process.

---

## Scope

This skill covers the initial establishment of the project governance framework only. It does not create the full project management plan (SKL-03-01), manage stakeholder engagement (SKL-04-06), or configure the repository (SKL-01-03). It must run first — before any other skill — because all downstream skills depend on governance authority to baseline outputs.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| Project mandate or sponsorship confirmation | Sponsor / Business case | Yes |
| Organizational governance standards | EEF / OPA | If available |
| Stakeholder authority map (preliminary) | Sponsor / PMO | Yes |
| Regulatory or compliance requirements | EEF (legal/regulatory) | If applicable |
| Repository operating rules | repo/ folder | Yes |

**Gate check:** No other skill may run until this skill outputs a baselined A05 Governance section.

---

## Instructions

### Step 1 — Identify the Governance Context
1. Confirm the project sponsor and their authority level (what decisions can the sponsor make unilaterally?).
2. Identify the governance body (PMO, Steering Committee, Board, or equivalent) that oversees this project.
3. Confirm whether this project is part of a program or portfolio — if so, document the parent governance structure and any authority it reserves.
4. Identify applicable organizational policies, regulatory requirements, or contractual governance obligations.
5. Record all context findings in A05 Governance section (initial draft).

### Step 2 — Define Decision Authority Levels
1. Define at least three authority tiers for project decisions:
   - **Tier 1 (PM authority):** Decisions the PM can make autonomously within approved baselines (e.g., minor schedule adjustments within float, resource reassignment within approved team, risk response activation within approved reserves).
   - **Tier 2 (Sponsor authority):** Decisions requiring sponsor approval (e.g., scope additions above a defined threshold, budget increases within a defined band, milestone date changes).
   - **Tier 3 (Governance body authority):** Decisions requiring steering committee or board approval (e.g., major scope changes, budget increases above sponsor threshold, project termination, contract awards above defined value).
2. Define the specific thresholds for each tier (cost, schedule, scope, risk, procurement).
3. Record the authority tiers and thresholds in A05.

### Step 3 — Define the RACI for Key Governance Roles
1. For each major governance activity (scope approval, budget approval, risk escalation, change control, quality review, stakeholder escalation, contract award, project closure), define:
   - **R (Responsible):** Who does the work
   - **A (Accountable):** Who signs off — must be one person
   - **C (Consulted):** Who must be consulted before decision
   - **I (Informed):** Who must be notified after decision
2. Resolve any RACI conflicts (two people accountable for the same decision) before baselining.
3. Record the RACI in A05.

### Step 4 — Define Escalation Paths
1. Define the escalation path for each issue type:
   - **Schedule variance:** PM → Sponsor → Steering Committee
   - **Budget variance:** PM → Sponsor → Steering Committee → Board (if applicable)
   - **Scope change:** PM → Sponsor (or CCB) → Steering Committee
   - **Risk escalation:** PM → Sponsor → Steering Committee
   - **Stakeholder conflict:** PM → Sponsor → Steering Committee
   - **Legal/regulatory issue:** PM → Sponsor → Legal/Compliance → Board
2. Define escalation response time expectations at each level.
3. Record escalation paths in A05.

### Step 5 — Define Governance Cadence
1. Define the recurring governance touchpoints:
   - **Steering Committee review frequency** (monthly, quarterly, milestone-based)
   - **Sponsor review frequency** (weekly, bi-weekly, or on-demand)
   - **PMO reporting cadence** (weekly status, monthly performance review)
   - **Change Control Board (CCB) meeting frequency** (weekly, bi-weekly, or triggered)
2. Define the reporting artefacts for each governance touchpoint (status report, dashboard, performance report).
3. Record governance cadence in A05.

### Step 6 — Define Project Closure Authority
1. Confirm who has authority to formally close the project (approve the Final Project Report and sign off on closure).
2. Confirm what conditions must be met before closure is authorized (acceptance of deliverables, benefit realization confirmation, lessons learned archived).
3. Record closure authority in A05.

### Step 7 — Baseline A05 Governance Section
1. Review the completed Governance section with the project sponsor.
2. Obtain formal sign-off from the sponsor or designated authority.
3. Record the version, baseline date, and approver in A05.
4. Distribute to all project team leads and governance participants.

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Governance framework | A05 | Governance section | Authority levels, RACI, escalation paths, cadence, closure authority |
| Governance reference | A06 | Governance section | Subsidiary reference to A05 — not a duplicate |

---

## Constraints

- The governance framework must be baselined (formal approval documented) before any other skill in this repository runs.
- No skill may bypass the authority levels defined here — all decisions above PM authority must follow the escalation path.
- RACI must have exactly one Accountable (A) per activity — split accountability is not permitted.
- Governance thresholds must be specific (numeric, not vague) — "significant changes" is not a valid threshold.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Small / simple project | Simplified RACI (PM + Sponsor only). Minimal escalation tiers. Combined A05/A06 governance reference. |
| Large / multi-stakeholder project | Full three-tier authority model. Formal CCB. Steering committee with formal TOR. Program-level governance integration. |
| Agile / adaptive project | Product Owner replaces Sponsor for scope authority. Sprint Review replaces formal governance touchpoints. Escalation path to PO then PMO. |
| Regulated / compliance project | Add regulatory body to RACI. Mandatory audit trail for all Tier 2+ decisions. Legal/compliance review before closure. |
| PMO portfolio project | Align authority thresholds with portfolio governance standards. PMO retains Tier 3 authority. Reporting to portfolio dashboard. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| No sponsor confirmed | Governance section cannot be baselined | Stop; escalate to PMO to confirm sponsor before proceeding |
| Conflicting RACI (two Accountable) | Governance disputes during execution | Resolve conflict before baselining; confirm with both parties |
| Thresholds not defined | PM escalates every minor decision | Define specific numeric thresholds; confirm with sponsor |
| Governance section not baselined | Downstream skills run without authority anchor | Stop downstream work; baseline A05 before continuing |
| Escalation paths not communicated | Team members escalate to wrong person | Distribute A05 governance section; run governance orientation |
| Sponsor unavailable for sign-off | A05 cannot be baselined | Escalate to PMO or delegate authority in writing from sponsor |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Sponsor confirmed | Named sponsor with confirmed authority level recorded in A05 | Sponsor field blank or "TBD" |
| T-2 | Three authority tiers defined | Tiers 1, 2, and 3 defined with specific thresholds | Any tier missing or threshold vague |
| T-3 | RACI complete for all governance activities | Every governance activity has R, A, C, I assigned with exactly one A | Any activity with no A or multiple A |
| T-4 | Escalation paths defined for all issue types | All six issue type escalation paths documented | Any issue type without a documented path |
| T-5 | Governance cadence defined | All four cadence items (Steering, Sponsor, PMO, CCB) have frequency and reporting artifact | Any cadence item undefined |
| T-6 | Closure authority defined | Named role and conditions for closure sign-off recorded | Closure authority blank or "TBD" |
| T-7 | A05 Governance section baselined | Version, baseline date, and approver recorded | A05 in draft or unsigned |
| T-8 | A06 governance reference updated | A06 contains pointer to A05 governance section | A06 not updated |
| T-9 | Governance framework distributed | All project team leads and governance participants have received A05 | Document baselined but not distributed |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Standard §3.6 Be an Accountable Leader · Guide §2.1 Governance Domain · Guide §4.5.2*  
*Source type: PMI-derived*  
*Owner: PMO / Project Sponsor*  
*Approval authority: Project Sponsor or PMO lead*
