---
artifact_id: A17
artifact_name: Integrated Performance Reporting Record
artifact_type: template
version: "1.0.5"
status: Template · Active
parent_definition: artifacts/monitoring-and-decisions/A17-Integrated-Performance-Reporting-Record.md
authority: PMBOK8 Guide §2.1.6.4; Finance Performance Domain §2.4
---

# A17 — Integrated Performance Reporting Record Template

> **Usage:** Complete one instance per reporting cycle. Sections 1–10 apply to all report types. Section 11 (Exceptions and Escalations) applies only to Exception and Escalation reports. Replace every `[FIELD: ...]` placeholder with project-specific content. Delete placeholder instructions before distributing.

---

## Section 1 — Report Header

| Field | Entry |
|---|---|
| Project or initiative name | [FIELD: Full project name as registered in A04] |
| Project ID | [FIELD: Project identifier code] |
| Sponsor | [FIELD: Sponsor name and role] |
| Project manager | [FIELD: PM name] |
| Reporting period | [FIELD: e.g., Week 12 · 2026-05-19 to 2026-05-25] |
| Report version | [FIELD: e.g., v1.0] |
| Report date | [FIELD: YYYY-MM-DD] |
| Report type | [FIELD: Routine / Phase Gate / Exception / Escalation / Closure] |
| Distribution | [FIELD: Per A28 — list audience groups or reference A28 section] |
| Linked artifacts | A12 · A14 · A15 · A16 · A19 · A28 |

---

## Section 2 — Overall Project Status

| Dimension | Status | Trend | Summary note |
|---|---|---|---|
| Overall | [FIELD: 🟢 Green / 🟡 Amber / 🔴 Red] | [FIELD: ↑ Improving / → Stable / ↓ Declining] | [FIELD: One-sentence summary] |
| Scope | [FIELD: 🟢 / 🟡 / 🔴] | [FIELD: ↑ / → / ↓] | [FIELD: Brief note] |
| Schedule | [FIELD: 🟢 / 🟡 / 🔴] | [FIELD: ↑ / → / ↓] | [FIELD: Brief note] |
| Finance | [FIELD: 🟢 / 🟡 / 🔴] | [FIELD: ↑ / → / ↓] | [FIELD: Brief note] |
| Risk | [FIELD: 🟢 / 🟡 / 🔴] | [FIELD: ↑ / → / ↓] | [FIELD: Brief note] |
| Stakeholders | [FIELD: 🟢 / 🟡 / 🔴] | [FIELD: ↑ / → / ↓] | [FIELD: Brief note] |
| Resources / Team | [FIELD: 🟢 / 🟡 / 🔴] | [FIELD: ↑ / → / ↓] | [FIELD: Brief note] |

**Executive summary (one paragraph):**

[FIELD: Concise narrative covering overall status, key achievements this period, primary concerns, and decisions needed. Maximum 5 sentences.]

---

## Section 3 — Scope Performance

| Field | Entry |
|---|---|
| Scope status | [FIELD: On track / At risk / Breached] |
| Key deliverables completed this period | [FIELD: List deliverable IDs and names from A08] |
| Scope changes approved this period | [FIELD: List CR IDs from A12 or "None"] |
| Open scope issues | [FIELD: Brief description or "None"] |
| Acceptance / validation status | [FIELD: Describe formal acceptance actions taken this period] |
| Linked record | A08 |

---

## Section 4 — Schedule Performance

| Field | Entry |
|---|---|
| Schedule status | [FIELD: On track / At risk / Behind / Ahead] |
| Current forecast completion | [FIELD: YYYY-MM-DD] |
| Baseline completion date | [FIELD: YYYY-MM-DD from A15] |
| Variance (days) | [FIELD: +/− days; positive = ahead, negative = behind] |
| Critical path status | [FIELD: Describe critical path health and any float consumed] |
| Key milestones this period | [FIELD: Milestone name · Planned date · Actual/forecast date · Status] |

### Earned Value Metrics (complete only if formal cost-schedule baseline exists)

| Metric | Value | Basis |
|---|---:|---|
| Planned Value (PV) | [FIELD: Currency amount] | [FIELD: Source / date] |
| Earned Value (EV) | [FIELD: Currency amount] | [FIELD: % complete method] |
| Actual Cost (AC) | [FIELD: Currency amount] | [FIELD: Finance system reference] |
| Schedule Variance (SV = EV − PV) | [FIELD: Currency amount] | |
| Cost Variance (CV = EV − AC) | [FIELD: Currency amount] | |
| Schedule Performance Index (SPI) | [FIELD: Decimal — target ≥ 1.0] | |
| Cost Performance Index (CPI) | [FIELD: Decimal — target ≥ 1.0] | |
| Estimate at Completion (EAC) | [FIELD: Currency amount] | [FIELD: Calculation method] |
| Estimate to Complete (ETC) | [FIELD: Currency amount] | |
| Variance at Completion (VAC) | [FIELD: Currency amount — positive is favourable] | |

