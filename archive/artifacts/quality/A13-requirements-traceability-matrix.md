---
artifact_id: A13
name: Requirements Traceability Matrix
version: 1.0.0
status: Active
category: Scope and Requirements Control
governance_layer: Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide Table 2-1 Elicit and Analyze Requirements; Validate Scope; Requirements practice guidance"
authority: PMI-derived
performance_domains:
  - Scope
  - Delivery
  - Governance
focus_areas:
  - Planning
  - Executing
  - Monitoring and Controlling
required_by_skills:
  - SKL-03-04
  - SKL-05-03
created_by_skills:
  - SKL-03-04
linked_artifacts:
  - A08
  - A09
  - A14
  - A17
  - A12
---

# A13 — Requirements Traceability Matrix

**Artifact ID:** A13
**Name:** Requirements Traceability Matrix
**Version:** 1.0.0
**Status:** Active
**Source Type:** PMI-derived
**Governance Layer:** Project Governance
**Authority:** PMBOK8 Guide Table 2-1 Elicit and Analyze Requirements; Validate Scope; Requirements practice guidance

---

## 1. Purpose

The Requirements Traceability Matrix (RTM) links each requirement to its business need, project objective, WBS work package, deliverable, test or verification activity, and acceptance criterion. It provides an auditable record that every stated requirement has a defined delivery path and a defined acceptance mechanism.

The RTM is the primary control mechanism ensuring that scope creep is detected, that all requirements are accounted for during delivery, and that no requirement is accepted as delivered without verified traceability to an acceptance criterion.

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Traceability from business need to requirement | Requirements elicitation techniques and workshops |
| Traceability from requirement to WBS work package or backlog item | Detailed requirements specifications (belong in A08) |
| Traceability from requirement to test/verification activity | Acceptance test scripts (operational test artifacts) |
| Traceability from requirement to acceptance criterion | Defect tracking log (a living execution artifact) |
| Requirements status tracking (draft, approved, tested, accepted) | Stakeholder needs analysis (belongs in A07 and A08) |
| Change impact tracing (which requirements affected by a change) | Technical design documents |

---

## 3. Trigger Conditions

The Requirements Traceability Matrix is created when:

- Requirements have been elicited and documented in A08.
- The project requires formal traceability between business needs and deliverables.
- Regulatory, contractual, or quality standards require documented requirements traceability.

The RTM is updated when:

- New requirements are added or existing requirements are changed.
- A requirement is tested or accepted — status is updated accordingly.
- A change request in A12 affects one or more requirements.
- A work package in the WBS is restructured affecting traceability links.

---

## 4. Required Sections / Fields

Every RTM entry must include the following fields:

| Field | Description | Required |
|---|---|---|
| Requirement ID | Unique identifier | Mandatory |
| Requirement statement | Brief description of what is required | Mandatory |
| Business need / objective | The need or project objective this requirement supports | Mandatory |
| Priority | High / Medium / Low or MoSCoW classification | Mandatory |
| WBS reference or backlog item | Where this requirement is implemented in the schedule or backlog | Mandatory |
| Deliverable | The deliverable that satisfies this requirement | Mandatory |
| Acceptance criterion | How satisfaction of the requirement will be verified | Mandatory |
| Verification method | Test, inspection, demonstration, analysis | Mandatory |
| Status | Draft / Approved / In Development / Tested / Accepted / Deferred / Rejected | Mandatory |
| Change reference | Reference to any A12 change decision affecting this requirement | Recommended |
| Owner | Stakeholder or team responsible for the requirement | Recommended |

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | Table 2-1 Elicit and Analyze Requirements | Confirms requirements elicitation and analysis as a defined PMBOK 8 process |
| PMBOK8 Guide | Table 2-1 Validate Scope | Links the RTM to the scope validation process — requirements are verified through the RTM |
| PMBOK8 Guide | Table 2-1 Monitor and Control Scope | Uses the RTM to detect unauthorized scope changes and requirements drift |
| Requirements | PMI Requirements Management Practice Guide | Provides detailed requirements traceability guidance supporting RTM design |
| PMI-BA | PMI Guide to Business Analysis — traceability sections | Grounds business analysis traceability practices in PMI-aligned guidance |
| PMI Lexicon | Requirements Traceability Matrix definition | Canonical PMI definition: a grid that links product requirements from their origin to the deliverables that satisfy them |

---

## 6. Used By (Skills That Consume This Artifact)

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-03-04 | Elicit and Analyze Requirements | Primary producing skill — populates RTM as requirements are identified and approved |
| SKL-04-01 | Direct and Manage Project Work | Uses RTM to confirm work packages are delivering against requirements |
| SKL-05-03 | Control Scope | RTM is the primary scope control reference — unauthorized scope additions violate RTM traceability |
| SKL-05-01 | Monitor and Control Project Work | RTM status column feeds requirements delivery progress into performance reporting |
| SKL-06-01 | Close Project or Phase | All RTM requirements must reach Accepted status before closure is complete |

---

## 7. Created By (Skills That Produce This Artifact)

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-03-04 | Elicit and Analyze Requirements | Creates RTM entries as requirements are elicited, analyzed, and approved |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A08 | Scope and Requirements Decision Record | A08 is the source of approved requirements — RTM traces each requirement from A08 to delivery |
| A09 | Quality Management Plan | Verification methods in the RTM must align with quality control activities in A09 |
| A12 | Change and Exception Decision Log | Change decisions that affect requirements are referenced in the RTM change reference field |
| A14 | Integrated Project Management Plan | RTM is a living planning and control artifact supporting the integrated plan |
| A17 | Integrated Performance Reporting Record | RTM completion percentage feeds into performance reporting |

---

## 9. Validation Criteria

| Check | Validation Rule |
|---|---|
| All approved requirements traced | Every requirement in A08 with Approved status has a corresponding RTM entry |
| WBS linkage complete | Every RTM entry links to a WBS work package or backlog item |
| Acceptance criteria present | Every RTM entry has at least one acceptance criterion and a verification method |
| Status current | RTM status fields are updated to reflect current delivery and testing state |
| Change references tracked | Any requirement affected by an A12 change decision has the change reference recorded |
| No orphan deliverables | No deliverable is accepted as complete if its requirements remain in non-Accepted status in the RTM |
| Waste test pass | RTM is not duplicated alongside a separate requirements specification, acceptance matrix, and test log containing the same traceability data |

**Waste test:** Fail if a separate requirements specification, an acceptance criteria matrix, and a test case register all replicate the same requirement-to-deliverable traceability without providing distinct control value beyond the RTM.

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 7 |
