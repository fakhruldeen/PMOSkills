---
skill_id: SKL-06-02
name: Conduct Final Performance Review
pack: 06 — Closing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Guide §2.4.2 · §2.3.2 · §2.7.2 (closing performance synthesis)
performance_domains:
- Measurement
- Governance
focus_area: Closing
primary_artifact: A17 — Final Performance Report
artifacts_updated:
- A27 — Closure Record (performance summary section)
upstream_prerequisites:
- SKL-06-01
downstream_skills:
- SKL-06-03
file_path: skills/06-closing/SKL-06-02-conduct-final-performance-review.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-06-02 — Conduct Final Performance Review

**Skill ID:** SKL-06-02  
**Pack:** 06 — Closing  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Authority:** PMI-derived  
**Primary Reference:** Process-Groups §8.1 · PMBOK 8 — Close Project or Phase · EVM reference  
**Secondary References:** Artifacts-V-1.1.md (A17 — Project Performance Report)  
**Lifecycle Stage:** Closing  
**Performance Domains:** Delivery · Measurement · Governance  
**PMBOK 8 Principles Applied:** Stewardship · Value · Quality  

---

## Purpose

Conduct a structured, final analysis of project performance across all baseline dimensions — scope, schedule, cost, quality, risk, and stakeholder satisfaction — to produce the Final Report and determine whether the project met its objectives. This skill supports organizational learning, governance accountability, and historical data archiving.

---

## Scope

| In Scope | Out of Scope |
|---|---|
| Final scope performance (planned vs. delivered) | Benefits realization measurement (post-project) |
| Final schedule performance (SPI, critical path actuals) | Operational performance post-transition |
| Final cost performance (CPI, EAC, VAC, EVM summary) | Portfolio-level performance reporting |
| Final quality results vs. quality objectives | |
| Final risk outcome summary | |
| Stakeholder satisfaction assessment | |
| Lessons learned summary input | |

---

## Trigger Conditions

Activate this skill when:
- All project work is substantially complete and deliverables have been accepted
- SKL-06-01 (Close Project or Phase) is being executed
- Sponsor or PMO requests a formal project performance review before closure sign-off
- Phase closure gate requires performance evidence before phase progression

---

## Inputs

| Input | Source | Notes |
|---|---|---|
| Project Management Plan (all components) | A06 | Baselines for comparison |
| Scope Baseline | A06 §2 | Planned scope for comparison |
| Schedule Baseline | A06 §3 | Planned schedule for comparison |
| Cost Baseline | A06 §4 | Planned budget for comparison |
| Quality Management Plan | A06 §6 | Quality objectives and metrics |
| Work Performance Data | Executing processes | Raw performance data collected |
| Quality Control Measurements | A30 | Actual quality results |
| Quality Reports | A30 | Quality trend summary |
| Risk Register | A19 | Final risk outcomes |
| Risk Report | A19 | Final overall risk summary |
| Issue Log | A18 | Final issue resolution status |
| Change Log | A12 | Change history and impact |
| Lessons Learned Register | A21 | Draft inputs for performance narrative |
| Accepted Deliverables | Validate Scope output | Confirmed deliverable list |
| Procurement Documentation | A31 | Final procurement outcomes |
| Agreements | Procurement | Final contract performance |
| Business Case | A02 | Original justification for comparison |
| Benefits Management Plan | Sponsor/PMO | Benefits expectations vs. delivery |

---

## Tools and Techniques

| Tool / Technique | Application |
|---|---|
| Data Analysis — Document Analysis | Review all project documents for completeness and accuracy |
| Data Analysis — Variance Analysis | Compare actual scope, schedule, cost, quality vs. baselines |
| Data Analysis — Trend Analysis | Identify performance trends across the project lifecycle |
| Data Analysis — Regression Analysis | Identify relationships between performance variables |
| Earned Value Analysis (EVM) | Final CPI, SPI, EAC, ETC, VAC, TCPI computation |
| Expert Judgment | Interpret results; assess whether variances are acceptable |
| Meetings | Final review meeting with sponsor, PMO, key stakeholders |

---

## EVM Final Metrics Reference

| Metric | Formula | Interpretation |
|---|---|---|
| **SPI** (Schedule Performance Index) | EV / PV | >1 = ahead; <1 = behind |
| **CPI** (Cost Performance Index) | EV / AC | >1 = under budget; <1 = over budget |
| **EAC** (Estimate at Completion) | BAC / CPI | Projected final cost |
| **ETC** (Estimate to Complete) | EAC − AC | Remaining work cost |
| **VAC** (Variance at Completion) | BAC − EAC | Positive = under budget |
| **TCPI** (To-Complete Performance Index) | (BAC − EV) / (BAC − AC) | Efficiency needed to meet BAC |
| **SV** (Schedule Variance) | EV − PV | Positive = ahead of schedule |
| **CV** (Cost Variance) | EV − AC | Positive = under budget |

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Final Report (A17 — Final Version) | A17 | Primary output — formal project performance record |
| Lessons Learned Register (updated) | A21 | Performance review insights captured |
| OPA Updates | OPA | Historical performance data for future projects |

---

## Final Report Structure (A17 — Final Version)

