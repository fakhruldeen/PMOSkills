---
skill_id: SKL-05-01
name: Monitor and Control Project Work
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.1 · Figure 7-1 · Figure 7-2
performance_domains:
- Measurement
- Governance
- Delivery
focus_area: Monitoring and Controlling
primary_artifact: A17 — Work Performance Reports
artifacts_updated:
- A12 — Change Requests
- A16 — Cost Forecasts
- A18 — Issue Log
- A19 — Risk Register
- A21 — Lessons Learned Register
upstream_prerequisites:
- SKL-04-01
downstream_skills:
- SKL-05-02
- SKL-05-03
- SKL-05-04
- SKL-05-05
- SKL-05-06
file_path: skills/05-monitoring-controlling/SKL-05-01-monitor-and-control-project-work.md
tests: 5
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-01 — Monitor and Control Project Work

**Skill ID:** SKL-05-01  
**Canonical Title:** Monitor and Control Project Work  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-01-monitor-and-control-project-work.md`  
**Authority:** Process Groups: A Practice Guide §7.1 · Figure 7-1 · Figure 7-2  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Monitor and Control Project Work is the process of tracking, reviewing, and reporting the overall progress to meet the performance objectives defined in the project management plan. Its key benefits are that it allows stakeholders to understand the current state of the project, recognize the actions taken to address performance issues, and have visibility into the future project status with cost and schedule forecasts.

This is the central integrating process for monitoring and controlling. It pulls performance data from executing processes, converts it into work performance information and reports, feeds that information to other control processes, and routes corrective or preventive decisions through integrated change control.

---

## 2. Scope

This skill covers:
- Comparing actual project performance against the project management plan
- Assessing performance to determine whether corrective or preventive actions are needed
- Checking the status of individual project risks
- Maintaining an accurate, timely information base through project completion
- Providing information to support status reporting, progress measurement, and forecasting
- Providing cost and schedule forecasts
- Monitoring implementation of approved changes
- Reporting to program management when the project is part of a program
- Ensuring the project stays aligned with business needs

This skill does **not** cover:
- Detailed cost, schedule, scope, or risk control processes — those are addressed in SKL-05-03 through SKL-05-06
- Approving or rejecting change requests — that is SKL-05-02
- Executing corrective actions — that is SKL-04-01

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Monitor and Control Project Work |
| **Guide Section** | Process Groups §7.1 |
| **Figure** | Figure 7-1 — I/T/O · Figure 7-2 — Data Flow Diagram |
| **Performance Domain** | Measurement · Uncertainty · Delivery · Governance |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Work performance reports · Change requests · Updated forecasts |

**PMI definition (paraphrased):** Monitor and Control Project Work tracks, reviews, and reports overall project progress against the project management plan; it allows stakeholders to understand current status and future forecast, and initiates corrective or preventive actions through change requests.

---

## 4. Roles

### 4.1 Project Manager
The project manager owns this process. They integrate all performance signals, maintain the performance picture, identify deviations, produce forecasts, and initiate corrective or preventive actions through the change control process.

### 4.2 Project Team Members
Team members provide work performance data, flag issues, report progress on assigned activities, and feed relevant information into the project information system.

### 4.3 PMO or Program Management
When the project is part of a program, the PMO or program level receives work performance reports and provides organizational context, resource arbitration, or escalation paths.

### 4.4 Stakeholders
Stakeholders receive performance reports and forecasts. Their feedback on satisfaction, priorities, or concerns becomes an input back into this process and related control processes.

### 4.5 Sponsor
The sponsor is the recipient of escalated performance decisions, threshold breach notifications, and any corrective or preventive requests that exceed project manager authority.

---

## 5. Inputs

Process Groups Figure 7-1 identifies the following inputs:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Project management plan (any component)** | A14-linked baseline and plans | The baseline against which actual performance is compared |
| **Assumption log** | A06 / assumption section | Checked for continued validity as conditions change |
| **Basis of estimates** | Planning records | Used to compare actuals against original estimate logic |
| **Cost forecasts** | A16 forecast outputs | Integrated into the performance picture |
| **Issue log** | A18 | Current open issues that affect performance visibility |
| **Lessons learned register** | A21 | Provides historical improvement patterns |
| **Milestone list** | A14 / schedule | Key reference points for progress assessment |
| **Quality reports** | Quality monitoring outputs | Indicate conformance or defect trends |
| **Risk register and risk report** | A19 | Current risk exposure fed into overall performance picture |
| **Schedule forecasts** | A15 forecast outputs | Integrated into the performance picture |
| **Work performance information** | Control process outputs | Assembled from all control processes feeding this integrator |
| **Agreements** | Procurement records | Contractual performance obligations feeding into reporting |
| **Enterprise environmental factors** | Organizational context | Constraints, market conditions, governance rules |
| **Organizational process assets** | OPA / A05 | Reporting templates, historical records, procedures |

---

## 6. Tools and Techniques

Process Groups Figure 7-1 names the following:

### 6.1 Expert Judgment
Used to interpret performance data, identify meaningful variances, assess trends, and select appropriate corrective or preventive actions.

### 6.2 Data Analysis
- **Alternatives analysis:** Evaluates options for corrective or preventive action
- **Cost-benefit analysis:** Assesses whether proposed actions are worth their cost and effort
- **Earned value analysis:** Integrates scope, schedule, and cost performance into variance and index metrics
- **Root cause analysis:** Identifies the underlying causes of variances or problems
- **Trend analysis:** Examines performance over time to forecast future trajectory
- **Variance analysis:** Compares planned versus actual performance on schedule, cost, scope, and quality

### 6.3 Decision Making
- **Voting:** Used in group settings to reach consensus on corrective actions, forecasts, or priorities

### 6.4 Meetings
Used for status reviews, performance discussions, risk reviews, forecast updates, and stakeholder reporting sessions.

---

## 7. Monitoring Rules

### Rule 1 — Performance monitoring is continuous
This process runs throughout the project. It does not occur only at milestones or phase gates.

### Rule 2 — Work performance data is not the same as work performance information
Raw data from executing processes (actual durations, costs incurred, percent complete) must be analyzed and interpreted before it becomes meaningful information for decision-making.

### Rule 3 — Corrective and preventive decisions go through A12
This process identifies the need for corrective or preventive action. The actual approval of those actions occurs through SKL-05-02 (Perform Integrated Change Control), not here.

### Rule 4 — Forecasts must be maintained continuously
Schedule forecasts and cost forecasts are updated at each monitoring cycle. Stale forecasts are not forecasts — they are false information.

### Rule 5 — Risk status is an integral part of performance monitoring
Individual risk status is checked here, not only in SKL-05-06. Overall performance health includes the current risk picture.

---

## 8. Step-by-Step Instructions

### Step 1 — Collect Work Performance Data
Gather actual performance data from all executing processes — actual costs, actual durations, deliverable completion status, quality measurements, stakeholder engagement levels, and issue and risk updates. Ensure data is timestamped and attributed.

### Step 2 — Assemble Work Performance Information
Analyze and interpret the collected data. Apply earned value analysis to derive SV, CV, SPI, CPI, EAC, and ETC where applicable. Identify variances from baselines. Review schedule and cost forecasts. Check whether assumptions are still valid. Review open issues and risk status.

### Step 3 — Compare Against Plan
Compare current performance against the scope baseline, schedule baseline, cost baseline, quality metrics, resource plan, and communications plan. For each measured dimension, note the magnitude and direction of variance and whether it falls within defined thresholds or tolerance bands.

### Step 4 — Assess Trends
Look at performance over time, not only at the current snapshot. Identify whether variances are improving, stable, or worsening. Use trend analysis to project whether performance will recover without intervention.

### Step 5 — Check Risk and Issue Status
Review the current risk register and risk report summary. Note any risks that have been triggered, any new emergent risks flagged by executing teams, and whether reserve levels are still adequate. Confirm that active issues are tracked and owned.

### Step 6 — Produce Work Performance Reports
Compile the assembled information into work performance reports appropriate for each audience — executive summaries for sponsors, detailed variance reports for the project team, milestone status reports for program management, and exception reports for governance bodies when thresholds are breached.

### Step 7 — Identify Corrective or Preventive Actions
For variances beyond thresholds, identify candidate corrective actions to bring performance back on track, or preventive actions to avoid anticipated problems. Document these as change requests for routing through A12.

### Step 8 — Update Forecasts
Refresh cost forecasts and schedule forecasts based on current performance. Update the issue log, risk register, and lessons learned register as needed. Route any plan updates through SKL-05-02.

---

## 9. Outputs

Process Groups Figure 7-1 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Work performance reports** | A17 — Performance Report | Assembled, analyzed, and formatted performance information for stakeholders |
| **Change requests** | A12 | Corrective actions, preventive actions, defect repair requests requiring plan or baseline changes |
| **Project management plan updates** | A14-linked components | Any plan component identified as needing update based on monitoring findings |
| **Project document updates** | A16, A18, A19, A21, schedule forecasts | Updated cost forecasts, issue log, lessons learned, risk records, schedule forecasts |

---

## 10. Decision Logic

| Condition | Action |
|-----------|--------|
| Variance within threshold | Document, monitor, update forecasts |
| Variance at threshold boundary | Escalate for awareness, identify preventive actions |
| Variance exceeds threshold | Raise change request in A12 for corrective or preventive action |
| Risk triggered during monitoring | Flag to SKL-05-06 and raise A12 if corrective action is needed |
| Assumption invalidated | Update assumption log and assess downstream impact |
| Project misaligned with business need | Escalate to sponsor and raise A12 for strategic decision |

---

## 11. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | Combine status reporting and performance review into a single lightweight meeting and simple A17 template |
| **Large or regulated project** | Use formal earned value reporting, tiered reporting structures, and strict variance threshold governance |
| **Adaptive project** | Velocity and burndown replace EVM metrics; iteration reviews replace periodic status reports |
| **Distributed team** | Increase reporting frequency and use digital dashboards to maintain performance visibility |

---

## 12. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Reporting performance data without analysis | Stakeholders receive raw numbers with no meaning | Always convert data to information before reporting |
| Forecasts not updated after each cycle | Stale EAC and schedule forecasts lead to wrong decisions | Enforce forecast refresh discipline at each review |
| Variances within tolerance ignored until they accumulate | Small drifts become large unrecoverable deviations | Apply trend analysis to catch trajectory problems early |
| Change requests initiated without formal routing | Unapproved corrective actions bypass integrated change control | All actions affecting baselines must go through A12 |

---

## 13. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | Work performance reports produced at defined cadence | A17 records show current cycle date | Reports overdue or absent |
| T-2 | Variance analysis present for all tracked dimensions | A17 includes SV, CV, SPI, CPI or qualitative equivalents | Report has no variance content |
| T-3 | Forecasts updated this cycle | A16 and A15 forecasts reflect current data | EAC or schedule forecast unchanged from prior cycle despite variance |
| T-4 | Corrective actions routed through A12 | Change request exists for any above-threshold variance | Corrective action taken without A12 record |
| T-5 | Risk status integrated into performance reporting | A17 or A19 note confirms risk status checked this cycle | No risk mention in monitoring output |

---

## 14. Dependency Chain

```text
UPSTREAM
All executing processes (SKL-04-01 through SKL-04-09) — source of work performance data
All planning baselines (scope, schedule, cost) — against which performance is measured
A19 — Risk register and report
A18 — Issue log
A16 — Cost forecasts
A15 — Schedule forecasts

