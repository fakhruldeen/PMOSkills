# AI Agent Guide — PMOSkills Repository

**File Path:** `docs/ai-agents/ai-agent-guide.md`
**Repository:** PMOSkills
**Version:** 1.0.0
**Status:** Draft
**Authority:** PMBOK8 Primary · PMI Companion References Secondary
**Last Updated:** 2026-05-31

---

## Purpose

This guide defines how an AI agent or automated developer tool should load, navigate, and operate against the PMOSkills repository. PMOSkills is an executable skill system grounded in the PMI PMBOK 8th Edition, containing 47 skills across 7 lifecycle packs, artifact templates for A01–A41, authority routing rules, and source hierarchy declarations. An agent that follows this guide will produce well-formed artifact outputs, route decisions to the correct governance authority, stay within context budget, and halt appropriately when a pre-condition or authority threshold is not met.

---

## Audience

- **AI agents** acting as PM assistants, document generators, or workflow orchestrators built on top of the PMOSkills skill system
- **Developers** building MCP servers, LLM-powered tooling, or agentic workflows that consume skills, artifacts, or routing rules from this repository
- **Automation engineers** writing scripts or pipelines that programmatically execute PMOSkills skills to produce or validate project management artifacts

This guide assumes the agent has read access to the repository and can load individual files on demand. It does not assume all files are pre-loaded into context.

---

## Prerequisites

Before executing any skill, the following conditions must be true:

1. **Repository access confirmed** — the agent can read all directories under the repository root.
2. **`AUTHORITY-ROUTING.md` loaded** — the T1–T4 decision threshold model must be active in context before any decision is made.
3. **`SKILL-REGISTRY.md` loaded** — the master skill index must be available to resolve skill IDs, focus areas, and artifact mappings.
4. **Source authority hierarchy understood** — the agent must apply the Tier 1 → Tier 2 → Tier 3 authority order defined in `source-authority.md` when resolving conflicting information.
5. **Target artifact identified** — the agent must know which artifact (A01–A41) it is producing or consuming before loading a skill file.
6. **Upstream prerequisites satisfied** — every skill declares its upstream prerequisites; all must be verified as complete before the skill runs.

---

## Repository Loading Order

Load files in this order. Do not load all files simultaneously — each file is loaded on demand after the previous one reveals what is needed.

### 1. `AUTHORITY-ROUTING.md` — First

Load this file at the start of every session. It defines the T1–T4 decision threshold model, the governance layer reference table, and the artifact authority quick reference (A01–A41). Without this file, the agent cannot determine whether it is authorized to make a decision or must escalate.

**When to load:** Always. Load once per session as standing context.

### 2. `SKILL-REGISTRY.md` — Second

Load this file as standing context alongside `AUTHORITY-ROUTING.md`. It is the master index of all 47 skills: their IDs, pack membership, focus area, primary artifact output, PMBOK8 process anchor, upstream prerequisites, downstream skills, and file paths. Use this file to resolve a user request to a specific skill — do not guess at file paths without consulting this index first.

**When to load:** Always. Load once per session as standing context.

### 3. `LIFECYCLE-MAP.md` — Third (when navigating phases)

Load this file when the request involves lifecycle phase navigation — for example, when determining which skills are active in a given phase, which artifacts are triggered at a specific lifecycle stage, or which pack to enter based on project state. This file provides the visual and tabular lifecycle flow from Pre-sign through Closing, including phase entry and exit gates, active PMBOK 8 processes per phase, and artifact triggers.

**When to load:** On demand, when phase navigation is needed.

### 4. `source-authority.md` — Fourth (when resolving source conflicts)

Load this file when a conflict arises between guidance found in different parts of the repository, or when the agent needs to cite a source for a claim. It defines the three-tier authority model: Tier 1 (PMBOK8), Tier 2 (PMI companion references), and Tier 3 (web research or organization-defined methods). All artifact content, terminology, and process references must trace back through this hierarchy.

**When to load:** On demand when a source conflict is detected or when citation is required.

### 5. The specific skill file — Fifth (once the skill is identified)

