---
skill_id: SKL-06-01
name: Close Project or Phase
pack: 06 — Closing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Guide §2.1.6.7 Close Project or Phase · Figure 2-9
performance_domains:
- Governance
- Delivery
- Stakeholders
focus_area: Closing
primary_artifact: A27 — Project Closure Record
artifacts_updated:
- A14
- A05
- A21
upstream_prerequisites:
- SKL-05-01
- SKL-05-06
- All deliverables accepted
downstream_skills:
- SKL-06-02
- SKL-06-03
file_path: skills/06-closing/SKL-06-01-close-project-or-phase.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-06-01 — Close Project or Phase

**Skill ID:** SKL-06-01  
**Pack:** 06 — Closing  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Authority:** PMI-derived  
**Primary Reference:** Process-Groups §8.1 · PMBOK 8 — Close Project or Phase focus area  
**Secondary References:** Forms-Book · Artifacts-V-1.1.md (A27 — Project Closure Record)  
**Lifecycle Stage:** Closing  
**Performance Domains:** Delivery · Governance · Stakeholders  
**PMBOK 8 Principles Applied:** Stewardship · Value · Stakeholders · Adaptability  

---

## Purpose

Formally complete all project or phase activities, confirm acceptance of all deliverables, release resources, close contracts, archive project records, and transfer the final product, service, or result to the appropriate receiving entity. This skill verifies that all Process Group processes have been completed and that the project or phase is formally concluded.

---

## Scope

| In Scope | Out of Scope |
|---|---|
| Administrative closure of project or phase | Benefits realization monitoring post-transition |
| Formal acceptance of deliverables from customer/sponsor | Ongoing operations management |
| Contract closure and final procurement records | Portfolio-level archiving |
| Resource release and personnel reassignment | Program-level closure |
| Lessons learned final update | Organizational change management post-handover |
| OPA updates and final archive | |

---

## Trigger Conditions

Activate this skill when:
- All project deliverables have been accepted (or project is being terminated)
- All Executing and Monitoring & Controlling processes are confirmed complete
- Sponsor or governing body has directed project or phase closure
- Contract completion confirmation has been received from all sellers
- Phase gate review has approved progression or final closure

---

## Inputs

| Input | Source | Notes |
|---|---|---|
| Project Charter | A01 | Baseline reference for original objectives |
| Project Management Plan (all components) | A06 | Confirm all planned work is complete |
| Assumption Log | A03 | Final review for open assumptions |
| Basis of Estimates | A04 | Archive alongside final actuals |
| Change Log | A12 | Confirm all changes closed |
| Issue Log | A18 | Confirm all issues resolved or formally deferred |
| Lessons Learned Register | A21 | Final update before archive |
| Milestone List | A15 (schedule) | Confirm all milestones achieved |
| Project Communications | A28 | Archive final communications |
| Quality Control Measurements | A30 | Archive with deliverables |
| Quality Reports | A30 | Archive |
| Requirements Documentation | A08 | Confirm all requirements met |
| Risk Register | A19 | Final status of all risks |
| Risk Report | A19 | Final summary |
| Accepted Deliverables | Validate Scope output | Formal sign-off received |
| Business Case | A02 | Verify project objectives were achieved |
| Benefits Management Plan | Sponsor/PMO | Confirm benefits handover |
| Agreements | Procurement | All contracts to be formally closed |
| Procurement Documentation | A31 | Complete procurement record |
| Organizational Process Assets | OPA | Policies, templates, historical info |

---

## Tools and Techniques

| Tool / Technique | Application |
|---|---|
| Expert Judgment | Confirm completeness of closure activities; review compliance with organizational standards |
| Data Analysis — Document Analysis | Review project records for completeness and gaps |
| Data Analysis — Regression Analysis | Assess patterns in performance data for final report |
| Data Analysis — Trend Analysis | Identify performance trends over project lifecycle |
| Data Analysis — Variance Analysis | Compare planned vs. actual scope, schedule, cost, quality |
| Meetings | Closure meeting with sponsor, stakeholders, team; handover sessions |

---

## Outputs

| Output | Artifact | Action |
|---|---|---|
| Final Product, Service, or Result Transition | — | Formal handover to operations, customer, or next phase |
| Final Report | A17 (final version) | Comprehensive summary of project performance |
| Lessons Learned Register (updated) | A21 | Final version archived to OPA |
| Organizational Process Assets Updates | OPA | Updated policies, procedures, templates, historical records |

---

## Primary Artifact — Project Closure Record (A27)

### What to Generate

A27 — Project Closure Record is the formal document confirming that the project or phase is closed.

**Minimum Required Fields:**

```markdown
## Project Closure Record

**Project Name:**
**Project ID:**
**Phase (if phase closure):**
**Closure Date:**
**Project Manager:**
**Sponsor:**
**Closure Type:** [ ] Normal Completion  [ ] Phase Gate  [ ] Early Termination

---

### 1. Objectives vs. Outcomes

| Objective (from Charter) | Achieved? | Notes |
|---|---|---|
| | | |

### 2. Deliverables Acceptance Register

| Deliverable | Accepted By | Acceptance Date | Conditions |
|---|---|---|---|
| | | | |

### 3. Scope Summary
| Planned Scope | Delivered Scope | Variance | Cause |
|---|---|---|---|
| | | | |

### 4. Schedule Summary
| Baseline Finish | Actual Finish | Variance | Cause |
|---|---|---|---|
| | | | |

### 5. Cost Summary
| Budget at Completion (BAC) | Actual Cost (AC) | Variance | EAC |
|---|---|---|---|
| | | | |

### 6. Quality Summary
| Quality Objective | Met? | Evidence |
|---|---|---|
| | | |

### 7. Contract Closure
| Contract / Vendor | Status | Closed Date | Outstanding Claims |
|---|---|---|---|
| | | | |

### 8. Resource Release
| Resource / Team Member | Release Date | Reassigned To |
|---|---|---|
| | | |

### 9. Open Items at Closure (Formally Deferred)
| Item | Owner | Disposition |
|---|---|---|
| | | |

### 10. Transition Confirmation
**Receiving Entity:**
**Transition Date:**
**Transition Conditions:**
**Signed Off By:**

### 11. Final Signatures
| Role | Name | Signature | Date |
|---|---|---|---|
| Project Manager | | | |
| Sponsor | | | |
| Customer Representative | | | |
| PMO Representative | | | |
```

