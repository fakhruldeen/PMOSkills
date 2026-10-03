---
skill_id: SKL-03-06b
skill_name: Develop and Baseline Schedule (Detailed)
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A15 — Schedule Model and Baseline Record
artifacts_updated:
- A14 — Integrated Project Management Plan
pmbok8_process_anchor: Guide §2.3.2.2 Develop Schedule · Guide §2.3 Schedule Domain
performance_domains:
- Schedule
focus_area: Planning
upstream_prerequisites:
- SKL-03-06 — Plan Schedule Management
- SKL-03-05 — Develop Scope Structure
downstream_skills:
- SKL-03-15 — Develop Budget
- SKL-05-04 — Monitor and Control Schedule
file_path: skills/03-planning/SKL-03-06b-develop-schedule.md
tests: 9
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-06b — Develop and Baseline Schedule (Detailed)

**Skill ID:** SKL-03-06b  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.3.2.2 Develop Schedule · Guide §2.3 Schedule Domain  
**File path:** `skills/03-planning/SKL-03-06b-develop-schedule.md`

---

## Purpose

Decompose project work packages into activities, sequence these activities using logical relationships, estimate resource requirements and durations, and analyze the resulting schedule network path (using Critical Path Method) to establish a realistic, approved Schedule Baseline (A15).

---

## Scope

This skill begins with the approved WBS (A08/A11) and outputs a fully structured schedule model baseline (A15). It does not define the schedule management rules (SKL-03-06) or perform schedule tracking/control (SKL-05-04). It runs once during planning or when a major scope change requires schedule re-baselining.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A08 — Scope and Requirements / WBS | SKL-03-05 | Yes |
| A06 — Schedule Management Section | SKL-03-06 | Yes |
| Resource estimates / availability limits | SKL-03-17 / Sponsor | Yes |
| Historical productivity records | OPA (A05) | If available |

---

## Instructions

### Step 1 — Decompose Work Packages into Activities
1. Identify all lowest-level work packages in the approved WBS (A08).
2. Decompose each work package into discrete schedule activities that are small enough to be easily estimated, tracked, and managed (typically 8 to 80 hours of effort).
3. Create an Activity List documenting the Activity ID, Work Package ID, Name, and description.
4. Record Activity List in A15.

### Step 2 — Sequence Activities and Assign Logical Relationships
1. For each activity, identify its predecessor(s) and successor(s).
2. Assign logical relationship types:
   - **Finish-to-Start (FS):** Successor cannot start until predecessor finishes (default).
   - **Start-to-Start (SS):** Successor cannot start until predecessor starts.
   - **Finish-to-Finish (FF):** Successor cannot finish until predecessor finishes.
   - **Start-to-Finish (SF):** Successor cannot finish until predecessor starts.
3. Identify and apply leads (acceleration of successor) or lags (delay of successor) if required.
4. Record relationship network in A15.

### Step 3 — Estimate Activity Durations
1. For each activity, estimate the amount of work effort and calendar time required to complete it.
2. Select and apply the appropriate estimating technique:
   - **Analogous Estimating:** Use historical actual durations from similar projects.
   - **Parametric Estimating:** Use statistical relationships based on historical data (e.g., hours per line of code or square foot).
   - **Three-Point Estimating:** Calculate expected duration using $t_e = (t_o + 4t_m + t_p) / 6$ (Beta distribution) to account for uncertainty.
3. Document the basis of estimates for each activity.
4. Record estimated durations in A15.

### Step 4 — Analyze Schedule Network and Determine Critical Path (CPM)
1. Input activity list, relationships, and durations into the scheduling tool.
2. Perform a Forward Pass calculation to determine Early Start (ES) and Early Finish (EF) dates for all activities.
3. Perform a Backward Pass calculation to determine Late Start (LS) and Late Finish (LF) dates.
4. Calculate Total Float ($TF = LS - ES$) and Free Float for each activity.
5. Identify the Critical Path: the sequence of activities that has zero (or negative) total float. This determines the shortest possible project duration.
6. Record critical path activities and total float values in A15.

### Step 5 — Apply Resource Leveling / Smoothing
1. Review resource demand against availability limits.
2. If resource overallocation occurs, apply resource leveling (delaying activities with float, which may extend project duration) or resource smoothing (adjusting activities within float without changing the critical path).
3. Update schedule dates in the model.
4. Record resource constraints in A15.

### Step 6 — Establish Schedule Baseline
1. Review the schedule model with the Sponsor, key stakeholders, and the PMO.
2. Verify that the scheduled completion date meets the project constraints.
3. Obtain formal sponsor approval to baseline the schedule.
4. Lock the approved schedule model as the Schedule Baseline in A15, noting version, approval date, and baseline milestones.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Schedule Model Baseline | A15 | Schedule Baseline Record |
| Activity List & Attributes | A15 | Activity Register |
| Basis of Estimates | A15 | Estimation Assumptions |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Activity Decomposition | Every WBS work package maps to at least one activity | Work package without activities |
| T-2 | Predecessor/Successor Check | Every activity (except start and finish) has at least one predecessor and successor | Dangler activities (no relations) |
| T-3 | Estimation Technique Documented | Every activity duration has a recorded basis of estimate | Duration estimated with no justification |
| T-4 | CPM Forward Pass | ES and EF dates calculated for all activities | Calculations missing or manually inconsistent |
| T-5 | CPM Backward Pass | LS and LF dates calculated for all activities | Calculations missing or manually inconsistent |
| T-6 | Critical Path Identified | Critical path sequence is clearly flagged in schedule | Critical path not identified |
| T-7 | Total Float Calculated | Total float calculated for all activities | Float values missing |
| T-8 | Resource Limit Validation | No resource allocations exceed maximum limits | Overallocated resources accepted in baseline |
| T-9 | Sponsor Approval | Sponsor signature and baseline timestamp recorded | Baseline locked without approval |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 schedule development alignment |

---

*Authority: PMBOK8 Guide §2.3.2.2 Develop Schedule · Practice Standard for Scheduling*  
*Source type: PMI-derived*
