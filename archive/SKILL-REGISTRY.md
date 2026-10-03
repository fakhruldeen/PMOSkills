# SKILL-REGISTRY.md — Project Management Skills Repository
**Version:** 1.3.1  
**Status:** Active · Maintained  
**Authority:** PMBOK8 · Artifacts-V-1.1 · Repository Operating Rules  
**Last Updated:** 2026-06-03  
**File Path:** `SKILL-REGISTRY.md`

---

## Purpose

This registry is the single authoritative index of all skills in the PM Skills Repository. It catalogs every skill by ID, pack, name, status, primary artifact, PMBOK8 anchor, and dependency chain. It does not duplicate skill content — it indexes it.

**Use this registry to:**
- Determine which skills exist and their current build status
- Identify upstream prerequisites before executing a skill
- Trace which artifact each skill produces or updates
- Plan the remaining skill build order
- Confirm pack completeness before declaring a pack ready for use

---

## Registry Schema

Each skill entry contains the following fields:

| Field | Description |
|-------|-------------|
| **Skill ID** | Unique identifier — format: `SKL-PP-NN` where PP = pack number, NN = sequence within pack |
| **Skill Name** | Full name matching the skill file heading |
| **Pack** | Lifecycle pack number and name |
| **Status** | `Draft · Untested` / `Draft · In Review` / `Reviewed` / `Approved · Production` |
| **Source Type** | `PMI-derived` / `organization-defined` / `synthesis` |
| **Primary Artifact (Output)** | The artifact this skill produces or whose primary section it populates |
| **Artifacts Updated** | Additional artifacts modified as outputs |
| **PMBOK8 Process Anchor** | The PMBOK8 Guide process or section this skill operationalizes |
| **Performance Domains** | PMBOK8 performance domains this skill operates within |
| **Focus Area** | PMBOK8 focus area(s): Initiating / Planning / Executing / Monitoring and Controlling / Closing |
| **Upstream Prerequisites** | Skills that must complete before this skill can execute |
| **Downstream Skills** | Skills that consume this skill's outputs |
| **File Path** | Relative path to the skill markdown file |
| **Notes** | Key design decisions, constraints, or open items |

---

## Pack Index

| Pack | Name | Skills Built | Skills Planned | Total | Status |
|------|------|-------------|----------------|-------|--------|
| **01** | **Organizational Setup** | **3** | 0 | **3** | ✅ Complete |
| **02** | **Initiating** | **2** | 0 | **2** | ✅ Complete |
| **03** | **Planning** | **22** | 0 | **22** | ✅ Complete |
| **04** | **Executing** | **9** | 0 | **9** | ✅ Complete |
| **05** | **Monitoring & Controlling** | **10** | 0 | **10** | ✅ Complete |
| **06** | **Closing** | **3** | 0 | **3** | ✅ Complete |
| **07** | **Adaptive & Hybrid** | **4** | 0 | **4** | ✅ Complete |
| **08** | **PMO Governance** | **5** | 0 | **5** | ✅ Complete |
| — | **TOTAL** | **58 built** | **0 planned** | **58** | ✅ **All built** |

---

## Pack 01 — Organizational Setup

> **Pack Purpose:** Skills that establish the organizational foundation required before any project can be initiated — governance framework, document and artifact control standards, and repository/tool environment configuration. These skills run once per organizational setup or when a significant structural change occurs. All downstream packs depend on these foundations being in place.

> **Pack Prerequisites:** A business case or authorization trigger (A01) must exist before SKL-01-01 runs. No prior skill prerequisites.

> **Pack Completion Criteria:** A05 Governance section baselined · A05 Document Control Standards baselined · A03 Repository and Tool Configuration Record baselined · Repository folder structure verified and accessible.

---

### SKL-01-01 — Establish PM Governance Framework

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-01-01 |
| **Skill Name** | Establish PM Governance Framework |
| **Pack** | 01 — Organizational Setup |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A05 — Context Register (Governance section) |
| **Artifacts Updated** | A06 — Project Management Plan (governance reference) · A04 — Project Charter (authority thresholds reference) |
| **PMBOK8 Process Anchor** | PMBOK8 Standard §3 Principles · Guide §2.1 Project Integration Management · AUTHORITY-ROUTING.md |
| **Performance Domains** | Governance · Stakeholders |
| **Focus Area** | Organizational Setup |
| **Upstream Prerequisites** | A01 — Business Case or equivalent authorization trigger must exist |
| **Downstream Skills** | SKL-01-02 · SKL-01-03 · SKL-02-01 |
| **File Path** | `skills/01-organizational-setup/SKL-01-01-establish-pm-governance-framework.md` |
| **Notes** | Defines authority thresholds, decision rights, governance RACI, escalation path, meeting cadence, and compliance obligations. Must align with AUTHORITY-ROUTING.md. Re-run at program level or for projects with unique governance requirements. 9 tests. |

---

