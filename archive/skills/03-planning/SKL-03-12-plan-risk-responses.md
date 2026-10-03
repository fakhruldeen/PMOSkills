# SKL-03-12 — Plan Risk Responses

**Skill ID:** SKL-03-12  
**Pack:** 03 — Planning  
**Version:** 1.0.0-draft  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/03-planning/SKL-03-12-plan-risk-responses.md`  
**Authority:** PMBOK8 Guide §2.7.2.4 · Figure 2-51 · §2.7.1 Key Concepts · §5 (Strategies for Threats, Strategies for Opportunities, Contingent Response Strategies, Strategies for Overall Project Risk) · A19 Risk Management Record · A20 Quantitative Risk and Reserve Decision Record · A16 Financial Management and Cost Baseline Record (Artifacts-V-1.0.5)  
**Last Updated:** 2026-05-29

> **Wave 1A patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`. Tests section (Section 16) was already present and complete.

---

## 1. Purpose

Plan Risk Responses develops suitable and effective options, selects strategies, and agrees on actions to address individual risks and the overall project risk exposure recorded in the A19 Risk Register. This skill transforms the priority-ranked, scored A19 register — produced by SKL-03-11 — into an actionable response plan: every High and Very High entry gets a named strategy, a response owner, a trigger condition, and an action set that can be directly implemented in SKL-04 (Implement Risk Responses).

---

## 2. Scope

This skill covers:
- Selecting and documenting a response strategy for every A19 entry with status "Analysis Complete — Response Required" or "Analysis Complete — Watch and Plan"
- Designing specific response actions, owners, trigger conditions, and estimated costs
- Selecting strategies for overall project risk (distinct from individual risk strategies)
- Applying contingent response strategies where appropriate
- Designing consolidated responses for risk clusters that share a root cause
- Designing exploitation and enhancement strategies for opportunities
- Estimating secondary and residual risk effects
- Feeding reserve sizing inputs to A16 and coordinating with A20
- Updating A19 with completed response plans
- Identifying cross-domain impacts and triggering change control via A12

This skill does **not** cover:
- Performing risk analysis (SKL-03-11)
- Executing response actions (SKL-04)
- Ongoing monitoring (SKL-05)
- Formally approving contingency reserve amounts in A16 (sponsor / finance authority)
- Identifying new risks (SKL-03-10)

---

## 3. PMBOK8 Anchor

| Field | Value |
|-------|-------|
| **Process** | Plan Risk Responses |
| **Guide Section** | §2.7.2.4 |
| **Figure** | Figure 2-51 — Plan Risk Responses Inputs, Tools and Techniques, and Outputs |
| **Strategy References** | PMBOK8 §5 — Strategies for Threats; Strategies for Opportunities; Contingent Response Strategies; Strategies for Overall Project Risk |
| **Performance Domain** | Risk · Finance · Governance · Schedule · Resources |
| **Focus Area** | Planning (initial run); re-run iteratively throughout Executing and Monitoring and Controlling |
| **Domain Key Concepts** | Risk response · Risk appetite · Risk threshold · Residual risk · Secondary risk · Contingent response · Active vs. passive acceptance · Contingency reserve · Management reserve (PMBOK8 Guide §2.7.1) |

---

## 4. Strategy Taxonomy

### 4.1 Strategies for Threats

| Strategy | Core Intent | When to Use |
|----------|-------------|-------------|
| **Escalate** | Move ownership outside the project | Threat exceeds PM authority or project scope of control |
| **Avoid** | Eliminate the threat entirely | High probability AND high impact; removal is feasible |
| **Transfer** | Shift ownership to a third party | Financial threats another party can bear more effectively |
| **Mitigate** | Reduce probability and/or impact | Cannot or should not avoid; cost of mitigation justified |
| **Accept** | Acknowledge; no proactive action | Low-priority threats; Active: contingency reserve; Passive: periodic review |

### 4.2 Strategies for Opportunities

