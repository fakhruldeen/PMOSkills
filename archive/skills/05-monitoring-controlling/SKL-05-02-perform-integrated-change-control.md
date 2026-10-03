---
skill_id: SKL-05-02
name: Perform Integrated Change Control
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.2 · Figure 7-3 · Figure 7-4
performance_domains:
- Governance
- Uncertainty
- Planning
focus_area: Monitoring and Controlling
primary_artifact: A12 — Change Log (decisions)
artifacts_updated:
- A08 — Scope Baseline
- A15 — Schedule Baseline
- A16 — Cost Baseline
upstream_prerequisites:
- SKL-05-01
downstream_skills:
- SKL-04-01
file_path: skills/05-monitoring-controlling/SKL-05-02-perform-integrated-change-control.md
tests: 5
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-02 — Perform Integrated Change Control

**Skill ID:** SKL-05-02  
**Canonical Title:** Perform Integrated Change Control  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-02-perform-integrated-change-control.md`  
**Authority:** Process Groups: A Practice Guide §7.2 · Figure 7-3 · Figure 7-4  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Perform Integrated Change Control is the process of reviewing all change requests, approving changes and managing changes to deliverables, project documents, and the project management plan, and communicating the decisions. Its key benefit is that it allows documented changes within the project to be considered in an integrated manner while addressing overall project risk, which often arises from changes made without consideration of the overall project objectives or plans.

This process is the governance gateway for every change request. No change to any baseline — scope, schedule, cost — may be implemented without passing through this process.

---

## 2. Scope

This skill covers:
- Receiving change requests from any project source
- Evaluating the impact of each change request on scope, schedule, cost, quality, resources, risk, and stakeholders
- Deciding to approve, defer, or reject each change request
- Communicating decisions to affected parties
- Updating A12 with decision records
- Updating baselines and project management plan components for approved changes
- Coordinating the Change Control Board (CCB) when one is chartered
- Ensuring no change is implemented before formal approval

This skill does **not** cover:
- Identifying the need for changes — that emerges from other monitoring and control processes
- Implementing approved changes — that is SKL-04-01 (Direct and Manage Project Work)
- Generating change requests from risk response monitoring — that is SKL-05-06

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Perform Integrated Change Control |
| **Guide Section** | Process Groups §7.2 |
| **Figure** | Figure 7-3 — I/T/O · Figure 7-4 — Data Flow Diagram |
| **Performance Domain** | Governance · Uncertainty · Planning |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Approved change requests · Updated change log · Updated plan components |

**PMI definition (paraphrased):** Perform Integrated Change Control reviews all change requests and determines their resolution. Changes are approved, deferred, or rejected. All decisions are documented. Only approved changes are implemented.

---

## 4. Core Principle

All change to baselined project elements requires formal change control. This is not a bureaucratic preference — it is the mechanism that preserves the integrity of the project management plan and prevents scope creep, unauthorized cost growth, and uncontrolled schedule drift. Before baselines are set, changes do not formally require this process. After baselines are established, this process is mandatory for any change that affects them.

---

## 5. Roles

### 5.1 Project Manager
The project manager has ultimate responsibility for this process. They evaluate change impacts, prepare recommendations, chair CCB meetings or serve as decision authority when no CCB is chartered, communicate decisions, and ensure approved changes are reflected in updated plan components.

### 5.2 Change Control Board (CCB)
A formally chartered group responsible for reviewing, evaluating, approving, deferring, or rejecting changes and for recording and communicating decisions. The CCB is used when required by the project's governance structure. When a CCB is not chartered, the project manager or sponsor serves as the decision authority.

### 5.3 Change Requestor
Any stakeholder may initiate a change request. Verbal requests must be documented and entered into the change management or configuration management system before evaluation.

### 5.4 Sponsor
The sponsor approves or escalates change requests that exceed the project manager's or CCB's delegated authority, particularly those involving budget increases, scope expansions, or strategic direction changes.

### 5.5 Project Team and Functional Leads
Provide technical impact assessments — what the change would mean for schedule, cost, resources, quality, and risk.

---

## 6. Inputs

Process Groups Figure 7-3 identifies the following inputs:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Change management plan** | A14-linked plan | Defines the process, authority levels, CCB structure, and escalation paths |
| **Configuration management plan** | A14-linked plan | Defines which artifacts are under configuration control and require formal change control |
| **Scope baseline** | A08 scope baseline | The approved scope against which change impacts are evaluated |
| **Schedule baseline** | A15 schedule baseline | The approved schedule against which time impacts are assessed |
| **Cost baseline** | A16 cost baseline | The approved budget against which cost impacts are assessed |
| **Basis of estimates** | Planning records | Used to assess reasonableness of impact estimates in change requests |
| **Change log** | A12 | Current record of all change requests and their status |
| **Requirements traceability matrix** | Scope documents | Used to evaluate scope and requirements impact of proposed changes |
| **Risk report** | A19 summary | Provides current risk context for evaluating change risk implications |
| **Work performance reports** | A17 | Provides performance context that may explain why a change is being requested |
| **Change requests** | Inbound from any process | The items requiring evaluation and decision |
| **Enterprise environmental factors** | Organizational context | Legal requirements, contract terms, regulatory constraints |
| **Organizational process assets** | OPA / A05 | Change control procedures, historical decision records, templates |

---

## 7. Tools and Techniques

Process Groups Figure 7-3 names the following:

### 7.1 Expert Judgment
Used to assess the technical, commercial, contractual, and schedule implications of proposed changes.

### 7.2 Change Control Tools
Project management information systems, configuration management tools, and document control systems used to log, route, track, and close change requests.

### 7.3 Data Analysis
- **Alternatives analysis:** Evaluates different ways to satisfy the need driving the change request
- **Cost-benefit analysis:** Compares the benefit of approving the change against its cost and risk

### 7.4 Decision Making
- **Voting:** Used in CCB or group settings
- **Autocratic decision making:** Used when a single authority must decide quickly
- **Multicriteria decision analysis:** Used when multiple dimensions — schedule impact, cost, risk, strategic alignment — must be weighted together

### 7.5 Meetings
CCB meetings, change review meetings, and impact assessment sessions where requestors, evaluators, and decision authorities convene.

---

## 8. Integrated Change Control Rules

### Rule 1 — No baseline change without approval
Any change that modifies the scope baseline, schedule baseline, or cost baseline must be formally approved before implementation. Implementing changes without approval is a governance failure.

### Rule 2 — All change requests must be documented
Verbal requests are not change requests. Every request must be written, logged in A12, and given a unique ID and status before evaluation begins.

### Rule 3 — Every change request must be decided
Approved, deferred, or rejected — no change request should remain indefinitely in review. An undecided request is an unresolved governance item.

### Rule 4 — Decisions must be communicated
Decisions are not complete until affected parties are notified. The decision date, outcome, rationale, and any conditions must be recorded in A12 and communicated.

### Rule 5 — Approved changes trigger plan updates
Every approved change that affects baselines or planning components must result in actual updates to those components. Approval without plan update creates inconsistency.

### Rule 6 — Approved changes flow into execution
Once approved, the implementing process (typically SKL-04-01) receives the approved change request for execution. Execution without prior approval is not permitted.

---

## 9. Step-by-Step Instructions

### Step 1 — Receive and Log the Change Request
Receive the change request from the originating source. Confirm it is documented in writing. Assign it a unique ID in A12. Record the requestor, date, description, and initial status of "Submitted."

### Step 2 — Validate the Request
Confirm the request contains sufficient information to evaluate. For verbal or vague requests, return to the requestor for documented clarification before proceeding.

### Step 3 — Assess Impact
Evaluate the proposed change across all affected dimensions:
- **Scope:** Does it add, remove, or modify deliverables or requirements?
- **Schedule:** What activities, milestones, or the critical path are affected?
- **Cost:** What is the estimated cost delta, including resource, procurement, and reserve implications?
- **Quality:** Does the change affect quality requirements or acceptance criteria?
- **Risk:** Does it introduce new risks, close existing ones, or affect existing responses?
- **Resources:** Does it require different or additional people, equipment, or materials?
- **Stakeholders:** Does it affect stakeholder agreements, contracts, or expectations?

Document the impact analysis in A12 or a supporting impact assessment.

### Step 4 — Present to Decision Authority
Present the request and impact analysis to the CCB, project manager, or sponsor per the change management plan. Provide options when alternative approaches exist.

### Step 5 — Decide
The decision authority approves, defers, or rejects the request. Record the decision, rationale, decision date, and any conditions or constraints in A12.

### Step 6 — Communicate the Decision
Notify the requestor and all affected stakeholders of the decision. For approved changes, notify the teams responsible for implementation.

### Step 7 — Update Baselines and Plan Components
For approved changes, update the relevant baselines and plan components — scope baseline, schedule baseline, cost baseline, requirements traceability matrix, resource plan, risk register, or other affected documents. Changes become the new baseline for future performance measurement.

### Step 8 — Release to Execution
Route approved change requests to the executing processes. SKL-04-01 receives approved changes for implementation.

### Step 9 — Track and Close
Monitor the implementation of approved changes through the monitoring and control cycle. When implementation is confirmed complete, close the change request record in A12 with the implementation date and verification notes.

---

## 10. Outputs

Process Groups Figure 7-3 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Approved change requests** | Released to execution | Formally approved changes ready for implementation |
| **Project management plan updates** | Any component | Updated baselines and plan components reflecting approved changes |
| **Project document updates** | A12 | Updated change log with decisions, rationale, and status for all reviewed requests |

---

## 11. Decision Matrix

| Change Type | Decision Authority | A12 Record Required |
|-------------|-------------------|--------------------|
| Within project manager authority and no baseline impact | Project manager | Yes |
| Affects scope, schedule, or cost baseline | CCB or project manager per plan | Yes |
| Exceeds CCB or project manager authority | Sponsor or governance | Yes |
| Emergency change (expedited) | Designated emergency authority | Yes — retroactive A12 within defined period |
| Deferred change | CCB or PM with defined re-review date | Yes |
| Rejected change | Decision authority | Yes — with rationale |

---

## 12. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | One decision authority; use a simple change log table in A12; no formal CCB needed |
| **Large or regulated project** | Formal CCB with defined membership, quorum, and meeting cadence; tiered authority levels; full audit trail |
| **Adaptive project** | Backlog changes managed through iteration planning; only changes to the project management plan or contracts require formal change control |
| **Contract-heavy project** | Contract change clauses define what requires formal approval; integrate contract change control with project change control |

---

## 13. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Changes implemented before approval | Unauthorized scope, cost, or schedule growth | Rule 1: No baseline change without approval |
| Change requests remain undecided | Backlog creates confusion and delay | Rule 3: Every request must be decided |
| Decisions not communicated | Implementing team acts on wrong information | Rule 4: Decisions must be communicated |
| Approved change not reflected in baseline | Future performance measurement is against wrong baseline | Rule 5: Approved changes trigger plan updates |
| Change log not maintained | No audit trail of decisions | Mandatory A12 maintenance for every request |

---

## 14. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | Every change request has a unique ID and A12 entry | A12 shows complete registry with no gaps | Change requests referenced verbally with no A12 record |
| T-2 | No change request remains in "Submitted" beyond defined review period | A12 shows decision within defined timeline | Requests pending decision beyond threshold |
| T-3 | All approved changes show baseline update confirmation | A12 has implementation and plan update confirmation | Approved change with no corresponding plan update |
| T-4 | Rejected and deferred requests show rationale | A12 records rationale for non-approval | Decision recorded without rationale |
| T-5 | No baseline changes implemented without an approved change request | A12 and baseline versions are consistent | Baseline version changed without matching A12 approval |

---

## 15. Dependency Chain

```text
UPSTREAM
All control processes (SKL-05-01, 03–09) — source of change requests
All executing processes (SKL-04-01 through 04-09) — may also generate change requests
A17 — Work performance reports (context for evaluation)
A12 — Current change log

