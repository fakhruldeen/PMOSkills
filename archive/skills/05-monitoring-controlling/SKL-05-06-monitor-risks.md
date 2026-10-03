---
skill_id: SKL-05-06
name: Monitor Risks
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.10 · Figure 7-19 · Figure 7-20
performance_domains:
- Risk
- Measurement
focus_area: Monitoring and Controlling
primary_artifact: A17 — Work Performance Information (risk section)
artifacts_updated:
- A19 — Risk Register
- A12 — Change Requests
- A21 — Lessons Learned Register
upstream_prerequisites:
- SKL-05-01
downstream_skills:
- SKL-05-02
file_path: skills/05-monitoring-controlling/SKL-05-06-monitor-risks.md
tests: 6
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-06 — Monitor Risks

**Skill ID:** SKL-05-06  
**Canonical Title:** Monitor Risks  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-06-monitor-risks.md`  
**Authority:** Process Groups: A Practice Guide §7.10 · Figure 7-19 · Figure 7-20  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Monitor Risks is the process of monitoring the implementation of agreed-upon risk response plans, tracking identified risks, identifying and analyzing new risks, and evaluating risk process effectiveness throughout the project. Its key benefit is that it enables project decisions to be based on current information about overall project risk exposure and individual project risks. This process is performed throughout the project.

Risk monitoring is not a passive tracking activity. It actively tests whether the risk management approach remains valid, whether implemented responses are working, and whether new risks have emerged that require immediate identification, analysis, and response.

---

## 2. Scope

This skill covers:
- Monitoring the implementation of risk response plans (from SKL-04-08)
- Tracking the status of identified individual project risks in A19
- Identifying new individual project risks that have emerged
- Analyzing new and changed risks (probability, impact, priority)
- Evaluating the effectiveness of risk management processes
- Performing technical performance analysis against planned targets
- Performing reserve analysis to assess contingency adequacy
- Conducting risk audits
- Updating the risk register, risk report, assumption log, lessons learned
- Raising change requests for corrective or preventive actions

This skill does **not** cover:
- Initial risk identification — SKL-03-10 through SKL-03-12
- Planning risk responses — SKL-03-13
- Implementing risk responses — SKL-04-08
- Approving risk-driven baseline changes — SKL-05-02

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Monitor Risks |
| **Guide Section** | Process Groups §7.10 |
| **Figure** | Figure 7-19 — I/T/O · Figure 7-20 — Data Flow Diagram |
| **Performance Domain** | Uncertainty · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Work performance information · Change requests · Updated risk register and risk report |

**PMI definition (paraphrased):** Monitor Risks monitors risk response implementation, tracks identified risks, identifies and analyzes new risks, and evaluates overall risk process effectiveness throughout the project.

---

## 4. What Monitor Risks Evaluates

Process Groups §7.10 identifies that Monitor Risks determines whether:
- Implemented risk responses are effective
- Level of overall project risk has changed
- Status of identified individual project risks has changed
- New individual project risks have arisen
- Risk management approach is still appropriate
- Project assumptions are still valid
- Risk management policies and procedures are being followed
- Contingency reserves for cost or schedule require modification
- Project strategy is still valid

---

## 5. Roles

### 5.1 Project Manager
Owns overall risk monitoring. Reviews the risk register at each cycle, evaluates overall risk exposure, approves reserve drawdowns within authority, and escalates material risk changes to the sponsor.

### 5.2 Risk Owner
Responsible for monitoring the specific risks assigned to them in A19. Reports on the status of their risk, the effectiveness of implemented responses, and any changes to probability or impact.

### 5.3 Project Team Members
Report emerging risks observed during execution. Validate assumption status. Participate in risk review meetings.

### 5.4 Risk Specialist (if assigned)
Facilitates risk reviews and audits. Supports technical performance analysis. Ensures risk management procedures are being followed.

### 5.5 Sponsor
Receives escalated risk status reports. Approves reserve releases above the project manager's delegated authority. Provides strategic guidance when overall project risk exposure changes materially.

---

## 6. Inputs

Process Groups Figure 7-19 identifies:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Risk management plan** | A14-linked plan | Defines monitoring frequency, roles, thresholds, audit schedule, and reserve rules |
| **Issue log** | A18 | Active issues may indicate that risks have materialized and require status update |
| **Lessons learned register** | A21 | Historical risk patterns that inform current risk monitoring judgment |
| **Risk register** | A19 | The authoritative record of all identified risks, their owners, responses, and current status |
| **Risk report** | A19 risk report | Summary of overall project risk exposure and key individual risks |
| **Work performance data** | Executing outputs | Actual execution data against which risk triggers and technical targets are measured |
| **Work performance reports** | A17 | Integrated performance reports that surface schedule, cost, and quality signals relevant to risk |

---

## 7. Tools and Techniques

Process Groups Figure 7-19 names:

### 7.1 Data Analysis

**Technical performance analysis:**  
Compares actual technical achievements to planned technical targets. Deviations from planned technical performance (e.g., weight, defect rates, throughput, system response time) may signal emerging risk or indicate that implemented risk responses are insufficient.

**Reserve analysis:**  
Compares remaining contingency and management reserves against remaining risk exposure. If reserves are being consumed faster than risks are closing, additional reserve may be needed. If reserves exceed remaining exposure, surplus may be released.

### 7.2 Audits
Risk audits examine and document the effectiveness of risk responses, identify process compliance issues, and evaluate the quality of the risk management process overall. Audits may be conducted by the project manager, internal audit, or an external party. The risk management plan defines the audit schedule and format.

### 7.3 Meetings
Periodic risk review meetings are held to assess the current status of identified risks, review the effectiveness of responses in progress, identify new risks, validate assumptions, and update the risk register. The risk management plan specifies meeting frequency.

---

## 8. Risk Monitoring Rules

### Rule 1 — Risk monitoring is continuous, not periodic-only
Although scheduled risk reviews are required, the project team should report new or changed risks as they are observed during execution, not wait for the next formal cycle.

### Rule 2 — Closed risks must be formally closed in A19
When a risk window has passed or a risk has been successfully resolved, it must be formally closed in the risk register with a date and outcome record. Do not leave stale open risks in A19.

### Rule 3 — Risk owners are accountable for their assigned risks
Monitor Risks does not mean the project manager monitors all risks alone. Risk owners report on their risks and are accountable for the effectiveness of their assigned responses.

### Rule 4 — New risks identified during monitoring must go through full assessment
A risk identified for the first time during monitoring is a new individual risk. It must be assessed for probability, impact, and priority before being added to A19 and before a response is planned.

### Rule 5 — Reserve analysis must be performed at each cycle
Contingency and management reserve balances must be reviewed at each risk monitoring cycle against the current exposure. Reserve adequacy must not be assumed.

---

## 9. Step-by-Step Instructions

### Step 1 — Review Work Performance Data and Reports
Review A17 work performance reports and raw execution data from SKL-04-01 for signals that risks are materializing or that new risk conditions are emerging. Flag technical deviations, cost variances, schedule delays, quality anomalies, and issue log entries for risk relevance.

### Step 2 — Update Risk Status in A19
For each open risk in A19, update:
- Current probability and impact (have they changed?)
- Current priority (re-score if parameters have changed)
- Response implementation status (planned, in progress, complete)
- Response effectiveness (is the response working?)
- Trigger status (have any triggers been observed?)
- Any residual or secondary risks

Close risks whose window has passed or whose triggers can no longer fire.

### Step 3 — Identify New Risks
Gather new risk submissions from the project team, stakeholders, and execution observations. For each new risk, document:
- Risk description (cause → event → effect format)
- Owner
- Probability and impact assessment
- Priority
- Planned response

Add to A19 and include in the risk report.

### Step 4 — Perform Technical Performance Analysis
Compare actual technical achievements against planned targets. Identify deviations. Determine whether deviations are within acceptable tolerances or represent emerging risk signals requiring response.

### Step 5 — Perform Reserve Analysis
Calculate remaining contingency reserve. Compare against total remaining risk exposure (sum of probability × impact for all open risks). Determine whether reserves are sufficient, excessive, or insufficient. Flag for action if reserve coverage is below threshold.

### Step 6 — Conduct Risk Audits (per schedule)
When scheduled, conduct a risk audit. Evaluate:
- Are risk responses being implemented as planned?
- Are risk owners fulfilling their responsibilities?
- Are risk management procedures being followed?
- Is the overall risk management approach still appropriate?

Document findings and corrective actions.

### Step 7 — Evaluate Overall Risk Exposure
Update the overall project risk level (e.g., low/medium/high/critical). Determine whether overall exposure has changed since the last cycle. If the project strategy is no longer valid given current risk exposure, escalate to the sponsor.

### Step 8 — Update Documents
Update A19 (risk register and risk report), A21 (lessons learned), A18 (issue log) for any materialized risks, and assumption log for any invalidated assumptions.

### Step 9 — Raise Change Requests
For any risk-driven corrective or preventive actions that require scope, schedule, cost, or baseline changes, raise A12 and route to SKL-05-02.

### Step 10 — Report Risk Status
Include current overall risk exposure, key risk changes, reserve status, and any significant new risks in A17. Escalate material changes to the sponsor.

---

## 10. Outputs

Process Groups Figure 7-19 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Work performance information** | A17 | Current risk status, overall exposure level, reserve status, key risk changes |
| **Change requests** | A12 | Corrective actions, preventive actions, contingency plan activations requiring baseline change |
| **Project management plan updates** | Any component | Updates driven by risk-triggered changes affecting plan components |
| **Project document updates** | A19 risk register · A19 risk report · A21 lessons learned · A18 issue log · Assumption log | Reflect current risk status, new risks, closed risks, and assumption validity |
| **Organizational process assets updates** | OPA / A05 | Risk templates, checklists, and historical risk data updated from current cycle learning |

---

## 11. Decision Logic

| Condition | Action |
|-----------|--------|
| Risk status unchanged, response on track | Update A19, report status, no change request needed |
| Risk probability or impact has increased | Re-score priority; evaluate enhanced response; raise A12 if baseline affected |
| Implemented response is not effective | Develop alternative response; update A19; raise A12 if baseline change needed |
| Risk window has passed without trigger | Formally close risk in A19 with outcome record |
| New risk identified | Assess, assign owner, plan response, add to A19 |
| Assumption invalidated | Update assumption log; assess risk implications; raise A12 if baseline affected |
| Contingency reserve insufficient for current exposure | Reserve analysis; raise A12 for reserve replenishment or baseline adjustment |
| Overall project risk level materially changed | Update risk report; escalate to sponsor; evaluate strategy validity |

---

## 12. Agile and Hybrid Adaptation

| Predictive Practice | Agile Equivalent |
|---------------------|------------------|
| Periodic risk register review | Risk review at each sprint planning / retrospective |
| Formal risk audit | Retrospective risk effectiveness discussion |
| Reserve analysis | Buffer review against remaining backlog and velocity |
| Technical performance analysis | Definition of Done compliance rate, defect density per sprint |
| Risk report to sponsor | Risk section in iteration review or release planning |

In adaptive contexts, risk monitoring is embedded in the iteration cadence. Retrospectives surface both process risks and product risks. Risk register may be maintained as a backlog item category or a dedicated risk log.

---

## 13. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | Informal risk review at status meetings; simplified A19; reserve tracked as a single contingency line |
| **Large or high-risk project** | Formal risk register with structured review cycles; dedicated risk owner roles; quantitative reserve analysis; periodic external audits |
| **Adaptive project** | Risk monitoring embedded in iteration cadence; retrospectives capture risk learning |
| **Regulated or safety-critical project** | Risk audits mandatory; technical performance analysis against safety thresholds; formal risk reporting to governance bodies |

---

## 14. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Risk register updated only at formal cycles, not continuously | New risks missed between cycles | Rule 1: Risk monitoring is continuous |
| Closed risks not formally closed in A19 | Stale register; misleading overall exposure | Rule 2: Formally close risks with outcome record |
| Risk owners not reporting | Project manager unaware of response failures | Rule 3: Risk owner accountability enforced at each cycle |
| Reserve analysis skipped | Reserve exhausted without warning | Rule 5: Reserve analysis at every cycle |
| New risks added without assessment | Unscored risks distort overall exposure picture | Rule 4: New risks go through full assessment |

---

## 15. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | A19 updated this cycle with current status for all open risks | A19 shows updated date and status per risk | Last update date is more than one cycle old |
| T-2 | Reserve balance calculated and compared to remaining exposure | Reserve analysis documented in A17 or A16 | No reserve analysis evidence |
| T-3 | New risks identified during monitoring formally assessed and entered | A19 shows new risk with probability, impact, owner, response | New risks mentioned verbally but not in A19 |
| T-4 | Closed risks formally closed with outcome record | A19 shows closure date and outcome for resolved risks | Risks closed by deletion only, no record |
| T-5 | Risk audit conducted per schedule | Audit findings documented | No audit record for the period |
| T-6 | Change requests raised for risk-driven corrective actions affecting baselines | A12 shows CR for risk-triggered baseline changes | Baseline adjusted without A12 record |

---

## 16. Dependency Chain

```text
UPSTREAM
SKL-03-10 through SKL-03-13 — Identify, Analyze, and Plan Risk Responses
SKL-04-08 — Implement Risk Responses (produces the responses being monitored)
A19 — Risk register and risk report
A17 — Work performance reports (risk signal inputs)

