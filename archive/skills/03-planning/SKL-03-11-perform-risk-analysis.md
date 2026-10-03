# SKL-03-11 — Perform Risk Analysis

**Skill ID:** SKL-03-11  
**Pack:** 03 — Planning  
**Version:** 1.0.0-draft  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/03-planning/SKL-03-11-perform-risk-analysis.md`  
**Authority:** PMBOK8 Guide §2.7.2.3 · Figure 2-50 · §2.7.1 Key Concepts · Figure 5-14 (P×I Matrix with Scoring) · Tools and Techniques §5 · A19 Risk Management Record · A20 Quantitative Risk and Reserve Decision Record (Artifacts-V-1.0.5)  
**Last Updated:** 2026-05-29

> **Wave 1A patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`. Tests section (Section 14) was already present and complete.

---

## 1. Purpose

Perform Risk Analysis evaluates every risk entry in the A19 Risk Register to determine **priority** (which risks deserve response effort) and **exposure** (the aggregate effect of uncertainty on project objectives). The process outputs are the scored, ranked, and banded A19 Risk Register and — when the project context justifies quantitative work — a populated A20 Quantitative Risk and Reserve Decision Record that supports reserve sizing.

Without this skill, the A19 register is a list of named threats and opportunities with no indication of which deserve immediate attention. SKL-03-12 (Plan Risk Responses) cannot allocate response effort or design strategies without the priority ranking this skill produces.

This skill runs **iteratively** — every re-run of SKL-03-10 (Identify Risks) that adds new entries, every phase gate, and every material re-assessment cycle triggers a partial or full re-run of this skill against the affected entries.

---

## 2. Scope

This skill covers:
- Qualitative risk analysis: assessing probability and impact for every A19 entry and computing a risk score using the A19 P×I matrix
- Banding every entry into its threshold band (Very High / High / Medium / Low / Watch-only)
- Identifying urgent risks and risks with data-quality limitations
- Risk categorization and correlation analysis (shared root causes, cascade chains)
- Assessing overall project risk — the aggregate exposure — distinct from individual risk scores
- Deciding the **trigger condition** for quantitative risk analysis (QRA)
- Quantitative risk analysis (when triggered): Expected Monetary Value (EMV), sensitivity analysis / tornado diagram, simulation (Monte Carlo)
- Producing a preliminary reserve sizing recommendation for A20 (when QRA is performed)
- Updating A19 with all scored, ranked, and status-updated entries

This skill does **not** cover:
- Writing risk responses or assigning response owners (SKL-03-12)
- Formally approving or sizing contingency reserves (A16)
- Identifying new risks (SKL-03-10)
- Implementing responses (SKL-04)
- Ongoing risk monitoring (SKL-05)

---

## 3. PMBOK8 Anchor

| Field | Value |
|-------|-------|
| **Process** | Perform Risk Analysis |
| **Guide Section** | §2.7.2.3 |
| **Figure** | Figure 2-50 — Perform Risk Analysis Inputs, Tools and Techniques, and Outputs |
| **P×I Matrix Figure** | Figure 5-14 — Example Probability and Impact Matrix With Scoring Scheme |
| **Tornado Diagram Figure** | Figure 5-21 — Example Tornado Diagram |
| **Monte Carlo Figure** | Figure 5-22 — Example Probability Distribution of a Target Milestone |
| **Performance Domain** | Risk · Finance · Governance |
| **Focus Area** | Planning (initial run); iterative throughout Executing and Monitoring and Controlling |
| **Domain Key Concepts** | Risk appetite · Risk threshold · Risk exposure · Individual risk vs. overall project risk · Qualitative vs. quantitative analysis · Sensitivity analysis · Reserve analysis (PMBOK8 Guide §2.7.1) |
| **Domain Check Results** | PMBOK8 Guide Table 2-11 |
| **Secondary Authority** | Risk-PPP (PMI Practice Standard for Project Risk Management) |

---

## 4. Two-Track Model: Qualitative and Quantitative

| Track | When Used | Primary Output | Feeds |
|-------|-----------|---------------|-------|
| **Track 1 — Qualitative Only** | All projects, every analysis run | Scored and ranked A19 register; threshold band assignments; overall risk assessment | SKL-03-12 |
| **Track 2 — Qualitative + Quantitative** | When QRA trigger conditions are met (see Section 7) | Track 1 outputs + A20 with EMV / Monte Carlo / reserve recommendation | A16, A20, SKL-03-12 |

**Critical principle:** QRA is not always required. PMBOK8 §2.7.2.3 explicitly states that QRA "may not always be required." The trigger conditions in Section 7 enforce this.

---

## 5. Individual Risk vs. Overall Project Risk

### 5.1 Individual Risk Assessment
Evaluates each A19 entry independently — assigns probability, impact, and score.

