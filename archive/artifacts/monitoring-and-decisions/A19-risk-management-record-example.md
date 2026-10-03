---
artifact_id: A19
name: Risk Management Record
example_version: "1.0.0"
status: "Example · Active"
scenario: "Meridian CRM Modernization — Nexus Solutions Ltd. (fictional, anonymized)"
---

## [A19] — Risk Management Record | Example

> **Example notice:** This file contains a realistic but entirely fictional example of a completed Risk Management Record. All project names, organizations, people, and data are fabricated for illustration purposes only. This is not a real project record. Use this file as a reference when completing the blank template.

---

## 1. Record Identification

| Field | Value |
|---|---|
| Project Name | Meridian CRM Modernization |
| Project ID | NXS-2026-CRM-001 |
| Project Manager | Jordan Patel |
| Sponsor | Alex Rivera, VP Customer Experience |
| Risk Record Version | 2.3 |
| Record Date | 30 September 2026 |
| Review Cycle | Fortnightly (bi-weekly sprint reviews + monthly steering update) |
| Risk Methodology | PMI Practice Standard for Risk Management; 5×5 probability-impact matrix |
| Probability Scale | 1=Very Low (<10%), 2=Low (10–25%), 3=Medium (26–50%), 4=High (51–75%), 5=Very High (>75%) |
| Impact Scale | 1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Critical |
| Risk Appetite (Cost) | Tolerant up to €50k unmitigated cost impact; Averse above €100k |
| Risk Appetite (Schedule) | Tolerant up to 2-week delay; Averse above 4-week delay to critical path |
| Risk Owner Authority | PM approves responses up to €50k contingency; Sponsor above €50k |

---

## 2. Risk Summary Table

| Risk ID | Risk Title | Category | Probability (1–5) | Impact (1–5) | Score (P×I) | RAG | Status | Risk Owner |
|---|---|---|---|---|---|---|---|---|
| R-001 | Data quality issues in legacy CRM | Technical | 4 | 4 | 16 | 🔴 RED | Active — mitigation underway | Jordan Patel |
| R-002 | User adoption resistance — Sales team | People | 3 | 4 | 12 | 🟡 AMBER | Active — change programme live | Priya Nair (IT Ops) |
| R-003 | Vendor platform performance at scale | Technical | 2 | 3 | 6 | 🟢 GREEN | CLOSED — test passed Sep 2026 | DataPath PM |
| R-004 | GDPR compliance gap in legacy data transfer | Regulatory | 2 | 4 | 8 | 🟡 AMBER | Active — legal review Oct 2026 | Jordan Patel / Legal |
| R-005 | Key contractor unavailability in Phase 3 | Resource | 3 | 3 | 9 | 🟡 AMBER | Active — contract renewal in progress | Jordan Patel |
| R-006 | ERP integration complexity underestimated | Technical | 4 | 4 | 16 | 🟡 AMBER | REALIZED — cost absorbed; scope adjusted | Jordan Patel |
| R-007 | Budget overrun (ERP integration impact) | Financial | — | — | — | 🔴 REALIZED | Realized — contingency drawn; recovery plan active | Jordan Patel |
| R-008 | Executive sponsor change | Governance | 1 | 5 | 5 | 🟢 GREEN | Watch — escalation plan documented | Jordan Patel |

---

## 3. Risk Detail Records

---

### R-001 — Data Quality Issues in Legacy CRM

| Field | Detail |
|---|---|
| Risk ID | R-001 |
| Risk Title | Data quality issues in legacy CRM causing migration delays and rework |
| Category | Technical / Data |
| Date Identified | 14 January 2026 |
| Date Last Updated | 25 September 2026 |
| Risk Owner | Jordan Patel (PM) |
| Probability | 4 — High (51–75%) |
| Impact | 4 — Major |
| Risk Score | 16 / 25 |
| RAG | 🔴 RED |
| Trend | ↑ Increased (was AMBER 3×4=12 at Phase 1 close) |

**Risk Description:**
The legacy CRM (SalesForce Classic, 2011 implementation) contains approximately 8 years of uncontrolled data. Data profiling completed in September 2026 revealed higher-than-expected duplication (≈23% duplicate contact records vs. 10% assumed) and incomplete mandatory fields (≈12% of account records vs. 5% assumed). If not remediated, poor data quality will cause migration failures, extended dry runs, and potential go-live delay.

**Cause:** Legacy system has had minimal data governance since 2018. Multiple data entry workflows with no deduplication controls. Three separate data import events (2019, 2021, 2023) added records without cleaning.

