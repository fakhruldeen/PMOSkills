# How to Use Skills

**Repository:** PMOSkills  
**Version:** 1.0.0  
**Authority:** PMBOK8 Primary · PMI Companion References Secondary  
**File Path:** `docs/human-practitioners/how-to-use-skills.md`

---

## Purpose

This guide explains what a skill file is, how it is structured, what each section means, and how to execute a skill correctly — from reading its inputs through producing its output and running its quality checks. It is written for both PMO practitioners executing skills manually and AI agents executing skills programmatically. Read this guide before executing any skill in the `skills/` directory.

---

## Audience

### PMO Practitioners

This guide is for project managers, PMO analysts, governance leads, and project coordinators who will use skill files to generate, update, validate, or close project management artifacts. You do not need to understand YAML or software systems; you do need to follow each skill's step sequence exactly and understand what it means to satisfy a pre-condition or fail a quality check.

### AI Agents

This guide provides the execution contract that governs how an agent must process a skill file. It defines the YAML front matter fields your parser must read, the pre-condition logic your execution engine must enforce, the output schema your artifact writer must populate, and the quality check conditions your validator must satisfy before committing a result. Cross-reference `docs/ai-agents/ai-agent-guide.md` for agent-specific operating rules and tool policy.

---

## Prerequisites

- You have read `docs/human-practitioners/getting-started.md` and understand the repository structure and authority model.
- You have identified the correct skill for your task using `SKILL-REGISTRY.md`.
- You have access to PMBOK 8 (*A Guide to the Project Management Body of Knowledge — Eighth Edition* and *The Standard for Project Management*, PMI, 2021) as the primary authority for any PMI claim in or about a skill file.
- For AI agents: your runtime can parse YAML front matter, read Markdown sections, and produce Markdown output. Your execution engine must be able to halt on pre-condition failure without proceeding.

---

## What Is a Skill File?

A skill file is a self-contained, executable instruction set for producing a specific project management artifact or completing a defined governance action. Each skill file specifies exactly what is needed before the skill can run (prerequisites and inputs), what the executor must do step by step (instructions), what the output must look like (artifact and output schema), and how to confirm the output is acceptable (quality checks and test cases). Skill files are grounded in a specific PMBOK 8 process, performance domain, and focus area, so every action they require traces to a published PMI standard. They are not checklists or guidelines — they are contracts: when all inputs are present and all steps are followed, the output artifact must meet the defined quality criteria or the skill has not been successfully executed.

*Authority: PMBOK8 Primary — Guide §4 (Focus Areas) · Standard §3 (Principles)*

---

## Anatomy of a Skill File

Every skill file in PMOSkills contains the following sections, in order:

### YAML Front Matter

Enclosed in `---` delimiters at the top of the file. Machine-readable metadata that governs routing, validation, and dependency resolution.

| Field | What It Means |
|-------|--------------|
| `skill_id` | Unique skill identifier in the format `SKL-PP-NN` (PP = pack number, NN = sequence within pack). Used for cross-referencing in the registry, dependency chains, and downstream trigger lists. |
| `skill_name` | Full human-readable name of the skill matching the file heading. Must match the entry in `SKILL-REGISTRY.md` exactly. |
| `pack` | Lifecycle pack number and name (e.g., `02 — Initiating`). Determines which phase of the project lifecycle this skill belongs to. |
| `version` | Semantic version of the skill file (major.minor.patch). Increment the minor version for content changes; the patch version for corrections or normalization. |
| `status` | Build and review status. Values: `Draft · Untested` / `Draft · In Review` / `Reviewed` / `Approved · Production`. Do not execute `Draft · Untested` skills in regulated or production environments without human review. |
| `pmbok8_anchor` | The specific PMBOK 8 Guide section, Standard section, or Figure this skill operationalizes. This is the primary traceability link to the PMI source. |
| `focus_area` | The PMBOK 8 focus area this skill operates in: `Initiating`, `Planning`, `Executing`, `Monitoring and Controlling`, `Closing`, or `Organizational Setup`. |
| `performance_domains` | One or more of the 11 PMBOK 8 performance domains this skill activates (e.g., `Governance`, `Stakeholders`, `Risk`). |
| `artifacts_produced` | The primary artifact output — the artifact ID and name this skill is responsible for creating or completing. |
| `artifacts_consumed` | Upstream artifacts that must exist and be in an approved or baselined state before this skill can execute. |
| `authority_threshold` | The T1–T4 band that governs the approval authority for this skill's output artifact. Determines who must approve the result before it is committed. See `AUTHORITY-ROUTING.md`. |

### Purpose

