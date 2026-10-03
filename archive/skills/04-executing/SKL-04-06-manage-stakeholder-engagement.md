---
skill_id: SKL-04-06
skill_name: Manage Stakeholder Engagement
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A07 — Stakeholder Register and Engagement Strategy (execution engagement
  log)
artifacts_updated:
- A28 — Communications and Reporting Record
- A18 — Issue, Impediment and Action Log
pmbok8_anchor: Guide §2.5.2.4 Manage Stakeholder Engagement · Figure 2-36
performance_domains:
- Stakeholders
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-03-07 — A07 engagement strategy must be complete
downstream_skills:
- SKL-05-07 — Monitor Stakeholder Engagement
file_path: skills/04-executing/SKL-04-06-manage-stakeholder-engagement.md
tests: 8
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-06 — Manage Stakeholder Engagement

**Pack:** 04 — Executing
**Status:** Active · Tested
**Primary Artifact:** A07 — Stakeholder Register and Engagement Strategy
**PMBOK8 Anchor:** Guide §2.5.2.4 · Figure 2-36

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-8 are fully defined in the Tests section below.

---

## Purpose

Manage Stakeholder Engagement executes the engagement strategies defined in SKL-03-07 by communicating with stakeholders, addressing their needs and concerns, and fostering appropriate involvement. Actual engagement levels are recorded in A07 and compared against desired levels using the SEAM scale.

---

## SEAM Engagement Scale

| Level | Description | Signal |
|---|---|---|
| Unaware | Stakeholder is unaware of the project or its implications | Has not responded to any communication |
| Resistant | Stakeholder is aware but opposes the project | Active resistance; negative communications |
| Neutral | Stakeholder is aware but neither supports nor opposes | Passive; compliant but disengaged |
| Supportive | Stakeholder is aware and supports the project | Actively participates; positive engagement |
| Leading | Stakeholder is engaged and actively promotes the project | Champions the project; influences others |

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Stakeholder register | A07 | All stakeholders | Current |
| Engagement strategies | A07 | Engagement strategy section | Complete |
| Desired (D) engagement levels | A07 | SEAM — Desired (D) column | Set by SKL-03-07 |
| Communications plan | A28 | Plan section | Complete |

---

## Steps

### Step 1 — Review Engagement Strategies
Review A07 engagement strategies for all active stakeholders. Identify stakeholders whose current (C) level is below desired (D) — these are priority engagement targets.

### Step 2 — Execute Engagement Activities
Carry out engagement actions as planned in A07: meetings, workshops, surveys, demonstrations, briefings, one-to-one conversations.

### Step 3 — Record Actual Engagement Levels
After each engagement event, update A07 with the current (C) engagement level using the SEAM scale.

### Step 4 — Identify and Address Gaps
For each stakeholder where C ≠ D, assess root cause and revise engagement approach in A07. Log in A18 if the gap poses a risk to project outcomes.

### Step 5 — Update Communication Delivery Log
Log each engagement event in A28 delivery log: stakeholder, method, date, topic, outcome, follow-up.

### Step 6 — Escalate Resistant Stakeholders
For high-power stakeholders who remain Resistant after two consecutive cycles: log in A18 (priority = High), escalate to sponsor per A06, revise A07.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Updated SEAM current (C) levels | A07 | SEAM — Current column |
| Engagement event log | A28 | Delivery log |
| Engagement gap issues | A18 | Issue log (significant gaps only) |

---

## Operating Rules

1. A07 current engagement levels must be updated after every stakeholder engagement event.
2. No engagement activity is considered complete without an A28 delivery log entry.
3. Resistant high-power stakeholders must be escalated if gap persists after two consecutive engagement cycles.
4. Engagement approach changes that require fundamental strategy revision must re-trigger SKL-03-07 for affected stakeholders.
5. Engagement activities must be consistent with A28 — ad hoc engagement outside the plan must still be logged.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| SEAM levels stale | A07 C-levels not updated for >1 period | Review all engagement events; update C-levels retroactively |
| Resistant stakeholder ignored | High-power Resistant stakeholder with no escalation | Immediate A18 entry and sponsor notification per A06 threshold |
| Unlogged engagement | Team members engaging stakeholders informally without A28 entries | Team briefing on engagement logging; retroactive A28 entries |
| Strategy not revised | Repeated failed engagement with no change in approach | Re-trigger SKL-03-07; revise A07 engagement strategy section |
| Engagement strategy not updated after escalation | Sponsor notified but no A07 strategy revision follows | Confirm revised approach with sponsor; update A07 and SEAM desired (D) if changed |
| Stakeholder privacy breach | Sensitive A07 information shared without authorization | Immediate containment; review access controls; log in A18; notify governance authority |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | A07 SEAM current | A07 current (C) levels updated within current reporting period | A07 C-levels not updated for more than one reporting period |
| T-2 | A28 delivery log | Every engagement event has an A28 delivery log entry | Any engagement event with no A28 record |
| T-3 | Gap identification | All stakeholders where C ≠ D have a documented gap response in A07 | C ≠ D with no documented response |
| T-4 | Resistant escalation | High-power Resistant stakeholder escalated after two consecutive cycles | High-power Resistant stakeholder held three or more cycles without escalation |
| T-5 | Strategy revision triggered | Material engagement strategy changes trigger SKL-03-07 re-run | Strategy changed without updating A07 engagement strategy section |
| T-6 | Engagement actions traceable | Every A07 planned engagement action has a corresponding A28 delivery entry | A07 action with no A28 delivery entry |
| T-7 | A18 logging | Significant engagement gaps posing project risk logged in A18 | Engagement gap posing risk to project with no A18 entry |
| T-8 | Follow-up tracked | A28 entries with required follow-up have next action, owner, and due date | Follow-up required entry with no next action assigned |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-30 | Expanded failure modes from 4 to 6 |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.5.2.4 · Figure 2-36*
*Source type: PMI-derived*
