# SKL-03-07 — Plan Stakeholder Engagement
**Skill ID:** SKL-03-07  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.5.6.2 Plan Stakeholder Engagement · Guide §2.5 Stakeholders Domain  
**File path:** `skills/03-planning/SKL-03-07-plan-stakeholder-engagement.md`

---

## Purpose

Develop the Stakeholder Engagement Plan — a section of A06 — that defines tailored engagement strategies, communication preferences, engagement objectives, and escalation approaches for each key stakeholder. The plan translates A07 (Stakeholder Register) classification data into an actionable engagement roadmap.

---

## Scope

This skill produces the Stakeholder Engagement Plan section of A06. It does not execute stakeholder engagement (SKL-04-06) or monitor it (SKL-05-07), but it defines the approach both of those skills will follow. It builds on A07 (Stakeholder Register) and must be completed before execution begins.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A07 — Stakeholder Register (baselined) | SKL-02-02 | Yes |
| A06 — Scope Management section | SKL-03-02 | Yes |
| A05 — Governance framework | SKL-01-01 | Yes |

**Gate check:** A07 must be baselined and all Tier 1 stakeholder stances assessed before this skill runs.

---

## Instructions

### Step 1 — Define Engagement Objectives by Tier

**For each Tier 1 stakeholder:**
1. Review the current stance and desired stance gap from A07.
2. Define a specific engagement objective: what must change (or be maintained) in this stakeholder’s relationship with the project by what milestone?
3. Classify the objective type:
   - **Awareness:** Stakeholder needs to understand what the project is doing
   - **Alignment:** Stakeholder needs to agree with the project direction
   - **Commitment:** Stakeholder needs to actively support or contribute
   - **Trust maintenance:** Stakeholder is already committed; objective is to sustain the relationship
4. Record objectives in A06 Stakeholder Engagement Plan section.

**For Tier 2 stakeholders:**
1. Define a general engagement approach (regular monitoring, periodic updates, or event-driven contact).
2. Record in A06.

**For Tier 3 stakeholders:**
1. Define a minimal awareness approach (newsletter, project page, or quarterly summary).
2. Record in A06.

---

### Step 2 — Define Engagement Methods by Stakeholder

For each Tier 1 and key Tier 2 stakeholder, define:

| Method dimension | Decision |
|---|---|
| **Primary channel** | Face-to-face, video call, email, formal report, steering committee |
| **Frequency** | Weekly, bi-weekly, monthly, milestone-triggered, on-demand |
| **Format** | Status report, dashboard, formal briefing, informal check-in, workshop |
| **Owner** | PM, Sponsor, Team Lead (who leads each engagement touchpoint) |
| **Escalation trigger** | What conditions escalate to the next authority level |

Record all method decisions for each stakeholder in A06.

---

### Step 3 — Address Stance Gaps

For each Tier 1 stakeholder with a stance gap (current stance ≠ desired stance):

1. Identify the root cause of the gap:
   - **Information gap:** Stakeholder does not have enough information to form a supportive stance
   - **Concern gap:** Stakeholder has unresolved concerns about project impact
   - **Interest gap:** Stakeholder’s interests are not yet addressed by the project approach
   - **Trust gap:** Stakeholder has low trust in the PM, team, or sponsor

2. Design a targeted intervention for each root cause:
   - **Information gap:** One-on-one briefing, personalized project summary, site visit
   - **Concern gap:** Structured concern identification session, formal response to each concern
   - **Interest gap:** Negotiate scope or delivery approach to better address the stakeholder’s interests
   - **Trust gap:** Regular one-on-ones with PM or Sponsor, demonstrated follow-through on commitments

3. Set a target date for re-assessing the stance (typically next phase gate or 4-week checkpoint).

4. Record the intervention plan and target reassessment date in A06.

---

### Step 4 — Define the Engagement Calendar

1. Create a master engagement calendar that maps:
   - All recurring engagement touchpoints (by stakeholder, method, frequency, owner)
   - All milestone-triggered engagement events (phase gate reviews, sponsor briefings, steering committee meetings)
   - All planned stance-gap interventions with target dates

2. Check for engagement conflicts (same stakeholder scheduled for multiple events in the same period; same PM owning too many high-effort engagement activities simultaneously).

3. Resolve conflicts by:
   - Combining touchpoints where appropriate
   - Redistributing ownership to team leads or sponsor
   - Deferring low-priority engagements to reduce PM load

4. Record the engagement calendar in A06.

---

### Step 5 — Define Sensitive Stakeholder Handling

For stakeholders flagged as:
- **Resistant** (stance assessment from A07)
- **High-influence / Low-support** (Tier 1 with negative or neutral stance)
- **Politically sensitive** (internal conflict, competing interests)

Define:
1. Who owns the primary relationship (typically Sponsor or senior PM, not a team member)
2. Communication channel restrictions (what should NOT be communicated through certain channels)
3. Escalation rules if the stakeholder becomes actively obstructive
4. Access control rules for A07 records related to this stakeholder

Record in A06 (note: restrict access to this section per A05 governance if it contains sensitive assessments).

