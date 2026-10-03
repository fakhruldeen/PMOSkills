# tests/ — Skill and Integration Test Cases
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md §7.5 Phase 6 gate
**File Path:** `tests/README.md`

---

## Purpose

This directory contains structured test suites for every skill (unit tests) and cross-skill integration flows (integration tests). The tests verify that each skill produces correct outputs from defined inputs, respects quality criteria, and integrates correctly with upstream and downstream skills.

---

## Active Structure

```
tests/
├── README.md                              ← This file
├── skill-tests/
│   ├── index.md                           ← Master skill test catalog (48 skills)
│   ├── ST-SKL-01-01.md                    ← PM Governance Framework Test Suite (9 cases)
│   ├── ST-SKL-01-02.md                    ← Document Control Standards Test Suite (9 cases)
│   ├── ...                                ← 46 other skill test suites (each has 9 cases)
│   └── ST-SKL-07-04.md                    ← Hybrid Projects Test Suite (9 cases)
└── integration-tests/
    ├── index.md                           ← Master integration test catalog
    ├── IT-01-setup-to-initiating.md       ← Pack 01 → Pack 02 flow
    ├── IT-02-initiating-to-planning.md    ← Pack 02 → Pack 03 flow
    ├── IT-03-planning-to-executing.md     ← Pack 03 → Pack 04 flow
    ├── IT-04-executing-to-mc.md           ← Pack 04 → Pack 05 flow
    ├── IT-05-mc-to-closing.md             ← Pack 05 → Pack 06 flow
    ├── IT-06-hybrid-overlay.md            ← Pack 07 overlay on Pack 03–05
    └── IT-07-full-lifecycle.md            ← End-to-end full lifecycle flow test
```

---

## Test Case Schema

Each skill test file (`ST-SKL-NN-NN.md`) contains 9 deterministic test cases structured as follows:

```markdown
### Test Case N: [Test Name]
- **Scenario:** [Specific execution scenario]
- **Input:** [Artifacts and states required before skill runs]
- **Expected Output:** [Artifact sections produced, fields populated, quality criteria met]
- **Pass Criteria:** [Verifiable assertions]
- **Failure Cases:** [Conditions under which skill should fail or escalate]
- **Authority Check:** [Specific role responsible for sign-off]
```

---

## Active Build Scorecard

| Phase / Pack | Skill Tests Built | Integration Tests Built | Rationale |
|---|---|---|---|
| **Pack 01 — Setup** | 3 / 3 | | Foundation governance rules |
| **Pack 02 — Initiating** | 2 / 2 | | Charter and stakeholder setup |
| **Pack 03 — Planning** | 18 / 18 | | Detailed scope, schedule, finance, and ESG baselines |
| **Pack 04 — Executing** | 9 / 9 | | Resource boarding, procurement, and team agreements |
| **Pack 05 — Controlling** | 9 / 9 | | EVM performance logs and Lean waste audits |
| **Pack 06 — Closing** | 3 / 3 | | Deliverable sign-offs and transition logs |
| **Pack 07 — Adaptive** | 4 / 4 | | Backlogs, iterations, and continuous retrospectives |
| **Cross-Pack Handovers** | | 7 / 7 | Verification of multi-phase flow and repository integrity |

---

## Test Coverage Metrics

| Layer | Coverage |
|-------|--------|
| **Skill tests** | 9 test cases per skill × 48 skills = **432 test cases** |
| **Integration tests** | 7 integration flow tests × 3 test cases = **21 test cases** |
| **Total** | **453 verified test cases** |

---

## Dependencies

- **All 48 skill files** — tests validate skill inputs/outputs
- **All artifact definitions in `artifacts/`** — expected outputs reference canonical schemas
- **`shared/validators/`** — baseline checkers, waste tests, and quality checkers integrated into assertions

---

*Status: Active · All Phase 6 tests fully implemented · Authority: QUALITY-STANDARDS.md*
*Last Updated: 2026-06-02 · Version 1.0.0*

