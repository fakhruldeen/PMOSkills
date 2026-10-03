---
artifact_id: A15
name: Schedule Baseline
example_version: "1.0.0"
status: "Example · Active"
scenario: "Meridian CRM Modernization — Nexus Solutions Ltd. (fictional, anonymized)"
---

## [A15] — Schedule Baseline | Example

> **Example notice:** This file contains a realistic but entirely fictional example of a completed Schedule Baseline. All project names, organizations, people, and data are fabricated for illustration purposes only. This is not a real project record. Use this file as a reference when completing the blank template.

---

## 1. Baseline Identification

| Field | Value |
|---|---|
| Project Name | Meridian CRM Modernization |
| Project ID | NXS-2026-CRM-001 |
| Project Manager | Jordan Patel |
| Sponsor | Alex Rivera, VP Customer Experience |
| Baseline Version | 1.0 |
| Baseline Approval Date | 15 January 2026 |
| Approved By | Alex Rivera (Sponsor); Steering Committee |
| Baseline Status | Active — no approved changes |
| Total Project Duration | 18 months |
| Planned Start Date | 5 January 2026 |
| Planned Finish Date | 30 June 2027 |

---

## 2. Summary Milestone Table

| # | Milestone | Planned Date | Phase | Notes |
|---|---|---|---|---|
| M1 | Project Kick-Off & Charter Signed | 5 Jan 2026 | Phase 1 | Gate: Sponsor sign-off required |
| M2 | Discovery Complete — Requirements Baselined | 13 Mar 2026 | Phase 1 | Gate: Requirements review board approval |
| M3 | Platform Provisioned & Integration Design Approved | 17 Apr 2026 | Phase 2 | Dependency: Vendor delivery of sandbox environment |
| M4 | Sprint 6 — Core CRM Configuration Complete | 26 Jun 2026 | Phase 2 | Mid-phase checkpoint |
| M5 | Phase 2 Build Complete — UAT Ready | 30 Sep 2026 | Phase 2 | Gate: UAT sign-off package submitted |
| M6 | Data Migration — Full Dry Run Passed | 28 Nov 2026 | Phase 3 | Critical path milestone |
| M7 | Training Programme Complete — All Users Certified | 31 Mar 2027 | Phase 3 | Gate: Training completion report |
| M8 | Go-Live — Production Cutover | 7 Apr 2027 | Phase 4 | Gate: Go/No-Go decision by Steering Committee |
| M9 | Stabilization Complete — Project Closed | 30 Jun 2027 | Phase 4 | Gate: Benefits handover to business owner |

---

## 3. Phase-Level Work Package Summary

| Phase | Phase Name | Start | Finish | Duration (weeks) | Work Packages | Key Dependencies |
|---|---|---|---|---|---|---|
| 1 | Discovery & Planning | 5 Jan 2026 | 13 Mar 2026 | 10 | 8 | Charter approved before WP1.2 can start |
| 2 | Build & Configure | 14 Mar 2026 | 30 Sep 2026 | 28 | 22 | Phase 1 complete; vendor platform provisioned by 17 Apr 2026 |
| 3 | Migration & Training | 1 Oct 2026 | 31 Mar 2027 | 26 | 14 | Phase 2 UAT sign-off; data migration scripts complete by 30 Sep 2026 |
| 4 | Go-Live & Stabilization | 1 Apr 2027 | 30 Jun 2027 | 13 | 6 | Go/No-Go decision; training completion confirmed |
| **Total** | | **5 Jan 2026** | **30 Jun 2027** | **77** | **50** | |

### Work Package Detail by Phase

**Phase 1 — Discovery & Planning (8 WPs)**
- WP1.1 Project initiation and charter
- WP1.2 Stakeholder identification and engagement plan
- WP1.3 Business requirements elicitation (Sales team)
- WP1.4 Business requirements elicitation (Support team)
- WP1.5 Technical landscape and legacy CRM assessment
- WP1.6 Vendor evaluation and contract finalisation
- WP1.7 Data profiling and migration strategy
- WP1.8 Phase 1 gate review and baseline approval

**Phase 2 — Build & Configure (22 WPs)**
- WP2.1–2.4: Platform setup, environment provisioning, integration architecture
- WP2.5–2.12: Sprint 1–8 configuration cycles (8 × 3-week sprints)
- WP2.13–2.16: ERP integration design and build
- WP2.17–2.19: Custom reporting and analytics configuration
- WP2.20–2.22: UAT preparation, execution, and defect resolution

**Phase 3 — Migration & Training (14 WPs)**
- WP3.1–3.4: Data cleanse, transformation, and migration script development
- WP3.5–3.6: Dry-run migration #1 and #2
- WP3.7: Full dry-run migration and sign-off
- WP3.8–3.10: Training material development (Sales, Support, IT)
- WP3.11–3.12: Training delivery (Sales 200 users, Support 80 users)
- WP3.13: GDPR compliance review and sign-off
- WP3.14: Phase 3 gate review

**Phase 4 — Go-Live & Stabilization (6 WPs)**
- WP4.1: Go/No-Go decision and production cutover preparation
- WP4.2: Production cutover execution
- WP4.3: Hypercare support (4 weeks post go-live)
- WP4.4: Issue resolution and performance tuning
- WP4.5: Benefits measurement baseline capture
- WP4.6: Project closure and handover

---

## 4. Critical Path Summary

The project critical path runs through the following work packages and milestones:

```
WP1.5 (Legacy Assessment) → WP1.7 (Data Profiling) → WP2.13–2.16 (ERP Integration)
→ WP2.20–2.22 (UAT) → WP3.1–3.4 (Data Cleanse & Scripts) → WP3.7 (Full Dry Run)
→ WP4.1 (Go/No-Go) → WP4.2 (Production Cutover) → M9 (Project Close)
```