CURRENT SKILL
SKL-05-01 — Monitor and Control Project Work

DOWNSTREAM
A17 — Work performance reports (primary output)
A12 — Change requests for corrective and preventive actions
SKL-05-02 — Perform Integrated Change Control (receives change requests)
SKL-05-03 through SKL-05-09 — Receive work performance reports as context
A21 — Updated lessons learned
```

---

## 15. Example

### Example A — EVM Variance Report
At the end of month 4 the project team calculates CPI = 0.87 and SPI = 0.92. The cost variance exceeds the defined -10% threshold. SKL-05-01 produces a work performance report showing the variance, root cause analysis pointing to underestimated vendor rates, and an updated EAC. A change request is raised in A12 requesting a cost baseline revision and a recovery plan through accelerated resource utilization.

### Example B — Forecast Update Without Variance
At the end of sprint 6 in a hybrid project, velocity is tracking at 38 story points per sprint against a baseline of 40. The variance is within tolerance. The schedule forecast is updated to show a two-day slip in the next milestone. No change request is needed. The updated forecast is distributed via A17 and the issue log is confirmed as current.

---

## 16. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.1, Figure 7-1, Figure 7-2 | Core process definition, I/T/O, data flow |
| PMBOK Guide, Eighth Edition | PMBOK8 | Measurement domain · Governance domain | Performance domain alignment, EVM guidance |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; updated Last Updated date |

---

*Authority: Process-Groups §7.1 · PMBOK8*  
*Owner: Project Manager*  
*Feeds Into: SKL-05-02 (A12), A17, all other Pack 05 skills*
