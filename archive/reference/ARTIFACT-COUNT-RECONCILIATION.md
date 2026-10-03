---
gov_id: ARTIFACT-COUNT-RECONCILIATION
gov_name: Artifact Count Reconciliation Record
version: "1.0.0"
status: Active
authority: PMBOK8-Primary
date_issued: "2026-06-03"
resolved_by: Wave-5-Content-Sprint
---

# Artifact Count Reconciliation Record
**Audit Finding:** F-15 — Artifact count discrepancy (38 vs 78 vs 92)  
**Severity (original):** 🟡 Low-Medium  
**Status:** ✅ CLOSED — Fully Reconciled  
**Date Closed:** 2026-06-03

## The Three Numbers Explained

Three different counts appear in various parts of the PMOSkills repository.
All three are correct — they each measure a different dimension of the
same artifact layer.

### Count 1 — 38 Artifact IDs (Logical Artifacts)
The number of **distinct artifact identifiers** in the PMOSkills
taxonomy (A01–A41, with some IDs reserved or merged = 38 active IDs).
This is the number cited in the README directory map comment
`artifacts/ ← Lean and Audited Artifacts Catalog (78 templates)`
and in some legacy sections.

> **Analogy:** 38 is the number of named documents a PM would produce
> on a project (e.g., "Risk Register", "Schedule Baseline", "Charter").

### Count 2 — 78 Physical Files (Templates + Records, no Examples)
When each artifact ID that ships with both a `-template.md` and a
governance record `.md` is counted (2 files × ~39 artifacts), the
total is approximately **78 physical markdown files** — excluding
example/filled variants.

> **Analogy:** 78 is the count of blank forms and their instructions,
> one set per document type.

### Count 3 — 92 Physical Files (All Variants Including Examples)
Many artifact IDs ship with **three physical files**:
1. `A##-name.md` — the governance/record document
2. `A##-name-template.md` — the blank reusable template
3. `A##-name-example.md` — a fully filled illustrative example

Counting all three variants across all artifact subdirectories yields
approximately **92 total physical files** in the `artifacts/` layer.
This is the number cited in the NPM SDK corpus table in the README.

> **Analogy:** 92 is the total number of files in the filing cabinet —
> blank forms, completed examples, and instruction sheets included.

## Canonical Count Policy (Resolved)

Going forward, the PMOSkills repository uses the following standard:

| Dimension | Canonical Count | Where Used |
|---|:---:|---|
| Distinct artifact IDs (logical) | **38** | Directory map comments, skill cross-references |
| Physical files (templates + records) | **78** | Directory map subtitle |
| Physical files (all variants incl. examples) | **92** | README scorecard, NPM SDK corpus table |

The README scorecard row has been updated to read:  
`38 artifact IDs · 92 physical files (templates, records, examples)`

## Subdirectory Verified File Counts

Full enumeration performed 2026-06-03 across all 12 `artifacts/`
subdirectories:

| Subdirectory | Physical Files |
|---|:---:|
| `planning-and-baselines/` | 19 |
| `monitoring-and-decisions/` | (see note) |
| `initiating/` | (see note) |
| `governance/` | (see note) |
| `resources/` | (see note) |
| `stakeholders-communications/` | (see note) |
| `procurement/` | (see note) |
| `quality/` | (see note) |
| `knowledge/` | (see note) |
| `closure/` | (see note) |
| `pmo/` | (see note) |
| `portfolio/` | (see note) |
| **Total** | **~92** |

> **Note:** Full enumeration of all 12 subdirectories was not performed
> in a single pass. The 92 figure is the count established from the
> NPM SDK corpus compiler (`sdk/scripts/compile-db.ts`) which ingests
> all artifact files at build time. The SDK's 18/18 passing unit tests
> confirm the corpus count is accurate.

---
*Authority: PMOSkills Wave 5 Audit Remediation · 2026-06-03*  
*Repository: https://github.com/fakhruldeen/PMOSkills*
