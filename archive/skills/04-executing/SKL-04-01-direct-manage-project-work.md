---
skill_id: SKL-04-01
skill_name: Direct and Manage Project Work
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A18 — Issue, Impediment and Action Log
artifacts_updated:
- A21 — Lessons Learned Record
- A14 — Integrated PM Plan (via A12 change requests)
- A28 — Communications and Reporting Record (change notifications)
pmbok8_anchor: Guide §2.1.6.3 Direct and Manage Project Work · Figure 2-5
performance_domains:
- Delivery
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-03-01 — A14 must be baselined
downstream_skills:
- SKL-05-01 — Monitor and Control Project Work
file_path: skills/04-executing/SKL-04-01-direct-manage-project-work.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-01 — Direct and Manage Project Work

**Pack:** 04 — Executing  
**Status:** Active · Tested  
**Primary Artifact:** A18 — Issue, Impediment and Action Log  
**PMBOK8 Anchor:** Guide §2.1.6.3 · Figure 2-5

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-9 are fully defined in the Tests section below.

---

## Purpose

Direct and Manage Project Work is the primary execution skill. It authorizes and oversees the performance of the planned project work, manages deliverable production, and routes issues, impediments, and change requests through the correct artifact channels. No other Pack 04 skill can begin until this skill has been activated by a baselined A14.

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Integrated PM Plan | A14 | All sections | Baselined |
| Approved change requests | A12 | Change log | Approved status |
| Work performance data | — | Direct observation / team reporting | Current |
| Issue log | A18 | All open items | Current |
| WBS / Work packages | A08 | WBS section | Baselined |
| Resource assignments | A25 | RACI | Complete |
| Communications plan | A28 | Plan section | Complete — governs all change notifications |
| Quality management plan | A14 | Quality section | Baselined — defines acceptance criteria and quality checks |

---

## Steps

### Step 1 — Confirm Execution Authorization
Verify A14 is baselined and sponsor authorization is in place. If A14 is not baselined, halt — execution cannot begin. Confirm phase gate approval from A06 governance record.

### Step 2 — Initiate Work Package Delivery
Assign work packages from A08 WBS to responsible parties per A25 RACI. Confirm resource availability in A26. Confirm that every active work package has:
- A named Responsible party in A25
- A start date and expected completion date
- Acceptance criteria from A08 (scope baseline)
- Quality check criteria from A14 quality management section

### Step 3 — Collect Work Performance Data
Gather status for all active performance domains. Do not interpret data here — record it raw. Interpretation happens in Pack 05.

| Data domain | What to collect | Source |
|---|---|---|
| Scope | Deliverables started, in progress, completed; acceptance status | A08 WBS + team reports |
| Schedule | Actual start and finish vs. A15 baseline; milestones hit or missed | A15 schedule baseline |
| Cost | Actual costs incurred vs. A16 budget baseline; invoices received | A16 cost baseline + financial system |
| Quality | Inspection results; defects found vs. acceptance criteria | A14 quality plan + inspection records |
| Risk | Risk triggers observed; new risk conditions identified | A19 risk register |
| Stakeholder | Engagement levels, attendance, response patterns | A07 SEAM |
| Resources | Actual vs. planned resource utilization; capacity issues | A26 |
| Communications | Messages delivered, responses received, escalations | A28 delivery log |

### Step 4 — Manage Issues and Impediments
For every issue or impediment identified:
- Log in A18 with: ID, date raised, description, raised by, owner, priority, due date, status
- Classify per the table below
- Assign owner and resolution due date
- Escalate to sponsor if issue exceeds PM authority threshold defined in A06

| Classification | Description | Primary log |
|---|---|---|
| Issue | A problem that has occurred and requires resolution | A18 |
| Impediment | A blocker preventing work from proceeding | A18 |
| Action Item | A task required to resolve an issue or impediment | A18 |
| Risk event | An identified risk that has now materialized | A18 + A19 (cross-reference) |

### Step 5 — Route Change Requests
For every requested change to scope, schedule, cost, quality, or any other baseline:
- Do NOT implement until approved via SKL-05-02 Integrated Change Control
- Log the change request in A12 with status = Pending
- Notify relevant stakeholders per A28 communications plan — change notifications are mandatory, not optional
- No change is "minor enough to skip" — all baseline-affecting changes go through A12

### Step 6 — Apply Quality Checks
Before any deliverable is accepted:
- Verify against acceptance criteria in A08
- Apply quality checks defined in A14 quality management section
- Defects detected: log in A18 as an Issue; assign rework owner and due date
- Accepted deliverables: mark in A08 with acceptance date and authorized acceptor name

