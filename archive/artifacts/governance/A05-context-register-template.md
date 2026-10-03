---
artifact_id: A05
name: Context Register
template_version: 1.0.0
status: Template · Active
category: Situational Reference
authority: "PMBOK8 Guide §1.1.2 Enterprise Environmental Factors; §1.1.3 Organizational Process Assets"
source_type: synthesis
file_path: artifacts/governance/A05-context-register-template.md
---

# A05 — Context Register Template

**Artifact ID:** A05  
**Artifact Name:** Context Register  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide §1.1.2 Enterprise Environmental Factors; §1.1.3 Organizational Process Assets  
**Source Type:** synthesis  
**File Path:** `artifacts/governance/A05-context-register-template.md`

> **Usage note:** Initiate this register during project chartering (SKL-02-01). Populate EEFs and OPAs at the start of planning. Update whenever material environmental or organizational conditions change. This single record replaces separate EEF logs, OPA ledgers, and assumptions/constraints mini-registers per Artifacts-V-1.0.5.

## Section 1 — Project Reference

| Field | Value |
|---|---|
| **Project Name** | [FIELD: Project name] |
| **Project ID** | [FIELD: Project ID] |
| **Record Owner** | [FIELD: Project manager name] |
| **Last Updated** | [FIELD: YYYY-MM-DD] |
| **Version** | [FIELD: e.g. 1.0] |

## Section 2 — Enterprise Environmental Factors (EEFs)

Enterprise Environmental Factors are conditions not under the project team's control that influence, constrain, or direct the project. Capture both internal factors (organizational culture, governance, infrastructure) and external factors (market conditions, regulatory environment, industry standards). Review and update this section whenever a material environmental change occurs.

| EEF ID | Type | Description | Impact on Project | Owner | Status |
|---|---|---|---|---|---|
| EEF-01 | [FIELD: Internal or External] | [FIELD: What this factor is and how it manifests] | [FIELD: How this factor constrains or influences planning, delivery, or decision-making] | [FIELD: Name or role accountable for monitoring this factor] | [FIELD: Active / Resolved / Changed] |
| EEF-02 | [FIELD: Internal or External] | [FIELD: What this factor is and how it manifests] | [FIELD: How this factor constrains or influences planning, delivery, or decision-making] | [FIELD: Name or role accountable for monitoring this factor] | [FIELD: Active / Resolved / Changed] |
| EEF-03 | [FIELD: Internal or External] | [FIELD: What this factor is and how it manifests] | [FIELD: How this factor constrains or influences planning, delivery, or decision-making] | [FIELD: Name or role accountable for monitoring this factor] | [FIELD: Active / Resolved / Changed] |

> Add rows as needed. Common categories: organizational culture, market conditions, regulatory environment, technology infrastructure, geographic distribution.

## Section 3 — Organizational Process Assets (OPAs)

Organizational Process Assets are the plans, processes, policies, procedures, and knowledge bases specific to and used by the performing organization. Reference each OPA that applies to this project, noting where it is stored and how it informs planning or delivery decisions.

| OPA ID | Type | Name and Location | Applicability | Owner |
|---|---|---|---|---|
| OPA-01 | [FIELD: Process / Template / Historical Data / Lessons Learned / Policy / Procedure] | [FIELD: Asset name and storage location or URL] | [FIELD: How this OPA applies to the current project] | [FIELD: Name or role that maintains this asset] |
| OPA-02 | [FIELD: Process / Template / Historical Data / Lessons Learned / Policy / Procedure] | [FIELD: Asset name and storage location or URL] | [FIELD: How this OPA applies to the current project] | [FIELD: Name or role that maintains this asset] |
| OPA-03 | [FIELD: Process / Template / Historical Data / Lessons Learned / Policy / Procedure] | [FIELD: Asset name and storage location or URL] | [FIELD: How this OPA applies to the current project] | [FIELD: Name or role that maintains this asset] |

> Common OPA types: Process / Template / Historical Data / Lessons Learned / Policy / Procedure

## Section 4 — Assumptions Register

Assumptions are conditions accepted as true for planning purposes without proof. Capture all assumptions that, if proven false, would materially affect delivery, cost, schedule, or quality. Review status at each phase gate and update when an assumption is confirmed or invalidated.

| ID | Assumption Statement | Impact if False | Owner | Status |
|---|---|---|---|---|
| ASM-01 | [FIELD: What is assumed to be true for planning purposes] | [FIELD: What happens to the project if this assumption proves invalid] | [FIELD: Name or role responsible for monitoring this assumption] | [FIELD: Active / Confirmed / Invalidated] |
| ASM-02 | [FIELD: What is assumed to be true for planning purposes] | [FIELD: What happens to the project if this assumption proves invalid] | [FIELD: Name or role responsible for monitoring this assumption] | [FIELD: Active / Confirmed / Invalidated] |
| ASM-03 | [FIELD: What is assumed to be true for planning purposes] | [FIELD: What happens to the project if this assumption proves invalid] | [FIELD: Name or role responsible for monitoring this assumption] | [FIELD: Active / Confirmed / Invalidated] |

> Status values: Active / Confirmed / Invalidated

## Section 5 — Constraints Register

Constraints are binding limitations on the project's options. Document all factors that restrict decisions about scope, schedule, cost, resource, or delivery approach. Each constraint must have an identified source — it is not a constraint if there is no authority enforcing it.

| ID | Constraint Statement | Type | Impact | Source |
|---|---|---|---|---|
| CON-01 | [FIELD: What limits or restricts this project's options] | [FIELD: Budget / Schedule / Scope / Resource / Regulatory / Technical] | [FIELD: How this constraint affects planning and delivery] | [FIELD: Where the constraint originates — sponsor, contract, regulation, policy] |
| CON-02 | [FIELD: What limits or restricts this project's options] | [FIELD: Budget / Schedule / Scope / Resource / Regulatory / Technical] | [FIELD: How this constraint affects planning and delivery] | [FIELD: Where the constraint originates — sponsor, contract, regulation, policy] |
| CON-03 | [FIELD: What limits or restricts this project's options] | [FIELD: Budget / Schedule / Scope / Resource / Regulatory / Technical] | [FIELD: How this constraint affects planning and delivery] | [FIELD: Where the constraint originates — sponsor, contract, regulation, policy] |

> Type values: Budget / Schedule / Scope / Resource / Regulatory / Technical

## Section 6 — Lessons Learned Pointers

Reference lessons from prior projects or the organizational repository that are relevant to planning decisions on this project. These are pointers — not full lessons — linking to the authoritative record in A30 or the PMO lessons repository.

| Ref ID | Summary | Source Project or Program | Planning Implication |
|---|---|---|---|
| LL-01 | [FIELD: Brief description of the lesson and its relevance to this project] | [FIELD: Name or ID of the project or program where this lesson originated] | [FIELD: How this lesson should influence current planning decisions] |
| LL-02 | [FIELD: Brief description of the lesson and its relevance to this project] | [FIELD: Name or ID of the project or program where this lesson originated] | [FIELD: How this lesson should influence current planning decisions] |

## Section 7 — Review and Update Log

| Date | Updated By | Trigger for Update | Key Changes Made |
|---|---|---|---|
| [FIELD: YYYY-MM-DD] | [FIELD: Name] | [FIELD: Phase gate / regulatory change / EEF shift / assumption status change] | [FIELD: What changed in this update] |

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch 3 | Initial template |

---

*Template for: A05 — Context Register*  
*Authority: PMBOK8 Guide §1.1.2; §1.1.3*  
*See definition file: `artifacts/governance/A05-context-register.md`*
