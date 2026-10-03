# PMOSkills — Frequently Asked Questions

## Purpose

This document answers common questions about the PMOSkills repository — its structure, content model, authority framework, and intended use cases. It is the first-stop reference for anyone trying to understand what this repository is, how it is organized, and how to use or contribute to it.

## Audience

- **PMO practitioners** who want a structured, traceable framework for managing projects
- **AI agents** that need a machine-readable, executable skills library
- **Book authors and trainers** who need authoritative, cited content grounded in PMI standards

## Prerequisites

Before using the repository, reviewers should be familiar with:

- Basic PMI project management terminology (PMI Lexicon v5.0 recommended)
- The PMBOK 8th Edition structure: the Standard, the Guide, and the Performance Domains
- Markdown file formatting
- GitHub repository navigation (issues, pull requests, branches)

---

## Frequently Asked Questions

### About the Repository

**Q: What is PMOSkills?**

A: PMOSkills is a modular, AI-executable project management skills repository grounded in the PMI PMBOK 8th Edition and 20+ PMI companion references. It provides structured skill files, artifact definitions, templates, and documentation that can be used by PMO practitioners, AI agents, and book authors.

---

**Q: What version of PMBOK is this based on?**

A: PMBOK 8th Edition is the primary authority. Companion references (WBS Practice Standard, Scheduling Practice Standard, PMI Risk Practice Guide, etc.) are secondary. All content is labeled with its source type.

---

**Q: Who is this for?**

A: Three main audiences: (1) PMO practitioners who want a structured, traceable framework for managing projects; (2) AI agents that need a machine-readable, executable skills library; (3) Book authors and trainers who need authoritative, cited content. See `docs/human-practitioners/getting-started.md` for quickstart paths per audience.

---

**Q: Is this officially endorsed by PMI?**

A: No. This is an independent repository grounded in PMI standards. All PMI trademarks and copyrights belong to PMI. This repository interprets and synthesizes PMI guidance — it does not reproduce copyrighted text.

---

### About Skills

**Q: What is a skill file?**

A: A skill file is a structured, executable instruction set that defines how to perform one specific project management task. Every skill has: a PMBOK 8 anchor, a list of inputs (artifacts it needs), a list of outputs (artifacts it produces), step-by-step instructions, quality checks, and test cases.

---

**Q: How is a skill different from a PMBOK process?**

A: PMBOK processes describe what happens and what the key inputs/outputs/tools are. Skills in this repository describe how to execute the task — step by step, with specific artifact references, quality checks, and failure cases. Skills are more operational and executable than PMBOK processes.

---

**Q: How many skills are in the repository?**

A: 47 core skills across 7 packs (Organizational Setup, Initiating, Planning, Executing, Monitoring & Controlling, Closing, Adaptive & Hybrid). Future packs for PMO and AI management are planned.

---

**Q: How do I find the right skill for my task?**

A: (1) Open `SKILL-REGISTRY.md` — it has a master index of all skills. (2) Identify your lifecycle focus area (Initiating, Planning, etc.). (3) Identify the artifact you need to produce or update. (4) Match to the skill that produces that artifact.

---

**Q: What is the skill version number?**

A: Skills follow semantic versioning (MAJOR.MINOR.PATCH). All core skills are at v1.1.0 — version 1.0.0 was initial content, 1.1.0 added YAML front matter, tests table, and change log to every skill.

---

**Q: What does "Draft · Untested" status mean?**

A: The skill content is complete and reviewed, but has not yet been executed in a real project environment. Once tested against real project work, the status moves to "Active."

---

### About Artifacts

**Q: What is an artifact?**

A: A document or record created during the project to manage work and provide information to the team, stakeholders, and management. In this repository, each artifact has a definition file (what it is) and a template file (blank form to fill in). Source: PMI Lexicon v5.0 — "artifact."

---

**Q: What is the difference between an artifact definition and an artifact template?**

A: The definition file (`A##-name.md`) explains the artifact's purpose, scope, required fields, quality criteria, and PMI authority. The template file (`A##-name-template.md`) is the blank, fill-in form with `[FIELD: ...]` placeholders. Read the definition to understand; use the template to create.

---

**Q: What does `[FIELD: ...]` mean in a template?**

A: It is a placeholder that marks a field you must fill in. The text inside `[FIELD: ...]` describes what value to enter. Never leave a `[FIELD: ...]` in a completed artifact instance — either fill it or write "Not applicable — [reason]."

---

**Q: How many artifacts are in the repository?**

