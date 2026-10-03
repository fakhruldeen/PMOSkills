---
skill_id: SKL-05-05
name: Control Costs
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.6 · Figure 7-11 · Figure 7-12 · Table 10-1
performance_domains:
- Finance
- Measurement
focus_area: Monitoring and Controlling
primary_artifact: A17 — Work Performance Information (cost section)
artifacts_updated:
- A16 — Cost Baseline
- A12 — Change Requests
- A18 — Issue Log
- A21 — Lessons Learned Register
upstream_prerequisites:
- SKL-05-01
downstream_skills:
- SKL-05-02
file_path: skills/05-monitoring-controlling/SKL-05-05-control-costs.md
tests: 7
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-05 — Control Costs

**Skill ID:** SKL-05-05  
**Canonical Title:** Control Costs  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-05-control-costs.md`  
**Authority:** Process Groups: A Practice Guide §7.6 · Figure 7-11 · Figure 7-12 · Table 10-1  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Control Costs is the process of monitoring the status of the project to update the project costs and managing changes to the cost baseline. Its key benefit is that the cost baseline is maintained throughout the project. This process is performed throughout the project.

Monitoring expenditures without regard to the value of work accomplished has little value other than tracking cash outflow. The key to effective cost control is managing the approved cost baseline and understanding the relationship between funds consumed and work accomplished.

---

## 2. Scope

This skill covers:
- Influencing the factors that create changes to the authorized cost baseline
- Ensuring all change requests are acted on in a timely manner
- Managing actual cost changes when and as they occur
- Ensuring cost expenditures do not exceed authorized funding by period, WBS component, activity, and in total
- Monitoring cost performance to isolate and understand variances from the approved cost baseline
- Monitoring work performance against funds expended
- Preventing unapproved changes from being included in reported costs
- Informing appropriate stakeholders of approved changes and associated costs
- Bringing expected cost overruns within acceptable limits
- Producing cost forecasts (EAC, ETC, TCPI)

This skill does **not** cover:
- Developing the original cost estimates or budget — that is SKL-03-08 through SKL-03-09
- Approving cost baseline changes — that is SKL-05-02
- Procurement financial management beyond its cost reporting role — that intersects SKL-04-09

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Control Costs |
| **Guide Section** | Process Groups §7.6 |
| **Figure** | Figure 7-11 — I/T/O · Figure 7-12 — Data Flow Diagram |
| **Performance Domain** | Measurement · Finance · Governance |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Work performance information · Cost forecasts · Change requests |

**PMI definition (paraphrased):** Control Costs monitors cost status, updates costs with actual expenditure data, manages changes to the cost baseline, and produces forecasts. Any increase to the authorized budget can only be approved through Perform Integrated Change Control.

---

## 4. EVM Cost Metrics

The following earned value metrics apply to cost control. Reference: Process Groups Table 10-1 — Earned Value Calculations Summary Table.

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| **Planned Value (PV)** | Budgeted cost of scheduled work | What was budgeted to be done by now |
| **Earned Value (EV)** | Budgeted cost of work performed | The value of work actually accomplished |
| **Actual Cost (AC)** | Actual cost incurred for work performed | What has actually been spent |
| **Cost Variance (CV)** | EV − AC | Negative = over budget; positive = under budget |
| **Cost Performance Index (CPI)** | EV ÷ AC | < 1.0 = over budget; > 1.0 = under budget |
| **Budget at Completion (BAC)** | Total authorized budget | The total planned value for the project |
| **Estimate at Completion (EAC)** | See formulas below | Forecast total cost at project completion |
| **Estimate to Complete (ETC)** | EAC − AC | Remaining cost to complete from current point |
| **Variance at Completion (VAC)** | BAC − EAC | Projected budget surplus or deficit at completion |
| **To-Complete Performance Index (TCPI)** | See formulas below | Required CPI for remaining work to hit a target |

### 4.1 EAC Formulas

Three common EAC formulas are used depending on the assumption about future performance:

| Assumption | Formula |
|------------|--------|
| Future work performed at planned efficiency | EAC = AC + (BAC − EV) |
| Future work performed at current CPI | EAC = BAC ÷ CPI |
| Future work at a blend of SPI and CPI | EAC = AC + [(BAC − EV) ÷ (CPI × SPI)] |

### 4.2 TCPI Formulas

TCPI is the required cost efficiency for all remaining work to achieve a financial target:

| Target | Formula |
|--------|---------|
| To complete within BAC | TCPI = (BAC − EV) ÷ (BAC − AC) |
| To complete within EAC | TCPI = (BAC − EV) ÷ (EAC − AC) |

> **Interpretation:** TCPI > 1.0 means remaining work must be more efficient than past work to hit the target. TCPI significantly above 1.0 indicates the target may not be achievable without corrective action.

---

## 5. Roles

### 5.1 Project Manager
Owns cost control. Reviews actual costs against baseline, interprets EVM metrics, identifies variance causes, decides corrective options, and raises change requests when the cost baseline must change.

### 5.2 Cost Controller or Financial Analyst
Maintains the financial tracking system. Calculates EVM metrics. Produces cost reports and forecasts. Tracks period expenditures against the funding plan.

### 5.3 Activity and Work Package Owners
Report actual resource usage, hours, and expenditures for their work packages. Provide reliable ETC (estimate to complete) inputs.

### 5.4 Finance or Accounting
Provides actual cost data from the financial system. Confirms period expenditures and committed costs against the funding schedule.

### 5.5 Sponsor
Approves cost baseline changes and reserve releases above the project manager's delegated authority. Receives exception reports when cost performance breaches governance thresholds.

---

## 6. Inputs

Process Groups Figure 7-11 identifies:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Cost management plan** | A14-linked plan | Defines EVM rules, thresholds, reporting formats, control procedures |
| **Cost baseline** | A16 | The approved time-phased budget against which actuals are compared |
| **Performance measurement baseline** | A14 | Integrated scope-schedule-cost baseline for EVM calculations |
| **Lessons learned register** | A21 | Historical cost performance patterns informing current analysis |
| **Project funding requirements** | A16 / finance records | Defines when and how much funding is available; governs expenditure pace |
| **Work performance data** | Executing outputs | Actual costs incurred, resources consumed, invoices paid |
| **Organizational process assets** | OPA / A05 | Cost control procedures, financial templates, historical records |

---

## 7. Tools and Techniques

Process Groups Figure 7-11 names:

### 7.1 Expert Judgment
Used to interpret cost performance data, evaluate EAC assumptions, assess variance causes, and select corrective actions.

### 7.2 Data Analysis
- **Earned value analysis:** Calculates CV, CPI, EAC, ETC, VAC, and TCPI from current period data
- **Variance analysis:** Determines the magnitude, cause, and impact of cost deviations from baseline
- **Trend analysis:** Examines CPI trends over time to project whether cost performance is improving, stable, or deteriorating
- **Reserve analysis:** Evaluates whether contingency and management reserves remain adequate for current cost exposure

### 7.3 To-Complete Performance Index (TCPI)
Calculates the cost efficiency required for all remaining work to achieve either BAC or EAC. A TCPI significantly above the current CPI indicates recovery is unlikely without intervention.

### 7.4 Project Management Information System (PMIS)
Financial management system and project management software used to track actuals, calculate EVM metrics, and produce reports and forecasts.

---

## 8. Cost Control Rules

### Rule 1 — Any budget increase requires formal approval
No increase to the authorized cost baseline may be implemented without an approved change request through SKL-05-02. There is no informal budget adjustment.

### Rule 2 — Expenditures must not exceed authorized funding by period
Cost control is not only about the total budget. It also governs cash flow: expenditures must stay within authorized funding by period, WBS component, and activity.

### Rule 3 — EVM integrates scope, schedule, and cost
Cost performance cannot be accurately assessed without knowing what work was actually accomplished (EV). Spending on schedule without accomplishing planned work is overrun, not progress.

### Rule 4 — TCPI must be evaluated alongside CPI
A CPI of 0.85 is not useful in isolation. TCPI reveals what efficiency is required for recovery. If TCPI >> CPI, recovery to BAC is unrealistic and baseline revision should be considered.

### Rule 5 — Unapproved changes must not appear in cost reports
Reporting unauthorized cost changes as if approved undermines baseline integrity and governance. All reported actuals must correspond to authorized work.

---

## 9. Step-by-Step Instructions

### Step 1 — Collect Actual Cost Data
Gather actual costs incurred from the financial system, including:
- Labor hours and rates
- Material and equipment costs
- Contractor and vendor invoices
- Overhead allocations
- Any other committed or accrued costs for the current period

Verify against the authorized cost baseline and funding schedule.

### Step 2 — Calculate EVM Metrics
Using current period PV, EV, and AC, calculate:
- CV = EV − AC
- CPI = EV ÷ AC
- SV = EV − PV (for integrated schedule-cost picture)
- SPI = EV ÷ PV
- EAC (using appropriate formula for current assumption)
- ETC = EAC − AC
- VAC = BAC − EAC
- TCPI (to BAC and to EAC)

### Step 3 — Perform Variance Analysis
For each significant cost variance, determine:
- What caused the variance? (resource rates, quantities, scope, productivity)
- Is it isolated (one work package) or systemic (across multiple packages)?
- Is it within the defined cost threshold?
- Will it self-correct or continue to grow?

Document the variance cause and category.

### Step 4 — Perform Trend Analysis
Review CPI trends over multiple periods. A stable or improving CPI indicates the project may recover. A deteriorating CPI indicates the EAC forecast will worsen. Project the trend-based EAC.

### Step 5 — Evaluate TCPI and Recovery Feasibility
Calculate TCPI to BAC. If TCPI is significantly above the current CPI, assess whether recovery to BAC is realistic. If not, evaluate a revised EAC and prepare a change request for cost baseline revision.

### Step 6 — Review Reserve Adequacy
Check whether remaining contingency and management reserves are sufficient for current cost exposure. If cost overruns are consuming contingency reserve faster than earned value is growing, escalate and consider reserve replenishment through A12.

### Step 7 — Identify and Evaluate Corrective Options
For above-threshold variances, evaluate:
- Scope reduction (reduces remaining cost; requires change request)
- Resource substitution (cheaper resources; may affect quality or schedule)
- Productivity improvement (may be achievable without baseline change)
- Procurement renegotiation (where contracts allow)
- Reserve drawdown (within authority)
- Cost baseline revision (requires A12 and SKL-05-02)

### Step 8 — Update Cost Forecasts and Documents
Update EAC and ETC in A16. Update the assumption log, basis of estimates, lessons learned register, and risk register. Reflect any cost-driven risk signals or changes in A19.

### Step 9 — Raise Change Requests
For any corrective action that requires a cost baseline change, raise a change request in A12 and route through SKL-05-02. Do not implement cost baseline changes without approval.

### Step 10 — Report Cost Performance
Include CV, CPI, EAC, TCPI, and period expenditure vs. funding in the A17 work performance report. Provide narrative interpretation, not only raw metrics.

---

## 10. Outputs

Process Groups Figure 7-11 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Work performance information** | A17 | CV, CPI, EAC, ETC, VAC, TCPI, variance cause analysis, trend observations |
| **Cost forecasts** | A16 forecast section | Updated EAC and ETC projections |
| **Change requests** | A12 | Corrective actions, cost baseline revision requests, reserve adjustments |
| **Project management plan updates** | Cost management plan, cost baseline, performance measurement baseline | Updated when approved changes affect these components |
| **Project document updates** | Assumption log, basis of estimates, cost estimates, lessons learned, risk register | Reflect current performance, causes, and learning |

---

## 11. Decision Logic

| Condition | Action |
|-----------|--------|
| CPI within threshold | Update forecasts, report status, continue monitoring |
| CPI below threshold, variance isolated to one package | Investigate cause; apply corrective action within authority; raise A12 if baseline affected |
| CPI below threshold, variance systemic across packages | Root cause analysis; evaluate revised EAC; prepare cost baseline change request |
| TCPI to BAC significantly exceeds current CPI | Prepare revised EAC; raise A12 for cost baseline revision; inform sponsor |
| Reserve consumption outpacing progress | Reserve analysis; escalate; raise A12 for reserve or baseline adjustment |
| Period expenditure approaching or exceeding authorized funding | Escalate to finance and sponsor; raise A12 for funding schedule review |

---

## 12. EVM Quick Reference Card

| Metric | Good | Warning | Action Required |
|--------|------|---------|----------------|
| **CPI** | > 1.0 | 0.85 – 1.0 | < 0.85 |
| **SPI** | > 1.0 | 0.85 – 1.0 | < 0.85 |
| **CV** | Positive | Slightly negative | Negative beyond threshold |
| **TCPI vs. CPI** | TCPI ≤ CPI | TCPI slightly > CPI | TCPI significantly > CPI |
| **VAC** | Positive | Small negative | Large negative |

> Thresholds are set by the cost management plan and may differ by project. The values above are indicative defaults.

---

## 13. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | Simplified cost tracking; CV and CPI calculated manually; EAC updated at key milestones |
| **Large or regulated project** | Full EVM with control accounts; TCPI evaluated at each cycle; formal reserve analysis; tiered cost reporting |
| **Adaptive project** | Cost tracked per iteration; velocity used as proxy for cost efficiency; EAC recalculated per release plan |
| **Fixed-price contract** | Seller bears cost overrun risk; buyer monitors earned value and deliverable compliance, not internal costs |

---

## 14. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Actual cost collected from wrong source or period | Incorrect EVM metrics; misleading forecasts | Verify AC against financial system each period |
| CPI reported without cause analysis | Metric acknowledged but not acted on | Rule 3: Variance analysis must identify cause |
| TCPI not calculated alongside CPI | Recovery feasibility unknown | Calculate TCPI to BAC every reporting cycle |
| Cost baseline changed without A12 | Unauthorized revision; governance failure | Rule 1: Any budget increase requires formal approval |
| Reserve consumption not tracked | Unexpected reserve exhaustion | Reserve analysis at every cost control cycle |

---

## 15. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | AC verified from financial system each cycle | A16 shows update date and financial system source | AC based on estimates or informal reports |
| T-2 | CV, CPI, EAC, ETC, VAC, TCPI calculated this cycle | A17 shows full EVM metric set | Partial metrics only or no EVM |
| T-3 | Variance cause documented for above-threshold deviations | Cost variance analysis includes cause category | Variance magnitude only, no cause |
| T-4 | TCPI evaluated against current CPI | Recovery feasibility noted in A17 or A16 | CPI reported with no TCPI comparison |
| T-5 | Cost forecasts updated this cycle | A16 EAC and ETC reflect current period | EAC unchanged from prior cycle despite variance |
| T-6 | Change requests raised for all cost baseline changes | A12 shows CR for any cost baseline revision | Cost baseline changed without A12 record |
| T-7 | Reserve adequacy reviewed | A16 or monitoring record shows reserve sufficiency status | No reserve analysis evidence |

---

## 16. Dependency Chain

```text
UPSTREAM
SKL-03-08 through SKL-03-09 — Estimate Costs, Determine Budget
SKL-04-01 — Direct and Manage Project Work (source of actual cost data)
A16 — Cost baseline and current cost records
A14 — Performance measurement baseline
Financial system — Authoritative actual cost source

