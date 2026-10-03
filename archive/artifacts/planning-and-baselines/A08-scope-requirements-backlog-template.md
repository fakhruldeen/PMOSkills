---
artifact_id: A08
artifact_name: Scope, Requirements, and Backlog Document
artifact_type: template
version: "1.0.0"
status: Template · Active
parent_definition: artifacts/planning-and-baselines/A08-scope-requirements-backlog.md
authority: PMBOK8 Guide §2.2; WBS-3E; BAP-2E; APG §5
---

# A08 — Scope, Requirements, and Backlog Document Template

> **Usage:** This is the single scope baseline artifact. Complete §1–§4 for all projects. Complete §5 (Backlog) only for adaptive or hybrid projects. §6 (Scope Control Log) is maintained continuously throughout execution. Replace every `[FIELD: ...]` placeholder. Obtain formal approval before execution begins — no baseline change without a logged CR in A12.

---

## Section 1 — Scope Management Plan

### 1.1 Record Header

| Field | Entry |
|---|---|
| Project or initiative name | [FIELD: Full project name] |
| Project ID | [FIELD: Project identifier] |
| Project manager | [FIELD: PM name] |
| Version | [FIELD: e.g., v1.0] |
| Status | [FIELD: Draft / Approved baseline] |
| Approval date | [FIELD: YYYY-MM-DD] |
| Approved by | [FIELD: Name and role — sponsor or PM per A06 threshold] |
| Linked artifacts | A04 · A05 · A06 · A07 · A12 · A15 · A16 · A19 |

### 1.2 Scope Management Approach

| Field | Entry |
|---|---|
| How scope is defined | [FIELD: Describe the process — requirements workshops, prototypes, user stories, etc.] |
| How scope is validated | [FIELD: Describe acceptance and validation approach] |
| How scope is controlled | [FIELD: Describe change control process — link to A12 and AUTHORITY-ROUTING.md] |
| Scope change authority threshold | [FIELD: T1/T2/T3/T4 per AUTHORITY-ROUTING.md — state what level triggers sponsor or governance approval] |
| Scope baseline approval authority | [FIELD: Role and name] |

---

## Section 2 — Requirements Documentation

### 2.1 Requirements Register

| Req ID | Stakeholder source | Requirement description | Category | Priority | Acceptance criterion | Status | A13 trace ref |
|---|---|---|---|---|---|---|---|
| REQ-001 | [FIELD: Stakeholder name / group from A07] | [FIELD: Clear, testable requirement statement] | [FIELD: Functional / Non-functional / Business / Quality / Constraint] | [FIELD: Must have / Should have / Could have / Won't have] | [FIELD: Measurable acceptance criterion] | [FIELD: Draft / Approved / Deferred / Rejected] | [FIELD: A13 row reference or N/A] |

### 2.2 Requirements Summary

| Category | Count | Notes |
|---|---|---|
| Functional | [FIELD: Number] | |
| Non-functional | [FIELD: Number] | |
| Business | [FIELD: Number] | |
| Constraints | [FIELD: Number] | |
| **Total** | [FIELD: Total] | |

---

## Section 3 — Project Scope Statement

| Field | Entry |
|---|---|
| Project purpose | [FIELD: One paragraph — why this project exists, linked to A04 business case] |
| In-scope deliverables | [FIELD: Numbered list of all deliverables the project will produce] |
| Out-of-scope exclusions | [FIELD: Explicit list of what is NOT included — prevents scope creep] |
| Assumptions | [FIELD: List of planning assumptions — conditions assumed true for this scope to be valid] |
| Constraints | [FIELD: List of constraints — budget cap, regulatory, technology, timeline] |
| Acceptance criteria (project level) | [FIELD: Conditions that must be met for the sponsor / client to accept the overall project output] |

---

## Section 4 — WBS / Scope Structure

### 4.1 WBS Summary

| WBS Code | Deliverable / Work Package | Level | Parent WBS code | Owner | Estimated effort | Linked schedule activity |
|---|---|---|---|---|---|---|
| 1.0 | [FIELD: Project name] | 1 | — | [FIELD: PM] | | |
| 1.1 | [FIELD: Major deliverable 1] | 2 | 1.0 | [FIELD: Owner] | [FIELD: Effort] | [FIELD: Activity ID in A15] |
| 1.1.1 | [FIELD: Work package] | 3 | 1.1 | [FIELD: Owner] | [FIELD: Effort] | [FIELD: Activity ID] |

> **100% rule:** The WBS must represent 100% of the project scope — no work is performed outside the WBS.

### 4.2 WBS Dictionary (one row per work package)

| WBS Code | Work package name | Description | Acceptance criteria | Resources | Estimated cost | Dependencies |
|---|---|---|---|---|---|---|
| [FIELD: WBS code] | [FIELD: Name] | [FIELD: Full description of what is included and excluded] | [FIELD: How completion is verified] | [FIELD: Resources required] | [FIELD: Cost estimate — link to A16] | [FIELD: Predecessor WBS codes] |

---

## Section 5 — Backlog (Adaptive and Hybrid Projects Only)

> **Skip this section for predictive projects.**

### 5.1 Product Backlog

| Item ID | User story / feature | Priority | Acceptance criteria (Definition of Ready) | Story points / effort | Status |
|---|---|---|---|---|---|
| PBI-001 | [FIELD: As a [role] I want [capability] so that [benefit]] | [FIELD: MoSCoW priority] | [FIELD: DoR criteria — all must be met before sprint entry] | [FIELD: Points or T-shirt size] | [FIELD: Backlog / Ready / In progress / Done] |

### 5.2 Iteration / Sprint Backlog

| Sprint ID | Sprint goal | PBI IDs included | Planned capacity (hours) | Actual velocity | Sprint status |
|---|---|---|---|---|---|
| Sprint-01 | [FIELD: Sprint goal statement] | [FIELD: PBI-NNN list] | [FIELD: Hours] | [FIELD: Story points completed] | [FIELD: Planned / Active / Complete] |

### 5.3 Definition of Done (DoD)

[FIELD: List the team's agreed Definition of Done criteria — conditions every item must meet before it is considered complete]

---

## Section 6 — Scope Control Log

| Date | Scope event | Description | Impact | Action taken | CR reference (A12) | Status |
|---|---|---|---|---|---|---|
| [FIELD: YYYY-MM-DD] | [FIELD: Creep identified / Variance reported / Change approved] | [FIELD: Description of the scope event] | [FIELD: Impact on schedule / cost / quality] | [FIELD: Action taken — rejected, CR raised, accepted] | [FIELD: A12 CR-NNN or N/A] | [FIELD: Open / Resolved] |

---

## Section 7 — Scope Baseline Approval

| Version | Date | Status | Approved by | Notes |
|---|---|---|---|---|
| v1.0 | [FIELD: YYYY-MM-DD] | [FIELD: Approved baseline] | [FIELD: Sponsor / PM name per A06 threshold] | Initial approved baseline |

---

*Authority: PMBOK8 Guide §2.2; WBS-3E; BAP-2E; APG §5*
*Source type: PMI-derived · Version: 1.0.0 · Parent definition: A08-scope-requirements-backlog.md*
