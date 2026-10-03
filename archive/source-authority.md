---
gov_id: SOURCE-AUTHORITY
gov_name: Repository Source Authority Model
version: "1.0.1"
status: Active
authority: PMBOK8 Primary
supersedes: "1.0.0"
file_path: "source-authority.md"
last_updated: "2026-06-03"
owner: Repository Maintainer
approval_authority: Repository Maintainer — structural changes require sponsor awareness
---

# source-authority.md — Repository Source Authority Model

**Version:** 1.0.1  
**Status:** Active  
**Authority:** PMBOK8 · Artifacts-V-1.0.5 · pmi_reference_list.md  
**Last Updated:** 2026-06-03  
**File Path:** `source-authority.md`

> **Change log v1.0.1 (2026-06-03):** Corrected PMBOK 8 publication year to 2025 (ANSI/PMI 99-001-2025).
> Corrected principle count from 12 to 6 and section reference from Section 2 to Section 3 (§3.3–§3.8).
> Updated YAML block to canonical GOV schema.

---

## Purpose

This file defines the authoritative source hierarchy for every artifact, skill, and
document produced in the PMOSkills repository. Every claim, term, process reference,
artifact schema field, and governance rule in this repository traces back to one of
the three authority tiers defined below.

All contributors and AI agents working in this repository must apply this hierarchy
before introducing new content, modifying existing content, or resolving a conflict
between sources.

---

## Authority Tiers

### Tier 1 — Primary Authority: PMI Standards and PMBOK 8

- 40 nonprescriptive processes from PMBOK 8 Guide Table 2-1 (PR01–PR40 map directly).
- PR41 is a synthesis/reference process maintained by the repository and is not a PMI-defined process.

> **Default source of truth for all terminology, concepts, processes, performance
> domains, focus areas, principles, governance, planning, delivery, stakeholder
> engagement, risk, value, and lifecycle thinking.**

| Item | Detail |
|---|---|
| Canonical alias | `PMBOK8` |
| Document | *A Guide to the Project Management Body of Knowledge (PMBOK® Guide) — Eighth Edition* and *The Standard for Project Management* (published together) |
| Publisher | Project Management Institute (PMI), 2025 |
| Standard designation | ANSI/PMI 99-001-2025 |
| Canonical citation format | `PMBOK8 — Guide §[section number] [section title] · Figure [n]` |
| Standard citation format | `PMBOK8 — Standard §[section number] [section title]` |
| Vocabulary status | All PMBOK 8 terms are the default vocabulary of this repository |
| Supersedes | PMBOK 7, PMBOK 6, and all earlier editions as the default reference |

**What Tier 1 governs:**
- All 6 PMI Principles (Standard, Section 3 — §3.3 through §3.8)
- All 7 Performance Domains (Guide, Section 2 — Governance, Scope, Schedule, Finance, Stakeholders, Resources, Risk)
- All 5 Focus Areas: Initiating, Planning, Executing, Monitoring and Controlling, Closing
- All 40 nonprescriptive processes (Guide, Table 2-1)
- Tailoring logic (Guide, Section 3)
- Development approach and lifecycle (Guide, Section 2.3)
- Artifact and governance pattern definitions

> **Note on PMBOK 7 principle heritage:** PMBOK 8 Standard §3.1–§3.2 explains that the six current
> principles were distilled from the twelve principles in PMBOK 7. The repository's
> `reference/principles/P7-01` through `P7-12` files preserve those twelve principles
> as historical reference and cross-edition traceability. They are labeled `edition: PMBOK7`
> and must not be confused with the six active PMBOK 8 principles.

---

### Tier 2 — Secondary Authority: PMI Companion Standards and Referenced Works

> **Supporting references used to supplement, expand, or operationalize Tier 1
> guidance. Used when PMBOK 8 is silent, brief, or requires elaboration for a
> specific domain.**

Full registry is maintained in [`pmi_reference_list.md`](pmi_reference_list.md).

| Alias | Title | Usage |
|---|---|---|
| `PMO-Guide` | *PMI — The PMO Lifecycle: Building, Running, and Shutting Down* | PMO governance, PMO service models, PMO structural design |
| `GPPP` | *Governance of Portfolios, Programs, and Projects: A Practice Guide* | Portfolio and program governance, authority delegation |
| `OPM-Standard` | *Organizational Project Management: A Practice Guide* | Enterprise governance, OPM maturity, organizational alignment |
| `Process-Groups` | *Process Groups: A Practice Guide* | Process-level detail supplementing PMBOK 8 Table 2-1 |
| `PMI-BA` | *Business Analysis for Practitioners: A Practice Guide* | Requirements elicitation, feasibility, viable options analysis |
| `APG` | *Agile Practice Guide* | Adaptive lifecycle, agile ceremonies, scaling considerations |
| `BAP-2E` | *Business Analysis for Practitioners (2nd ed.)* | Advanced BA practices, stakeholder-driven analysis |
| `Requirements` | *Requirements Management: A Practice Guide* | Requirements planning, traceability, change control |
| `Complexity` | *Navigating Complexity: A Practice Guide* | Complexity assessment, adaptive governance, ambiguity management |
| `Risk-PPP` | *Risk Management for Projects, Programs, and Portfolios* | Quantitative risk analysis, reserve justification |
| `Forms-Book` | *A Practical Guide to Project Planning* | Forms, templates, and practical planning guidance |
| `Lexicon` | *PMI Lexicon of Project Management Terms* (Version 5.0, January 2026) | Canonical definition of all PMI terms |