A: 39 active artifact IDs (A01–A39, after consolidation of A38/A40/A41). Each has a definition file. Templates are being added in batches.

---

**Q: What is a baseline?**

A: The approved version of an artifact that has been formally authorized and can only be changed through change control. Key baselines: A14 (Integrated Project Management Plan), A15 (Schedule), A16 (Financial), A08 (Scope and Requirements). Source: PMI Lexicon v5.0 — "baseline."

---

**Q: What is the waste test?**

A: Every artifact definition includes a waste test — a set of conditions under which the artifact would fail to add value. If creating an artifact would duplicate information already captured elsewhere without distinct governance value, it fails the waste test and should not be created.

---

### About the T1–T4 Authority Model

**Q: What is T1–T4?**

A: A four-band decision routing model that assigns every decision in the project to the correct approval authority based on its impact breadth, reversibility, and governance implications. T1 = PM decides; T2 = delegated change authority; T3 = sponsor or governing body; T4 = portfolio or enterprise authority. Defined in `AUTHORITY-ROUTING.md`.

---

**Q: How do I know which band applies to my decision?**

A: Read `AUTHORITY-ROUTING.md` → Decision Category Reference Table. Match your decision type to the table and follow the escalation rules. For artifact-specific authority, use the Artifact Authority Quick Reference (A01–A41) in the same file.

---

**Q: Can the PM always make T1 decisions without approval?**

A: Yes — T1 decisions are within the PM's delegated tolerances and are fully reversible. However, they must still be documented in the relevant artifact (e.g., a risk response update in A19, or a team change in A25).

---

### About AI Agents

**Q: Can an AI agent execute skills directly?**

A: Yes — that is a primary design intent. The skill files are structured as executable instruction sets. See `docs/ai-agents/ai-agent-guide.md` for the loading order, routing logic, failure handling, and output format rules an AI agent should follow.

---

**Q: What should an AI agent load first?**

A: Load `AUTHORITY-ROUTING.md` and `SKILL-REGISTRY.md` as standing context for every session. Then load `LIFECYCLE-MAP.md` for phase navigation, specific skill files on demand, and artifact definitions only when producing or consuming that artifact.

---

**Q: What does an AI agent do when a pre-condition is not met?**

A: Halt. Report which pre-condition failed and what artifact or action must exist before proceeding. Do not produce partial output for a skill with unmet pre-conditions.

---

**Q: Can an AI agent approve T3 or T4 decisions?**

A: No. AI agents operate at T1 by default and may recommend at T2. T3 and T4 decisions must be escalated to a human authority. The agent documents the escalation in A12 and halts pending the decision.

---

### About Contributing

**Q: How do I contribute a new skill or artifact?**

A: Open a GitHub Issue using the `content_addition.md` template, fork the repository, create a branch (`feat/` prefix), write the file following the schema in the relevant docs, and submit a PR. See `docs/general/how-to-contribute.md` for the full workflow.

---

**Q: What PMBOK citations are required?**

A: Every PMI-derived claim must cite the specific section: e.g., `PMBOK8 Guide §2.1.6.1` or `PMBOK8 Standard §3`. Never write just "PMBOK 8" without a section number. Companion references follow the same rule.

---

**Q: What happens if my contribution conflicts with PMBOK 8?**

A: It will be rejected unless it is explicitly labeled as `source_type: synthesis` or `source_type: organization-defined` with a clear rationale. PMI is the primary authority — all deviations must be intentional and labeled.

---

## Related Files

| File | Purpose |
|---|---|
| `SKILL-REGISTRY.md` | Master index of all 47 skills — start here to find a skill |
| `AUTHORITY-ROUTING.md` | T1–T4 decision routing model and Artifact Authority Quick Reference |
| `LIFECYCLE-MAP.md` | Phase and lifecycle navigation map for skill selection |
| `docs/human-practitioners/getting-started.md` | Quickstart paths for each audience (practitioners, AI agents, authors) |
| `docs/ai-agents/ai-agent-guide.md` | Loading order, routing logic, and output format rules for AI agents |
| `docs/general/how-to-contribute.md` | Full contribution workflow — issues, branching, schema, and PR process |
| `artifacts/` | All artifact definition files (A01–A39) |
| `templates/` | All artifact template files with `[FIELD: ...]` placeholders |
| `skills/` | All 47 skill files organized by lifecycle pack |
| `.github/ISSUE_TEMPLATE/content_addition.md` | GitHub Issue template for proposing new skills or artifacts |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