### 5.2 Overall Project Risk Assessment
Evaluates the aggregate effect of all uncertainty on the project as a whole. PMBOK8 §2.7.1 defines overall project risk as "the effect of uncertainty on the portfolio, program, or project as a whole."

**Governance rule:** If the overall project risk band reaches **Very High**, the PM must escalate to the sponsor regardless of whether any individual risk has reached that band.

---

## 6. Probability × Impact Matrix (Inherited from A19)

The P×I matrix applied in this skill is the one approved in SKL-03-09 and recorded in A19.

### 6.1 PMBOK8 Numeric Scoring Reference (Figure 5-14)

| Probability | Very High (0.90) | High (0.70) | Medium (0.50) | Low (0.30) | Very Low (0.10) |
|-------------|-----------------|-------------|--------------|-----------|----------------|
| **Very High Impact (0.80)** | 0.72 | 0.56 | 0.40 | 0.24 | 0.08 |
| **High Impact (0.40)** | 0.36 | 0.28 | 0.20 | 0.12 | 0.04 |
| **Moderate Impact (0.20)** | 0.18 | 0.14 | 0.10 | 0.06 | 0.02 |
| **Low Impact (0.10)** | 0.09 | 0.07 | 0.05 | 0.03 | 0.01 |
| **Very Low Impact (0.05)** | 0.05 | 0.04 | 0.03 | 0.01 | 0.00 |

*Threats score in the negative domain; opportunities score in the positive domain (symmetric mirror).*

---

## 7. QRA Trigger Conditions

| Trigger | Rationale |
|---------|-----------|
| Budget > organizational QRA threshold | High financial exposure justifies numerical precision |
| Multiple Very High or High individual risks | Combined exposure may exceed individual scores |
| Fixed-price or fixed-date contract | Schedule/cost distribution analysis supports credible commitment defense |
| Sponsor or governing body explicitly requires QRA | Governance mandate |
| Reserve sizing dispute or ambiguity | EMV or Monte Carlo provides evidence |
| Significant schedule/cost uncertainty on critical path | Sensitivity analysis identifies which sources drive outcome variability |
| Regulatory or audit requirement | Compliance mandate |

**If no trigger is met:** Record rationale in A19 notes. Proceed with Track 1 only. Do not create an A20 entry.

---

## 8. Inputs

| Input | Source | Mandatory? |
|-------|--------|------------|
| A19 — Risk Register (all entries) | SKL-03-10 (complete) | Yes |
| A19 — Risk Management Plan section | SKL-03-09 (approved) | Yes |
| A04 — Project Charter | SKL-02-01 | Yes |
| A05 — Context Register | SKL-02-01 | Yes |
| A15 — Schedule Model | SKL-03-06b | Track 2 only |
| A16 — Financial Management Record | SKL-03-13 | Track 2 only |

---

## 9. Tools and Techniques

Per PMBOK8 Figure 2-50: Expert Judgment, Interviews, Risk Probability and Impact Assessment, Probability and Impact Matrix, Risk Categorization, Sensitivity Analysis (tornado diagram), EMV / Decision Tree, Monte Carlo Simulation, Influence Diagrams, Facilitation.

**EMV formula:** \( EMV = P \times I \)

**Portfolio EMV:** \( EMV_{total} = \sum_{i=1}^{n} P_i \times I_i \)

**Cost-effectiveness rule:** Do not spend more on preventing a risk than the risk's EMV.

---

## 10. Step-by-Step Instructions

### Step 1 — Confirm Prerequisites (Gate)
- [ ] SKL-03-10 complete with at least one fully populated A19 entry
- [ ] A19 Risk Management Plan section has approved P×I matrix with threshold bands
- [ ] All entries have C–E–C statements, RBS categories, and named owners
- [ ] Probability and impact fields are blank (status: "Identified — Awaiting Analysis")

### Step 2 — Retrieve Analysis Inputs
Pull all A19 entries, A19 RMP section, A04, A05, and (if available) A15, A16, A08.

### Step 3 — Check QRA Trigger Conditions
Document Track 1 or Track 2 decision in A19 analysis run notes.

### Step 4 — Conduct Qualitative Assessment (Track 1)
For each entry: assign probability, impact, urgency, data quality; compute score = P × I; assign threshold band; update status.

### Step 5 — Assign Threshold Bands
- Very High → Escalate; Response Required
- High → PM acts; Response Required
- Medium → Watch and Plan
- Low / Watch-only → Accept / Monitor

### Step 6 — Conduct Risk Categorization Analysis
Group by RBS category, root cause, cascade chains, and opportunity clusters.

### Step 7 — Assess Overall Project Risk
Assign overall band: Very Low / Low / Moderate / High / Very High. Update A19 header. **Escalate to sponsor if High or Very High** — log in A12.

### Step 8 — Sensitivity Analysis (if Track 2 or High overall)
Construct tornado diagram; identify top 3–5 critical risks.

