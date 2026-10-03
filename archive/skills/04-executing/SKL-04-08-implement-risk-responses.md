---
skill_id: SKL-04-08
skill_name: Implement Risk Responses
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A19 — Risk Management Record (response implementation log)
artifacts_updated:
- A18 — Issue, Impediment and Action Log (triggered risk events become issues)
- A16 — Financial Management and Cost Baseline Record (reserve consumption)
- A21 — Lessons Learned Record
pmbok8_anchor: Guide §2.7.2.5 Implement Risk Responses · Figure 2-52
performance_domains:
- Risk
- Delivery
focus_area: Executing
upstream_prerequisites:
- SKL-03-12 — A19 response plans must be complete
downstream_skills:
- SKL-05-06 — Monitor Risks
file_path: skills/04-executing/SKL-04-08-implement-risk-responses.md
tests: 8
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-08 — Implement Risk Responses

**Pack:** 04 — Executing
**Status:** Active · Tested
**Primary Artifact:** A19 — Risk Management Record
**PMBOK8 Anchor:** Guide §2.7.2.5 · Figure 2-52

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-8 are fully defined in the Tests section below.

---

## Purpose

Implement Risk Responses ensures that planned risk responses are executed when triggered, that risk events are tracked through resolution, and that unplanned risk events are handled via documented workarounds.

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Risk register with responses | A19 | §6 risk register + §7 response plans | Complete |
| Risk trigger conditions | A19 | §7 response plans | Documented per risk |
| Contingency reserve | A16 | Reserve section | Current balance known |
| Escalation thresholds | A06 | §4 authority levels | Current |
| Work performance data | — | From SKL-04-01 | Current |

---

## Steps

### Step 1 — Monitor for Risk Triggers
At each reporting period, review A19 trigger conditions for all Active risks.

### Step 2 — Activate Planned Responses
For each triggered risk, activate the pre-planned response from A19 §7. Record activation in A19 implementation log. Notify affected stakeholders per A28.

### Step 3 — Convert Triggered Risks to Issues
When a risk materializes, log in A18 with A19 Risk ID cross-reference. Update A19 risk status to Triggered.

### Step 4 — Execute Workarounds for Unplanned Risks
Document workaround in A19. Log event in A18. Raise A12 change request if workaround affects baselines.

### Step 5 — Update Reserve Consumption
Update A16 reserve consumption log. Notify sponsor if cumulative consumption exceeds A06 threshold.

### Step 6 — Assess and Close Responses
Assess residual risk after each response. Update A19 status: Mitigated or Closed. Capture outcomes in A21.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Response implementation log | A19 | Implementation log section |
| Risk-triggered issues | A18 | Issue log |
| Reserve consumption entries | A16 | Reserve consumption log |
| Risk response lessons | A21 | Risk section |
| Change requests (if baseline affected) | A12 | Pending items |

---

## Operating Rules

1. No risk response is implemented without the response being recorded in A19 first.
2. Every triggered risk that materializes must have a corresponding A18 issue entry with the A19 Risk ID cross-reference.
3. Reserve consumption must be reported to sponsor when cumulative consumption exceeds the A06 threshold.
4. Unplanned workarounds that affect baselines must route through A12 before implementation.
5. Residual risk assessment is mandatory after every response.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Ad hoc responses with no documentation | Risk handled but not in A19 | Retroactive A19 documentation; enforce process going forward |
| Triggered risk not in A18 | Issue being managed informally without A18 entry | Log in A18 immediately; cross-reference A19 Risk ID |
| Reserve over-consumed silently | A16 reserve balance at zero or negative without sponsor notification | Immediate sponsor notification; A12 change request for additional reserve |
| Response closed without residual assessment | A19 shows risk Closed with no residual note | Reopen for residual assessment before final closure |
| Opportunity response not activated | A19 shows opportunity risk with trigger met but no response initiated | Activate enhancement or exploit response immediately; log missed window in A21 |
| Workaround implemented without A19 entry | Risk event addressed operationally with no A19 entry | Retroactive A19 entry required; raise A12 if baseline affected; document in A21 as process failure |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Trigger monitoring | A19 triggers reviewed at every reporting period | Any reporting period passes without trigger review |
| T-2 | Response pre-exists | Every activated response has a pre-planned entry in A19 §7 | Response implemented without prior A19 documentation |
| T-3 | Triggered risks in A18 | Every materialized risk has an A18 issue entry with A19 Risk ID | Materialized risk not logged in A18 |
| T-4 | Workaround documented | Unplanned workarounds have A19 entry before implementation | Workaround executed with no A19 entry |
| T-5 | Baseline-affecting workarounds in A12 | Workarounds affecting cost or schedule have A12 change request | Workaround implemented without A12 entry |
| T-6 | Reserve consumption tracked | A16 reserve log updated with each consumption event | Reserve consumed but A16 not updated |
| T-7 | Sponsor threshold respected | Reserve consumption beyond A06 threshold reported to sponsor | Over-threshold consumption not escalated |
| T-8 | Residual risk assessed | Every closed response has residual risk status in A19 | Response closed without residual assessment |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-30 | Expanded failure modes from 4 to 6 |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.7.2.5 · Figure 2-52*
*Source type: PMI-derived*
