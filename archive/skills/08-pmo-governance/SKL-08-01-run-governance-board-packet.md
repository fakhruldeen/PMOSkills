---
skill_id: SKL-08-01
skill_name: Run Governance Board Packet
pack: 08 — PMO Governance
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A35 - Governance and Decision Authority Record (Board section)
artifacts_updated:
- A17 — Work Performance Information
pmbok8_process_anchor: Guide §2.1 Governance Domain · PMO-Guide — §Building/Running
  PMO
performance_domains:
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-01-01 — Establish PM Governance Framework
downstream_skills:
- SKL-08-05 — Manage PMO Portfolio Reporting
file_path: skills/08-pmo-governance/SKL-08-01-run-governance-board-packet.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-08-01 — Run Governance Board Packet

**Skill ID:** SKL-08-01  
**Pack:** 08 — PMO Governance  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1 Governance Domain · PMO-Guide — §Building/Running PMO  
**File path:** `skills/08-pmo-governance/SKL-08-01-run-governance-board-packet.md`

---

## Purpose

Prepare, distribute, and facilitate the review of the Governance Board Packet to steering committees and executive sponsors, enabling informed decision-making, strategic alignment reviews, and formal phase gate approvals.

---

## Scope

This skill covers the preparation of meeting agendas, status summaries, escalation options, decision logs, and meeting facilitation. It does not replace the general progress reporting (SKL-05-01) or change control procedures (SKL-05-02). It runs at regular governance check points (e.g., monthly) or phase gates.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A17 — Work Performance Information | SKL-05-01 / SKL-05-13 | Yes |
| A12 — Change requests pending board approval | SKL-05-02 | Yes |
| A18 — Active issues / escalations | SKL-04-10 | Yes |
| Governance calendar & agenda templates | OPA (A05) | Yes |

---

## Instructions

### Step 1 — Establish Board Agenda and Meeting Cadence
1. Confirm the next Governance Board meeting date and participant list per A05 Governance schedule.
2. Draft a clear meeting agenda specifying:
   - Project progress update (5-10 min)
   - Financial & schedule variance review (10 min)
   - Change requests requiring board vote (15 min)
   - Active escalations & decision requests (15 min)
   - Next phase gate readiness review (10 min)
3. Record agenda in the board section of A35.

### Step 2 — Compile Progress and Financial Summary
1. Extract current period performance metrics (CPI, SPI, EAC, SV, CV) from the latest A17 report.
2. Write a high-level narrative summary of accomplishments, major roadblocks, and milestone status.
3. Incorporate visual status indicators (R/Y/G) based on approved PMO thresholds.
4. Record summary in the board packet.

### Step 3 — Structure Decisions and Change Requests
1. Review all change requests in A12 that exceed the PM's delegated authority limits.
2. For each request, draft a one-page summary containing:
   - Change Description
   - Impact assessment (cost, schedule, scope, quality, risk)
   - PM recommendation (Approve/Reject/Defer)
   - Alternative options considered
3. Record decision briefs in the board packet.

### Step 4 — Formulate Escalation Options
1. Review active T2/T3 escalations in A18.
2. For each escalated item, document the problem statement, business impact, and 2-3 viable resolution options with pros and cons.
3. Record escalation briefs in the board packet.

### Step 5 — Distribute Board Packet and Facilitate Meeting
1. Package all sections into the final board packet.
2. Distribute to board members at least 3 business days prior to the meeting.
3. Facilitate the meeting, ensuring all items are addressed and voting members vote on change requests.

### Step 6 — Record Decisions and Distribute Minutes
1. Take detailed minutes of the meeting.
2. Record all formal decisions (approved changes, approved escalations, gate sign-offs) in the Decision Log of A35 and update A12.
3. Distribute meeting minutes and updated logs within 24 hours of meeting completion.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Governance Board Packet | A35 | Board Packet section |
| Meeting Minutes & Decision Records | A35 | Decision Log section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Agenda Definition | Agenda is clear and structured with time limits | No agenda defined |
| T-2 | Metrics Inclusion | Current SPI/CPI and cost forecasts are in the packet | Packet lacks EVM metrics |
| T-3 | Change Request Summarization | Board-level change requests summarized with impact data | Change requests listed without impact analysis |
| T-4 | Escalation Options | Escalated issues have 2+ options with pros/cons | Escalations listed without options |
| T-5 | Distribution Timing | Packet sent to board members $\ge 3$ business days prior | Packet sent late or during meeting |
| T-6 | Meeting Facilitation | Meeting conducted and all agenda items reviewed | Agenda items skipped without board consent |
| T-7 | Decision Log Update | Approved change requests recorded in A35 Decision Log | Decision log not updated |
| T-8 | Minutes Distribution | Minutes shared within 24 hours of meeting | Minutes shared late or missing |
| T-9 | Sponsor Sign-off | Board chairperson signs off on decision log entry | Decisions unconfirmed by chair |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 governance board packet operationalization |

---

*Authority: PMBOK8 Guide §2.1 · Governance of Portfolios, Programs, and Projects*  
*Source type: PMI-derived*