| Strategy | Core Intent | When to Use |
|----------|-------------|-------------|
| **Escalate** | Move ownership outside the project | Opportunity exceeds PM authority |
| **Exploit** | Ensure the opportunity definitely occurs | High-priority; certainty of realization desired |
| **Share** | Partner with a third party | Opportunity is larger than the project can capture alone |
| **Enhance** | Increase probability and/or impact | Exploitation not feasible |
| **Accept** | Acknowledge; no proactive action | Low-priority; Active: contingency reserve; Passive: periodic review |

### 4.3 Strategies for Overall Project Risk

| Strategy | Applies To | Description |
|----------|-----------|-------------|
| **Avoid** | Negative overall risk | Take focused action to bring band below threshold; if unrestorable, may lead to project cancellation |
| **Exploit** | Positive overall risk | Focused action to capture the positive aggregate |
| **Transfer / Share** | Either polarity | Third-party involvement to manage aggregate exposure |
| **Mitigate / Enhance** | Negative / positive | Replan project elements to shift overall risk band |
| **Accept** | Either polarity | Active: establish overall contingency reserve; Passive: periodic review |

### 4.4 Contingent Response Strategies

Pre-agreed actions triggered by a defined event. Required fields: trigger condition, contingent action, response owner, response budget.

---

## 5. Inputs

| Input | Source | Mandatory? |
|-------|--------|------------|
| A19 — Risk Register (fully scored) | SKL-03-11 (complete) | Yes |
| A19 — Risk Management Plan section | SKL-03-09 (approved) | Yes |
| A04 — Project Charter | SKL-02-01 | Yes |
| A16 — Financial Management Record | SKL-03-13 | Yes |
| A20 — Quantitative Risk and Reserve Decision Record | SKL-03-11 Track 2 | If available |
| A15, A26, A07, A08 | Various | Supporting |

---

## 6. Tools and Techniques

Per PMBOK8 Figure 2-51: Expert Judgment, Interviews, Facilitation, Strategies for Threats (Section 4.1), Strategies for Opportunities (Section 4.2), Contingent Response Strategies (Section 4.4), Strategies for Overall Project Risk (Section 4.3), Alternative Analysis, Cost-Benefit Analysis, Multicriteria Decision Analysis.

**Cost-benefit rule:** \( \text{Response Benefit} = \text{Risk Score (pre-response)} - \text{Residual Risk Score (post-response)} \)

A response is cost-effective when: \( \text{Cost of Response} \leq \text{EMV Reduction Achieved} \)

---

## 7. Response Design Parameters

For every A19 entry receiving a response, populate:
- Response strategy and justification
- Specific response actions (concrete, implementable, verifiable)
- Named response owner (not a team or role)
- Trigger condition (observable event or monitoring frequency)
- Estimated response cost and reserve type
- Residual risk score and band
- Secondary risks (new A19 entries)
- Fallback plan (Very High entries)
- Post-response status target

---

## 8. Residual Risk and Secondary Risk

**Residual risk:** Remaining exposure after response is fully implemented. Must fall within acceptable threshold; if still High/Very High, escalate to sponsor via A12.

**Secondary risk:** New risk arising from implementing a response. Must be added as a new A19 entry and scheduled for SKL-03-11 analysis.

---

## 9. Opportunity Response Principle

Every opportunity with band High or Very High must have a named strategy (Exploit or Enhance) with rationale. Every opportunity response must have a named owner. Accepted opportunities must include a note on why exploitation was not cost-effective.

---

## 10. Reserve Integration

**Contingency reserve (known risks):** Sum Accept-Active amounts + contingent response costs. Priority: A20 recommendation if available; otherwise sum from A19 entries. Submit to finance authority for approval — PM does not self-approve.

**Management reserve (unknown risks):** PM and sponsor agree as % of cost baseline. Not managed at the individual risk level.

---

## 11. Response Design for Risk Clusters

