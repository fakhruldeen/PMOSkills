---
doc_id: DOC-AUTO-VALIDATE
doc_name: PMOSkills Automated Quality Gates and Validators Guide
version: "1.0.0"
status: Active
authority: PMBOK8 Developer Quality standards (Primary)
file_path: "docs/developer-tools/automated-validators.md"
---

# 🛠️ PMOSkills Automated Quality Gates & Validators Guide

This guide details the technical architecture, script execution guidelines, and git hook integrations for the **programmatic quality gates** enforcing PMOSkills structural and schema compliance. 

---

## 1. The 3-Tier Quality Gate Architecture

To ensure the integrity of the workspace, PMOSkills employs a **3-Tier testing pipeline** that programmatically validates all repository assets:

```
  ┌──────────────────────────────────────────────────────────────────┐
  │                 L1 Structural Validation Gate                    │
  │     (YAML Headers, Kebab-case Names, Directory Structures)        │
  └────────────────────────────────┬─────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────┐
  │                  L2 Content Validation Gate                      │
  │     (Placeholder Audits, Zero Pre-filled Brackets Checkers)       │
  └────────────────────────────────┬─────────────────────────────────┘
                                   ▼
  ┌──────────────────────────────────────────────────────────────────┐
  │               L3 Integration Flow Validation Gate                │
  │  (Linear vs Hybrid Scenario Flow Testing, Cross-skill linkages)   │
  └──────────────────────────────────────────────────────────────────┘
```

### 1.1 L1 (Structural Validation)
*   **Enforced By:** [`shared/validate_structure.py`](../../shared/validate_structure.py).
*   **Scope:** Verifies that all 41 standard process records (`PR01-PR41`) are present, confirms filename kebab-case constraints, and validates folder structures.

### 1.2 L2 (Content & Citation Validation)
*   **Enforced By:** Shared quality checklists and placeholder auditors.
*   **Scope:** Scans files recursively for standard brackets (`[...]`) representing uninstantiated template data. Ensures compliance with core PMBOK 8th Edition citations.

### 1.3 L3 (System Flow Validation)
*   **Enforced By:** Integration flow test files under `tests/`.
*   **Scope:** Simulates complete project scenario lifecycles (Waterfall, Agile, Hybrid) to confirm that inputs, skills, outputs, and gates link cleanly without logical breaks.

---

## 2. Using the Structural Validator Script

The primary tool for verifying repository health is `validate_structure.py`. Run it from the repository root:

```bash
python3 shared/validate_structure.py
```

### 2.1 Under-the-Hood Mechanics
The script executes the following checks:
1.  **File Inventory Audit:** Confirms that all 41 process files in `reference/processes/` are correctly named (`PR01-...` to `PR41-...`).
2.  **Naming Convention Audit:** Flags any files with uppercase characters or spaces under `skills/` or `artifacts/`.
3.  **Governance Headers Audit:** Parses YAML front-matter blocks to verify `status` and `authority` keys are present.

---

## 3. Git Pre-Commit Hook Integration

To prevent non-conforming code from entering your version control history, configure a git pre-commit hook:

### 3.1 Establishing the Hook
1.  Create a file at `.git/hooks/pre-commit` (or edit if it exists).
2.  Add the following shell code:
    ```bash
    #!/bin/bash
    echo "=========================================="
    echo "PMOSkills pre-commit Quality Gate Audit"
    echo "=========================================="
    
    # Run the structural validator
    python3 shared/validate_structure.py
    if [ $? -ne 0 ]; then
        echo "ERROR: PMOSkills structural validation failed. Commit aborted."
        exit 1
    fi
    
    echo "SUCCESS: Quality gates passed. Proceeding with commit."
    exit 0
    ```
3.  Make the hook executable:
    ```bash
    chmod +x .git/hooks/pre-commit
    ```

---

*Authority: PMBOK 8 Developer Quality Standards · PMO Shared Governance Board · Dev Tools Guild*
