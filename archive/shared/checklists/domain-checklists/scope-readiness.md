# shared/checklists/domain-checklists/scope-readiness.md — Scope Domain Readiness Checklist
**Status:** Active
**Version:** 1.0.0
**Authority:** PMBOK8 §2.1 Scope Performance Domain
**File Path:** `shared/checklists/domain-checklists/scope-readiness.md`

---

## Purpose

This checklist verifies the structural and logical integrity of the Scope Baseline (A08) and its underlying systems-thinking connections before it is formally locked.

---

## Readiness Checklist

| # | Check Item | Verification Action | Target Artifact | Verified Status |
|---|---|---|---|---|
| **1** | **Elicitation Traceability** | Verify that every requirement in A08 traces back to a business need identified in the Business Case (A01). | `A08 §1.1` / `A01` | [ ] Yes / [ ] No |
| **2** | **WBS Completeness** | Confirm the WBS contains a complete hierarchy from Project to Level-3 Work Packages. | `A08 §2.2` | [ ] Yes / [ ] No |
| **3** | **WBS Dictionary** | Confirm WBS Dictionary defines scope boundaries, deliverables, and acceptance criteria for all work packages. | `A08 §3.1` | [ ] Yes / [ ] No |
| **4** | **Scope to Schedule Link** | Assert that WBS Work Package IDs correspond to unique schedule IDs in A15. | `A08 §4.1` / `A15` | [ ] Yes / [ ] No |
| **5** | **Scope to Cost Link** | Assert that WBS Work Package IDs correspond to unique budget lines in A16. | `A08 §4.2` / `A16` | [ ] Yes / [ ] No |

---

## Gate Transition Criteria

*   **PASS (5 / 5 met):** Scope baseline possesses full integrity and system linkages. Ready to lock.
*   **FAIL (< 5 met):** Missing traceability or WBS dictionary items. Scope baseline remains rejected.

---

*Authority: PMBOK8 Scope Performance Domain · PMOSkills Repository*
