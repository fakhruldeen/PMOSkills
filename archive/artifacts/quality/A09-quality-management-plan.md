---
artifact_id: A09
name: Quality Management Plan
version: 1.0.0
status: Active
category: Quality Planning
governance_layer: Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide §2.7 Delivery Performance Domain; Table 2-1 Plan Quality Management"
authority: PMI-derived
performance_domains:
  - Delivery
  - Governance
  - Scope
focus_areas:
  - Planning
  - Monitoring and Controlling
required_by_skills:
  - SKL-03-09
  - SKL-05-01
created_by_skills:
  - SKL-03-09
linked_artifacts:
  - A06
  - A08
  - A14
  - A17
  - A12
---

# A09 — Quality Management Plan

**Artifact ID:** A09
**Name:** Quality Management Plan
**Version:** 1.0.0
**Status:** Active
**Source Type:** PMI-derived
**Governance Layer:** Project Governance
**Authority:** PMBOK8 Guide §2.7 Delivery Performance Domain; Table 2-1 Plan Quality Management

---

## 1. Purpose

The Quality Management Plan describes how the project will implement the organization's quality policy, identifies quality standards applicable to the project, defines how compliance with those standards will be achieved and verified, and establishes the quality roles, responsibilities, and control mechanisms.

It answers the question: *How will the project ensure that deliverables meet defined acceptance criteria and that processes produce predictable, fit-for-purpose results?* The plan distinguishes between quality assurance (process-oriented, prevention-focused) and quality control (output-oriented, inspection-focused), and links both to the acceptance criteria in the Scope and Requirements Decision Record (A08).

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Quality standards applicable to project deliverables | Detailed acceptance test scripts (belong with A08 per work package) |
| Quality roles and responsibilities | Detailed defect tracking log (maintained as a living execution artifact) |
| Quality assurance approach (process audits, reviews) | Vendor quality audit results (belong in A31 Procurement record) |
| Quality control approach (inspections, testing, metrics) | Financial audit procedures (belong in A16) |
| Quality metrics and measurement approach | Product specification or technical design standards |
| Acceptance criteria process and sign-off rules | Risk register (belongs in A19) |
| Non-conformance and corrective action process | Change requests and decisions (belong in A12) |
| Continuous improvement approach | PMO maturity assessment (belongs in A36) |

---

## 3. Trigger Conditions

The Quality Management Plan is created when:

- Planning begins and the project has defined deliverables requiring quality standards.
- The organization's quality policy requires a documented quality approach for projects of this type or complexity.
- Regulatory, contractual, or customer requirements mandate a formal quality plan.

The plan is updated when:

- Scope changes introduce new deliverables with different quality standards.
- Quality performance data reveals that the current approach is not achieving intended results.
- Regulatory or contractual quality requirements change.
- A non-conformance triggers a review of the quality approach.

---

## 4. Required Sections / Fields

| Field | Description | Required |
|---|---|---|
| Quality standards reference | Which organizational, industry, regulatory, or contractual standards apply | Mandatory |
| Quality objectives | Measurable quality targets for key deliverables or processes | Mandatory |
| Quality roles and responsibilities | Who owns quality assurance, quality control, and acceptance sign-off | Mandatory |
| Quality assurance activities | Scheduled process audits, peer reviews, phase gate quality checks | Mandatory |
| Quality control activities | Inspection, testing, verification, and validation activities with frequency | Mandatory |
| Quality metrics | What will be measured, how, and at what threshold | Mandatory |
| Acceptance criteria process | How acceptance criteria from A08 are verified and formally accepted | Mandatory |
| Non-conformance process | How defects, failures, and non-conformances are recorded, escalated, and resolved | Mandatory |
| Continuous improvement approach | How quality lessons are captured and fed back into the process | Recommended |
| Tools and techniques | Quality management tools to be used (e.g., checklists, statistical sampling, reviews) | Recommended |

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | §2.7 Delivery Performance Domain | Establishes quality as a core delivery concern — fit for purpose and meeting acceptance criteria |
| PMBOK8 Guide | Table 2-1 Plan Quality Management | Confirms the Quality Management Plan as the output of the Plan Quality Management process |
| PMBOK8 Guide | Table 2-1 Manage Quality | Links the plan to the quality assurance execution process |
| PMBOK8 Guide | Table 2-1 Control Quality | Links the plan to the quality control and inspection process |
| PMI Lexicon | Quality Management Plan definition | Canonical PMI definition: a component of the project management plan that describes how applicable policies, procedures, and guidelines will be implemented to achieve the quality objectives |

---

## 6. Used By (Skills That Consume This Artifact)

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-03-09 | Plan Quality Management | Primary producing skill — defines and documents the quality approach |
| SKL-04-01 | Direct and Manage Project Work | References quality approach during execution to ensure compliance |
| SKL-05-01 | Monitor and Control Project Work | Quality metrics and non-conformance data feed into performance monitoring |
| SKL-05-03 | Control Scope | Acceptance criteria process from quality plan governs scope validation |
| SKL-06-01 | Close Project or Phase | Quality acceptance records are part of closure evidence |

---

## 7. Created By (Skills That Produce This Artifact)

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-03-09 | Plan Quality Management | Defines and documents the complete quality management approach |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A06 | Tailoring Decision Record | Tailoring decisions determine the depth of quality planning required |
| A08 | Scope and Requirements Decision Record | Acceptance criteria in A08 are the primary input to quality control activities |
| A14 | Integrated Project Management Plan | Quality Management Plan is a subsidiary plan within A14 |
| A17 | Integrated Performance Reporting Record | Quality metrics feed into performance reporting |
| A12 | Change and Exception Decision Log | Non-conformances and corrective actions may trigger change decisions in A12 |
| A19 | Risk Management Record | Quality failures are a risk category — risk responses may include quality controls |

---

## 9. Validation Criteria

| Check | Validation Rule |
|---|---|
| Standards referenced | At least one applicable quality standard (organizational, regulatory, or contractual) is identified |
| Quality objectives measurable | At least one quality objective has a numeric or observable target |
| Roles assigned | Quality assurance owner and quality control owner are named |
| QA activities scheduled | At least one planned quality assurance activity with timing is documented |
| QC activities defined | Inspection or testing activities linked to at least one deliverable acceptance criterion |
| Non-conformance process present | A clear process for recording and resolving defects or failures is documented |
| Linked to A08 | The acceptance criteria process references A08 as the source of acceptance criteria |
| Waste test pass | Quality assurance and quality control activities are not duplicated across separate audit plans, checklists, and inspection sheets without distinct control value |

**Waste test:** Fail if a standalone quality assurance audit plan, a separate quality control checklist set, and a defect tracking workbook all contain the same quality standard requirements without providing distinct decision control. Consolidate into this plan plus living execution logs.

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 4 |