---

## Section 5 — Finance Performance

| Field | Entry |
|---|---|
| Finance status | [FIELD: On track / At risk / Over budget] |
| Expenditure to date | [FIELD: Actual cumulative spend in project currency] |
| Budget to date (planned) | [FIELD: Planned cumulative spend per A16 at this date] |
| Forecast at completion (EAC) | [FIELD: Latest EAC in project currency] |
| Approved budget (BAC) | [FIELD: Current approved BAC from A16] |
| Variance at completion (VAC) | [FIELD: BAC − EAC; positive is favourable] |
| Contingency reserve used / remaining | [FIELD: Amount used this period / cumulative / remaining per A16] |
| Management reserve status | [FIELD: Untouched / partially drawn — details] |
| Key finance issues | [FIELD: Describe any over-run risk, invoice disputes, funding gaps or "None"] |
| Linked record | A16 |

---

## Section 6 — Risk Performance

| Field | Entry |
|---|---|
| Risk status | [FIELD: Managed / Elevated / Critical] |
| Top active risks this period | [FIELD: Risk ID · description · priority — from A19] |
| Risks triggered this period | [FIELD: Risk ID · description · response activated or "None"] |
| New risks identified this period | [FIELD: Risk ID · category · description or "None"] |
| Reserve drawdown this period | [FIELD: Amount drawn / remaining from A16] |
| Risk response effectiveness | [FIELD: Brief assessment of responses in flight] |
| Linked record | A19 |

---

## Section 7 — Stakeholder and Team Performance

| Field | Entry |
|---|---|
| Stakeholder engagement status | [FIELD: Overall engagement health from A07 SEAM] |
| Key engagement actions this period | [FIELD: Communications delivered, meetings held, decisions facilitated] |
| Escalations or conflicts | [FIELD: Describe any unresolved conflicts or stakeholder escalations or "None"] |
| Team health indicator | [FIELD: 🟢 Performing / 🟡 Norming — concern / 🔴 Storming — action required] |
| Resource constraint | [FIELD: Describe any resource shortage, availability issue, or skill gap or "None"] |
| Linked records | A07 · A25 · A26 |

---

## Section 8 — Decisions and Actions Required

| ID | Issue or decision | Impact | Decision authority | Owner | Due date | Linked record |
|---|---|---|---|---|---|---|
| D-001 | [FIELD: Describe decision or issue] | [FIELD: Scope / Schedule / Finance / Risk] | [FIELD: PM / Sponsor / CCB / Governance] | [FIELD: Name] | [FIELD: YYYY-MM-DD] | [FIELD: A12 CR-NNN or other] |

---

## Section 9 — Next Period Focus

| Area | Planned action | Owner | Target date |
|---|---|---|---|
| [FIELD: Domain or work package] | [FIELD: Specific action planned] | [FIELD: Name / role] | [FIELD: YYYY-MM-DD] |

---

## Section 10 — Report Sign-off

| Field | Entry |
|---|---|
| Prepared by | [FIELD: Name · Role · Date] |
| Reviewed by | [FIELD: Name · Role · Date — if applicable] |
| Approved / issued by | [FIELD: PM name · Date] |

---

## Section 11 — Exceptions and Escalations

> **Complete this section only for Exception or Escalation report types.** Leave blank for Routine reports.

| Field | Entry |
|---|---|
| Exception description | [FIELD: Describe the exception or deviation from plan] |
| Impact | [FIELD: Quantify scope / schedule / cost / risk impact] |
| Cause | [FIELD: Root cause analysis summary] |
| Options considered | [FIELD: Option A · Option B · Option C with pros/cons] |
| Recommended action | [FIELD: State recommended option and rationale] |
| Decision required by | [FIELD: Date — deadline for decision] |
| Escalation authority | [FIELD: Role and name of decision authority] |
| Linked change record | [FIELD: A12 CR-NNN] |

---

*Authority: PMBOK8 Guide §2.1.6.4 Monitor and Control Project Performance; Finance Performance Domain §2.4*
*Source type: Synthesis · Version: 1.0.5 · Parent definition: A17-Integrated-Performance-Reporting-Record.md*
