---
artifact_id: A22
name: Portfolio Interdependency Record
template_version: "1.0.0"
status: "Template · Active"
category: Portfolio Coordination
authority: "Governance at the Portfolio Level (GPPP); PMO-Guide"
source_type: synthesis
file_path: artifacts/portfolio/A22-portfolio-interdependency-record-template.md
---

## [A22] — Portfolio Interdependency Record | Template

> **Usage note:** This is a blank template. Replace every `[FIELD: ...]` placeholder with portfolio-specific content. Static text, legend entries, rules, and checklist items are pre-filled and should be retained as written. Remove this usage note before publishing.

---

## Section 1 — Header / Identification

| Field | Value |
|---|---|
| Portfolio Name | [FIELD: name of the portfolio] |
| Portfolio Authority | [FIELD: name or role of the portfolio sponsor or governance board] |
| PMO Analyst | [FIELD: name of the PMO analyst responsible for this record] |
| Review Date | [FIELD: YYYY-MM-DD] |
| Version | [FIELD: e.g. 1.0] |
| Status | [FIELD: select from Draft / Under Review / Approved / Superseded] |
| Linked Artifacts | A19, A07 (portfolio level) |

---

## Section 2 — Dependency Register

*Each row represents one identified interdependency between portfolio initiatives. Complete all columns.*

| Dep ID | Source Initiative | Target Initiative | Dependency Type | Impact if Unresolved | Coordination Action | Owner | Due Date | Status |
|---|---|---|---|---|---|---|---|---|
| [FIELD: unique dep ID, e.g. DEP-001] | [FIELD: name or ID of the initiative that creates or owns the dependency] | [FIELD: name or ID of the initiative that is affected by the dependency] | [FIELD: select from Milestone / Resource / Data / Decision / Regulatory / Technical — see Section 3] | [FIELD: describe the consequence to the target initiative if the dependency is not resolved] | [FIELD: describe the coordination action required to resolve or manage the dependency] | [FIELD: name or role responsible for coordination] | [FIELD: YYYY-MM-DD] | [FIELD: select from Open / In Progress / Resolved / Escalated] |
| [FIELD: dep ID] | [FIELD: source initiative] | [FIELD: target initiative] | [FIELD: dependency type] | [FIELD: impact] | [FIELD: coordination action] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: status] |
| [FIELD: dep ID] | [FIELD: source initiative] | [FIELD: target initiative] | [FIELD: dependency type] | [FIELD: impact] | [FIELD: coordination action] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: status] |

*Add rows as required. Every identified cross-initiative dependency must appear here.*

---

## Section 3 — Dependency Type Reference

The following dependency type definitions are static. Do not replace with [FIELD: ...] placeholders.

| Type | Definition |
|---|---|
| Milestone | One initiative's schedule milestone must be reached before another initiative can proceed with a planned activity. |
| Resource | Two or more initiatives are competing for the same resource (people, equipment, funding, or facilities) during overlapping periods. |
| Data | One initiative depends on data, outputs, or information produced by another initiative before it can proceed. |
| Decision | One initiative is waiting for a governance decision (approval, selection, or policy) that is owned by or affects another initiative. |
| Regulatory | A regulatory, compliance, or legal event in one initiative creates constraints or triggers obligations in another initiative. |
| Technical | A technical component, integration, platform, or architecture decision in one initiative directly affects another initiative's design or delivery. |

---

## Section 4 — Shared Capacity Conflicts

*Log instances where two or more initiatives are competing for the same resource or capacity and an explicit resolution is needed.*

| Resource / Asset | Competing Initiatives | Conflict Description | Resolution | Owner | Date |
|---|---|---|---|---|---|
| [FIELD: name of the shared resource or asset, e.g. Enterprise Architecture Team] | [FIELD: list of initiative names or IDs competing for this resource] | [FIELD: describe the nature of the capacity conflict] | [FIELD: describe the agreed resolution or allocation decision] | [FIELD: name or role responsible for enforcing the resolution] | [FIELD: YYYY-MM-DD resolution date] |
| [FIELD: resource / asset] | [FIELD: competing initiatives] | [FIELD: conflict description] | [FIELD: resolution] | [FIELD: owner] | [FIELD: YYYY-MM-DD] |

*Add rows as required.*

---

## Section 5 — Escalation Log

*Record dependencies that could not be resolved at the portfolio coordination level and required governance escalation.*

| Escalation ID | Dependency ID | Escalation Reason | Authority Escalated To | Decision | Date |
|---|---|---|---|---|---|
| [FIELD: escalation ID, e.g. ESC-001] | [FIELD: dep ID from Section 2] | [FIELD: reason the dependency could not be resolved at coordination level] | [FIELD: name or body the matter was escalated to, e.g. Portfolio Governance Board] | [FIELD: decision or outcome made by the escalation authority] | [FIELD: YYYY-MM-DD decision date] |
| [FIELD: escalation ID] | [FIELD: dep ID] | [FIELD: reason] | [FIELD: authority] | [FIELD: decision] | [FIELD: YYYY-MM-DD] |

*Add rows as required.*

---

## Section 6 — Portfolio Coordination Actions

*Track discrete actions arising from dependency management that require follow-through.*

| Action ID | Linked Dependency | Action Description | Owner | Due Date | Status |
|---|---|---|---|---|---|
| [FIELD: action ID, e.g. ACT-001] | [FIELD: dep ID from Section 2] | [FIELD: specific action required to coordinate, resolve, or monitor the dependency] | [FIELD: name or role responsible] | [FIELD: YYYY-MM-DD] | [FIELD: select from Open / In Progress / Complete / Overdue] |
| [FIELD: action ID] | [FIELD: dep ID] | [FIELD: action description] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: status] |
| [FIELD: action ID] | [FIELD: dep ID] | [FIELD: action description] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: status] |

*Add rows as required.*

---

## Section 7 — Waste Test

Before finalizing this record, confirm that each element passes the following waste test. These items are static guidance — do not convert to [FIELD: ...] placeholders.

- [ ] Every cross-initiative dependency is explicitly identified — none are implied or informal.
- [ ] Dependency type is selected from the defined type reference (Section 3) — no free-text types.
- [ ] Every dependency has a named owner responsible for coordination, not a team or committee.
- [ ] Impact statements describe a specific consequence — not generic language like "may cause delay."
- [ ] Shared capacity conflicts have explicit resolution decisions, not open questions.
- [ ] Escalated items have a documented decision from the escalation authority.
- [ ] All coordination actions have due dates and statuses.
- [ ] Dependencies marked Resolved have a documented resolution — not simply closed without action.
- [ ] The record is reviewed at each portfolio governance cycle, not only when conflicts arise.
- [ ] This record is cross-referenced with A19 (Risk Register) where unresolved dependencies constitute portfolio-level risks.
- [ ] The record is proportionate to portfolio size — minor, low-impact dependencies may be noted without full log entries.

---

## Change Log

| Version | Date | Author / Phase | Notes |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch A | Initial template |

---

*Template for: Portfolio Interdependency Record*
*Authority: Governance at the Portfolio Level (GPPP); PMO-Guide*
*See definition file: artifacts/portfolio/A22-portfolio-interdependency-record-template.md*
