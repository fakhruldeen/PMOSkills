<p align="center">
  <img src="docs/img/pmoskills.jpeg" alt="PMOSkills Logo" width="520">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PMBOK--8th--Edition-Compliant-vibrantgreen?style=for-the-badge&logo=pmi&logoColor=white&color=0073e6" alt="PMBOK 8th Edition Compliant">
  <img src="https://img.shields.io/badge/AI--Agent-Ready-orange?style=for-the-badge&logo=openai&logoColor=white&color=ff8800" alt="AI Agent Ready">
  <img src="https://img.shields.io/badge/3--Tier--Testing-Passed-green?style=for-the-badge&logo=github-actions&logoColor=white&color=2eb82e" alt="3-Tier Testing Passed">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&color=888888" alt="License MIT">
  <a href="https://doi.org/10.5281/zenodo.20510540"><img src="https://img.shields.io/badge/DOI-10.5281%2Fzenodo.20510540-blue?style=for-the-badge" alt="DOI"></a>
  <a href="https://www.npmjs.com/package/pmoskills"><img src="https://img.shields.io/npm/v/pmoskills?style=for-the-badge&logo=npm&logoColor=white&color=cb0000" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/pmoskills"><img src="https://img.shields.io/npm/dm/pmoskills?style=for-the-badge&logo=npm&logoColor=white&color=cb0000" alt="npm downloads"></a>
  <a href="https://pypi.org/project/pmoskills/"><img src="https://img.shields.io/pypi/v/pmoskills?style=for-the-badge&logo=python&logoColor=white&color=3776ab" alt="PyPI version"></a>
  <a href="https://pepy.tech/project/pmoskills"><img src="https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=downloads&query=%24.total_downloads&url=https%3A%2F%2Fapi.pepy.tech%2Fapi%2Fv1%2Fprojects%2Fpmoskills&color=3776ab&logo=python&logoColor=white" alt="PyPI downloads"></a>
</p>

---

## 🎯 Executive Overview

Welcome to **PMOSkills**, the industry's first **executable skill system** and authoritative PMO reference architecture built directly upon the **PMI PMBOK® 8th Edition** and 24 PMI companion references. 

Traditional template libraries are passive. **PMOSkills is dynamic.** It bridges the gap between high-level management standards and actual workspace execution, serving as a unified operating system for both:
1. 👔 **Human Project Practitioners & PMO Directors** seeking repeatable, high-quality, and compliant delivery methods.
2. 🤖 **AI Agents & LLM Co-Pilots** requiring highly structured, deterministic, and machine-readable project management ontologies to automate PMO tasks.

> [!NOTE]
> **Independent Academic Project:** This repository contains summaries, templates, and compliance test suites compiled from public project management frameworks. *PMBOK* and *PMI* are registered trademarks of the Project Management Institute, Inc. This project is independently developed and is not affiliated with or endorsed by PMI.

---

## 🗺️ System Architecture

The repository is designed around a three-tier interaction model where the **Reference Layer** feeds the **Skills Layer**, which programmatically outputs high-integrity **Artifacts**:

```mermaid
flowchart TD
    %% Reference Layer
    subgraph RefLayer ["1. Reference Layer (PMBOK 8 Core)"]
        direction LR
        P8[PMBOK 8 Standards] --> PR[41 Process Records]
        CR[24 Companion Refs] --> TL[Tailoring & PMO Refs]
    end

    %% Skills Layer
    subgraph SkillLayer ["2. Skills Layer (Executable Units)"]
        direction TB
        S1[Skills Registry] --> S2[48 Active Skill Files]
        S2 --> S3[Step-by-Step SOPs]
    end

    %% Artifacts Layer
    subgraph ArtLayer ["3. Artifacts Layer (Deliverables)"]
        direction LR
        A1[38 Clean Templates] --> A2[Corporate Baselines]
        A2 --> A3[Verified Project Logs]
    end

    %% Interaction Paths
    RefLayer ==> SkillLayer
    SkillLayer ==> ArtLayer
    
    classDef refStyle fill:#e6f3ff,stroke:#0073e6,stroke-width:2px,color:#000;
    classDef skillStyle fill:#fff3e6,stroke:#ff8800,stroke-width:2px,color:#000;
    classDef artStyle fill:#ebfaeb,stroke:#2eb82e,stroke-width:2px,color:#000;
    
    class RefLayer,P8,PR,CR,TL refStyle;
    class SkillLayer,S1,S2,S3 skillStyle;
    class ArtLayer,A1,A2,A3 artStyle;
```

