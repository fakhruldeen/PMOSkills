---
skill_id: SKL-05-04
name: Control Schedule
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.5 · Figure 7-9 · Figure 7-10
performance_domains:
- Schedule
- Measurement
focus_area: Monitoring and Controlling
primary_artifact: A17 — Work Performance Information (schedule section)
artifacts_updated:
- A15 — Schedule Baseline
- A12 — Change Requests
- A18 — Issue Log
- A21 — Lessons Learned Register
upstream_prerequisites:
- SKL-05-01
downstream_skills:
- SKL-05-02
file_path: skills/05-monitoring-controlling/SKL-05-04-control-schedule.md
tests: 6
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-04 — Control Schedule

**Skill ID:** SKL-05-04  
**Canonical Title:** Control Schedule  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-04-control-schedule.md`  
**Authority:** Process Groups: A Practice Guide §7.5 · Figure 7-9 · Figure 7-10  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Control Schedule is the process of monitoring the status of the project to update the project schedule and managing changes to the schedule baseline. Its key benefit is that the schedule baseline is maintained throughout the project. This process is performed throughout the project.

Effective schedule control goes beyond reporting whether activities are on time. It requires determining the causes of variances, forecasting future trajectory, evaluating compression or optimization options, and initiating approved corrective action through the change control process when the schedule cannot self-correct within tolerance.

---

## 2. Scope

This skill covers:
- Determining the current status of the project schedule
- Comparing actual schedule performance against the schedule baseline
- Identifying and analyzing schedule variances
- Forecasting schedule completion (updated schedule forecasts)
- Applying earned value analysis to schedule performance (SV, SPI)
- Reconsidering necessary schedule reserves
- Evaluating schedule compression options (crashing, fast-tracking)
- Managing changes to the schedule baseline through change control
- Updating the schedule model and related project documents
- Monitoring contractor and supplier schedule performance
- Adapting to agile contexts: velocity, burndown, iteration review

This skill does **not** cover:
- Building the original schedule — that is SKL-03-05 through SKL-03-07
- Approving schedule baseline changes — that is SKL-05-02
- Cost performance analysis outside the EVM overlap with SPI — that is SKL-05-05

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Control Schedule |
| **Guide Section** | Process Groups §7.5 |
| **Figure** | Figure 7-9 — I/T/O · Figure 7-10 — Data Flow Diagram |
| **Performance Domain** | Measurement · Planning · Governance |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Work performance information · Schedule forecasts · Change requests |

**PMI definition (paraphrased):** Control Schedule monitors schedule status, updates the schedule model with actual performance, determines variances, manages changes to the schedule baseline, and produces forecasts. Any change to the schedule baseline can only be approved through Perform Integrated Change Control.

---

## 4. Core Control Activities

Process Groups §7.5 defines that Control Schedule is concerned with:
- Determining the current status of the project schedule
- Influencing the factors that create schedule changes
- Reconsidering necessary schedule reserves
- Determining if the project schedule has changed
- Managing actual changes as they occur

For agile approaches, Control Schedule additionally concerns:
- Comparing total work delivered and accepted against estimates for the elapsed time cycle
- Conducting retrospectives to record lessons learned
- Reprioritizing the remaining work plan (backlog)
- Determining the rate at which deliverables are produced, validated, and accepted (velocity)
- Determining that the schedule has changed and managing those changes

---

## 5. EVM Schedule Metrics

The following earned value metrics apply to schedule control:

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| **Planned Value (PV)** | Budgeted cost of scheduled work | What was planned to be done by now |
| **Earned Value (EV)** | Budgeted cost of work performed | What has actually been accomplished |
| **Schedule Variance (SV)** | EV − PV | Negative = behind schedule; positive = ahead |
| **Schedule Performance Index (SPI)** | EV ÷ PV | < 1.0 = behind schedule; > 1.0 = ahead |
| **Time Estimate at Completion (EACt)** | Original duration ÷ SPI | Forecast total duration at current rate |

> **Note:** SV and SPI measure schedule efficiency in cost terms. Near project end, SV converges to zero even if the project is late. Use critical path analysis in conjunction with EVM for accurate schedule status at late project stages.

---

## 6. Roles

### 6.1 Project Manager
Owns schedule control. Reviews actual performance against baseline, interprets EVM metrics, decides corrective options, and raises change requests for baseline adjustments.

### 6.2 Scheduler or Planning Lead
Maintains the schedule model. Updates actual start and finish dates, remaining durations, percent complete, and resource utilization. Recalculates the critical path and float after each update.

### 6.3 Activity Owners and Team Members
Report actual progress, flag blockers, and provide reliable estimates to complete for their assigned work packages and activities.

### 6.4 Contractors and Suppliers
Provide scheduled status updates and milestone reports per contract terms. Walkthroughs and status reviews validate the accuracy of contractor reports.

### 6.5 Sponsor
Receives escalated schedule exception reports when thresholds are breached, or when schedule recovery requires additional resources, scope changes, or baseline revision.

---

## 7. Inputs

Process Groups Figure 7-9 identifies:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Schedule management plan** | A14-linked plan | Defines control thresholds, EVM rules, reporting formats, and update procedures |
| **Schedule baseline** | A15 | The approved schedule against which actual performance is measured |
| **Scope baseline** | A08 | Provides the WBS context for scheduling and scope-activity linkage |
| **Performance measurement baseline** | A14 | Integrated baseline for EVM calculation |
| **Lessons learned register** | A21 | Historical schedule performance patterns |
| **Project calendars** | A15 / schedule records | Working time definitions affecting schedule calculation |
| **Project schedule** | A15 current version | The active schedule model being updated |
| **Resource calendars** | Resource records | Availability of resources driving activity duration calculations |
| **Schedule data** | A15 supplementary | Milestones, network diagrams, activity attributes, resource histograms |
| **Work performance data** | Executing outputs | Actual start/finish dates, percent complete, remaining durations |
| **Organizational process assets** | OPA / A05 | Schedule control procedures, reporting templates, historical records |

---

## 8. Tools and Techniques

Process Groups Figure 7-9 names:

### 8.1 Data Analysis
- **Earned value analysis:** Calculates SV and SPI from PV and EV to determine schedule variance and efficiency
- **Iteration burndown chart:** For adaptive projects, tracks remaining work versus elapsed time within an iteration
- **Performance reviews:** Compare actual schedule progress to baseline; identify late activities, float consumption, and critical path changes
- **Trend analysis:** Examines SPI and float trends over time to project future schedule performance
- **Variance analysis:** Determines the magnitude, cause, and impact of schedule deviations
- **What-if scenario analysis:** Models the schedule impact of risks, changes, or alternative execution sequences

### 8.2 Critical Path Method
Recalculates the critical path after schedule updates. Identifies total float and free float changes. Determines whether previously non-critical activities have become critical.

### 8.3 Project Management Information System (PMIS)
Scheduling software used to maintain the schedule model, calculate the critical path, perform EVM calculations, and generate reports and forecasts.

### 8.4 Resource Optimization
- **Resource leveling:** Adjusts start and finish dates based on resource availability constraints
- **Resource smoothing:** Adjusts activities within float to avoid resource peaks without extending the schedule

### 8.5 Leads and Lags
Adjusting lead (advance) or lag (delay) values between activities to optimize schedule performance or recover from delays.

### 8.6 Schedule Compression
- **Crashing:** Adding resources to critical path activities to shorten duration; increases cost
- **Fast-tracking:** Performing activities in parallel that were originally sequential; increases risk

---

## 9. Schedule Control Rules

### Rule 1 — Any baseline change requires formal approval
No change to the schedule baseline may be implemented without an approved change request through SKL-05-02.

### Rule 2 — Actual performance data must be collected before the schedule is updated
Updating the schedule model with incorrect or assumed progress produces misleading forecasts. Actual data must be verified before model updates.

### Rule 3 — Critical path must be recalculated after each update
Activities that were not on the critical path can become critical after float is consumed. The critical path must be re-evaluated at each update cycle.

### Rule 4 — Variance analysis must examine causes, not only magnitude
Knowing that SPI = 0.88 is not enough. The cause of the variance — resource availability, scope change, underestimated durations — determines the appropriate corrective action.

### Rule 5 — Compression options carry tradeoffs
Crashing increases cost. Fast-tracking increases risk. Both require evaluation and, where they affect baselines, formal change control.

---

## 10. Step-by-Step Instructions

### Step 1 — Collect Actual Schedule Performance Data
Gather actual start dates, actual finish dates, percent complete, and remaining duration estimates from activity owners. Validate contractor and supplier reports through scheduled status reviews and walkthroughs.

### Step 2 — Update the Schedule Model
Enter actual performance data into the scheduling tool. Recalculate the schedule model. Identify changes to activity finish dates, milestone dates, and the critical path. Recalculate total and free float for all activities.

### Step 3 — Perform Earned Value Analysis
Calculate PV, EV, SV, and SPI using current period data. Compare SPI against the defined threshold. Identify which WBS components, work packages, or milestones are driving the most variance.

### Step 4 — Perform Variance Analysis
For each significant variance, determine:
- What is the cause?
- Is the variance on the critical path, or does it have float to absorb?
- Is it within the defined schedule threshold?
- Is it likely to self-correct or will it propagate?

### Step 5 — Perform Trend Analysis
Review SPI trends over multiple cycles. Determine whether schedule performance is improving, stable, or deteriorating. Project the EACt (time estimate at completion) if current SPI holds.

### Step 6 — Review Schedule Reserves
Check remaining schedule reserves (buffer, contingency time). Determine whether the current exposure still matches the reserve available. If reserves are insufficient, escalate or raise A12.

### Step 7 — Evaluate Corrective Options
For variances beyond threshold, evaluate:
- Resource optimization (reallocation, leveling)
- Leads and lags adjustment
- Schedule compression (crashing or fast-tracking)
- Scope reduction (requires change request)
- Replanning remaining activities

### Step 8 — Update Forecasts and Documents
Update the schedule forecast. Update the project schedule, schedule data, resource calendars, assumption log, lessons learned register, and risk register as appropriate.

### Step 9 — Raise Change Requests
For any corrective action that requires a baseline change, raise a change request in A12 and route to SKL-05-02. Do not implement baseline changes without approval.

### Step 10 — Report Schedule Performance
Include SV, SPI, critical path status, milestone forecast, and corrective actions in the A17 work performance report.

---

## 11. Outputs

Process Groups Figure 7-9 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Work performance information** | A17 | SV, SPI, milestone status, critical path changes, trend observations |
| **Schedule forecasts** | A15 forecast section | Updated projected completion dates and EACt |
| **Change requests** | A12 | Corrective actions, preventive actions, schedule baseline revision requests |
| **Project management plan updates** | Schedule management plan, schedule baseline, cost baseline, performance measurement baseline | Updated when approved changes affect these components |
| **Project document updates** | Assumption log, basis of estimates, lessons learned, project schedule, resource calendars, risk register, schedule data | Reflect current performance, causes, and learning |

---

## 12. Decision Logic

| Condition | Action |
|-----------|--------|
| SPI within threshold, no critical path change | Update model, update forecasts, report status |
| SPI below threshold, variance on non-critical activity with float | Monitor; apply trend analysis; no immediate change request required |
| SPI below threshold, variance on critical path | Evaluate compression or resource options; raise A12 if baseline change needed |
| Reserve consumed or insufficient | Escalate; raise A12 for reserve or baseline adjustment |
| Contractor milestone missed | Invoke contract remedies; raise A12 for schedule impact; update risk register |
| What-if scenario shows risk will breach threshold | Update A19 risk register; plan proactive corrective action |

---

## 13. Agile and Hybrid Adaptation

| Predictive Metric | Agile Equivalent |
|------------------|------------------|
| SV (Schedule Variance) | Velocity delta vs. planned velocity |
| SPI (Schedule Performance Index) | Velocity ratio (actual / planned) |
| Critical path float | Remaining backlog vs. iteration capacity |
| Milestone forecast | Release burn-up or release date projection |
| Schedule update | Iteration retrospective + backlog reprioritization |

In adaptive contexts, schedule control occurs at the iteration level. Retrospectives capture lessons for process correction. Velocity is tracked as the primary pace indicator. Only project-level schedule changes (release dates, contract milestones) require formal change control.

---

## 14. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | Simple % complete tracking and milestone review; SPI optional but recommended |
| **Large or complex project** | Full EVM implementation; critical path recalculation at each cycle; tiered variance thresholds |
| **Adaptive project** | Velocity and burndown replace EVM; only project-level milestones need formal schedule control |
| **Contractor-heavy project** | Milestone-based performance tracking; scheduled status walkthroughs; contract remedy triggers |

---

## 15. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Schedule updated with estimated rather than actual data | False sense of progress; misleading forecasts | Enforce actual data collection before each model update |
| Critical path not recalculated after updates | Misidentified critical activities; wrong corrective focus | Recalculate critical path as part of every update cycle |
| SPI calculated but cause of variance not investigated | Metric reported but no corrective action | Rule 4: Variance analysis must examine causes |
| Compression applied without evaluating tradeoffs | Cost overrun or risk realization | Evaluate crashing and fast-tracking costs before applying |
| Baseline changed without A12 approval | Unauthorized baseline revision; audit failure | Rule 1: All baseline changes require formal change request |

---

## 16. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | Schedule model updated with verified actual data each cycle | A15 shows update date and data source noted | Model shows estimated or assumed data |
| T-2 | SV and SPI calculated and compared against threshold | A17 includes SV and SPI with threshold reference | No EVM metrics in schedule performance reporting |
| T-3 | Critical path recalculated after each update | Scheduler confirms critical path recalculation output | Critical path report is stale |
| T-4 | Variance cause identified for above-threshold deviations | Variance analysis notes show cause and category | Variance magnitude reported without cause |
| T-5 | Schedule forecasts updated each cycle | A15 forecast shows current cycle date | Forecast unchanged from previous cycle despite variance |
| T-6 | Change requests raised for all corrective actions affecting baselines | A12 shows CR for any schedule baseline revision | Baseline changed without A12 record |

---

## 17. Dependency Chain

```text
UPSTREAM
SKL-03-05 through SKL-03-07 — Develop Schedule, Estimate Durations, Sequence Activities
SKL-04-01 — Direct and Manage Project Work (source of work performance data)
A15 — Schedule baseline and current schedule model
A08 — Scope baseline (WBS)
A16 — Cost baseline (EVM performance measurement baseline)