When SKL-03-11 identified clusters sharing a root cause or cascade chain: design one consolidated response addressing the root cause. One cluster owner. Mark cluster entries in A19 to reference the cluster strategy.

---

## 12. Step-by-Step Instructions

### Step 1 — Confirm Prerequisites (Gate)
- [ ] SKL-03-11 complete: all A19 entries have analysis status
- [ ] Overall project risk band recorded in A19 header
- [ ] A19 risk appetite statement and escalation authority present
- [ ] A16 available
- [ ] If Track 2 ran: A20 available
- [ ] Very High entries: A12 escalation logged

### Step 2 — Retrieve Inputs
Sort A19 entries by priority band descending. Pull A19 header (overall band, clusters, cascade chains, sensitivity tags). Pull A04, A16, A20 (if available).

### Step 3 — Assess Overall Project Risk Strategy
Select overall strategy per Section 4.3 based on current overall band. Document in A19 header.

### Step 4 — Review Clusters and Cascade Chains
List all clusters. Determine which justify consolidated responses. Assign cluster response owners.

### Step 5 — Design Individual Responses (Very High First)
For each entry in priority order: evaluate strategy options; run cost-benefit analysis; select strategy; design actions; assign named owner; set trigger condition; estimate cost; assess residual risk; identify secondary risks.

**Priority rules:**
- Very High threats: Consider Avoid or Transfer before Mitigate; Accept requires governance approval
- Very High opportunities: Consider Exploit before Enhance; Accept requires documented rationale
- High threats: Mitigate standard; Transfer if structure supports it
- Medium: Accept-Active or Mitigate with contingent fallback
- Low / Watch-only: Accept-Passive; periodic review

### Step 6 — Design Responses for Watch-Only / Accept Entries
Accept-Passive: set monitoring frequency. Accept-Active: estimate contingency reserve amount.

### Step 7 — Opportunity Symmetry Check
- [ ] All High/Very High opportunities have named strategy
- [ ] All Exploit/Enhance have named owner and specific actions
- [ ] Escalated opportunities have confirmed recipients
- [ ] Opportunity contingency reserves noted separately from threat reserves

### Step 8 — Assess Residual Overall Project Risk
Will collective responses bring the overall band to acceptable level? If yes: record post-response expected band. If no: apply additional overall strategies or obtain formal sponsor acceptance via A12.

### Step 9 — Consolidate Reserve Demand
Sum contingency reserve demand. Combine with A20 if available. Submit to finance authority via A16/A20 update. PM does not self-approve.

### Step 10 — Identify Cross-Domain Impacts
Flag A15, A08, A16, A26, and procurement impacts. Log each as a change request in A12.

### Step 11 — Update A19
Populate all response plan fields per Section 7. Update A19 header with overall strategy, post-response band, date, strategy distribution, reserve demand, and pending cross-domain impacts.

### Step 12 — Trigger Downstream
Hand off to SKL-04 with complete response plan summary.

---

## 13. Outputs

| Output | Artifact | Content |
|--------|---------|---------|
| A19 updates | A19 | All response fields; overall risk strategy in header; residual risk scores; secondary risks as new entries |
| A16 updates | A16 | Updated contingency reserve demand; response costs |
| A15 updates | A15 | Response actions as scheduled activities |
| A12 change requests | A12 | Cross-domain change requests |
| A05 updates | A05 | New assumptions from response design |
| A26 updates | A26 | Response owner assignments |

---

## 14. Tailoring Guidance

| Dimension | Guidance |
|-----------|---------|
| Small / low-complexity | One action + one owner + one trigger per entry; verbal owner acceptance |
| Medium | Full response for High/Very High; simplified Accept for Medium/Low; cluster check mandatory |
| Large | Full response for all non-Watch entries; contingent response tables; formal fallback plans; A20 coordination |
| Adaptive / sprint | Embedded in sprint planning; contingent responses trigger during execution |
| Fixed-price contract | Transfer strategy already applied at contract level — document explicitly; focus remaining entries on residual and secondary risks |
| Re-run | Re-plan only entries with changed band, fired triggers, or new entries from latest SKL-03-11 run |