### Step 9 — EMV Analysis (if Track 2)
Calculate per-entry EMV; sum threat exposure and opportunity value; compute net EMV; document in A20.

### Step 10 — Monte Carlo Simulation (if Track 2 and A15/A16 available)
Run simulation; read P50, P80, P90; compute contingency reserve input (P80 minus P50); document in A20.

### Step 11 — Produce A20 Decision Record (if Track 2)
Populate all A20 fields; submit for sponsor/finance authority approval.

### Step 12 — Update A19 Risk Register
Populate all analysis fields per Section 6.2. Update A19 header with overall band, date, techniques used, and entry distribution.

### Step 13 — Trigger Downstream
Hand off to SKL-03-12 once A19 is fully scored and banded.

---

## 11. Outputs

| Output | Artifact | Notes |
|--------|---------|-------|
| Scored and ranked risk register | A19 | All analysis fields populated |
| Overall project risk assessment | A19 header | Band, date, technique summary |
| Quantitative analysis decision record | A20 | Track 2 only |
| Assumption log updates | A05 | New assumptions from analysis |

---

## 12. Tailoring Guidance

| Dimension | Guidance |
|-----------|---------|
| Small / low-complexity | Track 1 only; 3-point scale; one session; no A20 |
| Medium project | Track 1; EMV for reserve if no Monte Carlo |
| Large / high-complexity | Full Track 1 + Track 2; Monte Carlo; formal tornado; A20 |
| Adaptive (sprint-based) | Qualitative at sprint planning; cumulative trend in A19 |
| Fixed-price contract | Track 2 recommended regardless of size |
| Re-run | Re-analyze only changed/new entries; update overall band |

---

## 13. Failure Cases

| Failure Mode | Prevention |
|-------------|------------|
| Analysis without approved P×I matrix | T-1 gate |
| Probability assigned without reasoning | T-3 requires reasoning |
| Opportunities not scored | T-4 checks opportunity parity |
| Overall risk not assessed | T-5 checks overall band |
| Track 2 without trigger justification | T-6 requires documented trigger |
| Monte Carlo without A15/A16 | T-7 checks input availability |
| Separate analysis spreadsheet | T-8 enforces single-artifact rule |
| High/Very High overall without escalation | T-9 escalation check |

---

## 14. Tests

| Test ID | Assertion | Pass condition | Fail condition | Test type |
|---------|-----------|----------------|---------------|-----------|
| T-1 | Prerequisite gate | All prerequisites confirmed before first rating assigned | Any prerequisite missing | Pre-execution gate |
| T-2 | All entries scored | Zero blank analysis fields in A19 register | Any entry still shows "Awaiting Analysis" | Field completeness check |
| T-3 | Reasoning documented | Each entry has reasoning note for probability and impact | Any entry has score with no reasoning | Content quality check |
| T-4 | Opportunities scored on positive matrix | All opportunity entries have positive-domain scores and bands | Any opportunity has blank score after skill runs | Coverage check |
| T-5 | Overall band recorded | A19 header contains band, date, and rationale | No overall band; or band is TBD | Completeness check |
| T-6 | QRA trigger decision documented | Clear trigger decision in A19 notes; if Track 2, A20 opened | QRA performed without trigger; or A20 created without trigger | Governance decision check |
| T-7 | Monte Carlo only with A15 and A16 | A15 and A16 cited as simulation inputs in A20 | Monte Carlo run without A15 or A16 | Input availability gate |
| T-8 | No separate analysis spreadsheet | No standalone analysis artifact alongside A19 | Separate risk scoring file exists | Artifact waste check |
| T-9 | Escalation for High/Very High overall | A12 contains escalation entry before SKL-03-12 begins | High/Very High band with no A12 entry | Governance escalation check |

---

## 15. Dependency Chain

```
UPSTREAM:
SKL-03-10 → A19 populated              [mandatory gate — T-1]
SKL-03-09 → A19 Risk Management Plan   [mandatory — P×I matrix]
A15, A16                                [mandatory only for Track 2 simulation]

DOWNSTREAM:
SKL-03-12 — Plan Risk Responses
  ├── Reads: priority band, cascade flags, sensitivity tags, urgency
  └── Reads: A20 reserve recommendation (if Track 2)

ITERATIVE RE-ANALYSIS TRIGGERS:
SKL-03-10 re-run → re-run on new/re-triggered entries
Phase gate → full re-run
Major change → partial re-run for affected entries
Risk owner trigger signal → re-run for that entry
```

---

## 16. Change Log

| Version | Date | Change description |
|---------|------|-------------------|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.0.1 | 2026-06-03 | Wave 1A patch: status updated to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.7.2.3 · Figure 2-50 · Figure 5-14 · Artifacts-V-1.0.5 A19 · A20*  
*Source type: PMI-derived*  
*Next skill: SKL-03-12 — Plan Risk Responses*