One paragraph explaining what the skill does and when it must be executed. Tells the executor — human or agent — why this skill exists and what project management outcome it achieves. If the Purpose does not match your task, you are in the wrong skill.

### Scope

Two subsections: **In scope** (what this skill does) and **Out of scope** (what adjacent skills handle). Reading Scope prevents skill overlap errors — if a needed action is listed as out of scope, find the skill that covers it.

### Pre-conditions

A list of conditions that must be true before the skill begins. Pre-conditions differ from inputs: they are binary gate checks, not documents to gather. Common pre-conditions include: "upstream artifact X must be approved," "pack N must be complete," or "a PM must be named." If any pre-condition fails, the skill must not proceed.

### Instructions

The numbered step sequence that constitutes executing the skill. Steps are ordered and must be followed in sequence. Each step specifies what the executor must do, what decision to make, or what content to produce. Some steps include embedded checklists, decision tables, or conditional branches. Do not skip steps, reorder them, or combine them without sponsor or PMO authorization.

### Inputs

A structured table of required and conditional inputs — the documents, records, and information the skill needs to begin. Each input entry specifies: the input name, its artifact ID (if applicable), whether it is mandatory or conditional, and a note explaining its role in this skill. Mandatory inputs that are missing must halt execution; conditional inputs that are absent must be documented as exceptions.

### Outputs

A table of the artifacts and records this skill produces. The primary output is always the main artifact (e.g., A04 — Project Charter). Secondary outputs may include updates to other artifacts (e.g., assumption log entries in A05). Outputs define what the executor must commit after the skill completes.

### Authority and Governance

A structured table or section specifying the exact PMI source reference, source type, governance layer, artifact owner, approval authority, and authority threshold band (T1–T4). This section is the traceability anchor: every governance claim in the skill traces back to the citation in this section.

### Constraints

Hard rules the executor must not violate. Constraints are non-negotiable. Examples: "Sponsor signature is mandatory — PM self-approval is not permitted." "The charter must not reproduce the full business case." Constraints are enforced regardless of project size, urgency, or leadership pressure.

### Failure Cases

A table of known failure modes: what indicator signals the failure, and what corrective action to take. Failure Cases tell the executor what to do when something goes wrong — rather than guessing. AI agents must parse Failure Cases to implement halting logic and return structured error responses.

### Quality Checks

Conditions that the produced artifact must satisfy before being routed for approval. Quality checks are not aspirational — they are pass/fail. If the artifact fails a quality check, the skill has not been successfully completed. The executor must correct the artifact and re-run the check before routing.

### Test Cases

A table of test scenarios with ID, description, pass condition, and fail condition. Test Cases are used by the repository test layer (`tests/`) to validate that the skill executes correctly across defined scenarios. Human reviewers and AI agents alike can use these tests to confirm that their execution of the skill produces acceptable outputs.

### PMBOK8 Anchor

The closing citation section — restates the specific PMBOK 8 process, section, or figure that anchors this skill, plus any secondary PMI companion references used. This section is the canonical authority citation for the skill. Book authors should use this section as their primary citation source.

---

## How to Execute a Skill Step by Step

Follow this sequence every time you execute a skill, regardless of audience or project type:

1. **Identify the correct skill.** Open `SKILL-REGISTRY.md` and match your task to a skill ID by lifecycle stage, performance domain, or primary artifact output. Confirm the skill is the right one by reading its Purpose section.

2. **Read the full skill file before doing anything else.** Read Purpose, Scope, Pre-conditions, Inputs, Constraints, and Failure Cases before gathering a single document. Understanding the full skill prevents wasted preparation and pre-condition errors.

3. **Check all pre-conditions.** Evaluate each pre-condition listed in the skill file. If a mandatory upstream artifact is missing, stop. Return to the skill that produces that artifact and complete it first. Document any failed pre-condition and the corrective action taken.

4. **Gather all mandatory inputs.** Retrieve every artifact and document listed as mandatory in the Inputs table. Confirm each input is in the required state (e.g., approved, baselined, or signed). Note any conditional inputs that are absent and determine whether an exception is appropriate given the skill's Constraints.

5. **Open the matching artifact template.** Navigate to `artifacts/` and open the template file for the primary output artifact (e.g., `A04-project-charter-template.md`). Do not begin populating without reading the skill's Instructions first.

6. **Execute the Instructions in order.** Follow each numbered step without skipping or reordering. For steps that include embedded checklists, complete every item. For steps with conditional branches (e.g., "If X is missing, do Y"), apply the correct branch based on your situation. Record decisions made during execution where the skill requires it.

7. **Apply the Waste Test where specified.** Some skills include an explicit Waste Test checkpoint — a set of questions that confirm the produced artifact does not duplicate content that belongs in a different artifact or contains unnecessary detail. If the artifact fails the Waste Test, simplify before proceeding.

