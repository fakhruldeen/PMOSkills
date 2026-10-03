---
ref_id: TAILOR-SCHED
ref_type: FocusArea
ref_name: "Schedule Domain Tailoring Guidance"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.5 (Schedule PD) · Scheduling Practice Standard §3"
file_path: "reference/tailoring/tailoring-schedule.md"
---

# Schedule Domain Tailoring Guidance

**Ref ID:** TAILOR-SCHED  
**Type:** FocusArea  
**PMBOK8 Source:** PMBOK 8 Schedule Performance Domain  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Schedule Tailoring Factors

Schedule tailoring ensures that the level of detail, tool sophistication, and modeling methods used to track project timelines are proportional to the project's complexity, size, and team velocity.

Key tailoring factors include:
* **Development Approach:** Predictive schedules require Critical Path Method (CPM) networks; adaptive schedules use sprint backlogs, release plans, and team velocity metrics.
* **Team Location & Footprint:** Globally dispersed teams require centralized cloud-based scheduling platforms.
* **Resource Constraints:** Projects with shared or highly scarce resources require robust resource leveling.
* **Technology Novelty:** High technical uncertainty requires scheduling extra buffers or executing research spikes before estimating durations.

---

## 2. Scaling Scheduling Across T1–T4

Scheduling tools and methods are scaled according to complexity tiers:

| Schedule Element | T1 (Low Complexity) | T2 (Medium Complexity) | T3 (High Complexity) | T4 (Strategic/Enterprise) |
|---|---|---|---|---|
| **Scheduling Tool** | Simple spreadsheet | MS Project / Smartsheet | Central PMIS (Jira + Portfolio) | Enterprise PPM system |
| **Estimating Methods** | Analogous / Single-point | Parametric / Three-point | Three-point / Bottom-up | Advanced statistical modeling |
| **Network Modeling** | None (simple task list) | Critical Path (CPM) network | CPM + Resource Leveling | CPM + Monte Carlo Simulations |
| **Variance Tolerances** | +/- 15 business days | +/- 5 business days | +/- 3 business days | +/- 1 business day |

---

## 3. Scenario Integration (Meridian CRM System Upgrade)

During the *Meridian CRM System Upgrade* planning phase (`PR08`), scheduling was tailored for the hybrid deployment.
* **Adaptive Tailoring:** The UI design and testing phases were scheduled in 2-week agile sprints.
* **Predictive Tailoring:** The legacy database migration and core API integration were scheduled using a predictive Critical Path Method (`PR12`) to manage cross-platform dependencies.
* **Outcome:** Resource leveling was conducted across both tracks, preventing developer burnout and maintaining the target deployment date.

---

## 4. Schedule Tailoring Checklist

When tailoring project schedules, answer these key questions:

- [ ] **Which scheduling methodology fits best?** Select critical path networks for predictive scope, or sprint iteration schedules for adaptive scope.
- [ ] **What are the estimation confidence levels?** For low confidence, mandate three-point (PERT) estimating (`PR11`) to include optimistic and pessimistic boundaries.
- [ ] **How is schedule slippage addressed?** Set schedule tolerance limits and define threshold triggers for schedule compression techniques (crashing or fast-tracking in `PR34`).
- [ ] **How often are progress updates recorded?** Determine whether progress is recorded daily (T1 agile sprints) or aggregated weekly/bi-weekly (T2–T4 predictive status reports).

---

*Authority: PMBOK8 Guide §2.5 · Scheduling Practice Standard §3*
