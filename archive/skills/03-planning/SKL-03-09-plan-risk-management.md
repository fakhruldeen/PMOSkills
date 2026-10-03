# SKL-03-09 — Plan Risk Management

**Skill ID:** SKL-03-09  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.7.6.1 Plan Risk Management · Guide §2.7 Risk Domain  
**File path:** `skills/03-planning/SKL-03-09-plan-risk-management.md`

---

## Purpose

Define how risk management activities will be structured, resourced, and executed throughout the project lifecycle. The output is the Risk Management section of A06 (Project Management Plan), which provides the framework governing SKL-03-10 (Identify Risks), SKL-03-11 (Perform Risk Analysis), SKL-03-12 (Plan Risk Responses), SKL-04-08 (Implement Risk Responses), and SKL-05-06 (Monitor Risks).

---

## Scope

This skill produces the Risk Management Plan section of A06. It does not identify, analyze, or respond to specific risks — those are downstream skills. It defines the methodology, tools, roles, thresholds, and cadence that govern all risk management activities.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A07 — Stakeholder Register | SKL-02-02 | Yes |
| A05 — Context Register (EEF: organizational risk appetite, OPA: historical risk data) | SKL-01-01 | Yes |
| A06 — Scope, Schedule, Finance sections (drafts) | SKL-03-02 to SKL-03-15 | Yes |

---

## Instructions

### Step 1 — Define Risk Management Approach

1. Define the risk management methodology:
   - Will the project use a qualitative-only approach, or qualitative plus quantitative?
   - Define the risk register format (A19) — what fields are required for each risk entry?
   - Define the probability/impact matrix dimensions and scale (e.g., 5x5 matrix with P: 0.1/0.3/0.5/0.7/0.9 and I: 0.05/0.10/0.20/0.40/0.80)

2. Define the risk categories (Risk Breakdown Structure — RBS):
   - Technical risks
   - External risks (vendor, regulatory, market)
   - Organizational risks (resourcing, governance, change)
   - Project management risks (planning, estimation, communication)
   - (Add project-specific categories as needed)

3. Confirm the risk appetite and tolerance thresholds from A05 EEF:
   - **Risk appetite:** What level of overall risk is the organization willing to accept on this project?
   - **Risk tolerance:** What specific thresholds (schedule variance, cost variance, quality defect rate) will trigger escalation?

4. Record in A06 Risk Management section.

---

### Step 2 — Define Roles and Responsibilities

| Role | Responsibility |
|---|---|
| PM | Owns overall risk process; chairs risk reviews; updates A19 |
| Risk Owner | Responsible for monitoring and responding to assigned risks |
| Sponsor | Reviews and approves risk responses above PM authority threshold |
| Team Leads | Identify and monitor risks within their domain; report to PM |
| PMO | Provides OPA risk data; reviews risk methodology compliance |

Record roles and responsibilities in A06.

---

### Step 3 — Define Risk Thresholds and Escalation

1. Define the probability/impact scoring thresholds for each risk response category:
   - **Low (Green):** Score ≤ 0.10 — Accept (document and monitor; no active response required)
   - **Medium (Amber):** Score 0.11–0.25 — Mitigate or Transfer (develop specific response)
   - **High (Red):** Score 0.26–0.50 — Escalate to Sponsor; develop contingency plan
   - **Critical (Escalate):** Score > 0.50 — Escalate to Steering Committee; immediate response

2. Define numerical thresholds for issue-level escalation (when a risk becomes an issue):
   - Probability = 1.0 (event has occurred or is certain to occur)
   - Impact has materialized and is affecting project baselines

3. Define the escalation path per A05 governance:
   - PM authority: Manage Low and Medium risks autonomously
   - Sponsor authority: Approve High risk responses
   - Steering Committee: Approve Critical risk responses

4. Record in A06.

---

### Step 4 — Define Risk Identification and Review Cadence

1. Define the frequency of formal risk identification activities:
   - Initial risk identification: Before planning baseline (run SKL-03-10 at start of planning)
   - Ongoing identification: Rolling identification at every project team meeting
   - Formal risk review: Bi-weekly risk register review (update A19)
   - Phase gate risk review: Full re-identification at every phase gate

2. Define what triggers an unscheduled risk review:
   - A significant scope change (A12 approved)
   - A key risk materializing as an issue
   - A major external change (regulatory, market, technology)
   - Stakeholder escalation identifying a new risk source

3. Record cadence and triggers in A06.

---

### Step 5 — Define Risk Reserve Policy

