---
file: how-to-use-authority-routing.md
version: "1.0.0"
status: Active
last_updated: "2026-05-31"
owner: Repository Maintainer
approval_authority: Repository Maintainer
---

# How to Use Authority Routing

**Version:** 1.0.0  
**Status:** Active  
**File Path:** `docs/human-practitioners/authority-routing.md`  
**Authority:** AUTHORITY-ROUTING.md · PMBOK8 Guide §2.1 Governance Performance Domain

---

## Purpose

This guide explains how to apply the T1–T4 decision threshold model defined in `AUTHORITY-ROUTING.md`. It gives every project participant — from delivery team members to portfolio authorities — a consistent, traceable method for routing decisions to the correct approval level.

---

## Audience

- Project managers and delivery leads making day-to-day operational decisions
- Sponsors and change authorities reviewing escalated decisions
- PMO practitioners designing governance workflows
- AI agents and MCP tools that embed decision-routing logic
- Contributors authoring or validating artifacts in this repository

---

## Prerequisites

Before applying this guide:

1. Read [`AUTHORITY-ROUTING.md`](../AUTHORITY-ROUTING.md) — the primary reference for all routing rules and artifact authority rows.
2. Understand the artifact numbering system (A01–A41) and which governance layer each artifact belongs to.
3. Know the delegated tolerance thresholds set in your project's `A35 Governance and Decision Authority Record`.
4. Confirm which development approach and lifecycle is active for your project (see `A13`).

---

## What Is the T1–T4 Model?

The T1–T4 model is a decision threshold framework that assigns every project decision to one of four escalating authority bands based on the decision's scope, reversibility, financial or schedule impact, and cross-project reach. Rather than routing decisions by seniority or title alone, the model uses objective characteristics — localized vs. cross-baseline effect, within-project vs. enterprise impact — to determine the correct authority level. This ensures that operational decisions are handled efficiently at the team level, material changes receive appropriate change-authority review, and strategic or cross-project decisions reach the governance bodies accountable for them, preserving both agility and accountability.

*Authority: AUTHORITY-ROUTING.md · PMBOK8 Guide §2.1 Governance Performance Domain*

---

## The Four Decision Bands

The governance layers that frame these bands are:

**Organizational Governance → OPM Governance → PMO Governance → Portfolio/Program/Project Governance → Delivery Team Ways of Working**

---

### T1 — Operational

| Field | Detail |
|-------|--------|
| **Characteristics** | Localized effect, low risk, inside approved plan tolerances |
| **Default Decision Authority** | Project manager or designated lead |

**Concrete examples of T1 decisions:**

1. Updating a risk entry in A19 (Risk Management Record) to reflect a closed or reduced exposure within the current risk tolerance.
2. Reassigning a task within the team to balance workload, where no baseline date, cost, or scope commitment is affected.
3. Adjusting a meeting schedule or cadence to improve team coordination, with no governance or reporting impact.

---

### T2 — Controlled Change

| Field | Detail |
|-------|--------|
| **Characteristics** | Material effect on one baseline or one major commitment, within project authority |
| **Default Decision Authority** | Sponsor-delegated board, change authority, or functional authority |

**Concrete examples of T2 decisions:**

1. Approving a scope change that adds one week to the schedule, within the PM's delegated float tolerance and requiring formal change log entry in A12.
2. Shifting a milestone date within available schedule float, where the change affects one baseline record (A15) but does not breach the project's approval threshold.
3. Onboarding a new team member to fill a vacated role, where the staffing change affects A26 (Resource Capacity and Acquisition Record) but remains within the PM's delegated staffing authority.

---

### T3 — Governance Change

| Field | Detail |
|-------|--------|
| **Characteristics** | Cross-baseline effect, major financial/schedule/value impact, or authority boundary shift |
| **Default Decision Authority** | Project governing body or sponsor |

**Concrete examples of T3 decisions:**

1. Approving a budget increase above the PM's delegated financial limit, requiring sponsor or governing body sign-off recorded in A16 (Financial Baseline and Funding Record).
2. Changing the development lifecycle approach — for example, shifting from a predictive to a hybrid model — which alters A13 (Development Approach and Lifecycle Record) and may affect governance cadence.
3. Adjusting the project charter objectives in A04, which shifts the authorised value case, scope boundary, or authority delegation on which the project was initiated.

---

### T4 — Enterprise Portfolio

| Field | Detail |
|-------|--------|
| **Characteristics** | Cross-project, strategic, regulatory, or enterprise-service impact |
| **Default Decision Authority** | Portfolio authority, PMO governance forum, or executive authority |

**Concrete examples of T4 decisions:**

1. Cancelling a project and reallocating its approved budget and resources to higher-priority initiatives, recorded in A10 (Intake and Prioritization Decision Record) and A24 (Closure and Benefits Transition Record).
2. Reallocating budget across two active projects, creating a cross-project dependency and capacity conflict that must be resolved by the portfolio board via A22 (Portfolio Interdependency Record).
3. Changing the PMO's service model — for example, moving from a supportive PMO to a controlling PMO — which affects enterprise standards, tooling, and authority structures recorded in A39 (PMO Configuration and Authority Record).

---

## Routing Decision Flowchart (ASCII)

