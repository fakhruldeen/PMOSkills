---
artifact_id: A07
artifact_name: Stakeholder Register and Stakeholder Engagement and Action Map (SEAM)
version: 1.0.0
status: Definition · Active
authority: "PMBOK8 Guide §2.5 · Standard §3 Principles · BAP-2E §4"
source_type: PMI-derived
category: Stakeholders
performance_domains:
  - Stakeholders
  - Governance
focus_areas:
  - Initiating
  - Planning
  - Executing
  - Monitoring and Controlling
  - Closing
linked_artifacts:
  - A04
  - A05
  - A01
  - A28
  - A19
  - A02
  - A17
  - A27
file_path: "artifacts/stakeholders-communications/A07-stakeholder-register-seam.md"
---

# A07 — Stakeholder Register and Engagement Strategy

**Artifact ID:** A07
**Artifact Name:** Stakeholder Register and Stakeholder Engagement and Action Map (SEAM)
**Version:** 1.0.0
**Status:** Definition · Active
**Authority:** PMBOK8 Guide §2.5 · Standard §3 Principles · BAP-2E §4
**Source Type:** PMI-derived
**File Path:** `artifacts/stakeholders-communications/A07-stakeholder-register-seam.md`

---

## Definition

A07 is the single artifact that consolidates the stakeholder register (identification and analysis), the Stakeholder Engagement and Action Map (SEAM — strategy and engagement plan), and the stakeholder monitoring log. It is initiated in Initiating (SKL-02-02), expanded in Planning (SKL-03-07), used throughout Executing (SKL-04-06), monitored in M&C (SKL-05-07), and closed in Closing (SKL-06-01).

**PMI Source:** PMBOK8 Guide §2.5 — Stakeholder Performance Domain; Standard §3 (engage stakeholders principle); BAP-2E §4.

---

## Artifact Type

| Field | Value |
|---|---|
| **Category** | Stakeholders |
| **Type** | Living stakeholder record + engagement strategy |
| **Lifecycle** | Initiated in Initiating · Expanded in Planning · Used in Executing · Monitored in M&C · Closed in Closing |
| **Baseline?** | Engagement plan is governed; register is living |
| **Ownership** | Project Manager |

---

## Purpose

- Identify all stakeholders and record key attributes
- Analyze stakeholder power, interest, influence, and engagement level
- Define engagement strategies and specific actions per stakeholder or group
- Track engagement effectiveness throughout the project
- Inform the communications plan (A28) and risk identification (A19)
- Close stakeholder records formally at project closure

---

## Sections

| Section | Content | Populated By |
|---|---|---|
| §1 Stakeholder Register — Identification | All identified stakeholders using registration schema | SKL-02-02 |
| §2 Stakeholder Analysis | Power/Interest grid, Salience Model, current vs. desired engagement level | SKL-02-02 · SKL-03-07 |
| §3 Stakeholder Engagement and Action Map (SEAM) | Engagement strategy, target engagement level, specific actions, owner, timeline | SKL-03-07 |
| §4 Engagement Monitoring Log | Engagement level changes, actions taken, effectiveness rating, re-plan triggers | SKL-04-06 · SKL-05-07 |
| §5 Closure Record | Final engagement assessment, lessons, handoff of ongoing relationships | SKL-06-01 |

---

## Stakeholder Registration Schema (§1)

| Field | Description |
|---|---|
| **Stakeholder ID** | Format: S-NNN |
| **Name** | Full name (or role/group if individual not yet identified) |
| **Organization / Role** | Organization and project role |
| **Contact** | Primary contact method |
| **Category** | Internal / External / Sponsor / Regulator / Customer / Supplier / Team |
| **Interest** | What the stakeholder cares about |
| **Expectations** | What the stakeholder expects to receive |
| **Potential Influence** | High / Medium / Low |
| **Risk to Project** | Stakeholder-related risk if not engaged |
| **Date Identified** | Date added to register |

---

## Stakeholder Analysis Schema (§2)

| Field | Description |
|---|---|
| **Power** | High / Medium / Low |
| **Interest** | High / Medium / Low |
| **Grid Quadrant** | Manage Closely / Keep Satisfied / Keep Informed / Monitor |
| **Salience** | Power / Legitimacy / Urgency (1–3 of 3) |
| **Current Engagement Level** | Unaware / Resistant / Neutral / Supportive / Leading |
| **Desired Engagement Level** | Target level needed for project success |
| **Gap** | Difference between current and desired |

---

## SEAM Entry Schema (§3)

| Field | Description |
|---|---|
| **Stakeholder ID** | Reference to §1 |
| **Engagement Objective** | What engagement outcome is needed |
| **Strategy** | inform / consult / involve / collaborate / empower |
| **Specific Actions** | Concrete steps to move stakeholder to desired level |
| **Owner** | Person responsible for executing the engagement |
| **Timeline** | Key dates or frequency |
| **Communication Link** | Reference to A28 communication matrix row |

---

## Engagement Level Definitions

| Level | Description |
|---|---|
| **Unaware** | Not aware of the project or its potential impact |
| **Resistant** | Aware but actively or passively opposing |
| **Neutral** | Aware but neither supporting nor opposing |
| **Supportive** | Aware and actively supporting |
| **Leading** | Actively engaged and championing the project |

---

## Inputs

| Input | Source |
|---|---|
| A04 — Project Charter | SKL-02-01 |
| A05 — Context Register | SKL-01-02 |
| A01 — Business Case | Pre-authorization |
| Expert judgment, stakeholder interviews | SKL-02-02 |

---

## Outputs / Produces

| Output | Used By |
|---|---|
| Stakeholder register | A28 (Comms plan) · A19 (Risk identification) |
| SEAM | SKL-04-06 · SKL-05-07 |
| Monitoring log | A17 §7 (Performance Report) |
| Closure record | A27 §3 |

---

## Quality Criteria

- All stakeholders with influence or interest identified by end of Initiating
- Current vs. desired engagement gap documented for every key stakeholder
- SEAM actions have named owners and timelines
- A07 ↔ A28 consistency: every stakeholder in A07 has a corresponding entry in A28
- Monitoring log updated at every status cycle
- Re-identification run triggered at phase gates, major scope changes, or new stakeholder emergence

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A04 — Project Charter | High-level stakeholder identification |
| A28 — Comms Record | Communications plan derived from A07 SEAM |
| A19 — Risk Record | Stakeholder risks identified from A07 analysis |
| A02 — Benefits Record | Benefit stakeholders cross-referenced |
| A17 — Performance Report | Engagement status reported in §7 |
| A27 — Closure Record | Final engagement assessment |

---

## PMBOK8 Anchors

| Reference | Detail |
|---|---|
| PMBOK8 Guide §2.5.2.1 | Identify Stakeholders · Figure 2-33 |
| PMBOK8 Guide §2.5.2.3 | Plan Stakeholder Engagement · Figure 2-35 |
| PMBOK8 Guide §2.5.2.5 | Manage Stakeholder Engagement · Figure 2-37 |
| PMBOK8 Guide §2.5.2.7 | Monitor Stakeholder Engagement · Figure 2-39 |
| PMBOK8 Standard §3 | Engage stakeholders principle |
| BAP-2E §4 | Stakeholder analysis techniques |

---

## Change Log

| Version | Date | Change |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial definition — Patch G |
| 1.0.1 | 2026-06-01 | Migrated from artifacts/stakeholders/ to artifacts/stakeholders-communications/ (P0-0I) |

---

*Owner: Project Manager · Change Control: SEAM changes T1–T2 per AUTHORITY-ROUTING.md*
