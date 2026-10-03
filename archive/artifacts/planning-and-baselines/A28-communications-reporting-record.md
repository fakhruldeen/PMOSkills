# A28 — Communications and Reporting Record
**Artifact ID:** A28
**Artifact Name:** Communications and Reporting Record
**Version:** 1.0.0
**Status:** Definition · Active
**Authority:** PMBOK8 Guide §2.5.2.3 · §2.5.2.5 · §2.5.2.7
**Source Type:** PMI-derived
**File Path:** `artifacts/planning-and-baselines/A28-communications-reporting-record.md`

---

## Definition

The Communications and Reporting Record is the single artifact that consolidates the communications management plan, the delivery log (records of all communications sent), and the communications monitoring section. It ensures every planned communication is tracked from plan through delivery through effectiveness check.

**PMI Source:** PMBOK8 Guide §2.5.2.3 (Plan Communications) · §2.5.2.5 (Manage Communications) · §2.5.2.7 (Monitor Communications).

---

## Artifact Type

| Field | Value |
|-------|-------|
| **Category** | Planning & Baselines |
| **Type** | Communications plan + delivery log |
| **Lifecycle** | Created in Planning · Maintained in Executing · Monitored in M&C · Archived in Closing |
| **Baseline?** | Communications plan is governed; delivery log is living |
| **Ownership** | Project Manager / Communications Lead |

---

## Purpose

- Define who needs what information, when, in what format, and through which channel
- Record all communications delivered to stakeholders
- Monitor communications effectiveness and trigger re-planning where needed
- Maintain traceability between stakeholder needs (A07) and communications delivered

---

## Sections

| Section | Content | Populated By |
|---------|---------|-------------|
| §1 Communications Management Plan | Stakeholder info needs, communication matrix, channels, formats, frequency, owner, escalation path | SKL-03-08 |
| §2 Communication Matrix | Stakeholder × communication type × frequency × format × owner × channel | SKL-03-08 |
| §3 Delivery Log | Date, recipient, communication type, channel used, delivered by, confirmation, notes | SKL-04-07 |
| §4 Communications Monitoring | Effectiveness indicators, feedback received, gaps identified, re-plan decisions | SKL-05-09 |

---

## Communication Matrix Template (§2)

| Stakeholder/Group | Information Need | Frequency | Format | Channel | Owner | Confirmation |
|-------------------|-----------------|-----------|--------|---------|-------|-------------|
| [Stakeholder] | [Need] | [Weekly/Monthly/Event] | [Report/Email/Meeting] | [Channel] | [Name] | [Yes/No] |

*Full matrix populated during SKL-03-08 — Plan Communications Management.*

---

## Inputs

| Input | Source |
|-------|--------|
| A07 — Stakeholder Register & SEAM | SKL-03-07 |
| A04 — Project Charter | SKL-02-01 |
| A05 — Context Register (communication norms, tools) | SKL-01-03 |
| A15 — Schedule Model (milestone communications triggers) | SKL-03-06 |

---

## Outputs / Produces

| Output | Used By |
|--------|--------|
| Communications plan | A14 (PMP assembly) |
| Delivery log | SKL-05-09 (Monitor Communications) · Audit evidence |
| Re-plan triggers | SKL-03-08 (re-run) · SKL-05-07 (stakeholder monitoring) |

---

## Quality Criteria

- All key stakeholders covered in communication matrix
- Each communication type has a named owner
- Delivery log maintained with every communication sent
- Monitoring section reviewed at every status cycle
- Gaps in delivery or effectiveness trigger re-plan decision within defined timeframe
- A07 ↔ A28 consistency enforced (no stakeholder in A07 without communication plan)

---

## Related Artifacts

| Artifact | Relationship |
|----------|--------------|
| A07 — Stakeholder Register & SEAM | Communications plan derived from stakeholder needs |
| A14 — Integrated PM Plan | Communications plan is a subsidiary plan |
| A17 — Performance Report | Performance reports are a primary deliverable of A28 |
| A12 — Change Log | Communication plan changes recorded here |

---

## PMBOK8 Anchors

| Reference | Detail |
|-----------|--------|
| PMBOK8 Guide §2.5.2.3 | Plan Communications Management · Figure 2-35 |
| PMBOK8 Guide §2.5.2.5 | Manage Communications · Figure 2-37 |
| PMBOK8 Guide §2.5.2.7 | Monitor Communications · Figure 2-39 |

---

*Owner: Project Manager / Communications Lead · Version Control: Plan versioned; delivery log is continuous · Change Control: T1–T2 per AUTHORITY-ROUTING.md*
*Last Updated: 2026-05-30 · Patch D*