**Critical path duration:** 77 weeks (zero float)

**Near-critical paths (float < 3 weeks):**
- Training track (WP3.8–3.12): 2.5 weeks float — dependent on training materials approved before Sprint 8 complete
- GDPR compliance track (WP3.13): 1.5 weeks float — legal review must complete before go-live gate

**Longest lead-time item:** ERP integration (WP2.13–2.16) — 14 weeks, vendor-dependent; identified as schedule risk.

---

## 5. Key Schedule Assumptions

| # | Assumption | Impact if Incorrect |
|---|---|---|
| SA-01 | Vendor cloud platform (CloudAxis CRM) available and provisioned by 17 April 2026 | Phase 2 start delayed; up to 4-week knock-on to all Phase 2 milestones |
| SA-02 | Data migration scripts completed and tested by 30 September 2026 | Phase 3 dry-run schedule at risk; critical path impacted |
| SA-03 | Sales and Support team SMEs available for requirements workshops in Jan–Feb 2026 (minimum 40% time) | Requirements quality and Phase 1 completion date at risk |
| SA-04 | Internal IT Operations team provides infrastructure access within 5 business days of request | Environment provisioning delays possible |
| SA-05 | ERP integration API documentation provided by ERP vendor (SynergyERP) by 31 March 2026 | Integration design delayed; Phase 2 critical path impacted |
| SA-06 | Legal/Privacy team available for GDPR review in October 2026 | Phase 3 GDPR gate at risk; Go-Live date at risk |
| SA-07 | No more than 2 weeks of planned holiday/leave concurrent across the delivery team during Phase 2 sprints | Sprint velocity assumptions may not hold |
| SA-08 | Steering Committee available for gate reviews within 5 business days of gate package submission | Phase gate decisions not delayed |

---

## 6. Key Schedule Constraints

| # | Constraint | Type | Impact |
|---|---|---|---|
| SC-01 | Go-Live must not occur during June 2027 month-end close (25–30 Jun 2027) | External — Finance calendar | Production cutover targeted for 7 April 2027 |
| SC-02 | Training cannot commence until UAT sign-off complete (Phase 2 gate) | Internal dependency | Training track float reduced |
| SC-03 | GDPR compliance sign-off required before production data migration | Regulatory | Cannot begin WP4.2 without legal clearance |
| SC-04 | Contract with implementation partner (DataPath Consulting) expires 31 March 2027 — must renew or release | Commercial | Resource continuity risk in Phase 3/4 transition |
| SC-05 | Executive sponsor (Alex Rivera) has committed to board update on project status in January 2027 — Phase 3 status report required | Governance | Phase 3 reporting milestone fixed |

---

## 7. Float and Buffer Strategy

**Schedule reserve approach:** The project uses a hybrid buffer strategy:

| Buffer Type | Value | Applied To | Rationale |
|---|---|---|---|
| Feeding buffer (Phase 2 → Phase 3) | 5 business days | Between Phase 2 UAT sign-off and Phase 3 kick-off | Protects critical path from UAT overrun |
| Feeding buffer (Phase 3 → Phase 4) | 5 business days | Between Phase 3 gate and Go/No-Go decision | Protects Go-Live from training or dry-run delay |
| Sprint velocity buffer | 15% velocity reduction assumed | All Phase 2 sprint capacity planning | Vendor-dependent sprints historically deliver 10–20% below plan |
| Management time reserve | Not scheduled (held in financial baseline) | Available via change control if needed | Schedule compression activities funded if required |

**Float management rule:** Any work package consuming more than 50% of its total float must be escalated to the PM for assessment. Near-critical path (< 3 weeks float) is reviewed at every fortnightly schedule review.

---

## 8. Schedule Performance Indicators

| Indicator | Baseline Target | Reporting Threshold |
|---|---|---|
| Schedule Performance Index (SPI) | ≥ 1.00 | Amber if SPI < 0.95; Red if SPI < 0.90 |
| Milestone Adherence Rate | 100% on-plan | Amber if 1 milestone at risk; Red if critical path milestone missed |
| Sprint Velocity vs. Plan | ≥ 85% of planned story points | Review if below 80% for 2 consecutive sprints |

**Status as of End of Phase 2 (30 Sep 2026):** SPI = 0.99 (GREEN). All Phase 2 milestones delivered on plan. M5 achieved 30 September 2026 as baselined.

---

## 9. Change History

| Version | Date | Change Description | Approved By | Impact |
|---|---|---|---|---|
| 1.0 | 15 Jan 2026 | Initial schedule baseline approved | Alex Rivera / Steering Committee | N/A — initial baseline |

*No approved schedule changes to date. Schedule remains at Baseline v1.0.*

---

## 10. Approval Record

| Role | Name | Signature / Approval | Date |
|---|---|---|---|
| Project Manager | Jordan Patel | Approved | 15 Jan 2026 |
| Project Sponsor | Alex Rivera | Approved | 15 Jan 2026 |
| Steering Committee Chair | Marcus Chen | Approved | 15 Jan 2026 |
| IT Operations Lead | Priya Nair | Reviewed | 14 Jan 2026 |
| PMO Representative | Sandra Kowalski | Reviewed | 14 Jan 2026 |

---

*Example for: Schedule Baseline*
*Scenario: Meridian CRM Modernization — Nexus Solutions Ltd. (fictional)*
*See template file: artifacts/planning-and-baselines/A15-schedule-baseline-template.md*
*See definition file: artifacts/planning-and-baselines/A15-schedule-baseline-definition.md*
