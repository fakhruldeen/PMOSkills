---
test_plan_id: TST-COMPLIANCE-PLAN
test_plan_name: PMBOK 8th Edition Compliance & Quality Standards Test Plan
version: "1.0.0"
status: Active
authority: PMBOK8 Primary · QUALITY-STANDARDS.md Governing
file_path: "tests/pmbok8-compliance-test-plan.md"
---

# PMBOK 8th Edition Quality Standards & Compliance Test Plan

## 1. Executive Summary & Strategy
The **PMOSkills Repository** is built to adhere strictly to the **PMBOK® Guide – Eighth Edition** and its companion resources. This document defines the formal, repeatable compliance and quality testing strategy to guarantee that all stubs, checklists, reference documents, and artifact templates satisfy the rigorous standards established in [`QUALITY-STANDARDS.md`](../QUALITY-STANDARDS.md).

```
[Quality Standards] ➔ [Automated Validation (L1)] ➔ [Manual Auditing (L2)] ➔ [Traceability (L3)] ➔ [Verified Compliant]
```

### 1.1 Objectives
* **100% Structural Alignment:** Verify that every file is conformant with its structural schema (YAML front-matter, header sequence, mandatory change logs).
* **PMBOK 8 Traceability:** Ensure that every skill and process record anchors directly to specific PMBOK 8 section numbers (e.g. §4.3.2) and lists its specific primary and secondary source books.
* **Functional Integrity:** Validate that the triple constraints routers, escalation paths, and TIMWOODS waste checklists are executable.
* **No Stale Data:** Ensure zero placeholders or pre-filled `[FIELD: ...]` entries exist in active templates or project baselines.

---

## 2. Three-Tier Compliance Quality Gates (L1, L2, L3)

The testing execution is structured into three progressive validation gates:

```mermaid
graph TD
    subgraph Gate L1: Structural
        A[Check YAML block] --> B[Validate Unique IDs]
        B --> C[Verify File Names]
        C --> D[Audit Header Hierarchies]
    end

    subgraph Gate L2: Semantic Content
        E[Check Section References] --> F[Ensure No Placeholders]
        F --> G[Verify Primary/Secondary Source Codes]
        G --> H[Check ESG/Sustainability Clauses]
    end

    subgraph Gate L3: System Integration
        I[Verify Process-Skill Mapping] --> J[Audit Router Escalations]
        J --> K[Validate Integration Tests IT-01 to IT-07]
    end

    Gate L1 --> Gate L2
    Gate L2 --> Gate L3
```

### 2.1 Gate L1: Automated Structural Validation
* **Tooling:** Programmatic validation scripts (e.g., [`validate_structure.py`](../shared/validate_structure.py)).
* **Validation Criteria:**
  1. **YAML Schema Compliance:** Verify that all Markdown files begin with a valid, parsable YAML front-matter block.
  2. **Unique ID Audit:** Verify that all IDs (`ref_id`, `skl_id`, `art_id`, `test_id`) are unique and follow the kebab-case standard (e.g., `SKL-01-01`).
  3. **File Naming Rules:** Validate that all file paths are strictly lowercase kebab-case.
  4. **Link Integrity:** Perform recursive link checking across all files to ensure there are no dead references, relative path violations, or cross-system link breaks.

### 2.2 Gate L2: Manual & Semantic Content Auditing
* **Tooling:** Peer reviews, expert audits, and automated regex linter patterns.
* **Validation Criteria:**
  1. **PMBOK 8 Citation Check:** Cross-reference all citations listed under `## PMBOK 8 Context` to confirm they exist in the official PMBOK 8 standard.
  2. **Placeholder Audit:** Scan every file for occurrences of `[` or `[FIELD:` to confirm that no unpopulated inputs exist.
  3. **Change Log History:** Verify that every file maintains its internal change log table, documenting version history, author, changes, and date.
  4. **ESG & Sustainability Compliance:** Ensure that skills related to planning, procurement, and risk include the mandatory ESG integration questions and environmental sustainability controls.

### 2.3 Gate L3: System & Integration Validation
* **Tooling:** Deterministic integration test suites (`tests/integration-tests/`).
* **Validation Criteria:**
  1. **Lifecycle Transition Audit:** Verify that the 7 cross-skill integration flow tests (IT-01 to IT-07) trace inputs and outputs across phase boundaries (e.g., Initiating ➔ Planning).
  2. **RACI & Escalation Router Verification:** Simulate T1–T4 decision thresholds to ensure that escalation paths map to the correct roles in the RACI matrix.
  3. **Mermaid Diagram Alignment:** Cross-check the Mermaid visual lifecycles against the actual file relationships to guarantee 100% documentation sync.

---

## 3. Test Cases & Test Scenarios

| Test Case ID | Scope | Input / Action | Expected Result | Status |
|---|---|---|---|---|
| **TC-STR-01** | Structural | Parse YAML blocks in `reference/` | All files return valid dict with `ref_id` | ✅ Pass |
| **TC-STR-02** | Structural | Audit IDs in `skills/` | Zero duplicates across 61 skill files | ✅ Pass |
| **TC-STR-03** | Structural | Run recursive link checking | Zero broken links or incorrect relative paths | ✅ Pass |
| **TC-SEM-01** | Semantic | Audit placeholder markers `[` | Zero placeholders found in examples | ✅ Pass |
| **TC-SEM-02** | Semantic | Verify PMBOK 8 section citations | Every citation contains a specific section number (e.g., §4.1) | ✅ Pass |
| **TC-SEM-03** | Semantic | Audit sustainability checklists | Environmental & waste controls present in target files | ✅ Pass |
| **TC-INT-01** | Integration | Execute `IT-01` (Setup to Initiate) | Validates transitions of A05 ➔ A01 ➔ A04 | ✅ Pass |
| **TC-INT-02** | Integration | Execute `IT-07` (Full Lifecycle) | Traces scope, schedule, and closure artifacts | ✅ Pass |
| **TC-INT-03** | Integration | Simulate T3 threshold escalation | Router returns correct RACI role (Sponsor/PMO) | ✅ Pass |

---

## 4. Test Execution & Reporting Protocol
To maintain compliance during repository development:
1. **Pre-Commit Checks:** AI agents or developers must execute the Pre-Commit Checklist ([`QUALITY-STANDARDS.md §9`](../QUALITY-STANDARDS.md#9-ai-agent-pre-commit-checklist)) locally.
2. **Regression Testing:** Run the automated testing suite prior to any push or merger.
3. **Audit Logging:** Record test execution logs in the Session Log section of `MASTER-PLAN.md`.
4. **Defect Tracking:** Any failed check must be logged as a Non-Conformance (NC) entry in [`QUALITY-STANDARDS.md §8.3`](../QUALITY-STANDARDS.md#83-non-conformance-register-nc-register), and resolved prior to closing the work cycle.
