---
skill_id: SKL-05-13
skill_name: Perform Earned Value Analysis
pack: 05 — Monitoring and Controlling
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A17 — Work Performance Information (EVM section)
artifacts_updated:
- A16 — Financial Management and Cost Baseline Record
- A12 — Change Log
pmbok8_process_anchor: Guide §2.4.2.4 Monitor and Control Finances · Practice Standard
  for EVM
performance_domains:
- Finance
- Governance
focus_area: Monitoring and Controlling
upstream_prerequisites:
- SKL-05-05 — Control Costs
downstream_skills:
- SKL-05-02 — Perform Integrated Change Control
file_path: skills/05-monitoring-controlling/SKL-05-13-perform-earned-value-analysis.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-13 — Perform Earned Value Analysis

**Skill ID:** SKL-05-13  
**Pack:** 05 — Monitoring and Controlling  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.4.2.4 Monitor and Control Finances · Practice Standard for EVM  
**File path:** `skills/05-monitoring-controlling/SKL-05-13-perform-earned-value-analysis.md`

---

## Purpose

Calculate project cost and schedule variances, performance indices, and forecast completion estimates (EAC, ETC, TCPI) using the Earned Value Management (EVM) standard. Apply quantitative threshold rules to trigger escalation protocols for variances.

---

## Scope

This skill calculates standard EVM metrics, validates performance against thresholds, and generates quantitative forecasts. It does not replace the general cost monitoring process (SKL-05-05) but provides the mathematical and logic framework for detailed financial control. It runs at every progress reporting cycle.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| Budget at Completion (BAC) | SKL-03-15 (A16) | Yes |
| Planned Value (PV) for target date | SKL-03-06b / A15 | Yes |
| Actual Cost (AC) for target date | Financial system / SKL-05-05 | Yes |
| Earned Value (EV) / physical % complete | SKL-05-01 / SKL-05-03 | Yes |
| EVM variance thresholds | Quality Standards / PMO | Yes |

---

## Instructions

### Step 1 — Collect Core EVM Metrics
1. Extract the current reporting period's:
   - **Planned Value (PV):** Total approved budget scheduled to be spent by this date.
   - **Actual Cost (AC):** Total actual expenditures recorded for the work accomplished.
   - **Earned Value (EV):** The percentage of work package completion multiplied by the WBS work package budget ($EV = \text{physical \% complete} \times BAC$).
2. Record core metrics in A17.

### Step 2 — Calculate Variances
1. Calculate **Cost Variance (CV):**
   $$CV = EV - AC$$
   *(Positive = Under budget; Negative = Over budget)*
2. Calculate **Schedule Variance (SV):**
   $$SV = EV - PV$$
   *(Positive = Ahead of schedule; Negative = Behind schedule)*
3. Calculate **Variance at Completion (VAC):**
   $$VAC = BAC - EAC$$
   *(Positive = Expected surplus; Negative = Expected overrun)*
4. Record variances in A17.

### Step 3 — Calculate Performance Indices
1. Calculate **Cost Performance Index (CPI):**
   $$CPI = EV / AC$$
   *(CPI > 1.0 = Under budget efficiency; CPI < 1.0 = Over budget efficiency)*
2. Calculate **Schedule Performance Index (SPI):**
   $$SPI = EV / PV$$
   *(SPI > 1.0 = Ahead of schedule efficiency; SPI < 1.0 = Behind schedule efficiency)*
3. Record indices in A17.

### Step 4 — Generate Completion Forecasts (EAC and ETC)
1. Select the forecasting scenario based on project conditions:
   - **Scenario A (Typical past performance will continue):**
     $$EAC = BAC / CPI$$
   - **Scenario B (Variances are atypical; remaining work at planned rate):**
     $$EAC = AC + (BAC - EV)$$
   - **Scenario C (Both schedule and cost influence remaining work):**
     $$EAC = AC + \frac{BAC - EV}{CPI \times SPI}$$
2. Calculate **Estimate to Complete (ETC):**
   $$ETC = EAC - AC$$
3. Document the rationale for selecting the forecast scenario.
4. Record EAC and ETC in A16 and A17.

### Step 5 — Calculate To-Complete Performance Index (TCPI)
1. Calculate **TCPI to BAC** (Required efficiency to hit original budget):
   $$TCPI_{BAC} = \frac{BAC - EV}{BAC - AC}$$
2. Calculate **TCPI to EAC** (Required efficiency to hit revised forecast):
   $$TCPI_{EAC} = \frac{BAC - EV}{EAC - AC}$$
3. Record TCPI values in A17.

### Step 6 — Validate Against Thresholds and Escalate
1. Apply PMO EVM Threshold Validator Rules:
   - **SPI / CPI warning threshold:** $\le 0.95$ (requires PM warning note in log).
   - **SPI / CPI critical threshold:** $\le 0.85$ (requires immediate escalation to CCB and Sponsor).
   - **TCPI variance threshold:** If $TCPI_{BAC} - CPI \ge 0.10$ (indicates original budget is unachievable).
2. If thresholds are breached, trigger escalation protocols defined in A05 Governance.
3. Update A12 with Change Requests if baseline adjustments are required.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| EVM Analysis Report | A17 | EVM Performance metrics |
| Updated Cost Forecasts | A16 | Cost Projections |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Core Metrics Extraction | PV, EV, AC are populated with positive numbers | Metrics missing or negative |
| T-2 | Cost Variance Calculation | CV calculated correctly ($EV - AC$) | Incorrect CV |
| T-3 | Cost Index Calculation | CPI calculated correctly ($EV / AC$) | Incorrect CPI |
| T-4 | Schedule Index Calculation | SPI calculated correctly ($EV / PV$) | Incorrect SPI |
| T-5 | Forecast Scenario Rationale | EAC calculated with documented scenario choice and justification | EAC calculated without scenario rationale |
| T-6 | TCPI BAC Calculation | TCPI to BAC calculated correctly | Incorrect TCPI |
| T-7 | Threshold Breach Check | System alerts triggered when CPI or SPI goes below 0.95 | No alert on CPI/SPI of 0.90 |
| T-8 | Escalation Trigger | Critical breach ($\le 0.85$) creates action item in A12 | Critical breach has no escalation record |
| T-9 | Report Distribution | Reports issued to Sponsor and PMO within reporting window | Report not shared |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 EVM standard integration |

---

*Authority: PMBOK8 Guide §2.4.2.4 · Practice Standard for Earned Value Management*  
*Source type: PMI-derived*