```markdown
## Final Project Performance Report

**Project Name:**
**Project ID:**
**Report Date:**
**Project Manager:**
**Sponsor:**
**Reporting Period:** Full Project Lifecycle

---

### 1. Executive Summary
[2–3 sentence summary: objectives, outcomes, overall performance verdict]

---

### 2. Scope Performance
| Planned Deliverables | Delivered | Accepted | Deviations | Change-Controlled? |
|---|---|---|---|---|
| | | | | |

**Scope Creep / Change Summary:**
**Requirements Coverage:** X of Y requirements met

---

### 3. Schedule Performance
| Baseline Start | Actual Start | Baseline Finish | Actual Finish | SV | SPI |
|---|---|---|---|---|---|
| | | | | | |

**Critical Path Outcome:**
**Milestone Achievement Rate:** X of Y milestones met on time
**Root Causes of Schedule Variance:**

---

### 4. Cost Performance
| BAC | AC | EV | CPI | EAC | VAC |
|---|---|---|---|---|---|
| | | | | | |

**Budget Outcome:** [ ] Under  [ ] On  [ ] Over
**Root Causes of Cost Variance:**
**Reserve Utilization:** Contingency used: ___ / ___  |  Management reserve used: ___ / ___

---

### 5. Quality Performance
| Quality Objective | Target | Actual Result | Met? |
|---|---|---|---|
| | | | |

**Defect Summary:**
**Quality Audit Outcomes:**
**Customer Acceptance Notes:**

---

### 6. Risk Performance
| Total Risks Identified | Materialized | Mitigated | Closed |
|---|---|---|---|
| | | | |

**Top 3 Risk Events (materialized):**
**Reserve Drawdown from Risk Events:**

---

### 7. Stakeholder and Communications Performance
**Stakeholder Satisfaction Summary:**
**Escalations During Project:** X escalations — Y resolved at PM level — Z escalated to sponsor
**Communications Plan Effectiveness:**

---

### 8. Procurement Performance
| Contract | Vendor | Value | Final Cost | Variance | Closed? |
|---|---|---|---|---|---|
| | | | | | |

---

### 9. Benefits Realization Summary
**Planned Benefits:**
**Benefits Delivered at Closure:**
**Benefits Deferred to Operations:**
**Benefits Realization Owner (post-project):**

---

### 10. Lessons Learned Summary
[Reference A21 — Lessons Learned Register for full detail]

**Top 3 What Went Well:**
1.
2.
3.

**Top 3 What Should Improve:**
1.
2.
3.

---

### 11. Final Recommendations
[Recommendations for future similar projects, process improvements, OPA updates]

---

### 12. Report Approval
| Role | Name | Signature | Date |
|---|---|---|---|
| Project Manager | | | |
| Sponsor | | | |
| PMO Representative | | | |
```

---

## Authority Routing

| Decision | Authority Level | Threshold |
|---|---|---|
| Approve Final Report | Sponsor | T2–T3 |
| Escalate performance findings to governance | PMO / Portfolio authority | T3 |
| Determine lessons learned organizational policy updates | PMO | T2 |
| Archive historical performance data | Project Manager + PMO | T1 |

---

## Tests

| Test ID | Test Description | Pass Condition | Fail Condition |
|---|---|---|---|
| T01 | All 10 performance sections populated in A17 | Sections 1–10 all contain data | Any section blank or missing |
| T02 | EVM metrics computed from final actuals | CPI, SPI, EAC, VAC, TCPI all present with source reference | Any metric estimated, not actual |
| T03 | Variance root causes documented | Root cause narrative present for all variances > threshold | Variances listed without explanation |
| T04 | Lessons Learned summary references A21 | Section 10 contains explicit A21 reference | Section 10 absent or has no A21 reference |
| T05 | Final Report approved by sponsor | Signature block in §12 has sponsor sign-off | Sponsor row blank |
| T06 | Report archived to OPA before closure record signed | OPA archive reference on A17 | No archive reference |
| T07 | Benefits realization owner named | Section 9 has named owner for post-project benefits | Section 9 blank or "TBD" |
| T08 | Reserve utilization documented | Contingency and management reserve drawdown recorded | Reserve rows blank |
| T09 | Procurement performance section complete | All contracts listed in §8 with final cost and variance | §8 blank or incomplete |

---

## Validation Criteria

This skill output is valid when:
- [ ] Final Report covers all 9 performance dimensions (scope, schedule, cost, quality, risk, stakeholders, procurement, benefits, lessons learned)
- [ ] All EVM metrics are computed from actual final data, not estimates
- [ ] Variance root causes are documented for all variances > threshold
- [ ] Lessons Learned summary references the full A21 register
- [ ] Final Report has been approved by sponsor
- [ ] Report is archived to OPA before project closure record is signed

---

## Failure Cases

| Failure | Indicator | Resolution |
|---|---|---|
| Performance data incomplete at time of review | Blank cells in EVM table | Return to SKL-05-01 to collect outstanding WPI |
| EVM metrics not reconciled to final actuals | EAC differs from finance system | Reconcile with Finance before issuing Final Report |
| Benefits realization section left blank | No benefits owner named | Engage PMO/sponsor to assign post-project benefits owner |
| Quality results not captured | Quality reports section empty | Pull from A30 Quality Reports archive |
| Report not approved before closure | Missing signature block | Do not sign Project Closure Record until Final Report approved |

---

## Linked Skills

| Skill ID | Skill Name | Relationship |
|---|---|---|
| SKL-05-01 | Monitor and Control Project Work | Source of final WPI and performance data |
| SKL-05-04 | Control Schedule | Source of final SPI and schedule actuals |
| SKL-05-05 | Control Costs | Source of final CPI, EAC, VAC |
| SKL-05-06 | Monitor Risks | Source of final risk outcomes |
| SKL-06-01 | Close Project or Phase | Consumes this skill's Final Report output |
| SKL-06-03 | Capture and Archive Lessons Learned | Receives performance findings for A21 update |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | PMO Repository | Initial build |
| 1.1.0 | 2026-05-30 | QA Phase A | Added YAML front matter, Tests table (T01–T09), Change Log |

---

*Authority: PMI-derived — Process-Groups §8.1 · PMBOK 8 · EVM reference*  
*PMO Skill Repository v1.1.0 · Pack 06 — Closing*