Once the target skill ID is resolved from `SKILL-REGISTRY.md`, load only that skill file. Each skill file is self-contained and includes: purpose, scope, authority and governance table, performance domains and principles, PMBOK 8 process inputs/tools/outputs, pre-conditions, numbered execution instructions, quality checks, failure cases, tests, examples, and integration points.

**When to load:** On demand, one skill at a time.

### 6. The artifact definition file(s) — Sixth (when producing or consuming an artifact)

Each skill declares which artifact(s) it produces or updates. Load the corresponding artifact template file (`*-template.md`) from the `artifacts/` directory before writing any output. The template defines every mandatory and optional field, the correct YAML front matter, and the expected section structure. Never produce artifact output without consulting the template.

**When to load:** On demand, when producing or consuming the skill's primary artifact.

### 7. `PRINCIPLES-CROSSWALK.md` — Seventh (only when principle-level grounding is needed)

Load this file only when the task explicitly requires connecting work to one or more of the 6 PMBOK 8 principles (Holistic View, Focus on Value, Embed Quality, Accountable Leader, Integrate Sustainability, Empowered Culture), or when a user asks how a skill relates to a specific principle. This file is large; defer loading until specifically needed.

**When to load:** On demand, only when principle-level grounding is explicitly required.

---

## Routing Logic: Matching a Request to a Skill

Use this decision process whenever a user presents a project management task.

### Step 1 — Identify the lifecycle focus area

Determine which of the six focus areas the request belongs to:

| Focus Area | Description |
|---|---|
| Organizational Setup | Governance framework, document control, repository configuration — before any project begins |
| Initiating | Project charter, stakeholder identification, formal authorization |
| Planning | Scope, schedule, cost, risk, resource, communications, procurement, integration plans |
| Executing | Direct work, manage team, implement risk responses, manage procurement, manage knowledge |
| Monitoring & Controlling | Integrated change control, performance reporting, control scope/schedule/cost/risk |
| Closing | Formal project or phase closure, lessons learned, archiving |
| Adaptive & Hybrid | Lifecycle selection, backlog management, retrospectives, hybrid delivery |

If the request does not map clearly to one focus area, use `LIFECYCLE-MAP.md` to trace the phase and identify the active pack.

### Step 2 — Identify the primary artifact being produced or consumed

Every skill in the repository has a declared primary artifact output (A01–A41). Identify the artifact before looking up a skill. If the user names an artifact explicitly (e.g., "project charter," "risk register," "lessons learned record"), map it to its artifact ID using the Artifact Reference table in `SKILL-REGISTRY.md`.

### Step 3 — Look up by focus area and primary artifact in `SKILL-REGISTRY.md`

Search the registry by the combination of focus area and primary artifact. The registry schema includes both `Focus Area` and `Primary Artifact (Output)` fields per skill. The matching skill is the one whose focus area and primary artifact align with the request.

If multiple skills match (for example, multiple skills update A19 Risk Management Record), check the `Upstream Prerequisites` field to determine which skill is appropriate for the current project state.

### Step 4 — Confirm the PMBOK8 process anchor is appropriate

Each skill carries a `PMBOK8 Process Anchor` field that cites the exact PMBOK 8 Guide section and figure number being operationalized (e.g., `Guide §2.1.6.1 Initiate Project or Phase · Figure 2-3`). Verify that this anchor aligns with the user's intent — if the user is asking about a different process, the skill may be a mismatch.

### Step 5 — Check pre-conditions before executing

Every skill file contains a pre-conditions or upstream prerequisites section. Verify that all listed prerequisites are met:

- Required upstream skills have been executed
- Required input artifacts exist and are in the correct status (e.g., approved, baselined)
- Repository and governance setup (Pack 01) is complete

If any pre-condition is not met, halt and report the failure before proceeding.

---

## How to Execute a Skill Programmatically

Follow these steps in order when executing a skill file.

### Step 1 — Load the skill file

Retrieve the skill file using the `File Path` field from `SKILL-REGISTRY.md`. Load the full file, including the YAML front matter, into context. Do not summarize or truncate it.

