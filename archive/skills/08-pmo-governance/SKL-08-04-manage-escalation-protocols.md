---
skill_id: SKL-08-04
skill_name: Manage Escalation Protocols
pack: 08 — PMO Governance
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A35 — Governance and Decision Authority Record (Escalation
  section)
artifacts_updated:
- A18 — Issue, Impediment, and Action Log
pmbok8_process_anchor: Guide §2.1 Governance Domain · AUTHORITY-ROUTING.md
performance_domains:
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-01-01 — Establish PM Governance Framework
downstream_skills:
- SKL-08-01 — Run Governance Board Packet
file_path: skills/08-pmo-governance/SKL-08-04-manage-escalation-protocols.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-08-04 — Manage Escalation Protocols

**Skill ID:** SKL-08-04  
**Pack:** 08 — PMO Governance  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1 Governance Domain · AUTHORITY-ROUTING.md  
**File path:** `skills/08-pmo-governance/SKL-08-04-manage-escalation-protocols.md`

---

## Purpose

Enforce decision rights, variance tolerances, escalation thresholds, and emergency exception protocols across all project governance levels, ensuring that performance deviations are handled at the correct level of authority.

---

## Scope

This skill designs the escalation logic, routes active issue escalations (A18), and triggers emergency exception pathways. It does not replace daily issue tracking (SKL-04-10). It runs during governance setup or whenever an issue breaches project tolerances.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A05 — Governance and Decision Authority Record | SKL-01-01 | Yes |
| AUTHORITY-ROUTING.md | Repository standard | Yes |
| Active Issue and Impediment Log (A18) | SKL-04-10 | Yes |

---

## Instructions

### Step 1 — Review Authority Levels and Routing Paths
1. Retrieve `AUTHORITY-ROUTING.md` and the governance section of A35.
2. Confirm the four primary governance layers:
   - **Layer 1: Project Team Lead / Scrum Master** (Operational issues).
   - **Layer 2: Project Manager** (Standard project control, budget/schedule adjustments within T1 thresholds).
   - **Layer 3: PMO Director / Steering Committee** (T2 baseline modifications, inter-project conflicts).
   - **Layer 4: Executive Sponsor** (T3 strategic shifts, budget expansion, phase gate authorization).
3. Record routing pathways in the escalation section of A35.

### Step 2 — Map Variance Thresholds to Escalation Triggers
1. Define quantitative and qualitative triggers for escalation:
   - **Cost Variance Escalation:** CV exceeds $\pm 5\%$ (PM warning) or $\pm 10\%$ (Steering Committee).
   - **Schedule Variance Escalation:** SPI goes below $0.95$ (PM warning) or $0.85$ (Steering Committee).
   - **Scope Changes:** Any adjustment affecting product criteria or contract SOW.
   - **Uncertainty/Risks:** Risk exposure exceeding reserve capacity.
   - **Resource Conflicts:** Unresolved cross-project resource competition.
2. Record triggers in A35.

### Step 3 — Execute the Escalation Protocol
1. Monitor A18. When an issue/risk breaches a defined threshold, change its status to "Escalated".
2. Prepare the Escalation Brief containing:
   - Problem statement and root cause
   - Quantitative impact assessment
   - Target authority layer for resolution
   - Recommended options (at least two)
3. Submit the brief to the target authority layer and log in A18.

### Step 4 — Implement Emergency Exception Protocols
1. Define the protocol for emergency decisions where immediate action is required to prevent major loss (e.g., safety, system downtime, contract breach) and the Steering Committee cannot meet in time.
2. Grant the PM temporary authority to make decisions up to a defined emergency limit (e.g., up to $25k or 2 days delay) if the Sponsor is unreachable.
3. Require the PM to file a post-incident decision record within 24 hours.
4. Record emergency rules in A35.

### Step 5 — Record and Track Escalated Decisions
1. Follow up with the escalated authority layer to obtain a decision.
2. Log the resolution decision, approval date, and impact details in the Decision Log of A35.
3. Close the escalation flag in A18 and update the project team.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Escalation Policies | A35 | Escalation Rules & Triggers section |
| Logged Escalations | A18 | Issue Log (Escalated items) |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Authority Layers Mapped | The four governance layers are documented with names and roles | Layers undefined |
| T-2 | Triggers Codified | Cost, schedule, and scope escalation triggers defined mathematically | Triggers are subjective |
| T-3 | Brief Standard Set | Escalation brief template includes impact data and options | Brief template missing |
| T-4 | Escalation Flagging | Breached issues automatically flagged as escalated in A18 | Breached issues remain active without flag |
| T-5 | Emergency Protocol Set | Temporary PM authority limits and reporting window defined | Emergency rules missing |
| T-6 | Decision Recording | Resolution decisions recorded with approver name | Decisions closed without logs |
| T-7 | Notification loop | PMO and Sponsor notified immediately on critical breaches | Notification delayed |
| T-8 | Target matching | Escalated items mapped to correct authority per AUTHORITY-ROUTING.md | Items escalated to wrong layers |
| T-9 | Sponsor sign-off | Sponsor approves the escalation thresholds and protocols | Baseline unapproved |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-06-07 | Initial build for PMBOK 8 governance and escalation control |

---

*Authority: PMBOK8 Guide §2.1 · Governance of Portfolios, Programs, and Projects*  
*Source type: PMI-derived*
