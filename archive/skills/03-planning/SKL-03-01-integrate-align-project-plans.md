---
skill_id: SKL-03-01
skill_name: Integrate and Align Project Plans
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan
artifacts_updated:
- A06 — Project Management Plan
pmbok8_process_anchor: Guide §2.3.6.1 Develop Project Management Plan · Guide §2.3
  Schedule Domain · Standard §3.2 Focus on Value
performance_domains:
- Governance
- Scope
- Schedule
- Finance
- Stakeholders
- Resources
- Risk
focus_area: Planning
upstream_prerequisites:
- SKL-02-01 — A04 Project Charter must be baselined
- SKL-02-02 — A07 Stakeholder Register must be baselined
downstream_skills:
- SKL-03-02 through SKL-03-18 — All planning sub-skills feed into A06
- SKL-04-01 — Direct and Manage Project Work
file_path: skills/03-planning/SKL-03-01-integrate-align-project-plans.md
tests: 8
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-01 — Integrate and Align Project Plans

**Skill ID:** SKL-03-01  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.3.6.1 Develop Project Management Plan · Guide §2.3 Schedule Domain  
**File path:** `skills/03-planning/SKL-03-01-integrate-align-project-plans.md`

---

## Purpose

Develop, integrate, and baseline the Project Management Plan (A06) by aligning all subsidiary plans into a single coherent governance document. A06 is the master plan that defines how the project will be executed, monitored, controlled, and closed. It is the authority document referenced by all execution and monitoring skills.

---

## Scope

This skill orchestrates the creation of A06. It does not directly produce the subsidiary plans — those are created by SKL-03-02 through SKL-03-18. This skill integrates them, checks for internal consistency, resolves conflicts, obtains sponsor approval, and baselines A06. It runs after all subsidiary plans are at least in advanced draft.

---

## Inputs Required

| Input | Artifact | Mandatory? |
|---|---|---|
| Project Charter | A04 (baselined) | Yes |
| Stakeholder Register | A07 (baselined) | Yes |
| All subsidiary plan drafts | A06 sections from SKL-03-02 to SKL-03-18 | Yes |
| Governance framework | A05 (Governance section) | Yes |
| OPA and EEF | A05 | If available |

---

## Instructions

### Step 1 — Collect All Subsidiary Plan Drafts
1. Confirm that all subsidiary plans (scope, schedule, cost, resource, risk, stakeholder, communications) are in advanced draft.
2. Collect all drafts into A06 working document.
3. Identify any missing sections.

### Step 2 — Check Internal Consistency
1. Verify that the schedule baseline is consistent with the resource plan (resources available when needed).
2. Verify that the cost baseline matches the resource plan costs.
3. Verify that the risk reserve is reflected in the cost baseline.
4. Verify that the stakeholder engagement plan aligns with the communications plan.
5. Verify that quality requirements are embedded in the scope baseline and schedule.
6. Document all consistency issues found.

### Step 3 — Resolve Conflicts
1. For each consistency issue, determine the resolution:
   - Adjust the subsidiary plan to align with the constraint (most common)
   - Escalate to sponsor if resolution requires a change to charter constraints
2. Update affected subsidiary plans.
3. Re-check consistency after updates.

### Step 4 — Define Change Control Rules for A06
1. Confirm that any change to A06 baselines requires an A12 Change and Exception Decision Log entry.
2. Confirm the change control authority per A05 governance.
3. Record change control rules in A06 Introduction section.

### Step 5 — Review and Obtain Sponsor Approval
1. Circulate A06 to: Sponsor, PMO, key team leads.
2. Incorporate feedback.
3. Obtain sponsor sign-off.

### Step 6 — Baseline A06
1. Record version (1.0.0), baseline date, and approver in A06 YAML and Change Log.
2. Distribute to all project team leads.
3. Update SKILL-REGISTRY.md — mark SKL-03-01 as Active · Tested.

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Project Management Plan | A06 | Integrated, consistent, baselined |

---

## Constraints

- A06 cannot be baselined until all subsidiary plans are at least approved drafts.
- Any post-baseline change to A06 requires A12 entry and re-approval.
- A06 is the authority for all execution and monitoring decisions.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Simple project | Single-page plan; combine scope, schedule, cost in one table |
| Complex project | Full subsidiary plan set; formal CCB for changes |
| Agile | A06 covers governance and lifecycle approach; detailed plans are per sprint |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| Subsidiary plans not ready | A06 has gaps | Complete outstanding subsidiary plans before integrating |
| Consistency conflicts not resolved | Execution errors during Pack 04 | Re-run Step 3; re-baseline affected plans |
| No sponsor sign-off | A06 not authoritative | Do not begin execution; obtain sign-off first |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | All subsidiary plans present | All required A06 sections populated | Any section missing |
| T-2 | Schedule-resource consistency | Schedule dates align with resource availability | Any resource gap on critical path |
| T-3 | Cost-resource consistency | Cost baseline matches resource plan costs | Cost baseline and resource costs diverge |
| T-4 | Risk reserve in cost baseline | Contingency reserve line item present in cost baseline | Reserve not visible |
| T-5 | Stakeholder-comms alignment | Engagement frequency in A06 matches comms plan | Frequency mismatch |
| T-6 | Change control rules defined | A06 Introduction defines change control authority and A12 requirement | Change control rules absent |
| T-7 | Sponsor sign-off obtained | Sign-off recorded with date and name | A06 unsigned |
| T-8 | A06 distributed | Distribution list confirmed | A06 baselined but not distributed |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.3.6.1 Develop Project Management Plan*  
*Source type: PMI-derived*  
*Owner: Project Manager*  
*Approval authority: Project Sponsor*
