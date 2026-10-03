---
gov_id: LIFECYCLE-MAP
gov_name: Project Lifecycle Map — Phases, Processes, Artifacts, and Skill Packs
version: "1.0.1"
status: Active
authority: PMBOK8 Primary
supersedes: none
file_path: "LIFECYCLE-MAP.md"
last_updated: "2026-06-03"
---

# LIFECYCLE-MAP.md
**Repository:** PMO Skill Repository  
**Version:** 1.0.1  
**Authority:** PMBOK8 — Standard §4.5 (Project Management Focus Areas) · Standard §4 (Project Life Cycle)  
**Purpose:** End-to-end lifecycle flow — phases, PMBOK 8 processes, artifacts triggered, and skill packs activated at each stage.

> **Change log v1.0.1 (2026-06-03):** Added GOV YAML front-matter. Corrected §Ref citation
> from "Guide §4 (Focus Areas)" to "Standard §4.5 (Project Management Focus Areas)".

---

## Lifecycle Flow Overview

```
PRE-SIGN ──► INITIATING ──► PLANNING ──► EXECUTING ──► MONITORING & CONTROLLING ──► CLOSING
  │               │               │            │                    │                    │
  Pack 01      Pack 02         Pack 03       Pack 04             Pack 05              Pack 06
  A01–A04      A03–A07        A08–A31       A09,A18,           A12,A17–A21          A24,A30,
  A10,A11      A35,A39        A13–A16       A25–A31            A33,A38              A34
               A40,A41        A19–A20
                               A22–A29
```

PMO Governance skills (Pack 08) and Adaptive/Hybrid skills (Pack 07) operate **cross-lifecycle** or are activated as needed.

---

## Phase 0: Pre-sign (Before Formal Authorization)

**Purpose:** Identify the need, evaluate options, build the business case, and obtain authorization to proceed.

### Key Activities
- Demand identification and portfolio intake
- Business case development and economic analysis
- Feasibility and options analysis
- Benefits baseline definition
- PMO service scoping (if PMO is involved)
- Portfolio interdependency review

### PMBOK 8 Processes Active
| Process | Domain | PMBOK 8 §Ref |
|---------|--------|--------------|
| Initiate Project or Phase (pre-authorization context) | Governance | §2.1.6.1 |

### Artifacts Triggered
| Artifact | ID | Skill |
|---------|----|-------|
| Business Case | A01 | SKL-01-02 |
| Benefits and Value Measurement Record | A02 | Reference |
| Feasibility and Viable Options Record | A03 | Reference |
| Intake and Prioritization Decision Record | A10 | SKL-01-01 |
| PMO Service Engagement Record | A11 | Reference |
| Portfolio Interdependency Record | A22 | Reference |

### Entry Gate
- Strategic need or opportunity identified
- Portfolio governance has capacity to evaluate

### Exit Gate
- Business case approved  
- Authorization decision made (approve / defer / reject)  
- PMO service scope agreed (if applicable)

---

## Phase 1: Initiating

**PMBOK 8 Focus Area:** Initiating  
**Purpose:** Formally authorize the project, establish governance, identify key stakeholders, and set up the project context.

### Key Activities
- Issue Project Charter
- Establish governance structure and authority thresholds
- Identify initial stakeholders
- Consolidate context (EEFs and OPAs)
- Make initial tailoring decisions
- Document development approach and lifecycle intent

### PMBOK 8 Processes Active
| Process | Domain | PMBOK 8 §Ref |
|---------|--------|--------------|
| Initiate Project or Phase | Governance | §2.1.6.1 |
| Identify Stakeholders | Stakeholders | §2.5.2.1 |

### Artifacts Triggered
| Artifact | ID | Skill |
|---------|----|-------|
| Project Charter | A04 | SKL-02-01 |
| Context Register | A05 | Reference |
| Tailoring Decision Record | A06 | Reference |
| Stakeholder Register and Engagement Strategy | A07 | SKL-02-02 |
| Governance and Decision Authority Record | A35 | Reference |
| PMO Configuration and Authority Record | A39 | SKL-07-01 |
| PMBOK Evolution and Principles Traceability Record | A40 | Reference only |
| Phase Gate Authorization Record | A04+A35 | Reference |

### Entry Gate
- Business case approved
- Authorization decision: proceed

### Exit Gate
- Charter signed  
- PM formally appointed with authority  
- Initial stakeholders identified  
- Governance structure established

---

## Phase 2: Planning

**PMBOK 8 Focus Area:** Planning  
**Purpose:** Define, develop, and integrate all project plans into a coherent baseline for execution.

### Key Activities
- Select and document lifecycle and delivery approach
- Develop integrated project management plan
- Plan and baseline scope, schedule, finance, resources, risk
- Plan stakeholder engagement and communications
- Plan procurement and sourcing strategy
- Plan change readiness and adoption