---

## 15. Failure Cases

| Failure Mode | Prevention |
|-------------|------------|
| Responses designed before analysis complete | T-1 gate |
| Default Accept for all High entries | T-2 strategy adequacy check |
| Opportunities without response | T-3 coverage check |
| Owner assigned without acceptance | T-4 accountability check |
| Residual risk not assessed | T-5 completeness check |
| Secondary risks not entered in A19 | T-6 completeness check |
| Reserve demand not submitted | T-7 governance compliance |
| Cross-domain impacts without A12 | T-8 change governance check |
| Separate response spreadsheet | T-9 artifact waste check |

---

## 16. Tests

| Test ID | Assertion | Pass condition | Fail condition | Test type |
|---------|-----------|----------------|---------------|-----------|
| T-1 | Prerequisite gate | All analysis statuses complete; overall band present; A12 escalation for Very High | Any entry shows "Awaiting Analysis"; or Very High with no A12 | Pre-execution gate |
| T-2 | No undeclared Accept for High/Very High | All High/Very High have non-Accept strategy or governance-approved acceptance | Any High/Very High left as Accept-Passive without A12 authorization | Strategy adequacy check |
| T-3 | Opportunity response completeness | All High/Very High opportunities have strategy, owner, and actions | Any High/Very High opportunity has blank strategy, owner, or actions | Coverage check |
| T-4 | Response owner acceptance documented | Each entry has owner acceptance notation in response justification field | Any High/Very High entry has owner with no acceptance notation | Accountability confirmation check |
| T-5 | Residual risk scored | All responded entries have residual P, I, score, and band; Very High/High residuals have A12 acceptance if above threshold | Any responded entry has blank residual fields | Completeness and governance check |
| T-6 | Secondary risks entered in A19 | All identified secondary risks exist as standalone A19 entries with C–E–C and RBS category | Secondary risk described in notes but not as a separate A19 entry | Completeness check |
| T-7 | Reserve demand submitted | A16 or A20 update with reserve demand exists; approval status noted; PM did not self-approve | Reserve calculated but not submitted; or PM self-approved | Governance compliance check |
| T-8 | Cross-domain impacts as change requests | A12 has entries for all responses requiring A15, A08, A16, or A26 changes | A15, A08, or A26 modified with no A12 entry | Change governance check |
| T-9 | No separate response spreadsheet | No standalone response artifact alongside A19 | Separate response file exists | Artifact waste check |

---

## 17. Dependency Chain

```
UPSTREAM:
SKL-03-11 → A19 scored, ranked, banded      [mandatory gate — T-1]
A12 → Very High escalation logged            [mandatory]
A04, A16, A07                                [context inputs]
A20 (Track 2)                                [if available — reserve input]

DOWNSTREAM:
SKL-04 — Implement Risk Responses
  ├── Reads: A19 response actions, owners, trigger conditions
  └── Reads: A12 change requests; A26 assignments; A16 approved reserve

ITERATIVE RE-RUN TRIGGERS:
New secondary risks added → schedule SKL-03-11 + SKL-03-12
Risk band changes mid-project → re-run for affected entries
Response effectiveness review flags failing response → redesign in SKL-03-12
Phase gate → review all current response plans
```

---

## 18. Change Log

| Version | Date | Change description |
|---------|------|-------------------|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.0.1 | 2026-06-03 | Wave 1A patch: status updated to Draft · Tests Defined |

---

*Authority: PMBOK8 · Artifacts-V-1.0.5 · Repository Operating Rules §3.1 Waste Rule · §3.2 Consolidation Rule*  
*Owner: Project Manager or designated risk lead*  
*Predecessor: SKL-03-11 — Perform Risk Analysis*  
*Next Skill: SKL-04 — Implement Risk Responses*
