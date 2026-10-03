---
artifact_id: A08
name: Scope and Requirements Backlog
example_version: "1.0.0"
status: "Example · Active"
scenario: "Meridian CRM Modernization — Nexus Solutions Ltd. (fictional, anonymized)"
---

## [A08] — Scope and Requirements Backlog | Example

> **Example notice:** This file contains a realistic but entirely fictional example of a completed Scope and Requirements Backlog. All project names, organizations, people, and data are fabricated for illustration purposes only. This is not a real project record. Use this file as a reference when completing the blank template.

---

## Project Identification

| Field | Value |
|---|---|
| **Project Name** | Meridian CRM Modernization |
| **Project Reference** | NSL-PRJ-2026-004 |
| **Project Manager** | Jordan Patel |
| **Document Version** | 1.2 |
| **Document Date** | 30 April 2026 |
| **Approved By** | Alex Rivera (Sponsor); Miriam Osei (Head of Sales); Clara Bates (Support Lead) |

---

## 1. Scope Definition

### 1.1 In-Scope Items

| # | In-Scope Item | Phase | Notes |
|---|---|---|---|
| IS-01 | Salesforce Sales Cloud configuration for Sales team (200 users) | Phase 2 | Includes accounts, contacts, opportunities, pipeline reporting, activity tracking |
| IS-02 | Salesforce Service Cloud configuration for Support team (80 users) | Phase 2 | Includes case management, SLA management, knowledge base, email-to-case |
| IS-03 | Migration of all active customer, account, opportunity, and case records from DataTrack v4.2 | Phase 3 | ~47,000 customer records; ~12,000 opportunities; ~85,000 historical cases |
| IS-04 | Migration of 5-year historical interaction data (emails, call logs, notes) from DataTrack | Phase 3 | Data from 2021–2025 inclusive |
| IS-05 | Bi-directional integration with SAP ERP S/4HANA (customer master data sync, order status) | Phase 2 | Real-time sync for customer master; batch sync (nightly) for order data |
| IS-06 | One-way integration with Microsoft Exchange (email-to-case auto-routing) | Phase 2 | Inbound email rules; automatic case creation from support@nexussolutions.eu |
| IS-07 | Role-based user provisioning and SSO via Azure Active Directory | Phase 1 | All 280 users provisioned; role profiles: Sales Rep, Sales Manager, Support Agent, Support Manager, Admin |
| IS-08 | GDPR compliance configuration: EU data residency, consent management, right-to-erasure workflow | Phase 2 | Salesforce EU org; consent fields on contact records; erasure workflow per DPA |
| IS-09 | End-user training for all 280 users (role-based; Sales and Support tracks) | Phase 4 | Blended: e-learning + instructor-led workshops + job aids |
| IS-10 | Administrator and super-user training for IT Operations (8 users) | Phase 4 | Salesforce admin certification preparation included |
| IS-11 | Hypercare support period (60 days post go-live) | Phase 5 | TechBridge Solutions on-site support days + ticket SLA commitment |
| IS-12 | Decommissioning of DataTrack v4.2 (data archival, server shutdown, licence termination) | Phase 5 | Final archive snapshot stored for 7 years per retention policy |

### 1.2 Out-of-Scope Items

| # | Out-of-Scope Item | Rationale | Owner of Deferred Work |
|---|---|---|---|
| OS-01 | Upgrade or replacement of SAP ERP S/4HANA | SAP remains unchanged; this project integrates with existing ERP only | IT Operations |
| OS-02 | Replacement of Microsoft Exchange email platform | Exchange replacement is a separate Digital Infrastructure programme workstream | IT Infrastructure Team |
| OS-03 | Business Intelligence / advanced analytics layer | Deferred to Phase 2 of Digital Transformation Programme (2028) | Analytics Centre of Excellence |
| OS-04 | Salesforce Marketing Cloud implementation | Marketing automation not in scope for this project phase | Marketing Operations |
| OS-05 | Customer-facing self-service portal redesign | Deferred; pending Customer Experience strategy review | VP Customer Experience |
| OS-06 | Integration with third-party partner portals | Deferred to Phase 2 of the CRM programme | Jordan Patel (future project) |
| OS-07 | Historical data migration beyond 5 years (pre-2021 records) | Pre-2021 data to be archived; cost-benefit does not support full migration | IT Operations (archive) |

