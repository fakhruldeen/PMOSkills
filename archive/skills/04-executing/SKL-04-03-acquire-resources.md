---
skill_id: SKL-04-03
skill_name: Acquire Resources
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A25 — Team Operating and Responsibility Record
artifacts_updated:
- A26 — Resource Capacity and Acquisition Record (acquisition actuals)
- A18 — Issue, Impediment and Action Log (resource gaps)
pmbok8_anchor: Guide §2.6.2.3 Acquire Resources · Figure 2-43
performance_domains:
- Resources
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-03-16 — A26 Resource Management Plan must exist
- SKL-03-17 — A26 Resource Estimates must exist
downstream_skills:
- SKL-04-04 — Develop Team
- SKL-04-05 — Manage Team
file_path: skills/04-executing/SKL-04-03-acquire-resources.md
tests: 8
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-04-03 — Acquire Resources

**Pack:** 04 — Executing
**Status:** Active · Tested
**Primary Artifact:** A25 — Team Operating and Responsibility Record
**PMBOK8 Anchor:** Guide §2.6.2.3 · Figure 2-43

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-8 are fully defined in the Tests section below.

---

## Purpose

Acquire Resources confirms that the human and physical resources required to complete project work are obtained and assigned. Acquisition results are recorded in A25 (team assignments and RACI) and actuals are entered in A26. This skill must complete before SKL-04-04 (Develop Team) and SKL-04-05 (Manage Team) can begin.

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Resource management plan | A26 | §1 plan section | Complete |
| Resource estimates | A26 | §2 estimates section | Complete |
| Staffing requirements | A26 | Roles, skills, quantities, timing | Complete |
| Project charter | A04 | Pre-assigned resources | Confirmed |
| Tailoring decisions | A06 | Procurement formality level | Current |

---

## Steps

### Step 1 — Review Resource Requirements
Review A26 resource estimates and A14 resource management plan. Confirm:
- Roles required
- Skills and competencies needed per role
- Quantities and timing (start/end dates per work package)
- Physical vs. virtual requirements

### Step 2 — Identify Acquisition Path per Resource
For each resource, determine the appropriate acquisition path:

| Path | Description | Condition |
|---|---|---|
| Pre-assignment | Resource already identified in A04 charter or contractual commitment | Charter or contract specifies resource |
| Negotiation | Negotiate with functional managers for internal staff | Internal organization has required skills |
| Procurement | External acquisition — triggers A31 procurement entry | Skills not available internally |
| Virtual team | Remote resource arrangement | Geography or availability constraints |

Document the selected acquisition path for each resource in A26.

### Step 3 — Confirm Resource Availability
Verify availability against A26 capacity data:
- Check for competing project assignments
- Confirm planned start dates are achievable
- Document any availability gaps and their impact on A15 schedule

### Step 4 — Assign Resources to Work Packages
For each acquired resource, create or update the A25 RACI entry:
- Role title and individual name
- Work packages assigned (reference A08 WBS codes)
- Start date and end date on the project
- Reporting relationship
- Physical location or virtual arrangement
- Authority level per A06

### Step 5 — Update A26 Acquisition Actuals
Record in A26 acquisition log for each acquired resource:
- Acquisition method used
- Actual start date
- Cost (if applicable — hourly rate, contract value)
- Source (department, agency, vendor)

### Step 6 — Escalate Gaps
If a required resource cannot be acquired within acceptable constraints:
- Log as an issue in A18 with priority based on impact to critical path
- Escalate to sponsor if the gap is on a critical path role and exceeds A06 authority threshold
- Assess schedule impact and raise A12 change request if A15 baseline is affected

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Team RACI assignments | A25 | RACI and assignment section | Complete before work begins |
| Acquisition actuals | A26 | Acquisition log | Updated for every resource |
| Resource gaps | A18 | Issue log | Only if gaps exist |
| Change requests | A12 | Pending items | Only if schedule baseline affected |

---

## Operating Rules

1. No work package begins without a named Responsible party in A25 RACI.
2. External resource acquisition must create an A31 procurement entry before any contract is signed.
3. Availability gaps must be logged in A18 — they cannot be silently absorbed into schedule float.
4. Pre-assignment claims must reference the source document (A04 or contract reference number).
5. Virtual team arrangements must document constraints (time zones, communication tools, access requirements) in A25.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Resource assumption (verbal only) | A25 RACI entries with no confirmed acquisition path | Formalize all assignments; document acquisition paths in A26 |
| Availability conflict discovered late | Resource assigned to two projects simultaneously | Escalate to functional manager; A12 change request if schedule impact |
| External resource without A31 | Contract in place but no A31 entry | Create A31 entry retroactively; review compliance with A06 |
| Gap not escalated | Critical path role unfilled for >1 period | A18 entry + sponsor escalation per A06 threshold |
| Resource skill mismatch discovered post-assignment | Assigned resource cannot perform the work package tasks | Reassign; initiate supplementary training or replacement; log in A18 |
| Physical resource acquisition omitted | Equipment or facility needed for a work package has no acquisition record in A26 | Audit A26 for physical resource gaps; create acquisition entries; assess schedule impact |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | A26 plan exists | A26 resource management plan and estimates complete before skill runs | SKL-04-03 runs without A26 |
| T-2 | RACI completeness | Every active work package has ≥1 Responsible party in A25 | Any work package with no RACI entry |
| T-3 | Acquisition path documented | Every acquired resource has documented acquisition path in A26 | Any resource with no acquisition path |
| T-4 | External procurement routed | All external resource acquisitions have an A31 entry before contract signing | External resource acquired without A31 entry |
| T-5 | Pre-assignment sourced | Pre-assigned resources reference A04 or contract | Pre-assignment with no source reference |
| T-6 | Availability gaps logged | Any resource availability gap is logged in A18 | Resource gap discovered but not logged in A18 |
| T-7 | A26 actuals updated | A26 acquisition log updated for every acquired resource | Resource acquired but not recorded in A26 |
| T-8 | Escalation respected | Gaps exceeding PM authority threshold escalated to sponsor | Gap held at PM level beyond A06 threshold |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-30 | Expanded failure modes from 4 to 6: added resource skill mismatch and physical resource acquisition omission |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.6.2.3 · Figure 2-43*
*Source type: PMI-derived*
