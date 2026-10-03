# 🚀 PMOSkills — Release Notes

**Repository:** [fakhruldeen/PMOSkills](https://github.com/fakhruldeen/PMOSkills)  
**NPM Package:** [`pmoskills`](https://www.npmjs.com/package/pmoskills)  
**Authority:** PMI PMBOK® 8th Edition · 24 Companion References  
**Maintainer:** Mohamed Fouad Fakhruldeen

---

## Quick Navigation

| Version | Date | Milestone |
|---|---|---|
| [**v0.6.0-beta.1**](#-v060-beta1--pmb-8-operating-system-remediation--tailoring-layer) | June 7, 2026 | PMBOK 8 Operating System Remediation & Tailoring Layer |
| [**v0.5.1**](#-v051--sdk-collision-resolution--database-integrity-patch) | June 4, 2026 | SDK Collision Resolution & Database Integrity Patch |
| [**v0.5**](#-v05--pmbok-8-audit-completion--reference-layer-enrichment) | June 3, 2026 | PMBOK 8 Audit Completion & Reference Enrichment |
| [**v0.4**](#-v04--npm-sdk-publication) | June 2, 2026 | NPM SDK Publication |
| [**v0.3**](#-v03--metrics-sync--onboarding-integration) | June 2, 2026 | Metrics Sync & Onboarding Integration |
| [**v0.2**](#-v02--documentation-expansion) | June 2, 2026 | Ultimate Documentation Expansion |
| [**v0.1**](#-v01--first-stable-release) | June 2, 2026 | First Stable Framework Release |

---
---

# 🏷️ v0.6.0-beta.1 — PMBOK 8 Operating System Remediation & Tailoring Layer

**Release Tag:** `v0.6.0-beta.1` · **Date:** June 7, 2026 · **NPM:** `pmoskills@0.6.0-beta.1` · **PyPI:** `pmoskills@0.6.0b1`  
**Commits:** 4 · **Files Changed:** 72  
**Artifact Database Coverage:** 100% (100 templates total)

---

We are proud to present **PMOSkills Release v0.6.0-beta.1** — the **PMBOK 8 Operating System Remediation & Tailoring Layer**. This beta release closes the structural remediation requirements, adds comprehensive lifecycle tailoring variants, standardizes PMO services mappings, introduces quantitative EVM checks, expands governance templates, and ensures all file paths in the documentation are relative to maintain workspace privacy.

### 🌟 Key Enhancements & Features
* **Lifecycle Variant Architecture (Phase 5)**: Embedded `lifecycle_applicability` and `lifecycle_notes` metadata to all 58 skill files. Added 4 new adaptive variant templates for key artifacts: A08 (Product Backlog), A14 (Lean PM Canvas), A15 (Sprint/Release Schedule), and A19 (Risk-Adjusted Backlog/Impediment Log).
* **PMO Services Catalog (Phase 6)**: Created `reference/pmo/pmo-services-catalog.md` mapping the 26 standard PMO services to specific executable skills and target artifacts.
* **EVM Threshold Validator (Phase 7)**: Formulated quantitative warning/critical thresholds and forecasting formulas in `shared/validators/evm-threshold-validator.md` for Earned Value Management.
* **Governance Templates Expansion (Phase 8)**: Added 4 new governance templates: CCB SOP, RACI Matrix, Decision Record, and Governance Charter under `artifacts/governance/`.
* **Companion Reference Crosswalk (Phase 9)**: Created a program-level crosswalk (`docs/companion-reference-crosswalk.md`) mapping all 24 PMI companion references to grounded skills, informed artifacts, and content gaps.
* **Privacy Link Remediation**: Cleaned up the repository to replace all absolute local `file:///` URLs with secure, relative links.

### 🧪 SDK Recompilation & Parity Testing (Phase 10)
* Recompiled both the NPM and PyPI SDK data store to include all 100 templates and updated schemas.
* Updated test suites to reflect new counts and archived principles paths.
* Verified 100% test success rate (20/20 in Node SDK, 19/19 in PyPI SDK) and validated repository structural integrity.

---
---

# 🏷️ v0.5.1 — SDK Collision Resolution & Database Integrity Patch

**Release Tag:** `v0.5.1` · **Date:** June 4, 2026 · **NPM:** `pmoskills@0.5.1` · **PyPI:** `pmoskills@0.5.1`  
**Commits:** 6 · **Files Changed:** 6  
**Artifact Database Coverage:** 100% (92 physical files)

---

We are proud to present **PMOSkills Release v0.5.1** — the **SDK Collision Resolution & Database Integrity Patch**. This release fixes the critical artifact ID collisions in the build pipeline database generator, ensures the full collection of all 92 artifact files (records, templates, and examples) are included in the packaged SDK database without data loss, and updates both the TypeScript/JavaScript (NPM) and Python (PyPI) loaders.

### 🐛 Critical Bug Fixes & DB Refactoring
* **Non-Destructive Storage Layout**: Keyed `store.artifacts` entries by their unique relative path instead of their short ID, ensuring that overlapping templates (like `A20-team-charter.md` and `A20-Quantitative-Risk-and-Reserve-Decision-Record.md`) are both preserved in the database.
* **Process Reference Compilation**: Fixed process reference index compilation (`compile-db.ts`) to successfully bundle the process index files (`reference/processes/index.md` and `reference/processes/00-index.md`).
* **Parity SDK Loaders**: Enhanced `getArtifact`/`get_artifact` in both TypeScript and Python to query by short ID, title, path, or filename (e.g. `A20-team-charter.md`), ensuring complete backward compatibility while allowing access to all 92 templates.

### 🧪 Programmatic Verification
* **Diagnostic Suite**: Updated `check_pypi.py` validator and verified 100% asset coverage (Skills, Processes, References, Shared, Tests, System Prompts, and Ontology).
* **Unit Tests**: Passed all 19 unit tests on Vitest (TypeScript) and unittest (Python) with new test cases added for collision resolution lookup.

---
---

# 🏷️ v0.5 — PMBOK 8 Audit Completion & Reference Layer Enrichment

**Release Tag:** `v0.5` · **Date:** June 3, 2026 · **NPM:** `pmoskills@0.5.0`  
**Commits:** 57 · **Files Changed:** 144 (+5,505 / −5,351 lines)  
**Companion References:** 24

---

We are proud to present **PMOSkills Release v0.5** — the **PMBOK 8 Audit Completion & Reference Layer Enrichment** milestone. This release closes every outstanding audit finding, certifies all 48 skills as `Active · Tested`, enriches the full companion reference library, and delivers a production-grade reference architecture fully grounded in PMBOK® 8th Edition authority.

### ✅ Full PMBOK 8 Audit — All Findings Closed

A comprehensive multi-wave audit was executed against the PMBOK 8 Core Standard and Guide. **All 28 findings (F-01 through F-28)** have been resolved and verified:

| Wave | Findings | Scope |
|---|:---:|---|
| Wave 1 | F-01, F-02, F-03, F-04, F-09, F-11, F-17 | Principle refs, section numbering, GOV YAML, skill status |
| Wave 2 | F-05, F-08, F-18, F-21 | Process count, Knowledge Areas, principles index |
| Wave 3 | F-11 (continued) | Pack 01–05 status patches across all 48 skills |
| Wave 4 | F-13 | Companion reference enrichment (24 files) |
| Wave 5 | F-14, F-15, F-23, F-28 | Final reconciliation, registry, README links |
| Cleanup | — | Orphaned `.bak` files purged, `.gitignore` hardened |

**Key corrections:**
* PMBOK 8 publication year fixed to 2025
* Principle count standardized to 6 (§3.3–§3.8) everywhere
* All off-by-one section references corrected (§3.2–§3.7 → §3.3–§3.8)
* Process count reconciled to 40 (PR41 clarified as non-PMI-defined)

### 🏅 All 48 Skills Certified — `Active · Tested`

Every skill across all 7 packs has been upgraded from `Draft · Untested` → `Active · Tested` with full GOV YAML front-matter:

| Pack | Skills | Status |
|---|:---:|:---:|
| 01 — Setup & Governance | 3 | ✅ Active · Tested |
| 02 — Initiating | 2 | ✅ Active · Tested |
| 03 — Planning | 18 | ✅ Active · Tested |
| 04 — Executing | 9 | ✅ Active · Tested |
| 05 — Monitoring & Controlling | 9 | ✅ Active · Tested |
| 06 — Closing | 3 | ✅ Active · Tested |
| 07 — Agile & Hybrid | 4 | ✅ Active · Tested |
| **Total** | **48** | **100% certified** |

A new **`SKILL-STATUS-REGISTER.md`** was created as the canonical status registry.

### 📚 Companion Reference Library — Fully Enriched

All 24 companion reference files (`REF-01` through `REF-24`) expanded from placeholders to full content with complete scope descriptions, key topics, PMBOK 8 domain mappings, and cross-references.

### 🔗 Process Documentation — Cross-Referenced

30 process reference files (`PR11`–`PR40`) received structured cross-references with related skills, artifacts, practitioner notes, and change logs.

### 📖 Principles Architecture — Corrected

* `P06-leadership.md` deleted — incorrectly positioned as PMBOK 8 principle
* `P7-06-leadership.md` created — properly classified as PMBOK 7 historical reference
* `00-index.md` rewritten as canonical PMBOK 8 principles index (6 principles, §3.3–§3.8)
* PMBOK 7 heritage cross-references preserved for traceability

### 📘 Glossary Updates

| Term | Change |
|---|---|
| **Focus Area** | Redefined to PMBOK 8 Standard §3.3–§3.8 behavioral guide definition |
| **Knowledge Area (Legacy)** | New entry — PMBOK 6/7 grouping superseded by Performance Domains |

### 🧹 Repository Hygiene

* 13 orphaned `.bak` files purged; `.gitignore` hardened with `*.bak.*`
* Companion reference count standardized to 24 everywhere

### 📋 Registry & Governance

* `SKILL-REGISTRY.md` → v1.3.1; `CONTRIBUTING.md` link added to README
* `source-authority.md`, `AUTHORITY-ROUTING.md`, `LIFECYCLE-MAP.md` updated with GOV YAML
* `PRINCIPLES-CROSSWALK.md` corrected for duplicate skill references

#### Release Statistics

| Metric | Value |
|---|---|
| Audit findings closed | 28/28 (100%) |
| Skills certified | 48/48 (100%) |
| Companion refs enriched | 24/24 (100%) |
| Process files cross-referenced | 30 |

---
---

# 🏷️ v0.4 — NPM SDK Publication

**Release Tag:** `v0.4` · **Date:** June 2, 2026 · **NPM:** `pmoskills@0.3.0`  
**Total SDK Corpus Items:** 369+  
**Zenodo DOI:** [`10.5281/zenodo.20510540`](https://doi.org/10.5281/zenodo.20510540)

---

This release transforms PMOSkills from a documentation-only knowledge base into a fully **programmatically accessible, distributable NPM package** — making the entire corpus queryable in any Node.js, Edge, or Browser environment with a single `npm install`.

### 📦 NPM Package — `pmoskills` (Published Public)

```bash
npm install pmoskills
```

* **Zero production dependencies** — fully self-contained
* **Dual module output:** ESM (`dist/index.mjs`) + CommonJS (`dist/index.js`)
* **Full TypeScript declarations** (`.d.ts` files included)
* **Edge-compatible:** Cloudflare Workers, Vercel Edge, and Browser environments

### 🏗️ Full Corpus Build-Time Compiler

A build pipeline (`sdk/scripts/compile-db.ts`) recursively crawls the entire repository and serializes all content into a single embedded JSON store at build time:

| Directory | Files Compiled | Description |
|---|:---:|---|
| `skills/` | 48 | Executable PMO skill definitions |
| `reference/processes/` | 41 | PMBOK 8 process records |
| `artifacts/` | 92 | Deliverable templates (A01–A39) |
| `reference/` (non-process) | 97 | Principles, domains, focus areas |
| `shared/` | 28 | Validators, checklists, scripts |
| `tests/` | 59 | ST-SKL-* compliance test scenarios |
| `docs/ai-agents/` | 4 | System prompts + ontology |
| **Total** | **369+** | |

### 🔌 Type-Safe SDK API (`PMOSkillsLoader`)

```typescript
import { pmoskills, inject } from 'pmoskills';

const skill = pmoskills.getSkill('SKL-01-01');
const process = pmoskills.getProcess('PR01');
const template = pmoskills.getArtifact('A01');
const principle = pmoskills.getReferenceFile('reference/principles/P01-stewardship.md');
const testSuite = pmoskills.getTestFile('ST-SKL-01-01');
const orchestrator = pmoskills.getSystemPrompt('pmo-orchestrator');

const output = inject(skill.prompt, {
  projectName: 'Apex Initiative',
  authorityThreshold: '$100,000'
});
```

### ✅ 100% Test Coverage

```
 ✓ PMOSkills SDK Test Suite (18)
   ✓ Executable Skills (3)
   ✓ Process Records (2)
   ✓ System Prompts and Ontology (2)
   ✓ Artifact Templates (2)
   ✓ Reference Files (2)
   ✓ Shared Assets (2)
   ✓ Compliance and Skill Tests (2)
   ✓ Prompt Template Injector (3)

 Tests  18 passed (18) — Duration: 1.05s
```

### 🔧 Build System Fixes

* Rollup config: `module: 'ESNext'` + `moduleResolution: 'Node'` for full tree-shaking
* Added `"type": "module"` hint to eliminate Rollup module-type warnings

---
---

# 🏷️ v0.3 — Metrics Sync & Onboarding Integration

**Release Tag:** `v0.3` · **Date:** June 2, 2026  
**Total Assets Audited:** 354 production-ready, verified files  
**Zenodo DOI:** [`10.5281/zenodo.20510540`](https://doi.org/10.5281/zenodo.20510540)

---

This release locks down repository metrics, maps all newly added handbooks directly into the master `README.md` navigation paths, and updates the framework's official asset statistics to reflect **354 fully validated assets**.

### 📊 Unified Scorecard Metrics Sync

* Refactored core **Repository Scorecard** in `README.md` — documentation count upgraded from 6 to 19 files, total verified assets from 341 to 354.

### 🗺️ Key Framework Documents Integration

* Integrated direct markdown links to core operational manuals inside `README.md`:
  * 📘 `docs/user-friendly-guide.md` — Master Onboarding Onramps & Multi-Audience Hub
  * 👔 `docs/human-practitioners/pm-handbook.md` — Predictive, Agile, and Hybrid delivery SOPs
  * 🧠 `docs/ai-agents/ontology-specification.md` — Directed relation schemas and semantic rules
  * 🛠 `docs/developer-tools/automated-validators.md` — 3-tier testing QA gates

### 📈 Canonical Changelog Integration

* Standardized `CHANGELOG.md` with official `[5.0.0]` release entry.

### 🧪 Programmatic Verification Passed (100% Success)

* Full re-verification via `validate_structure.py` — zero broken links, correct YAML headers, 100% schema compliance.

---
---

# 🏷️ v0.2 — Documentation Expansion

**Release Tag:** `v0.2` · **Date:** June 2, 2026  
**Total Assets Audited:** 354 production-ready, verified files (expanded from 341)

---

This release establishes a world-class documentation layer with **six brand-new master manuals** and **sustainability additions** designed to turn high-level standards into active, deterministic procedures for both **Human Practitioners** and **Autonomous AI Agents**.

### 👔 Track 1 — Human Project Managers & PMO Directors

* 📘 **`pm-handbook.md`** — Standard PM Operating Lifecycle Handbook (Predictive, Adaptive, Hybrid, Closure SOPs)
* ✂️ **`tailoring-guide.md`** — Tailoring & Scaling Parameters Guide (T1–T4 complexity framework)
* ⚖️ **`governance-guide.md`** — OPM & PMO Governance SOP (RACI frameworks, escalation gates)

### 🤖 Track 2 — AI Agents & LLM Co-Pilots

* 🧠 **`ontology-specification.md`** — Knowledge Graph Ontology Specification (edge classes, YAML parsing rules)
* 🤖 **`system-prompts.md`** — System Prompts Library (PMO Orchestrator, Risk Auditor, TIMWOODS Auditor)

### 🛠️ Track 3 — Developer Tools & Integrations

* 🛠️ **`automated-validators.md`** — Automated Quality Gates Handbook (L1–L3 checkers, Git pre-commit hooks)

### 🌱 Track 4 — General & Sustainability

* 📈 **`sustainability-guide.md`** — Integrated ESG-KPI Baseline Matrix

---
---

# 🏷️ v0.1 — First Stable Release

**Release Tag:** `v0.1` · **Date:** June 2, 2026  
**Total Assets Audited:** 341 production-ready, verified files

---

The industry's first **executable project management framework** and authoritative PMO reference architecture built directly upon the **PMI PMBOK® 8th Edition** and 23 secondary companion standards.

### ⚙️ The Executable Skills Layer (48 Active Skills)

48 programmatically modeled skills across 7 functional packs covering the full project lifecycle:

| Pack | Count | Scope |
|---|:---:|---|
| 01 — Organizational Setup | 3 | Governance, repo setup, document control |
| 02 — Initiating | 2 | Project chartering, stakeholder identification |
| 03 — Planning | 18 | Subsidiary plans (Scope, Budget, Schedule, Quality, Risk, Procurement) |
| 04 — Executing | 9 | Work direction, resource acquisition, risk responses |
| 05 — Monitoring & Controlling | 9 | Baseline tracking, change control, gate reviews |
| 06 — Closing | 3 | Transitions, archivals, post-project reviews |
| 07 — Adaptive & Hybrid | 4 | Agile overlays, iteration planning, backlog grooming |

Every skill features strict YAML front-matter (`GOV` schema), programmatic input expectations, concrete execution steps, and clear exit criteria.

### 📁 Audited Artifacts Catalog (78 Clean Templates)

* Zero pre-filled brackets — `[...]` markers reserved for human/AI inputs
* Strict PMBOK 8 performance domain traceability
* 12 logical subdirectories representing distinct PMO lifecycle stages

### 📖 Unified Reference Layer (115 Standard Records)

* 12 Principles and 8 Performance Domains as interactive reference documents
* 41 Process Records (`PR01–PR41`) with input/output registries and tools/techniques
* Tailoring Frameworks & PMO Governance Models (T1–T4 Decision Thresholds)

### 🤖 AI Agent-Ready Infrastructure

* Strict YAML headers on every markdown document
* Prompting directives and deterministic process maps for LLM co-pilots
* Clean relative pathing for instant agent context retrieval

### 🧪 Quality Gates (L1–L3 PASSED)

1. **L1 (Structural):** Filename and schema alignment verification
2. **L2 (Content & Citation):** PMBOK 8 performance domain citation verification
3. **L3 (Integration & Flow):** End-to-end scenario flow tests (Predictive, Hybrid, Adaptive)

---
---

## ⚖️ License & Maintainer

* **License:** MIT License
* **NPM Package:** [`pmoskills`](https://www.npmjs.com/package/pmoskills)
* **Framework Authority:** PMBOK 8 Core Standard & PMO Governance Board
* **Repository:** [fakhruldeen/PMOSkills](https://github.com/fakhruldeen/PMOSkills)
* **Lead Architect:** **Mohamed Fouad Fakhruldeen** (Website: [fakhruldeen.me](https://fakhruldeen.me) | LinkedIn: [in/fakhruldeen](https://www.linkedin.com/in/fakhruldeen))
