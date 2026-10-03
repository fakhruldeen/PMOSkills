---
artifact_id: A17
artifact_name: Integrated Performance Reporting Record
artifact_type: Performance monitoring and reporting artifact
source_type: synthesis
governance_layer: Project Governance
version: "1.0.5"
status: Draft
supersedes: "v1.0.2 Items 130–145 (performance reporting and status tracking templates)"
primary_pmi_source: PMBOK8
exact_section: "Guide §2.1.6.4 Monitor and Control Project Performance; Table 2-1 Monitor and Control Project Performance; Finance Performance Domain §2.4"
performance_domains:
  - Governance
  - Finance
  - Schedule
  - Scope
  - Risk
  - Stakeholders
  - Resources
focus_areas:
  - Monitoring and Controlling
related_processes:
  - Monitor and Control Project Performance
  - Monitor and Control Finances
  - Monitor and Control Schedule
  - Monitor and Control Scope
  - Monitor Risks
  - Monitor Stakeholder Engagement
linked_artifacts:
  - A12
  - A14
  - A15
  - A16
  - A19
  - A28
owner: Project manager or project controls lead
approval_authority: Project manager for routine reports; sponsor or governance body for exception and escalation reports
---

# A17 Integrated Performance Reporting Record

**Artifact ID:** A17  
**Artifact type:** Performance monitoring and reporting artifact  
**Source type:** Synthesis  
**Governance layer:** Project Governance  
**Version:** 1.0.5  
**Status:** Draft  
**Supersedes:** v1.0.2 Items 130–145 (performance reporting and status tracking templates)

---

## 1. Artifact Definition

| Field | Entry |
|---|---|
| Purpose | Consolidate performance status across scope, schedule, finance, risk, resources, and stakeholders into one integrated report that drives active decisions and control actions. |
| When used | On the reporting cadence defined in A14 and A28; also triggered by exceptions, phase gates, and escalation events. |
| Primary PMI source | PMBOK8 |
| Exact section | Guide §2.1.6.4 Monitor and Control Project Performance; Table 2-1 Monitor and Control Project Performance; Finance Performance Domain §2.4 |
| Purpose of citation | Ground integrated performance reporting in PMBOK 8 monitoring and control guidance and finance performance domain. |
| Performance domains | Governance, Finance, Schedule, Scope, Risk, Stakeholders, Resources |
| Focus areas | Monitoring and Controlling |
| Related processes | Monitor and Control Project Performance; Monitor and Control Finances; Monitor and Control Schedule; Monitor and Control Scope; Monitor Risks; Monitor Stakeholder Engagement |
| Inputs | Baseline data (A14, A15, A16); risk status (A19); stakeholder engagement status (A07); work performance data from execution; change decisions (A12) |
| Outputs | Integrated status report; variance analysis; forecast; decisions triggered; escalation flags |
| Core fields | Reporting period; overall status; scope status; schedule status (with EV metrics where applicable); finance status; risk status; stakeholder and team status; decisions and actions required; next period focus |
| Owner | Project manager or project controls lead |
| Approval authority | Project manager for routine reports; sponsor or governance body for exception and escalation reports |
| Tailoring guidance | Scale report depth to project complexity and governance tier. Use lightweight narrative for simple work. Use EV metrics only where a formal cost and schedule baseline exists. |
| Waste test | Fail if separate scope status report, financial status report, risk summary, and stakeholder update are produced independently without driving a distinct governance decision. |
| Notes | Replaces or consolidates v1.0.2 Items 130–145. A17 is the single integrated reporting record; domain-level data lives in the respective baseline records (A15, A16, A19). |

---

## 2. Report Header

| Field | Entry |
|---|---|
| Project or initiative name | |
| Project ID | |
| Sponsor | |
| Project manager | |
| Reporting period | |
| Report version | |
| Report date | |
| Report type | Routine / Phase Gate / Exception / Escalation / Closure |
| Distribution | Per A28 Communications and Reporting Record |
| Linked artifacts | A12, A14, A15, A16, A19, A28 |

---

## 3. Overall Project Status