---

## Closure Checklist

### Administrative Closure
- [ ] All deliverables accepted and signed off
- [ ] All project documents updated and finalized
- [ ] All issues in Issue Log resolved or formally deferred
- [ ] All change requests formally closed
- [ ] All open risks formally closed or transferred
- [ ] All costs charged to project accounts
- [ ] Project accounts closed
- [ ] All facilities, equipment, and resources reallocated
- [ ] All personnel reassigned
- [ ] Excess project materials disposed of

### Contract Closure
- [ ] Formal acceptance of all seller work obtained
- [ ] All open claims finalized
- [ ] Procurement records updated with final results
- [ ] All procurement documentation archived

### Knowledge and Archive
- [ ] Lessons Learned Register finalized
- [ ] All project records archived in OPA
- [ ] Final project report completed and distributed
- [ ] Stakeholder satisfaction assessment completed

### Transition
- [ ] Final product, service, or result formally transitioned
- [ ] Receiving entity has confirmed acceptance
- [ ] Operational handover documentation provided
- [ ] Post-project benefits realization owner confirmed

---

## Early Termination Procedure

When a project is terminated before completion, this skill governs documentation of closure under termination conditions:

1. Document the reasons for termination in the Project Closure Record
2. Identify the state of all in-progress work and deliverables
3. Confirm which, if any, deliverables are accepted in their current state
4. Close all contracts per termination clauses
5. Release all resources immediately
6. Update Lessons Learned with findings from the termination
7. Archive all records
8. Obtain formal closure authorization from sponsor or governing body

---

## Authority Routing

| Decision | Authority Level | Threshold |
|---|---|---|
| Approve project closure | Sponsor + Governing Body | T3 |
| Accept final deliverables | Customer / Sponsor-delegated authority | T2 |
| Close individual contracts | Project Manager + Procurement authority | T2 |
| Approve early termination | Governing Body or Portfolio authority | T3–T4 |
| Archive records | PMO / Project Manager | T1 |
| Release personnel | Project Manager + HR | T1–T2 |

---

## Tests

| Test ID | Test Description | Pass Condition | Fail Condition |
|---|---|---|---|
| T01 | All deliverables listed in Acceptance Register | Every deliverable has accepted-by name and date | Any row missing sign-off |
| T02 | Issue Log fully resolved | All issues = Closed or Deferred with notation | Any open issue without deferral note |
| T03 | All contracts confirmed closed | Procurement log shows Closed status for each contract | Any contract status = Active or Open |
| T04 | Lessons Learned archived to OPA | A21 status = Archived; PMO archive reference present | A21 status = Draft at closure |
| T05 | Final Report distributed | A17 distribution record exists | No distribution record |
| T06 | Transition confirmed | Receiving entity sign-off present in A27 §10 | Section 10 blank |
| T07 | Project Closure Record fully signed | All signature rows in §11 populated | Any signature row blank |
| T08 | Early termination procedure followed (if applicable) | All 8 steps documented if closure type = Early Termination | Steps missing or incomplete |
| T09 | OPA updates submitted | OPA update record filed with PMO | No OPA update record |

---

## Validation Criteria

This skill output is valid when:
- [ ] All deliverables in scope appear in the Deliverables Acceptance Register with sign-off
- [ ] No unresolved issues remain in the Issue Log without formal deferral notation
- [ ] All contracts are confirmed closed
- [ ] Lessons Learned Register has been archived to OPA
- [ ] Final Report has been reviewed and distributed
- [ ] Final product/service/result transition is formally confirmed
- [ ] Project Closure Record bears required signatures

---

## Failure Cases

| Failure | Indicator | Resolution |
|---|---|---|
| Closure initiated before all deliverables accepted | Unsigned acceptance rows in register | Obtain sign-off or document formal deferral |
| Open contracts not closed | Procurement log shows active contracts | Engage procurement authority for formal closure |
| Resources released without OPA update | HR records show reassigned but no closure record | Complete administrative closure before release confirmation |
| Lessons Learned not archived | A21 status = draft at closure | Finalize and archive to OPA before signing closure record |
| Transition not confirmed | No receiving entity sign-off | Obtain formal transition acceptance before closure |

---

## Linked Skills

| Skill ID | Skill Name | Relationship |
|---|---|---|
| SKL-04-09 | Conduct Procurements | Contracts must be closed before project closure |
| SKL-05-01 | Monitor and Control Project Work | Final performance data feeds closure |
| SKL-05-02 | Perform Integrated Change Control | All changes must be closed |
| SKL-05-03 | Control Scope | All scope accepted before closure |
| SKL-06-02 | Conduct Final Performance Review | Feeds Final Report |
| SKL-06-03 | Capture and Archive Lessons Learned | Feeds OPA update |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | PMO Repository | Initial build |
| 1.1.0 | 2026-05-30 | QA Phase A | Added YAML front matter, Tests table (T01–T09), Change Log |

---

*Authority: PMI-derived — Process-Groups §8.1 · PMBOK 8 Close Project or Phase*  
*PMO Skill Repository v1.1.0 · Pack 06 — Closing*
