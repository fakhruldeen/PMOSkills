---
skill_id: SKL-08-02
skill_name: Standardize Status Reporting
pack: 08 — PMO Governance
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A05 — Context Register (Status Reporting Standards section)
artifacts_updated:
- A17 — Work Performance Information (reporting template)
pmbok8_process_anchor: Guide §2.1 Governance Domain · PMO-Guide — §Methodology & Standards
performance_domains:
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-01-01 — Establish PM Governance Framework
downstream_skills:
- SKL-08-05 — Manage PMO Portfolio Reporting
file_path: skills/08-pmo-governance/SKL-08-02-standardize-status-reporting.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-08-02 — Standardize Status Reporting

**Skill ID:** SKL-08-02  
**Pack:** 08 — PMO Governance  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1 Governance Domain · PMO-Guide — §Methodology & Standards  
**File path:** `skills/08-pmo-governance/SKL-08-02-standardize-status-reporting.md`

---

## Purpose

Establish, document, and enforce standardized project and program status reporting formats, performance metrics (KPIs), reporting frequencies, and submission workflows across all projects to ensure consistent, accurate executive decision support.

---

## Scope

This skill designs the standard status report template (A17 structure), defines R/Y/G threshold logic, and sets reporting workflows. It does not compile specific weekly reports for a single project (SKL-05-01). It runs once during PMO setup or when reporting standards are updated.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A05 — Governance framework | SKL-01-01 | Yes |
| Organizational communication policies | EEF (A05) | Yes |
| Stakeholder reporting expectations | SKL-02-02 (A07) | Yes |

---

## Instructions

### Step 1 — Define the Reporting Hierarchy and Cadence
1. Establish standard reporting levels and submitters:
   - **Weekly Project Updates:** PM to PMO/Sponsor (Operational level).
   - **Monthly Steering Committee Reports:** PM to Governance Board.
   - **Quarterly Portfolio Dashboard:** PMO to Executives.
2. Define submission deadlines (e.g., weekly reports due every Friday by 3:00 PM).
3. Record schedule in A05.

### Step 2 — Standardize the Status Report Template
1. Create a uniform status report template (A17 base) containing:
   - **Project Identification:** Name, ID, PM, Sponsor, Date.
   - **Overall Project Status:** R/Y/G indicator with narrative justification.
   - **Domain Health Indices:** Scope, Schedule, Cost, Resource, Risk, Quality.
   - **Key Accomplishments:** Achievements in current period.
   - **Planned Activities:** Commitments for the next period.
   - **Critical Impediments / Roadblocks:** Active blockers requiring support.
   - **Key Milestones:** Planned vs. Actual dates.
   - **EVM Metrics Summary:** PV, EV, AC, CV, SV, CPI, SPI, EAC.
2. Record the template structure in A05.

### Step 3 — Codify R/Y/G Threshold Rules (Status Logic)
1. Establish objective rules for assigning health status indicators:
   - **Green (On Track):** CPI/SPI $\ge 0.95$, milestones on track, zero critical issues.
   - **Yellow (Warning):** CPI/SPI between $0.85$ and $0.94$, milestone slippage $< 10\%$, minor roadblocks.
   - **Red (Critical):** CPI/SPI $< 0.85$, milestone slippage $\ge 10\%$, unresolved critical blockages.
2. Enforce that any change in overall status must be accompanied by a narrative explanation and corrective plan.
3. Record rules in A05.

### Step 4 — Define Status Validation Workflow
1. Outline the PMO verification process:
   - **Friday 3:00 PM:** PM submits report.
   - **Monday 12:00 PM:** PMO reviews report, runs validation script, checks EVM data consistency, flags errors.
   - **Tuesday 9:00 PM:** PMO consolidates validated reports into portfolio dashboard.
2. Record validation steps in A05.

### Step 5 — Implement Status Compliance Register
1. Maintain a log tracking project submission compliance (On time, Late, Missing).
2. Establish escalation rules for late submissions (e.g., late twice results in formal warning from PMO Director).
3. Record registry rules in A05.

### Step 6 — Distribute and Train PMs
1. Conduct training sessions for all Project Managers on how to populate the standard report and run validations.
2. Publish templates and instructions to the central repository.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Reporting Standards Document | A05 | Status Reporting Standards section |
| Standardized A17 Template | A17 | Master template |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Reporting Cadence Set | Deadlines and frequencies clearly defined for all levels | Deadlines undefined |
| T-2 | Standard Template Created | Standard status report template includes EVM, milestones, and issues sections | Key sections missing |
| T-3 | R/Y/G Thresholds Codified | Metric boundaries for Green, Yellow, and Red are defined mathematically | Status logic is subjective |
| T-4 | Validation Workflow Defined | PMO review and consolidation deadlines documented | Validation steps missing |
| T-5 | Compliance Rules Set | Escalation rules for non-compliance documented | Compliance rules missing |
| T-6 | Template accessibility | Templates published and linkable in repository | Template unreachable |
| T-7 | Training completed | PM training materials prepared and sessions scheduled | PM training unaddressed |
| T-8 | Governance alignment | Reporting standards match AUTHORITY-ROUTING.md levels | Mismatched escalation paths |
| T-9 | Sponsor sign-off | PMO Director and Sponsor approve the standards | Baseline unapproved |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 status reporting standards |

---

*Authority: PMBOK8 Guide §2.1 · PMO Practice Guide*  
*Source type: PMI-derived*
