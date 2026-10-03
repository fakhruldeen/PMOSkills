---
skill_id: SKL-07-02
name: Manage Backlog and Iterations
pack: 07 — Adaptive & Hybrid
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: APG §5 · PMBOK8 Guide §2.3 (Development Approach and Life Cycle)
performance_domains:
- Development Approach and Life Cycle
- Planning
- Delivery
- Measurement
focus_area: Planning · Executing
primary_artifact: A08 — Backlog section
artifacts_updated:
- A15 — velocity / release forecast
- A07 — sprint review feedback
upstream_prerequisites:
- SKL-07-01
downstream_skills:
- SKL-07-03
- SKL-04-06
- SKL-05-03
file_path: skills/07-adaptive-hybrid/SKL-07-02-manage-backlog-and-iterations.md
tests: 9
lifecycle_applicability:
- adaptive
- hybrid
lifecycle_notes: Primary focus on agile release cycles, sprint backlogs, and hybrid
  integration frameworks.
---

# SKL-07-02 — Manage Backlog and Iterations

**Skill ID:** SKL-07-02  
**Pack:** 07 — Adaptive & Hybrid  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Authority:** PMI-derived  
**Primary Reference:** APG §5 (Delivering in an Agile Environment) · PMBOK 8 Guide §2.3 (Development Approach and Life Cycle)  
**Secondary References:** APG §3.1.4 (Agile Life Cycles) · APG §3.2 (Mixing Agile Approaches) · Artifacts-V-1.1.md (A08 — Backlog)  
**Lifecycle Stage:** Planning · Executing (per iteration)  
**Performance Domains:** Development Approach and Life Cycle · Planning · Delivery · Measurement  
**PMBOK 8 Principles Applied:** Value · Adaptability · Change · Stakeholders · Quality  

---

## Purpose

Create, refine, prioritize, and manage a product or work backlog across adaptive and hybrid project lifecycles. Execute timeboxed iterations (sprints) or manage continuous flow (Kanban) to deliver value incrementally, incorporating stakeholder feedback after each iteration to reprioritize and adapt the next cycle.

---

## Scope

| In Scope | Out of Scope |
|---|---|
| Backlog creation, prioritization, and maintenance | Predictive-only WBS management (see SKL-03-05) |
| Sprint/iteration planning and execution | Program-level backlog (Scaled Agile) |
| Increment review and stakeholder feedback incorporation | Contract management for agile procurement |
| Flow-based work management (Kanban) | Organizational agile transformation |
| Velocity tracking and capacity calibration | |
| Definition of Ready (DoR) and Definition of Done (DoD) | |

---

## Trigger Conditions

Activate this skill when:
- Project lifecycle is adaptive or hybrid and a backlog-based delivery approach has been selected (SKL-07-01)
- An iteration/sprint is about to begin and needs planning
- The backlog requires grooming/refinement before the next iteration
- A sprint review reveals scope changes that require backlog reprioritization
- Flow-based delivery (Kanban) requires WIP limit adjustment or queue reprioritization

---

## Key Concepts

### Iteration-Based vs. Flow-Based Agile

| Dimension | Iteration-Based (Scrum-like) | Flow-Based (Kanban-like) |
|---|---|---|
| Work cadence | Fixed timebox (1–4 weeks) | Continuous pull based on capacity |
| Planning unit | Sprint / Iteration | Feature / Story |
| Commitment | Sprint backlog committed at start | WIP limit defines active work |
| Review cadence | End of each timebox | On completion or by schedule |
| Retrospective cadence | End of each sprint | By schedule or trigger |
| Best for | Stable team, predictable capacity | Variable flow, support/maintenance |

### Product Backlog Hierarchy

```
Product Vision
  └── Epics (large features, months of work)
        └── User Stories / Features (iteration-sized)
              └── Tasks (day-sized work items)
```

### Prioritization Methods

| Method | Description | Best For |
|---|---|---|
| **MoSCoW** | Must / Should / Could / Won't | Requirements triage |
| **WSJF** | Weighted Shortest Job First | SAFe / program-level |
| **Value / Risk matrix** | 2x2: High value + Low risk first | Initial backlog ordering |
| **Customer priority** | Direct stakeholder ranking | Simple adaptive teams |

