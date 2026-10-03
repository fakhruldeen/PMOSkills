---
skill_id: SKL-07-03
name: Facilitate Retrospectives and Continuous Improvement
pack: 07 — Adaptive & Hybrid
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: PMBOK8 Standard Principle 12 · APG §5 · APG §3.3 Table 3-2
performance_domains:
- Team
- Measurement
- Development Approach and Life Cycle
focus_area: Executing
primary_artifact: A21 — Retrospective section
artifacts_updated:
- Tailoring Changelog
- A06
upstream_prerequisites:
- SKL-07-02
downstream_skills:
- SKL-07-01 (re-tailoring trigger)
- SKL-06-03
file_path: skills/07-adaptive-hybrid/SKL-07-03-facilitate-retrospectives-and-continuous-improvement.md
tests: 9
lifecycle_applicability:
- adaptive
- hybrid
lifecycle_notes: Primary focus on agile release cycles, sprint backlogs, and hybrid
  integration frameworks.
---

# SKL-07-03 — Facilitate Retrospectives and Continuous Improvement

**Skill ID:** SKL-07-03  
**Pack:** 07 — Adaptive & Hybrid  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Authority:** PMI-derived  
**Primary Reference:** APG §5 (Delivering in an Agile Environment) · PMBOK 8 Standard Principle 12 (continuous improvement) · PMBOK 8 Guide §2.3  
**Secondary References:** APG §3.3 Table 3-2 (Tailoring options) · Artifacts-V-1.0.2.md (Item 29 — Continuous Adaptation Tracking Loop) · Artifacts-V-1.1.md (A21 — Lessons Learned Register)  
**Lifecycle Stage:** Executing (per iteration / phase)  
**Performance Domains:** Team · Measurement · Development Approach and Life Cycle  
**PMBOK 8 Principles Applied:** Stewardship · Value · Adaptability · Change · Team (empowered culture)  

---

## Purpose

Facilitate structured retrospective sessions at the end of each iteration, phase, or trigger event to inspect team process, delivery quality, and ways of working. Capture improvement actions, feed them into the next cycle, and maintain a continuous improvement log that contributes to the project's Lessons Learned Register (A21) and organizational process improvement.

---

## Scope

| In Scope | Out of Scope |
|---|---|
| Sprint / iteration retrospectives | Formal post-project lessons learned (see SKL-06-03) |
| Phase-end retrospectives (predictive / hybrid) | Performance appraisals or HR actions |
| Continuous improvement action tracking | Organizational process transformation |
| Process friction identification and reduction | Team member disciplinary processes |
| Contributing to A21 Lessons Learned Register | |
| Tailoring changelog updates based on retrospective findings | |

---

## Trigger Conditions

Activate this skill when:
- The end of a sprint or timebox is reached (iteration-based)
- A phase gate is approaching (predictive or hybrid)
- Team performance is declining and a process inspection is needed
- The PM or delivery lead identifies systemic friction or recurring blockers
- A process change is being considered and evidence is needed

---

## Key Concept: The Agile Principle

> *"At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behaviour accordingly."*  
> — Agile Manifesto Principle 12 [APG §2.2]

Retrospectives are not optional events — they are the primary mechanism by which an adaptive team continuously improves. A team that delivers without retrospecting is delivering without learning.

---

## Retrospective Formats

### Standard: Start / Stop / Continue

| Category | Question | Output |
|---|---|---|
| **Start** | What should we begin doing that we are not doing? | New practices to try |
| **Stop** | What are we doing that creates friction or waste? | Practices to eliminate |
| **Continue** | What is working well and should be preserved? | Strengths to reinforce |

### Alternative: 4Ls (Liked, Learned, Lacked, Longed For)

| Category | Question |
|---|---|
| **Liked** | What did you appreciate about this iteration? |
| **Learned** | What did you learn that you didn't know before? |
| **Lacked** | What was missing that would have made the iteration better? |
| **Longed For** | What do you wish had been available or done differently? |

### Alternative: Mad / Sad / Glad

Useful when team morale or emotional dynamics need to be surfaced safely.

---

## Retrospective Facilitation Guide

| Phase | Time | Facilitator Action |
|---|---|---|
| **Set the stage** | 5 min | Confirm safety: this is about process, not people. Use Prime Directive: "Everyone did the best job they could with the knowledge, skills, and resources available." |
| **Gather data** | 15 min | Individually write observations; post to board (physical or virtual) |
| **Generate insights** | 20 min | Group themes; identify root causes of top friction areas |
| **Decide on actions** | 10 min | Select 1–3 improvement actions; assign owner and timebox |
| **Close** | 5 min | Confirm actions; add to improvement backlog; update A21 |

**Total: 50–60 min for a 2-week sprint.** Scale proportionally for longer cycles.

---

## Inputs

| Input | Source | Notes |
|---|---|---|
| Sprint / Phase metrics | PMIS / team dashboard | Velocity, defect rate, blockers per sprint |
| Sprint Review feedback | Stakeholders | Satisfaction signals from demo |
| Team observations | Team members | Qualitative data from daily work |
| Previous retrospective actions | Improvement backlog | Were last actions completed? |
| Lessons Learned Register | A21 | Existing entries for context |
| Risk Register | A19 | Process-related risks that materialized |
| Issue Log | A18 | Recurring issues = systemic improvement targets |
| Tailoring Changelog | A06 or standalone | Prior process adaptations |

---

## Tools and Techniques

