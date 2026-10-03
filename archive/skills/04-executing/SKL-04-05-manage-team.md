---
skill_id: SKL-04-05
skill_name: Manage Team
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A25 — Team Operating and Responsibility Record (performance and
  conflict log)
artifacts_updated:
- A18 — Issue, Impediment and Action Log (team issues)
- A21 — Lessons Learned Record
- A26 — Resource Capacity and Acquisition Record (team composition changes)
pmbok8_anchor: Guide §2.6.2.5 Manage Team · Figure 2-45
performance_domains:
- Resources
- Team
- Leadership
focus_area: Executing
upstream_prerequisites:
- SKL-04-04 — team development must be underway
downstream_skills:
- SKL-05-08 — Control Resources
file_path: skills/04-executing/SKL-04-05-manage-team.md
tests: 8
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-05 — Manage Team

**Pack:** 04 — Executing
**Status:** Active · Tested
**Primary Artifact:** A25 — Team Operating and Responsibility Record
**PMBOK8 Anchor:** Guide §2.6.2.5 · Figure 2-45

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-8 are fully defined in the Tests section below.

---

## Purpose

Manage Team tracks team member performance, provides feedback, resolves issues and conflicts, and manages changes to team composition. It is the active day-to-day team leadership skill. Issues that exceed the PM's authority are escalated through A18.

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Team assignments and RACI | A25 | RACI section | Current |
| Work package status | A08 / A18 | WBS + issue log | Current |
| Development plans | A25 | Development section | Current |
| Ground rules | A25 | Ground rules section | Confirmed |
| Escalation thresholds | A06 | §4 authority levels | Current |

---

## Steps

### Step 1 — Observe and Track Performance
Monitor team member performance against A25 RACI assignments and A08 WBS work packages.

### Step 2 — Provide Feedback
Conduct regular one-to-one performance conversations. Minimum once per reporting period per team member. Document outcomes in A25 performance log.

### Step 3 — Manage Conflicts
Apply conflict resolution techniques in preference order:

| Technique | Description | Use when |
|---|---|---|
| Collaborate / Problem-solve | Work with all parties to find a solution satisfying all needs | Sufficient time and willingness exists (preferred) |
| Compromise / Reconcile | Both parties give up something to reach middle ground | Collaborate has failed; both parties are flexible |
| Smooth / Accommodate | Emphasize agreement; de-emphasize differences | Short-term, low-stakes disagreement |
| Force / Direct | PM imposes a decision | Schedule-critical situation with no time for deliberation (last resort) |
| Withdraw / Avoid | Defer dealing with the conflict | Only when conflict will self-resolve imminently |

Document every conflict instance and resolution in A25 conflict log.

### Step 4 — Manage Interpersonal Issues
For team issues that cannot be resolved at PM level, log in A18 and escalate per A06 thresholds.

### Step 5 — Manage Team Composition Changes
Update A25 RACI, A26 capacity, and raise A12 if baselines are affected.

### Step 6 — Update Lessons Learned
Capture significant team management events in A21.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Performance conversation log | A25 | Performance section |
| Conflict resolution log | A25 | Conflict section |
| Team issues | A18 | Issue log |
| Team composition changes | A25 + A26 | RACI + capacity |
| Change requests (if baseline affected) | A12 | Pending items |
| Team management lessons | A21 | Team section |

---

## Operating Rules

1. Every performance conversation must be documented in A25 within 48 hours of occurrence.
2. Conflicts must not persist unaddressed beyond one full reporting period without an A18 entry.
3. Team composition changes that affect cost or schedule baselines must route through A12.
4. Force/direct conflict resolution must be documented with explicit rationale in A25.
5. All A25 RACI changes must be reflected in A26 capacity within the same reporting period.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Undocumented performance feedback | Team members receive verbal feedback not captured in A25 | Retroactive documentation; establish documentation discipline |
| Unresolved conflict | Conflict known to PM but not in A25 | Log immediately; apply conflict resolution technique |
| Force overuse | A25 shows force/direct used more than once per phase | PM self-assessment; recalibrate to collaborative approach |
| RACI stale after team change | A25 RACI shows departed team member still assigned | Immediate RACI update; notify affected work package owners |
| Undocumented termination or release | Team member released with no A25 update or transition record | Retroactive A25 update; confirm all in-progress work reassigned; update A26 capacity |
| Performance feedback not acknowledged | A25 shows feedback given but no agreed actions from team member | Follow-up session required; document outcome; escalate to functional manager if pattern persists |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Performance log current | A25 performance log has entries for every active team member within current reporting period | Any team member with no performance log entry for more than one reporting period |
| T-2 | Conflicts documented | Every conflict has an A25 entry with resolution status | Conflict known to PM but not documented in A25 |
| T-3 | Escalation path used | Issues beyond PM authority threshold are in A18 | High-severity team issue held at PM level without A18 entry |
| T-4 | Collaboration preferred | A25 shows collaborative resolution attempted before force/direct | Force/direct applied with no evidence of prior collaboration attempt |
| T-5 | RACI updated on change | A25 RACI updated within same reporting period as team composition change | RACI not updated within one period of team change |
| T-6 | A26 updated on change | A26 capacity updated to reflect team composition change | A26 out of sync with actual team |
| T-7 | Baseline-affecting changes via A12 | Team changes affecting cost or schedule have A12 change request | Change implemented without A12 entry |
| T-8 | Team management lessons in A21 | Significant team management events appear in A21 | No A21 entries from team management activities |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-30 | Expanded failure modes from 4 to 6 |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.6.2.5 · Figure 2-45*
*Source type: PMI-derived*