### Step 2 — Read the pre-conditions

Locate the upstream prerequisites or pre-conditions section. These are gate checks — the skill must not proceed if any pre-condition is unmet.

### Step 3 — Verify inputs exist

The skill file lists required inputs in its Inputs table (structured as a PMBOK 8 Inputs/Tools and Techniques/Outputs table). For each mandatory input, verify that the corresponding artifact or information source exists and is in an acceptable status. Flag any missing mandatory input before proceeding.

### Step 4 — Follow the numbered instructions

Execute each numbered instruction in the skill's instructions section in sequence. These instructions are the operative steps of the skill — they define exactly what to do, in what order, with which artifact fields to populate.

### Step 5 — Produce output in the artifact's template format

Load the corresponding artifact template file (`*-template.md`) from the `artifacts/` directory. Use it as the base structure for the output. Fill in all `[FIELD: ...]` placeholders with actual content. Do not alter the template's YAML front matter structure.

### Step 6 — Run quality checks from the skill's Quality Checks section

Every skill file contains a Quality Checks section (sometimes labeled Tests). Verify the output against each check criterion. If any check fails, revise the output before marking the skill complete.

### Step 7 — Note any failure cases encountered

The skill file includes a Failure Cases table. If any failure condition was encountered during execution, record it explicitly. Do not suppress failures or proceed past a hard stop.

---

## How to Produce Artifact Output

Artifact output must follow these rules without exception.

### Use the template as the base

Always load the artifact's `*-template.md` file from the `artifacts/` directory before writing any output. The template defines the complete section structure, field labels, YAML front matter, and mandatory vs. optional field designations. This is the authoritative format — do not invent a new structure.

### Fill in every `[FIELD: ...]` placeholder with actual content

Every `[FIELD: ...]` placeholder is a required input point. Replace each one with real content derived from the project context, the user's input, and the skill's instructions. The output artifact must contain no unfilled `[FIELD: ...]` placeholders.

### Never leave a field blank — use explicit "Not applicable" statements

If a field is genuinely not applicable to the current project (for example, a procurement field in a project with no external suppliers), write: `Not applicable — [reason]`. Do not leave the field empty, do not delete it, and do not write "N/A" without an explanation.

### Set the artifact status field correctly

Every artifact has a status lifecycle. Use only these valid status values:

| Status | Meaning |
|---|---|
| Draft | First version — not yet reviewed |
| In Review | Under stakeholder or authority review |
| Approved | Formally approved by the designated authority |
| Baseline | Locked as the project baseline (for planning artifacts) |
| Superseded | Replaced by a later version |
| Archived | Project closed; artifact retained per retention policy |

Set the status field in the YAML front matter and in the artifact header to the correct value for the current state of the artifact.

### Cite the producing skill in the artifact's change log

Every artifact template includes a Change Log section. Add an entry recording: the version number, the date, the producing skill ID (e.g., `SKL-02-01`), and a brief description of what was produced or changed.

---

## Authority Routing and Escalation

The PMOSkills repository uses a four-band decision threshold model defined in `AUTHORITY-ROUTING.md`. The agent must apply this model before making or recommending any decision.

### T1 — Operational (Agent acts autonomously)

**Characteristics:** Localized effect, low risk, inside approved plan tolerances, reversible.
**Default authority:** Project manager or designated lead.
**Agent behavior:** The agent may produce, recommend, or execute T1 decisions without human confirmation.

**Examples:** Updating the issue log, recording a lessons learned entry, drafting a routine status report within an approved communications plan.

### T2 — Controlled Change (Agent recommends; human PM confirms)

**Characteristics:** Material effect on one baseline or one major commitment, within project authority bounds.
**Default authority:** Sponsor-delegated change authority or functional authority.
**Agent behavior:** The agent produces a draft recommendation or change record and presents it for human PM confirmation before treating it as decided. Do not implement a T2 decision autonomously.

**Examples:** Recommending a schedule variance response, drafting a change request that modifies one baseline within tolerance.

### T3 — Governance Change (PM decides; sponsor informed)