### Step 7 — Update Lessons Learned
For every significant execution event (positive or negative), add an entry to A21 with: date, phase, category, description, impact, recommendation. Significant events include: issues resolved, risks triggered, quality defects found, milestone achieved ahead of or behind schedule, stakeholder escalation.

### Step 8 — Produce Work Performance Data Package
Compile all data collected in Step 3 into a structured package for input to SKL-05-01 (Monitor and Control Project Work). This is raw data — it is not analyzed, interpreted, or filtered here. The data package must cover all eight data domains from Step 3.

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Issues, impediments, actions logged | A18 | All active items | Updated continuously |
| Change requests raised | A12 | Pending items | Awaiting ICC approval |
| Lessons learned entries | A21 | Execution section | Ongoing |
| Work performance data package | — | Feeds SKL-05-01 | Raw, unanalyzed, all 8 domains |
| Accepted deliverables recorded | A08 | Acceptance log | With acceptor name and date |
| Change notifications sent | A28 | Delivery log | All pending change requests communicated per plan |

---

## Operating Rules

1. No work package begins without an entry in A25 RACI — responsibility must be assigned before work starts.
2. No approved change is implemented unless it appears in A12 with status = Approved.
3. Every issue in A18 must have an owner and a due date — unowned issues are treated as invalid entries.
4. Work performance data is raw data — analysis and interpretation happen in Pack 05 monitoring skills.
5. Lessons learned entries are mandatory for issues that caused schedule or cost variance greater than the threshold defined in A06.
6. Execution does not stop for unresolved issues — issues are logged and managed in parallel with ongoing work unless the PM determines work must pause.
7. Change notifications are mandatory — all change requests logged in A12 must be communicated to relevant stakeholders per A28 before any discussion of implementation.
8. Quality checks are part of execution — a deliverable is not "complete" until it has been verified against A08 acceptance criteria.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Shadow changes (undocumented scope additions) | Work performed outside A08 WBS with no A12 entry | Stop unauthorized work; log A12 change request; assess impact |
| Issue backlog accumulation | A18 has >5 open items older than one reporting period | Triage session; re-assign; escalate as needed |
| Performance data gaps | SKL-05-01 cannot complete analysis — missing data domains | Re-collect missing data; identify reporting gap owner |
| Execution without authorization | No A14 baseline confirmed | Halt; obtain formal baseline confirmation |
| Change notified without A28 entry | Stakeholder informed verbally of pending change but no A28 record | Retroactive A28 delivery log entry; enforce written notification going forward |
| Deliverable accepted without quality check | A08 shows accepted deliverable with no quality check record | Retroactive quality review; if not possible, log as quality risk in A19 |
| Work performance data not produced | SKL-05-01 triggered with no WPD package from SKL-04-01 | Reconstruct data for current period; establish data collection routine |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | A14 baseline gate | A14 status = Baselined before execution begins | Execution starts without baselined A14 |
| T-2 | Work package ownership | Every active work package has an assigned owner in A25 | Any work package with no owner in A25 |
| T-3 | Issue log completeness | Every A18 entry has ID, date, description, owner, priority, due date, status | Any A18 entry missing owner or due date |
| T-4 | Change request routing | All change requests appear in A12 with status = Pending before any implementation | Any change implemented without A12 entry |
| T-5 | No unauthorized scope | Work performed matches A08 WBS scope | Work performed outside A08 WBS scope without A12 Approved |
| T-6 | Lessons learned continuous | A21 updated with at least one entry per reporting period during active execution | A21 has no entries during an active execution period |
| T-7 | Escalation threshold respected | Issues exceeding PM authority threshold in A06 are escalated to sponsor | High-priority issues held at PM level beyond A06 threshold |
| T-8 | Work performance data delivered | WPD package produced with all 8 domains and available as input for SKL-05-01 | No WPD package, or WPD missing one or more data domains |
| T-9 | Deliverable quality verified | Every accepted deliverable has a quality check record referencing A08 acceptance criteria | Deliverable accepted without quality check documentation |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-29 | Expanded: added A28 and Quality inputs; added 8-domain WPD data table in Step 3; added issue classification sub-table in Step 4; added quality check Step 6; expanded outputs from 4 to 6 rows; expanded operating rules from 6 to 8; expanded failure modes from 4 to 7; expanded tests from 8 to 9 (T-9 quality gate added); added change notification rule |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.1.6.3 · Figure 2-5*  
*Source type: PMI-derived*
