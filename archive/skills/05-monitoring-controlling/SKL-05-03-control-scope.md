---
skill_id: SKL-05-03
name: Control Scope
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.4 · Figure 7-7 · Figure 7-8
performance_domains:
- Scope
- Measurement
focus_area: Monitoring and Controlling
primary_artifact: A17 — Work Performance Information (scope section)
artifacts_updated:
- A08 — Scope Baseline
- A12 — Change Requests
- A18 — Issue Log
- A21 — Lessons Learned Register
upstream_prerequisites:
- SKL-05-01
downstream_skills:
- SKL-05-02
file_path: skills/05-monitoring-controlling/SKL-05-03-control-scope.md
tests: 5
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-03 — Control Scope

**Skill ID:** SKL-05-03  
**Canonical Title:** Control Scope  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-03-control-scope.md`  
**Authority:** Process Groups: A Practice Guide §7.4 · Figure 7-7 · Figure 7-8  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Control Scope is the process of monitoring the status of the project and product scope and managing changes to the scope baseline. Its key benefit is that the scope baseline is maintained throughout the project. Controlling scope ensures that all requested changes and recommended corrective or preventive actions are processed through the Perform Integrated Change Control process.

This skill exists to prevent scope creep — the uncontrolled expansion of product or project scope without adjustments to time, cost, and resources — and to maintain a reliable, agreed-upon scope baseline as the foundation for all other project control.

---

## 2. Scope

This skill covers:
- Monitoring the status of project scope and product scope relative to the approved baseline
- Detecting unauthorized or unapproved scope changes (scope creep)
- Performing variance analysis and trend analysis on scope-related performance
- Raising change requests when scope deviation requires baseline adjustment
- Updating scope, schedule, and cost baselines when scope changes are approved
- Updating requirements documentation and requirements traceability matrix
- Integrating with Validate Scope (formal acceptance) and Perform Integrated Change Control

This skill does **not** cover:
- The initial definition of scope — that is SKL-03-02 through SKL-03-04
- The formal customer acceptance of deliverables — that is Validate Scope (part of broader Pack 05 context)
- Approving changes to scope — that is SKL-05-02

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Control Scope |
| **Guide Section** | Process Groups §7.4 |
| **Figure** | Figure 7-7 — I/T/O · Figure 7-8 — Data Flow Diagram |
| **Performance Domain** | Delivery · Measurement · Governance |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Scope baseline maintained · Scope creep prevented · Change requests for deviations |

**PMI definition (paraphrased):** Control Scope monitors project and product scope status and manages changes to the scope baseline. Scope creep — uncontrolled scope expansion without corresponding time, cost, and resource adjustment — is the primary failure mode this process prevents.

---

## 4. Scope Creep Defined

Scope creep is the uncontrolled expansion to product or project scope without adjustments to time, cost, and resources. It occurs when new work is added, deliverables are extended, or requirements are elaborated without a formal change request and corresponding baseline update. Even well-intentioned additions are scope creep if they bypass the change control process.

Controlling scope does not mean scope cannot change. It means every change must be explicit, evaluated, approved, and reflected in updated baselines.

---

## 5. Roles

### 5.1 Project Manager
The project manager monitors scope performance, detects deviations, determines whether deviations are approved or unauthorized, and raises change requests for any required baseline adjustments.

### 5.2 Business Analyst or Scope Owner
Provides detailed knowledge of agreed requirements and scope boundaries. Confirms whether observed work is within or outside baseline scope. Maintains requirements documentation and traceability.

### 5.3 Team Members
Report actual scope delivery progress. Raise alerts when asked to perform work that appears outside agreed scope.

### 5.4 Stakeholders and Customer
Are the source of scope change requests. Must route all scope additions or changes through the change request process — informal requests are not valid scope direction.

### 5.5 Change Control Board
Approves or rejects scope change requests that affect the scope baseline through SKL-05-02.

---

## 6. Inputs

Process Groups Figure 7-7 identifies:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Scope management plan** | A14-linked plan | Defines how scope will be controlled, how changes are managed, and what thresholds apply |
| **Requirements management plan** | A14-linked plan | Defines how requirements changes are tracked and managed |
| **Change management plan** | A14-linked plan | Defines how change requests related to scope are routed and decided |
| **Configuration management plan** | A14-linked plan | Defines which scope artifacts are under configuration control |
| **Scope baseline** | A08 | The approved project scope statement, WBS, and WBS dictionary — the reference for all control |
| **Performance measurement baseline** | A14 | Integrated baseline used to assess performance |
| **Lessons learned register** | A21 | Historical scope control lessons informing current monitoring |
| **Requirements documentation** | Scope documents | Detailed requirements against which scope delivery is assessed |
| **Requirements traceability matrix** | Scope documents | Links requirements to deliverables — used to track scope coverage |
| **Work performance data** | Executing process outputs | Raw data on which deliverables are complete, in progress, or not started |
| **Organizational process assets** | OPA / A05 | Monitoring policies, scope change thresholds, historical records |

---

## 7. Tools and Techniques

Process Groups Figure 7-7 names:

### 7.1 Variance Analysis
Compares actual scope delivery against the scope baseline. Identifies which elements of scope are complete, behind, or not started. Determines whether deviations are within tolerance or require action.

### 7.2 Trend Analysis
Examines scope performance over time. Identifies patterns — are scope deviations accumulating? Are scope change requests increasing? Is the team consistently delivering within scope or consistently drifting?

---

## 8. Scope Control Rules

### Rule 1 — The scope baseline is the authority
No work is in scope unless it is in the approved scope baseline (scope statement, WBS, or WBS dictionary). No stakeholder instruction, verbal agreement, or team assumption overrides the baseline.

### Rule 2 — Unauthorized scope additions are scope creep
If work is performed or included that is not in the baseline and has no approved change request, it is scope creep, regardless of intent or benefit.

### Rule 3 — Scope reductions also require change control
Removing scope without a change request is also a baseline violation. Reductions affect cost, schedule, and stakeholder expectations and must be formally decided.

### Rule 4 — Change requests are the only valid path to scope change
All additions, removals, or modifications to approved scope must go through A12 and SKL-05-02. There is no other acceptable path.

### Rule 5 — Requirements traceability must reflect current scope
The requirements traceability matrix must be updated whenever scope changes are approved. An outdated matrix creates false confidence in scope coverage.

---

## 9. Step-by-Step Instructions

### Step 1 — Collect Scope Performance Data
Gather current information on which WBS work packages and deliverables are complete, in progress, or not started. Confirm data covers both project scope (work performed) and product scope (features or characteristics delivered).

### Step 2 — Compare Against Scope Baseline
Review the current status against the approved scope statement, WBS, and WBS dictionary. Identify:
- Work performed that is not in the baseline
- Deliverables expanded beyond their baseline definition
- Requirements added informally without a change request
- Scope elements not yet started that are approaching their planned start or finish dates

### Step 3 — Perform Variance Analysis
For any identified deviation, determine:
- Is the deviation within the defined scope tolerance or threshold?
- Was the deviation the result of an approved change request?
- If not, is this scope creep?

Document variance findings in performance reporting.

### Step 4 — Perform Trend Analysis
Look at scope variance over multiple monitoring cycles. Are deviations growing? Are new scope items being introduced at an increasing rate? Does the pattern suggest systemic scope boundary problems?

### Step 5 — Raise Change Requests for Deviations
For any scope deviation that:
- Requires additional time, cost, or resources
- Represents unauthorized scope addition or removal
- Requires a formal baseline revision

Raise a change request through A12 and route to SKL-05-02 for decision.

### Step 6 — Update Documents and Baselines
For approved scope changes, update:
- The scope baseline (scope statement, WBS, WBS dictionary)
- The schedule baseline if new activities are required
- The cost baseline if budget is affected
- The performance measurement baseline
- Requirements documentation and requirements traceability matrix
- Lessons learned register

### Step 7 — Report Scope Status
Include scope variance and trend findings in the A17 work performance report. Communicate status to stakeholders with relevant visibility into scope adherence.

---

## 10. Outputs

Process Groups Figure 7-7 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Work performance information** | Fed into A17 | Scope variance analysis results, trend findings, scope adherence status |
| **Change requests** | A12 | Requests for scope baseline adjustment, corrective or preventive actions |
| **Project management plan updates** | Scope baseline, schedule baseline, cost baseline, performance measurement baseline | Updated to reflect approved scope changes |
| **Project document updates** | A21, requirements documentation, requirements traceability matrix | Lessons learned, updated requirements, updated traceability |

---

## 11. Decision Logic

| Condition | Action |
|-----------|--------|
| Work performed matches approved scope baseline | No action; document as conforming |
| Minor deviation within defined threshold | Monitor; include in trend analysis; no change request required |
| Work performed outside baseline without approval | Classify as scope creep; raise A12 change request; assess cost and schedule impact |
| Stakeholder requests scope addition | Log as change request in A12; route through SKL-05-02 |
| Scope reduction identified as beneficial | Raise A12 change request for formal removal; update baselines if approved |
| Trend shows accumulating scope drift | Escalate; conduct scope boundary reconfirmation with stakeholders |

---

## 12. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | Use a simple WBS checklist and informal scope variance review at each status meeting; still require written change requests for any baseline addition |
| **Large or regulated project** | Use formal configuration management of scope artifacts; strict threshold definitions; full audit trail of all scope changes |
| **Adaptive project** | Scope is defined per iteration via backlog; change control applies to project-level scope and contracts, not individual backlog items |
| **Contract-based project** | Scope change control is governed by contract terms; contractual scope changes have legal implications and must follow both project and contract processes |

---

## 13. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Scope baseline not clearly defined | Cannot measure deviation — everything is ambiguous | Ensure A08 scope baseline is complete before monitoring begins |
| Team adds features without change request | Scope creep erodes schedule and cost reserves | Rule 2: Unauthorized additions are creep; enforce via A12 |
| Requirements traceability not updated | Cannot confirm whether approved scope is fully covered | Mandatory RTM update at each scope baseline change |
| Change requests approved but baseline not updated | Future performance measurement is against wrong baseline | Rule: Approved changes trigger baseline updates |

---

## 14. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | All completed work maps to approved scope baseline entries | WBS coverage is 100% for completed work | Work items exist with no WBS reference |
| T-2 | Any work outside baseline has an approved change request | A12 shows approved CR for every out-of-baseline item | Work performed without matching CR |
| T-3 | Requirements traceability matrix is current | RTM reflects latest approved scope baseline | RTM not updated after a scope change |
| T-4 | Scope variance trends documented this cycle | A17 shows scope variance trend analysis | Scope section absent from performance report |
| T-5 | Scope baseline version is current | Scope baseline version matches latest approved change | Baseline shows a prior version after an approved change |

---

## 15. Dependency Chain

```text
UPSTREAM
SKL-03-02 through SKL-03-04 — Define scope, create WBS, define activities
A08 — Approved scope baseline
SKL-04-01 — Direct and Manage Project Work (source of work performance data)
A17 — Work performance reports (context)

