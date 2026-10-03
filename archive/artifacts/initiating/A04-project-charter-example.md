---
artifact_id: A04
name: Project Charter
example_version: "1.0.0"
status: "Example · Active"
scenario: "Meridian CRM Modernization — Nexus Solutions Ltd. (fictional, anonymized)"
---

## [A04] — Project Charter | Example

> **Example notice:** This file contains a realistic but entirely fictional example of a completed Project Charter. All project names, organizations, people, and data are fabricated for illustration purposes only. This is not a real project record. Use this file as a reference when completing the blank template.

---

## Project Identification

| Field | Value |
|---|---|
| **Project Name** | Meridian CRM Modernization |
| **Project Reference** | NSL-PRJ-2026-004 |
| **Programme / Portfolio** | Digital Transformation Programme 2026–2028 |
| **Sponsor** | Alex Rivera, VP Customer Experience |
| **Project Manager** | Jordan Patel, Senior Project Manager |
| **Charter Version** | 1.0 |
| **Charter Date** | 15 January 2026 |
| **Planned Start Date** | 19 January 2026 |
| **Planned End Date** | 30 June 2027 |
| **Total Duration** | 18 months |

---

## 1. Project Purpose and Justification

Nexus Solutions Ltd. currently operates a legacy on-premises CRM system (DataTrack v4.2) that was implemented in 2011. The system suffers from frequent performance outages, lacks mobile access capability, and cannot support the integration requirements of modern sales and customer support workflows. Licence renewal costs for DataTrack are projected to increase by 38% in 2027, and the vendor has announced end-of-life status for the platform effective December 2026.

The Meridian CRM Modernization project will replace DataTrack with a cloud-based CRM platform (Salesforce Sales Cloud and Service Cloud), migrating 15 years of customer and sales data, integrating the platform with the existing SAP ERP system and Microsoft Exchange email infrastructure, and training all 280 affected users. Successful delivery will reduce system downtime by an estimated 90%, improve sales cycle visibility for regional managers, enable remote access for field teams, and position the business to comply fully with evolving GDPR obligations under the EU Digital Markets Act.

---

## 2. Project Objectives

The following SMART objectives define success for this project:

1. **Platform Deployment:** Deploy Salesforce Sales Cloud and Service Cloud to production, with all core modules configured and user-accepted, by 31 March 2027 — as measured by sign-off on the System Acceptance Test report.
2. **Data Migration:** Migrate 100% of active customer records (estimated 47,000 records) and a minimum of 80% of historical interaction data from DataTrack to Salesforce, with a data quality score of ≥ 97%, by 28 February 2027.
3. **User Adoption:** Achieve a training completion rate of ≥ 95% across all 280 affected users and a 30-day post-go-live system utilisation rate of ≥ 80%, by 30 June 2027 — as measured by Salesforce adoption dashboards.
4. **Budget Compliance:** Complete the project within the approved budget of €2,400,000, with final cost variance not exceeding +5% of the approved baseline, by project close.

---

## 3. High-Level Scope

### 3.1 In Scope

- Selection, procurement, configuration, and deployment of Salesforce Sales Cloud and Service Cloud
- Migration of all active customer, account, opportunity, and case records from DataTrack v4.2
- Migration of historical interaction data (emails, call logs, notes) for the preceding 5 years
- Bi-directional integration with SAP ERP S/4HANA (customer master data, order sync)
- One-way integration with Microsoft Exchange (email-to-case routing)
- Role-based user provisioning and access management (SSO via Azure AD)
- GDPR compliance features: consent management, right-to-erasure workflow, data residency configuration (EU region)
- End-user training for Sales team (200 users) and Support team (80 users)
- Administrator and super-user training for IT Operations (8 users)
- Hypercare support period: 60 days post go-live
- Decommissioning of DataTrack v4.2 (data archival and server decommission)

### 3.2 Out of Scope

