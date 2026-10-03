---
skill_id: SKL-06-03
name: Capture and Archive Lessons Learned
pack: 06 — Closing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Guide §2.1.6.4 Manage Project Knowledge (closing activation)
performance_domains:
- Governance
- Team
focus_area: Closing
primary_artifact: A21 — Lessons Learned Register (Final version)
artifacts_updated:
- A05 — OPA
upstream_prerequisites:
- SKL-06-01
- SKL-06-02
- SKL-07-03 (retrospective inputs, if applicable)
downstream_skills: []
file_path: skills/06-closing/SKL-06-03-capture-and-archive-lessons-learned.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-06-03 — Capture and Archive Lessons Learned

**Skill ID:** SKL-06-03  
**Pack:** 06 — Closing  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Authority:** PMI-derived  
**Primary Reference:** Process-Groups §8.1 · PMBOK 8 — Close Project or Phase · Manage Project Knowledge  
**Secondary References:** Artifacts-V-1.1.md (A21 — Lessons Learned Register · A05 — OPA)  
**Lifecycle Stage:** Closing (and iteratively through execution)  
**Performance Domains:** Delivery · Measurement · Governance · Team  
**PMBOK 8 Principles Applied:** Stewardship · Value · Adaptability · Change  

---

## Purpose

Consolidate, finalize, validate, and archive the project's Lessons Learned Register to organizational process assets. This skill ensures that project knowledge — what worked, what did not, and what should change — is transferred from the project into the organization's institutional memory in a retrievable, actionable format.

---

## Scope

| In Scope | Out of Scope |
|---|---|
| Final consolidation of all lessons learned entries (A21) | Implementation of process improvements (PMO responsibility) |
| Quality review and deduplication of lessons | Portfolio-level knowledge synthesis |
| Categorization and tagging for retrieval | |
| Archiving finalized A21 to OPA (A05) | |
| Distributing summary to PMO and relevant stakeholders | |
| Updating templates or checklists where lessons indicate gaps | |

---

## Trigger Conditions

Activate this skill when:
- Project or phase closure is initiated (concurrent with SKL-06-01)
- Final Performance Review (SKL-06-02) is complete and performance findings are available
- PMO requests lessons learned submission prior to resource release
- Retrospective or phase-end review generates lessons that require formal capture

---

## Inputs

| Input | Source | Notes |
|---|---|---|
| Lessons Learned Register (all entries) | A21 | Full register from all lifecycle stages |
| Final Report | A17 (from SKL-06-02) | Performance findings to inform final lessons |
| Issue Log (closed) | A18 | Recurring issues = systemic lessons |
| Risk Register (closed) | A19 | Risk events that materialized = lessons |
| Change Log (closed) | A12 | Change patterns = planning or scope lessons |
| Quality Reports | A30 | Quality failures = process lessons |
| Retrospective outputs (if adaptive/hybrid) | Team artifacts | Sprint or phase retrospective findings |
| Stakeholder feedback | Surveys / meetings | Satisfaction insights |
| Project Management Plan | A06 | Tailor against planned approach |
| Organizational Process Assets | OPA (A05) | Existing LL categories, templates, taxonomy |

---

## Tools and Techniques

| Tool / Technique | Application |
|---|---|
| Expert Judgment | PM and team validate lessons for accuracy and applicability |
| Data Analysis — Document Analysis | Review all project documents for uncaptured lessons |
| Knowledge Management | Structured capture, tagging, and routing to OPA |
| Meetings — Lessons Learned Session | Facilitated session with project team and stakeholders |
| Facilitation | Draw out lessons in a psychologically safe environment |
| Root Cause Analysis | For recurring issues and materialized risks |
| Affinity Grouping | Cluster lessons by category for retrieval efficiency |

---

## Outputs

| Output | Artifact | Notes |
|---|---|---|
| Lessons Learned Register (final, archived) | A21 | Signed off and transferred to OPA |
| Organizational Process Assets Updates | A05 / OPA | Updated templates, processes, checklists |
| Lessons Learned Summary (distribution copy) | A21 extract | Shared with PMO, program manager, portfolio |

---

## Lessons Learned Register Structure (A21 — Final Version)

Each entry in the finalized A21 register must conform to this structure:

```markdown
## Lessons Learned Entry

**LL-ID:** LL-[PROJ-ID]-[NNN]
**Date Captured:**
**Captured By:**
**Lifecycle Stage:** [ ] Pre-Sign  [ ] Initiating  [ ] Planning  [ ] Executing  [ ] M&C  [ ] Closing
**Category:** [ ] Scope  [ ] Schedule  [ ] Cost  [ ] Quality  [ ] Risk  [ ] Stakeholder
           [ ] Resources  [ ] Procurement  [ ] Communications  [ ] Governance  [ ] Team
           [ ] Technology  [ ] Process  [ ] Tool  [ ] Other
**Impact Level:** [ ] High  [ ] Medium  [ ] Low

### Situation
[What was the context or situation that prompted this lesson?]

### What Happened
[Describe what occurred — factual, not evaluative]

### Root Cause
[Why did this happen?]

### Impact
[What was the effect on the project — scope, schedule, cost, quality, team, stakeholders?]

### What We Would Do Differently
[Specific, actionable recommendation for future projects]

### Applicable Future Project Types
[What types of projects should pay attention to this lesson?]

### OPA Update Recommended?
[ ] Yes — Recommend updating: [template / checklist / process / policy]
[ ] No

### Validated By
**PM Validation:** [ ] Confirmed  **Date:**
**Sponsor Awareness:** [ ] Notified  **Date:**
**PMO Archived:** [ ] Yes  **Date:**  **Archive Reference:**
```