| Dimension | Status | Trend | Summary note |
|---|---|---|---|
| Overall | 🟢 Green / 🟡 Amber / 🔴 Red | ↑ Improving / → Stable / ↓ Declining | |
| Scope | | | |
| Schedule | | | |
| Finance | | | |
| Risk | | | |
| Stakeholders | | | |
| Resources / Team | | | |

**One-paragraph executive summary:**

---

## 4. Scope Performance

| Field | Entry |
|---|---|
| Scope status | On track / At risk / Breached |
| Key deliverables completed this period | |
| Scope changes approved this period | |
| Open scope issues | |
| Acceptance / validation status | |
| Linked record | A08 |

---

## 5. Schedule Performance

| Field | Entry |
|---|---|
| Schedule status | On track / At risk / Behind / Ahead |
| Current forecast completion | |
| Baseline completion date | |
| Variance (days) | |
| Critical path status | |
| Key milestones this period | |

### Earned Value Metrics (if applicable)

| Metric | Value | Basis |
|---|---:|---|
| Planned Value (PV) | | |
| Earned Value (EV) | | |
| Actual Cost (AC) | | |
| Schedule Variance (SV = EV − PV) | | |
| Cost Variance (CV = EV − AC) | | |
| Schedule Performance Index (SPI = EV / PV) | | |
| Cost Performance Index (CPI = EV / AC) | | |
| Estimate at Completion (EAC) | | |
| Estimate to Complete (ETC) | | |
| Variance at Completion (VAC) | | |

> EV metrics apply only when a formal cost and schedule baseline exists. Leave blank otherwise.

---

## 6. Finance Performance

| Field | Entry |
|---|---|
| Finance status | On track / At risk / Over budget |
| Expenditure to date | |
| Budget to date (planned) | |
| Forecast at completion (EAC) | |
| Approved budget (BAC) | |
| Variance at completion (VAC) | |
| Contingency reserve used / remaining | |
| Management reserve status | |
| Key finance issues | |
| Linked record | A16 |

---

## 7. Risk Performance

| Field | Entry |
|---|---|
| Risk status | Managed / Elevated / Critical |
| Top active risks this period | |
| Risks triggered this period | |
| New risks identified this period | |
| Reserve drawdown this period | |
| Risk response effectiveness | |
| Linked record | A19 |

---

## 8. Stakeholder and Team Performance

| Field | Entry |
|---|---|
| Stakeholder engagement status | |
| Key engagement actions this period | |
| Escalations or conflicts | |
| Team health indicator | |
| Resource constraint | |
| Linked records | A07, A25, A26 |

---

## 9. Decisions and Actions Required

| ID | Issue or decision | Impact | Decision authority | Owner | Due date | Linked record |
|---|---|---|---|---|---|---|
| | | | | | | |

---

## 10. Next Period Focus

| Area | Planned action | Owner | Target date |
|---|---|---|---|
| | | | |

---

## 11. Exceptions and Escalations

> Complete this section only for Exception and Escalation report types.

| Field | Entry |
|---|---|
| Exception description | |
| Impact | |
| Cause | |
| Options considered | |
| Recommended action | |
| Decision required by | |
| Escalation authority | |
| Linked change record (A12) | |

---

## 12. Operating Rules

1. A17 draws performance data from the baseline records (A15, A16, A19, A07) — it does not re-state baseline content.
2. Domain-specific data (EV metrics, risk details, financial breakdowns) lives in the respective baseline record; A17 summarizes and highlights decisions required.
3. A17 is distributed per the cadence and audience defined in A28.
4. Exception and escalation reports must be routed through A12 (Change and Exception Decision Log) for formal decision capture.
5. Fail the waste test if separate domain reports are produced and distributed without consolidation into A17 unless a distinct governance or contractual reason requires separation.

---

## 13. Migration Note

| Legacy items | Legacy names | Migration action |
|---|---|---|
| 130–145 | Performance reporting, status tracking, and monitoring templates (various) | CONSOLIDATED INTO A17 |

---

*Primary PMI source: PMBOK8 — Guide §2.1.6.4 Monitor and Control Project Performance; Finance Performance Domain §2.4*  
*Source type: Synthesis*  
*Repository version: 1.0.5*
