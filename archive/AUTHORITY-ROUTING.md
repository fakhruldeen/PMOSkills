---
gov_id: AUTHORITY-ROUTING
gov_name: Authority Routing and Decision Threshold Model
version: "1.0.1"
status: Active
authority: PMBOK8 Primary
supersedes: none
file_path: "AUTHORITY-ROUTING.md"
last_updated: "2026-06-03"
---

# AUTHORITY-ROUTING.md
**Repository:** PMO Skill Repository  
**Version:** 1.0.1  
**Authority:** Artifacts-Authorities-V-1.1.md · PMBOK8 Governance Performance Domain §2.1  
**Purpose:** Single reference for decision routing. Use this file in any skill, agent, or MCP tool that needs to route a decision to the correct approval authority.

---

## Core Routing Principles

1. Authority is assigned by **decision type, threshold, risk, and governance layer** — not by seniority alone.
2. **Project, portfolio, and PMO governance remain separate** unless a documented escalation path joins them.
3. The **project manager owns routine operational decisions** within delegated limits.
4. The **sponsor or project governing body** approves decisions that change value assumptions, authority boundaries, or major commitments.
5. **PMO authorities** govern PMO services, methods, and improvement priorities; they do not automatically override project governance.
6. **Portfolio authorities** govern sequencing, priority, and shared-capacity trade-offs across initiatives.
7. **Specialist authorities** (procurement, legal, security, privacy, finance, quality, HR) approve decisions in their domains when policy requires it.

---

## Governance Layer Reference

| Layer | Primary Purpose | Typical Authority Owner | Typical Decision Scope |
|-------|----------------|------------------------|----------------------|
| Organizational Governance | Enterprise direction, policy, compliance | Executive leadership, governing body | Strategy, policy, enterprise compliance |
| OPM Governance | Strategic alignment across portfolios/programs/projects | OPM governing body, portfolio forums | Cross-enterprise alignment and investment prioritization |
| PMO Governance | PMO services, methods, enablement, improvement | PMO leader, PMO governance forum | Methods, templates, coaching, improvement backlog |
| Portfolio/Program/Project Governance | Prioritization, authorization, oversight, value delivery | Portfolio board, sponsor, project governing body | Intake, baseline changes, risk tolerance, acceptance, closure |
| Delivery Team Ways of Working | Day-to-day execution, cadence, collaboration | Project manager, delivery lead, team | Operational decisions within approved tolerances |

---

## T1–T4 Decision Threshold Model

| Band | Characteristics | Default Decision Authority |
|------|----------------|--------------------------|
| **T1 Operational** | Localized effect, low risk, inside approved plan tolerances | Project manager or designated lead |
| **T2 Controlled Change** | Material effect on one baseline or one major commitment, within project authority | Sponsor-delegated board, change authority, or functional authority |
| **T3 Governance Change** | Cross-baseline effect, major financial/schedule/value impact, or authority boundary shift | Project governing body or sponsor |
| **T4 Enterprise Portfolio** | Cross-project, strategic, regulatory, or enterprise-service impact | Portfolio authority, PMO governance forum, or executive authority |

Use organization-defined numeric thresholds where available. Apply qualitative routing otherwise.

---

## Decision Category Reference Table

| Decision Category | Default Authority | Escalate When |
|------------------|------------------|---------------|
| Routine delivery coordination | Project manager or delivery lead | Crosses delegated tolerance, impacts another project, or changes approved baselines |
| Team operating model and responsibilities | Project manager or delivery lead | Changes formal authority boundaries, labor commitments, or organization structure |
| Resource acquisition and allocation | Project manager within delegated limits | Exceeds staffing or spend authority, or creates cross-project conflicts |
| Baseline change | Project governing body or delegated change authority | The change exceeds thresholds for cost, schedule, scope, or value |
| Portfolio priority or sequencing | Portfolio authority | Shared strategic capacity or benefit timing is materially affected |
| PMO service engagement | PMO leader or service owner | A service change affects policy, tooling standards, or enterprise operating model |
| Procurement award | Procurement authority and sponsor as required | Thresholds, legal exposure, or regulated sourcing rules apply |
| Supplier claim, dispute, or compliance | Procurement/legal/sponsor depending on case | Contract exposure, audit risk, or litigation risk increases |
| AI, privacy, or data-control exception | Security/privacy/compliance authority | Sensitive data, regulated use, or automated decision risk is involved |
| Closure and benefits transition | Sponsor or business owner | Ongoing benefit ownership, residual risk, or operational handover is unclear |