```
START: A decision is needed
       |
       v
Is the decision within the PM's delegated tolerances and fully reversible?
YES → T1: PM decides
NO
       |
       v
Does it materially affect one baseline or one major commitment, within project authority?
YES → T2: Delegated change authority or functional authority
NO
       |
       v
Does it cross baselines, alter major financial/schedule/value parameters, or shift authority boundaries?
YES → T3: Project governing body or sponsor
NO
       |
       v
Does it affect multiple projects, strategic priorities, or enterprise-level services?
YES → T4: Portfolio authority, PMO governance forum, or executive
```

---

## How to Apply the Model Step by Step

1. **Identify the decision type** from the Decision Category Reference Table in `AUTHORITY-ROUTING.md`. Match the decision to its category (e.g., baseline change, resource acquisition, procurement award, AI/data exception).

2. **Assess impact breadth** — determine whether the decision is contained within one project and one baseline, or whether it crosses baselines, affects other projects, or touches enterprise-level services or strategic priorities.

3. **Identify the threshold band** — apply the T1–T4 model characteristics. If numeric thresholds have been defined in A35, apply them; otherwise use qualitative routing based on the decision's scope, risk, and reversibility.

4. **Confirm the default authority for that band** — T1: PM or designated lead; T2: delegated change authority or functional authority; T3: project governing body or sponsor; T4: portfolio authority, PMO governance forum, or executive.

5. **Check the artifact's authority row in the AUTHORITY-ROUTING.md Artifact Quick Reference (A01–A41)** — confirm that the authority identified in step 4 matches the artifact's Primary Owner and Default Approval Authority columns. Note any escalation trigger conditions that apply.

6. **Record the decision in the relevant artifact and note the authority tier applied** — use the artifact's own record-keeping fields to document the decision, the band applied, and the authority who approved it. Decisions that cross T2 or above must be recorded in A12 (Integrated Change Decision Record) in addition to the artifact.

---

## Common Routing Scenarios

| Scenario | Band | Authority | Record in artifact |
|----------|------|-----------|-------------------|
| Updating a risk response for a low-exposure risk within accepted tolerance | T1 | Project manager | A19 — Risk Management Record |
| Reassigning a team task with no baseline impact | T1 | Project manager or delivery lead | A25 — Team Operating and Responsibility Record |
| Approving a scope addition that adds one week within float tolerance | T2 | Delegated change authority | A12 — Integrated Change Decision Record; A15 — Schedule Baseline |
| Onboarding a replacement team member within approved headcount | T2 | PM within delegated staffing limits | A26 — Resource Capacity and Acquisition Record |
| Approving a budget increase above the PM's delegated financial limit | T3 | Sponsor or project governing body | A16 — Financial Baseline and Funding Record; A12 |
| Changing the development lifecycle from predictive to hybrid | T3 | Sponsor or project governing body | A13 — Development Approach and Lifecycle Record |
| Reallocating approved budget across two active projects | T4 | Portfolio board | A22 — Portfolio Interdependency Record; A10 |
| Changing the PMO service model or enterprise tooling standard | T4 | PMO governance forum or executive authority | A39 — PMO Configuration and Authority Record; A36 |

---

## What Happens If You Get the Band Wrong

### Under-routing (treating a T3 decision as T1 or T2)

When a decision that should reach the project governing body or sponsor is resolved unilaterally at the PM level, the result is an **unauthorized change**. This creates a governance breach, invalidates the approved baseline, and may expose the project to audit risk, renegotiation of commitments, or uncontrolled scope growth. Stakeholders and sponsors may lose confidence in the integrity of reported performance data.

### Over-routing (elevating a T2 decision to T4 unnecessarily)

When a decision that the delegated change authority can resolve is unnecessarily escalated to portfolio or executive governance, the result is **unnecessary delay and governance overhead**. Repeated over-routing consumes the sponsor's attention for issues that do not warrant it, erodes credibility, slows delivery, and reduces the effectiveness of governance forums for genuinely strategic decisions.

### How to correct a mis-routed decision

Use **A12 — Integrated Change Decision Record** to document the retroactive decision trail. Record the original decision, the authority level at which it was taken, the correct band in hindsight, the corrective action taken, and the authority who ratified it retroactively. This preserves an auditable change history and closes the governance gap without requiring the decision to be re-executed if the outcome remains valid.

---

## Related Files

| File | Purpose |
|------|---------|
| [`AUTHORITY-ROUTING.md`](../AUTHORITY-ROUTING.md) | Primary reference — full T1–T4 model, governance layers, artifact authority rows, escalation path rules, and RACI defaults |
| [`source-authority.md`](../source-authority.md) | Repository source authority model — defines the three-tier authority hierarchy (PMBOK8, PMI companions, organization-defined) |
| [`docs/human-practitioners/getting-started.md`](getting-started.md) | Onboarding guide for new repository users |
| [`docs/human-practitioners/how-to-use-skills.md`](how-to-use-skills.md) | Guide to using and authoring skills in the repository |
| [`docs/general/how-to-contribute.md`](how-to-contribute.md) | Contribution workflow, file naming, and quality standards |
| [`CONTRIBUTING.md`](../CONTRIBUTING.md) | Root-level contribution rules — authority, workflow, commit convention |
| [`SKILL-REGISTRY.md`](../SKILL-REGISTRY.md) | Current registry of all skills and their status |

---

*Authority: AUTHORITY-ROUTING.md · PMBOK8 Guide §2.1 Governance Performance Domain*
