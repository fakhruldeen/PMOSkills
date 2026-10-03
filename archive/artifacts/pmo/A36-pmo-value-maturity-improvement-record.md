# A36 — PMO Value, Maturity, and Improvement Record

## Artifact Metadata

| Field | Value |
|---|---|
| **Artifact ID** | A36 |
| **Artifact Name** | PMO Value, Maturity, and Improvement Record |
| **Artifact Type** | PMO governance and improvement artifact |
| **Source Type** | organization-defined |
| **Governance Layer** | PMO Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Manage PMO service value, maturity evolution, customer feedback, and continuous improvement in one PMO-owned record set. Provides the PMO with a single view of its performance and a controlled backlog of maturity actions.

---

## When Used

- Periodically according to PMO governance cadence (typically quarterly or aligned to organizational review cycles)
- When PMO service model or maturity investment decisions are required

---

## PMI Authority

| Field | Detail |
|---|---|
| **Primary PMI Source** | PMO-Guide |
| **Exact Section** | PMO governance, PMO services, and PMO evolution themes; PMBOK8 Appendix X2 |
| **Purpose of Citation** | Support PMO service management and continuous improvement while keeping the format organization-defined |
| **Source Type** | organization-defined |

---

## Performance Domains

Governance · Stakeholders · Resources

## Focus Areas

Monitoring and Controlling · Closing

## Related Processes

None mandated for project teams — this is a PMO governance artifact.

---

## Inputs

- A11 PMO Service Engagement Records (service performance data)
- A23 PMO Improvement Backlog (pending and completed items)
- Service feedback from project teams and sponsors
- Maturity reviews and self-assessments

---

## Outputs

- PMO value view (service performance themes)
- Approved maturity actions
- Service model changes
- Simplification or standardization decisions

---

## Core Fields

| Field | Description |
|---|---|
| Service performance themes | Patterns observed across PMO service delivery |
| Stakeholder feedback themes | Summarized feedback from project managers, sponsors, teams |
| Maturity observations | Current maturity level and gap analysis |
| Improvement actions | Specific items with owner and target date |
| Owner | Role responsible for each action |
| Target date | Expected completion date for each action |

---

## Ownership and Authority

| Role | Holder |
|---|---|
| **Owner** | PMO leader |
| **Approval Authority** | PMO governance forum or executive PMO sponsor |
| **Escalation Trigger** | PMO maturity actions affect enterprise services, tooling standards, or organization-wide operating model |

---

## Tailoring Guidance

Merge PMO value scorecard, maturity review, and improvement actions into this one record unless the PMO operates under a formal enterprise assessment regime that requires separated artifacts. The format is explicitly organization-defined — the structure should match the PMO's governance cadence and reporting culture.

---

## Waste Test

**Fail if:** Satisfaction scorecards and maturity reviews are produced on schedule but no resulting PMO service changes or backlog items are generated. Production without action is waste.

---

## Relationship to A23

A23 (PMO Improvement Backlog) is the operational work queue — it captures individual improvement items, their priority, and implementation status. A36 is the governance view — it synthesizes service performance, maturity observations, and strategic improvement decisions. A36 feeds A23; A23 closes the loop back to A36.

---

## Migration Map (v1.0.2 → v1.0.5)

| Legacy Item | Legacy Name | Action |
|---|---|---|
| 229 | PMO Service Catalog Capability Deployment Blueprint | MERGE TO A36 (PMO governance portions) |
| 302 | Governance Health Scorecard (PMO portions) | REFERENCE ONLY → A36 |
| 305 | PMO Maturity Assessment | REFERENCE ONLY → A36 |
| 306 | PMO Value Scorecard | REFERENCE ONLY → A36 |

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A23 PMO Improvement Backlog | Operational improvement queue; fed by A36 maturity decisions |
| A11 PMO Service Engagement Record | Service delivery data that informs A36 performance themes |
| A35 Governance and Decision Authority Record | Project governance layer — kept separate from PMO governance in A36 |