---

## Artifact Authority Quick Reference (A01–A41)

| Artifact ID | Artifact Name | Governance Layer | Primary Owner | Default Approval Authority | Escalation Trigger |
|------------|--------------|-----------------|--------------|--------------------------|-------------------|
| A01 | Business Case | Project/Portfolio Governance | Sponsor | Sponsor or initiating authority | T3: investment case, strategic fit, or value materially changes |
| A02 | Benefits and Value Measurement Record | Project/Portfolio Governance | Business owner | Sponsor or business owner | T3: benefits, measures, or ownership change materially |
| A03 | Feasibility and Viable Options Record | Project Governance | BA/Architect/Project Lead | Sponsor or initiating authority | T3: authority boundaries, major funding, or initiation basis changes |
| A04 | Project Charter | Project Governance | Sponsor with PM support | Sponsor or authorized initiating body | T3: authority boundaries, major funding, or initiation basis changes |
| A05 | Context Register | Project Governance | PM | PM; Sponsor if strategic constraints shift | T2: constraint materially changes delivery viability |
| A06 | Tailoring Decision Record | Project Governance | PM | Sponsor or PMO only when required by policy | T2: tailoring affects mandatory controls or compliance coverage |
| A07 | Stakeholder Register and Engagement Strategy | Project Governance | PM | PM; Sponsor for strategic stakeholder decisions | T2: stakeholder strategy requires sponsor intervention |
| A08 | Scope and Requirements Decision Record | Project Governance | PM/Product/Business Lead | PM within limits; Sponsor for major scope decisions | T2–T3: scope change exceeds tolerance or alters value case |
| A09 | Delivery Approach and Team Operating Agreement | Delivery/Project Governance | Delivery Lead | PM or Delivery Lead | T2: team structure or cadence affects authority, cost, or commitments |
| A10 | Intake and Prioritization Decision Record | Portfolio Governance | Portfolio Owner | Portfolio Board | T4: priority, sequencing, or capacity contention changes |
| A11 | PMO Service Engagement Record | PMO Governance | PMO Service Owner | PMO Leader or service authority | T3: service model, standard, or PMO commitment changes |
| A12 | Integrated Change Decision Record | Project Governance | PM/Change Coordinator | Delegated change authority or governing body | T2–T3: change crosses T2 threshold or above |
| A13 | Development Approach and Lifecycle Record | Project Governance | PM | Sponsor or governing body if major lifecycle shift | T2–T3: lifecycle or delivery approach materially changes governance |
| A14 | Integrated Planning Record | Project Governance | PM | PM; Sponsor when plan approvals are required | T3: integrated plan changes exceed delegated authority |
| A15 | Schedule Baseline and Forecast Record | Project Governance | PM/Scheduler | Delegated change authority or sponsor | T2–T3: forecast variance or baseline change crosses thresholds |
| A16 | Financial Baseline and Funding Record | Project Governance | PM/Finance Partner | Sponsor, finance authority, or governing body | T3: funding need, reserve use, or financial variance crosses thresholds |
| A17 | Integrated Performance Reporting Record | Project Governance | PM | No approval for routine reporting; Sponsor receives escalations | T2–T3: performance signals require recovery or strategic decision |
| A18 | Issue and Action Record | Project Governance | PM/Issue Owner | PM for routine issues | T2: unresolved, cross-functional, or threshold-exceeding |
| A19 | Risk Management Record | Project Governance | PM/Risk Owner | PM for routine responses; Sponsor for major exposure | T3: exposure exceeds tolerance or needs policy/financial intervention |
| A20 | Quantitative Risk and Reserve Record | Project Governance | PM/Analyst | Sponsor, finance, or governing body | T3: reserve decisions or probabilistic exposure exceed authority |
| A21 | Trade-Off Decision Record | Project Governance | PM with decision owner | Governing body, sponsor, or portfolio authority | T3: multi-objective trade-off affects approved value priorities |
| A22 | Portfolio Interdependency Record | Portfolio Governance | Portfolio Owner/PMO Analyst | Portfolio board or designated portfolio authority | T4: dependency causes strategic conflict or shared-capacity contention |
| A23 | PMO Improvement Backlog | PMO Governance | PMO Leader/Improvement Owner | PMO governance forum | T3: improvement affects PMO service model, methods, or tooling |
| A24 | Closure and Benefits Transition Record | Project Governance | PM and Business Owner | Sponsor or business owner | T3: operational ownership, residual risk, or benefit handoff is unresolved |
| A25 | Team Operating and Responsibility Record | Delivery/Project Governance | PM or Delivery Lead | PM | T2: formal authority, labor, or role-boundary changes are required |
| A26 | Resource Capacity and Acquisition Record | Project Governance | PM with functional managers | PM within limits; functional/procurement authority as needed | T2–T3: capacity conflict, staffing or acquisition threshold is crossed |
| A27 | Team Health and Development Record | Delivery/PMO Governance | Delivery Lead/PMO Coach | Usually none; PMO/HR for interventions | T2: organizational intervention or HR-sensitive action is needed |
| A28 | Communications and Reporting Record | Project Governance | PM/Comms Lead | PM; Sponsor for sensitive reporting models | T2–T3: sensitive audiences, executive reporting, or confidentiality rules change |
| A29 | Change Readiness and Adoption Record | Project Governance | Change Lead/PM/Business Owner | Sponsor or business owner | T3: adoption affects deployment timing, business readiness, or value capture |
| A30 | Knowledge and Lessons Management Record | Project/PMO Governance | PM/Knowledge Owner | None for capture; PMO for enterprise reuse changes | T2–T3: lessons require method, policy, or repository changes |
| A31 | Procurement and Supplier Management Record | Project Governance | PM/Procurement Lead | Procurement authority and sponsor as required | T3: contract type, sourcing path, or spend threshold changes |
| A32 | Supplier Evaluation and Award Decision Record | Project/Portfolio Governance | Procurement Lead | Procurement board, sponsor, or contract authority | T3: award threshold, regulated sourcing, or enterprise supplier exposure |
| A33 | Supplier Change, Claim, and Compliance Record | Project Governance | Procurement Lead/Contract Admin | Procurement, legal, sponsor, or quality authority | T3: claim, dispute, compliance breach, or supplier change exceeds limits |
| A34 | Information Retention and Records Control Record | Project/PMO Governance | Records Owner/PM | PMO, compliance, or records authority | T3: retention or access rules affect compliance obligations |
| A35 | Governance and Decision Authority Record | Project Governance | Sponsor and PM jointly | Sponsor or project governing body | T3: governance forums, thresholds, or authority delegations change |
| A36 | PMO Value, Maturity, and Improvement Record | PMO Governance | PMO Leader | PMO governance forum or executive PMO sponsor | T4: PMO maturity actions affect enterprise services or standards |
| A37 | AI, Data, and Privacy Control Record | Project/PMO Governance | PM with specialist support | Security, privacy, compliance, or sponsor authority | T3: sensitive data, AI risk, or regulatory exposure requires specialist approval |
| A38 | Quality Management Record | Project Governance | PM/Quality Owner | PM; Quality authority for systemic findings | T2–T3: quality failure affects deliverable acceptance or value |
| A39 | PMO Configuration and Authority Record | PMO Governance | PMO Leader | PMO governance forum or executive authority | T4: PMO type, authority, or service scope changes |
| A40 | PMBOK Evolution and Principles Traceability Record | PMO Governance | PMO Leader/Knowledge Owner | PMO governance forum | T3: principles or methods update requires repository-wide change |
| A41 | Process Inputs, Outputs, and Tools Reference Record | PMO Governance | PMO Leader/Knowledge Owner | None for reference use; PMO for updates | T2: process I/O or T&T update required from PMI source change |

---

## Escalation Path Rules

1. Escalate PM → Sponsor or delegated change authority when a decision moves from **T1 to T2**.
2. Escalate to the **project governing body** when a decision alters approved scope, funding, schedule, expected value, or decision-right boundaries at **T3**.
3. Escalate to **portfolio governance** when the decision affects priority, sequencing, or shared capacity across more than one initiative.
4. Escalate to **PMO governance** when the decision changes a PMO service, method, template family, enterprise tooling pattern, or PMO maturity target.
5. Escalate to **procurement, legal, security, privacy, finance, quality, or HR** authorities when policy or regulation requires specialist approval.
6. **Record the escalation path in the governing artifact** — do not maintain a disconnected escalation log unless regulation requires one.

---

## RACI Default Model

| Role | Default Interpretation |
|------|-----------------------|
| **Responsible** | Prepares or updates the artifact |
| **Accountable** | Holds the delegated authority to approve or own the decision |
| **Consulted** | Provides specialist input before approval |
| **Informed** | Receives the result or status after decision |

Keep **one accountable role per artifact decision** when possible.

---

*Authority: Artifacts-Authorities-V-1.1.md · PMBOK8 Governance Performance Domain §2.1 · Standard §4*