---

## Inputs

| Input | Source | Notes |
|---|---|---|
| Product Vision / Project Charter | A01 | Provides the "why" for the backlog |
| Requirements Documentation | A08 | Initial requirements as backlog seed |
| Stakeholder Register | A10 | Stakeholder priorities and feedback sources |
| Project Management Plan — Approach Section | A06 §2 | Confirms iteration cadence and delivery model |
| Previous Iteration Review outputs | Team — sprint review | Accepted/rejected stories; feedback |
| Velocity history | Team PMIS | Prior sprint velocity for capacity planning |
| Definition of Ready (DoR) | Team agreement | Criteria a backlog item must meet before pull into sprint |
| Definition of Done (DoD) | Team agreement | Criteria that must be met for a story to be "done" |
| Risk Register | A19 | Risk items may generate backlog items |

---

## Tools and Techniques

| Tool / Technique | Application |
|---|---|
| Backlog Refinement (Grooming) | Regular session to add detail, estimate, and prioritize items |
| Sprint Planning Meeting | Select items from backlog into sprint backlog; confirm capacity |
| Daily Standup (Daily Scrum) | 15-min synchronization: what was done, what's next, blockers |
| Sprint Review / Iteration Review | Demo working increment to stakeholders; collect feedback |
| Sprint Retrospective | Team reflection on process; see SKL-07-03 |
| Velocity Tracking | Measure story points completed per sprint for forecasting |
| Burndown / Burnup Charts | Visual radiators for sprint and release progress |
| Kanban Board | Visualize flow; manage WIP limits; identify bottlenecks |
| Definition of Ready / Done | Gate criteria for backlog entry and story completion |
| Relative Estimation (Planning Poker) | Consensus-based story point sizing |

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Product/Work Backlog (updated) | A08 | Prioritized list of all remaining work |
| Sprint Backlog | A08 (sprint section) | Committed items for the current iteration |
| Increment (working output) | Delivery output | Completed, accepted stories from the sprint |
| Velocity Record | A15 (schedule) | Actual velocity for forecasting |
| Updated Stakeholder Engagement Assessment | A07 | Feedback incorporated from sprint review |

---

## Backlog Item Template (A08)

```markdown
## Backlog Item

**Item ID:** BI-[NNN]
**Type:** [ ] Epic  [ ] Feature  [ ] User Story  [ ] Task  [ ] Bug  [ ] Spike
**Parent Epic/Feature:** BI-[NNN]
**Title:**
**As a** [user type], **I want** [action], **so that** [value/outcome].

**Acceptance Criteria:**
- [ ]
- [ ]
- [ ]

**Story Points:** ___  **Priority:** [ ] Must  [ ] Should  [ ] Could  [ ] Won't
**Status:** [ ] Backlog  [ ] Ready  [ ] In Sprint  [ ] In Progress  [ ] Done  [ ] Cancelled
**Sprint/Iteration:** ___  **Assigned To:** ___

**DoR Check (before pull):**
- [ ] Acceptance criteria defined
- [ ] Story sized by team
- [ ] Dependencies identified and cleared
- [ ] No blockers at time of pull

**DoD Check (before Done):**
- [ ] Acceptance criteria all met
- [ ] Peer reviewed
- [ ] Testing passed
- [ ] Documentation updated
- [ ] Product Owner accepted
```

---

## Sprint / Iteration Cadence

| Event | Frequency | Duration (guideline) | Purpose |
|---|---|---|---|
| Backlog Refinement | Weekly or bi-weekly | 1–2 hours | Groom top items; size and prioritize |
| Sprint Planning | Start of each sprint | 2–4 hours (2-week sprint) | Select sprint backlog; confirm capacity |
| Daily Standup | Daily | 15 minutes | Synchronize; surface blockers |
| Sprint Review | End of sprint | 1–2 hours | Demo increment; collect stakeholder feedback |
| Sprint Retrospective | End of sprint | 1–1.5 hours | Improve process; see SKL-07-03 |

---

## Velocity and Forecasting

```
Velocity = Story Points Completed Per Sprint (3-sprint rolling average)

Release Forecast:
  Remaining Story Points / Average Velocity = Sprints Remaining

Capacity Check:
  Net Available Hours = Gross Team Hours − Meetings − Admin − PTO
  Story Point Pull Ceiling = Net Hours / Average Hours per Story Point
```