CURRENT SKILL
SKL-05-03 — Control Scope

DOWNSTREAM
A12 — Change requests for scope deviations
SKL-05-02 — Perform Integrated Change Control (receives scope change requests)
A08 — Updated scope baseline (after approved changes)
A17 — Receives scope performance information for reporting
A21 — Updated lessons learned
Requirements documentation and RTM — Updated to reflect changes
```

---

## 16. Example

### Example A — Scope Creep Detection
During a monitoring cycle, the project manager reviews the completed deliverables list and finds that the development team added an export-to-PDF feature not in the approved WBS. The feature consumed 12 hours of work. A scope creep determination is made. A change request is raised in A12 requesting formal inclusion of the feature, with cost and schedule impact documented. The CCB reviews and approves the retroactive scope addition with a $900 cost baseline adjustment. The WBS, RTM, and scope statement are updated.

### Example B — Legitimate Scope Change
A stakeholder formally requests the removal of a reporting module that is no longer needed due to a regulatory change. The request is logged as CR-061 in A12. Impact analysis shows a 5-day schedule reduction and a $6,000 cost saving. The CCB approves the removal. The scope baseline, schedule baseline, cost baseline, WBS, and RTM are all updated. The change is communicated to the development team, and the previously allocated work is removed from the schedule.

---

## 17. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.4, Figure 7-7, Figure 7-8 | Core process definition, I/T/O, data flow |
| PMBOK Guide, Eighth Edition | PMBOK8 | Delivery domain · Measurement domain | Scope performance and baseline integrity |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; updated Last Updated date; full body restored |

---

*Authority: Process-Groups §7.4 · PMBOK8*  
*Owner: Project Manager*  
*Gateway: All scope deviations requiring baseline change route through SKL-05-02*  
*Upstream: A08 scope baseline · SKL-04-01 work performance data*  
*Downstream: A12 change requests · A08 updated baseline · A17 reporting*