CURRENT SKILL
SKL-05-02 — Perform Integrated Change Control

DOWNSTREAM
SKL-04-01 — Direct and Manage Project Work (receives approved changes for execution)
All baselines — updated with approved changes
A12 — Updated with all decisions
Stakeholders — receive decision communications
```

---

## 16. Example

### Example A — Scope Addition Request
A stakeholder requests the addition of a reporting module that was not in the approved scope baseline. The change request is logged in A12 with ID CR-047. Impact analysis shows a 15-day schedule extension and $18,000 cost increase. The CCB reviews and approves the request with conditions: schedule extended by 15 days, cost baseline increased by $18,000. The scope baseline is updated, the schedule and cost baselines are revised, and the approved change request is sent to SKL-04-01 for implementation. A12 is updated with the decision, rationale, conditions, and baseline update confirmation.

### Example B — Emergency Corrective Action
During execution, a critical system component fails, requiring immediate procurement of a replacement part not in the plan. The project manager exercises emergency change authority, approves the $4,200 expenditure, and initiates procurement. A12 is updated within 24 hours with the emergency decision record, rationale, cost impact, and risk implications. The cost baseline change is routed through the normal retrospective approval process at the next CCB meeting.

---

## 17. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.2, Figure 7-3, Figure 7-4 | Core process definition, I/T/O, data flow |
| PMBOK Guide, Eighth Edition | PMBOK8 | Governance domain · Uncertainty domain | Governance and change integration |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; updated Last Updated date |

---

*Authority: Process-Groups §7.2 · PMBOK8*  
*Owner: Project Manager / CCB*  
*Gateway Process: All changes to baselines pass through here*  
*Downstream: SKL-04-01 receives approved changes; all baseline owners update their records*
