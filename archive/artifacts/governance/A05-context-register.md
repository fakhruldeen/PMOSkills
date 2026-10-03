---
artifact_id: A05
name: Context Register
version: 1.0.0
status: Active
category: Situational Reference
governance_layer: Project Governance
source_type: synthesis
pmbok8_anchor: "PMBOK8 Guide §1.1.2 Enterprise Environmental Factors; §1.1.3 Organizational Process Assets"
authority: PMI-derived
performance_domains:
  - Governance
  - Risk
  - Resources
focus_areas:
  - Initiating
  - Planning
required_by_skills:
  - SKL-02-01
  - SKL-03-01
  - SKL-03-02
created_by_skills:
  - SKL-02-01
  - SKL-03-01
linked_artifacts:
  - A04
  - A06
  - A07
  - A08
  - A14
  - A19
---

# A05 — Context Register (EEF / OPA)

**Artifact ID:** A05  
**Name:** Context Register  
**Version:** 1.0.0  
**Status:** Active  
**Source Type:** synthesis  
**Governance Layer:** Project Governance  
**Authority:** PMBOK8 Guide §1.1.2 Enterprise Environmental Factors; §1.1.3 Organizational Process Assets  

> **Source type note:** This artifact consolidates PMI-defined constructs (EEFs and OPAs) into a single project-level reference record. The constituent concepts (EEF and OPA) are PMI-derived. The merged single-artifact format is a synthesis design decision per the Artifacts-V-1.0.5 repository model. It replaces the separate EEF log, OPA ledger, and early assumptions/constraints artifacts from prior versions.

---

## 1. Purpose

The Context Register consolidates all relevant Enterprise Environmental Factors (EEFs) and Organizational Process Assets (OPAs) that affect the project, together with project-level assumptions and constraints and any applicable lessons-learned pointers. It serves as the authoritative situational reference that planning decisions draw upon.

EEFs are conditions not under the project team's control that influence, constrain, or direct the project. OPAs are organizational plans, processes, procedures, and knowledge bases that the organization uses to conduct projects.

By capturing both EEFs and OPAs in one maintained record, the project team has a single source of contextual truth rather than managing separate logs that duplicate the same facts.

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Enterprise Environmental Factors relevant to this project | Strategic objectives or value case (belongs in A01) |
| Organizational Process Assets applicable to this project | Detailed risk responses (belongs in A19) |
| Project-level assumptions (planning-basis assumptions) | Tailoring decisions and rationale (belongs in A06) |
| Project-level constraints (boundaries on delivery options) | Stakeholder identification and engagement strategy (belongs in A07) |
| Lessons-learned pointers from prior projects or PMO repository | Scope definitions or requirements decisions (belongs in A08) |
| Policy references and compliance constraints | Detailed financial baseline (belongs in A16) |
| Technical environment summary | Change decisions and exception handling (belongs in A12) |

---

## 3. Trigger Conditions

The Context Register is created when:

- A project charter (A04) has been issued and planning begins.
- The project team needs to document the environmental and organizational context that will shape planning decisions.

The context register is updated when:

- A material change to EEFs occurs (e.g., a regulatory change, market condition shift, or technology environment change).
- OPAs relevant to the project are updated by the PMO or organizational authority.
- Assumptions are confirmed, invalidated, or replaced during planning or execution.
- A new lessons-learned reference becomes available and is relevant to active planning decisions.

---

## 4. Required Sections / Fields

### 4.1 Enterprise Environmental Factors (EEFs)

| Field | Description |
|---|---|
| EEF reference ID | Unique identifier for this EEF entry |
| EEF type | Internal (organizational) or External (market, regulatory, environmental) |
| Description | What the EEF is and how it affects the project |
| Impact | How this factor constrains or influences planning, delivery, or decision-making |
| Owner | Who in the organization is accountable for monitoring this factor |
| Status | Active / Resolved / Changed |

**Common EEF categories to consider:**
- Organizational culture, structure, and governance
- Market conditions and competitive landscape
- Regulatory and legal environment
- Technology infrastructure and standards
- Geographic distribution and time zones
- Political, economic, or social conditions (as applicable)
- Industry standards and certifications

### 4.2 Organizational Process Assets (OPAs)

| Field | Description |
|---|---|
| OPA reference ID | Unique identifier for this OPA entry |
| OPA type | Process / Template / Historical Data / Lessons Learned / Policy / Procedure |
| Name and location | Name of the asset and where it is stored or accessed |
| Applicability | How this OPA applies to the current project |
| Owner | Who maintains this OPA |

**Common OPA categories to consider:**
- Organizational standard processes, policies, and procedures
- Project management templates and forms
- Lessons learned repositories
- Historical performance data and metrics
- Change control procedures
- Financial control procedures
- Risk and issue escalation procedures
- Quality standards and checklists

### 4.3 Assumptions Register

