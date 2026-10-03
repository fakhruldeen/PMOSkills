---
test_id: "ST-SKL-07-02"
test_type: "SkillTest"
target: "SKL-07-02"
version: "1.0.0"
status: "Active"
test_case_count: 9
file_path: "tests/skill-tests/ST-SKL-07-02.md"
---
# ST-SKL-07-02 — Test Suite for Manage Backlog and Iterations
**Skill Target:** SKL-07-02
**Authority:** QUALITY-STANDARDS.md §7.5 Phase 6 gate
**File Path:** `tests/skill-tests/ST-SKL-07-02.md`

---

## Purpose

This test suite provides nine deterministic test cases to validate the execution, inputs, outputs, thresholds, and boundary conditions of skill `SKL-07-02` (Manage Backlog and Iterations).

---

## Test Cases

### Test Case 1: Standard Happy Path
- **Scenario:** Execute the skill with complete, valid prerequisites and standard input values under normal project parameters.
- **Input:** All required baseline parameters, standard checklists, and correct template formats.
- **Expected Output:** Perfect schema-compliant outputs with zero warning flags.
- **Pass Criteria:** All validation gates return PASS status with no corrective actions required.
- **Failure Cases:** Any required field missing or incorrect format causes validation exception.
- **Authority Check:** Project Manager signs off operational outputs.

### Test Case 2: Missing Non-Critical Input
- **Scenario:** Execute the skill with one or more optional or non-critical input fields left empty.
- **Input:** Complete core mandatory fields; optional parameters (e.g. secondary stakeholder details) omitted.
- **Expected Output:** Validation returns a WARN alert but allows output generation.
- **Pass Criteria:** Output contains all core data with logged warning for optional parameters.
- **Failure Cases:** Validation completely fails or rejects input as L1 failure.
- **Authority Check:** Project Manager approves output with documented minor exception.

### Test Case 3: Missing Critical Prerequisite
- **Scenario:** Execute the skill when a mandatory upstream prerequisite artifact is missing or unapproved.
- **Input:** Standard input values, but the upstream prerequisite (e.g. Project Charter A04) is in Draft status.
- **Expected Output:** Deterministic validation FAIL; execution halts immediately.
- **Pass Criteria:** The validator raises a clear prerequisite block exception and rejects the transition.
- **Failure Cases:** The skill execution proceeds or creates outputs without the prerequisite baseline.
- **Authority Check:** CCB or Sponsor intervention required.

### Test Case 4: Extreme High-Cost Scenario
- **Scenario:** Execute the skill under high-complexity project parameters exceeding normal standard budget tolerances.
- **Input:** Financial budget inputs triggering T3 threshold band controls.
- **Expected Output:** Outputs trigger T3 escalation routing to Sponsor.
- **Pass Criteria:** System identifies T3 breach and appends escalation path flag to change log.
- **Failure Cases:** The skill routes decision within normal T1/T2 bands or fails to detect cost threshold breach.
- **Authority Check:** Sponsor formal sign-off required.

### Test Case 5: Extreme Schedule Constraints
- **Scenario:** Execute the skill under aggressive compressed schedules triggering threshold warnings.
- **Input:** Schedule dates showing critical path compressions and negative float variance.
- **Expected Output:** System raises critical path warnings and alerts in EVM dashboard.
- **Pass Criteria:** Warnings are logged and recovery response triggers in Risk Management (A19).
- **Failure Cases:** Schedule baselines are locked with negative float without raising warnings.
- **Authority Check:** Project Sponsor and PMO sign-off.

### Test Case 6: ESG/Sustainability Metric Deviation
- **Scenario:** Execute the skill under high environmental impact parameters violating project sustainability targets.
- **Input:** Carbon footprint or waste circularity estimates exceeding the baseline limit in A-NEW-SUST.
- **Expected Output:** Validation raises a critical ESG warning gate flag.
- **Pass Criteria:** The Sustainability Register logs the breach and triggers correction actions in A12.
- **Failure Cases:** No warning raised; environmental limits exceeded silently.
- **Authority Check:** PMO Director and Sponsor approval required.

### Test Case 7: Multi-Resource Contention
- **Scenario:** Execute the skill when key assigned resources are over-allocated across parallel WBS tasks.
- **Input:** Resource capacity inputs showing double-booking or capacity conflicts.
- **Expected Output:** Validation raises a Resource Allocation WARN alert.
- **Pass Criteria:** Resource capacity record (A26) logs contention and routes trade-offs via A21.
- **Failure Cases:** Resource baselines locked without notifying PM on contention.
- **Authority Check:** Functional Manager and PM joint approval.

### Test Case 8: Unclear Scope/Vague Requirements
- **Scenario:** Execute the skill with ambiguous requirements missing clear acceptance metrics.
- **Input:** Scope statement containing narrative adjectives instead of quantitative parameters.
- **Expected Output:** Artifact quality check raises FAIL due to placeholder or vague criteria.
- **Pass Criteria:** Skill halts and requests clarification in WBS dictionary.
- **Failure Cases:** Vague scope baseline is locked as active.
- **Authority Check:** CCB or Product Owner intervention.

### Test Case 9: Tailoring Exception Triggered
- **Scenario:** Execute the skill under a tailored project approach bypassing a default reference process.
- **Input:** A06 Tailoring Record omitting default process controls due to small scale.
- **Expected Output:** Validation accepts tailoring deviation with documented justification.
- **Pass Criteria:** Standard checks are bypassed, and justification is archived in configuration log.
- **Failure Cases:** System raises critical blocking exception despite approved tailoring record.
- **Authority Check:** PMO Leader and Sponsor sign-off.