- Upgrade or replacement of SAP ERP S/4HANA (existing system remains in service)
- Replacement of Microsoft Exchange email platform
- Implementation of a Business Intelligence or advanced analytics layer (deferred to Phase 2)
- CRM integration with any third-party partner portals (deferred to Phase 2)
- Marketing automation module (Salesforce Marketing Cloud) — not included in this project
- Customer-facing self-service portal redesign

---

## 4. High-Level Deliverables

| # | Deliverable | Description |
|---|---|---|
| 1 | **Salesforce Platform (Configured)** | Fully configured Sales Cloud and Service Cloud instance, including all workflows, page layouts, custom objects, and reports required for sales and support operations |
| 2 | **Migrated Data Set** | Validated, cleansed, and fully migrated dataset in Salesforce, including customer records, accounts, opportunities, cases, and historical interactions |
| 3 | **System Integrations** | Operational bi-directional SAP ERP integration and Exchange email-to-case integration, tested and approved by IT Operations |
| 4 | **Training Programme** | Completed role-based training programme including training materials, e-learning modules, classroom sessions, and training completion records for all 280 users |
| 5 | **GDPR Compliance Package** | Documented GDPR compliance configuration, privacy impact assessment, consent management workflows, and Data Processing Agreement with Salesforce |

---

## 5. High-Level Milestones

| # | Milestone | Target Date | Description |
|---|---|---|---|
| M1 | Project Kick-Off | 19 Jan 2026 | Project formally initiated; team mobilised; Salesforce contract signed |
| M2 | Requirements and Design Complete | 30 Apr 2026 | Salesforce solution design approved; data migration strategy approved; integration architecture signed off |
| M3 | Development and Configuration Complete | 31 Oct 2026 | All Salesforce configuration complete; integrations built and unit-tested; data cleansing complete |
| M4 | User Acceptance Testing Complete | 31 Jan 2027 | UAT sign-off received from Sales and Support team leads; all critical defects resolved |
| M5 | Go-Live (Phased) | 31 Mar 2027 | Sales Cloud live for Sales team (Phase 1); Service Cloud live for Support team (Phase 2, 30 Apr 2027) |
| M6 | Project Close | 30 Jun 2027 | Hypercare complete; DataTrack decommissioned; lessons learned published; project formally closed |

---

## 6. Budget Authority

| Item | Amount |
|---|---|
| **Total Approved Budget** | €2,400,000 |
| **Salesforce Licences (3-year, prepaid)** | €780,000 |
| **Implementation & Configuration (Salesforce SI partner)** | €620,000 |
| **Data Migration & Integration (contracted)** | €310,000 |
| **Internal Resource Costs (allocated)** | €240,000 |
| **Training Programme** | €120,000 |
| **Infrastructure & Security** | €95,000 |
| **Change Management & Communications** | €75,000 |
| **Project Management** | €110,000 |
| **Contingency Reserve (10%)** | €50,000 (management reserve held by Sponsor) |

The Project Manager (Jordan Patel) is authorised to approve expenditure up to €25,000 per item without additional sponsor approval. The Sponsor (Alex Rivera) must co-approve all commitments above €25,000.

---

## 7. Key Stakeholders

| Name / Role | Organisation | Responsibility | Interest Level | Influence Level |
|---|---|---|---|---|
| Alex Rivera, VP Customer Experience | Nexus Solutions Ltd. | Project Sponsor; champion; budget authority | High | High |
| Jordan Patel, Senior PM | Nexus Solutions Ltd. | Project delivery; day-to-day management | High | High |
| Miriam Osei, Head of Sales | Nexus Solutions Ltd. | Primary business owner; Sales team requirements | High | High |
| David Kowalski, Head of IT Operations | Nexus Solutions Ltd. | Technical authority; infrastructure and security | High | High |
| Fatima Al-Rashid, Legal & Privacy Officer | Nexus Solutions Ltd. | GDPR compliance approval; DPA sign-off | Medium | High |
| Clara Bates, Support Team Lead | Nexus Solutions Ltd. | Support team requirements; UAT coordination | High | Medium |
| TechBridge Solutions (SI Partner) | External | Salesforce configuration, integration, migration delivery | High | Medium |
| Salesforce Inc. | External (Vendor) | Platform, licences, tier-1 support | Medium | Medium |
| Sales Team (200 users) | Nexus Solutions Ltd. | End users; training participants | High | Low |
| Support Team (80 users) | Nexus Solutions Ltd. | End users; training participants | Medium | Low |