| Field | Description |
|---|---|
| Assumption ID | Unique identifier |
| Assumption statement | What is assumed to be true for planning purposes |
| Impact if false | What happens to the project if this assumption proves invalid |
| Owner | Who is responsible for monitoring this assumption |
| Status | Active / Confirmed / Invalidated |

### 4.4 Constraints Register

| Field | Description |
|---|---|
| Constraint ID | Unique identifier |
| Constraint statement | What limits or restricts the project's options |
| Type | Budget / Schedule / Scope / Resource / Regulatory / Technical |
| Impact | How this constraint affects planning and delivery |
| Source | Where the constraint originates (sponsor, contract, regulation, policy) |

### 4.5 Lessons Learned Pointers

| Field | Description |
|---|---|
| Reference ID | ID of the lesson in the organizational repository or prior project |
| Summary | Brief description of the lesson and its relevance |
| Source project or program | Where the lesson came from |
| Planning implication | How this lesson should influence current project planning decisions |

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | §1.1.2 Enterprise Environmental Factors | Defines EEFs as conditions not under the project team's control that influence, constrain, or direct the project |
| PMBOK8 Guide | §1.1.3 Organizational Process Assets | Defines OPAs as plans, processes, policies, procedures, and knowledge bases specific to and used by the performing organization |
| PMBOK8 Guide | Table 2-1 (multiple processes) | EEFs and OPAs are listed as inputs to the majority of PMBOK 8 processes, making the context register a cross-process dependency |
| PMBOK8 Guide | Planning Performance Domain §2.3 | Context factors are foundational inputs to all planning work |
| Risk-PPP | Risk identification and context sections | Risk identification draws on EEFs and OPAs as primary risk context sources |

---

## 6. Used By (Skills That Consume This Artifact)

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-02-01 | Initiate the Project | Creates initial context register from chartering inputs |
| SKL-03-01 | Plan Project Integration | Uses context register as primary input to integration planning |
| SKL-03-02 | Develop Project Management Plan | EEFs and OPAs referenced throughout all subsidiary planning |
| SKL-03-03 | Plan Scope Management | Uses constraints and OPAs to scope management approach |
| SKL-03-06 | Plan Schedule Management | Uses EEFs (calendars, market timing) and OPAs (scheduling templates, historical data) |
| SKL-03-07 | Plan Cost Management | Uses EEFs (market rates, financial policies) and OPAs (cost estimation templates) |
| SKL-03-10 | Plan Risk Management | EEFs and OPAs are primary inputs to risk identification and planning |
| SKL-03-14 | Plan Resource Management | Uses EEFs (resource availability, labor market) and OPAs (HR policies, team structures) |
| SKL-07-01 | Select and Tailor Lifecycle Approach | Context factors drive lifecycle and tailoring decisions |

---

## 7. Created By (Skills That Produce This Artifact)

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-02-01 | Initiate the Project | Initial EEF/OPA identification during chartering |
| SKL-03-01 | Plan Project Integration | Context register refined and expanded during integration planning |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A04 | Project Charter | Charter inputs trigger context register creation — constraints and assumptions from chartering are captured here |
| A06 | Tailoring Decision Record | Context register feeds tailoring — EEFs and OPAs inform the complexity profile and tailoring choices in A06 |
| A07 | Stakeholder Register and Engagement Strategy | EEFs (organizational culture, power structures) and OPAs (stakeholder templates) support stakeholder identification |
| A08 | Scope and Requirements Decision Record | Constraints from context register bound scope definition |
| A14 | Integrated Project Management Plan | Context register is referenced throughout all subsidiary plans as the source of EEF and OPA inputs |
| A19 | Risk Management Record | EEFs and assumptions are primary risk identification inputs |
| A30 | Knowledge and Lessons Management Record | Lessons-learned pointers in the context register reference entries in A30 |

---

## 9. Validation Criteria

A Context Register is considered valid when it meets all of the following:

| Check | Validation Rule |
|---|---|
| EEFs populated | At least three EEFs (internal or external) relevant to the project are identified and described |
| OPAs populated | At least three applicable OPAs (templates, policies, historical data, lessons) are referenced |
| Assumptions documented | All planning-basis assumptions that could affect delivery if proven false are captured |
| Constraints documented | All binding constraints on scope, schedule, cost, or resource have an identified source |
| No duplication | EEF and OPA content is not duplicated across separate logs — one record per project |
| Traceability | Each EEF and OPA entry has an identified owner and a status field |
| Lessons linked | At least one lessons-learned pointer is referenced where prior project experience is applicable |
| Waste test pass | Separate EEF log, OPA ledger, and assumptions/constraints mini-logs are not maintained in addition to this record without a distinct governance reason |

**Waste test:** Fail if separate EEF logs, OPA ledgers, and assumption mini-registers are maintained alongside this record with the same content. Fail if the context register is populated once and never updated when EEFs or OPAs change materially. Fail if it is created but not referenced in any planning decisions.

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 3. Replaces separate EEF log, OPA ledger, and early-assumptions artifacts per Artifacts-V-1.0.5 migration map. |
