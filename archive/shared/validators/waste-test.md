# shared/validators/waste-test.md — Waste Detection Validator
**Status:** Active
**Version:** 1.0.0
**Authority:** PMBOK8 Principle 3 (§3.3 Focus on Value) · Principle 8 (§3.4 Embed Quality)
**File Path:** `shared/validators/waste-test.md`

---

## Purpose

The **Waste Detection Validator** is a lean audit tool designed to evaluate project delivery processes, meeting cadences, and artifact maintenance for signs of waste. It uses the classic **TIMWOODS** categories (Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, and Underutilized Talent) customized for knowledge-work and project management.

---

## Waste Audit Questionnaire

| Lean Waste Category | Project Management Interpretation | Diagnostic Audit Question | Trigger Condition |
|---|---|---|---|
| **Transportation** | Excess handoffs of files or info | *Are artifacts routing through multiple parallel approvals before signature?* | ≥ 3 handoffs for a T1/T2 decision |
| **Inventory** | Unused draft plans or stale files | *Are there draft artifacts sitting untouched for more than 15 business days?* | Active status is Draft for > 15 days |
| **Motion** | Complex folder navigation / searching| *Does finding a standard repository template require more than 3 directory clicks?*| Template folder nested > 3 levels deep |
| **Waiting** | Delays in approvals or dependencies | *Is the delivery team blocked waiting for a sponsor approval on a T1/T2 change?* | Review wait time > 3 business days |
| **Overproduction** | Creating unnecessary documents | *Are we creating standalone detail logs when standard registers (A12/A18) suffice?* | Standalone log created without A06 permission |
| **Overprocessing** | Excess detail beyond project scale | *Are we completing complex quantitative risk registers (A20) for small T1 projects?* | QRA executed on a T1 scope |
| **Defects** | Rework caused by unclear requirements | *Are deliverables failing validation checks due to vague requirements or typos?* | Repetitive quality check failures |
| **Skills (Talent)** | Underutilizing team member strengths| *Are subject matter experts performing repetitive administrative formatting tasks?* | Senior resource logged on administrative tasks |

---

## Evaluation Logic and Scoring

Execute this validator by scoring each category above from `0` (No waste detected) to `3` (Severe waste detected).

```
Total Waste Score = Sum of all 8 Category Scores (Maximum score: 24)
```

### Deterministic Output Criteria

*   **PASS (Score 0 - 6):** Low waste level. The process is lean and efficient. Proceed to execution.
*   **WARN (Score 7 - 12):** Moderate waste level. Gaps identified in efficiency. Implement corrective lean optimization (e.g., streamline handoffs, archive stale drafts) within 5 days.
*   **FAIL (Score > 12):** Critical waste level. Delivery flow is heavily compromised by overhead. **Stop work** and conduct a retrospective to refactor the workflow.

---

*Authority: PMBOK8 Standard §3.3 · PMOSkills Repository*
*Last Updated: 2026-06-02 · Initial Release*
