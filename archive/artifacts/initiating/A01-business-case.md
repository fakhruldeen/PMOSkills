---
artifact_id: A01
name: Business Case
version: 1.0.0
status: Active
category: Authorization
governance_layer: Portfolio / Project Governance
source_type: PMI-derived
pmbok8_anchor: "PMBOK8 Guide §2.1.1 Governance Performance Domain; §4.5.1 Initiate Project or Phase"
authority: PMI-derived
performance_domains:
  - Governance
  - Finance
  - Stakeholders
focus_areas:
  - Initiating
required_by_skills:
  - SKL-02-01
created_by_skills:
  - SKL-02-01
linked_artifacts:
  - A02
  - A03
  - A04
  - A10
---

# A01 — Business Case

**Artifact ID:** A01  
**Name:** Business Case  
**Version:** 1.0.0  
**Status:** Active  
**Source Type:** PMI-derived  
**Governance Layer:** Portfolio / Project Governance  
**Authority:** PMBOK8 Guide §2.1.1 Governance Performance Domain; §4.5.1 Initiate Project or Phase  

---

## 1. Purpose

The Business Case documents the justification for undertaking a project or program. It establishes the value rationale, aligns the proposed investment with organizational strategy, summarizes options considered, and provides the authorization basis for the portfolio or sponsoring authority to approve or reject the investment.

The business case answers the fundamental governance question: *Why should this project be undertaken, and is it the right use of organizational resources?* It remains a living reference throughout the project lifecycle — it is revalidated at major decision points to confirm the investment thesis still holds.

---

## 2. Scope

| In Scope | Out of Scope |
|---|---|
| Strategic need or problem/opportunity statement | Detailed project management plan or execution approach |
| Alignment with organizational strategy and objectives | Detailed requirements specifications |
| Options considered and option selected | Detailed risk analysis or risk register |
| Expected benefits and value outcomes | Procurement strategy or contract terms |
| High-level financial analysis (costs, benefits, ROI, payback) | Stakeholder engagement strategy |
| Major risks and assumptions at investment level | Technical design or architecture |
| Recommendation to proceed, defer, or reject | Post-project benefits tracking (belongs in A02) |
| Success criteria at investment level | Tailoring decisions |
| Affordability summary and funding request | Detailed schedule or resource plan |

---

## 3. Trigger Conditions

The Business Case is created when:

- A business need, problem, or opportunity has been identified that may require organizational investment.
- A portfolio authority or sponsoring body requires a formal investment justification before authorizing work.
- An existing initiative is undergoing major revalidation due to changed strategy, market conditions, or performance.

The business case is updated or revalidated when:

- A major phase gate or decision point requires re-confirmation that the investment case still holds.
- Material changes to expected costs, benefits, or strategic alignment occur.
- A change request proposes a scope or investment change that alters the original value rationale.
- Project performance indicates that the expected benefits are no longer achievable.

---

## 4. Required Sections / Fields

Every Business Case must include the following fields:

| Field | Description | Required |
|---|---|---|
| Business need | The problem, opportunity, or regulatory driver that motivates the investment | Mandatory |
| Strategic alignment | How the proposed project aligns with organizational strategy and objectives | Mandatory |
| Options considered | At minimum two options, including the do-nothing option where applicable | Mandatory |
| Recommended option | The option recommended for approval with rationale | Mandatory |
| Expected benefits | Quantified or described benefits — financial and non-financial | Mandatory |
| Major risks and assumptions | Investment-level risks and key assumptions that could invalidate the case | Mandatory |
| Affordability summary | Indicative cost, funding source, and affordability conclusion | Mandatory |
| Success criteria | How the investment will be recognized as successful | Mandatory |
| Recommendation | Proceed, defer, or reject — with recommended next action | Mandatory |
| Owner | Named individual responsible for the business case | Mandatory |
| Constraints | Key constraints that bound the options or investment | Recommended |
| Revalidation triggers | Conditions that require the case to be reviewed before the next phase gate | Recommended |