### PMBOK 8 Processes Active
| Process | Domain | PMBOK 8 §Ref |
|---------|--------|--------------|
| Integrate and Align Project Plans | Governance | §2.1.6.2 |
| Plan Sourcing Strategy | Governance | §2.1.6.3 |
| Plan Scope Management | Scope | §2.2.2.1 |
| Elicit and Analyze Requirements | Scope | §2.2.2.2 |
| Define Scope | Scope | §2.2.2.3 |
| Develop Scope Structure | Scope | §2.2.2.4 |
| Plan Schedule Management | Schedule | §2.3.2.1 |
| Develop Schedule | Schedule | §2.3.2.2 |
| Plan Financial Management | Finance | §2.4.2.1 |
| Estimate Costs | Finance | §2.4.2.2 |
| Develop Budget | Finance | §2.4.2.3 |
| Plan Stakeholder Engagement | Stakeholders | §2.5.2.2 |
| Plan Communications Management | Stakeholders | §2.5.2.3 |
| Plan Resource Management | Resources | §2.6.2.1 |
| Estimate Resources | Resources | §2.6.2.2 |
| Plan Risk Management | Risk | §2.7.2.1 |
| Identify Risks | Risk | §2.7.2.2 |
| Perform Risk Analysis | Risk | §2.7.2.3 |
| Plan Risk Responses | Risk | §2.7.2.4 |

### Artifacts Triggered
| Artifact | ID | Skill |
|---------|----|-------|
| Development Approach and Lifecycle Decision Record | A13 | SKL-03-02 |
| Integrated Project Management Plan | A14 | SKL-03-01 |
| Scope and Requirements Decision Record | A08 | SKL-03-03 / 04 / 05 |
| Schedule Model and Baseline Record | A15 | SKL-03-06 |
| Financial Management and Cost Baseline Record | A16 | SKL-03-07 |
| Stakeholder Register and Engagement Strategy | A07 | SKL-03-08 |
| Communications and Reporting Record | A28 | SKL-03-09 |
| Resource Capacity and Acquisition Record | A26 | SKL-03-10 |
| Team Operating and Responsibility Record | A25 | SKL-03-13 |
| Delivery Approach and Team Operating Agreement | A09 | SKL-03-13 |
| Risk Management Record | A19 | SKL-03-11 / 12 |
| Quantitative Risk and Reserve Decision Record | A20 | Reference |
| Procurement and Supplier Management Record | A31 | SKL-03-14 |
| Change Readiness and Adoption Record | A29 | SKL-03-15 |
| Process Inputs, Outputs, and Tools Reference Record | A41 | Reference |

### Entry Gate
- Charter signed  
- Tailoring profile approved

### Exit Gate
- Integrated plan approved  
- All domain baselines established  
- Governance calendar defined

---

## Phase 3: Executing

**PMBOK 8 Focus Area:** Executing  
**Purpose:** Perform the work defined in the project management plan to deliver the project objectives.

### Key Activities
- Direct and manage project work
- Assure quality of processes and deliverables
- Manage project knowledge
- Acquire and lead the team
- Manage stakeholder engagement and communications
- Implement risk responses
- Manage supplier delivery

### PMBOK 8 Processes Active
| Process | Domain | PMBOK 8 §Ref |
|---------|--------|--------------|
| Manage Project Execution | Governance | §2.1.6.4 |
| Manage Quality Assurance | Governance | §2.1.6.5 |
| Manage Project Knowledge | Governance | §2.1.6.6 |
| Acquire Resources | Resources | §2.6.2.3 |
| Lead the Team | Resources | §2.6.2.4 |
| Manage Stakeholder Engagement | Stakeholders | §2.5.2.4 |
| Manage Communications | Stakeholders | §2.5.2.5 |
| Implement Risk Responses | Risk | §2.7.2.5 |

### Artifacts Active (Updated)
| Artifact | ID | Skill |
|---------|----|-------|
| Issue, Impediment, and Action Log | A18 | SKL-04-10 |
| Quality Management Record | A38 | SKL-04-02 |
| Knowledge and Lessons Management Record | A30 | SKL-04-03 |
| Team Health and Development Record | A27 | SKL-04-07 |
| Change Readiness and Adoption Record | A29 | SKL-04-04 |
| Procurement and Supplier Management Record | A31 | SKL-04-09 |
| Risk Management Record | A19 | SKL-04-08 |

---

## Phase 4: Monitoring and Controlling

**PMBOK 8 Focus Area:** Monitoring and Controlling  
**Purpose:** Track, review, and regulate project progress and performance; identify areas requiring corrective action.

### Key Activities
- Monitor and control project performance (integrated)
- Assess and implement changes
- Control scope, schedule, finances, resources
- Monitor risk and stakeholder engagement
- Validate scope and quality
- Monitor supplier compliance