**Effect:** Data cleanse and remediation effort significantly higher than planned. Risk to Phase 3 data migration timeline (WP3.1–3.4). If dry run #1 fails, Phase 3 schedule has limited float to absorb a repeat run.

**Current Mitigation Response (Active):**
- Data quality audit commissioned (DataPath data specialist + internal IT Ops) — commencing 14 October 2026
- Automated deduplication tooling (DataFlux DQ module) being configured — delivery expected 31 October 2026
- Data cleanse sprints added to Phase 3 plan (2 × 2-week sprints before dry run #1)
- Dry run #1 date adjusted from 31 Oct to 14 Nov 2026 to accommodate cleanse (within float)

**Contingency Plan:**
If dry run #1 fails quality threshold (>5% migration error rate): trigger a third dry-run option (already scheduled as WP3.5 reserve). This would consume remaining Phase 3 float and require escalation to sponsor.

**Residual Risk (post-mitigation):** Probability 3 / Impact 4 = Score 12 (AMBER) — acceptable if data cleanse achieves target duplication rate <5%.

**Monitoring:** Weekly progress report from Data Migration Lead; reviewed at every fortnightly risk review.

---

### R-002 — User Adoption Resistance — Sales Team

| Field | Detail |
|---|---|
| Risk ID | R-002 |
| Risk Title | Resistance to new CRM from Sales team reducing adoption and realised benefits |
| Category | People / Change Management |
| Date Identified | 14 January 2026 |
| Date Last Updated | 30 September 2026 |
| Risk Owner | Priya Nair, IT Operations Lead |
| Probability | 3 — Medium (26–50%) |
| Impact | 4 — Major |
| Risk Score | 12 / 25 |
| RAG | 🟡 AMBER |
| Trend | → Stable |

**Risk Description:**
The Sales team (200 users) has used the legacy CRM for 8+ years and has developed deeply embedded workflows. Early stakeholder interviews (Phase 1) identified concerns about the new platform's interface, reporting changes, and mobile functionality. If adoption is low post-go-live, the primary business benefit (improved sales velocity and pipeline visibility) will not be realized.

**Cause:** Change fatigue (two previous system migrations in 5 years), perception that the new system adds administrative burden, lack of early involvement in requirements shaping.

**Effect:** Low system usage rates post-go-live; manual workarounds adopted; benefits tracking (A02) metrics not met; potential reputational impact on project and IT Operations.

**Current Mitigation Response (Active):**
- Change Management Programme led by HR Business Partner (Sophie Andersen) — commenced March 2026
- Sales Champion Network established: 12 Sales team volunteers trained as "CRM Champions" — active since May 2026; running biweekly Q&A sessions
- Requirements workshops in Phase 1 incorporated Sales Director (Tomás Herrera) — key interface preferences included in Sprint backlog
- User acceptance testing involved 8 Sales team end-users — positive feedback on mobile app (key concern addressed)
- Communications plan distributing fortnightly "CRM Modernization Update" newsletter to all 200 Sales users — 67% open rate maintained

**Contingency Plan:**
If post-go-live adoption metrics (system login rate target: 85% of users within 30 days) fall below 70%: activate intensive hypercare support (additional DataPath consultant on-site for 4 weeks). Estimated cost: €18,000 (within contingency reserve).

**Residual Risk (post-mitigation):** Probability 2 / Impact 4 = Score 8 (AMBER) — monitored to go-live.

**Monitoring:** Champion network engagement rate tracked monthly. Adoption metrics tracked from go-live (A02 benefits record).

---

### R-003 — Vendor Platform Performance at Scale (CLOSED)

| Field | Detail |
|---|---|
| Risk ID | R-003 |
| Risk Title | CloudAxis CRM platform fails to meet performance requirements at projected user load |
| Category | Technical / Vendor |
| Date Identified | 14 January 2026 |
| Date Closed | 30 September 2026 |
| Risk Owner | DataPath PM (Wei Liang) |
| Status | ✅ CLOSED — risk resolved |

**Closure Rationale:**
Performance testing conducted 15–20 September 2026 simulated 340 concurrent users (120% of planned peak of 280). All critical user journeys (contact search, opportunity update, pipeline report generation) met or exceeded defined response time thresholds (≤3 seconds at 95th percentile). Average response time: 1.4 seconds. No degradation observed at peak load. Risk is no longer credible given testing evidence. Closed with Steering Committee acknowledgement.

---

### R-004 — GDPR Compliance Gap in Legacy Data Transfer

| Field | Detail |
|---|---|
| Risk ID | R-004 |
| Risk Title | Legacy CRM data contains non-GDPR-compliant records that cannot be migrated without legal review |
| Category | Regulatory / Legal |
| Date Identified | 28 February 2026 |
| Date Last Updated | 30 September 2026 |
| Risk Owner | Jordan Patel (PM) / Legal (Elena Voss, Privacy Counsel) |
| Probability | 2 — Low (10–25%) |
| Impact | 4 — Major |
| Risk Score | 8 / 25 |
| RAG | 🟡 AMBER |
| Trend | → Stable |

**Risk Description:**
The legacy CRM contains contact records dating to 2011 — prior to GDPR enforcement (May 2018). A proportion of these records may lack valid lawful basis for processing under GDPR. If non-compliant records are migrated to the new cloud platform without review, Nexus Solutions could face a regulatory breach. Additionally, cross-border data transfer rules (EU–UK data bridge) must be confirmed for records belonging to UK-based contacts.

**Cause:** No data subject consent audit was conducted at GDPR enforcement in 2018; the legal basis for processing was assumed rather than documented for older records.

**Effect:** Data migration halt if legal review identifies material compliance gap; potential ICO notification obligation; reputational and financial risk (up to 4% global annual turnover under GDPR Art. 83).

**Current Mitigation Response (Active):**
- Legal/Privacy review scoping meeting confirmed for 20 October 2026 (Elena Voss + Jordan Patel)
- Data profiling output (Sep 2026) to be used as input to legal review — identify volume of pre-2018 records and data subject categories
- Privacy-by-design review of migration architecture completed in Phase 2 — CloudAxis platform confirmed to store EU data in Frankfurt region
- GDPR gate exit criterion added to Phase 3 gate checklist — sign-off required before production migration

**Contingency Plan:**
If legal review identifies a material compliance gap: quarantine pre-2018 records, migrate only GDPR-clean data, and launch a targeted data subject re-consent campaign (estimated 4-week effort; cost ~€30k). This would not prevent go-live but would reduce migrated contact volume.

**Residual Risk (post-mitigation):** Probability 1 / Impact 4 = Score 4 (GREEN) — if legal review confirms compliance.

**Monitoring:** Legal review completion tracked as gate criterion for Phase 3 close (M7 dependencies).

---

### R-005 — Key Contractor Unavailability in Phase 3

| Field | Detail |
|---|---|
| Risk ID | R-005 |
| Risk Title | DataPath Consulting key resources unavailable during Phase 3 due to contract gaps or personnel change |
| Category | Resource |
| Date Identified | 1 April 2026 |
| Date Last Updated | 30 September 2026 |
| Risk Owner | Jordan Patel (PM) |
| Probability | 3 — Medium (26–50%) |
| Impact | 3 — Moderate |
| Risk Score | 9 / 25 |
| RAG | 🟡 AMBER |
| Trend | → Stable |

**Risk Description:**
DataPath Consulting's current contract expires 31 March 2027, mid-Phase 3. Key delivery resources — particularly the CRM configuration lead (David Park) and data migration specialist (Ana Souza) — have been central to Phase 2 delivery. If contract renewal is delayed, or if either resource is reassigned by DataPath to another engagement, Phase 3 delivery capacity will be impaired.

**Cause:** T&M contract with no resource lock-in beyond 30-day notice. Phase 3 resource commitment from DataPath not formally confirmed beyond current contract end.

**Effect:** Configuration and data migration deliverables delayed; knowledge transfer incomplete; recruitment of replacement resources requires 6–8 weeks minimum lead time.

**Current Mitigation Response (Active):**
- Contract renewal negotiations commenced 30 September 2026 (Jordan Patel + Nexus Procurement)
- DataPath account manager has confirmed David Park and Ana Souza availability in principle through June 2027 — written confirmation requested
- Knowledge transfer plan drafted: all configuration decisions documented in A20 (Decision Log) and Confluence; no single-person dependencies for documented tasks
- Backup resource plan: IT Ops team member (Raj Mehta) cross-trained on platform administration during Phase 2 — can provide continuity for Tier 1 configuration tasks

**Contingency Plan:**
If DataPath resource unavailable for >2 weeks in Phase 3: activate backup resource (Raj Mehta) for configuration support and engage CloudAxis professional services (pre-agreed access as per platform contract) for specialist data migration assistance. Estimated uplift: €35,000.

**Residual Risk (post-mitigation):** Probability 2 / Impact 3 = Score 6 (GREEN) — if contract renewal confirmed.

**Monitoring:** Contract renewal status reviewed weekly from 1 October 2026.

---

### R-006 — ERP Integration Complexity Underestimated

| Field | Detail |
|---|---|
| Risk ID | R-006 |
| Risk Title | ERP integration scope and technical complexity significantly higher than estimated at Phase 1 |
| Category | Technical / Scope |
| Date Identified | 12 May 2026 |
| Date Last Updated | 22 September 2026 |
| Risk Owner | Jordan Patel (PM) |
| Probability | — (realized) |
| Impact | — (realized) |
| Risk Score | REALIZED |
| RAG | 🟡 AMBER (managed) |
| Status | Risk has materialized; scope adjusted; cost absorbed |

**Risk Description (at identification):**
Integration between the new CloudAxis CRM and the existing ERP (SynergyERP) was estimated at 8 weeks effort in the Phase 1 business case. Following Phase 2 Sprint 4 technical discovery, the actual API complexity was found to require a bespoke middleware connector not anticipated in the original estimate. An architecture review was convened.

**What Happened:**
- Architecture Review Board convened 20 June 2026
- Decision: build a lightweight integration service (REST API middleware) using DataPath's integration accelerator toolkit
- Additional effort: 14 weeks (vs. original 8 weeks estimate) — additional 6 weeks absorbed through scope re-sequencing and parallel working
- Cost impact: €52,000 above baseline implementation services budget
- Schedule impact: zero — additional work absorbed within Phase 2 float and via re-sequencing of lower-priority Sprint items

**Resolution Actions Taken:**
- Architecture Review Board approved revised integration design (22 Sep 2026)
- €40,000 drawn from contingency reserve (CR-01, Aug 2026)
- Remaining €12,000 being offset through Phase 3 efficiency measures
- Lessons learned captured: see A21 (LL-001)
- Scope adjustment formally logged in A12 (Scope Baseline): integration design updated to include middleware component

**Residual Status:** Risk is REALIZED and MANAGED. Cost impact within contingency thresholds. Schedule impact nil. Risk closed as a schedule/scope risk; financial tail being monitored under R-007.

---

### R-007 — Budget Overrun (ERP Integration Impact)

| Field | Detail |
|---|---|
| Risk ID | R-007 |
| Risk Title | Project budget overrun due to ERP integration cost impact |
| Category | Financial |
| Date Realized | 12 August 2026 |
| Date Last Updated | 30 September 2026 |
| Risk Owner | Jordan Patel (PM) |
| Status | REALIZED — active financial management |

**Description:**
Following the ERP integration complexity realization (R-006), total implementation services spend has exceeded the Phase 2 implementation services baseline by €52,000. €40,000 has been drawn from the contingency reserve. The remaining €12,000 is being tracked as an active cost pressure.

**Current Financial Position:**
- Contingency reserve drawn: €40,000 (CR-01)
- Remaining contingency: €200,000
- EAC (CPI-adjusted): €2,397,155 — within BAC
- Conservative EAC scenario: €2,473,000 — €73,000 above BAC
- Recovery plan: Phase 3 efficiency targets set with DataPath; PM targeting CPI recovery to ≥0.99 by Phase 3 midpoint

**Actions:**
- Phase 3 efficiency review in progress with DataPath (target: reduce T&M sprint ceremony costs by 15%)
- PM considering fixed-price conversion for Phase 3 data migration workstream — negotiations in progress
- Monthly cost review with CFO (Diane Okonkwo) established; next review: 14 October 2026

**Monitoring:** Monthly EVM report; EAC vs. BAC tracking until project close.

---

### R-008 — Executive Sponsor Change

| Field | Detail |
|---|---|
| Risk ID | R-008 |
| Risk Title | Loss of executive sponsor (Alex Rivera) during project delivery |
| Category | Governance |
| Date Identified | 14 January 2026 |
| Date Last Updated | 30 September 2026 |
| Risk Owner | Jordan Patel (PM) |
| Probability | 1 — Very Low (<10%) |
| Impact | 5 — Critical |
| Risk Score | 5 / 25 |
| RAG | 🟢 GREEN |
| Trend | → Stable |

**Risk Description:**
Alex Rivera (VP Customer Experience) is the named project sponsor and primary executive champion. The project carries significant organizational change and financial commitment (€2.4M). Loss of the sponsor through resignation, role change, or extended leave would remove executive authority, reduce decision-making speed, and risk loss of strategic alignment and budget protection.

**Cause:** Normal executive mobility in a 18-month programme; organizational restructuring possible.

**Effect:** Decision delays; potential loss of priority/funding; re-scoping risk if new sponsor has different priorities; change management programme disruption.

**Current Watch Actions:**
- Escalation and succession plan documented: Deputy Sponsor identified as Marcus Chen (CTO), who has been briefed and participates in Steering Committee
- A02 (Benefits Management Record) maintained in detail — new sponsor can be onboarded to benefit case quickly
- Governance documentation (A03 Governance Plan) includes sponsor succession clause
- Jordan Patel maintains direct relationship with both Alex Rivera and Marcus Chen

**Contingency Plan:**
If sponsor change occurs: immediate briefing of incoming sponsor using A02, A03, A15, A16. Governance plan succession clause activated. Steering Committee convened within 5 business days. PM to request 30-day decision moratorium while new sponsor is onboarded.

**Monitoring:** Quarterly risk review; no current signal of sponsor departure.

---

## 4. Risk Response Tracking

| Risk ID | Response Type | Response Action | Target Date | Status | Effectiveness |
|---|---|---|---|---|---|
| R-001 | Mitigate | Data quality audit commissioned | 14 Oct 2026 | In progress | TBD |
| R-001 | Mitigate | DataFlux DQ module configuration | 31 Oct 2026 | In progress | TBD |
| R-001 | Mitigate | Data cleanse sprints added to Phase 3 | Nov 2026 | Planned | TBD |
| R-002 | Mitigate | Sales Champion Network (12 champions) | Ongoing | Active | Positive — attendance and engagement tracked |
| R-002 | Mitigate | Change Management Programme (Sophie Andersen) | Ongoing | Active | Positive — no escalations from Sales Director |
| R-003 | Accept | Performance test passed — risk closed | 30 Sep 2026 | ✅ Closed | Effective — risk eliminated |
| R-004 | Mitigate | Legal review scoping meeting | 20 Oct 2026 | Planned | TBD |
| R-004 | Mitigate | GDPR gate exit criterion added to Phase 3 gate | Phase 3 gate | Planned | TBD |
| R-005 | Mitigate | DataPath contract renewal negotiation | 31 Oct 2026 | In progress | TBD |
| R-005 | Mitigate | Knowledge transfer plan — documentation | Ongoing | Active | Good progress — configuration decisions documented |
| R-006 | Accepted | Architecture review + scope adjustment | 22 Sep 2026 | ✅ Complete | Effective — cost absorbed within contingency |
| R-007 | Mitigate | Phase 3 efficiency review with DataPath | 14 Oct 2026 | In progress | TBD |
| R-007 | Mitigate | Fixed-price conversion for Phase 3 data migration | 31 Oct 2026 | Under negotiation | TBD |
| R-008 | Accept/Plan | Deputy Sponsor briefed; escalation plan documented | Ongoing | Watch | Stable — no signal of change |

---

## 5. Risk Register Metrics

| Metric | Value | Notes |
|---|---|---|
| Total risks identified (cumulative) | 12 | 4 closed/resolved not shown in active register |
| Active risks | 6 | R-001, R-002, R-004, R-005, R-007, R-008 |
| Realized risks | 2 | R-006 (technical), R-007 (financial) |
| Closed risks | 2 | R-003 (performance test), R-009 (staff onboarding delay, closed Jul 2026) |
| RED risks | 1 | R-001 (data quality) |
| AMBER risks | 4 | R-002, R-004, R-005, R-007 |
| GREEN risks | 2 | R-003 (closed), R-008 |
| Total contingency reserve remaining | €200,000 | After CR-01 drawdown of €40k |
| Management reserve remaining | €60,000 | Untouched |

---

## 6. Next Risk Review

| Activity | Date | Participants |
|---|---|---|
| Phase 3 Kick-Off risk review | 14 October 2026 | Jordan Patel, DataPath PM, IT Ops Lead, Sponsor |
| Fortnightly risk review (Sprint 9) | 28 October 2026 | PM, Data Migration Lead, DataPath PM |
| Steering Committee risk update | 14 October 2026 | Full Steering Committee |

---

*Example for: Risk Management Record*
*Scenario: Meridian CRM Modernization — Nexus Solutions Ltd. (fictional)*
*See template file: artifacts/monitoring-and-decisions/A19-risk-management-record-template.md*
*See definition file: artifacts/monitoring-and-decisions/A19-risk-management-record-definition.md*