**Format guidance:** Scale to context. A lightweight initiative may require only a one-page business case. Large or regulated investments may require a detailed structured document. The test is whether the business case answers the authorization question — not whether it meets a minimum page count.

---

## 5. PMBOK 8 Authority

| Source | Section | Purpose of Citation |
|---|---|---|
| PMBOK8 Guide | §2.1.1 Governance Performance Domain | Establishes value rationale, authorization context, and alignment with project initiation |
| PMBOK8 Guide | §4.5.1 Initiate Project or Phase | Confirms the business case as an input to the initiation process that leads to the Project Charter |
| PMBOK8 Standard | The Standard for Project Management §2.1 | Links value delivery thinking to the authorization basis for projects |
| PMO-Guide | PMO governance and project intake sections | Establishes the business case as the primary input to portfolio intake and prioritization |
| PMI Lexicon | Business Case definition | Canonical PMI definition: a documented economic feasibility study used to establish validity of the benefits of a selected component lacking sufficient definition and that is used as a basis for the authorization of further project management activities |

---

## 6. Used By (Skills That Consume This Artifact)

| Skill ID | Skill Name | How Used |
|---|---|---|
| SKL-02-01 | Initiate the Project | Business case is the primary input to project charter development |
| SKL-03-02 | Develop Project Management Plan | Business case success criteria inform the planning baseline |
| SKL-05-01 | Monitor and Control Project Work | Business case benefits and success criteria are referenced during performance monitoring |
| SKL-06-01 | Close Project or Phase | Business case value expectations are validated during closure |
| SKL-06-02 | Final Performance Review | Business case provides the original investment benchmark for final performance assessment |

---

## 7. Created By (Skills That Produce This Artifact)

| Skill ID | Skill Name | How Produced |
|---|---|---|
| SKL-02-01 | Initiate the Project | Reviews, validates, or produces the business case as part of project initiation activities |

---

## 8. Linked Artifacts

| Artifact ID | Artifact Name | Relationship |
|---|---|---|
| A02 | Benefits and Value Measurement Record | Business case is the source document for benefits identification — A02 tracks benefits realization post-authorization |
| A03 | Feasibility and Viable Options Record | Feasibility analysis (A03) is a predecessor to or input into the business case options section |
| A04 | Project Charter | Business case is the primary input to charter development — the charter formally authorizes what the business case recommends |
| A10 | Intake and Prioritization Decision Record | Business case is the primary submission document for portfolio intake and prioritization |
| A06 | Tailoring Decision Record | Business case complexity and risk profile inform tailoring decisions |
| A16 | Financial Management and Cost Baseline Record | Business case affordability summary is the precursor to the detailed financial baseline |

---

## 9. Validation Criteria

A Business Case is considered valid when it meets all of the following:

| Check | Validation Rule |
|---|---|
| Strategic alignment stated | Explicit link to at least one organizational strategy objective or program goal |
| Options analysis present | At least two options evaluated, including a do-nothing or defer option |
| Benefits quantified or described | Expected benefits are stated with at minimum a qualitative description — financial benefits include a numeric estimate where applicable |
| Risks and assumptions identified | At least three investment-level risks or assumptions that could invalidate the case are listed |
| Recommendation present | A clear proceed, defer, or reject recommendation with rationale is included |
| Approval evidence | An approval signature, electronic approval reference, or portfolio decision record is attached or referenced |
| Revalidation plan | At minimum one revalidation trigger condition is identified |
| Waste test pass | Passes waste test — repeated value statements are not restated in multiple downstream templates without adding a new decision |

**Waste test:** Fail if the full business case content is duplicated inside the project charter. Fail if a benefits realization plan, strategic value tracker, and objective verification sheet all contain the same benefit statements without distinct decision value. Fail if the business case is never revalidated after material changes to scope, cost, or expected benefits.

---

## 10. Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | @fakhruldeen | Initial definition — Phase B1 Priority 2 |