CURRENT SKILL
SKL-05-04 — Control Schedule

DOWNSTREAM
A17 — Work performance information (schedule section)
A15 — Updated schedule model and forecasts
A12 — Change requests for corrective action or baseline revision
SKL-05-02 — Perform Integrated Change Control (receives change requests)
A19 — Risk register updated with schedule-driven risk signals
A21 — Lessons learned updated
```

---

## 18. Examples

### Example A — SPI Below Threshold, Critical Path Impact
At the end of week 8, the schedule model shows SPI = 0.82 against a threshold of 0.90. Root cause analysis reveals that two critical path activities were delayed due to late material delivery. The scheduler recalculates the critical path and shows a 9-day projected overrun on the next major milestone. The project manager evaluates crashing (adding one resource to each activity at a cost of $4,400) versus fast-tracking (beginning integration testing in parallel with final development, increasing risk). The crashing option is selected. A change request is raised in A12 for the cost baseline impact, and a separate A19 entry is created for the residual integration risk from the parallel start.

### Example B — Agile Velocity Drop
In sprint 5 of a hybrid project, the team completes 31 story points against a planned velocity of 42. Burndown analysis shows the team is 11 points behind the release plan. The retrospective identifies two root causes: unclear acceptance criteria and an unplanned dependency on an external API. The backlog is reprioritized: the API-dependent features are moved to the next sprint. The project-level release date impact is assessed as zero (float exists in the release plan). No formal change request is needed. Lessons learned are updated with the acceptance criteria improvement action.

---

## 19. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.5, Figure 7-9, Figure 7-10 | Core process definition, I/T/O, data flow, agile adaptation |
| PMBOK Guide, Eighth Edition | PMBOK8 | Measurement domain · Planning domain | EVM, schedule performance indicators, tailoring |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; updated Last Updated date; full body restored |

---

*Authority: Process-Groups §7.5 · PMBOK8*  
*Owner: Project Manager / Scheduler*  
*Upstream: A15 schedule baseline · SKL-04-01 work performance data*  
*Downstream: A17 schedule performance information · A12 change requests · SKL-05-02*