**Characteristics:** Cross-baseline effect, major financial or schedule impact, or authority boundary shift.
**Default authority:** Project governing body or sponsor.
**Agent behavior:** The agent prepares supporting analysis and documentation, then halts and routes to the PM. The agent does not make the decision.

**Examples:** A scope change that alters the value case, a reserve draw that requires sponsor approval, a baseline change that crosses declared thresholds.

### T4 — Enterprise Portfolio (Agent stops and escalates)

**Characteristics:** Cross-project, strategic, regulatory, or enterprise-service impact.
**Default authority:** Portfolio authority, PMO governance forum, or executive authority.
**Agent behavior:** The agent stops immediately, reports the decision point clearly, and escalates. The agent must not attempt to resolve a T4 decision or proceed past it.

**Examples:** Portfolio priority conflicts, regulatory compliance decisions, enterprise-wide tooling changes.

The full decision category reference table — including which artifact authority thresholds trigger each band — is in `AUTHORITY-ROUTING.md`. Cross-reference it for every decision the agent encounters.

---

## Failure Handling

### Pre-condition not met

**Action:** Halt immediately. Do not proceed to execute the skill. Report the specific pre-condition that failed (e.g., "Pre-condition failed: A01 Business Case must be approved before SKL-02-01 can run"). Wait for the pre-condition to be satisfied before re-attempting.

### Required input artifact is missing

**Action:** Flag the missing artifact by ID and name (e.g., "Missing required input: A04 — Project Charter"). Do not proceed to produce the skill's output artifact. Return the list of missing inputs to the caller.

### Quality check fails

**Action:** Revise the output to address the failing check. Do not flag the artifact as complete until all quality checks pass. If a quality check failure cannot be resolved with available information, flag the specific check that failed and the reason it cannot be resolved, rather than suppressing it.

### Authority threshold exceeded

**Action:** Identify the decision category and apply the T1–T4 routing logic from `AUTHORITY-ROUTING.md`. Stop the agent's decision-making at the appropriate threshold. Route the decision to the appropriate authority level. Record the escalation point in the artifact's change log or issue log as applicable.

---

## Context Budget Management

Loading all 47 skill files simultaneously is not feasible or efficient. Follow these rules to stay within context budget.

### Standing context (always loaded)

Load these two files at session start and keep them in context for the full session:

- `AUTHORITY-ROUTING.md` — needed for every decision
- `SKILL-REGISTRY.md` — needed to resolve any skill lookup

### Load on demand — lifecycle navigation

