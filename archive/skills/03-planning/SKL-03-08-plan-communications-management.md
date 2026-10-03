# SKL-03-08 — Plan Communications Management

**Skill ID:** SKL-03-08  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.4.6.1 Plan Communications Management · Guide §2.4 Resources Domain (Comms)  
**File path:** `skills/03-planning/SKL-03-08-plan-communications-management.md`

---

## Purpose

Develop the Communications Management Plan section of A06 that defines what information will be communicated, to whom, when, through which channels, in what format, and by whom throughout the project. The plan ensures that every stakeholder receives the right information at the right time in the right format, supporting informed decision-making and reducing information gaps.

---

## Scope

This skill produces the Communications Management Plan section of A06. It does not manage or execute communications (SKL-04-07) or monitor them (SKL-05-09), but it governs both of those skills. It must be aligned with the Stakeholder Engagement Plan (SKL-03-07) before either section is baselined.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter | SKL-02-01 | Yes |
| A07 — Stakeholder Register | SKL-02-02 | Yes |
| A06 — Stakeholder Engagement Plan section | SKL-03-07 | Yes |
| A05 — Context Register (EEF: communication tools, technology constraints) | SKL-01-01 | Yes |

**Gate check:** SKL-03-07 must be at advanced draft before this skill runs, so communication channels can be aligned with engagement methods.

---

## Instructions

### Step 1 — Conduct Communications Requirements Analysis

1. For each stakeholder in A07, identify their communication needs:
   - **What information do they need?** (project status, risk updates, decision requests, deliverable reviews, budget reports)
   - **What level of detail is appropriate?** (executive summary, operational detail, technical specification)
   - **What is their preferred format?** (verbal briefing, written report, dashboard, email, formal presentation)
   - **What is their preferred frequency?** (real-time, daily, weekly, milestone-based, on-demand)
   - **What technology/channel do they use?** (email, video call, SharePoint, Slack, formal report)

2. Identify communication constraints from A05:
   - Technology limitations (e.g., no video call access, limited email access)
   - Language requirements (multilingual stakeholders)
   - Security or confidentiality restrictions (what cannot be shared via certain channels)
   - Regulatory requirements (what must be formally documented)

3. Record communication requirements analysis in A06 Communications Management section.

---

### Step 2 — Define the Communication Register

Create a Communication Register as part of A06 with one row per communication type:

| Column | Description |
|---|---|
| Communication ID | Unique identifier (e.g., COMM-01) |
| Communication name | Short descriptive name (e.g., “Weekly Status Report”) |
| Purpose | What decision or need does this communication serve? |
| Content | What information does it contain? |
| Audience | Who receives it? (Named stakeholders or groups from A07) |
| Sender / Owner | Who creates and sends it? |
| Frequency / Trigger | How often, or what event triggers it? |
| Channel / Medium | How is it delivered? (Email, meeting, report, dashboard) |
| Format | Template name or description |
| Confidentiality level | Open / Internal / Restricted / Executive Only |
| Deadline / Due date | When must it be sent relative to the reporting period? |

Record all communication types in the Communication Register.

---

### Step 3 — Define Status Reporting Standards

Define the standard project status report (applies to all periodic reporting):

1. **Reporting frequency:** Weekly / bi-weekly / monthly (confirm with sponsor).
2. **Report sections:**
   - Overall project status (RAG: Red / Amber / Green)
   - Schedule status (SV, SPI if earned value; or milestone status)
   - Budget status (CV, CPI if earned value; or spend-to-date vs. plan)
   - Risk status (top 3–5 active risks with status)
   - Issue status (open issues with owner and due date)
   - Key accomplishments this period
   - Planned activities next period
   - Decisions required from governance
3. **RAG criteria:** Define the specific thresholds for Red, Amber, Green for schedule, cost, scope, and risk.
4. **Distribution list:** Who receives the standard status report? (From A07 with access levels applied)
5. **Template reference:** Name the template file used for status reports.

Record in A06.

---

### Step 4 — Define Meeting Standards

For each recurring meeting type, define:

| Meeting type | Frequency | Chair | Attendees | Agenda format | Minutes required? | Distribution |
|---|---|---|---|---|---|---|
| Steering Committee | Monthly | Sponsor | Sponsor, PM, key stakeholders | Formal agenda | Yes — formal minutes | All attendees + PMO |
| Project team meeting | Weekly | PM | All team leads | Standard agenda | Yes — action items | Team leads |
| Sponsor 1:1 | Bi-weekly | PM | PM + Sponsor | Informal agenda | Notes only | PM + Sponsor |
| Change Control Board | As needed | PM | PM + approvers | Change request agenda | Yes | Governance body |
| Risk review | Bi-weekly | PM | PM + risk owners | Risk register review | Action items | Risk owners |
| Stakeholder briefing | As needed | PM/Sponsor | As required | Briefing deck | Yes — brief summary | Attendees |

Record all meeting types in A06.

---

### Step 5 — Define Escalation Communications

Define how communications work during escalation events (issues, risks, crises):

1. **Issue escalation communication:**
   - Who is notified immediately when an issue is escalated? (From A05 governance escalation paths)
   - What information must be in the escalation notification? (Issue description, impact, options, recommended action, deadline for decision)
   - What is the expected response time at each escalation level?