| Tool / Technique | Application |
|---|---|
| Facilitation | Create a psychologically safe environment; prime directive |
| Root Cause Analysis | For recurring issues: 5-Whys or fishbone |
| Affinity Grouping | Cluster observations into themes |
| Dot Voting | Team votes on top improvement priorities |
| Improvement Backlog | Persistent log of actions from all retrospectives |
| Kanban board (process view) | Visualize workflow friction and bottlenecks |

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Retrospective Action Items | Improvement backlog | 1–3 actions per retrospective; owned and timeboxed |
| Tailoring Changelog entry | A06 / standalone | Documents what process was changed and why |
| Lessons Learned Register entry | A21 | Significant improvements and root causes archived |
| OPA improvement recommendations | OPA (A05) | If pattern applies beyond this project |

---

## Retrospective Log Template

```markdown
## Retrospective Record

**Retrospective ID:** RETRO-[PROJ-ID]-[NNN]
**Date:**
**Sprint / Phase:**
**Facilitator:**
**Attendees:**

---

### Metrics This Cycle
| Metric | Value | vs. Target |
|---|---|---|
| Velocity (story points) | | |
| Stories completed / committed | | |
| Defects introduced | | |
| Blockers (count, avg duration) | | |

---

### Start (new practices to try)
- 

### Stop (things creating friction)
- 

### Continue (what's working)
- 

---

### Top Issues (with root cause)
| Issue | Root Cause (5-Why) | Category |
|---|---|---|
| | | |

---

### Improvement Actions This Cycle
| # | Action | Owner | Due By | Success Criteria |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

### Previous Actions Review
| Action | Status | Impact |
|---|---|---|
| | [ ] Done  [ ] Partial  [ ] Dropped | |

---

### A21 Lessons Learned Candidates
[ ] Yes — LL entry created: LL-[ID]  
[ ] No notable lessons this cycle

**Tailoring Change Recommended?** [ ] Yes: ___  [ ] No
```

---

## Continuous Improvement Backlog

Maintain a persistent improvement backlog across all retrospectives:

```markdown
## Continuous Improvement Backlog

| ID | Action | Source Retro | Owner | Status | Completed Date | Impact |
|---|---|---|---|---|---|---|
| IMP-001 | | RETRO-NNN | | Open | | |
```

---

## Authority Routing

| Decision | Authority Level | Threshold |
|---|---|---|
| Implement process improvement within team | Delivery Lead / PM | T1 |
| Change team working agreements | PM + Team | T1 |
| Change sprint cadence or timebox length | PM + Sponsor | T2 |
| Change delivery approach based on retrospective findings | PM + PMO | T2 |
| Escalate systemic org-level friction | PM → PMO | T2–T3 |

---

## Tests

| Test ID | Test Description | Pass Condition | Fail Condition |
|---|---|---|---|
| T01 | Retrospective held at end of every sprint | RETRO record exists for every sprint | Any sprint with no RETRO record |
| T02 | Prime Directive stated at session open | Facilitator notes confirm Prime Directive recited | No reference to psychological safety in record |
| T03 | 1–3 improvement actions captured per retrospective | Improvement Actions table has 1–3 rows with owner and due date | Zero actions recorded or actions with no owner |
| T04 | Previous cycle actions reviewed | "Previous Actions Review" section populated | Section blank in any retrospective beyond the first |
| T05 | Root cause provided for top issues | Top Issues table has root cause (5-Why or similar) | Issues listed without root cause |
| T06 | A21 Lessons Learned Candidates field completed | Field checked Yes or No with LL-ID if Yes | Field blank |
| T07 | Tailoring change recommendation documented | Tailoring Change field answered Yes/No with detail | Field blank |
| T08 | Retrospective metrics populated | Velocity, stories, defects, blockers all entered | Metrics table empty |
| T09 | All improvement actions either closed or carried forward | Improvement backlog shows status for every action | Actions with no status update after 2 sprints |

---

## Validation Criteria

This skill output is valid when:
- [ ] Retrospective is held at end of every sprint or phase
- [ ] Psychological safety is established at the start of each session
- [ ] 1–3 improvement actions are captured with owner and due date
- [ ] Previous cycle actions are reviewed before new actions are added
- [ ] Significant insights are contributed to A21
- [ ] Tailoring changelog is updated if a process change is adopted

---

## Failure Cases

| Failure | Indicator | Resolution |
|---|---|---|
| Retrospectives skipped ("no time") | Same issues recurring sprint after sprint | Protect retrospective slot in sprint cadence; timebox to 45 min if needed |
| Team silent in retrospective | Only PM or lead speaks | Use anonymous pre-retro survey or written format (sticky notes) |
| No follow-through on actions | Improvement backlog grows without closures | Review previous actions first in every retrospective |
| Retrospective focuses on people, not process | Blame language observed | Restate Prime Directive; refocus to process, tools, and practices |
| Actions too vague | "Communicate better" with no definition | Require specific, measurable, owned actions |

---

## Linked Skills

| Skill ID | Skill Name | Relationship |
|---|---|---|
| SKL-07-02 | Manage Backlog and Iterations | Retrospective is a core sprint event |
| SKL-07-01 | Select and Tailor Lifecycle Approach | Retrospective findings may trigger re-tailoring |
| SKL-06-03 | Capture and Archive Lessons Learned | Final retrospective feeds SKL-06-03 |
| SKL-04-02 | Manage Project Knowledge | Retrospective insights = knowledge capture |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | PMO Repository | Initial build |
| 1.1.0 | 2026-05-30 | QA Phase A | Added YAML front matter, Tests table (T01–T09), Change Log; version bump |

---

*Authority: PMI-derived — APG §5 · PMBOK 8 Standard Principle 12 · APG §3.3 Table 3-2*  
*PMO Skill Repository v1.1.0 · Pack 07 — Adaptive & Hybrid*
