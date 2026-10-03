---
skill_id: SKL-04-04
skill_name: Develop Team
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A25 — Team Operating and Responsibility Record (team development
  section)
artifacts_updated:
- A21 — Lessons Learned Record
pmbok8_anchor: Guide §2.6.2.4 Develop Team · Figure 2-44
performance_domains:
- Resources
- Team
focus_area: Executing
upstream_prerequisites:
- SKL-04-03 — team must be acquired (A25 populated)
downstream_skills:
- SKL-04-05 — Manage Team
file_path: skills/04-executing/SKL-04-04-develop-team.md
tests: 7
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-04 — Develop Team

**Pack:** 04 — Executing
**Status:** Active · Tested
**Primary Artifact:** A25 — Team Operating and Responsibility Record
**PMBOK8 Anchor:** Guide §2.6.2.4 · Figure 2-44

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-7 are fully defined in the Tests section below.

---

## Purpose

Develop Team improves the competencies, interaction, and overall team environment to enhance project performance. This skill begins after SKL-04-03 has populated A25 with team assignments. Outputs are recorded in A25 (development plans and performance assessments) and significant learnings go to A21.

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Team assignments | A25 | RACI and assignment section | Populated by SKL-04-03 |
| Resource skill requirements | A26 | §2 estimates | Complete |
| OPA policies (rewards, recognition) | A05 | OPA section | Current |
| Tailoring decisions | A06 | §3 tailoring | Current |

---

## Steps

### Step 1 — Assess Individual and Team Competencies
Review skill requirements from A26 against the actual competencies of the acquired team. Identify:
- Hard skill gaps (technical, domain, tool proficiency)
- Soft skill gaps (communication, leadership, facilitation)
- Team dynamics gaps (collaboration, conflict resolution, accountability)
Record assessment results in A25 development section.

### Step 2 — Create Development Actions
For each identified competency gap, define a development action:

| Development type | Description | Best for |
|---|---|---|
| Formal training | Classroom, online, certification | Technical skills with defined curricula |
| On-the-job training | Supervised task performance | Practical skills with low risk of error |
| Mentoring / coaching | One-to-one guidance from experienced practitioner | Leadership and soft skills |
| Shadowing / pair work | Working alongside an expert | Tacit and contextual knowledge |
| Certification pursuit | Structured self-study for credentialed exam | Professional qualifications |

Record each action in A25 development section with: gap description, action type, owner, supporter, target date, and success measure.

### Step 3 — Build Team Identity and Cohesion
Plan and execute team-building activities appropriate to team type:
- **Co-located teams:** In-person workshops, team lunches, site visits
- **Virtual teams:** Virtual icebreakers, online collaboration sessions, scheduled video-off social time
- **Hybrid teams:** Combination ensuring virtual members are equally included
Document planned and completed activities in A25 with attendance and outcomes noted.

### Step 4 — Establish and Confirm Ground Rules
Confirm or update team operating agreements in A25 ground rules section. Every team must have documented agreements on:
- Communication norms (response times, tools, formality)
- Decision-making protocol (consensus / PM decision / voting)
- Conflict resolution approach (who is the first escalation point)
- Meeting cadence and facilitation rotation
- Definition of done for work packages
Ground rules must be confirmed before the first full execution sprint or period begins.

### Step 5 — Recognize and Reward
Define recognition criteria in A25 aligned with A05 OPA reward policies. Apply recognition:
- Timely (within the same reporting period as the achievement)
- Specific (linked to a named achievement, not general praise)
- Visible (communicated to the team, not just individually)
Document recognition events in A25 recognition log.

### Step 6 — Assess Team Performance Periodically
Conduct periodic team performance assessments at minimum at each phase gate. Record in A25:
- Assessment date
- Method used (survey, structured discussion, 360-feedback)
- Results and trends
- Actions planned to address weaknesses
Feed significant findings to A21.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Competency gap assessments | A25 | Development section |
| Development action plans | A25 | Development section |
| Team operating agreements (ground rules) | A25 | Ground rules section |
| Team performance assessments | A25 | Performance section |
| Recognition log | A25 | Recognition section |
| Development lessons | A21 | Team management section |

---

## Operating Rules

1. Every identified competency gap must have a development action with an owner and target date.
2. Team operating agreements must be confirmed or updated before the first full execution sprint or period begins.
3. Recognition criteria must not conflict with OPA reward policies in A05.
4. Performance assessments are mandatory at every phase gate — they cannot be deferred until closure.
5. Team-building activities must ensure virtual team members are not excluded.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Development deferred | A25 development section empty during execution | Conduct emergency competency assessment; create action plans immediately |
| Ground rules missing | Team conflicts arising from unclear norms | Facilitate ground rules session; update A25 before next execution period |
| Recognition inconsistent | Some team members never recognized; others over-recognized | Audit A25 recognition log; correct with next recognition cycle |
| Virtual members isolated | Low participation from remote team members | Review and revise team-building approach to ensure virtual inclusion |
| Performance assessment skipped at phase gate | Phase gate passes with no A25 performance assessment entry | Conduct overdue assessment retroactively; add gate check to phase gate checklist |
| Development action overdue with no escalation | A25 shows development action past target date with status unchanged | Immediate PM review; reassign or extend with documented rationale; escalate if gap is on critical skill |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Competency assessment completed | A25 has competency gap section populated after acquisition | A25 has no competency data |
| T-2 | Development actions assigned | Every identified gap has an action with type, owner, and target date | Gap with no action, or action with no owner or date |
| T-3 | Ground rules confirmed | A25 team operating agreements section populated before first execution period | Ground rules section blank during execution |
| T-4 | Team building documented | At least one team-building activity per phase documented in A25 | No team-building activity recorded for any phase |
| T-5 | Recognition criteria defined | A25 has recognition criteria aligned with A05 OPA | Recognition applied without defined criteria |
| T-6 | Performance assessments at gates | A25 has a performance assessment entry at every phase gate | Phase gate passes with no performance assessment |
| T-7 | Development lessons captured | Significant development outcomes recorded in A21 | No A21 entries from team development activities |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-30 | Expanded failure modes from 4 to 6 |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.6.2.4 · Figure 2-44*
*Source type: PMI-derived*