---

## 8. High-Level Risks

| # | Risk | Likelihood | Impact | Initial Response |
|---|---|---|---|---|
| R01 | **Data Migration Complexity:** Legacy DataTrack data contains significant duplication, incomplete records, and non-standard formatting; migration could exceed planned effort and timeline | High | High | Engage data quality specialist; conduct data profiling assessment by end of Phase 1; build contingency in migration timeline |
| R02 | **User Adoption Resistance:** Sales team accustomed to legacy workflows; low adoption post go-live could negate business case | Medium | High | Appoint Change Champions within Sales and Support teams; run early engagement workshops; include adoption KPIs in project success criteria |
| R03 | **GDPR Compliance Gap:** Salesforce platform configuration may not fully satisfy EU data residency and consent management obligations, creating regulatory risk | Medium | High | Engage Legal & Privacy Officer from project initiation; conduct Privacy Impact Assessment before go-live; include GDPR sign-off as a milestone gate |

---

## 9. Assumptions

1. Salesforce Inc. will maintain the contracted platform SLA of 99.9% uptime throughout the deployment and hypercare period.
2. Key business stakeholders (Head of Sales, Support Team Lead) will be available to participate in requirements workshops, UAT, and training for a minimum of 20% of their working time during peak project phases.
3. The existing SAP ERP S/4HANA system will not undergo significant version upgrades during the integration development period (March–October 2026).

---

## 10. Constraints

1. The project must achieve full go-live before DataTrack v4.2 reaches vendor end-of-life on 31 December 2026 (phased go-live with core functionality by 31 October 2026 is the hard gate).
2. The total project cost must not exceed the approved budget of €2,400,000; any scope additions requiring budget above this ceiling must be approved by the CFO.
3. All personal data processed or stored within the new CRM platform must reside within EU data centres, in compliance with GDPR Article 46 obligations.

---

## 11. Project Manager Authority

Jordan Patel is authorised as Project Manager with the following authority:

- **Scope:** Approve minor scope changes (estimated effort ≤ 5 person-days) without Change Control Board review; escalate all other scope changes.
- **Schedule:** Adjust task sequencing and sprint planning within approved phase milestones; adjustments to milestone dates require Sponsor approval.
- **Budget:** Approve individual expenditures up to €25,000; approve use of contingency reserve up to €15,000 per incident; escalate above those thresholds.
- **Resources:** Assign and re-assign project team members within the agreed team structure; escalate requests for additional headcount.
- **Vendor:** Manage day-to-day relationship with TechBridge Solutions; contract amendments require Sponsor and Procurement co-approval.

---

## 12. Sponsor Sign-Off

By signing below, the Sponsor formally authorises the Meridian CRM Modernization project, confirms the budget allocation, and designates Jordan Patel as Project Manager with the authorities specified in this Charter.

| Role | Name | Signature | Date |
|---|---|---|---|
| **Project Sponsor** | Alex Rivera, VP Customer Experience | *(signed)* | 15 January 2026 |
| **Project Manager** | Jordan Patel, Senior Project Manager | *(signed)* | 15 January 2026 |
| **IT Authority** | David Kowalski, Head of IT Operations | *(signed)* | 15 January 2026 |

---

*Example for: Project Charter*
*Scenario: Meridian CRM Modernization — Nexus Solutions Ltd. (fictional)*
*See template file: artifacts/initiating/A04-project-charter.md*
*See definition file: artifacts/initiating/A04-project-charter-definition.md*
