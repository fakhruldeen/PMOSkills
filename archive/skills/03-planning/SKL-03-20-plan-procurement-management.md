---
skill_id: SKL-03-20
skill_name: Plan Procurement Management
pack: 03 — Planning
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A06 — Project Management Plan (Procurement Management section)
artifacts_updated:
- A31 — Procurement and Supplier Management Record
pmbok8_process_anchor: Guide §2.1.6.3 Plan Sourcing Strategy · Guide §2.1 Governance
  Domain
performance_domains:
- Governance
focus_area: Planning
upstream_prerequisites:
- SKL-03-01 - Integrate and Align Project Plans
- SKL-03-03 - Elicit and Analyze Requirements
downstream_skills:
- SKL-04-09 - Conduct Procurements
- SKL-05-08 - Control Resources
file_path: skills/03-planning/SKL-03-20-plan-procurement-management.md
tests: 9
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-03-20 — Plan Procurement Management

**Skill ID:** SKL-03-20  
**Pack:** 03 — Planning  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1.6.3 Plan Sourcing Strategy · Guide §2.1 Governance Domain  
**File path:** `skills/03-planning/SKL-03-20-plan-procurement-management.md`

---

## Purpose

Document project procurement decisions, define the procurement approach, identify potential sellers, and outline how vendor contracts will be administered. The output is the Procurement Management section of A06.

---

## Scope

This skill establishes the procurement plan, make-or-buy decisions, procurement document standards (SOW, RFP, RFQ), contract types, and selection criteria. It does not conduct the bid solicitation or select vendors (SKL-04-09) or manage active contracts (SKL-05-12/Supplier compliance). It runs once during planning or when new procurement needs arise.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A08 — Scope and Requirements | SKL-03-05 | Yes |
| A15 — Schedule Model | SKL-03-06b | Yes |
| A16 — Budget / cost estimates | SKL-03-15 | Yes |
| Organizational procurement templates / rules | OPA (A05) | Yes |

---

## Instructions

### Step 1 — Perform Make-or-Buy Analysis
1. Review project scope, WBS, resource availability, and schedule constraints.
2. For each major deliverable, evaluate whether it should be built internally (Make) or purchased from a vendor (Buy).
3. Consider factors: cost, team capacity, specialized expertise, IP protection, risk, and schedule.
4. Record make-or-buy decisions, along with their business rationale, in the Procurement section of A06.

### Step 2 — Determine Contract Types for Procurements
1. Select appropriate contract types based on risk allocation, scope clarity, and incentive structures:
   - **Fixed-Price (FP):** Best when scope is well-defined; risk is on seller (e.g., Firm Fixed Price - FFP, Fixed Price Incentive Fee - FPIF).
   - **Cost-Reimbursable (CR):** Best when scope is uncertain; risk is on buyer (e.g., Cost Plus Fixed Fee - CPFF, Cost Plus Award Fee - CPAF).
   - **Time and Materials (T&M):** Best for staff augmentation or rapid, small tasks.
2. Record contract type selections for each planned procurement in A06.

### Step 3 — Define Procurement Documents and SOW Standards
1. Define the documents to be used for solicitation (e.g., Request for Proposal - RFP, Request for Quotation - RFQ, Invitation for Bid - IFB).
2. Establish guidelines for drafting the Procurement Statement of Work (SOW) to describe the procured items in sufficient detail.
3. Record standards in A06.

### Step 4 — Define Evaluation and Selection Criteria
1. Establish objective selection criteria to score vendor proposals (e.g., technical capability, cost, past performance, delivery schedule, financial stability, sustainability alignment).
2. Weight each criterion based on project priorities (e.g., technical 60%, price 40%).
3. Record selection criteria in A06.

### Step 5 — Outline Contract Administration and Escalation
1. Define how contracts will be monitored (e.g., status meetings, progress reviews, deliverable sign-offs).
2. Establish change control rules for contracts (how SOW modifications are requested, evaluated, and approved).
3. Outline dispute escalation procedures per A05 governance layers.
4. Record procedures in A06.

### Step 6 — Review and Baseline Procurement Plan
1. Present the Procurement Management section of A06 to the Sponsor, legal/procurement department, and PMO.
2. Obtain formal approvals and baseline the plan.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Procurement Management Plan | A06 | Procurement Management section |
| Make-or-Buy Decision Log | A31 | Make-or-Buy Analysis section |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Make-or-Buy Analysis | Decisions and rationales are documented for all major items | Major items lack make-or-buy analysis |
| T-2 | Contract Types Selected | Appropriate contract type assigned to each procurement | Procurement planned without contract type |
| T-3 | Document Standards Set | RFP/RFQ and SOW templates/guidelines documented | Procurement documents undefined |
| T-4 | Selection Criteria Defined | Objective evaluation criteria and weightings established | Vendor selection criteria vague or missing |
| T-5 | Contract Monitoring Planned | Schedule and methods for tracking vendor work defined | Monitoring plan missing |
| T-6 | Contract Change Control Set | Process for managing contract changes defined | Contract change control undefined |
| T-7 | Escalation path established | Contract dispute escalation path documented | Escalation path undefined |
| T-8 | Legal/Procurement review | Review and clearance by organizational procurement officers recorded | Review missing |
| T-9 | Sponsor Approval | Sponsor signature and baseline timestamp recorded | Baseline locked without approval |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 procurement/sourcing plan alignment |

---

*Authority: PMBOK8 Guide §2.1.6.3 Plan Sourcing Strategy · ANSI/PMI 99-001-2025*  
*Source type: PMI-derived*
