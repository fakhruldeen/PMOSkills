---
artifact_id: A04
name: Project Charter
version: 1.0.0
status: Active
category: Authorization
governance_layer: Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide §4.5.1 Initiate Project or Phase"
authority: PMI-derived
performance_domains:
  - Governance
  - Stakeholders
focus_areas:
  - Initiating
required_by_skills:
  - SKL-02-01
created_by_skills:
  - SKL-02-01
linked_artifacts:
  - A01
  - A05
  - A07
  - A06
---

# A04 — Project Charter

**Artifact ID:** A04  
**Name:** Project Charter  
**Version:** 1.0.0  
**Status:** Active  
**Source Type:** PMI-derived  
**Governance Layer:** Project Governance  
**Authority:** PMBOK8 Guide §4.5.1 Initiate Project or Phase  

---

## 1. Purpose

The Project Charter formally authorizes the existence of the project and grants the project manager the authority to apply organizational resources to project activities. It establishes the high-level boundaries of the work, names the sponsor and project manager, and provides the foundational authorization record that all subsequent planning and execution artifacts depend upon.

Without a formally approved charter, the project has no recognized authority to consume organizational resources, make decisions, or obligate the organization to any commitments.

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Formal project authorization and authority grant | Detailed project management plan or subsidiary plans |
| Named project manager with defined authority level | Full requirements specifications or acceptance criteria detail |
| High-level scope boundary statement | Detailed schedule, cost estimate, or resource breakdown |
| High-level milestone intent (not a baseline schedule) | Procurement strategy or contract terms |
| Initial budget boundary (not a cost baseline) | Stakeholder engagement strategy (belongs in A07) |
| Named sponsor and initiating authority | Risk register or detailed risk analysis |
| Initial success criteria at governance level | Technical design or architecture decisions |
| High-level assumptions and constraints | Tailoring decisions (belongs in A06) |

---

## 3. Trigger Conditions

The Project Charter is created when:

- A business case (A01) or equivalent authorization document has been approved by the relevant portfolio or program authority.
- The organization has made a decision to proceed with a defined scope of project work.
- A project manager needs to be formally designated with named authority.
- A feasibility or options analysis (A03) has recommended proceeding.

The charter is updated when:

- The project scope boundary changes materially and requires re-authorization at the governance level.
- Sponsor or project manager changes require re-establishment of authority.
- Phase transitions (in multi-phase projects) require re-authorization for the next phase.

---

## 4. Required Sections / Fields

Every Project Charter must include the following fields:

| Field | Description | Required |
|---|---|---|
| Project purpose | One to three sentence statement of why the project exists | Mandatory |
| High-level scope boundary | What is in scope and what is explicitly out of scope | Mandatory |
| High-level milestone intent | Key milestones or phase gate targets — not a baseline schedule | Mandatory |
| Budget boundary | Approved funding ceiling or indicative budget range | Mandatory |
| Named sponsor | Full name and role of the project sponsor | Mandatory |
| Named project manager | Full name, role, and delegated authority level | Mandatory |
| Initial success criteria | How success will be recognized at the governance level | Mandatory |
| Approval authority | Who approved the charter and on what date | Mandatory |
| Assumptions | High-level assumptions that affect authorization | Mandatory |
| Constraints | High-level constraints that bound the project | Mandatory |
| Stakeholder references | Reference to identified key stakeholders (detail in A07) | Optional |
| Related documents | Business case ID, feasibility record ID, portfolio decision reference | Recommended |

**Format guidance:** The charter must be concise. It is an authorization record, not a planning document. Repeating the full business case narrative or embedding detailed plans inside the charter violates the waste test (see Section 9).

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | §4.5.1 Initiate Project or Phase | Establishes the charter as the output of the Initiate Project or Phase process and defines its role as the formal authorization mechanism |
| PMBOK8 Guide | Governance Performance Domain §2.1 | Grounds the charter in governance thinking — authorization, oversight, and decision rights |
| PMBOK8 Guide | Stakeholders Performance Domain §2.5 | Confirms that charter creation begins the stakeholder identification process |
| Process-Groups | Initiating Process Group | Confirms the charter as the primary output of the Initiating Process Group |
| PMI Lexicon | Project Charter definition | Canonical PMI definition: a document issued by the project initiating sponsor that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities |

---

## 6. Used By (Skills That Consume This Artifact)

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-02-01 | Initiate the Project | Primary output — skill produces the charter |
| SKL-02-02 | Identify Stakeholders | Uses charter as primary input to identify stakeholders |
| SKL-03-01 | Plan Project Integration | Uses charter as planning baseline input |
| SKL-03-02 | Develop Project Management Plan | Charter is the foundational authorization reference for all subsidiary plans |
| SKL-04-01 | Direct and Manage Project Work | References charter to confirm scope authority during execution |
| SKL-05-01 | Monitor and Control Project Work | References charter success criteria for performance monitoring |
| SKL-06-01 | Close Project or Phase | Validates closure against charter-defined success criteria |
| SKL-07-01 | Select and Tailor Lifecycle Approach | Uses charter scope and constraints to inform lifecycle selection |

---

## 7. Created By (Skills That Produce This Artifact)

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-02-01 | Initiate the Project | Primary producing skill — drafts and obtains sponsor approval for the charter |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A01 | Business Case | Charter input — the business case justifies and precedes the charter |
| A03 | Feasibility and Viable Options Record | Charter input — the recommended option from feasibility analysis informs charter scope |
| A05 | Context Register (EEF/OPA) | Charter output feeds the context register — EEFs and OPAs identified during chartering are captured in A05 |
| A06 | Tailoring Decision Record | Charter feeds tailoring — complexity and constraints identified in the charter drive tailoring decisions in A06 |
| A07 | Stakeholder Register and Engagement Strategy | Charter initiates stakeholder identification — A07 is produced using the charter as input |
| A08 | Scope and Requirements Decision Record | Charter scope boundary is the authorization basis for detailed scope definition in A08 |
| A14 | Integrated Project Management Plan | Charter is the root authorization reference for the integrated plan |

---

## 9. Validation Criteria

A Project Charter is considered valid when it meets all of the following:

| Check | Validation Rule |
|---|---|
| Authorization completeness | Named sponsor and named project manager with explicit authority level are both present |
| Scope boundary present | Both in-scope and out-of-scope items are defined |
| Budget boundary present | At minimum, an indicative budget ceiling or funding approval reference is stated |
| Success criteria defined | At least one measurable or observable success criterion is stated |
| Approval evidence | An approval signature, electronic approval reference, or governing body decision record is attached or referenced |
| No planning duplication | The charter does not contain a full project management plan, detailed schedule, or full requirements list |
| No business case repetition | The charter references the business case rather than restating its full content |
| Waste test pass | Creating or maintaining this artifact takes less than 30 minutes per cycle and drives an authorization decision |

**Waste test:** Fail if the charter repeats the complete business case and full plan set. Fail if a charter is created but no approval authority reviews or signs it. Fail if the charter is updated for minor scope adjustments that do not require re-authorization at governance level.

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 1 |
