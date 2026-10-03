---
skill_id: SKL-03-06
skill_name: Plan Schedule Management
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan (Schedule Management section)
artifacts_updated:
- A06 — Project Management Plan
pmbok8_process_anchor: Guide §2.3.6.1 Plan Schedule Management · Guide §2.3 Schedule
  Domain
performance_domains:
- Schedule
focus_area: Planning
upstream_prerequisites:
- SKL-03-05 — A11 WBS must be baselined
downstream_skills:
- SKL-04-01 — Direct and Manage Project Work
- SKL-05-04 — Control Schedule
file_path: skills/03-planning/SKL-03-06-plan-schedule-management.md
tests: 6
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-06 — Plan Schedule Management

**Skill ID:** SKL-03-06  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.3.6.1 Plan Schedule Management · Guide §2.3 Schedule Domain  
**File path:** `skills/03-planning/SKL-03-06-plan-schedule-management.md`

---

## Purpose

Define how the project schedule will be developed, monitored, and controlled. The output is the Schedule Management section of A06, which governs all scheduling activities from sequencing through control.

---

## Scope

This skill produces the Schedule Management Plan section of A06. It does not build the schedule itself (that is part of SKL-03-01 integration and downstream execution). It defines the rules, tools, and approach for schedule management.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A11 — WBS | SKL-03-05 | Yes |
| A05 — EEF/OPA | SKL-01-01 | Yes |

---

## Instructions

### Step 1 — Define Scheduling Methodology
1. Select the scheduling method: Critical Path Method (CPM), Critical Chain, Rolling Wave, or hybrid.
2. Define the scheduling tool (e.g., MS Project, Primavera, spreadsheet).
3. Record in A06 Schedule Management section.

### Step 2 — Define Schedule Level of Detail
1. Define the level of decomposition for schedule activities (activity = work package or sub-work-package).
2. Define the reporting period (weekly, bi-weekly).
3. Define milestone criteria (what constitutes a schedule milestone).
4. Record in A06.

### Step 3 — Define Schedule Variance Thresholds
1. Define acceptable schedule variance (e.g., ±5% SPI, ±2 weeks float).
2. Define what triggers a schedule recovery plan.
3. Define escalation path for schedule variance per A05 governance tiers.
4. Record in A06.

### Step 4 — Define Schedule Change Control
1. Define what constitutes a schedule change requiring A12 entry.
2. Define the approval authority for schedule baseline changes per A05 governance.
3. Record in A06.

### Step 5 — Baseline Schedule Management Section
1. Review with sponsor or PMO.
2. Record version, date, and approval.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Schedule Management Plan | A06 | Schedule Management section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Methodology defined | Scheduling method and tool documented | Method or tool blank |
| T-2 | Level of detail defined | Reporting period and activity level documented | Either blank |
| T-3 | Variance thresholds defined | SPI threshold and recovery trigger documented | Thresholds absent |
| T-4 | Change control defined | A12 trigger and approval authority documented | Change control absent |
| T-5 | Section in A06 | Schedule Management section present and populated | Section missing |
| T-6 | Sign-off obtained | Approval recorded in A06 | Section unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.3.6.1 Plan Schedule Management*  
*Source type: PMI-derived*
