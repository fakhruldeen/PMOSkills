---
skill_id: SKL-04-02
skill_name: Manage Project Knowledge
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A21 — Lessons Learned Record
artifacts_updated:
- A05 — Context Register (OPA updates)
- A17 — Integrated Performance Reporting Record (knowledge digest entries)
- A28 — Communications and Reporting Record (knowledge-sharing events)
pmbok8_anchor: Guide §2.1.6.4 Manage Project Knowledge · Figure 2-6 · Stewardship
  Principle
performance_domains:
- Governance
- Delivery
- Team
focus_area: Executing
upstream_prerequisites:
- SKL-04-01 — project work must be underway
- SKL-03-08 — A28 communications plan must exist (for knowledge-sharing events)
downstream_skills:
- SKL-05-01 — Monitor and Control Project Work (performance data fed by knowledge
  capture)
- SKL-06-03 — Capture and Archive Lessons Learned
file_path: skills/04-executing/SKL-04-02-manage-project-knowledge.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-02 — Manage Project Knowledge

**Pack:** 04 — Executing  
**Status:** Active · Tested  
**Primary Artifact:** A21 — Lessons Learned Record  
**PMBOK8 Anchor:** Guide §2.1.6.4 · Figure 2-6 · Stewardship Principle

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-9 are fully defined in the Tests section below.

---

## Purpose

Manage Project Knowledge ensures that explicit and tacit knowledge generated during project execution is captured, categorized, shared among the team, and transferred to the organization's process assets (OPA). A21 is a continuous execution artifact — it is **not** a closure document and must be updated throughout all project phases. This skill embodies the PMBOK 8 Stewardship Principle: the project team holds knowledge in trust for the organization, not just for the current project.

---

## Knowledge Types

| Type | Description | Capture method |
|---|---|---|
| Explicit | Documented, transferable knowledge — decisions, plans, records, data | Written entries in A21 |
| Tacit | Experience-based, contextual knowledge — judgment, intuition, craft | Facilitated sessions, mentoring, pair work, retrospectives |
| Cultural | Organizational norms, unwritten rules, stakeholder behavioral patterns | Narrative capture in A21; OPA notes in A05 |

---

## Inputs

| Input | Artifact | Section | Notes |
|---|---|---|---|
| Issues and resolutions | A18 | Closed items | Every significant closed issue triggers an A21 entry |
| Change decisions | A12 | Closed items | Approved and rejected CRs with learning value |
| Work performance data | — | From SKL-04-01 | Observations from execution |
| OPA repository | A05 | OPA section | Existing knowledge to avoid duplication |
| Performance reports | A17 | Current period | Variances and trend patterns are knowledge inputs |
| Risk events | A19 | Triggered/closed risks | Risk trigger outcomes generate lessons |
| Communications log | A28 | Delivery log | Communication failures and successes generate lessons |
| Team performance assessments | A25 | Performance section | Team dynamics insights feed A21 |

---

## Steps

### Step 1 — Establish and Confirm Knowledge Capture Cadence
Define when and how lessons are captured. Minimum cadence:
- After each phase gate
- After any significant issue resolved from A18 (high or critical priority)
- After any key milestone (hit or missed)
- After any risk event triggered (from A19)
- After any material change approved in A12
- After any communications failure or stakeholder escalation

Document cadence in A14 knowledge management section. Confirm cadence is aligned with A28 reporting cycle so knowledge entries support performance reporting.

### Step 2 — Capture Explicit Knowledge
Record factual findings, decisions, and outcomes in A21. Each entry must include:

| Field | Required | Description |
|---|---|---|
| Entry ID | Yes | Sequential within phase (e.g. LL-04-001) |
| Date | Yes | Date of capture |
| Phase | Yes | Current phase code |
| Category | Yes | Scope / Schedule / Cost / Risk / Stakeholder / Quality / Resource / Procurement / Communications / Governance |
| Source | Yes | The artifact, event, or observation that generated the lesson (e.g. "A18-042 — resolved delay issue") |
| Description | Yes | What happened — factual, objective, specific |
| Impact | Yes | Positive or negative; quantified if possible (e.g. "+3 days recovery time") |
| Root cause | Yes (for negative) | Why it happened — not who is blamed |
| Recommendation | Yes | What should be done differently on future projects or phases |
| OPA transfer status | Yes | Pending / Transferred / Not applicable |
| Contributor | Yes | Name of person who identified the lesson |

