---
artifact_id: A06
name: Tailoring Decision Record
example_version: "1.0.0"
status: "Example · Active"
scenario: "Meridian CRM Modernization — Nexus Solutions Ltd. (fictional, anonymized)"
---

## [A06] — Tailoring Decision Record | Example

> **Example notice:** This file contains a realistic but entirely fictional example of a completed Tailoring Decision Record. All project names, organizations, people, and data are fabricated for illustration purposes only. This is not a real project record. Use this file as a reference when completing the blank template.

---

## Project Identification

| Field | Value |
|---|---|
| **Project Name** | Meridian CRM Modernization |
| **Project Reference** | NSL-PRJ-2026-004 |
| **Project Manager** | Jordan Patel |
| **Record Version** | 1.0 |
| **Record Date** | 22 January 2026 |
| **Approved By** | Alex Rivera, VP Customer Experience (Sponsor) |

---

## Purpose

This Tailoring Decision Record documents the deliberate decisions made to adapt the Nexus Solutions Ltd. standard project management approach and the PMOSkills artifact set to suit the specific characteristics of the Meridian CRM Modernization project. Tailoring is performed in accordance with PMBOK® 7th/8th Edition guidance (Section 3.10: Tailoring) which recognises that project management approaches should be calibrated to fit the context, complexity, and stakeholder environment of each project rather than applied prescriptively.

---

## Tailoring Context Summary

| Factor | Assessment |
|---|---|
| **Project Complexity** | Medium-High (technical complexity: data migration, integrations; stakeholder complexity: 280 users across two major functions) |
| **Delivery Approach Selected** | Hybrid — phased delivery lifecycle with agile (Scrum-based) sprints within each phase |
| **Organisational PMO Maturity** | Level 3 (Defined processes; PMO oversight; standard artifact set in use) |
| **Regulatory Environment** | GDPR-regulated; privacy-by-design requirements apply |
| **Vendor Involvement** | High — Salesforce SI partner (TechBridge Solutions) conducting configuration, migration, and integration work under a fixed-price contract |

---

## Tailoring Decisions

---

### TD-01 — Adopt Hybrid Delivery Approach (Phased + Agile Sprints)

| Field | Detail |
|---|---|
| **Decision ID** | TD-01 |
| **What Was Tailored** | Delivery lifecycle model — replaced the standard waterfall project lifecycle with a hybrid approach combining phased milestone gates with 2-week agile sprints for configuration and development work within each phase |
| **Rationale** | The project involves both contractually-governed fixed-scope deliverables (data migration, integration contracts) that benefit from phase-gate discipline and iterative configuration work (Salesforce setup, UAT cycles) that benefits from sprint cadence and continuous stakeholder feedback. A hybrid model provides governance rigour at phase boundaries while enabling adaptability within phases. |
| **PMBOK Guidance Considered** | PMBOK 8 Section 2.4 (Development Approach Selection); Disciplined Agile Delivery framework (hybrid delivery model) |
| **Authority Who Approved** | Alex Rivera (Sponsor) with David Kowalski (IT) concurrence — 22 January 2026 |
| **Impact on Artifact Set** | Sprint planning, sprint review, and retrospective records are added as lightweight operational artifacts; standard Gantt schedule is maintained for milestone-level reporting; A14 IPMP documents sprint cadence within phase governance |

---

### TD-02 — Tiered Change Control (T1/T2/T3 Thresholds)

| Field | Detail |
|---|---|
| **Decision ID** | TD-02 |
| **What Was Tailored** | Change control process — adopted a three-tier change threshold model instead of routing all changes through the full Change Control Board (CCB) |
| **Rationale** | The standard NSL change process routes every change request, regardless of size, through a formal CCB review which meets fortnightly. For a project with active sprint cycles, this creates unnecessary delays for low-impact changes (e.g., minor Salesforce field additions, label renaming). A tiered model empowers the PM to approve Tier 1 changes (≤5 person-days effort, zero cost impact) immediately, reserving CCB review for Tier 2 (schedule impact <10 days or cost <€25,000) and Tier 3 (any larger or strategic impact). |
| **PMBOK Guidance Considered** | PMBOK 8 Section 4.6 (Perform Integrated Change Control); Process Groups Practice Guide (Change Management) |
| **Authority Who Approved** | Alex Rivera (Sponsor) — 22 January 2026 |
| **Impact on Artifact Set** | A15 Change Log uses tiered classification columns; A16 Change Request Form includes tier self-assessment field; CCB Terms of Reference updated to reflect T2/T3 scope |

---

### TD-03 — Omit Standalone Procurement Management Plan for Low-Value Items

