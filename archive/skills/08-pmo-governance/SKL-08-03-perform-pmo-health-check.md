---
skill_id: SKL-08-03
skill_name: Perform PMO Health Check
pack: 08 — PMO Governance
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A05 — Context Register (PMO Maturity section)
artifacts_updated:
- A21 — Lessons Learned Register
pmbok8_process_anchor: Guide §2.1 Governance Domain · PMO-Guide — §PMO Value & Maturity
  Assessment
performance_domains:
- Governance
focus_area: Closing
upstream_prerequisites:
- SKL-08-02 — Standardize Status Reporting
downstream_skills:
- SKL-08-05 — Manage PMO Portfolio Reporting
file_path: skills/08-pmo-governance/SKL-08-03-perform-pmo-health-check.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-08-03 — Perform PMO Health Check

**Skill ID:** SKL-08-03  
**Pack:** 08 — PMO Governance  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1 Governance Domain · PMO-Guide — §PMO Value & Maturity Assessment  
**File path:** `skills/08-pmo-governance/SKL-08-03-perform-pmo-health-check.md`

---

## Purpose

Assess the operating effectiveness, capability maturity, and value delivery of the Project Management Office (PMO) using PMI's OPM Maturity Model and PMO Practice Guide. Identify structural process gaps, training needs, and optimization opportunities.

---

## Scope

This skill designs and conducts the PMO maturity assessment, surveys stakeholders, and compiles an improvement backlog. It does not replace single-project performance reviews (SKL-06-02). It runs at defined organizational intervals (e.g., annually) or when initiating PMO reforms.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| Project status records & compliance logs | SKL-08-02 | Yes |
| Stakeholder feedback surveys | PMO / Sponsor | Yes |
| OPM standards / PMO maturity benchmarks | OPM-Standard / PMO-Guide | Yes |

---

## Instructions

### Step 1 — Define PMO Maturity Assessment Framework
1. Establish the maturity domains to evaluate (e.g., Governance, Scope/Requirements, Scheduling, Cost/Finance, Risk Management, Resource Management, Communications).
2. Set maturity levels based on PMI OPM standards (Level 1: Ad-hoc, Level 2: Consistent, Level 3: Institutionalized, Level 4: Managed, Level 5: Optimizing).
3. Record framework parameters in A05.

### Step 2 — Survey Stakeholders and Gather Feedback
1. Distribute a standardized survey to key PMO stakeholders (Sponsors, PMs, Team Leads, Business Partners).
2. Ask questions regarding:
   - Clarity of PMO governance and decision rights
   - Usefulness of PMO templates, forms, and tools
   - Effectiveness of status reporting and communications
   - Value added by PMO coaching and training
3. Collect and consolidate survey scores.

### Step 3 — Audit Project Compliance and Data Quality
1. Review a random sample of active project repositories.
2. Check for compliance with repository configuration standards (SKL-01-03) and document control (SKL-01-02).
3. Audit the quality of WBS documents, risk registers, and EVM reports.
4. Calculate compliance rates and identify common process failure points.

### Step 4 — Score Maturity and Analyze Gaps
1. Combine survey scores, audit findings, and compliance data.
2. Assign maturity level scores to each evaluation domain.
3. Conduct a gap analysis comparing current maturity levels with target OPM objectives.
4. Write narrative findings detailing strengths, weaknesses, opportunities, and threats (SWOT analysis).

### Step 5 — Develop PMO Improvement Roadmap
1. Define corrective and optimization initiatives to address maturity gaps.
2. Prioritize initiatives based on effort and business value.
3. Establish a PMO Improvement Backlog documenting owners, timelines, and measurable goals for each initiative.
4. Record backlog in the PMO section of A05.

### Step 6 — Present Health Check Findings
1. Package findings, scores, and roadmap into a PMO Health Check Report.
2. Present report to executive sponsors and steering committee.
3. Obtain formal approval for the improvement roadmap resources.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| PMO Health Check Report | A05 | PMO Maturity and SWOT Analysis |
| PMO Improvement Backlog | A05 | PMO Improvement Roadmap section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Maturity Domains Set | At least 5 OPM maturity domains evaluated | Evaluation lacks structure |
| T-2 | Stakeholder Survey Run | Stakeholder satisfaction survey scores collected and analyzed | Survey data missing |
| T-3 | Repository Audit Performed | Compliance check conducted on project files sample | No compliance checks done |
| T-4 | Maturity Levels Scored | Numerical maturity score assigned to each domain | Subjective assessment without scoring |
| T-5 | Gap Analysis Completed | Target vs. current maturity gap documented | Gaps not identified |
| T-6 | Improvement Backlog Created | Backlog items include clear owners, priority, and dates | Backlog missing or lacks details |
| T-7 | Metrics defined | Health metrics for PMO services documented | PMO performance untracked |
| T-8 | Lessons Learned Update | Assessment findings recorded in Lessons Learned | Learning unarchived |
| T-9 | Sponsor sign-off | Executive sponsor signs off on improvement backlog resource budget | Backlog unapproved |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 PMO health check and capability maturity assessment |

---

*Authority: PMBOK8 Guide §2.1 · OPM Standard · PMO Practice Guide*  
*Source type: PMI-derived*