### Step 3 — Facilitate Tacit Knowledge Sharing
Create structured opportunities for team members to share experience-based knowledge. Select the appropriate facilitation technique:

| Technique | Description | Best for |
|---|---|---|
| Retrospective | Structured team reflection on what went well, what to improve, what to stop | Adaptive/iterative teams; end of sprint or phase |
| Peer review | Structured review of a deliverable or decision by a qualified peer | Technical quality and process compliance |
| Lunch-and-learn | Informal knowledge-sharing session on a defined topic | Broad awareness; new tools or methods |
| Pair work | Shadowing and working alongside an expert | Tacit skill transfer for complex tasks |
| Expert interview | Structured conversation to elicit tacit knowledge from an experienced practitioner | Pre-departure knowledge capture; specialist skills |
| Workshop | Facilitated group session with defined inputs, methods, and outputs | Cross-domain lessons and multi-team learning |

Document key outputs of all sessions in A21 with: session type, date, participants, topics covered, and key insights. Schedule events through A28 delivery plan so stakeholders are informed.

### Step 4 — Apply Categorization and Tagging
For knowledge management to be useful at the organizational level, every A21 entry must be tagged for retrieval:
- **Lifecycle phase tag:** Pre-sign / Initiating / Planning / Executing / Monitoring / Closing
- **Performance domain tag:** Match to one of the 7 PMBOK8 performance domains
- **Artifact tag:** Primary A-code affected (e.g. A15, A19)
- **Outcome tag:** Positive (reinforcement) / Negative (corrective) / Neutral (observational)
- **Confidentiality tag:** Public / Project-internal / PMO-restricted

Review tagging at each A21 update cycle — untagged entries must be completed before OPA transfer.

### Step 5 — Update OPA
For lessons that represent reusable organizational learning:
1. Review A21 entries tagged "OPA transfer status = Pending"
2. For each, assess whether the lesson is organization-level (not just project-specific)
3. PM confirms transfer in writing (documented in A21 entry: "Transferred — authorized by [PM name] [date]")
4. Update A05 Context Register with the new OPA entry — reference the A21 Entry ID as the source
5. Update A21 entry OPA transfer status to = Transferred
6. For lessons that are project-specific only, update status to = Not applicable with brief rationale

**Authority note:** Team members may nominate entries for OPA transfer but cannot complete the transfer. Only the PM (or delegated knowledge manager if defined in A06) may confirm OPA transfer.

**Confidentiality note:** Lessons containing sensitive commercial, HR, or stakeholder-specific information must be reviewed by the PM before OPA transfer. Confidential entries must be sanitized or withheld from the organization-wide OPA.

### Step 6 — Manage Departure Risk
When a team member is scheduled to leave the project (planned release, resignation, redeployment):
1. Schedule an expert interview (Step 3) at least two weeks before departure date
2. Capture all tacit knowledge held by the departing member in A21
3. Document any in-progress work the departing member owns — update A25 RACI with transition plan
4. Identify knowledge that cannot be recovered post-departure and escalate to PM if critical

### Step 7 — Manage Knowledge in Adaptive and Hybrid Contexts
For projects using adaptive or hybrid lifecycle approaches:
- **Retrospectives are mandatory** at the end of each iteration/sprint and must produce A21 entries
- The product owner or iteration lead is responsible for ensuring backlog retrospective outputs are captured in A21
- Iteration-level lessons feed the phase-level A21 (do not create separate lesson logs per sprint)
- Hybrid projects must reconcile lessons from both predictive and adaptive workstreams into a single A21 record