Load `LIFECYCLE-MAP.md` only when phase navigation is needed (e.g., determining which pack is active given a project's current phase).

### Load on demand — individual skills

Load individual skill files (e.g., `skills/02-initiating/SKL-02-01-project-charter.md`) only when that specific skill is being executed. Do not pre-load all 47 skills. Unload a skill file from active context once the skill execution is complete and the output artifact is produced.

### Load on demand — artifact templates

Load artifact template files (e.g., `artifacts/initiating/A04-project-charter-template.md`) only when the agent is actively producing or consuming that artifact. Load one template at a time.

### Defer unless specifically requested

Do not load the following layers unless a user explicitly requests work in those areas:

- `reference/` directory — planned PMBOK 8 reference layer (principles, process records, tools and techniques)
- `tests/` directory — skill and integration test cases
- `PRINCIPLES-CROSSWALK.md` — load only for principle-level grounding tasks
- `repo/` directory — internal repository planning and manifest files

---

## Output Format Rules

All agent outputs that are part of the PMOSkills system must follow these formatting rules.

### All agent outputs are Markdown

Every artifact, skill output, report, and intermediate result produced by the agent is Markdown. Do not produce HTML, plain text without structure, or binary formats unless explicitly requested.

### Preserve YAML front matter in artifact files

Every artifact template includes YAML front matter (delimited by `---`). This front matter contains the artifact ID, name, version, status, authority, and file path. Preserve this block exactly as structured in the template. Update only the fields that change (e.g., status, version, date) — do not delete or reformat the block.

### `[FIELD: ...]` placeholders are for templates only

The `[FIELD: ...]` syntax marks unfilled placeholder positions in template files. When executing a skill and producing an artifact, replace every placeholder with actual content. If the agent is referencing a template without executing it (e.g., showing a user what the template looks like), preserve the `[FIELD: ...]` markers intact. Never pre-fill placeholders in a template file that is not being executed.

### Citations use the repository authority format

When citing a source in any artifact or skill output, use the format:

```
*Authority: [Source] — [Section]*
```

For PMI sources, always cite a specific section number. Examples:

- `*Authority: PMBOK8 — Guide §2.1.6.1 Initiate Project or Phase*`
- `*Authority: PMBOK8 — Standard §3.5 P4 Be an Accountable Leader*`
- `*Authority: Process-Groups — Initiating Process Group*`

**Never cite just "PMBOK 8" without a section number.** Vague citations are invalid under the repository's quality standard.

---

## Sample Prompts

### Sample 1 — "Create a project charter for a software migration project"

**User prompt:** "Create a project charter for a software migration project."

**Agent response path:**

1. Load `AUTHORITY-ROUTING.md` and `SKILL-REGISTRY.md` (standing context, if not already loaded).
2. Identify focus area: **Initiating** (project charter is an Initiating artifact).
3. Identify primary artifact: **A04 — Project Charter**.
4. Look up in `SKILL-REGISTRY.md`: skill is **SKL-02-01 — Project Charter Creation** (`skills/02-initiating/SKL-02-01-project-charter.md`).
5. Confirm PMBOK8 process anchor: `Guide §2.1.6.1 Initiate Project or Phase · Figure 2-3` — appropriate.
6. Check pre-conditions: A01 Business Case must be approved; Pack 01 must be complete. **Ask the user to confirm these exist or provide the relevant information.**
7. Load the skill file (`SKL-02-01-project-charter.md`) and artifact template (`A04-project-charter-template.md`).
8. Execute the numbered instructions to populate the template fields from the user's project context.
9. Run quality checks: verify all 9 mandatory fields are present, sponsor is identified, PM authority is stated, charter is not reproducing full business case content.
10. Produce the completed A04 artifact with status `Draft`, cite `SKL-02-01` in the change log.
11. Apply authority routing: charter approval is a **T3** decision — route the draft to the sponsor for approval. Do not mark the artifact `Approved` autonomously.

---

### Sample 2 — "What skill should I use to plan risk management?"

**User prompt:** "What skill should I use to plan risk management?"

**Agent response path:**

1. `SKILL-REGISTRY.md` is in standing context — no additional file load needed.
2. Identify focus area: **Planning** (risk management planning occurs in the Planning phase).
3. Identify primary artifact: **A19 — Risk Management Record** (risk management plan section).
4. Look up in `SKILL-REGISTRY.md` by focus area = Planning and primary artifact = A19: match is **SKL-03-09 — Plan Risk Management** (`skills/03-planning/SKL-03-09-plan-risk-management.md`).
5. Confirm PMBOK8 anchor: `Guide §2.7.2.1 · Figure 2-48` — appropriate for risk management planning.
6. Report to user: "Use **SKL-03-09 — Plan Risk Management** (`skills/03-planning/SKL-03-09-plan-risk-management.md`). Its primary output is the risk management plan section of A19 — Risk Management Record. Upstream prerequisites: SKL-03-07 (Plan Stakeholder Engagement) and SKL-03-02 (Plan Scope Management) must be complete. PMBOK 8 anchor: Guide §2.7.2.1 · Figure 2-48."

---

### Sample 3 — "Review this scope statement and tell me if it passes quality checks"

**User prompt:** "Review this scope statement and tell me if it passes quality checks." (User provides a scope statement document.)

**Agent response path:**

1. Identify focus area: **Planning** (scope definition).
2. Identify relevant skill: **SKL-03-04 — Define Scope** (produces A08 — Scope and Requirements Decision Record).
3. Load the skill file to retrieve its Quality Checks / Tests section.
4. Apply each quality check criterion to the provided scope statement. Typical checks include: in-scope/out-of-scope boundary is stated, acceptance criteria are defined, scope is traceable to the business case or requirements, no plan-level detail is embedded in the scope statement.
5. Report results check-by-check:
   - For each check that passes: state it passes and briefly explain why.
   - For each check that fails: state it fails, cite the specific criterion from the skill's quality checks, and recommend the corrective action.
6. Cite authority: `*Authority: PMBOK8 — Guide §2.2.2 Scope Performance Domain*` and the specific skill ID.
7. Do not mark the scope statement as approved — approval is a T2–T3 decision routed to the PM or governing body.

---

## Programmatic SDK Integration (NPM & PyPI)

Instead of clone-and-parse file operations on the raw repository, AI agents and developer tool integrations can load, query, and inject template data from PMOSkills using official zero-dependency packages:
- **TypeScript/JavaScript (NPM):** `pmoskills`
- **Python (PyPI):** `pmoskills`

All 369+ repository files (including reference guides, executable skills, checklists, templates, and compliance tests) are pre-compiled into a single embedded JSON database store, avoiding the need for runtime filesystem access.

### TypeScript / JavaScript (Node.js, Edge, Browser)

```typescript
import { pmoskills, inject } from 'pmoskills';

// Query the PMOSkills corpus in-memory
const skill = pmoskills.getSkill('SKL-02-01');
const template = pmoskills.getArtifact('A04');

// Inject parameters into templates programmatically
const prompt = inject(skill.prompt, {
  projectName: 'Apex Initiative',
  authorityThreshold: '$100,000'
});
```

### Python (AI Frameworks, LangChain, LangGraph)

```python
from pmoskills import pmoskills, inject

# Query the PMOSkills corpus in-memory
skill = pmoskills.get_skill('SKL-02-01')
template = pmoskills.get_artifact('A04')

# Inject parameters into templates programmatically
prompt = inject(skill['prompt'], {
  'projectName': 'Apex Initiative',
  'authorityThreshold': '$100,000'
})
```

This programmatic integration is highly recommended when embedding PMOSkills into orchestrator agents, tool-calling pipelines, or remote microservices.

---

## Related Files

| File | Path | Purpose | Load Priority |
|---|---|---|---|
| Authority Routing | `AUTHORITY-ROUTING.md` | T1–T4 decision threshold model, artifact authority quick reference | Standing context — always |
| Skill Registry | `SKILL-REGISTRY.md` | Master index of all 47 skills; skill lookup by focus area and artifact | Standing context — always |
| Lifecycle Map | `LIFECYCLE-MAP.md` | Phase-to-skill mapping, phase entry/exit gates, artifact triggers | On demand — phase navigation |
| Source Authority | `source-authority.md` | Tier 1/2/3 source hierarchy; citation formats | On demand — source conflicts |
| Principles Crosswalk | `PRINCIPLES-CROSSWALK.md` | 6 PMBOK 8 principles × 7 domains × 5 focus areas | On demand — principle grounding |
| PMI Reference List | `pmi_reference_list.md` | Canonical list of Tier 2 companion references with aliases | On demand — source tracing |
| Skill: Project Charter | `skills/02-initiating/SKL-02-01-project-charter.md` | Full skill for producing A04 Project Charter | On demand — when executing |
| Skill: Plan Risk Mgmt | `skills/03-planning/SKL-03-09-plan-risk-management.md` | Full skill for producing A19 Risk Management Plan section | On demand — when executing |
| Artifact Template: A04 | `artifacts/initiating/A04-project-charter-template.md` | Template for Project Charter output | On demand — when producing A04 |
| Artifact Template: A14 | `artifacts/planning-and-baselines/A14-integrated-project-management-plan-template.md` | Template for Integrated PM Plan | On demand — when producing A14 |
| Artifact Template: A19 | `artifacts/monitoring-and-decisions/A19-risk-management-record-template.md` | Template for Risk Management Record | On demand — when producing A19 |
| Repository Tests | `tests/README.md` | Skill and integration test cases | Defer unless explicitly requested |
| Reference Layer | `reference/` | Planned PMBOK 8 process and principle reference layer | Defer unless explicitly requested |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
