---
artifact_id: A02
name: Benefits and Value Measurement Record
version: 1.0.0
status: Definition · Active
category: Stakeholders
governance_layer: Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide §2.1.2 · Standard §3 Principles · Program-5E · Portfolio-4E"
authority: "PMBOK8 Guide §2.1.2 · Standard §3 Principles · Program-5E · Portfolio-4E"
performance_domains:
  - Stakeholders
  - Value
  - Governance
linked_artifacts:
  - A01
  - A04
  - A05
  - A07
  - A17
  - A27
file_path: "artifacts/initiating/A02-benefits-value-measurement-record.md"
---

# A02 — Benefits and Value Measurement Record

**Artifact ID:** A02
**Artifact Name:** Benefits and Value Measurement Record
**Version:** 1.0.0
**Status:** Definition · Active
**Authority:** PMBOK8 Guide §2.1.2 · Standard §3 Principles · Program-5E · Portfolio-4E
**Source Type:** PMI-derived
**File Path:** `artifacts/initiating/A02-benefits-value-measurement-record.md`

---

## Definition

The Benefits and Value Measurement Record is the artifact that defines, tracks, and confirms the business benefits and value that the project is intended to deliver. It links project outputs (deliverables) to business outcomes (benefits) and organizational value, and it persists beyond project closure to support benefits realization tracking by the sponsoring organization.

**PMI Source:** PMBOK8 Guide §2.1.2 — Value Delivery System; Standard §3 Principles (focus on value, stewardship); Program-5E §4 Benefits Management.

---

## Artifact Type

| Field | Value |
|---|---|
| **Category** | Stakeholders |
| **Type** | Benefits realization and value record |
| **Lifecycle** | Initiated at project authorization (A01/A04) · Updated throughout project · Handed off at closure · Maintained post-project by benefits owner |
| **Baseline?** | Benefits baseline established at Planning; changes via change control |
| **Ownership** | Project Sponsor / Benefits Owner (post-project) · Project Manager (during project) |

---

## Purpose

- Define and quantify the business benefits the project is expected to deliver
- Link project deliverables to business outcomes and strategic objectives
- Establish measurable benefit indicators and baseline values
- Track benefit realization during and after project execution
- Provide the value justification referenced in A17 (§9) and A27 (§3)
- Support portfolio-level value reporting and benefits governance

---

## Sections

| Section | Content | Populated By |
|---|---|---|
| §1 Strategic Alignment | Link between project objectives and organizational strategy, portfolio/program context | SKL-02-01 |
| §2 Benefits Register | All identified benefits using schema below | SKL-02-01 · SKL-03-01 |
| §3 Value Measurement Plan | KPIs, measurement method, baseline values, measurement frequency, data source | SKL-03-01 |
| §4 Benefits Realization Tracking | Periodic measurement of benefit indicators against baseline | SKL-05-01 (ongoing) |
| §5 Post-Project Benefits Handoff | Benefits owner, handoff date, post-project tracking plan, governance authority | SKL-06-01 |

---

## Benefit Entry Schema (§2)

| Field | Description |
|---|---|
| **Benefit ID** | Format: B-NNN (e.g., B-001) |
| **Benefit Name** | Short descriptive name |
| **Type** | Financial / Operational / Strategic / Compliance / Reputational |
| **Description** | Clear statement of the expected benefit |
| **Linked Deliverable(s)** | Project deliverable(s) that produce this benefit |
| **Benefit Owner** | Named individual accountable for realization |
| **KPI / Indicator** | Measurable indicator of benefit realization |
| **Baseline Value** | Current state value before project |
| **Target Value** | Expected value after project |
| **Measurement Method** | How and where data will be collected |
| **Realization Timeframe** | When benefit is expected to be realized (during/post-project) |
| **Status** | Not Started / In Progress / Partially Realized / Fully Realized |

---

## Inputs

| Input | Source |
|---|---|
| A01 — Business Case | Pre-authorization |
| A04 — Project Charter | SKL-02-01 |
| A05 — Context Register (strategic objectives) | SKL-01-01 |
| A07 — Stakeholder Register (benefit stakeholders) | SKL-02-02 |
| Portfolio/Program benefits framework | Organization |

---

## Outputs / Produces

| Output | Used By |
|---|---|
| Benefits baseline | A14 (PMP reference) · Governance |
| Benefits tracking data | A17 §9 (Performance Report) |
| Post-project handoff record | A27 §3 (Closure Record) · Benefits owner |

---

## Quality Criteria

- All benefits traceable to project deliverables and strategic objectives
- Every benefit has a named owner and measurable KPI
- Baseline values documented before project execution begins
- Realization timeframe specified (not all benefits realize at project close)
- Post-project handoff record completed before A27 is signed
- Benefits with post-project realization have a named benefits owner outside the project team

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A01 — Business Case | Source of initial benefit assumptions |
| A04 — Project Charter | High-level benefit statements |
| A07 — Stakeholder Register | Benefit stakeholders identified |
| A17 — Performance Report | Benefits tracking in §9 |
| A27 — Closure Record | Benefits handoff confirmed |
| A05 — Context Register | Strategic alignment reference |

---

## PMBOK8 Anchors

| Reference | Detail |
|---|---|
| PMBOK8 Guide §2.1.2 | Value Delivery System |
| PMBOK8 Standard §3 | Principle: Focus on Value · Stewardship |
| Program-5E §4 | Benefits Management in program context |
| Portfolio-4E §5 | Portfolio value and benefits governance |

---

## Change Log

| Version | Date | Change |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial definition — Patch G |
| 1.0.1 | 2026-06-01 | Migrated from artifacts/stakeholders/ to artifacts/initiating/ (P0-0I) |

---

*Owner: Project Sponsor / Benefits Owner · PM manages during project · Post-project: Benefits Owner*
*Retention: Per organizational records policy*