---

## Authority Routing

| Decision | Authority Level | Threshold |
|---|---|---|
| Reprioritize backlog | Product Owner | T1 |
| Add new epics or features to backlog | Product Owner + PM | T1–T2 |
| Change sprint scope mid-sprint | PM + Product Owner | T2 |
| Release increment to production | Product Owner + Sponsor | T1–T2 |
| Terminate a sprint | PM + Sponsor | T2–T3 |

---

## Tests

| Test ID | Test Description | Pass Condition | Fail Condition |
|---|---|---|---|
| T01 | Backlog created and prioritized before sprint 1 | A08 backlog section exists with prioritized items | A08 backlog section empty or unprioritized at sprint 1 |
| T02 | All top-of-backlog items meet DoR before sprint planning | DoR checklist confirmed on all items entering sprint | Any pulled item missing DoR fields |
| T03 | DoD defined and agreed by team before sprint 1 | DoD criteria documented in A08 or team agreement | No DoD defined at sprint 1 |
| T04 | Velocity tracked from sprint 1 | Velocity record in A15 updated each sprint | No velocity data after sprint 3 |
| T05 | Sprint review held with stakeholder attendance | Sprint review record shows stakeholder names | No sprint review record or stakeholder absent |
| T06 | Stakeholder feedback incorporated into backlog before next sprint planning | Backlog updated after each sprint review | No backlog update after sprint review |
| T07 | Increment accepted by Product Owner each sprint | Accepted stories marked Done with PO sign-off | Stories marked Done without PO acceptance |
| T08 | Burndown or burnup chart maintained | Visual radiator updated each sprint | No visual radiator or radiator not updated |
| T09 | Retrospective held each sprint | RETRO record exists for every sprint (see SKL-07-03) | Any sprint without retrospective record |

---

## Validation Criteria

This skill output is valid when:
- [ ] Backlog is prioritized and all top-of-backlog items meet DoR before sprint planning
- [ ] Sprint backlog is committed with confirmed team capacity
- [ ] Velocity is tracked for at least 3 sprints before using for forecasting
- [ ] Increment is demonstrated to stakeholders at each sprint review
- [ ] Stakeholder feedback is incorporated into backlog before next sprint planning
- [ ] DoD is defined and applied to every completed story

---

## Failure Cases

| Failure | Indicator | Resolution |
|---|---|---|
| Backlog contains hundreds of items with no prioritization | All items = "Must Have" | Facilitate MoSCoW or WSJF prioritization session with Product Owner |
| Team pulls items that don't meet DoR | Blockers appear immediately in sprint | Enforce DoR gate; return to backlog if criteria not met |
| Sprint scope added mid-sprint | Team velocity declining; sprint not completing | Protect sprint scope; defer new items to backlog |
| Velocity not tracked | Forecasting is guesswork | Implement story point tracking from sprint 1 |
| No stakeholder attendance at sprint review | Feedback loop broken | Escalate to sponsor; re-engage stakeholders via SKL-04-06 |
| DoD not defined | "Done" means different things to different people | Facilitate team session to define and agree DoD before sprint 1 |

---

## Linked Skills

| Skill ID | Skill Name | Relationship |
|---|---|---|
| SKL-07-01 | Select and Tailor Lifecycle Approach | Approach selection activates this skill |
| SKL-07-03 | Facilitate Retrospectives | End of each sprint; continuous improvement |
| SKL-04-06 | Manage Stakeholder Engagement | Sprint reviews are key engagement touchpoints |
| SKL-05-03 | Control Scope | Backlog change = scope change; may trigger change control |
| SKL-03-05 | Define and Develop Scope | Seeds initial backlog from requirements |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | PMO Repository | Initial build |
| 1.1.0 | 2026-05-30 | QA Phase A | Added YAML front matter, Tests table (T01–T09), Change Log; version bump |

---

*Authority: PMI-derived — APG §5 · PMBOK 8 Guide §2.3 · APG §3.1.4 · APG §3.2*  
*PMO Skill Repository v1.1.0 · Pack 07 — Adaptive & Hybrid*