2. **Risk trigger communication:**
   - When a risk triggers (becomes an issue), who is notified and through what channel?
   - What is the expected response time?

3. **Crisis communication:**
   - Define the crisis communication protocol (who speaks externally; what is communicated and what is not; approval chain for external statements)

Record escalation communication protocols in A06.

---

### Step 6 — Define Information Security and Access Controls

1. Classify all communication types by confidentiality level:
   - **Open:** Can be shared with any stakeholder
   - **Internal:** PM team and governance only
   - **Restricted:** Named recipients only
   - **Executive Only:** Sponsor and governance body only

2. Define handling rules for each level:
   - What channels are permitted for each level?
   - Who authorizes access for restricted/executive content?
   - How is access revoked when stakeholders leave the project?

3. Align with A05 governance access control rules.

Record in A06.

---

### Step 7 — Align with Stakeholder Engagement Plan

1. Cross-check the Communication Register against the Stakeholder Engagement Plan (A06 SKL-03-07 section):
   - Does every Tier 1 engagement touchpoint have a corresponding communication entry?
   - Are the channels, frequencies, and formats consistent between the two sections?
   - Are engagement plan owners and communication owners aligned?

2. Resolve any inconsistencies.

3. Document the cross-check result in A06 as a sign-off note.

---

### Step 8 — Baseline Communications Management Section

1. Review with Sponsor and PMO.
2. Confirm alignment with Stakeholder Engagement Plan (Step 7).
3. Obtain sponsor sign-off.
4. Record version, baseline date, and approver in A06.
5. Distribute Communication Register to all team members with communication responsibilities.

---

## Outputs

| Output | Artifact | Section | Access |
|---|---|---|---|
| Communications Management Plan | A06 | Communications section | Per confidentiality classification |
| Communication Register | A06 (appendix or sub-section) | Communication Register | Team leads with comms responsibilities |
| Meeting Standards | A06 | Meeting Standards sub-section | All team members |

---

## Constraints

- The Communications Management Plan must be aligned with the Stakeholder Engagement Plan before either section is baselined.
- All communication types must be in the Communication Register — ad hoc communication outside the register must be documented as it occurs.
- Confidentiality classifications must be respected — no restricted content via open channels.
- Status report RAG criteria must be specific and numeric — “generally on track” is not a valid Green definition.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Simple project | Single-page Communication Register. Weekly status email. No formal meeting minutes for team meetings. |
| Large / multi-site project | Full Communication Register with 15–25 entries. Formal meeting minutes for all governance meetings. Multi-timezone scheduling rules. |
| Agile project | Sprint reviews replace formal status reports. Daily standup replaces team meetings. Product Owner manages external stakeholder communications. |
| Regulated / compliance | All regulatory communications formally documented. Legal review before external statements. Audit trail for all Tier 1 communications. |
| Crisis / recovery project | Enhanced escalation communication protocol. Executive communication approved by Sponsor. Media/public communication protocol if applicable. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| SKL-03-07 not complete | Communications plan misaligned with engagement plan | Complete SKL-03-07 before running this skill |
| Communication Register incomplete | Ad hoc communications create information gaps | Complete Communication Register; communicate the register to all team members |
| RAG criteria not defined | Status reports are subjective; stakeholders lose trust | Define specific numeric RAG thresholds; update all future reports |
| Escalation protocol not followed | Issues escalated verbally without documentation; decisions not traceable | Enforce written escalation notification; add to team operating norms |
| Confidentiality not respected | Restricted information reaches unintended recipients | Apply immediate access controls; investigate breach; update handling rules |
| Comms plan not maintained | Communication Register becomes stale; missed touchpoints | Assign communication register ownership; add quarterly review to PM calendar |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | SKL-03-07 gate check | Stakeholder Engagement Plan at advanced draft before this skill runs | SKL-03-07 not complete |
| T-2 | Communication requirements analysis | Every stakeholder in A07 has communication needs documented | Any stakeholder without communication needs analysis |
| T-3 | Communication Register complete | Every communication type has all 11 columns populated | Any communication with missing fields |
| T-4 | Status report RAG criteria defined | Specific numeric thresholds for Red/Amber/Green for schedule, cost, scope, and risk | RAG criteria absent or non-specific |
| T-5 | Meeting standards defined | All recurring meeting types have frequency, chair, attendees, agenda, and minutes rules | Any meeting type undefined |
| T-6 | Escalation communications defined | Issue escalation, risk trigger, and crisis communication protocols all documented | Any protocol missing |
| T-7 | Confidentiality classification applied | All communication types have a confidentiality level; handling rules defined | Any communication without classification |
| T-8 | Alignment with Stakeholder Engagement Plan | Cross-check completed; all inconsistencies resolved; cross-check sign-off note in A06 | Misalignment documented but not resolved |
| T-9 | Sponsor sign-off obtained | Approval recorded in A06 | Plan unsigned |
| T-10 | Communication Register distributed | All team members with comms responsibilities have received the register | Register baselined but not distributed |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.4.6.1 Plan Communications Management*  
*Source type: PMI-derived*  
*Owner: Project Manager*  
*Approval authority: Project Sponsor or PMO lead*