CURRENT SKILL
SKL-05-06 — Monitor Risks

DOWNSTREAM
A19 — Updated risk register and risk report
A17 — Work performance information (risk section)
A12 — Change requests for risk-driven corrective actions
SKL-05-02 — Perform Integrated Change Control
A21 — Lessons learned updated with risk process learning
A05 OPA — Updated with risk templates, checklists, historical data
```

---

## 17. Examples

### Example A — Implemented Response Failing
At week 10, the risk owner for RISK-017 (vendor delivery delay) reports that the mitigation response (alternate vendor qualification) has stalled because the alternate vendor failed the technical assessment. The project manager elevates the risk priority in A19, activates the contingency plan (order from primary vendor with expedited shipping at additional cost), and raises A12 for the cost impact of $6,200. A new residual risk (expedited shipping schedule uncertainty) is added to A19.

### Example B — Reserve Insufficient for Remaining Exposure
Reserve analysis at month 4 shows contingency reserve balance of $8,500 against a remaining risk-weighted exposure of $22,000 across open risks. The project manager raises A12 requesting a management reserve release of $15,000 into contingency. The risk report is updated to reflect the reserve gap and the change request is routed to the sponsor for approval.

---

## 18. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.10, Figure 7-19, Figure 7-20 | Core process definition, I/T/O, data flow, monitoring criteria |
| PMBOK Guide, Eighth Edition | PMBOK8 | Uncertainty domain · Measurement domain | Risk monitoring principles, tailoring |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; full body restored |

---

*Authority: Process-Groups §7.10 · PMBOK8*  
*Owner: Project Manager / Risk Owner*  
*Upstream: A19 risk register · SKL-04-08 risk responses · A17 performance reports*  
*Downstream: A19 updated · A17 risk information · A12 change requests · SKL-05-02*
