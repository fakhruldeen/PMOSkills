---
artifact_id: A13
name: Requirements Traceability Matrix
template_version: "1.0.0"
status: "Template · Active"
category: Scope and Requirements Control
authority: "PMBOK8 Guide Table 2-1 Elicit and Analyze Requirements; Validate Scope; Requirements practice guidance"
source_type: PMI-derived
file_path: artifacts/quality/A13-requirements-traceability-matrix-template.md
---

## [A13] — Requirements Traceability Matrix | Template

> **Usage note:** This is a blank template. Replace every `[FIELD: ...]` placeholder with project-specific content. Static text, rules, and checklist items are pre-filled and should be retained as written. Remove this usage note before publishing.

---

## Section 1 — Header / Identification

| Field | Value |
|---|---|
| Project Name | [FIELD: full project name] |
| Project ID | [FIELD: project identifier code] |
| Sponsor | [FIELD: sponsor name and title] |
| Project Manager | [FIELD: PM name and title] |
| Document Date | [FIELD: YYYY-MM-DD] |
| Version | [FIELD: e.g. 1.0] |
| Status | [FIELD: select from Draft / Under Review / Approved / Superseded] |
| Linked Artifacts | A08, A09, A12, A14, A17 |

---

## Section 2 — RTM Control Information

**RTM Purpose Statement**

[FIELD: describe the purpose of this RTM for the project — e.g., to trace each business requirement to a WBS element, deliverable, and acceptance criterion, and to track verification and validation status throughout the project lifecycle]

**Scope Statement Reference**

[FIELD: reference the scope statement or scope baseline document (A09) that bounds the requirements captured in this RTM]

**Version Control Note**

[FIELD: describe how this RTM is versioned and updated — e.g., updated at each change control decision, after scope baseline changes, or on a defined cadence]

---

## Section 3 — Requirements Traceability Register

*Each row represents one requirement. All columns must be completed for the RTM to be valid.*

| Req ID | Req Statement | Business Need / Objective | Priority | WBS Ref / Backlog Item | Deliverable | Acceptance Criterion | Verification Method | Status | Change Ref | Owner |
|---|---|---|---|---|---|---|---|---|---|---|
| [FIELD: unique req ID, e.g. REQ-001] | [FIELD: clear, testable requirement statement] | [FIELD: business need or objective this requirement supports] | [FIELD: select from Must Have / Should Have / Nice to Have / Deferred] | [FIELD: WBS element ID or backlog item reference] | [FIELD: deliverable or output that satisfies this requirement] | [FIELD: specific, measurable acceptance criterion] | [FIELD: select from Test / Inspection / Demonstration / Analysis / Review] | [FIELD: select from Draft / Active / Verified / Deferred / Rejected / Deleted] | [FIELD: change request or CCB decision reference, if applicable] | [FIELD: requirement owner name or role] |
| [FIELD: req ID] | [FIELD: req statement] | [FIELD: business need] | [FIELD: priority] | [FIELD: WBS ref] | [FIELD: deliverable] | [FIELD: acceptance criterion] | [FIELD: verification method] | [FIELD: status] | [FIELD: change ref] | [FIELD: owner] |
| [FIELD: req ID] | [FIELD: req statement] | [FIELD: business need] | [FIELD: priority] | [FIELD: WBS ref] | [FIELD: deliverable] | [FIELD: acceptance criterion] | [FIELD: verification method] | [FIELD: status] | [FIELD: change ref] | [FIELD: owner] |

*Add rows as required. Every requirement in scope must appear in this register.*

---

## Section 4 — Requirements Status Summary

*Used for performance reporting and scope control reporting. Update at each baseline review or reporting cycle.*

| Status Category | Count |
|---|---|
| Draft | [FIELD: count of requirements in Draft status] |
| Active | [FIELD: count of requirements in Active status] |
| Verified | [FIELD: count of requirements in Verified status] |
| Deferred | [FIELD: count of requirements in Deferred status] |
| Rejected | [FIELD: count of requirements in Rejected status] |
| Deleted | [FIELD: count of requirements in Deleted status] |
| **Total** | **[FIELD: sum of all rows above]** |

---

## Section 5 — Traceability Rules

The following rules govern the use and maintenance of this RTM. These rules are static — do not replace with [FIELD: ...] placeholders.

1. Every requirement must have a unique Req ID using the format REQ-### and must not be reused after deletion.
2. Every requirement must trace to at least one WBS element or backlog item. Untraced requirements are not in scope.
3. Every requirement must have a defined acceptance criterion before it may be moved to Active status.
4. Verification method must be documented before work on the deliverable begins.
5. Status must be updated within five business days of a change control decision affecting the requirement.
6. Requirements may not be deleted without a change request reference; use status "Rejected" or "Deleted" and retain the row.
7. The RTM must be baselined alongside the scope baseline (A09) and updated at every scope change approval.
8. Traceability gaps — requirements not linked to a deliverable, or deliverables not linked to a requirement — must be logged in Section 6 (Open Traceability Issues).
9. This RTM is an input to formal scope validation and must be reviewed during the Validate Scope process.
10. Ownership of each requirement must be assigned to a named individual, not a team or group.

---

## Section 6 — Open Traceability Issues

*Log any requirement that cannot be fully traced, has a missing link, or is in dispute. Resolve before scope baseline approval.*

| Issue ID | Description | Affected Requirement IDs | Resolution Owner | Due Date |
|---|---|---|---|---|
| [FIELD: issue ID, e.g. TI-001] | [FIELD: description of the traceability gap or issue] | [FIELD: list of affected Req IDs, e.g. REQ-007, REQ-012] | [FIELD: name or role responsible for resolution] | [FIELD: YYYY-MM-DD] |
| [FIELD: issue ID] | [FIELD: description] | [FIELD: affected req IDs] | [FIELD: resolution owner] | [FIELD: YYYY-MM-DD] |

*Add rows as required. This table should be empty at scope baseline approval.*

---

## Section 7 — Waste Test

Before finalizing this RTM, confirm that each element passes the following waste test. These items are static guidance — do not convert to [FIELD: ...] placeholders.

- [ ] Every requirement has a unique, stable ID and a clear, testable statement — not a vague description.
- [ ] Every requirement traces to a WBS element or backlog item. No orphan requirements exist.
- [ ] Every requirement traces to a deliverable. No requirement exists without a planned output.
- [ ] Every acceptance criterion is specific and measurable — not subjective.
- [ ] Verification method is documented for every requirement before work begins.
- [ ] Status column is current as of the document date.
- [ ] All change references are populated where a change control decision affected a requirement.
- [ ] Section 6 is empty or all open issues have a named owner and due date.
- [ ] The RTM scope matches the approved scope baseline in A09.
- [ ] Requirements not in scope are absent from the register or explicitly marked Rejected/Deleted.
- [ ] The RTM is proportionate — requirements are at the right level of detail for the project lifecycle phase.

---

## Change Log

| Version | Date | Author / Phase | Notes |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch A | Initial template |

---

*Template for: Requirements Traceability Matrix*
*Authority: PMBOK8 Guide Table 2-1 Elicit and Analyze Requirements; Validate Scope; Requirements practice guidance*
*See definition file: artifacts/quality/A13-requirements-traceability-matrix-template.md*
