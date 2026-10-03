---
artifact_id: A21
artifact_name: Lessons Learned Record
artifact_type: template
version: "1.0.5"
status: Template · Active
parent_definition: artifacts/monitoring-and-decisions/A21-Lessons-Learned-Record.md
authority: PMBOK8 Guide §2.1.6.5 Manage Project Knowledge; Lexicon — lessons learned
---

# A21 — Lessons Learned Record Template

> **Usage:** Open this record at project start. Capture lessons at the time they occur — do not defer to project closure. For adaptive approaches, retrospective outputs are the mandatory input after each iteration. Replace every `[FIELD: ...]` placeholder. OPA transfer at closure is mandatory.

---

## Section 1 — Record Header

| Field | Entry |
|---|---|
| Project or initiative name | [FIELD: Full project name] |
| Project ID | [FIELD: Project identifier] |
| Project manager | [FIELD: PM name] |
| Version | [FIELD: e.g., v1.0] |
| Last updated | [FIELD: YYYY-MM-DD] |
| Total entries | [FIELD: Running count — update each revision] |
| Entries pending OPA transfer | [FIELD: Count of entries with OPA transfer status = Pending] |
| Linked artifacts | A05 · A06 · A12 · A17 · A19 |

---

## Section 2 — Lessons Learned Register

> Add one row per lesson. Capture continuously — do not wait for phase gates or closure.

| Lesson ID | Category | Phase / Period | Situation description | What happened | Root cause | Impact | Recommendation | Applicable to future projects? | OPA transfer status | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| LL-001 | [FIELD: Category] | [FIELD: Phase name or sprint/period identifier] | [FIELD: Context — what was happening when this occurred] | [FIELD: Describe what happened — positive or negative outcome] | [FIELD: Root cause — why did it happen] | [FIELD: Impact on scope / schedule / cost / team / quality] | [FIELD: Actionable recommendation for future projects or current phase] | [FIELD: Yes / No / Maybe] | [FIELD: Pending / Transferred / Not applicable] | [FIELD: Who identified this lesson — role or process (e.g., retrospective, risk review)] |

**Category values:** `Governance` / `Scope` / `Schedule` / `Finance` / `Risk` / `Stakeholders` / `Resources` / `Team` / `Technical` / `Process` / `Communication` / `Procurement` / `Quality` / `Tools`

---

## Section 3 — Phase Gate Knowledge Summary

> Complete at each phase gate or major checkpoint.

| Phase / Gate | Date | Key lessons (positive) | Key lessons (negative / improvement) | Recommendations for next phase | Owner |
|---|---|---|---|---|---|
| [FIELD: Phase name] | [FIELD: YYYY-MM-DD] | [FIELD: Top 1–3 positive lessons from this phase — reference LL IDs] | [FIELD: Top 1–3 improvement lessons — reference LL IDs] | [FIELD: Specific actions recommended for the next phase] | [FIELD: PM name] |

---

## Section 4 — Closure Knowledge Package

> **Complete at project closure.** This package is the formal OPA submission. Do not complete until Section 2 is fully up to date.

| Field | Entry |
|---|---|
| Project closure date | [FIELD: YYYY-MM-DD] |
| Total lessons captured | [FIELD: Total count from Section 2] |
| Top 5 positive lessons | [FIELD: LL ID · one-line summary — ordered by applicability / impact] |
| Top 5 improvement lessons | [FIELD: LL ID · one-line summary — ordered by importance] |
| Recommended OPA updates | [FIELD: Describe which organizational processes, standards, or templates should be updated based on these lessons] |
| Process improvements identified | [FIELD: Specific process changes recommended] |
| Template or tool improvements identified | [FIELD: Specific template or tool changes recommended] |
| Submitted to OPA repository by | [FIELD: Name and role] |
| OPA submission date | [FIELD: YYYY-MM-DD] |
| Repository reference / location | [FIELD: System name, folder path, or URL] |

---

*Authority: PMBOK8 Guide §2.1.6.5 Manage Project Knowledge; Lexicon — lessons learned*
*Source type: PMI-derived · Version: 1.0.5 · Parent definition: A21-Lessons-Learned-Record.md*