---

## 2. Requirements Backlog

*Priority scale: Must Have (MH) / Should Have (SH) / Could Have (CH)*
*Status: Approved / Pending Review / Deferred*

| Req ID | Requirement Statement | Category | Priority | Source | Status |
|---|---|---|---|---|---|
| REQ-001 | The system shall provide a unified customer record view displaying account details, contact history, open opportunities, and open cases on a single screen for all Sales and Support users | Functional | MH | Miriam Osei, Clara Bates (Workshop 1, Feb 2026) | Approved |
| REQ-002 | The system shall enable Sales Managers to view and filter the full sales pipeline by region, product line, and opportunity stage in real time, without requiring manual data export | Functional | MH | Miriam Osei (Workshop 1, Feb 2026) | Approved |
| REQ-003 | The system shall automatically create a support case from any inbound email sent to support@nexussolutions.eu and assign it to the appropriate Support team queue based on configurable routing rules | Functional | MH | Clara Bates (Workshop 2, Feb 2026) | Approved |
| REQ-004 | The system shall enforce SLA timers on support cases, automatically escalating cases that breach first-response or resolution SLA thresholds to the Support Manager queue | Functional | MH | Clara Bates (Workshop 2, Feb 2026) | Approved |
| REQ-005 | The system shall synchronise customer master data (account name, address, contact details, account status) bi-directionally with SAP ERP S/4HANA with a maximum synchronisation lag of 15 minutes for real-time fields | Functional | MH | David Kowalski (Integration Workshop, Mar 2026) | Approved |
| REQ-006 | The system shall display order status data from SAP ERP on the customer account record, refreshed via nightly batch synchronisation, visible to both Sales and Support users | Functional | SH | Miriam Osei, Clara Bates (Workshop 3, Mar 2026) | Approved |
| REQ-007 | The system shall store all personal data (customer records, contact information, interaction history) exclusively within Salesforce data centres located in the European Union, in compliance with GDPR Article 46 | Compliance | MH | Fatima Al-Rashid (Privacy Workshop, Mar 2026) | Approved |
| REQ-008 | The system shall provide a configurable consent management field on every Contact record, recording marketing consent status (Opted In / Opted Out / Not Set) with a timestamp and source of consent | Compliance | MH | Fatima Al-Rashid (Privacy Workshop, Mar 2026) | Approved |
| REQ-009 | The system shall provide a right-to-erasure workflow that, upon request submission, flags the relevant Contact record for anonymisation, routes the request to the Legal & Privacy team for approval, and executes anonymisation within 72 hours of approval | Compliance | MH | Fatima Al-Rashid (Privacy Workshop, Mar 2026) | Approved |
| REQ-010 | The system shall achieve a page load time of ≤ 3 seconds for standard record views (account, contact, opportunity, case) under normal operating conditions (up to 280 concurrent users) | Non-Functional | MH | David Kowalski (Technical Review, Apr 2026) | Approved |
| REQ-011 | The system shall provide single sign-on (SSO) for all 280 users via integration with the Nexus Solutions Azure Active Directory tenant, eliminating the need for separate Salesforce credentials | Non-Functional | MH | David Kowalski (Technical Review, Apr 2026) | Approved |
| REQ-012 | The system shall support role-based access control (RBAC), ensuring that Sales users cannot access Support case data beyond their own interactions, and Support users cannot view confidential sales opportunity financial data | Non-Functional | MH | David Kowalski; Fatima Al-Rashid (Security Review, Apr 2026) | Approved |
| REQ-013 | The system shall maintain 99.5% availability during core business hours (07:00–21:00 CET, Monday–Friday), excluding planned maintenance windows communicated ≥ 5 business days in advance | Non-Functional | MH | David Kowalski (Technical Review, Apr 2026) | Approved |
| REQ-014 | The migrated customer dataset shall achieve a data quality score of ≥ 97% as measured by the agreed data quality scorecard (completeness, accuracy, consistency, uniqueness dimensions) prior to go-live cut-over | Data Quality | MH | Jordan Patel; Miriam Osei (Data Workshop, Apr 2026) | Approved |

