# A22 — Portfolio Interdependency Record

## Artifact metadata

| Field | Value |
|---|---|
| **Artifact ID** | A22 |
| **Artifact name** | Portfolio Interdependency Record |
| **Artifact family** | Portfolio and PMO interfaces |
| **Artifact type** | Portfolio coordination artifact |
| **Source type** | synthesis |
| **Governance layer** | Portfolio Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Show significant cross-project or cross-program dependencies, shared-resource conflicts, and coordination decisions that cannot be resolved at the individual project level.

---

## When used

When multiple initiatives compete for shared milestones, resources, key decisions, or external dependencies that affect more than one project.

---

## PMI authority

| Field | Detail |
|---|---|
| **Primary PMI source** | GPPP |
| **Exact section** | Governance at the Portfolio Level; PMO-Guide |
| **Purpose of citation** | Separate enterprise coordination from project-level control and establish the portfolio layer as the authority for cross-project dependency management. |

---

## Performance domains and focus areas

- **Performance domains:** Governance, Resources, Schedule, Finance, Risk
- **Focus areas:** Planning, Monitoring and Controlling
- **Related processes:** Monitor and Control Project Performance; Integrate and Align Project Plans

---

## Inputs and outputs

### Inputs
- Portfolio priorities and sequencing decisions
- Schedule and milestone data from constituent projects
- Shared capacity picture (people, systems, budget)
- Risk and dependency information from project risk records

### Outputs
- Dependency visibility map
- Escalation and coordination decisions
- Shared-capacity conflict resolutions
- Portfolio-level actions and owners

---

## Core fields

| Field | Description |
|---|---|
| Dependency ID | Unique identifier for the dependency relationship |
| Source initiative | The project or program generating the dependency |
| Target initiative | The project or program affected by the dependency |
| Dependency type | Milestone, resource, data, decision, regulatory, or technical |
| Impact if unresolved | Schedule, cost, risk, or value impact |
| Coordination action | Agreed action to manage or resolve the dependency |
| Owner | Person or role responsible for the coordination action |
| Due date | Expected resolution or review date |
| Status | Open, in progress, escalated, or resolved |

---

## Governance

| Field | Detail |
|---|---|
| **Owner** | Portfolio owner with PMO analyst support |
| **Approval authority** | Portfolio board or designated portfolio authority |
| **Escalation trigger** | A dependency causes a strategic conflict or shared-capacity contention that cannot be resolved within project-level authority |

---

## Tailoring guidance

- Keep this record at the portfolio layer; do not embed it inside individual project artifact sets.
- For large programmes, a programme-level dependency log may supplement this record — maintain clear ownership boundaries.
- Use a visual map (dependency board or swimlane) as a companion view if the portfolio is complex; the governing record remains this artifact.

---

## Waste test

Fail if the same dependency information is repeated in multiple project-level logs without a portfolio-level coordinating record that drives resolution decisions.

---

## Notes

- Replaces v1.0.2 Item 243 (Integrated Master Milestone Dependencies Directory) as the portfolio-governance-layer dependency artifact.
- Do not route routine project-level issue tracking through this record; escalate only when cross-project authority is needed.