### SKL-01-02 — Define Artifact and Document Control Standards

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-01-02 |
| **Skill Name** | Define Artifact and Document Control Standards |
| **Pack** | 01 — Organizational Setup |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A05 — Context Register (OPA / Document Control Standards section) |
| **Artifacts Updated** | A06 — Project Management Plan (document control reference) |
| **PMBOK8 Process Anchor** | PMBOK8 Standard §3 Principles · Guide §2.1.6.4 Manage Project Knowledge · Artifacts-V-1.1 |
| **Performance Domains** | Governance · Delivery |
| **Focus Area** | Organizational Setup |
| **Upstream Prerequisites** | SKL-01-01 — A05 Governance section must be baselined |
| **Downstream Skills** | SKL-01-03 · SKL-02-01 · All artifact-producing skills (Pack 02 through Pack 07) |
| **File Path** | `skills/01-organizational-setup/SKL-01-02-define-artifact-and-document-control-standards.md` |
| **Notes** | Defines naming conventions (A##-kebab-case.md), semantic versioning (major/minor/patch), six-status lifecycle, artifact ownership, baseline/change control rules per artifact type, and archiving/retention rules. Artifacts-V-1.1 is the authoritative artifact registry. 9 tests. |

---

### SKL-01-03 — Configure Project Repository and Tool Environment

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-01-03 |
| **Skill Name** | Configure Project Repository and Tool Environment |
| **Pack** | 01 — Organizational Setup |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A03 — Repository and Tool Configuration Record |
| **Artifacts Updated** | A05 — Context Register (EEF / tool environment section) · A06 — Project Management Plan (tool environment reference) |
| **PMBOK8 Process Anchor** | PMBOK8 Standard §3 Principles · Guide §2.1.6.4 Manage Project Knowledge · Guide §2.6 Resource Management |
| **Performance Domains** | Governance · Resources · Delivery |
| **Focus Area** | Organizational Setup |
| **Upstream Prerequisites** | SKL-01-01 — A05 Governance section must be baselined · SKL-01-02 — A05 Document Control Standards must be baselined |
| **Downstream Skills** | SKL-02-01 · All Pack 02 through Pack 07 skills |
| **File Path** | `skills/01-organizational-setup/SKL-01-03-configure-project-repository-and-tool-environment.md` |
| **Notes** | Configures canonical folder structure, version control settings (branch naming, commit conventions, branch protection), access controls, tool integrations (CI/CD, MCP server, agent pipelines), and repository readiness checklist. Creates A03 as the single authority for repository and tool configuration. 9 tests. |

---

## Pack 02 — Initiating

> **Pack Purpose:** Skills that execute during the Initiating focus area — authorizing the project, establishing governance context, identifying stakeholders, and producing the foundational records that all planning skills depend on.

> **Pack Prerequisites:** A business case or equivalent authorization trigger must exist before any Pack 02 skill runs. Pack 01 (Organizational Setup) must be complete.

> **Pack Completion Criteria:** A04 (Project Charter), A05 (Context Register), and A07 (Stakeholder Register — Identification section) must all be baselined before Pack 03 skills begin.

---

### SKL-02-01 — Initiate Project or Phase

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-02-01 |
| **Skill Name** | Initiate Project or Phase |
| **Pack** | 02 — Initiating |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A04 — Project Charter |
| **Artifacts Updated** | A05 — Context Register · A02 — Benefits and Value Measurement Record |
| **PMBOK8 Process Anchor** | Guide §2.1.6.1 Initiate Project or Phase · Figure 2-3 |
| **Performance Domains** | Governance · Stakeholders |
| **Focus Area** | Initiating |
| **Upstream Prerequisites** | A01 (Business Case) must exist · Pack 01 complete |
| **Downstream Skills** | SKL-02-02 · All Pack 03 skills |
| **File Path** | `skills/02-initiating/SKL-02-01-initiate-project-or-phase.md` |
| **Notes** | Charter is the enabling artifact for all downstream work. Includes predictive and adaptive tailoring paths. |

---

### SKL-02-02 — Identify Stakeholders

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-02-02 |
| **Skill Name** | Identify Stakeholders |
| **Pack** | 02 — Initiating |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A07 — Stakeholder Register and Engagement Strategy (Identification section) |
| **Artifacts Updated** | A05 — Context Register · A19 — Risk Management Record |
| **PMBOK8 Process Anchor** | Guide §2.5.2.1 Identify Stakeholders · Figure 2-33 |
| **Performance Domains** | Stakeholders · Governance |
| **Focus Area** | Initiating |
| **Upstream Prerequisites** | SKL-02-01 |
| **Downstream Skills** | SKL-03-07 |
| **File Path** | `skills/02-initiating/SKL-02-02-identify-stakeholders.md` |
| **Notes** | Power/Interest Grid + Salience Model core technique. Re-run triggers: phase gates, new stakeholders, major scope/authority changes. |

---

## Pack 03 — Planning

> **Pack Purpose:** Skills that execute during the Planning focus area — translating authorization and context into actionable project management plans, baselines, and subsidiary plans.

> **Pack Prerequisites:** All Pack 02 skills must complete before Pack 03 begins.

> **Pack Completion Criteria:** A14 (Integrated PM Plan) assembled and baselined before Pack 04 begins.

---

### SKL-03-01 — Integrate and Align Project Plans

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-01 |
| **Skill Name** | Integrate and Align Project Plans |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A14 — Integrated Project Management Plan |
| **PMBOK8 Process Anchor** | Guide §2.1.6.2 · Figure 2-4 |
| **Performance Domains** | Governance · All domains |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | All applicable Pack 03 planning skills |
| **Downstream Skills** | All Pack 04 skills |
| **File Path** | `skills/03-planning/SKL-03-01-integrate-align-project-plans.md` |
| **Notes** | Final Pack 03 skill — assembles all subsidiary plans into A14. Build last. |

---

### SKL-03-02 — Plan Scope Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-02 |
| **Skill Name** | Plan Scope Management |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — Scope Management Plan section |
| **PMBOK8 Process Anchor** | Guide §2.2.2.1 · Figure 2-14 |
| **Performance Domains** | Scope · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-02-01 · SKL-02-02 |
| **Downstream Skills** | SKL-03-03 |
| **File Path** | `skills/03-planning/SKL-03-02-plan-scope-management.md` |

---

### SKL-03-03 — Elicit and Analyze Requirements

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-03 |
| **Skill Name** | Elicit and Analyze Requirements |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — Requirements section |
| **PMBOK8 Process Anchor** | Guide §2.2.2.2 · Figure 2-15 |
| **Performance Domains** | Scope · Stakeholders |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-02 · SKL-02-02 |
| **Downstream Skills** | SKL-03-04 · SKL-03-08 |
| **File Path** | `skills/03-planning/SKL-03-03-elicit-analyze-requirements.md` |

---

### SKL-03-04 — Define Scope

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-04 |
| **Skill Name** | Define Scope |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — Project Scope Statement section |
| **PMBOK8 Process Anchor** | Guide §2.2.2.3 · Figure 2-16 |
| **Performance Domains** | Scope · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-03 |
| **Downstream Skills** | SKL-03-05 |
| **File Path** | `skills/03-planning/SKL-03-04-define-scope.md` |

---

### SKL-03-05 — Develop Scope Structure

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-05 |
| **Skill Name** | Develop Scope Structure |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — WBS / Scope Structure section |
| **PMBOK8 Process Anchor** | Guide §2.2.2.4 · Figure 2-17 |
| **Performance Domains** | Scope · Schedule |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-04 |
| **Downstream Skills** | SKL-03-06 · SKL-03-13 · SKL-03-16 |
| **File Path** | `skills/03-planning/SKL-03-05-develop-scope-structure.md` |

---

### SKL-03-06 — Plan Schedule Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-06 |
| **Skill Name** | Plan Schedule Management |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A15 — Schedule Management Plan section |
| **PMBOK8 Process Anchor** | Guide §2.3.2.1 · Figure 2-21 |
| **Performance Domains** | Schedule · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-05 · SKL-02-01 |
| **Downstream Skills** | SKL-03-06b Develop Schedule |
| **File Path** | `skills/03-planning/SKL-03-06-plan-schedule-management.md` |

---

### SKL-03-07 — Plan Stakeholder Engagement

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-07 |
| **Skill Name** | Plan Stakeholder Engagement |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A07 — Engagement Strategy section |
| **Artifacts Updated** | A19 — engagement risks · A14 — subsidiary reference |
| **PMBOK8 Process Anchor** | Guide §2.5.2.2 · Figure 2-34 |
| **Performance Domains** | Stakeholders · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-02-02 |
| **Downstream Skills** | SKL-03-08 · SKL-04-06 · SKL-05-07 |
| **File Path** | `skills/03-planning/SKL-03-07-plan-stakeholder-engagement.md` |
| **Notes** | SEAM is embedded in A07. Inseparable upstream pair with SKL-03-08. |

---

### SKL-03-08 — Plan Communications Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-08 |
| **Skill Name** | Plan Communications Management |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A28 — Communications and Reporting Record |
| **Artifacts Updated** | A07 · A15 · A14 |
| **PMBOK8 Process Anchor** | Guide §2.5.2.3 · Figure 2-35 |
| **Performance Domains** | Stakeholders · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-07 |
| **Downstream Skills** | SKL-04-07 · SKL-05-09 |
| **File Path** | `skills/03-planning/SKL-03-08-plan-communications-management.md` |
| **Notes** | A28 = single merged communications record. A07 ↔ A28 consistency enforced. |

---

### SKL-03-09 — Plan Risk Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-09 |
| **Skill Name** | Plan Risk Management |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A19 — Risk Management Plan section |
| **PMBOK8 Process Anchor** | Guide §2.7.2.1 · Figure 2-48 |
| **Performance Domains** | Risk · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-02-01 · SKL-02-02 · SKL-03-07 |
| **Downstream Skills** | SKL-03-10 |
| **File Path** | `skills/03-planning/SKL-03-09-plan-risk-management.md` |

---

### SKL-03-10 — Identify Risks

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-10 |
| **Skill Name** | Identify Risks |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A19 — Risk Register section |
| **PMBOK8 Process Anchor** | Guide §2.7.2.2 · Figure 2-49 |
| **Performance Domains** | Risk · Scope · Schedule |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-09 |
| **Downstream Skills** | SKL-03-11 |
| **File Path** | `skills/03-planning/SKL-03-10-identify-risks.md` |

---

### SKL-03-11 — Perform Risk Analysis

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-11 |
| **Skill Name** | Perform Risk Analysis |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A19 — Risk Analysis section · A20 (conditional) |
| **PMBOK8 Process Anchor** | Guide §2.7.2.3 · Figure 2-50 |
| **Performance Domains** | Risk · Finance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-10 |
| **Downstream Skills** | SKL-03-12 |
| **File Path** | `skills/03-planning/SKL-03-11-perform-risk-analysis.md` |

---

### SKL-03-12 — Plan Risk Responses

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-12 |
| **Skill Name** | Plan Risk Responses |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A19 — Risk Response section |
| **PMBOK8 Process Anchor** | Guide §2.7.2.4 · Figure 2-51 |
| **Performance Domains** | Risk · Finance · Stakeholders |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-11 |
| **Downstream Skills** | SKL-04-08 · SKL-05-06 |
| **File Path** | `skills/03-planning/SKL-03-12-plan-risk-responses.md` |

---

### SKL-03-13 — Plan Financial Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-13 |
| **Skill Name** | Plan Financial Management |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A16 — Financial Management Plan section |
| **PMBOK8 Process Anchor** | Guide §2.4.2.1 · Figure 2-27 |
| **Performance Domains** | Finance · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-02-01 · SKL-03-05 |
| **Downstream Skills** | SKL-03-14 · SKL-03-15 |
| **File Path** | `skills/03-planning/SKL-03-13-plan-financial-management.md` |

---

### SKL-03-14 — Estimate Costs

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-14 |
| **Skill Name** | Estimate Costs |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A16 — Cost Estimates section |
| **PMBOK8 Process Anchor** | Guide §2.4.2.2 · Figure 2-28 |
| **Performance Domains** | Finance · Risk |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-13 · SKL-03-05 |
| **Downstream Skills** | SKL-03-15 |
| **File Path** | `skills/03-planning/SKL-03-14-estimate-costs.md` |

---

### SKL-03-15 — Develop Budget

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-15 |
| **Skill Name** | Develop Budget |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A16 — Cost Baseline / BAC section |
| **PMBOK8 Process Anchor** | Guide §2.4.2.3 · Figure 2-29 |
| **Performance Domains** | Finance · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-14 · SKL-03-11 |
| **Downstream Skills** | SKL-05-05 |
| **File Path** | `skills/03-planning/SKL-03-15-develop-budget.md` |

---

### SKL-03-16 — Plan Resource Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-16 |
| **Skill Name** | Plan Resource Management |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A26 — Resource Management Plan section |
| **PMBOK8 Process Anchor** | Guide §2.6.2.1 · Figure 2-41 |
| **Performance Domains** | Resources · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-02-01 · SKL-03-05 |
| **Downstream Skills** | SKL-03-17 · SKL-04-03 |
| **File Path** | `skills/03-planning/SKL-03-16-plan-resource-management.md` |

---

### SKL-03-17 — Estimate Resources

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-17 |
| **Skill Name** | Estimate Resources |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A26 — Resource Estimates section |
| **PMBOK8 Process Anchor** | Guide §2.6.2.2 · Figure 2-42 |
| **Performance Domains** | Resources · Schedule · Finance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-16 |
| **Downstream Skills** | SKL-04-03 |
| **File Path** | `skills/03-planning/SKL-03-17-estimate-resources.md` |

---

### SKL-03-18 — Integrate Sustainability Into Project Planning

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-18 |
| **Skill Name** | Integrate Sustainability Into Project Planning |
| **Pack** | 03 — Planning |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A-NEW-SUST — Sustainability Register |
| **PMBOK8 Process Anchor** | Standard §3.6 · Guide §2.5.2 |
| **Performance Domains** | Scope · Resources · Risk |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-02-01 · SKL-02-02 · SKL-03-02 |
| **Downstream Skills** | SKL-03-14 · SKL-04-09 · SKL-05-01 |
| **File Path** | `skills/03-planning/SKL-03-18-integrate-sustainability-into-project-planning.md` |

---

### SKL-03-06b — Develop and Baseline Schedule (Detailed)

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-06b |
| **Skill Name** | Develop and Baseline Schedule (Detailed) |
| **Pack** | 03 — Planning |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A15 — Schedule Model and Baseline Record |
| **Artifacts Updated** | A14 (Integrated PM Plan) |
| **PMBOK8 Process Anchor** | Guide §2.3.2.2 Develop Schedule · Guide §2.3 Schedule Domain |
| **Performance Domains** | Schedule |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-06 · SKL-03-05 |
| **Downstream Skills** | SKL-03-15 · SKL-05-04 |
| **File Path** | `skills/03-planning/SKL-03-06b-develop-schedule.md` |

---

### SKL-03-19 — Plan Quality Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-19 |
| **Skill Name** | Plan Quality Management |
| **Pack** | 03 — Planning |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A06 — Project Management Plan (Quality Management section) |
| **Artifacts Updated** | A14 (Integrated PM Plan) |
| **PMBOK8 Process Anchor** | Guide §2.2.2.6 · Guide §2.1.6.5 Manage Quality Assurance · Standard §3.5 Embed Quality |
| **Performance Domains** | Scope · Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-03 · SKL-03-04 |
| **Downstream Skills** | SKL-04-01 · SKL-05-09 |
| **File Path** | `skills/03-planning/SKL-03-19-plan-quality-management.md` |

---

### SKL-03-20 — Plan Procurement Management

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-20 |
| **Skill Name** | Plan Procurement Management |
| **Pack** | 03 — Planning |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A06 — Project Management Plan (Procurement Management section) |
| **Artifacts Updated** | A31 — Procurement and Supplier Management Record |
| **PMBOK8 Process Anchor** | Guide §2.1.6.3 Plan Sourcing Strategy · Guide §2.1 Governance Domain |
| **Performance Domains** | Governance |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-01 · SKL-03-03 |
| **Downstream Skills** | SKL-04-09 · SKL-05-08 |
| **File Path** | `skills/03-planning/SKL-03-20-plan-procurement-management.md` |

---

### SKL-03-21 — Develop Requirements Traceability Matrix

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-03-21 |
| **Skill Name** | Develop Requirements Traceability Matrix |
| **Pack** | 03 — Planning |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — Scope and Requirements Decision Record (RTM section) |
| **Artifacts Updated** | A14 (Integrated PM Plan) |
| **PMBOK8 Process Anchor** | Guide §2.2.2.2 Elicit and Analyze Requirements · Guide §2.2 Scope Domain |
| **Performance Domains** | Scope |
| **Focus Area** | Planning |
| **Upstream Prerequisites** | SKL-03-03 · SKL-03-04 |
| **Downstream Skills** | SKL-05-03 · SKL-05-09 |
| **File Path** | `skills/03-planning/SKL-03-21-develop-requirements-traceability-matrix.md` |

---

## Pack 04 — Executing

> **Pack Purpose:** Skills that execute during the Executing focus area — directing and managing work, acquiring and developing resources, managing stakeholder and team engagement, managing communications, procurements, knowledge, and implementing risk responses.

> **Pack Prerequisites:** A14 (Integrated PM Plan) must be baselined. All applicable Pack 03 skills must be complete.

> **Pack Completion Criteria:** All deliverables under execution; issue log (A18), risk response log (A19), and communications delivery log (A28) are actively maintained.

---

### SKL-04-01 — Direct and Manage Project Work

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-01 |
| **Skill Name** | Direct and Manage Project Work |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A18 — Issue Log |
| **Artifacts Updated** | A14 · A15 · A16 · A19 |
| **PMBOK8 Process Anchor** | Guide §2.1.6.3 Direct and Manage Project Work · Figure 2-5 |
| **Performance Domains** | Delivery · Governance |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-03-01 (A14 baselined) |
| **Downstream Skills** | SKL-05-01 · SKL-04-02 |
| **File Path** | `skills/04-executing/SKL-04-01-direct-and-manage-project-work.md` |

---

### SKL-04-02 — Manage Project Knowledge

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-02 |
| **Skill Name** | Manage Project Knowledge |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A21 — Lessons Learned Register |
| **Artifacts Updated** | A05 — OPA |
| **PMBOK8 Process Anchor** | Guide §2.1.6.4 Manage Project Knowledge · Figure 2-6 |
| **Performance Domains** | Governance · Team |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-04-01 |
| **Downstream Skills** | SKL-06-03 |
| **File Path** | `skills/04-executing/SKL-04-02-manage-project-knowledge.md` |

---

### SKL-04-03 — Acquire Resources

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-03 |
| **Skill Name** | Acquire Resources |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A26 — Resource Capacity and Acquisition Record |
| **PMBOK8 Process Anchor** | Guide §2.6.2.3 Acquire Resources · Figure 2-43 |
| **Performance Domains** | Resources · Governance |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-03-17 |
| **Downstream Skills** | SKL-04-04 · SKL-05-08 |
| **File Path** | `skills/04-executing/SKL-04-03-acquire-resources.md` |

---

### SKL-04-04 — Develop Team

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-04 |
| **Skill Name** | Develop Team |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A26 — Team Development section |
| **PMBOK8 Process Anchor** | Guide §2.6.2.4 Develop Team · Figure 2-44 |
| **Performance Domains** | Resources · Team |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-04-03 |
| **Downstream Skills** | SKL-04-05 |
| **File Path** | `skills/04-executing/SKL-04-04-develop-team.md` |

---

### SKL-04-05 — Manage Team

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-05 |
| **Skill Name** | Manage Team |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A26 — Performance / Conflict Log section |
| **PMBOK8 Process Anchor** | Guide §2.6.2.5 Lead the Team · Figure 2-44 |
| **Performance Domains** | Resources · Team |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-04-04 |
| **Downstream Skills** | SKL-05-08 |
| **File Path** | `skills/04-executing/SKL-04-05-manage-team.md` |

---

### SKL-04-06 — Manage Stakeholder Engagement

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-06 |
| **Skill Name** | Manage Stakeholder Engagement |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A07 — SEAM (Execution updates) |
| **PMBOK8 Process Anchor** | Guide §2.5.2.4 Manage Stakeholder Engagement · Figure 2-36 |
| **Performance Domains** | Stakeholders · Governance |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-03-07 |
| **Downstream Skills** | SKL-05-07 |
| **File Path** | `skills/04-executing/SKL-04-06-manage-stakeholder-engagement.md` |

---

### SKL-04-07 — Manage Communications

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-07 |
| **Skill Name** | Manage Communications |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A28 — Delivery Log section |
| **PMBOK8 Process Anchor** | Guide §2.5.2.5 Manage Communications · Figure 2-37 |
| **Performance Domains** | Stakeholders · Delivery |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-03-08 |
| **Downstream Skills** | SKL-05-09 |
| **File Path** | `skills/04-executing/SKL-04-07-manage-communications.md` |

---

### SKL-04-08 — Implement Risk Responses

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-08 |
| **Skill Name** | Implement Risk Responses |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A19 — Response Log section |
| **PMBOK8 Process Anchor** | Guide §2.7.2.5 Implement Risk Responses · Figure 2-52 |
| **Performance Domains** | Risk · Delivery |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-03-12 |
| **Downstream Skills** | SKL-05-06 |
| **File Path** | `skills/04-executing/SKL-04-08-implement-risk-responses.md` |

---

### SKL-04-09 — Conduct Procurements

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-04-09 |
| **Skill Name** | Conduct Procurements |
| **Pack** | 04 — Executing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A31 — Contract and Procurement Log |
| **PMBOK8 Process Anchor** | Guide §2.8.2.2 Conduct Procurements · Figure 2-55 |
| **Performance Domains** | Governance · Delivery |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-03-01 |
| **Downstream Skills** | SKL-05-01 |
| **File Path** | `skills/04-executing/SKL-04-09-conduct-procurements.md` |

---

## Pack 05 — Monitoring & Controlling

> **Pack Purpose:** Skills that execute during the Monitoring and Controlling focus area — tracking performance against baselines, controlling scope/schedule/cost/risk/resources/communications/stakeholders, and managing change.

> **Pack Prerequisites:** Pack 04 skills active; A14 baselined; baselines set for A08, A15, A16, A19.

> **Pack Completion Criteria:** All baselines remain valid or have been formally re-baselined through change control; performance reports current.

---

### SKL-05-01 — Monitor and Control Project Work

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-01 |
| **Skill Name** | Monitor and Control Project Work |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A17 — Performance Report |
| **Artifacts Updated** | A14 · A18 · A19 |
| **PMBOK8 Process Anchor** | Guide §2.1.6.5 Monitor and Control Project Work · Figure 2-7 |
| **Performance Domains** | Measurement · Governance |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-04-01 |
| **Downstream Skills** | SKL-05-02 · SKL-06-01 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-01-monitor-and-control-project-work.md` |

---

### SKL-05-02 — Perform Integrated Change Control

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-02 |
| **Skill Name** | Perform Integrated Change Control |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A12 — Change Log |
| **Artifacts Updated** | A14 · A08 · A15 · A16 · A19 |
| **PMBOK8 Process Anchor** | Guide §2.1.6.6 Assess and Implement Changes · Figure 2-8 |
| **Performance Domains** | Governance · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-05-01 |
| **Downstream Skills** | All baseline-holding skills |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-02-perform-integrated-change-control.md` |

---

### SKL-05-03 — Control Scope

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-03 |
| **Skill Name** | Control Scope |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — Scope Control Log |
| **PMBOK8 Process Anchor** | Guide §2.2.2.5 Control Scope · Figure 2-18 |
| **Performance Domains** | Scope · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-03-05 · SKL-05-02 |
| **Downstream Skills** | SKL-05-02 (triggers change requests) |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-03-control-scope.md` |

---

### SKL-05-04 — Control Schedule

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-04 |
| **Skill Name** | Control Schedule |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A15 — EVM/SPI section |
| **PMBOK8 Process Anchor** | Guide §2.3.2.5 Control Schedule · Figure 2-24 |
| **Performance Domains** | Schedule · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-03-06 · SKL-05-02 |
| **Downstream Skills** | SKL-05-01 · SKL-05-02 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-04-control-schedule.md` |

---

### SKL-05-05 — Control Costs

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-05 |
| **Skill Name** | Control Costs |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A16 — EVM / CPI / EAC section |
| **PMBOK8 Process Anchor** | Guide §2.4.2.4 Control Finances · Figure 2-30 |
| **Performance Domains** | Finance · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-03-15 · SKL-05-02 |
| **Downstream Skills** | SKL-05-01 · SKL-06-02 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-05-control-costs.md` |

---

### SKL-05-06 — Monitor Risks

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-06 |
| **Skill Name** | Monitor Risks |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A19 — Risk Monitoring Log section |
| **PMBOK8 Process Anchor** | Guide §2.7.2.6 Monitor Risks · Figure 2-53 |
| **Performance Domains** | Risk · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-04-08 |
| **Downstream Skills** | SKL-05-02 · SKL-06-01 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-06-monitor-risks.md` |

---

### SKL-05-07 — Monitor Stakeholder Engagement

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-07 |
| **Skill Name** | Monitor Stakeholder Engagement |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A07 — SEAM Monitoring section |
| **PMBOK8 Process Anchor** | Guide §2.5.2.6 Monitor Stakeholder Engagement · Figure 2-38 |
| **Performance Domains** | Stakeholders · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-04-06 |
| **Downstream Skills** | SKL-04-06 (re-engagement trigger) |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-07-monitor-stakeholder-engagement.md` |

---

### SKL-05-08 — Control Resources

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-08 |
| **Skill Name** | Control Resources |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A26 — Resource Control Log |
| **PMBOK8 Process Anchor** | Guide §2.6.2.6 Control Resources · Figure 2-45 |
| **Performance Domains** | Resources · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-04-03 · SKL-04-05 |
| **Downstream Skills** | SKL-05-02 · SKL-06-01 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-08-control-resources.md` |

---

### SKL-05-09 — Monitor Communications

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-09 |
| **Skill Name** | Monitor Communications |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A28 — Communications Monitoring section |
| **PMBOK8 Process Anchor** | Guide §2.5.2.7 Monitor Communications · Figure 2-39 |
| **Performance Domains** | Stakeholders · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-04-07 |
| **Downstream Skills** | SKL-04-07 (re-plan trigger) · SKL-05-07 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-09-monitor-communications.md` |

---

### SKL-05-13 — Perform Earned Value Analysis

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-05-13 |
| **Skill Name** | Perform Earned Value Analysis |
| **Pack** | 05 — Monitoring & Controlling |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A17 — Work Performance Information (EVM section) |
| **Artifacts Updated** | A16 (Financial Record) · A12 (Change Log) |
| **PMBOK8 Process Anchor** | Guide §2.4.2.4 Monitor and Control Finances · Practice Standard for EVM |
| **Performance Domains** | Finance · Governance |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-05-05 |
| **Downstream Skills** | SKL-05-02 |
| **File Path** | `skills/05-monitoring-controlling/SKL-05-13-perform-earned-value-analysis.md` |

---

## Pack 06 — Closing

> **Pack Purpose:** Skills that execute during the Closing focus area — formally closing the project or phase, conducting a final performance review, and capturing and archiving lessons learned and OPA updates.

> **Pack Prerequisites:** All deliverables accepted or disposition documented. Final performance data available.

> **Pack Completion Criteria:** A27 (Closure Record) signed. A21 (Lessons Learned) archived. OPA updated.

---

### SKL-06-01 — Close Project or Phase

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-06-01 |
| **Skill Name** | Close Project or Phase |
| **Pack** | 06 — Closing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A27 — Project Closure Record |
| **Artifacts Updated** | A14 · A05 · A21 |
| **PMBOK8 Process Anchor** | Guide §2.1.6.7 Close Project or Phase · Figure 2-9 |
| **Performance Domains** | Governance · Delivery |
| **Focus Area** | Closing |
| **Upstream Prerequisites** | SKL-05-01 · SKL-05-06 · All deliverables accepted |
| **Downstream Skills** | SKL-06-02 · SKL-06-03 |
| **File Path** | `skills/06-closing/SKL-06-01-close-project-or-phase.md` |

---

### SKL-06-02 — Final Performance Review

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-06-02 |
| **Skill Name** | Final Performance Review |
| **Pack** | 06 — Closing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A17 — Final Performance Report |
| **Artifacts Updated** | A27 — Closure Record (performance summary section) |
| **PMBOK8 Process Anchor** | Guide §2.4.2 · §2.3.2 · §2.7.2 (closing performance synthesis) |
| **Performance Domains** | Measurement · Governance |
| **Focus Area** | Closing |
| **Upstream Prerequisites** | SKL-06-01 |
| **Downstream Skills** | SKL-06-03 |
| **File Path** | `skills/06-closing/SKL-06-02-final-performance-review.md` |

---

### SKL-06-03 — Capture and Archive Lessons Learned

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-06-03 |
| **Skill Name** | Capture and Archive Lessons Learned |
| **Pack** | 06 — Closing |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A21 — Lessons Learned Register (Final version) |
| **Artifacts Updated** | A05 — OPA |
| **PMBOK8 Process Anchor** | Guide §2.1.6.4 Manage Project Knowledge (closing activation) |
| **Performance Domains** | Governance · Team |
| **Focus Area** | Closing |
| **Upstream Prerequisites** | SKL-06-01 · SKL-06-02 · SKL-07-03 (retrospective inputs, if applicable) |
| **Downstream Skills** | None — terminal skill |
| **File Path** | `skills/06-closing/SKL-06-03-capture-and-archive-lessons-learned.md` |

---

## Pack 07 — Adaptive & Hybrid

> **Pack Purpose:** Skills that govern lifecycle approach selection, adaptive delivery mechanics (backlog management, iteration execution), continuous improvement (retrospectives), and hybrid project planning and delivery.

> **Pack Prerequisites:** SKL-02-01 (Charter) must exist. Pack 07 skills activate based on lifecycle approach selected in SKL-07-01. Pack 07 skills operate in parallel with Pack 04, 05, and 06 for adaptive/hybrid projects.

> **Pack Completion Criteria:** Lifecycle approach documented in A06 §2. Backlog maintained through execution. Retrospectives held each cycle. Hybrid structure documented if applicable.

---

### SKL-07-01 — Select and Tailor Lifecycle Approach

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-07-01 |
| **Skill Name** | Select and Tailor Lifecycle Approach |
| **Pack** | 07 — Adaptive & Hybrid |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A06 §2 — Development Approach section |
| **Artifacts Updated** | Tailoring Decision Log |
| **PMBOK8 Process Anchor** | PMBOK8 Standard §4.2–4.3 · Guide §2.3 (Development Approach and Life Cycle) |
| **Performance Domains** | Development Approach and Life Cycle · Governance · Planning |
| **Focus Area** | Initiating · Planning |
| **Upstream Prerequisites** | SKL-02-01 |
| **Downstream Skills** | SKL-07-02 · SKL-07-04 · SKL-03-01 (A06 input) |
| **File Path** | `skills/07-adaptive-hybrid/SKL-07-01-select-and-tailor-lifecycle-approach.md` |
| **Notes** | Covers PMBOK8 4-step tailoring framework; suitability filters across 3 dimensions; DA Hybrid Levels 1–3; 4 hybrid patterns (P1–P4). Re-run at each phase gate or major change. |

---

### SKL-07-02 — Manage Backlog and Iterations

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-07-02 |
| **Skill Name** | Manage Backlog and Iterations |
| **Pack** | 07 — Adaptive & Hybrid |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A08 — Backlog section |
| **Artifacts Updated** | A15 (velocity / release forecast) · A07 (sprint review feedback) |
| **PMBOK8 Process Anchor** | APG §5 · PMBOK8 Guide §2.3 |
| **Performance Domains** | Development Approach and Life Cycle · Planning · Delivery · Measurement |
| **Focus Area** | Planning · Executing |
| **Upstream Prerequisites** | SKL-07-01 |
| **Downstream Skills** | SKL-07-03 · SKL-04-06 · SKL-05-03 |
| **File Path** | `skills/07-adaptive-hybrid/SKL-07-02-manage-backlog-and-iterations.md` |
| **Notes** | Covers iteration-based (Scrum-like) and flow-based (Kanban) patterns; DoR/DoD gates; velocity forecasting; sprint cadence table. |

---

### SKL-07-03 — Facilitate Retrospectives and Continuous Improvement

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-07-03 |
| **Skill Name** | Facilitate Retrospectives and Continuous Improvement |
| **Pack** | 07 — Adaptive & Hybrid |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A21 — Retrospective section |
| **Artifacts Updated** | Tailoring Changelog · A06 |
| **PMBOK8 Process Anchor** | PMBOK8 Standard Principle 12 · APG §5 · APG §3.3 Table 3-2 |
| **Performance Domains** | Team · Measurement · Development Approach and Life Cycle |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-07-02 |
| **Downstream Skills** | SKL-07-01 (re-tailoring trigger) · SKL-06-03 |
| **File Path** | `skills/07-adaptive-hybrid/SKL-07-03-facilitate-retrospectives-and-continuous-improvement.md` |
| **Notes** | Covers Start/Stop/Continue, 4Ls, Mad/Sad/Glad formats; Prime Directive; improvement backlog; A21 feed. |

---

### SKL-07-04 — Plan and Deliver Hybrid Projects

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-07-04 |
| **Skill Name** | Plan and Deliver Hybrid Projects |
| **Pack** | 07 — Adaptive & Hybrid |
| **Status** | Draft · Untested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A06 §2 — Hybrid Structure extension |
| **Artifacts Updated** | A15 (master schedule) · A19 (cross-stream risks) · A17 (hybrid dashboard) |
| **PMBOK8 Process Anchor** | PMBOK8 Standard §4.2.3 · APG §3.1.6–3.1.11 · DA Hybrid Levels 1–3 |
| **Performance Domains** | Development Approach and Life Cycle · Planning · Delivery · Governance |
| **Focus Area** | Planning · Executing · Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-07-01 |
| **Downstream Skills** | SKL-07-02 · SKL-05-02 · SKL-05-01 |
| **File Path** | `skills/07-adaptive-hybrid/SKL-07-04-plan-and-deliver-hybrid-projects.md` |
| **Notes** | Covers 4 hybrid patterns (P1–P4); stream mapping; integration point management; dual governance model; hybrid anti-patterns; combined EVM + velocity reporting. |

---

## Pack 08 — PMO Governance

> **Pack Purpose:** Skills that execute at the PMO / Organizational level — running steering committee/governance board sessions, establishing status reporting templates/KPIs, performing PMO capability health audits, enforcing escalation protocols, and compiling portfolio-level status summaries.

> **Pack Prerequisites:** Governance structure defined in A35; core reporting standards defined in A05.

> **Pack Completion Criteria:** PMO service catalog established, portfolio dashboard active, compliance registry populated, escalation protocols active.

---

### SKL-08-01 — Run Governance Board Packet

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-08-01 |
| **Skill Name** | Run Governance Board Packet |
| **Pack** | 08 — PMO Governance |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A35 - Governance and Decision Authority Record (Board section) |
| **Artifacts Updated** | A17 — Work Performance Information |
| **PMBOK8 Process Anchor** | Guide §2.1 Governance Domain · PMO-Guide — §Building/Running PMO |
| **Performance Domains** | Governance |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-01-01 |
| **Downstream Skills** | SKL-08-05 |
| **File Path** | `skills/08-pmo-governance/SKL-08-01-run-governance-board-packet.md` |

---

### SKL-08-02 — Standardize Status Reporting

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-08-02 |
| **Skill Name** | Standardize Status Reporting |
| **Pack** | 08 — PMO Governance |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A05 — Context Register (Status Reporting Standards section) |
| **Artifacts Updated** | A17 — Work Performance Information (reporting template) |
| **PMBOK8 Process Anchor** | Guide §2.1 Governance Domain · PMO-Guide — §Methodology & Standards |
| **Performance Domains** | Governance |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-01-01 |
| **Downstream Skills** | SKL-08-05 |
| **File Path** | `skills/08-pmo-governance/SKL-08-02-standardize-status-reporting.md` |

---

### SKL-08-03 — Perform PMO Health Check

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-08-03 |
| **Skill Name** | Perform PMO Health Check |
| **Pack** | 08 — PMO Governance |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A05 — Context Register (PMO Maturity section) |
| **Artifacts Updated** | A21 — Lessons Learned Register |
| **PMBOK8 Process Anchor** | Guide §2.1 Governance Domain · PMO-Guide — §PMO Value & Maturity Assessment |
| **Performance Domains** | Governance |
| **Focus Area** | Closing |
| **Upstream Prerequisites** | SKL-08-02 |
| **Downstream Skills** | SKL-08-05 |
| **File Path** | `skills/08-pmo-governance/SKL-08-03-perform-pmo-health-check.md` |

---

### SKL-08-04 — Manage Escalation Protocols

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-08-04 |
| **Skill Name** | Manage Escalation Protocols |
| **Pack** | 08 — PMO Governance |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A35 — Governance and Decision Authority Record (Escalation section) |
| **Artifacts Updated** | A18 — Issue, Impediment, and Action Log |
| **PMBOK8 Process Anchor** | Guide §2.1 Governance Domain · AUTHORITY-ROUTING.md |
| **Performance Domains** | Governance |
| **Focus Area** | Executing |
| **Upstream Prerequisites** | SKL-01-01 |
| **Downstream Skills** | SKL-08-01 |
| **File Path** | `skills/08-pmo-governance/SKL-08-04-manage-escalation-protocols.md` |

---

### SKL-08-05 — Manage PMO Portfolio Reporting

| Field | Value |
|-------|-------|
| **Skill ID** | SKL-08-05 |
| **Skill Name** | Manage PMO Portfolio Reporting |
| **Pack** | 08 — PMO Governance |
| **Status** | Active · Tested |
| **Source Type** | PMI-derived |
| **Primary Artifact (Output)** | A05 — Context Register (Portfolio Report section) |
| **Artifacts Updated** | A17 — Work Performance Information (Portfolio view) |
| **PMBOK8 Process Anchor** | Guide §2.1 Governance Domain · PMO-Guide — §Portfolio Reporting |
| **Performance Domains** | Governance |
| **Focus Area** | Monitoring and Controlling |
| **Upstream Prerequisites** | SKL-08-02 |
| **Downstream Skills** | SKL-08-03 |
| **File Path** | `skills/08-pmo-governance/SKL-08-05-manage-pmo-portfolio-reporting.md` |

---

## Dependency Chain Diagram

```
PACK 01 — ORGANIZATIONAL SETUP ✅
══════════════════════════════════════════════════════
[A01 Authorization trigger]
    └──▶ SKL-01-01 (Establish PM Governance Framework)
              └──▶ SKL-01-02 (Define Artifact and Document Control Standards)
                        └──▶ SKL-01-03 (Configure Repository and Tool Environment)
                                  └──▶ [Pack 02 Initiating begins]

PACK 02 — INITIATING ✅
══════════════════════════════════════════════════════
SKL-02-01 (Initiate Project or Phase)
    └──▶ SKL-02-02 (Identify Stakeholders)
              └──▶ [Pack 03 Planning begins]
              └──▶ SKL-07-01 (Lifecycle selection — may run in parallel)

PACK 03 — PLANNING (Stakeholder/Comms) ✅
══════════════════════════════════════════════════════
SKL-02-02 ──▶ SKL-03-07 (Plan Stakeholder Engagement)
                   └──▶ SKL-03-08 (Plan Communications Management)

PACK 03 — PLANNING (Scope/Schedule/Finance/Resource) ✅
══════════════════════════════════════════════════════
SKL-02-02 ──▶ SKL-03-02 ──▶ SKL-03-03 ──▶ SKL-03-04 ──▶ SKL-03-05
                                                              ├──▶ SKL-03-06
                                                              ├──▶ SKL-03-13 ──▶ SKL-03-14 ──▶ SKL-03-15
                                                              └──▶ SKL-03-16 ──▶ SKL-03-17

PACK 03 — PLANNING (Risk) ✅
══════════════════════════════════════════════════════
SKL-03-07 + SKL-03-02 ──▶ SKL-03-09 ──▶ SKL-03-10 ──▶ SKL-03-11 ──▶ SKL-03-12

PACK 03 — PLANNING (Integration) ✅
══════════════════════════════════════════════════════
All Pack 03 skills ──▶ SKL-03-01 (A14 Integrated PM Plan)
                              └──▶ [Pack 04 Executing begins]

PACK 04 — EXECUTING ✅
══════════════════════════════════════════════════════
SKL-03-01 ──▶ SKL-04-01 (Direct & Manage Work)
 SKL-03-17 ──▶ SKL-04-03 ──▶ SKL-04-04 ──▶ SKL-04-05
 SKL-03-07 ──▶ SKL-04-06
 SKL-03-08 ──▶ SKL-04-07
 SKL-03-12 ──▶ SKL-04-08
 SKL-03-01 ──▶ SKL-04-09
 SKL-04-01 ──▶ SKL-04-02

PACK 05 — MONITORING & CONTROLLING ✅
══════════════════════════════════════════════════════
SKL-04-01 ──▶ SKL-05-01 ──▶ SKL-05-02
SKL-03-05 + SKL-05-02 ──▶ SKL-05-03
SKL-03-06 + SKL-05-02 ──▶ SKL-05-04
SKL-03-15 + SKL-05-02 ──▶ SKL-05-05
SKL-04-08 ──▶ SKL-05-06
SKL-04-06 ──▶ SKL-05-07
SKL-04-03 + SKL-04-05 ──▶ SKL-05-08
SKL-04-07 ──▶ SKL-05-09

PACK 06 — CLOSING ✅
══════════════════════════════════════════════════════
SKL-05-01 + deliverables accepted ──▶ SKL-06-01
SKL-06-01 ──▶ SKL-06-02
SKL-06-02 + SKL-07-03 ──▶ SKL-06-03  [terminal]

PACK 07 — ADAPTIVE & HYBRID ✅
══════════════════════════════════════════════════════
SKL-02-01 ──▶ SKL-07-01 (Select Lifecycle Approach)
                   ├──▶ SKL-07-02 (Backlog & Iterations)  ──▶ SKL-07-03 (Retrospectives)
                   └──▶ SKL-07-04 (Hybrid Planning & Delivery)
               SKL-07-03 ──▶ SKL-07-01 (re-tailoring feedback loop)
               SKL-07-03 ──▶ SKL-06-03
```

---

## Build Progress Summary

| Pack | Skill ID | Skill Name | Status |
|------|----------|-----------|--------|
| 01 | SKL-01-01 | Establish PM Governance Framework | ✅ Active · Tested |
| 01 | SKL-01-02 | Define Artifact and Document Control Standards | ✅ Active · Tested |
| 01 | SKL-01-03 | Configure Project Repository and Tool Environment | ✅ Active · Tested |
| 02 | SKL-02-01 | Initiate Project or Phase | ✅ Active · Tested |
| 02 | SKL-02-02 | Identify Stakeholders | ✅ Active · Tested |
| 03 | SKL-03-01 | Integrate and Align Project Plans | ✅ Active · Tested |
| 03 | SKL-03-02 | Plan Scope Management | ✅ Active · Tested |
| 03 | SKL-03-03 | Elicit and Analyze Requirements | ✅ Active · Tested |
| 03 | SKL-03-04 | Define Scope | ✅ Active · Tested |
| 03 | SKL-03-05 | Develop Scope Structure | ✅ Active · Tested |
| 03 | SKL-03-06 | Plan Schedule Management | ✅ Active · Tested |
| 03 | SKL-03-06b | Develop and Baseline Schedule (Detailed) | ✅ Active · Tested |
| 03 | SKL-03-07 | Plan Stakeholder Engagement | ✅ Active · Tested |
| 03 | SKL-03-08 | Plan Communications Management | ✅ Active · Tested |
| 03 | SKL-03-09 | Plan Risk Management | ✅ Active · Tested |
| 03 | SKL-03-10 | Identify Risks | ✅ Active · Tested |
| 03 | SKL-03-11 | Perform Risk Analysis | ✅ Active · Tested |
| 03 | SKL-03-12 | Plan Risk Responses | ✅ Active · Tested |
| 03 | SKL-03-13 | Plan Financial Management | ✅ Active · Tested |
| 03 | SKL-03-14 | Estimate Costs | ✅ Active · Tested |
| 03 | SKL-03-15 | Develop Budget | ✅ Active · Tested |
| 03 | SKL-03-16 | Plan Resource Management | ✅ Active · Tested |
| 03 | SKL-03-17 | Estimate Resources | ✅ Active · Tested |
| 03 | SKL-03-18 | Integrate Sustainability Into Project Planning | ✅ Active · Tested |
| 03 | SKL-03-19 | Plan Quality Management | ✅ Active · Tested |
| 03 | SKL-03-20 | Plan Procurement Management | ✅ Active · Tested |
| 03 | SKL-03-21 | Develop Requirements Traceability Matrix | ✅ Active · Tested |
| 04 | SKL-04-01 | Direct and Manage Project Work | ✅ Active · Tested |
| 04 | SKL-04-02 | Manage Project Knowledge | ✅ Active · Tested |
| 04 | SKL-04-03 | Acquire Resources | ✅ Active · Tested |
| 04 | SKL-04-04 | Develop Team | ✅ Active · Tested |
| 04 | SKL-04-05 | Manage Team | ✅ Active · Tested |
| 04 | SKL-04-06 | Manage Stakeholder Engagement | ✅ Active · Tested |
| 04 | SKL-04-07 | Manage Communications | ✅ Active · Tested |
| 04 | SKL-04-08 | Implement Risk Responses | ✅ Active · Tested |
| 04 | SKL-04-09 | Conduct Procurements | ✅ Active · Tested |
| 05 | SKL-05-01 | Monitor and Control Project Work | ✅ Active · Tested |
| 05 | SKL-05-02 | Perform Integrated Change Control | ✅ Active · Tested |
| 05 | SKL-05-03 | Control Scope | ✅ Active · Tested |
| 05 | SKL-05-04 | Control Schedule | ✅ Active · Tested |
| 05 | SKL-05-05 | Control Costs | ✅ Active · Tested |
| 05 | SKL-05-06 | Monitor Risks | ✅ Active · Tested |
| 05 | SKL-05-07 | Monitor Stakeholder Engagement | ✅ Active · Tested |
| 05 | SKL-05-08 | Control Resources | ✅ Active · Tested |
| 05 | SKL-05-09 | Monitor Communications | ✅ Active · Tested |
| 05 | SKL-05-13 | Perform Earned Value Analysis | ✅ Active · Tested |
| 06 | SKL-06-01 | Close Project or Phase | ✅ Active · Tested |
| 06 | SKL-06-02 | Final Performance Review | ✅ Active · Tested |
| 06 | SKL-06-03 | Capture and Archive Lessons Learned | ✅ Active · Tested |
| 07 | SKL-07-01 | Select and Tailor Lifecycle Approach | ✅ Active · Tested |
| 07 | SKL-07-02 | Manage Backlog and Iterations | ✅ Active · Tested |
| 07 | SKL-07-03 | Facilitate Retrospectives and Continuous Improvement | ✅ Active · Tested |
| 07 | SKL-07-04 | Plan and Deliver Hybrid Projects | ✅ Active · Tested |
| 08 | SKL-08-01 | Run Governance Board Packet | ✅ Active · Tested |
| 08 | SKL-08-02 | Standardize Status Reporting | ✅ Active · Tested |
| 08 | SKL-08-03 | Perform PMO Health Check | ✅ Active · Tested |
| 08 | SKL-08-04 | Manage Escalation Protocols | ✅ Active · Tested |
| 08 | SKL-08-05 | Manage PMO Portfolio Reporting | ✅ Active · Tested |

**Built:** 58 skills ✅  
**Planned:** 0  
**Total indexed:** 58 skills — All packs complete (Pack 01–08)

---

## Artifact Cross-Reference

| Artifact | Created By | Extended / Updated By |
|---------|-----------|----------------------|
| A03 — Repository and Tool Configuration Record | SKL-01-03 | SKL-01-03 (re-run on major environment change) |
| A04 — Project Charter | SKL-02-01 | — |
| A05 — Context Register / OPA | SKL-01-01 (Governance) · SKL-01-02 (Doc Control) · SKL-01-03 (Tool Environment) | SKL-02-01 · SKL-02-02 · SKL-04-02 · SKL-06-03 |
| A06 — Project Management Plan (lifecycle/tailoring sections) | SKL-07-01 | SKL-07-04 · SKL-07-03 (tailoring changelog) · SKL-01-01 (governance ref) · SKL-01-02 (doc control ref) · SKL-01-03 (tool env ref) |
| A07 — Stakeholder Register and Engagement Strategy | SKL-02-02 | SKL-03-07 · SKL-03-08 · SKL-04-06 · SKL-05-07 |
| A08 — Scope and Requirements / Backlog | SKL-03-02 | SKL-03-03 · SKL-03-04 · SKL-03-05 · SKL-05-03 · SKL-07-02 |
| A12 — Change Log | SKL-05-02 | SKL-05-02 (ongoing) |
| A14 — Integrated PM Plan | SKL-03-01 | All planning skills (subsidiary references) · SKL-05-02 |
| A15 — Schedule Model | SKL-03-06 | SKL-03-08 · SKL-04-01 · SKL-05-04 · SKL-07-02 · SKL-07-04 |
| A16 — Financial Management / Cost Baseline | SKL-03-13 | SKL-03-14 · SKL-03-15 · SKL-05-05 |
| A17 — Performance Report | SKL-05-01 | SKL-06-02 · SKL-07-04 (hybrid dashboard) |
| A18 — Issue Log | SKL-04-01 | SKL-04-01 (ongoing) |
| A19 — Risk Management Record | SKL-03-09 | SKL-02-02 · SKL-03-07 · SKL-03-10–12 · SKL-04-08 · SKL-05-06 · SKL-07-04 |
| A21 — Lessons Learned Register | SKL-04-02 | SKL-07-03 · SKL-06-03 |
| A26 — Resource Capacity and Acquisition Record | SKL-03-16 | SKL-03-17 · SKL-04-03 · SKL-04-04 · SKL-04-05 · SKL-05-08 |
| A27 — Project Closure Record | SKL-06-01 | SKL-06-02 |
| A28 — Communications and Reporting Record | SKL-03-08 | SKL-04-07 · SKL-05-09 |
| A31 — Contract and Procurement Log | SKL-04-09 | SKL-04-09 (ongoing) |
| A-NEW-SUST — Sustainability Register | SKL-03-18 | SKL-05-01 |

---

## Naming and ID Conventions

| Convention | Rule |
|-----------|------|
| Skill ID format | `SKL-PP-NN` — PP = 2-digit pack number; NN = 2-digit sequence within pack |
| File naming | `SKL-PP-NN-kebab-case-skill-name.md` |
| Pack folder | `skills/PP-packname/` (e.g., `skills/01-organizational-setup/`) |
| Status values | `Draft · Untested` → `Draft · In Review` → `Reviewed` → `Approved · Production` |
| Source type | `PMI-derived` / `synthesis` / `organization-defined` |
| PMBOK8 anchor | Always cite Guide section number + Figure number |

---

## Registry Maintenance Rules

1. **Add a shell entry for every planned skill before it is built** — the registry must always show the full planned build scope.
2. **Update status immediately** when a skill file is created, reviewed, or approved.
3. **Update the Artifact Cross-Reference table** whenever a skill adds a new artifact write target.
4. **Update the Dependency Chain Diagram** when a new skill's position in the chain is non-obvious.
5. **Never remove a skill entry** — deprecated skills are marked `Deprecated · Replaced by SKL-XX-XX`.
6. **This registry is not a skill file** — it does not contain instructions, tests, or step-by-step guidance.

---

*Authority: PMBOK8 · Artifacts-V-1.1 · Repository Operating Rules §3.2 Consolidation Rule*  
*Owner: Repository Maintainer*  
*Version: 1.3.1 — Updated 2026-06-03 — Wave 1 audit fixes applied (F-23); total built = 48/48; all packs complete*