1. Define the contingency reserve calculation method:
   - **Method A (simple):** Percentage of project budget (e.g., 10–15% for medium-complexity projects)
   - **Method B (expected monetary value):** Sum of (Probability × Impact cost) for all identified risks
   - **Method C (Monte Carlo simulation):** Use simulation output for schedule and cost reserves (for high-complexity projects)

2. Define management reserve:
   - A separate reserve for unknown unknowns (typically 5–10% of total project budget)
   - Under Sponsor or Steering Committee control only

3. Define the conditions for drawing on contingency reserve:
   - A risk response has been triggered (A12 entry required)
   - PM authority to draw up to [threshold] without re-approval
   - Above [threshold] requires Sponsor approval

4. Record reserve policy in A06 and cross-reference to A06 Finance section.

---

### Step 6 — Define Risk Reporting

1. Define the risk report content for periodic status reports:
   - Top 3–5 current risks by priority score
   - Status of active risk responses (In Progress / Completed / Overdue)
   - Any new risks identified since last report
   - Any risks that have become issues

2. Define the risk exception report:
   - Triggered when a High or Critical risk is identified
   - Content: Risk description, probability, impact, proposed response, resource requirement, decision required
   - Distribution: Sponsor, Steering Committee (for Critical)

3. Record risk reporting standards in A06.

---

### Step 7 — Baseline Risk Management Section

1. Review with Sponsor and PMO.
2. Confirm alignment with Finance section (reserve policy) and Governance section (escalation paths).
3. Obtain sponsor sign-off.
4. Record version, baseline date, and approver in A06.
5. Distribute to all team leads and risk owners.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Risk Management Plan | A06 | Risk Management section |

---

## Constraints

- The Risk Management Plan must be baselined before SKL-03-10 (Identify Risks) runs.
- Probability/impact thresholds must be specific and numeric — qualitative-only labels (high/medium/low) without numeric definitions are not acceptable for a baselined plan.
- Reserve policy must be cross-referenced with the Finance section of A06.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Simple project | 3x3 P/I matrix. Qualitative only. PM owns all risk responses. 10% contingency reserve. |
| Complex project | 5x5 P/I matrix. Qualitative + quantitative (EMV). Formal risk owner assignments. Monte Carlo for reserves. |
| Agile project | Risk managed at sprint level. Risk backlog item type. Sprint retrospective includes risk review. Reserves managed as sprint buffer. |
| Regulated project | Regulatory risk category required. Formal risk exception reports for all High risks. PMO audit trail for all risk decisions. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| Risk appetite not defined | PM accepts or escalates risks arbitrarily | Escalate to Sponsor; define numeric thresholds before proceeding |
| Reserve policy absent | Project has no contingency; risks cannot be funded | Define reserve policy before baselining Finance section |
| Risk cadence not followed | Risk register becomes stale; surprises during execution | Add risk review to weekly team meeting agenda; enforce bi-weekly formal review |
| Risk roles not assigned | No one owns monitoring or response | Assign risk owners in A06; confirm with each owner |
| Qualitative thresholds only | Risk prioritization is subjective | Add numeric P/I scale to A06; re-score all risks |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Risk methodology defined | P/I matrix dimensions, scale, and categories documented | Matrix or categories absent |
| T-2 | Risk categories (RBS) defined | At least four RBS categories documented | RBS section blank |
| T-3 | Risk appetite and tolerance defined | Numeric thresholds for risk appetite and tolerance documented | Thresholds absent or non-specific |
| T-4 | Roles and responsibilities defined | PM, Risk Owner, Sponsor, Team Lead, PMO roles defined for risk process | Any role undefined |
| T-5 | Escalation thresholds defined | Numeric P/I thresholds for PM, Sponsor, and Steering Committee authority documented | Thresholds absent |
| T-6 | Risk review cadence defined | Initial, ongoing, formal review, phase gate, and trigger frequencies documented | Any cadence element missing |
| T-7 | Reserve policy defined | Contingency and management reserve calculation methods and draw conditions documented | Reserve policy absent |
| T-8 | Risk reporting standards defined | Periodic report content and exception report trigger and content defined | Reporting standards absent |
| T-9 | Alignment with Finance and Governance sections | Reserve policy cross-referenced in Finance section; escalation paths consistent with Governance section | Either cross-reference missing |
| T-10 | Sponsor sign-off obtained | Approval recorded in A06 | Plan unsigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.7.6.1 Plan Risk Management · Guide §2.7 Risk Domain*  
*Source type: PMI-derived*  
*Owner: Project Manager*  
*Approval authority: Project Sponsor*
