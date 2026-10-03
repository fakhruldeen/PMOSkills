# A06 — Project Management Plan
**Artifact ID:** A06
**Artifact Name:** Project Management Plan
**Version:** 1.0.0
**Status:** Definition · Active
**Authority:** PMBOK8 Guide §2.1.6.2 · Standard §3 Principles
**Source Type:** PMI-derived
**File Path:** `artifacts/planning-and-baselines/A06-project-management-plan.md`

---

## Definition

The Project Management Plan (PMP) is the single authorized document that describes how the project will be executed, monitored, controlled, and closed. It integrates all subsidiary plans and baselines into one coherent reference. The PMP is the baseline authority for all project decisions; changes require formal change control.

**PMI Source:** PMBOK8 Guide §2.1.6.2 — Develop Project Management Plan.

---

## Artifact Type

| Field | Value |
|-------|-------|
| **Category** | Planning & Baselines |
| **Type** | Integrated management plan |
| **Lifecycle** | Created in Planning · Updated via change control throughout execution · Closed in Closing |
| **Baseline?** | Yes — once approved, changes require formal change request through SKL-05-02 |
| **Ownership** | Project Manager |

---

## Purpose

- Establish the single authorized reference for how the project will be managed
- Integrate all subsidiary plans (scope, schedule, cost, risk, resource, communications, stakeholder, procurement)
- Define baseline values against which performance is measured
- Serve as the primary input to execution, monitoring, and change control

---

## Sections

| Section | Content | Populated By |
|---------|---------|-------------|
| §1 Project Overview | Charter summary, objectives, success criteria | SKL-02-01 |
| §2 Development Approach & Life Cycle | Lifecycle selection, tailoring decisions, hybrid patterns | SKL-07-01 · SKL-07-04 |
| §3 Scope Management Plan | How scope will be defined, validated, controlled | SKL-03-02 |
| §4 Requirements Management Plan | How requirements will be elicited, traced, and managed | SKL-03-03 |
| §5 Schedule Management Plan | Scheduling methodology, tools, update frequency | SKL-03-06 |
| §6 Cost Management Plan | Cost estimation method, control thresholds, EVM approach | SKL-03-13 |
| §7 Quality Management Plan | Quality standards, acceptance criteria, QA/QC activities | SKL-03-01 |
| §8 Resource Management Plan | Team structure, acquisition strategy, RACI | SKL-03-16 |
| §9 Communications Management Plan | Channels, frequency, format, ownership | SKL-03-08 |
| §10 Risk Management Plan | Risk appetite, methodology, escalation thresholds | SKL-03-09 |
| §11 Procurement Management Plan | Make-or-buy, contract types, vendor management | SKL-03-01 |
| §12 Stakeholder Engagement Plan | Engagement strategy, monitoring approach | SKL-03-07 |
| §13 Change Management Plan | Change threshold model (T1–T4), CCB composition, process | AUTHORITY-ROUTING.md |
| §14 Baselines | Scope baseline (A08) · Schedule baseline (A15) · Cost baseline (A16) | SKL-03-05 · SKL-03-06 · SKL-03-15 |

---

## Inputs

| Input | Source |
|-------|--------|
| A04 — Project Charter | SKL-02-01 |
| A05 — Context Register (EEF/OPA) | SKL-01-01 · SKL-01-02 · SKL-01-03 |
| A07 — Stakeholder Register & SEAM | SKL-02-02 · SKL-03-07 |
| All Pack 03 subsidiary plan outputs | SKL-03-02 through SKL-03-17 |
| A06 §2 Lifecycle/Tailoring section | SKL-07-01 |

---

## Outputs / Produces

| Output | Used By |
|--------|--------|
| Approved integrated plan | All Pack 04, 05, 06, 07 skills |
| Baselines (scope · schedule · cost) | SKL-05-02 (change control) |
| Subsidiary plan references | All domain control skills |

---

## Quality Criteria

- All subsidiary plans present and internally consistent
- Baselines formally approved and version-controlled
- Change control threshold model (T1–T4) documented
- Stakeholder and sponsor sign-off recorded
- Development approach documented in §2
- No contradictions between subsidiary plans

---

## Related Artifacts

| Artifact | Relationship |
|----------|--------------|
| A04 — Project Charter | Authorizes the project; PMP operationalizes it |
| A05 — Context Register | Provides EEF/OPA inputs |
| A08 — Scope Document | Contains scope baseline (§14 reference) |
| A15 — Schedule Model | Contains schedule baseline (§14 reference) |
| A16 — Financial Management Record | Contains cost baseline (§14 reference) |
| A12 — Change Log | Records all approved changes to the PMP |

---

## PMBOK8 Anchors

| Reference | Detail |
|-----------|--------|
| PMBOK8 Guide §2.1.6.2 | Develop Project Management Plan |
| PMBOK8 Guide Figure 2-4 | PMP development inputs/outputs |
| PMBOK8 Standard §3 | Principles embedded in plan structure |
| Process-Groups §3.3 | Planning Process Group outputs |

---

*Owner: Project Manager · Version Control: Semantic versioning · Change Control: T2–T4 per AUTHORITY-ROUTING.md*
*Last Updated: 2026-05-30 · Patch D*
