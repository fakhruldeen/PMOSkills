# A35 — Governance and Decision Authority Record

## Artifact Metadata

| Field | Value |
|---|---|
| **Artifact ID** | A35 |
| **Artifact Name** | Governance and Decision Authority Record |
| **Artifact Type** | Governance framework artifact |
| **Source Type** | synthesis |
| **Governance Layer** | Project Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Define governance forums, decision rights, authority thresholds, cadence, and escalation rules for the project. Provides a single reference that separates project governance from PMO and portfolio governance layers.

---

## When Used

- At project startup when governance design is established
- When governance design materially changes (e.g., lifecycle shift, major risk escalation, new governing body)

---

## PMI Authority

| Field | Detail |
|---|---|
| **Primary PMI Source** | PMBOK8 |
| **Exact Section** | Guide, Governance Performance Domain; Table 2-1 Monitor and Control Project Performance; Assess and Implement Changes; PMO-Guide; GPPP |
| **Purpose of Citation** | Establish PMI-aligned governance without blending PMO, portfolio, and project authority layers |
| **Source Type** | synthesis |

---

## Performance Domains

Governance

## Focus Areas

Planning · Monitoring and Controlling

## Related Processes

- Integrate and Align Project Plans
- Monitor and Control Project Performance
- Assess and Implement Changes

---

## Inputs

- A04 Project Charter (authority boundaries)
- A06 Tailoring Decision Record (control choices)
- Organizational governance constraints
- A11 PMO Service Engagement Record (where PMO authority applies)

---

## Outputs

- Governance calendar
- Decision-rights map
- Threshold rules per decision category
- Escalation routes per threshold band

---

## Core Fields

| Field | Description |
|---|---|
| Governance bodies | Forums, steering groups, or boards with oversight authority |
| Decision categories | Types of decisions and which body owns each |
| Delegated authorities | What the project manager can approve within stated limits |
| Approval thresholds | Numeric or qualitative T1–T4 bands per the authority model |
| Cadence | Meeting frequency and reporting cycle |
| Escalation triggers | Conditions that require escalation beyond current authority |

---

## Threshold Band Reference

| Band | Scope | Default Authority |
|---|---|---|
| T1 Operational | Local, low-risk, inside plan tolerances | Project manager or designated lead |
| T2 Controlled Change | Material effect on one baseline, within project authority | Sponsor-delegated board or change authority |
| T3 Governance Change | Cross-baseline, major financial/schedule/value impact | Project governing body or sponsor |
| T4 Enterprise/Portfolio | Cross-project, strategic, regulatory, or enterprise impact | Portfolio authority, PMO governance forum, or executive |

---

## Ownership and Authority

| Role | Holder |
|---|---|
| **Owner** | Sponsor and project manager jointly, with PMO input only where PMO governance applies |
| **Approval Authority** | Sponsor or project governing body |
| **Escalation Trigger** | Governance forums, thresholds, or authority delegations change |

---

## Tailoring Guidance

Use one project governance record rather than separate governance charter, approval matrix, and governance scorecard. Keep project governance, PMO governance, and portfolio governance visibly separate — do not route all approvals upward by default or blend authority layers.

---

## Waste Test

**Fail if:** Governance forums and authority thresholds are repeated across multiple planning artifacts without a distinct control purpose. One authoritative record is the default.

---

## Migration Map (v1.0.2 → v1.0.5)

| Legacy Item | Legacy Name | Action |
|---|---|---|
| 226 | Formal Governance Tailoring Waiver Form | MERGE TO A35 |
| 299 | Governance Framework Charter | REFERENCE ONLY → A35 |
| 301 | Decision Rights Matrix | REFERENCE ONLY → A35 |
| 302 | Governance Health Scorecard (project-level portions) | REFERENCE ONLY → A35 |
| 29 | Continuous Adaptation Tracking Loop / Tailoring Changelog | MERGE TO A35 |

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A06 Tailoring Decision Record | Tailoring choices set the control scope that A35 governs |
| A12 Change and Exception Decision Log | A35 defines the authority model; A12 logs decisions made within it |
| A11 PMO Service Engagement Record | PMO-layer authority is separate; referenced here, not owned here |
| A36 PMO Value, Maturity, and Improvement Record | PMO governance layer complement to project governance |
