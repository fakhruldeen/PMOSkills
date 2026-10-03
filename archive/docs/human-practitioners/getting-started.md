# Getting Started with PMOSkills

**Repository:** PMOSkills  
**Version:** 1.0.0  
**Authority:** PMBOK8 Primary · PMI Companion References Secondary  
**File Path:** `docs/human-practitioners/getting-started.md`

---

## Purpose

This guide introduces the PMOSkills repository to its three primary audiences — PMO practitioners, AI agents, and book authors — and explains what the repository contains, how it is organized, how its three core layers (skills, artifacts, and templates) work together, and how each audience should navigate the repository to accomplish their goals. It is the recommended entry point before opening any skill file, artifact, or reference document.

---

## Audience

### PMO Practitioners

This guide is for project management professionals, PMO leads, governance analysts, and project managers who want to use PMOSkills as an executable, standards-grounded reference for running project management processes. You should read this guide before opening any skill file in `skills/` or any artifact in `artifacts/`.

### AI Agents

This guide is for AI agents, MCP tools, and automated workflows that consume PMOSkills content programmatically. It defines the routing index (`SKILL-REGISTRY.md`), the decision authority model (`AUTHORITY-ROUTING.md`), and the expected execution sequence for any skill. Agents should parse this file to build a contextual map of the repository before executing skills.

### Book Authors

This guide is for authors producing PMBOK-grounded content — chapters, frameworks, reference tables, or case studies — who are using PMOSkills as a source of structured, citation-ready project management knowledge. You should read this guide to understand which files carry authoritative PMI-derived content and which files contain organizational synthesis or interpretation.

---

## Prerequisites

Before using this repository, confirm the following:

- You have access to *A Guide to the Project Management Body of Knowledge (PMBOK® Guide) — Eighth Edition* and *The Standard for Project Management* (published together by PMI, 2021). PMBOK 8 is the primary authority for all terminology, processes, and governance patterns used in this repository.
- You understand the distinction between **PMI-derived** content (traced to PMI sources), **synthesis** content (structured interpretations combining multiple PMI references), and **organization-defined** content (locally applicable operational guidance). Every skill file carries a `source_type` field indicating which category applies.
- You have read the repository `README.md` for a high-level orientation.
- For AI agents: your runtime can read Markdown files and parse YAML front matter. The skill execution model is documented in `docs/human-practitioners/how-to-use-skills.md`.
- For book authors: review `source-authority.md` and `pmi_reference_list.md` before citing any content from this repository.

---

## What Is PMOSkills?

PMOSkills is an executable, PMBOK 8–aligned PMO reference system that structures project management capability as a set of modular, traceable skill files covering the full project lifecycle — from organizational setup through project closure, including adaptive and hybrid delivery approaches. The repository does not replicate PMBOK 8; it operationalizes it: each skill translates a PMBOK 8 process or governance pattern into a step-by-step execution sequence with defined inputs, outputs, quality checks, failure cases, and authority routing rules. At its core, PMOSkills is designed to be used by three types of consumers — human practitioners who need structured guidance, AI agents that need deterministic execution contracts, and authors who need citation-ready source-grounded reference material — while maintaining a single authoritative content layer grounded in PMI standards.

*Authority: PMBOK8 Primary — see `source-authority.md` for the full three-tier authority hierarchy.*

---

## How the Repository Is Organized

