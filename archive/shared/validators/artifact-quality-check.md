# shared/validators/artifact-quality-check.md — Artifact Completeness Validator
**Status:** Active
**Version:** 1.0.0
**Authority:** QUALITY-STANDARDS.md §7.1 Universal Gate
**File Path:** `shared/validators/artifact-quality-check.md`

---

## Purpose

The **Artifact Completeness Validator** evaluates individual project documents and files against the repository's core quality gates. It ensures that files contain necessary front-matter headers, maintain proper links, and avoid prohibited placeholder text before being marked as active.

---

## Audit Parameters Checklist

| # | Parameter | Audit Check Description | Pass Condition |
|---|---|---|---|
| **1** | **YAML Front-Matter**| File begins with a valid `---` block containing `artifact_id`, `artifact_name`, `version`, `status`, and `authority` keys. | Header block is complete and valid. |
| **2** | **No Placeholders** | File contains no residual `[FIELD: ...]` or generic placeholders. | 0 placeholders found. |
| **3** | **Reference Links** | All referenced artifacts (e.g., `A04`, `A08`) are formatted with clickable file path links. | 100% link resolution. |
| **4** | **Authority Citation**| Standard footer includes source citation, authority level (1–4), and repository URL reference. | Citation block is present. |
| **5** | **Change Control Log**| The file's change control section documents version number, approval date, and owner name. | Change history is documented. |

---

## Evaluation Results Logic

Evaluate the target artifact against the 5 parameters above.

### Deterministic Output Criteria

*   **PASS (5 / 5 met):** Artifact is 100% compliant. Status can be changed to `Active` or `Approved`.
*   **WARN (4 / 5 met):** Missing authority citation or change log details, but core requirements and placeholders are complete. **Condition:** Action plan to complete missing sections within 3 business days.
*   **FAIL (< 4 met OR fails Parameter 2):** Critical failure. Placeholders present or YAML front-matter missing. **Condition:** The file is rejected, and cannot be used as a baselined reference.

---

## Standard Run Instructions

1. Run a search query on the target file for `[FIELD:` to ensure zero placeholders exist.
2. Verify YAML formatting is parsed without errors.
3. Assert that all linked markdown file paths resolve correctly inside the target workspace.

---

*Authority: QUALITY-STANDARDS.md §7.1 · PMOSkills Repository*
*Last Updated: 2026-06-02 · Initial Release*