---

## 👔 The Human Practitioner Pathway

### Operationalizing PMBOK 8
For PMO Directors and Project Managers, this repository represents a pre-audited, governance-aligned toolkit that ensures your project meets the highest PMI quality standards from day one.

#### 🚀 Quick-Start SOP:
1. **Navigate the Catalog:** Consult [`docs/user-friendly-guide.md`](docs/user-friendly-guide.md) to select your delivery lifecycle (**Predictive (Waterfall)**, **Adaptive (Agile)**, or **Hybrid**).
2. **Find the Skill:** Look up the specific action in [`SKILL-REGISTRY.md`](SKILL-REGISTRY.md) (e.g., `SKL-03-15: Develop Budget`) to read its inputs, detailed steps, and quality constraints.
3. **Instantiate the Template:** Copy the associated template file from the [`artifacts/`](artifacts/) directory into your project workspace.
4. **Apply Authority Routing:** Consult the T1-T4 Decision Threshold model in [`AUTHORITY-ROUTING.md`](AUTHORITY-ROUTING.md) to align approval levels and project change tolerances.

---

## 🤖 The AI Agent Developer Pathway

### Autonomous Co-Piloting
For AI Engineers, LLM prompt designers, and autonomous agent frameworks, this repository provides a machine-readable, zero-dependency environment. Every folder and file is structured to be instantly parsable, enabling LLMs to act as autonomous PMO co-pilots.

#### ⚙️ Machine-Readable Interface Specifications:
* **JSON/YAML Front-Matter:** Every markdown document starts with a strict `GOV` YAML front-matter block, specifying `gov_id`, `gov_name`, `version`, `status`, and `authority` for easy extraction.
* **Deterministic Mappings:** Mappings between PMBOK 8 principles, domains, and processes are mathematically defined in [`PRINCIPLES-CROSSWALK.md`](PRINCIPLES-CROSSWALK.md) and [`LIFECYCLE-MAP.md`](LIFECYCLE-MAP.md).
* **3-Tier Continuous QA Gates:** Programmatic validation rules are defined in [`tests/pmbok8-compliance-test-plan.md`](tests/pmbok8-compliance-test-plan.md) and programmatically checked via [`shared/validate_structure.py`](shared/validate_structure.py) ensuring zero malformed schemas, broken links, or empty placeholders.

> [!TIP]
> **AI Agent Prompting Directive:** When initializing an LLM agent on this repository, inject the following system prompt:
> *"You are an AI PMO Co-Pilot. Use `SKILL-REGISTRY.md` as your master API index. Locate required skill steps, construct clean templates from `artifacts/` without editing pre-filled brackets, and route all outputs according to `AUTHORITY-ROUTING.md` thresholds."*

---

## 📦 Programmatic SDKs — `pmoskills`

The entire PMOSkills knowledge corpus is compiled and distributed as zero-dependency packages for both the **TypeScript/JavaScript** and **Python** ecosystems. All markdown files, YAML front-matter, skill definitions, artifact templates, and test scenarios are pre-compiled at build time into a single embedded JSON store — no file-system access required at runtime, making them fully compatible with serverless, edge, browser, and autonomous agentic workflows.

### 📦 TypeScript/JavaScript (NPM)

#### Installation

```bash
npm install pmoskills
```

#### API Reference