### PMBOK 8 Processes Active
| Process | Domain | PMBOK 8 §Ref |
|---------|--------|--------------|
| Monitor and Control Project Performance | Governance | §2.1.6.7 |
| Assess and Implement Changes | Governance | §2.1.6.8 |
| Monitor and Control Scope | Scope | §2.2.2.5 |
| Validate Scope | Scope | §2.2.2.6 |
| Monitor and Control Schedule | Schedule | §2.3.2.3 |
| Monitor and Control Finances | Finance | §2.4.2.4 |
| Monitor Stakeholder Engagement | Stakeholders | §2.5.2.6 |
| Monitor Communications | Stakeholders | §2.5.2.7 |
| Monitor and Control Resourcing | Resources | §2.6.2.5 |
| Monitor Risks | Risk | §2.7.2.6 |

### Artifacts Active (Updated or Generated)
| Artifact | ID | Skill |
|---------|----|-------|
| Integrated Performance Reporting Record | A17 | SKL-05-01 |
| Change and Exception Decision Log | A12 | SKL-05-02 |
| Trade-Off Decision Record | A21 | Reference |
| Quantitative Risk and Reserve Decision Record | A20 | Reference |
| Supplier Change, Claim, and Compliance Record | A33 | Reference |
| Quality Management Record | A38 | SKL-05-09 |

---

## Phase 5: Closing

**PMBOK 8 Focus Area:** Closing  
**Purpose:** Finalize all activities, obtain acceptance, transfer outputs, archive records, and release resources.

### Key Activities
- Confirm all work is completed and objectives met
- Obtain formal acceptance of deliverables
- Transition benefits ownership
- Financial closure
- Capture and archive lessons learned
- Release team and resources
- Close supplier contracts
- Produce final project report

### PMBOK 8 Processes Active
| Process | Domain | PMBOK 8 §Ref |
|---------|--------|--------------|
| Close Project or Phase | Governance | §2.1.6.9 |

### Artifacts Triggered or Closed
| Artifact | ID | Skill |
|---------|----|-------|
| Closure and Benefits Transition Record | A24 | SKL-06-01 / 02 / 03 |
| Knowledge and Lessons Management Record | A30 | SKL-06-05 |
| Information Retention and Records Control Record | A34 | SKL-06-08 |
| Final Project Report | A17+A24+A02 | SKL-06-09 |
| Closure Authorization | A24+A35 | SKL-06-10 |

### Entry Gate
- All deliverables complete or scope formally reduced  
- No outstanding unresolved issues above T1

### Exit Gate
- Formal closure authorization signed  
- Benefits ownership transferred  
- Records archived  
- Resources released  
- Final report issued

---

## Cross-Lifecycle: Adaptive & Hybrid Skills (Pack 07)

Adaptive & Hybrid skills are selected based on the delivery approach and are applied throughout the lifecycle:

| Skill ID | Skill Name | Primary Phase(s) |
|----------|------------|------------------|
| SKL-07-01 | Select and Tailor Lifecycle Approach | Initiating / Planning |
| SKL-07-02 | Manage Backlog and Iterations | Planning / Executing |
| SKL-07-03 | Facilitate Retrospectives and Continuous Improvement | Executing / Monitoring |
| SKL-07-04 | Plan and Deliver Hybrid Projects | Planning through Closing |

---

## Cross-Lifecycle: PMO Governance Skills (Pack 08)

PMO Governance skills are organizational/portfolio-level skills that support governance throughout the project life cycle:

| Skill ID | Skill Name | Primary Phase(s) |
|----------|------------|------------------|
| SKL-08-01 | Run Governance Board Packet | Initiating / Executing / Monitoring |
| SKL-08-02 | Standardize Status Reporting | Planning / Executing / Monitoring |
| SKL-08-03 | Perform PMO Health Check | Executing / Closing / Ongoing |
| SKL-08-04 | Manage Escalation Protocols | Initiating through Monitoring |
| SKL-08-05 | Manage PMO Portfolio Reporting | Executing / Monitoring / Ongoing |

---

## Lifecycle Entry and Exit Criteria Summary

| Phase | Entry Criteria | Exit Criteria |
|-------|---------------|---------------|
| Pre-sign | Strategic need identified | Authorization decision made |
| Initiating | Authorization granted | Charter signed, PM appointed, governance set |
| Planning | Charter signed | Integrated plan approved, baselines set |
| Executing | Plans approved | Work underway, team deployed, delivery progress confirmed |
| Monitoring & Controlling | Work in progress | All performance within tolerance or corrective actions in place |
| Closing | Deliverables complete or scope reduced | Closure authorization signed, resources released, records archived |

---

*Authority: PMBOK8 — Standard §4.5 Focus Areas · §2.1–§2.7 Performance Domain Processes · Standard §4 Life Cycle*