| Field | Detail |
|---|---|
| **Decision ID** | TD-03 |
| **What Was Tailored** | Procurement Management Plan (standard artifact A23) — full formal procurement plan omitted for items below €10,000 individual value; procurement decisions for low-value items are documented within the project log and weekly status reports |
| **Rationale** | The project has one major procurement (Salesforce licence + TechBridge Solutions SI contract, both >€100,000) which is governed by NSL's corporate procurement process with a formal Statement of Work and contract. Minor ancillary purchases (training materials, software tools, cloud storage) are below the NSL procurement policy threshold of €10,000 and do not require a formal procurement management plan. Maintaining a full procurement plan for these items would add administrative burden without proportionate governance value. |
| **PMBOK Guidance Considered** | PMBOK 8 Section 4.9 (Plan Procurement Management); PMO Practice Guide (proportionality principle) |
| **Authority Who Approved** | Jordan Patel (PM) with Procurement Office notification — 25 January 2026 |
| **Impact on Artifact Set** | A23 Procurement Management Plan scoped to major contracts only; A14 IPMP notes the tailoring decision; all low-value procurement items tracked in project expense log |

---

### TD-04 — Use Sprint Retrospectives as Primary Lessons Capture Mechanism

| Field | Detail |
|---|---|
| **Decision ID** | TD-04 |
| **What Was Tailored** | Lessons Learned process (standard artifact A28) — instead of periodic standalone lessons-learned sessions, lessons are captured continuously through the sprint retrospective cadence (every 2 weeks) and consolidated into the A28 Lessons Learned Register at each phase gate |
| **Rationale** | Traditional lessons-learned sessions conducted at project end suffer from recall bias and low stakeholder engagement. Embedding lessons capture in retrospectives ensures timely, contextual reflection when experiences are fresh. The A28 register is updated cumulatively at phase gates, ensuring formal documentation is still produced. This approach aligns with Agile retrospective practices endorsed in the Disciplined Agile Delivery framework. |
| **PMBOK Guidance Considered** | PMBOK 8 Section 4.12 (Collect Lessons Learned); Introduction to Disciplined Agile Delivery (2nd Ed., Chapter 8) |
| **Authority Who Approved** | Jordan Patel (PM) — 25 January 2026 |
| **Impact on Artifact Set** | A28 Lessons Learned Register maintained as a live document, updated at each phase gate rather than solely at project close; sprint retrospective notes stored as supporting evidence in project SharePoint folder |

---

### TD-05 — Adapt Stakeholder Register to Use Salesforce CRM as Tracking Tool

| Field | Detail |
|---|---|
| **Decision ID** | TD-05 |
| **What Was Tailored** | Stakeholder Register format (standard artifact A09) — the standard Excel-based stakeholder register is supplemented by a Salesforce CRM contact/account structure to track stakeholder engagement actions, communication touchpoints, and sentiment for the 280 end-user cohort |
| **Rationale** | Given that Salesforce is the core platform being delivered, using Salesforce's own contact management capabilities to track end-user engagement provides a practical demonstration of the platform's value while reducing double-handling of contact data. The formal A09 register (covering the 18 key named stakeholders with influence/interest mapping) remains in the standard format. The Salesforce-based tracker handles the operational engagement log for the larger user population. |
| **PMBOK Guidance Considered** | PMBOK 8 Section 4.14 (Plan Stakeholder Engagement); Stakeholder management proportionality guidance |
| **Authority Who Approved** | Jordan Patel (PM) with David Kowalski (IT) technical concurrence — 28 January 2026 |
| **Impact on Artifact Set** | A09 Stakeholder Register covers named governance-level stakeholders; A10 Stakeholder Engagement Plan references both tools; Salesforce tracker defined in Communications Management Plan |

---

### TD-06 — Compress Quality Management Plan into Quality Checklist for Configuration Work

| Field | Detail |
|---|---|
| **Decision ID** | TD-06 |
| **What Was Tailored** | Quality Management Plan (standard artifact A18) — the full formal Quality Management Plan is maintained for the overall project and contract deliverables; however, for Salesforce configuration quality assurance, a lightweight sprint-level Quality Checklist is used instead of formal quality audits at every sprint |
| **Rationale** | TechBridge Solutions (the SI partner) operates under ISO 9001:2015 certification and applies their own QA process to all Salesforce configuration work. Duplicating a full NSL quality audit process on top of the partner's certified process would be redundant and resource-intensive. A configuration quality checklist (covering field validation, workflow logic, integration test coverage, and data mapping accuracy) is applied at sprint review and is sufficient for sprint-level quality assurance. Full quality audits are retained at phase gates (Design, Development Complete, UAT Complete). |
| **PMBOK Guidance Considered** | PMBOK 8 Section 4.17 (Plan Quality Management); proportionality and context-sensitivity in quality tailoring |
| **Authority Who Approved** | Alex Rivera (Sponsor) with Fatima Al-Rashid (Legal/Quality) notification — 28 January 2026 |
| **Impact on Artifact Set** | A18 Quality Management Plan documents the tailoring decision and references the sprint-level Quality Checklist (stored in project SharePoint); phase-gate quality audits remain in the project schedule |

