---
skill_id: SKL-03-19
skill_name: Plan Quality Management
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan (Quality Management section)
artifacts_updated:
- A14 — Integrated Project Management Plan
pmbok8_process_anchor: Guide §2.2.2.6 (Scope & Quality) · Guide §2.1.6.5 Manage Quality
  Assurance · Standard §3.5 Embed Quality
performance_domains:
- Scope
- Governance
focus_area: Planning
upstream_prerequisites:
- SKL-03-03 — Elicit and Analyze Requirements
- SKL-03-04 — Define Scope
downstream_skills:
- SKL-04-01 — Direct and Manage Project Work
- SKL-05-09 — Quality Control
file_path: skills/03-planning/SKL-03-19-plan-quality-management.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-03-19 — Plan Quality Management

**Skill ID:** SKL-03-19  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.2.2.6 · Guide §2.1.6.5 Manage Quality Assurance · Standard §3.5 Embed Quality  
**File path:** `skills/03-planning/SKL-03-19-plan-quality-management.md`

---

## Purpose

Define the quality standards, requirements, and metrics for both the project deliverables and processes, and document how the project will demonstrate compliance with these quality standards. The output is the Quality Management section of A06 (PMP).

---

## Scope

This skill defines quality metrics, standards, assurance processes, and control activities. It does not perform the quality audits (SKL-04-02 / Manage Knowledge / Quality Assurance) or execute quality inspections/testing (SKL-05-09). It runs once during planning or when new quality requirements are identified.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A08 — Scope and Requirements / WBS | SKL-03-05 | Yes |
| Regulatory / compliance requirements | EEF (A05) | Yes |
| Stakeholder quality expectations | SKL-02-02 (A07) | Yes |

---

## Instructions

### Step 1 — Identify Quality Standards and Regulatory Obligations
1. Review the Project Charter, WBS, and Stakeholder Register to identify product-specific quality requirements.
2. Search and list all relevant regulatory, industry-specific, and organizational quality standards, codes, and policies that apply to the project.
3. Record standards and obligations in A06 (Quality section).

### Step 2 — Define Deliverable Quality Metrics
1. For each key deliverable in the WBS, define specific, measurable quality metrics (e.g., defect rate, performance speed, accuracy percentage, weight, height).
2. Set acceptable thresholds for each metric (e.g., defect rate < 0.5%, availability > 99.9%).
3. Record metrics and thresholds in the quality section of A06.

### Step 3 — Plan Quality Assurance (QA) Activities
1. Define the processes and audits that will be used to ensure the project team is following organizational procedures and standards.
2. Schedule regular process audits, peer reviews, and check-ins.
3. Define the roles and responsibilities for QA (who conducts audits, who receives reports).
4. Record QA procedures in A06.

### Step 4 — Plan Quality Control (QC) Activities
1. Identify the verification and inspection methods to be used (e.g., testing, inspections, walkthroughs, checklist verification).
2. Define the frequency of QC inspections (e.g., at end of milestone, per iteration).
3. Document testing environments, tools, and acceptance criteria.
4. Record QC plan in A06.

### Step 5 — Estimate Cost of Quality (COQ)
1. Calculate the budget needed for quality prevention (training, standards documentation, process design).
2. Calculate appraisal costs (testing, inspections, audits).
3. Estimate potential internal and external failure costs (rework, warranty claims, reputational damage).
4. Optimize quality activities to minimize overall COQ.
5. Record COQ summary in A06 and feed into cost estimating (SKL-03-14).

### Step 6 — Review and Baseline Quality Plan
1. Present the Quality Management section of A06 to the Sponsor, PMO, and QA Lead.
2. Obtain formal approval and lock the baseline.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Quality Management Plan | A06 | Quality Management section |
| Deliverable Quality Metrics | A06 | Quality Metrics Table |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Standards Identified | Relevant quality standards and regulations listed | No standards referenced |
| T-2 | Metrics Defined | Every major deliverable has measurable quality metrics | Deliverables lack metrics |
| T-3 | Thresholds Established | Acceptable variance/defect thresholds defined | Metrics lack clear thresholds |
| T-4 | QA Audits Planned | QA process audits scheduled and roles assigned | QA activities missing |
| T-5 | QC Inspections Planned | Testing/inspection methods and frequency documented | QC activities missing |
| T-6 | COQ Considered | Prevention, appraisal, and failure costs summarized | Quality budget not estimated |
| T-7 | Responsibility Defined | Roles for quality assurance and control are assigned | Responsibility unassigned |
| T-8 | Integration verified | Quality plan incorporated into A06 | Plan missing from A06 |
| T-9 | Approval recorded | Quality plan approved by sponsor/QA lead | Plan baseline unapproved |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 quality management plan alignment |

---

*Authority: PMBOK8 Standard §3.5 Embed Quality · Guide §2.2.2.6*  
*Source type: PMI-derived*
