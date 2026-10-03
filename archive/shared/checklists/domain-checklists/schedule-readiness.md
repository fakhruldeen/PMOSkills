# shared/checklists/domain-checklists/schedule-readiness.md — Schedule Domain Readiness Checklist
**Status:** Active
**Version:** 1.0.0
**Authority:** PMBOK8 §2.2 Schedule Performance Domain
**File Path:** `shared/checklists/domain-checklists/schedule-readiness.md`

---

## Purpose

This checklist verifies the structural logic, dependencies, resources, and buffer constraints of the Schedule Baseline (A15) before locking.

---

## Readiness Checklist

| # | Check Item | Verification Action | Target Artifact | Verified Status |
|---|---|---|---|---|
| **1** | **Logic and Sequencing** | Verify 100% of schedule activities have at least one predecessor and successor (excluding start/end milestones). | `A15 §2.1` | [ ] Yes / [ ] No |
| **2** | **Critical Path** | Verify the Critical Path is clearly computed and has zero negative float. | `A15 §3.2` | [ ] Yes / [ ] No |
| **3** | **Resource Loading** | Confirm that resource assignments in A15 match the secured capacities in A26. | `A15 §4.1` / `A26` | [ ] Yes / [ ] No |
| **4** | **Schedule Buffers** | Verify schedule reserve (buffer) time is documented and separated from core activity durations. | `A15 §5.3` | [ ] Yes / [ ] No |
| **5** | **WBS Alignment** | Confirm WBS Work Package IDs correspond to unique schedule IDs in A15. | `A15 §6.1` / `A08` | [ ] Yes / [ ] No |

---

## Gate Transition Criteria

*   **PASS (5 / 5 met):** Schedule baseline possesses full logic validity. Ready to lock.
*   **WARN (4 / 5 met):** Minor resource contentions exist, but schedule buffers are healthy. **Condition:** Action plan to resolve contention within 3 days.
*   **FAIL (< 4 met OR broken logic present):** Critical scheduling flaws. Schedule rejected.

---

*Authority: PMBOK8 Schedule Performance Domain · PMOSkills Repository*