---

## 3. WBS Summary (Work Package Level)

| WBS Code | Work Package | Description | Estimated Effort | Phase |
|---|---|---|---|---|
| **1.0** | **Project Management** | Project planning, monitoring and control, reporting, governance, change management, risk management, project close | 480 person-days | All phases |
| **2.0** | **Design and Architecture** | Requirements elaboration, solution design, data migration strategy, integration architecture, GDPR privacy impact assessment, design sign-off | 120 person-days | Phase 1 |
| **3.0** | **Platform Configuration and Integration** | Salesforce Sales Cloud and Service Cloud configuration; SAP ERP integration build and test; Exchange integration build and test; SSO and RBAC configuration; GDPR compliance features; UAT support | 380 person-days | Phase 2 |
| **4.0** | **Data Migration** | Data profiling and cleansing; migration script development; test migrations (3 cycles); final cut-over migration; post-migration validation | 160 person-days | Phase 3 |
| **5.0** | **Training and Change Management** | Training needs analysis; training material development (e-learning + ILT); training delivery for 280 users; change champion programme; adoption monitoring; communications | 110 person-days | Phase 4 |
| **6.0** | **Hypercare and Closedown** | Post go-live support (60 days); DataTrack decommission; lessons learned; project closure report; archive | 50 person-days | Phase 5 |

---

## 4. Key Assumptions

1. The DataTrack v4.2 system will remain accessible and stable for data extraction purposes through to the planned cut-over date (28 February 2027).
2. Business stakeholders (Miriam Osei, Clara Bates) will dedicate a minimum of 1 day per week to requirements validation, UAT, and training participation during peak activity phases (April–October 2026 and January 2027).
3. Salesforce Sales Cloud and Service Cloud licences purchased cover all required features included in this requirements backlog; no additional licence modules will be needed.
4. The SAP S/4HANA system API is available and documented; integration access will be granted by IT Operations before the integration development phase begins (by 1 April 2026).

---

## 5. Key Constraints

1. All requirements relating to GDPR compliance (REQ-007, REQ-008, REQ-009) must be met prior to any production data being loaded into the Salesforce system; Legal & Privacy sign-off is a hard gate.
2. The requirements baseline (this document v1.x) is frozen after Sponsor approval on 30 April 2026; all subsequent additions or changes must follow the tiered change control process (TD-02, A06 Tailoring Decision Record).
3. Integration development with SAP ERP must not require changes to SAP configuration, data models, or ABAP code; all integration logic must reside on the Salesforce / middleware side.

---

## 6. Traceability Notes

Requirements in this backlog are traced to:

- **Business Case:** NSL Digital Transformation Business Case v2.1 (approved October 2025)
- **Project Charter:** A04 Project Charter v1.0 (approved January 2026)
- **Stakeholder Inputs:** Requirements workshop notes (Workshops 1–4, February–April 2026) — stored in project SharePoint: *NSL-PRJ-2026-004 / Requirements / Workshop Notes*
- **Test Coverage:** All MH requirements mapped to UAT test cases in the Test Plan (artifact A17)

---

*Example for: Scope and Requirements Backlog*
*Scenario: Meridian CRM Modernization — Nexus Solutions Ltd. (fictional)*
*See template file: artifacts/planning-and-baselines/A08-scope-requirements-backlog.md*
*See definition file: artifacts/planning-and-baselines/A08-scope-requirements-backlog-definition.md*