### Step 8 — Make Knowledge Accessible
Ensure A21 is accessible to all relevant team members and stakeholders per A28 communications plan:
- Define access roles in A28 (who can read, who can contribute, who can authorize OPA transfer)
- Any access restriction must be documented with justification in A06
- Ensure version control is in place — A21 is a living document, not a file per phase

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Lessons learned entries (categorized, tagged) | A21 | Execution section — continuous | Updated throughout all packs |
| OPA updates | A05 | OPA section | PM-authorized only |
| Performance domain knowledge digest | A17 | Knowledge section | Optional summary in performance report |
| Knowledge-sharing event records | A28 | Delivery log | Retrospectives, peer reviews, workshops |
| Team departure transition records | A25 | Transition section | On planned or unplanned departures |

---

## Operating Rules

1. A21 is not a closure document — it must be updated continuously throughout all packs, starting in Pack 04.
2. Every resolved A18 issue classified as high-impact or critical must generate at least one A21 entry.
3. No A21 entry may be anonymous — each entry must have a date, category, and identified contributor.
4. OPA transfer from A21 to A05 requires PM confirmation; team members cannot self-transfer to OPA.
5. Tacit knowledge facilitation events are not optional — at least one structured sharing event per project phase is required.
6. Every A21 entry must have an OPA transfer status populated before the phase gate review.
7. Confidential lessons must be sanitized or withheld before OPA transfer; the PM is responsible for this review.
8. Adaptive-context retrospectives must produce A21 entries — stand-alone sprint retrospective notes that do not enter A21 do not meet this standard.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Lessons deferred to closure | A21 is empty or sparse during active execution | Immediate triage: collect lessons retroactively from A18 and A19; reset cadence |
| Anonymous entries | A21 entries with no contributor field | Audit A21; assign contributor to each entry before next gate |
| OPA not updated | A21 entries tagged Pending transfer with no A05 update | Review all Pending entries; PM completes transfers before gate |
| Knowledge siloed — departure risk | Key team member departing with undocumented tacit knowledge | Emergency expert interview; update A21 before departure date |
| Knowledge hoarding | Team members retain project-critical knowledge and decline to participate in capture sessions | PM escalation; structured mandatory capture session; note behavior in A25 performance log |
| Untagged entries | A21 entries with no lifecycle, domain, or outcome tags | Audit and tag all entries; update A21 before OPA transfer cycle |
| Retrospective outputs not captured | Adaptive team holds retrospectives but outputs do not enter A21 | Update A14/A28 to confirm retrospective-to-A21 protocol; enforce at next sprint |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Continuous update | A21 has entries for every reporting period during active execution | A21 has no entries during an active execution period |
| T-2 | A18 linkage | Every closed high-impact A18 issue has a corresponding A21 entry | Closed high-impact A18 issue with no A21 entry |
| T-3 | Entry completeness | Every A21 entry has all 11 required fields populated | Any A21 entry missing contributor, category, or recommendation |
| T-4 | No anonymous entries | Every A21 entry has an identified contributor | Any A21 entry with no contributor |
| T-5 | OPA transfer completed | A21 entries tagged Pending have a confirmed A05 update and PM authorization | Transfer-tagged entry with no A05 update or no PM authorization |
| T-6 | Tacit knowledge facilitated | At least one structured knowledge-sharing event per phase documented in A21 | No knowledge-sharing event recorded for any phase |
| T-7 | Accessibility confirmed | A21 accessible to all team members per A28 | A21 restricted without documented justification in A06 |
| T-8 | Departure risk managed | Departing team members have an expert interview record in A21 before departure | Team member departs with no A21 knowledge capture |
| T-9 | Adaptive retrospectives captured | A21 contains entries from each iteration retrospective in adaptive/hybrid workstreams | Retrospective held but no A21 entry for that iteration |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-29 | Full rewrite: added Knowledge Types table; expanded inputs from 4 to 8 rows; expanded steps from 5 to 8; added categorization/tagging step; added departure risk step; added adaptive/hybrid step; expanded outputs from 2 to 5 rows; expanded operating rules from 5 to 8; expanded failure modes from 4 to 7; expanded tests from 7 to 9; added PMBOK8 Stewardship Principle reference |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.1.6.4 · Figure 2-6 · Stewardship Principle*  
*Source type: PMI-derived*
