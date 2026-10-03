---
artifact_id: A11
name: Procurement Management Plan
version: 1.0.0
status: Active
category: Procurement Planning
governance_layer: Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide Appendix X4 Procurement; Table 2-1 Plan Procurement Management"
authority: PMI-derived
performance_domains:
  - Governance
  - Finance
  - Risk
  - Resources
focus_areas:
  - Planning
  - Executing
  - Monitoring and Controlling
required_by_skills:
  - SKL-03-16
  - SKL-04-09
created_by_skills:
  - SKL-03-16
linked_artifacts:
  - A06
  - A08
  - A14
  - A16
  - A19
  - A31
  - A32
file_path: "artifacts/procurement/A11-procurement-management-plan.md"
---

# A11 — Procurement Management Plan

**Artifact ID:** A11
**Name:** Procurement Management Plan
**Version:** 1.0.0
**Status:** Active
**Source Type:** PMI-derived
**Governance Layer:** Project Governance
**Authority:** PMBOK8 Guide Appendix X4 Procurement; Table 2-1 Plan Procurement Management

---

## 1. Purpose

The Procurement Management Plan describes how the project will acquire goods, services, or results from outside the project team. It defines the procurement strategy, contract types to be used, supplier selection approach, roles and responsibilities, and how procurement activities will be administered and closed.

It answers the question: *What will be procured, how, from whom, under what contract structure, and who is responsible for managing the supplier relationship?* It is the governing reference for all procurement activities from make-or-buy decisions through contract closure.

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Make-or-buy decisions for project work | Individual contract documents (governed by A31) |
| Procurement strategy and sourcing approach | Supplier evaluation scores and award decisions (governed by A32) |
| Contract types to be used | Supplier claims or dispute records (governed by A33) |
| Supplier selection criteria and process | Vendor performance data (maintained in A31 as a living record) |
| Procurement roles and responsibilities | Financial baseline and cost estimates (belong in A16) |
| Procurement schedule and milestones | Risk register entries for procurement risks (belong in A19) |
| Contract administration approach | Organizational procurement policy (an OPA referenced from A05) |
| Procurement closure approach | Post-project benefits realization |

---

## 3. Trigger Conditions

The Procurement Management Plan is created when:

- Planning identifies that project work will require external procurement of goods, services, or results.
- A make-or-buy analysis confirms that one or more work packages will be procured.
- Regulatory, contractual, or organizational policy requires a documented procurement approach.

The plan is updated when:

- A new procurement need is identified during execution that was not anticipated at planning.
- Contract type or sourcing strategy changes for an approved procurement package.
- Organizational procurement policy changes affect the project's procurement authority.

---

## 4. Required Sections / Fields

| Field | Description | Required |
|---|---|---|
| Make-or-buy decisions | Summary of what will be procured vs. performed internally, with rationale | Mandatory |
| Procurement items register | What is being procured, contract type, estimated value, target award date | Mandatory |
| Contract types | Fixed-price, cost-reimbursable, time-and-materials — with rationale for each | Mandatory |
| Supplier selection criteria | How suppliers will be evaluated and selected | Mandatory |
| Procurement roles and responsibilities | Who has authority to solicit, evaluate, award, administer, and close contracts | Mandatory |
| Procurement schedule | Key milestones — RFP/RFQ issue, bid close, award, contract start, delivery, closure | Mandatory |
| Contract administration approach | How contracts will be monitored, changed, and closed | Mandatory |
| Organizational constraints and policies | Applicable procurement policies, approved supplier lists, spend thresholds | Mandatory |
| Pre-qualified suppliers | Any pre-approved or preferred suppliers relevant to this project | Recommended |
| Risk considerations | Procurement-specific risks that feed into A19 | Recommended |

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | Appendix X4 Procurement | Provides the procurement process guidance anchoring this plan |
| PMBOK8 Guide | Table 2-1 Plan Procurement Management | Confirms the Procurement Management Plan as the output of the Plan Procurement Management process |
| PMBOK8 Guide | Table 2-1 Conduct Procurements | Links the plan to the execution process for procurement |
| PMBOK8 Guide | Table 2-1 Control Procurements | Links the plan to the monitoring and control process for active contracts |
| Forms-Book | Procurement forms and templates | Supports procurement planning and administration using PMI-aligned templates |
| PMI Lexicon | Procurement Management Plan definition | Canonical PMI definition |

---

## 6. Used By

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-03-16 | Plan Procurement Management | Primary producing skill |
| SKL-04-09 | Conduct Procurements | Executes sourcing and contract award activities |
| SKL-05-01 | Monitor and Control Project Work | Procurement performance feeds integrated monitoring |
| SKL-06-01 | Close Project or Phase | Contract closure activities governed by this plan |

---

## 7. Created By

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-03-16 | Plan Procurement Management | Defines and documents the complete procurement approach |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A05 | Context Register | OPAs and EEFs — primary inputs |
| A06 | Tailoring Decision Record | Tailoring affects depth and formality |
| A08 | Scope and Requirements Decision Record | Procurement scope derived from work packages |
| A14 | Integrated Project Management Plan | Procurement plan is a subsidiary plan within A14 |
| A16 | Financial Management and Cost Baseline Record | Procurement costs are a major financial baseline component |
| A19 | Risk Management Record | Procurement risks captured in A19 |
| A31 | Procurement and Supplier Management Record | A31 is the living contract administration record |
| A32 | Supplier Evaluation and Award Decision Record | Supplier selection criteria govern the A32 evaluation |

---

## 9. Validation Criteria

| Check | Validation Rule |
|---|---|
| Make-or-buy decisions documented | At least one explicit make-or-buy decision with rationale |
| Procurement items register present | All known procurement packages listed with contract type and estimated value |
| Roles assigned | Procurement authority and contract administrator are named |
| Schedule milestones defined | RFP/RFQ issue date, award date, and contract start date are planned |
| Contract administration approach defined | Process for managing, changing, and closing contracts is described |
| Linked to financial baseline | Procurement costs referenced in or linked to A16 |
| Procurement risks captured | At least one procurement-specific risk referenced in A19 |
| Waste test pass | No separate procurement strategy, sourcing strategy, and contract administration mini-plans |

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 6 |
| 1.0.1 | 2026-06-01 | Phase 0 cleanup | Migrated from artifacts/extended-procurement/ to artifacts/procurement/ (P0-0I) |
