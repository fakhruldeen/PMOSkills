---
skill_id: SKL-08-05
skill_name: Manage PMO Portfolio Reporting
pack: 08 — PMO Governance
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A05 — Context Register (Portfolio Report section)
artifacts_updated:
- A17 — Work Performance Information (Portfolio view)
pmbok8_process_anchor: Guide §2.1 Governance Domain · PMO-Guide — §Portfolio Reporting
performance_domains:
- Governance
focus_area: Monitoring and Controlling
upstream_prerequisites:
- SKL-08-02 — Standardize Status Reporting
downstream_skills:
- SKL-08-03 — Perform PMO Health Check
file_path: skills/08-pmo-governance/SKL-08-05-manage-pmo-portfolio-reporting.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-08-05 — Manage PMO Portfolio Reporting

**Skill ID:** SKL-08-05  
**Pack:** 08 — PMO Governance  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1 Governance Domain · PMO-Guide — §Portfolio Reporting  
**File path:** `skills/08-pmo-governance/SKL-08-05-manage-pmo-portfolio-reporting.md`

---

## Purpose

Consolidate individual project status reports and EVM metrics into a centralized portfolio-level dashboard. Analyze interdependencies, resource utilization, and portfolio risk to support executive decision-making and strategic prioritization.

---

## Scope

This skill aggregates individual project reports (A17), runs portfolio-level analytics (e.g., aggregate CPI, total cost variance), and produces portfolio status dashboards. It does not write individual project reports (SKL-05-01). It runs at every portfolio reporting cycle (e.g., monthly).

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A17 status reports from all projects | SKL-05-01 / PMs | Yes |
| Portfolio budget & strategic objectives | Executive / Sponsor | Yes |
| Interdependency log | SKL-03-01 / PMO | Yes |

---

## Instructions

### Step 1 — Collect and Validate Project Status Submissions
1. Retrieve all individual project status reports (A17) submitted for the current cycle.
2. Check for missing submissions and log late reports in the compliance register (SKL-08-02).
3. Validate that EVM data (PV, EV, AC) is mathematically consistent ($CPI = EV / AC$, $SPI = EV / PV$, $EAC = BAC / CPI$).
4. Resolve data discrepancies with PMs.

### Step 2 — Aggregate Financial and Schedule Performance
1. Calculate Portfolio Planned Value ($\sum PV$), Portfolio Earned Value ($\sum EV$), and Portfolio Actual Cost ($\sum AC$).
2. Calculate Portfolio Cost Variance ($CV_{port} = \sum EV - \sum AC$) and Portfolio Schedule Variance ($SV_{port} = \sum EV - \sum PV$).
3. Calculate Portfolio CPI ($CPI_{port} = \sum EV / \sum AC$) and Portfolio SPI ($SPI_{port} = \sum EV / \sum PV$).
4. Compute total budget variance ($VAC_{port} = \sum BAC - \sum EAC$).
5. Record aggregate metrics in the Portfolio Report.

### Step 3 — Analyze Interdependencies and Blockers
1. Review cross-project dependency milestones. Flag any project schedule slippage that threatens downstream projects.
2. Extract critical roadblocks and T2/T3 escalations from project reports.
3. Consolidate these into a Portfolio Issues List, highlighting items requiring executive intervention.
4. Record interdependencies in the Portfolio Report.

### Step 4 — Compile Resource Capacity and Allocation
1. Aggregate resource allocation data across all projects to identify overallocated teams or upcoming bench periods.
2. Flag resource conflicts where multiple projects require the same key resource simultaneously.
3. Recommend resource shifting or staffing adjustments.
4. Record resource summary in the Portfolio Report.

### Step 5 — Prepare and Format Portfolio Dashboard
1. Construct the Portfolio Dashboard containing:
   - Executive Summary (overall portfolio health, strategic alignment check).
   - High-level list of all projects with their R/Y/G status, PM, budget, and phase.
   - Aggregate financial and schedule indices.
   - Resource allocation map and interdependency flags.
   - Key decisions and escalations requiring executive board action.
2. Record dashboard in the portfolio section of A05.

### Step 6 — Distribute Dashboard and Facilitate Review
1. Distribute the dashboard to executive sponsors and board members.
2. Facilitate the portfolio review meeting, focusing on critical projects (Red status) and strategic priority decisions.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Portfolio Performance Dashboard | A05 | Portfolio Dashboard section |
| Portfolio Issues & Dependency List | A05 | Portfolio Interdependencies section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Submissions Collection | All active project reports accounted for and validation checks completed | Missing project reports ignored |
| T-2 | Aggregate Financials | Portfolio-level PV, EV, AC, and indices calculated mathematically | Simple average used instead of weighted sum |
| T-3 | Interdependency Analysis | Cross-project dependency milestones audited and conflicts flagged | Milestone slippage impact ignored |
| T-4 | Issues Consolidation | Executive-level issues consolidated from project logs | Non-critical issues cluttering report |
| T-5 | Resource Map compiled | Allocation conflicts flagged across projects | Resource overlap ignored |
| T-6 | Dashboard Format | Dashboard contains visual metrics, project lists, and escalations | Dashboard is text-heavy without structure |
| T-7 | Distribution timing | Dashboard distributed within PMO reporting SLA | Dashboard shared late |
| T-8 | Alignment checking | Check whether portfolio performance still serves strategic objectives | Strategic alignment not reviewed |
| T-9 | Executive sign-off | Sponsor/Steering Committee chair signs off on consolidated dashboard | Dashboard unapproved |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 portfolio aggregation and reporting |

---

*Authority: PMBOK8 Guide §2.1 · PMO Practice Guide · Portfolio Standard*  
*Source type: PMI-derived*