```
PMOSkills/
├── README.md                        ← Repository overview and usage summary
├── SKILL-REGISTRY.md                ← Master index of all 47 skills
├── AUTHORITY-ROUTING.md             ← T1–T4 decision threshold model and escalation rules
├── LIFECYCLE-MAP.md                 ← Phase-by-phase process and artifact flow
├── PRINCIPLES-CROSSWALK.md         ← 12 PMBOK 8 principles × 11 domains × 40 processes
├── source-authority.md              ← Three-tier authority hierarchy (Tier 1–3)
├── pmi_reference_list.md            ← Canonical PMI reference list with aliases
│
├── docs/                            ← Human- and agent-readable documentation
│   ├── getting-started.md           ← This file — entry point for all audiences
│   ├── how-to-use-skills.md         ← How to read and execute a skill file
│   ├── how-to-use-artifacts.md      ← How to produce and version an artifact
│   └── ai-agent-guide.md            ← AI agent operating instructions for this repo
│
├── skills/                          ← 47 executable skill files, organized by lifecycle pack
│   ├── 01-organizational-setup/     ← Pack 01: Governance setup, doc control, repo config (3 skills)
│   ├── 02-initiating/               ← Pack 02: Project charter, stakeholder identification (2 skills)
│   ├── 03-planning/                 ← Pack 03: All planning skills — scope, schedule, risk, cost, comms (17 skills)
│   ├── 04-executing/                ← Pack 04: Direct work, manage team, procurements, stakeholder engagement (9 skills)
│   ├── 05-monitoring-controlling/   ← Pack 05: Monitor performance, control baselines, manage change (9 skills)
│   ├── 06-closing/                  ← Pack 06: Close project or phase, final review, lessons learned (3 skills)
│   └── 07-adaptive-hybrid/          ← Pack 07: Lifecycle selection, backlog, retrospectives, hybrid delivery (4 skills)
│
├── artifacts/                       ← Artifact files (A01–A41) organized by lifecycle area
│   ├── initiating/                  ← Business case (A01), project charter (A04)
│   ├── planning-and-baselines/      ← Plans, baselines, scope, schedule, cost (A06–A16)
│   ├── monitoring-and-decisions/    ← Change log, performance reports, risk, issues (A12–A21)
│   ├── stakeholders/                ← Stakeholder register, benefits record (A02, A07)
│   ├── governance/                  ← Context register, governance records (A05, A34–A39)
│   ├── resources/                   ← Repo config, team records (A03, A25–A27)
│   ├── closing/                     ← Closure and knowledge records (A24, A30)
│   ├── procurement/                 ← Supplier management, evaluation, claims (A31–A33)
│   ├── quality/                     ← Quality plan, RTM (A09, A13)
│   ├── pmo/                         ← PMO improvement backlog, value record (A23, A36)
│   └── portfolio/                   ← Portfolio interdependency record (A22)
│
├── reference/                       ← [Planned] PMBOK 8 reference layer
│   ├── principles/                  ← [Planned] 12 PMBOK 8 principles with detailed notes
│   ├── performance-domains/         ← [Planned] 11 domain summaries with process maps
│   └── appendices/                  ← [Planned] PMO (X2), AI (X3), Procurement (X4), Evolution (X5)
│
├── shared/                          ← [Planned] Reusable validators, routing logic, checklists
├── tests/                           ← [Planned] Skill-level and integration test cases
└── repo/                            ← Export files, taxonomy maps, skill manifests
```

---

## How Skills, Artifacts, and Templates Relate

PMOSkills uses a three-layer model:

**Layer 1 — Skills** (`skills/`) are executable instructions. Each skill file defines what inputs are required, what steps to follow, what output to produce, how to validate it, and how to route approval decisions. A skill is the *how*: it is the procedural engine that drives artifact creation, update, validation, or closure. Skills are numbered by pack and sequence (e.g., `SKL-02-01`) and are anchored to a specific PMBOK 8 process, performance domain, and focus area.

**Layer 2 — Artifacts** (`artifacts/`) are the *what*: the structured documents and records that project management work produces. Each artifact has a unique identifier (A01–A41), a defined owner, an approval authority, a version lifecycle, and a governance layer assignment. Artifacts are not blank forms — they are structured records with specific field requirements. Producing an artifact correctly requires executing the matching skill.

**Layer 3 — Templates** are the starter-state versions of artifact files (suffixed `-template.md` in the `artifacts/` directory). Templates provide the field structure and guidance text that a skill populates during execution. When a skill completes, the output is a populated artifact — not a template. Templates are never submitted or approved; only completed artifacts are.

The relationship is linear: **a skill consumes inputs → executes steps → populates a template → produces an artifact → routes the artifact for approval**. Governance routing decisions follow the T1–T4 model defined in `AUTHORITY-ROUTING.md`. See `docs/human-practitioners/how-to-use-skills.md` for the full execution sequence, and `docs/human-practitioners/how-to-use-artifacts.md` for artifact versioning and control rules.

---

## Quickstart Paths

### Path 1 — PMO Practitioner

Follow these steps to start using PMOSkills for a live project:

1. **Read this file** (`docs/human-practitioners/getting-started.md`) to orient yourself to the repository structure and authority model.
2. **Open `SKILL-REGISTRY.md`** and identify the lifecycle stage your project is currently in (Organizational Setup, Initiating, Planning, Executing, Monitoring & Controlling, Closing, or Adaptive/Hybrid).
3. **Identify the relevant skill** for your current task. Use the registry's pack index to navigate to the correct skill ID (e.g., `SKL-02-01` for Project Charter Creation).
4. **Open the skill file** in `skills/` and read the Prerequisites, Inputs, and Failure Cases sections before doing anything else. Confirm all upstream prerequisites are satisfied.
5. **Gather the required inputs** (prior artifacts, business case, EEFs/OPAs as specified). Do not begin drafting until all mandatory inputs are available.
6. **Execute the skill steps** in order. Use the matching artifact template in `artifacts/` to populate the output. Apply the Waste Test where specified.
7. **Route the artifact for approval** using the authority routing rules in `AUTHORITY-ROUTING.md`. Record the approval decision in the artifact or in A35 (Governance and Decision Authority Record). Then trigger any downstream skills listed in the skill file.

### Path 2 — AI Agent

Follow these steps to integrate PMOSkills into an agent or automated workflow:

1. **Load `SKILL-REGISTRY.md`** as the primary routing index. Parse it to build a map of skill IDs, pack memberships, upstream prerequisites, downstream triggers, and primary artifact outputs.
2. **Load `AUTHORITY-ROUTING.md`** to initialize the T1–T4 decision routing model. Your agent must be able to evaluate whether a decision is T1 (operational), T2 (controlled change), T3 (governance change), or T4 (enterprise portfolio) before routing for approval.
3. **Parse the user intent** against three dimensions: lifecycle stage, performance domain, and artifact type. Match the intent to the closest skill using the SKILL-REGISTRY.md index.
4. **Read the matched skill file** to extract: YAML front matter fields, mandatory inputs, pre-conditions, step sequence, output schema, quality checks, and failure cases.
5. **Verify pre-conditions** before executing. If any mandatory upstream artifact is missing, halt and return the pre-condition failure message defined in the skill's Failure Cases section. Do not proceed past a pre-condition failure.
6. **Execute the skill steps** in sequence. Populate the output artifact using the template structure in `artifacts/`. Apply all quality checks defined in the skill file before declaring the output complete.
7. **Apply the T1–T4 routing model** to determine the correct approval authority for the produced artifact. Log the routing decision. Trigger downstream skills as specified in the skill file. See `docs/ai-agents/ai-agent-guide.md` for agent-specific operating rules.

### Path 3 — Book Author

Follow these steps to use PMOSkills as a structured, citation-ready source for PMBOK-grounded content:

1. **Read `source-authority.md`** to understand the three-tier authority hierarchy. Every claim in this repository traces to Tier 1 (PMI/PMBOK 8), Tier 2 (PMI companion references), or Tier 3 (organizational synthesis). Know which tier a piece of content comes from before citing it.
2. **Open `PRINCIPLES-CROSSWALK.md`** to access the 12 PMBOK 8 principles mapped across 11 performance domains and 40 processes. Use this as a structured reference for principle-grounded chapter sections.
3. **Open `LIFECYCLE-MAP.md`** to see the full lifecycle flow with phases, PMBOK 8 process anchors, and artifact triggers. Use this to structure lifecycle chapters or process reference tables.
4. **Identify the artifact or process** you need to write about. Navigate to the matching skill file in `skills/` to find the PMBOK8 process anchor, authority citation, performance domains, and principle applications — all pre-structured for citation.
5. **Cross-reference `SKILL-REGISTRY.md`** to confirm the canonical skill ID, source type (`PMI-derived`, `synthesis`, or `organization-defined`), and PMBOK 8 anchor section before quoting or paraphrasing.
6. **Verify citations** against `pmi_reference_list.md` to confirm the correct alias, title, publisher, and section reference for each PMI source used. Follow the canonical citation format: `PMBOK8 — Guide §[section] [title]`.
7. **Check `docs/human-practitioners/how-to-use-artifacts.md`** to understand the A01–A41 artifact structure. Artifact definitions provide structured, field-level content suitable for book appendices, forms, or reference sections.

---

## How to Find the Right Skill

Use this decision tree to identify the correct skill for a given task:

```
START: What do I need to do?
│
├─► Set up governance, doc control, or repository configuration?
│     └─► Pack 01 — Organizational Setup
│           ├─ Governance framework → SKL-01-01
│           ├─ Document control standards → SKL-01-02
│           └─ Repository and tool config → SKL-01-03
│
├─► Start a new project (formal authorization)?
│     └─► Pack 02 — Initiating
│           ├─ Project Charter → SKL-02-01
│           └─ Stakeholder identification → SKL-02-02
│
├─► Build or update a project plan, baseline, or strategy?
│     └─► Pack 03 — Planning (17 skills)
│           ├─ Integrate and align plans → SKL-03-01
│           ├─ Scope and requirements → SKL-03-02 through SKL-03-05
│           ├─ Schedule → SKL-03-06
│           ├─ Stakeholder and comms → SKL-03-07, SKL-03-08
│           ├─ Risk → SKL-03-09 through SKL-03-12
│           └─ Financial and resources → SKL-03-13 through SKL-03-17
│
├─► Execute work, manage team, stakeholders, or procurements?
│     └─► Pack 04 — Executing (9 skills)
│           ├─ Direct and manage work → SKL-04-01
│           ├─ Team and stakeholders → SKL-04-03 through SKL-04-07
│           ├─ Risk responses → SKL-04-08
│           └─ Procurements → SKL-04-09
│
├─► Monitor performance, control changes, or manage risk?
│     └─► Pack 05 — Monitoring & Controlling (9 skills)
│           ├─ Monitor and control work → SKL-05-01
│           ├─ Integrated change control → SKL-05-02
│           └─ Control scope, schedule, cost, risk, resources, comms, stakeholders
│                 → SKL-05-03 through SKL-05-09
│
├─► Close the project or a phase?
│     └─► Pack 06 — Closing (3 skills)
│           ├─ Close project or phase → SKL-06-01
│           ├─ Final performance review → SKL-06-02
│           └─ Lessons learned → SKL-06-03
│
└─► Use adaptive, agile, or hybrid delivery?
      └─► Pack 07 — Adaptive & Hybrid (4 skills)
            ├─ Select and tailor lifecycle → SKL-07-01
            ├─ Manage backlog and iterations → SKL-07-02
            ├─ Facilitate retrospectives → SKL-07-03
            └─ Plan and deliver hybrid projects → SKL-07-04
```

**Still unsure?** Open `SKILL-REGISTRY.md` and filter by performance domain or artifact type. Each entry lists the primary artifact output — match the artifact you need to the skill that produces it.

---

## Key Files Index

| File | Description |
|------|-------------|
| `README.md` | Repository overview, authority model, skills summary, governance layer model |
| `SKILL-REGISTRY.md` | Master index of all 47 skills with IDs, packs, statuses, artifact links, and dependency chains |
| `AUTHORITY-ROUTING.md` | T1–T4 decision threshold model, governance layer reference, artifact authority quick reference (A01–A41), escalation path rules, RACI defaults |
| `LIFECYCLE-MAP.md` | Phase-by-phase lifecycle flow with PMBOK 8 process anchors, artifact triggers, and skill pack assignments |
| `PRINCIPLES-CROSSWALK.md` | 12 PMBOK 8 principles mapped across 11 performance domains and 40 processes |
| `source-authority.md` | Three-tier authority hierarchy definition with citation format rules |
| `pmi_reference_list.md` | Canonical list of all PMI references used in this repository with aliases and usage notes |
| `docs/human-practitioners/getting-started.md` | This file — entry point for all audiences |
| `docs/human-practitioners/how-to-use-skills.md` | How to read and execute a skill file, including the T1–T4 routing model |
| `docs/human-practitioners/how-to-use-artifacts.md` | How to produce, version, and control an artifact |
| `docs/ai-agents/ai-agent-guide.md` | Agent-specific operating instructions, tool policy, and execution safety rules |
| `skills/02-initiating/SKL-02-01-project-charter.md` | Project Charter Creation — canonical example of a complete skill file |
| `artifacts/initiating/A04-project-charter.md` | Project Charter — canonical example of a completed artifact |
| `artifacts/initiating/A04-project-charter-template.md` | Project Charter template — starter state for charter production |

---

## Related Files

| File | Relationship |
|------|-------------|
| `docs/human-practitioners/how-to-use-skills.md` | Detailed skill execution guide — read after this file before executing any skill |
| `docs/human-practitioners/how-to-use-artifacts.md` | Artifact production and version control guide |
| `docs/ai-agents/ai-agent-guide.md` | Agent operating instructions, tool policy, and safety rules |
| `AUTHORITY-ROUTING.md` | T1–T4 decision model — referenced throughout skill execution |
| `SKILL-REGISTRY.md` | Primary navigation index — use alongside this guide |
| `source-authority.md` | Authority tier definitions — required reading for book authors |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