8. **Run all quality checks.** Before routing the artifact for approval, evaluate every quality check condition listed in the skill file. Each check is pass/fail. If any check fails, correct the artifact and re-run the check. Do not route a failing artifact.

9. **Route the artifact for approval using the T1–T4 model.** Determine the correct approval authority using the `authority_threshold` field in the YAML front matter and the Decision Category Reference Table in `AUTHORITY-ROUTING.md`. Route the artifact to the identified authority. Record the approval decision in the artifact itself or in A35 (Governance and Decision Authority Record).

10. **Trigger downstream skills.** Once the artifact is approved, consult the skill's Downstream Skills list and trigger each listed skill in the correct sequence. Update `SKILL-REGISTRY.md` or any tracking system in use to reflect that this skill has been completed and the downstream skills are now ready to execute.

---

## How to Handle Pre-condition Failures

Pre-condition failures are not errors in execution — they are valid halting conditions. The correct response to a pre-condition failure is always to stop, diagnose, and resolve the missing upstream item before proceeding.

**Decision logic:**

```
Pre-condition check for Skill X
│
├─► All pre-conditions satisfied?
│     └─► YES → Proceed to gather inputs (Step 4 above)
│
└─► One or more pre-conditions NOT satisfied?
      │
      ├─► Missing upstream artifact (e.g., A01 not approved)?
      │     └─► Identify the skill that produces that artifact
      │          └─► Return to that skill and complete it first
      │          └─► Do NOT proceed with Skill X until the artifact exists and is approved
      │
      ├─► Missing organizational prerequisite (e.g., Pack 01 not complete)?
      │     └─► Return to Pack 01 (SKL-01-01, SKL-01-02, SKL-01-03) and complete all three
      │          └─► Do NOT begin any Pack 02+ skill until Pack 01 foundations are in place
      │
      ├─► Missing named authority (e.g., no sponsor identified)?
      │     └─► Escalate to the project initiating authority or portfolio governance
      │          └─► Do NOT draft artifacts that require sponsor ownership without a sponsor
      │
      └─► Pre-condition failure is documented, root cause is known, and resolution is in progress?
            └─► Record the failure, the cause, and the expected resolution date
                 └─► Revisit the skill when the pre-condition is resolved
```

**For AI agents:** when a pre-condition fails, return a structured response that identifies: (a) the skill ID that was halted, (b) the specific pre-condition that failed, (c) the upstream skill or artifact needed to resolve it, and (d) the recommended next action. Do not attempt to bypass a pre-condition failure by generating placeholder content.

---

## How to Route Decisions Using T1–T4

Every skill's YAML front matter includes an `authority_threshold` field that assigns one of four decision bands to the artifact the skill produces. These bands determine who must approve the output before it can be committed and before downstream skills are triggered.

| Band | Characteristics | Default Approval Authority |
|------|----------------|---------------------------|
| **T1 — Operational** | Localized effect, low risk, inside approved plan tolerances | Project manager or designated delivery lead |
| **T2 — Controlled Change** | Material effect on one baseline or major commitment, within project authority | Sponsor-delegated change authority or functional authority |
| **T3 — Governance Change** | Cross-baseline effect, major financial/schedule/value impact, or authority boundary shift | Project governing body or sponsor |
| **T4 — Enterprise Portfolio** | Cross-project, strategic, regulatory, or enterprise-service impact | Portfolio authority, PMO governance forum, or executive authority |

**How to apply the model:**

1. Read the `authority_threshold` field in the skill's YAML front matter (e.g., `T3`).
2. Open `AUTHORITY-ROUTING.md` and locate the matching row in the T1–T4 Decision Threshold Model table.
3. Identify the default decision authority for that band.
4. Cross-reference the Artifact Authority Quick Reference table in `AUTHORITY-ROUTING.md` — look up the artifact ID (A01–A41) to confirm the specific approval authority and escalation trigger for this artifact.
5. Route the artifact to the identified authority. If the situation matches an escalation trigger (e.g., "enterprise-level commitment or regulatory exposure involved"), escalate to the next governance tier.
6. Record the routing decision and approval outcome.

For the full T1–T4 model, escalation path rules, RACI defaults, and the complete artifact authority table (A01–A41), see `AUTHORITY-ROUTING.md`.

---

## Worked Example: SKL-02-01 (Project Charter Creation)

This example walks through a realistic execution of `SKL-02-01 — Project Charter Creation` for a medium-complexity internal IT project.

### Scenario

An IT department has received approval to proceed with a customer data migration project. The business case (A01) has been approved by the VP Operations. Pack 01 is complete — governance framework, document control standards, and repository configuration are all in place. The PMO has assigned a project manager. The goal is to produce a signed Project Charter (A04).