```typescript
import { pmoskills, inject } from 'pmoskills';

// ── Executable Skills ──────────────────────────────────────────────
const skills = pmoskills.getSkills();                    // all 58 skills
const skill  = pmoskills.getSkill('SKL-01-01');          // by ID
const gov    = pmoskills.getSkillsByDomain('Governance'); // filtered

// ── PMBOK 8 Process Records ────────────────────────────────────────
const procs  = pmoskills.getProcesses();                 // all 41 records
const proc   = pmoskills.getProcess('PR01');             // by ID

// ── Artifact Deliverable Templates ────────────────────────────────
const arts   = pmoskills.getArtifacts();                 // all 100 templates
const biz    = pmoskills.getArtifact('A01');             // Business Case

// ── Reference Files (Principles, Domains, Focus Areas…) ───────────
const refs   = pmoskills.getReferenceFiles();            // all 140 files
const p01    = pmoskills.getReferenceFile('reference/principles/pmbok8/P8-01-holistic-view.md');

// ── Shared Validators & Checklists ────────────────────────────────
const shared = pmoskills.getSharedFiles();               // all 34 shared assets
const val    = pmoskills.getSharedFile('shared/validate_structure.py');

// ── Compliance & Skill Tests ───────────────────────────────────────
const tests  = pmoskills.getTestFiles();                 // all 60 test plans
const st01   = pmoskills.getTestFile('ST-SKL-01-01');    // 9 deterministic cases

// ── System Prompts & Ontology ──────────────────────────────────────
const orch   = pmoskills.getSystemPrompt('pmo-orchestrator');
const onto   = pmoskills.getOntology();

// ── Prompt Template Injector ──────────────────────────────────────
const output = inject(skill.prompt, {
  projectName:        'Apex Initiative',
  authorityThreshold: '$100,000'
});
```

### 🐍 Python (PyPI)

#### Installation

```bash
pip install pmoskills
```

#### API Reference

```python
from pmoskills import pmoskills, inject

# ── Executable Skills ──────────────────────────────────────────────
skills = pmoskills.get_skills()                          # all 58 skills
skill  = pmoskills.get_skill('SKL-01-01')                # by ID
gov    = pmoskills.get_skills_by_domain('Governance')    # filtered

# ── PMBOK 8 Process Records ────────────────────────────────────────
procs  = pmoskills.get_processes()                       # all 41 records
proc   = pmoskills.get_process('PR01')                   # by ID

# ── Artifact Deliverable Templates ────────────────────────────────
arts   = pmoskills.get_artifacts()                       # all 100 templates
biz    = pmoskills.get_artifact('A01')                   # Business Case

# ── Reference Files (Principles, Domains, Focus Areas…) ───────────
refs   = pmoskills.get_reference_files()                 # all 140 files
p01    = pmoskills.get_reference_file('reference/principles/pmbok8/P8-01-holistic-view.md')

# ── Shared Validators & Checklists ────────────────────────────────
shared = pmoskills.get_shared_files()                    # all 34 shared assets
val    = pmoskills.get_shared_file('shared/validate_structure.py')

# ── Compliance & Skill Tests ───────────────────────────────────────
tests  = pmoskills.get_test_files()                      # all 60 test plans
st01   = pmoskills.get_test_file('ST-SKL-01-01')          # 9 deterministic cases

# ── System Prompts & Ontology ──────────────────────────────────────
orch   = pmoskills.get_system_prompt('pmo-orchestrator')
onto   = pmoskills.get_ontology()

# ── Prompt Template Injector ──────────────────────────────────────
output = inject(skill['prompt'], {
  'projectName':        'Apex Initiative',
  'authorityThreshold': '$100,000'
})
```

### SDK Corpus Summary

| Collection | Count | JS/TS Getter | Python Getter |
|---|:---:|---|---|
| Executable Skills | 58 | `getSkills()` / `getSkill(id)` | `get_skills()` / `get_skill(id)` |
| PMBOK 8 Process Records | 41 | `getProcesses()` / `getProcess(id)` | `get_processes()` / `get_process(id)` |
| Artifact Templates | 100 | `getArtifacts()` / `getArtifact(id)` | `get_artifacts()` / `get_artifact(id)` |
| Reference Files | 140 | `getReferenceFiles()` / `getReferenceFile(path)` | `get_reference_files()` / `get_reference_file(path)` |
| Shared Validators & Checklists | 34 | `getSharedFiles()` / `getSharedFile(path)` | `get_shared_files()` / `get_shared_file(path)` |
| Compliance Test Scenarios | 60 | `getTestFiles()` / `getTestFile(id)` | `get_test_files()` / `get_test_file(id)` |
| System Prompts | 4 | `getSystemPrompt(key)` | `get_system_prompt(key)` |
| **Total Corpus Items** | **437+** | | |

> **Zero-FS Architecture:** All data is pre-compiled at build time. Compatible with Serverless, Edge, and Browser environments with no runtime file-system dependency.