---

### Step 6 — Define Stakeholder Engagement Metrics

Define how stakeholder engagement will be measured and reported:

| Metric | Measurement approach |
|---|---|
| Stance progression | Re-assess stance at each phase gate; track movement toward desired stance |
| Engagement touchpoint completion | % of planned engagement touchpoints executed on schedule |
| Issue resolution rate | % of stakeholder-raised issues resolved within agreed timeframe |
| Escalation frequency | Count of escalations per period — high frequency signals engagement failure |
| Stakeholder satisfaction (optional) | Post-milestone survey or informal pulse check |

Record metrics and measurement approach in A06.

---

### Step 7 — Baseline Stakeholder Engagement Plan Section

1. Review the completed Stakeholder Engagement Plan section with the Sponsor and PMO.
2. Ensure consistency with A06 Communications Management section (SKL-03-08 — must be aligned on channels, frequencies, and audiences).
3. Obtain formal approval.
4. Record version, baseline date, and approver in A06.
5. Distribute the non-sensitive portions to all team leads with engagement responsibilities.
6. Store sensitive stakeholder handling section with restricted access per A05 governance.

---

## Outputs

| Output | Artifact | Section | Access |
|---|---|---|---|
| Stakeholder Engagement Plan | A06 | Stakeholder Engagement section | Restricted where sensitive |
| Engagement Calendar | A06 | Appendix or sub-section | Team leads with engagement responsibilities |

---

## Constraints

- The Stakeholder Engagement Plan must be aligned with the Communications Management Plan (SKL-03-08) before either section is baselined.
- Sensitive stakeholder assessments (resistance analysis, political mapping) must be access-controlled per A05 governance.
- The engagement calendar must be maintained throughout the project — it is not a one-time artifact.
- A06 Stakeholder Engagement section must be re-reviewed at every phase gate and updated to reflect stance changes.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Simple / internal project | Single-page engagement approach per stakeholder. Informal calendar. PM owns all engagement. |
| Large / complex project | Full engagement plan per Tier 1. Formal engagement calendar. Sponsor owns executive relationships. Separate sensitive handling section. |
| Agile project | Engagement at sprint level. Product Owner owns primary stakeholder engagement. Sprint Review replaces formal briefings. |
| Regulated / compliance | Add regulatory engagement protocols. Formal documentation of all regulator touchpoints. Legal review before any regulator communication. |
| Political or conflicted stakeholder environment | Enhanced stance gap analysis. Senior PM or Sponsor owns all Tier 1 relationships. Weekly engagement review cadence. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| A07 stances not assessed | Engagement plan based on assumptions | Complete stance assessment in A07 before running this skill |
| Engagement methods not tailored | Stakeholders receive one-size-fits-all communications; resistant stakeholders not addressed | Re-run Steps 2 and 3; tailor methods to each Tier 1 stakeholder |
| Engagement plan not aligned with comms plan | Conflicting frequencies or channels | Run SKL-03-07 and SKL-03-08 in parallel; resolve conflicts before baselining |
| Sensitive assessments distributed without access control | Stakeholder resistance information reaches unintended recipients | Apply A05 governance access controls immediately; update distribution |
| Engagement calendar not maintained | Planned touchpoints missed; stances not re-assessed at phase gates | Assign engagement calendar ownership; add calendar review to phase gate checklist |
| Stance gap interventions not executed | Resistant stakeholders remain resistant through execution | Escalate to Sponsor; re-run Step 3 with updated intervention approach |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | A07 gate check | A07 baselined and all Tier 1 stances assessed before this skill runs | A07 not baselined or stances missing |
| T-2 | Engagement objectives defined for all Tier 1 | Every Tier 1 stakeholder has an objective type and target milestone | Any Tier 1 missing objective |
| T-3 | Engagement methods defined | Primary channel, frequency, format, owner, and escalation trigger defined for all Tier 1 | Any Tier 1 missing method definition |
| T-4 | Stance gap interventions defined | Every stakeholder with a stance gap has a root cause analysis and targeted intervention | Any gap without intervention |
| T-5 | Engagement calendar created | All recurring touchpoints, milestone events, and interventions mapped with dates and owners | Calendar absent |
| T-6 | Sensitive handling defined for resistant/high-influence stakeholders | Relationship owner, channel restrictions, and escalation rules defined | Sensitive handling absent for flagged stakeholders |
| T-7 | Engagement metrics defined | All five metrics (or justified subset) with measurement approach documented | Metrics section absent |
| T-8 | Consistency with comms plan confirmed | Engagement plan channels and frequencies aligned with A06 Communications section | Misalignment identified |
| T-9 | Sponsor approval obtained | Sign-off recorded in A06 | Plan unsigned |
| T-10 | Sensitive sections access-controlled | Restricted distribution applied per A05 governance | Sensitive content distributed without restriction |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.5.6.2 Plan Stakeholder Engagement · Guide §2.5 Stakeholders Domain*  
*Source type: PMI-derived*  
*Owner: Project Manager*  
*Approval authority: Project Sponsor or PMO lead*