### Inputs Gathered

| Input | Source | Status |
|-------|--------|--------|
| Business Case (A01) | `artifacts/initiating/A01-business-case.md` | Approved by VP Operations |
| Benefits and Value Measurement Record (A02) | `artifacts/stakeholders/A02-benefits-value-measurement-record.md` | Available — benefits baseline set |
| EEFs and OPAs (A05) | Context Register in `artifacts/governance/A05-context-register.md` | Available — Pack 01 outputs |
| Feasibility Record (A03) | Not produced — small project, waived per Pack 01 tailoring decision | Documented exception |
| Intake/Prioritization Record (A10) | Not required — project is below portfolio governance threshold | Confirmed not applicable |

**Pre-condition check:** Business Case (A01) approved ✓ · PM nominated ✓ · Sponsor identified (VP Operations) ✓ · Pack 01 complete ✓ · EEFs/OPAs accessible ✓. All pre-conditions satisfied. Proceed.

### Steps Taken

**Step 1 — Confirm Prerequisites.** All five pre-condition items checked off. A03 absence documented as a tailoring exception in the Pack 01 Tailoring Decision Record (A06). No blocking issues.

**Step 2 — Populate the Charter Fields.** Opened `artifacts/initiating/A04-project-charter-template.md`. Populated all nine mandatory fields:
- Project title: *Customer Data Migration — Phase 1*
- Purpose and business need: Linked to A01 rationale; stated in two sentences
- Strategic alignment: Referenced strategic objective S-2026-09 (CRM modernization)
- High-level scope boundary: In scope — records from System A and System B; Out of scope — user training and reporting configuration
- High-level milestones: Four milestones (kickoff, data extraction, migration go-live, sign-off)
- Budget boundary: Not to exceed USD 120,000 without sponsor re-authorization
- Named sponsor: VP Operations (full name and role)
- Named PM: Full name, role, and authority statement (approve changes within 10% cost and 5-day schedule variance without escalation)
- Success criteria: 100% records migrated with zero data loss; go-live by Q3 2026

**Step 3 — Apply the Waste Test.** Checked: charter is 2 pages ✓ · no WBS or schedule content ✓ · business case cited by reference only ✓ · PM and sponsor explicitly named ✓. Waste Test passed.

**Step 4 — Route for Approval.** YAML `authority_threshold: T3`. Opened `AUTHORITY-ROUTING.md` — T3 band defaults to "Project governing body or sponsor." Artifact A04 authority quick reference confirms: "Sponsor or authorized initiating body." Routed to VP Operations (sponsor) for review and signature.

**Step 5 — Trigger Downstream Skills.** Sponsor signed the charter. Downstream skills triggered: SKL-02-02 (Stakeholder Identification), SKL-02-03 (Context Register), SKL-02-04 (Governance Setup), SKL-02-05 (Initial Tailoring Decision). Recorded in SKILL-REGISTRY.md tracking column.

### Output Produced

**Artifact:** `artifacts/initiating/A04-project-charter.md` — completed and sponsor-signed.  
**Version:** 1.0.0 (initial signed baseline).  
**Secondary output:** Assumption log entries transferred to A05 Context Register (three assumptions recorded during Step 2).

### Quality Check Run

| Quality Check | Result |
|--------------|--------|
| All 9 mandatory fields present | ✓ Pass |
| Sponsor signature present and dated | ✓ Pass |
| Charter does not reproduce full business case | ✓ Pass — A01 cited by reference |
| No WBS, schedule, or risk register content | ✓ Pass |
| PM authority limits explicitly stated | ✓ Pass |
| Charter linked to strategic objective | ✓ Pass |

All quality checks passed. Artifact committed to repository. Downstream skills triggered.

---

## Related Files

| File | Relationship |
|------|-------------|
| `docs/human-practitioners/getting-started.md` | Entry-point guide — read before this file if you have not already |
| `docs/human-practitioners/how-to-use-artifacts.md` | Companion guide — explains artifact versioning, status lifecycle, and control rules |
| `docs/ai-agents/ai-agent-guide.md` | Agent-specific operating instructions, tool policy, and safety rules |
| `AUTHORITY-ROUTING.md` | T1–T4 model, artifact authority table (A01–A41), escalation rules — referenced throughout skill execution |
| `SKILL-REGISTRY.md` | Master skill index — use to identify the correct skill and confirm upstream prerequisites |
| `skills/02-initiating/SKL-02-01-project-charter.md` | The skill file used in the worked example above |
| `artifacts/initiating/A04-project-charter-template.md` | Template used in the worked example |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