CURRENT SKILL
SKL-05-05 — Control Costs

DOWNSTREAM
A17 — Work performance information (cost section)
A16 — Updated cost forecasts (EAC, ETC)
A12 — Change requests for cost corrective action or baseline revision
SKL-05-02 — Perform Integrated Change Control (receives change requests)
A19 — Risk register updated with cost-driven risk signals
A21 — Lessons learned updated with cost performance learning
```

---

## 17. Examples

### Example A — CPI Below Threshold, Systemic Overrun
At the end of month 5, CPI = 0.81 across six work packages. Root cause analysis identifies that labor rates were underestimated by 18% at the time of estimating. EAC (BAC ÷ CPI) projects a total cost of $2.47M against BAC of $2.0M. TCPI to BAC = 1.38, far above current CPI of 0.81. The project manager prepares a revised EAC of $2.47M and raises A12 for a cost baseline revision and a corrective plan to contain further overrun through scope prioritization and deferred non-critical deliverables.

### Example B — Reserve Consumption Outpacing Progress
At month 3, CV = −$22,000. The project manager reviews reserve consumption and notes that $18,000 of the $30,000 contingency reserve has been consumed, but only 40% of risk-related work is complete. Reserve analysis shows insufficient coverage for the remaining identified risks. A change request is raised in A12 requesting a $12,000 management reserve release into contingency, with supporting risk documentation from A19.

---

## 18. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.6, Figure 7-11, Figure 7-12, Table 10-1 | Core process definition, I/T/O, EVM formulas |
| PMBOK Guide, Eighth Edition | PMBOK8 | Measurement domain · Finance domain | EVM, cost performance indicators, tailoring |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; updated Last Updated date; full body restored |

---

*Authority: Process-Groups §7.6 · PMBOK8*  
*Owner: Project Manager / Cost Controller*  
*Upstream: A16 cost baseline · Financial system actuals · SKL-04-01*  
*Downstream: A17 cost performance information · A16 forecasts · A12 change requests · SKL-05-02*
