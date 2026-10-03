---
artifact_id: A15
name: Schedule Baseline and Forecast Record
template_version: 1.0.0
status: Template · Active
category: Planning
authority: "PMBOK8 Guide Table 2-1 · Practice Standard for Scheduling"
source_type: synthesis
file_path: artifacts/planning-and-baselines/A15-schedule-baseline-template.md
---

# A15 — Schedule Baseline and Forecast Record Template

**Artifact ID:** A15  
**Artifact Name:** Schedule Baseline and Forecast Record  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide Table 2-1 · Practice Standard for Scheduling (3rd Ed.) · Planning Performance Domain §2.3  
**Source Type:** synthesis  
**File Path:** `artifacts/planning-and-baselines/A15-schedule-baseline-template.md`

> **Usage note:** The schedule baseline is the approved time plan against which performance is measured. Section 2 captures the milestone plan (always required). Section 3 captures the activity-level detail (required for medium and large projects; optional for simple efforts). Update the Forecast section (Section 5) at each reporting cycle — do not alter the baseline without a formal change request.

---

## Section 1 — Schedule Identity

| Field | Value |
|---|---|
| **Project Name** | [FIELD: Project name] |
| **Project ID** | [FIELD: Project ID] |
| **Schedule Version** | [FIELD: e.g. Baseline v1.0 — increment only on approved baseline changes] |
| **Baseline Approval Date** | [FIELD: YYYY-MM-DD] |
| **Approved By** | [FIELD: Sponsor or designated change authority] |
| **Scheduling Tool** | [FIELD: e.g. MS Project / Jira / Asana / manual Gantt / N/A] |
| **Scheduling Approach** | [FIELD: CPM / Critical Chain / Rolling Wave / Sprint-based / Milestone-only] |
| **Record Owner** | [FIELD: Project manager / scheduler] |

---

## Section 2 — Milestone Plan (Baseline)

[FIELD: List all key milestones in chronological order. Include phase gates, major deliverables, and closure. These are the primary schedule commitments.]

| # | Milestone | Baseline Date | Milestone Type | Dependency | Owner |
|---|---|---|---|---|---|
| M01 | [FIELD: e.g. Project kickoff] | [FIELD: YYYY-MM-DD] | Start | — | PM |
| M02 | [FIELD: e.g. Planning complete / baseline approved] | [FIELD: YYYY-MM-DD] | Decision gate | M01 | PM + Sponsor |
| M03 | [FIELD: e.g. Key deliverable 1 complete] | [FIELD: YYYY-MM-DD] | Delivery | M02 | [FIELD: Owner] |
| M04 | [FIELD: e.g. User acceptance testing complete] | [FIELD: YYYY-MM-DD] | Quality gate | M03 | [FIELD: Owner] |
| M05 | [FIELD: e.g. Go-live / handover] | [FIELD: YYYY-MM-DD] | Delivery | M04 | [FIELD: Owner] |
| M06 | Project closure | [FIELD: YYYY-MM-DD] | End | M05 | PM |

---

## Section 3 — Activity Plan (Baseline)

[FIELD: Complete this section for medium and large projects. For simple projects, the milestone plan above is sufficient. Activity IDs should be consistent with any scheduling tool in use.]

| Activity ID | Activity Name | WBS Ref | Duration | Baseline Start | Baseline Finish | Predecessor(s) | Resource | Owner |
|---|---|---|---|---|---|---|---|---|
| A001 | [FIELD: Activity name] | [FIELD: WBS ID] | [FIELD: e.g. 5d] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] | [FIELD: predecessor IDs or —] | [FIELD: Role / name] | [FIELD: Owner] |
| A002 | [FIELD: Activity name] | [FIELD: WBS ID] | [FIELD: duration] | [FIELD: date] | [FIELD: date] | [FIELD: predecessors] | [FIELD: Resource] | [FIELD: Owner] |

> **Tip:** For large schedules, this section may reference an external scheduling tool file. Record the tool name, file location, and the date it was baselined.

**External schedule reference (if applicable):**

| Field | Value |
|---|---|
| Tool | [FIELD: Tool name] |
| File location | [FIELD: File path, link, or repository location] |
| Baseline date | [FIELD: YYYY-MM-DD] |
| Version / export ID | [FIELD: Version or export identifier] |

---

## Section 4 — Critical Path Summary

[FIELD: Identify the critical path for this project — the sequence of activities that determines the earliest possible finish date. List key critical path activities and the total float available.]

| Field | Value |
|---|---|
| **Critical path duration** | [FIELD: Total project duration on critical path] |
| **Planned project end date** | [FIELD: YYYY-MM-DD] |
| **Total float on critical path** | [FIELD: 0 days — by definition] |
| **Near-critical activities (float ≤ 5 days)** | [FIELD: List activities with low float — these need active monitoring] |

**Critical path sequence:**

[FIELD: List the critical path activities in order, e.g.: A001 → A005 → A012 → A018 → A024 → M06]

---

## Section 5 — Schedule Forecast (Updated Each Reporting Cycle)

> **Do not modify baseline dates in this section.** Record the forecast (current estimated completion) in the Forecast column only. Create a change request if the forecast indicates the baseline will be missed.

| Milestone | Baseline Date | Current Forecast | Variance | Status | Notes |
|---|---|---|---|---|---|
| M01 | [FIELD: Baseline] | [FIELD: Forecast] | [FIELD: +/- days] | On track / At risk / Delayed | [FIELD: Notes] |
| M02 | [FIELD: Baseline] | [FIELD: Forecast] | [FIELD: Variance] | [Status] | [Notes] |
| M03 | [FIELD: Baseline] | [FIELD: Forecast] | [FIELD: Variance] | [Status] | [Notes] |
| M04 | [FIELD: Baseline] | [FIELD: Forecast] | [FIELD: Variance] | [Status] | [Notes] |
| M05 | [FIELD: Baseline] | [FIELD: Forecast] | [FIELD: Variance] | [Status] | [Notes] |
| M06 | [FIELD: Baseline] | [FIELD: Forecast] | [FIELD: Variance] | [Status] | [Notes] |

**Schedule Performance Index (SPI):** [FIELD: SPI value — from EVM if used; or qualitative assessment]
**Schedule Variance (SV):** [FIELD: SV value or N/A]

---

## Section 6 — Assumptions and Constraints

| Type | Description | Impact on Schedule |
|---|---|---|
| Assumption | [FIELD: e.g. Resource X available from date Y] | [FIELD: Delay risk if false] |
| Assumption | [FIELD: e.g. External approvals completed within 2 weeks] | [FIELD: Impact] |
| Constraint | [FIELD: e.g. Hard go-live date of YYYY-MM-DD] | [FIELD: No float available after M05] |
| Constraint | [FIELD: Add constraints from A05] | [FIELD: Impact] |

---

## Section 7 — Change Log

| Version | Date | Author | Change Description | Change Request Ref |
|---|---|---|---|---|
| Baseline v1.0 | [FIELD: YYYY-MM-DD] | [FIELD: Author] | Initial approved baseline | — |
| [Version] | [FIELD: YYYY-MM-DD] | [FIELD: Author] | [FIELD: What changed] | [FIELD: CR-###] |

---

*Template for: A15 — Schedule Baseline and Forecast Record*  
*Authority: PMBOK8 Guide Table 2-1 · Practice Standard for Scheduling*  
*See definition file: `artifacts/planning-and-baselines/A15-schedule-baseline-forecast-record.md`*
