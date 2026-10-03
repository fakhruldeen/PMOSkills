---
skill_id: SKL-03-16
skill_name: Plan Resource Management
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan (Resource Management section)
artifacts_updated:
- A06 — Project Management Plan
pmbok8_process_anchor: Guide §2.6.6.1 Plan Resource Management · Guide §2.6 Resources
  Domain
performance_domains:
- Resources
focus_area: Planning
upstream_prerequisites:
- SKL-03-05 — A11 WBS must be baselined
downstream_skills:
- SKL-03-17 — Estimate Resources
- SKL-04-03 — Acquire Resources
- SKL-04-04 — Develop Team
- SKL-04-05 — Manage Team
file_path: skills/03-planning/SKL-03-16-plan-resource-management.md
tests: 7
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-16 — Plan Resource Management

**Skill ID:** SKL-03-16  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.6.6.1 Plan Resource Management · Guide §2.6 Resources Domain  
**File path:** `skills/03-planning/SKL-03-16-plan-resource-management.md`

---

## Purpose

Define how project resources (human, physical, and material) will be identified, acquired, managed, and released. The output is the Resource Management section of A06, which governs SKL-03-17 (Estimate Resources), SKL-04-03 (Acquire Resources), SKL-04-04 (Develop Team), SKL-04-05 (Manage Team), and SKL-05-08 (Control Resources).

---

## Scope

This skill produces the Resource Management Plan section of A06. It does not estimate specific resource quantities (SKL-03-17) or acquire resources (SKL-04-03).

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A11 — WBS | SKL-03-05 | Yes |
| A05 — EEF (resource pools, HR policies, procurement rules) | SKL-01-01 | Yes |

---

## Instructions

### Step 1 — Define Resource Categories
1. Identify all resource types needed for the project:
   - Human resources (by role/skill type, not individual names)
   - Physical resources (equipment, facilities)
   - Material resources (consumables, components)
2. Record resource categories in A06.

### Step 2 — Define Roles and Responsibilities
1. For each human resource role, define:
   - Role name and description
   - Key responsibilities on this project
   - Required skills and competencies
   - Reporting relationship (who they report to on the project)
   - Authority level (what can this role decide independently?)
2. Create a RACI chart for key project activities if not already covered by A05 governance.
3. Record in A06.

### Step 3 — Define Acquisition Approach
1. Define how resources will be acquired:
   - Internal staff: process for requesting and securing from functional managers
   - External contractors: procurement approach (per SKL-04-09 Conduct Procurements)
   - Virtual/remote resources: tools and protocols for remote work
2. Define resource pre-assignment rules (any resources already committed to the project).
3. Record in A06.

### Step 4 — Define Team Development Approach
1. Define training needs identification process.
2. Define team-building activities and frequency.
3. Define performance assessment approach (informal check-ins, formal reviews).
4. Record in A06.

### Step 5 — Define Resource Control Rules
1. Define resource variance thresholds:
   - What level of resource shortfall triggers a recovery plan?
   - What triggers escalation to sponsor?
2. Define resource release rules (when and how resources are released at project close or phase end).
3. Record in A06.

### Step 6 — Baseline Resource Management Section
1. Review with sponsor and functional managers.
2. Record version, date, and approval in A06.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Resource Management Plan | A06 | Resource Management section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Resource categories defined | All three types (human, physical, material) addressed | Any type not addressed |
| T-2 | Roles and responsibilities defined | All project roles have description, skills, and authority level | Any role with incomplete definition |
| T-3 | RACI defined for key activities | Key activities have R, A, C, I assigned | RACI absent for governance activities |
| T-4 | Acquisition approach defined | Internal, external, and virtual resource acquisition rules documented | Any acquisition type undefined |
| T-5 | Team development approach defined | Training, team-building, and performance assessment documented | Section absent |
| T-6 | Resource control rules defined | Variance thresholds and release rules documented | Thresholds absent |
| T-7 | Section in A06 signed off | Version, date, approver recorded | Section unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.6.6.1 Plan Resource Management*  
*Source type: PMI-derived*