---

### TD-07 — Combine Risk and Issue Register into a Single Integrated Log

| Field | Detail |
|---|---|
| **Decision ID** | TD-07 |
| **What Was Tailored** | Risk Register (A20) and Issue Log (A21) — combined into a single Integrated Risk and Issue Log with a status field distinguishing potential risks (probability > 0, not yet occurred) from active issues (materialised risks or unplanned events requiring resolution) |
| **Rationale** | Maintaining two separate registers on a medium-complexity project with a team of 12 creates duplication and management overhead, particularly as risks frequently convert to issues during the project lifecycle. A combined log with clear status classification (Risk / Issue / Closed) improves visibility and ensures risks and issues are reviewed together in weekly team meetings. The approach is consistent with PMBOK guidance that risk and issue management should be integrated, proportionate, and context-appropriate. |
| **PMBOK Guidance Considered** | PMBOK 8 Section 4.19 (Implement Risk Responses); Risk Management in Portfolios, Programs, and Projects Practice Guide (integrated risk and issue management) |
| **Authority Who Approved** | Jordan Patel (PM) — 28 January 2026 |
| **Impact on Artifact Set** | A20 Risk Register and A21 Issue Log references point to the single Integrated Risk and Issue Log document; the log template is extended with a "Type" column (Risk / Issue) and a "Converted From" column for traceability |

---

### TD-08 — Adopt Lightweight Benefits Realisation Tracking (No Formal Benefits Management Plan)

| Field | Detail |
|---|---|
| **Decision ID** | TD-08 |
| **What Was Tailored** | Benefits Management Plan (standard artifact A29) — a standalone Benefits Management Plan is not produced; instead, a Benefits Realisation Tracker (a one-page dashboard) is embedded in the monthly Sponsor Report and reviewed at each phase gate and at project close |
| **Rationale** | Formal benefits realisation for this project will be led by the VP Customer Experience (Alex Rivera) post-project, as benefits (e.g., reduced system downtime, improved sales cycle visibility) will only be fully measurable 6–12 months after go-live. A full Benefits Management Plan would duplicate planning being done at the Digital Transformation Programme level. A lightweight tracker covering the four primary benefit indicators (system uptime, user adoption rate, support ticket volume reduction, licence cost savings) provides adequate project-level visibility without over-engineering the artifact. |
| **PMBOK Guidance Considered** | PMBOK 8 Section 1.2 (Value and Benefits); Standard for Program Management 5th Edition (benefits management lifecycle) |
| **Authority Who Approved** | Alex Rivera (Sponsor) — 29 January 2026 |
| **Impact on Artifact Set** | A29 Benefits Management Plan not produced; Benefits Realisation Tracker embedded in A25 Monthly Sponsor Report template; programme-level benefits management plan referenced for full coverage |

---

## Tailoring Decisions Summary

| ID | What Was Tailored | Approved By | Date |
|---|---|---|---|
| TD-01 | Delivery approach: hybrid (phased + agile sprints) | Sponsor | 22 Jan 2026 |
| TD-02 | Change control: tiered T1/T2/T3 thresholds | Sponsor | 22 Jan 2026 |
| TD-03 | Procurement plan: omit for items <€10,000 | PM + Procurement | 25 Jan 2026 |
| TD-04 | Lessons learned: sprint retrospectives as primary mechanism | PM | 25 Jan 2026 |
| TD-05 | Stakeholder register: Salesforce CRM for end-user cohort | PM + IT | 28 Jan 2026 |
| TD-06 | Quality: sprint-level checklists replace audits within sprints | Sponsor | 28 Jan 2026 |
| TD-07 | Risk and issue: combined integrated log | PM | 28 Jan 2026 |
| TD-08 | Benefits management: lightweight tracker, no formal plan | Sponsor | 29 Jan 2026 |

---

*Example for: Tailoring Decision Record*
*Scenario: Meridian CRM Modernization — Nexus Solutions Ltd. (fictional)*
*See template file: artifacts/planning-and-baselines/A06-tailoring-decision-record.md*
*See definition file: artifacts/planning-and-baselines/A06-tailoring-decision-record-definition.md*