📦 **[View on NPM →](https://www.npmjs.com/package/pmoskills)** &nbsp;|&nbsp; 🐍 **[View on PyPI →](https://pypi.org/project/pmoskills/)**

---

## 📂 Repository Directory Map

The canonical, audited structure of the PMOSkills knowledge base:

```
PMOSkills/
│
├── .github/                         ← Staged repository workflows and issue templates
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   └── SECURITY.md
│
├── Archive/                         ← Archived historical drafts, logs, and legacy files
│   ├── COMPLETION-PLAN.md
│   ├── legacy/
│   └── meta/
│
├── docs/                            ← Premium multi-audience manuals and user handbooks
│   ├── img/                         ← Images, logos, and visual assets
│   ├── user-friendly-guide.md       ← Master Onboarding Handbook (Multi-Audience Hub)
│   ├── human-practitioners/         ← Track 1: Handbook and execution guides for PMs/PMOs
│   ├── ai-agents/                   ← Track 2: Prompting directives, specifications, schemas
│   ├── developer-tools/             ← Track 3: Tooling, automation, validator specs
│   └── general/                     ← Track 4: Glossary, FAQ, ESG sustainability guides
│
├── reference/                       ← The Core PMBOK 8 Reference Layer (115 files)
│   ├── README.md                    ← Reference layer catalog and rules
│   ├── principles/                  ← 6 PMBOK 8 principles (P01–P06 + index)
│   ├── performance-domains/         ← 8 performance domains (PD01–PD08 + index)
│   ├── focus-areas/                 ← 5 focus areas (FA01–FA05)
│   ├── processes/                   ← 41 process records (PR01–PR41 + indices)
│   ├── knowledge-areas/             ← Knowledge Area index
│   ├── tools-techniques/            ← Tools & Techniques taxonomy index
│   ├── inputs-outputs/              ← Inputs & Outputs registry index
│   ├── companion-references/        ← 24 canonical companion reference manuals
│   ├── tailoring/                   ← Tailoring guidelines layer
│   ├── pmo/                         ← PMO governance & service models
│   └── appendices/                  ← PMO, AI, Sourcing, Evolution appendices (X2–X5)
│
├── skills/                          ← The Executable Skills Layer (48 files)
│   ├── 01-organizational-setup/     ← Governance and repo configuration (3 skills)
│   ├── 02-initiating/               ← Startup and chartering (2 skills)
│   ├── 03-planning/                 ← Comprehensive subsidiary planning (18 skills)
│   ├── 04-executing/                ← Delivery, risk responses, resources (9 skills)
│   ├── 05-monitoring-controlling/   ← Baseline tracking, change controls (9 skills)
│   ├── 06-closing/                  ← Transition, archivals, reviews (3 skills)
│   └── 07-adaptive-hybrid/          ← Backlogs, iterations, hybrids (4 skills)
│
├── artifacts/                       ← Lean and Audited Artifacts Catalog (38 artifact IDs · 92 physical files)
│   ├── initiating/                  ← Project startup baselines (A01, A02, A04)
│   ├── planning-and-baselines/      ← Subsidiary management plans (A06, A08, A14, A15, A16, A28)
│   ├── resources/                   ← Resource registries and team documents (A03, A20, A25, A26, A27)
│   ├── stakeholders-communications/ ← Stakeholder matrices and plans (A07, A10, A28, A29)
│   ├── procurement/                 ← Supplier agreements and bid records (A11, A31, A32, A33)
│   ├── quality/                     ← Requirements traceability lists (A09, A13)
│   ├── knowledge/                   ← Lessons learned and data registers (A30)
│   ├── monitoring-and-decisions/    ← Status reporting, change logs, risk registers
│   ├── closure/                     ← Realization & transition logs (A24, A27)
│   ├── governance/                  ← Retention & privacy registers (A05, A34, A35, A37, A39)
│   ├── pmo/                         ← PMO metrics & improvements (A23, A36)
│   └── portfolio/                   ← Strategic portfolio alignment registers (A22)
│
├── shared/                          ← Programmatic elements and reusable components (28 files)
│   ├── README.md
│   ├── components/                  ← Field blocks and segment patterns
│   ├── validators/                  ← Automated waste-testing and metrics routines
│   ├── routing/                     ← Authority routing algorithms
│   └── checklists/                  ← Stage gate readiness lists
│
├── tests/                           ← The Verification and Test Layer (59+ files)
│   ├── README.md
│   ├── pmbok8-compliance-test-plan.md ← 3-tier continuous integration test plan
│   ├── skill-tests/                 ← 49 automated skill test suites (ST-SKL-*)
│   └── integration-tests/           ← End-to-end integration scenario scripts
│
└── sdk/                             ← Programmatic SDKs
    ├── npm/                         ← TypeScript NPM package (`pmoskills`)
    │   ├── src/                     ← TS source (loader, injector, types)
    │   ├── scripts/compile-db.ts    ← Database compiler
    │   ├── dist/                    ← ESM & CJS bundled builds
    │   └── tests/                   ← Vitest unit tests
    │
    └── pypi/                        ← Python PyPI package (`pmoskills`)
        ├── pmoskills/               ← Python package source & data
        ├── tests/                   ← Unit test suite (unittest / pytest)
        └── pyproject.toml           ← Setuptools config
```

---

## 📊 Repository Scorecard

| Component | Target Count | Built / Verified | Completion Rate |
|---|:---:|:---:|:---:|
| **Reference Layer (Principles, Domains, Indices)** | 115 | 115 | 100% ✅ |
| **Skills Layer (48 skills across 7 packs)** | 48 | 48 | 100% ✅ |
| **Artifacts Layer (38 IDs · 92 physical files)** | 92 | 92 | 100% ✅ |
| **Shared Components (Validators and checklists)** | 28 | 28 | 100% ✅ |
| **Test Suite (Skill + integration scenario tests)** | 59 | 59 | 100% ✅ |
| **Documentation & Expanded Framework Guides** | 19 | 19 | 100% ✅ |
| **SDK Corpus Items (NPM & PyPI packages)** | 369+ | 369+ | 100% ✅ |
| **Total Verified Assets** | **361+** | **361+** | **100% PRODUCTION READY** |

---

## ⚖️ Governance & Decision Threshold Matrix

To ensure clear accountability, PMOSkills employs a strict **T1 to T4 Decision Threshold Model** (detailed in [`AUTHORITY-ROUTING.md`](AUTHORITY-ROUTING.md)):

| Band | Characteristics | Default Authority | Action Pathway |
|---|---|---|---|
| **T1 Operational** | Localized, low risk, within baseline tolerances | Project Manager (PM) | Execute & log in change register |
| **T2 Controlled** | Material impact on one baseline (e.g., schedule delay < 10%) | Change Control Board (CCB) / Sponsor | Submit formal CR via Skill `SKL-05-02` |
| **T3 Governance** | Material impact on multiple baselines, strategic target risk | Project Governing Body / Sponsor | Elevate to OPM board per Routing Schema |
| **T4 Enterprise** | Strategic realignment, regulatory, or cross-portfolio impact | Portfolio Authority / PMO Executive | Executive governance intervention |

---

## 🚀 Key Framework Documents

* 📘 [`docs/user-friendly-guide.md`](docs/user-friendly-guide.md) — **Master Onboarding Onramps & Multi-Audience Hub.**
* 👔 [`docs/human-practitioners/pm-handbook.md`](docs/human-practitioners/pm-handbook.md) — Predictive, Agile, and Hybrid delivery SOPs.
* 🧠 [`docs/ai-agents/ontology-specification.md`](docs/ai-agents/ontology-specification.md) — Directed relation schemas, edge classes, and semantic rules.
* 🛠 [`docs/developer-tools/automated-validators.md`](docs/developer-tools/automated-validators.md) — 3-tier testing QA gates, Git hook setups, and validator commands.
* 🔍 [`SKILL-REGISTRY.md`](SKILL-REGISTRY.md) — Master index of all 48 skills, dependency chains, and primary outputs.
* 🤝 [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md) — Contribution guidelines, authority rules, branch conventions, and PR checklist.
* 📦 **[npmjs.com/package/pmoskills](https://www.npmjs.com/package/pmoskills)** — Published NPM package v0.5.1 (zero dependencies, ESM + CJS).
* 🐍 **[pypi.org/project/pmoskills](https://pypi.org/project/pmoskills/)** — Published PyPI package v0.5.1 (zero dependencies, source + wheel).
* 🏷️ [`RELEASE-NOTES.md`](RELEASE-NOTES.md) — Unified release notes for all versions (v0.1 – v0.5.1).
* ⚖️ [`AUTHORITY-ROUTING.md`](AUTHORITY-ROUTING.md) — RACI matrix and escalation protocols for T1–T4 decisions.
* 📈 [`LIFECYCLE-MAP.md`](LIFECYCLE-MAP.md) — Linear and hybrid process and artifact flow diagrams.
* 📋 [`QUALITY-STANDARDS.md`](QUALITY-STANDARDS.md) — The single source of truth for YAML front-matter schemas and quality validation gates.
* 🧪 [`tests/pmbok8-compliance-test-plan.md`](tests/pmbok8-compliance-test-plan.md) — 3-tier testing gate rules checking syntax, semantics, and system integration.

---

## 📈 Version History

* **`v0.5.1` (2026-06-04):** **NPM & PyPI SDK Update.** Resolved artifact ID collisions in the compiler database by keying artifacts by their relative path. Restored 100% coverage of all 92 artifact physical files and compiled missing process reference index files. Fully updated TypeScript and Python SDK loaders for backward-compatible robust path/filename lookup.
* **`v0.5` (2026-06-03):** **Release v0.5: PMBOK 8 Audit Completion & Cross-Language SDK Launch.** Closed all 28 audit findings, certified all 48 skills as Active · Tested, enriched 24 companion references, cross-referenced 30 process files, corrected principles architecture, restructured SDK directory structure, and published `pmoskills` packages to NPM (v0.5.0) and PyPI (v0.5.0).
* **`v0.4` (2026-06-02):** **Release v0.4: NPM SDK Publication.** Published `pmoskills` NPM package (v0.3.0) with zero dependencies. Full corpus compiler, dual ESM/CJS output, TypeScript declarations, 18/18 unit tests. Available at [npmjs.com/package/pmoskills](https://www.npmjs.com/package/pmoskills).
* **`v0.3` (2026-06-02):** **Release v0.3: Metrics & Onboarding Portal Integration.** Synchronized documentation indexes, README scorecards, changelogs, and release tag paths.
* **`v0.2` (2026-06-02):** **Release v0.2: Ultimate Documentation Expansion.** Six new master manuals covering handbooks, tailoring, RACIs, ontologies, prompt libraries, and automation gates.
* **`v0.1` (2026-06-02):** **First Stable Framework Release.** Promoted audited PMOSkills repository (341 assets) under official git release tag `v0.1`.
* **`v0.0.4.8.0` (2026-06-02):** Phase 8 Next Steps & Compliance Integration. Introduced the master user onboarding guide (`docs/user-friendly-guide.md`) and the 3-tier test plan (`tests/pmbok8-compliance-test-plan.md`). Fully updated master scorecards and plan directories.
* **`v0.0.4.7.0` (2026-06-02):** Phase 6 Test Suites and Phase 7 Quality Audit Complete. Implemented 48 skill test suites, 7 cross-skill integration flow tests, and cleaned mixed-case non-conformances.
* **`v0.0.4.5.0` (2026-06-01):** Phase 0 Repository Consolidation. Cleared legacy folders, monolithic drafts, and compiled clean reference layers.
* **`v0.0.1.3.0` (2026-05-30):** Full Skill catalog deployment. Standardized Packs 01 through 07 (48 skills).

---

## 📖 Citation

If you use this repository or framework in your academic research, PMO governance blueprints, or industrial projects, please cite it as:

```bibtex
@misc{pmoskills2026,
  author       = {Fakhruldeen, Mohamed Fouad},
  title        = {{PMOSkills: An Executable Skill System \& PMO Reference Architecture built on PMI PMBOK® 8th Edition}},
  month        = jun,
  year         = 2026,
  publisher    = {Zenodo},
  version      = {v0.5.1},
  doi          = {10.5281/zenodo.20510540},
  url          = {https://doi.org/10.5281/zenodo.20510540}
}
```

> Fakhruldeen, M. F. (2026). *PMOSkills: An Executable Skill System & PMO Reference Architecture built on PMI PMBOK® 8th Edition* (Version v0.5.1). Zenodo. https://doi.org/10.5281/zenodo.20510540

---

*Authority: PMBOK 8 Primary · PMI Companion References Secondary · Organization-Defined Tertiary*  
*Project: PMI PMBOK 8 Knowledge Base Repository Space*  
*Maintainer:* **Mohamed Fouad Fakhruldeen *[GitHub](https://github.com/fakhruldeen), [LinkedIn](https://www.linkedin.com/in/fakhruldeen), [Website](https://fakhruldeen.me)***