**Conflict rule:** When a Tier 2 source conflicts with Tier 1, Tier 1 prevails unless
the user explicitly requests a comparative or historical analysis.

---

### Tier 3 — Tertiary Authority: External Sources and Organization-Defined Practices

> **Used only to fill gaps not addressed by Tier 1 or Tier 2, to confirm recent
> developments, to find implementation examples, or to compare interpretations.**

| Source category | Examples | Usage rule |
|---|---|---|
| Web research | Industry articles, practitioner blogs, conference papers | Gap-filling and implementation examples only |
| Organization-defined practices | PMO operating models, local templates, internal methods | Must be labeled `organization-defined` in every artifact that uses them |
| AI-generated synthesis | Repository-produced interpretations combining multiple PMI sources | Must be labeled `synthesis` and cite the specific Tier 1 and Tier 2 sources combined |

**Labeling requirement:** Every artifact and skill in this repository must carry one of
the following source-type labels on every substantive claim:

| Label | Meaning |
|---|---|
| `PMI-derived` | Directly based on a Tier 1 or Tier 2 PMI concept, process, or artifact pattern |
| `synthesis` | Combines multiple PMI sources and/or adds light local adaptation; all sources cited |
| `organization-defined` | Created for local operating convenience; not PMI-native terminology |

---

## Conflict Resolution Protocol

When two sources conflict, apply this resolution order:

1. **Tier 1 vs Tier 2:** Tier 1 (PMBOK8) prevails. Document the Tier 2 reference as
   supplementary context. Note the conflict in the artifact's Notes field.
2. **Tier 1 vs Tier 3:** Tier 1 always prevails. Label the Tier 3 content
   `organization-defined` or remove it.
3. **Tier 2 vs Tier 3:** Tier 2 prevails. Label Tier 3 content `organization-defined`.
4. **Within Tier 2:** Prefer the source whose scope most directly addresses the domain
   in question. Cite both sources and note the selection rationale.
5. **Ambiguous or silent sources:** Use `synthesis` label, cite all contributing
   sources, and document the interpretation decision.

If a conflict cannot be resolved by this protocol, escalate to the repository
maintainer and document the open question in `source-authority.md` under Section 5.

---

## Terminology Rules

1. Use PMBOK 8 terminology as the default vocabulary in all files.
2. Do not use PMBOK 7 knowledge-area phrasing (e.g., "Integration Management",
   "Scope Management") as primary structure labels. These may appear only in
   migration maps or comparative analysis sections.
3. Use the canonical aliases from `pmi_reference_list.md` (e.g., `PMBOK8`, `PMO-Guide`,
   `GPPP`) — never cite full titles in inline text.
4. Cite the PMI Lexicon as `Lexicon — Version 5.0, January 2026` for all term definitions.
5. Mark every local operating method, template format, or internal naming convention as
   `organization-defined`.

---

## Canonical Citation Format

### Tier 1 — PMBOK 8 Guide process reference
```
PMBOK8 — Guide §2.5.2.2 Plan Stakeholder Engagement · Figure 2-34
```

### Tier 1 — PMBOK 8 Standard principle reference
```
PMBOK8 — Standard §3.4 Principle: Focus on Value
```

### Tier 2 — Companion standard reference
```
PMO-Guide — §[section] [title]
```

### Tier 2 — Lexicon term definition
```
Lexicon — Version 5.0, January 2026 — "[term]"
```

### Synthesis artifact source block (required in every synthesis artifact)
```
Primary PMI source: PMBOK8
Exact section: Guide §[x.x.x] [title]
Supporting source: [Alias] — [section]
Purpose of citation: [one sentence]
Source type: synthesis
```

---

## Open Conflicts and Known Gaps

> Use this section to document any unresolved source conflicts or gaps that need
> future resolution.

| ID | Description | Status | Owner |
|---|---|---|---|
| — | No open conflicts at v1.0.1 | — | — |

---

*Authority: PMBOK8 · pmi_reference_list.md · Artifacts-V-1.0.5 §1 Authority Model*  
*Owner: Repository Maintainer*  
*Approval Authority: None for routine updates; sponsor awareness for structural changes*