---

## Facilitated Lessons Learned Session Guide

Use this structure for the closing lessons learned session (60–90 minutes recommended):

| Time | Activity | Facilitator Action |
|---|---|---|
| 0–10 min | Opening — set context and psychological safety | Confirm: this is about improvement, not blame |
| 10–30 min | What worked well? | Round-robin; capture verbatim |
| 30–50 min | What should we do differently? | Root cause for top issues |
| 50–65 min | What surprised us? | Surface hidden knowledge |
| 65–80 min | Recommendations for future projects | Prioritize top 5 |
| 80–90 min | OPA update candidates | Identify template/process gaps |

---

## Lessons Learned Taxonomy (Categorization Tags)

Use consistent tags for OPA retrievability:

| Domain Tag | Sub-tags |
|---|---|
| `scope` | requirements, WBS, scope creep, acceptance |
| `schedule` | estimation, critical path, dependencies, milestones |
| `cost` | estimation, procurement, reserves, EVM |
| `quality` | standards, testing, defects, audits |
| `risk` | identification, response, materialization, reserves |
| `stakeholder` | engagement, expectations, communications, conflict |
| `resources` | acquisition, capacity, skills, virtual team |
| `procurement` | vendor selection, contract, performance, closure |
| `governance` | change control, authority, escalation, thresholds |
| `team` | collaboration, culture, conflict, motivation |
| `technology` | tools, PMIS, infrastructure |
| `process` | methodology, tailoring, templates, PMO |

---

## Authority Routing

| Decision | Authority Level | Threshold |
|---|---|---|
| Approve final A21 for archiving | PM + PMO | T1 |
| Update organizational templates based on LL | PMO | T2 |
| Update organizational processes / policies | PMO + Governance | T2–T3 |
| Distribute lessons to program / portfolio | Program/Portfolio Manager | T2 |
| Suppress a lesson (confidentiality / legal) | Sponsor + Legal | T3 |

---

## Tests

| Test ID | Test Description | Pass Condition | Fail Condition |
|---|---|---|---|
| T01 | All LL entries have LL-ID assigned | Every entry has a unique LL-[PROJ]-[NNN] identifier | Any entry without LL-ID |
| T02 | Category tag present on every entry | Every entry has at least one category tag selected | Any entry with no category |
| T03 | Root cause populated on every entry | Root Cause field is non-blank | Any root cause field blank |
| T04 | All High-impact entries have OPA update recommendation | OPA Update = Yes with named target | High-impact entry with OPA Update = No or blank |
| T05 | Final A21 reviewed by PM | PM Validation = Confirmed with date | PM Validation unchecked |
| T06 | Sponsor acknowledged | Sponsor Awareness = Notified with date | Sponsor row blank |
| T07 | PMO archive reference assigned | PMO Archived = Yes with archive reference | Archive reference blank |
| T08 | Distribution copy sent | PMO, program manager, portfolio receipt confirmed | No distribution record |
| T09 | OPA template/checklist updates submitted | OPA improvement requests filed for all flagged entries | Flagged entries with no follow-up |

---

## Validation Criteria

This skill output is valid when:
- [ ] All LL entries have LL-ID, category, and root cause populated
- [ ] Every entry with Impact Level = High has an explicit OPA update recommendation
- [ ] Final A21 has been reviewed by PM and sponsor-acknowledged
- [ ] PMO has confirmed archive reference assigned
- [ ] Distribution copy sent to PMO, program manager, and relevant portfolio
- [ ] OPA updates (templates, checklists) have been submitted or queued

---

## Failure Cases

| Failure | Indicator | Resolution |
|---|---|---|
| Lessons captured only at closure, not iteratively | All entries date = project end | Accept for this project; build iterative capture into SKL-04-02 for future projects |
| Entries are vague ("communication was poor") | No root cause, no recommendation | Facilitate root cause session; reject entries without actionable recommendations |
| A21 not formally archived | No PMO archive reference | Do not sign Project Closure Record until archive reference issued |
| High-impact lessons with no OPA update | LL flag unchecked | PM to raise OPA improvement request to PMO before closure |
| No psychologically safe capture process | Team silent in session | Use anonymous pre-session survey; bring in neutral facilitator |

---

## Linked Skills

| Skill ID | Skill Name | Relationship |
|---|---|---|
| SKL-04-02 | Manage Project Knowledge | Iterative LL capture during execution |
| SKL-06-01 | Close Project or Phase | Requires finalized A21 before OPA update |
| SKL-06-02 | Conduct Final Performance Review | Provides performance findings for final LL entries |
| SKL-07-03 | Facilitate Retrospectives (Pack 07) | Adaptive LL source for hybrid projects |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | PMO Repository | Initial build |
| 1.1.0 | 2026-05-30 | QA Phase A | Added YAML front matter, Tests table (T01–T09), Change Log |

---

*Authority: PMI-derived — Process-Groups §8.1 · PMBOK 8 · Manage Project Knowledge*  
*PMO Skill Repository v1.1.0 · Pack 06 — Closing*
