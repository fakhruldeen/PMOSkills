# How to Use Artifacts

**Repository:** PMOSkills  
**Version:** 1.0.0  
**Authority:** PMBOK8 Primary · PMI Companion References Secondary  
**File Path:** `docs/human-practitioners/how-to-use-artifacts.md`

---

## Purpose

This guide explains what an artifact is in the PMOSkills repository, how artifact definition files and template files are structured, how to fill in a template correctly, how to move an artifact through its lifecycle from blank template to baselined record, and how to locate the artifact you need. It is written for both PMO practitioners producing artifacts manually and AI agents generating artifact outputs programmatically. Read this guide before opening any file in the `artifacts/` directory.

---

## Audience

### PMO Practitioners

This guide is for project managers, PMO analysts, governance leads, and project coordinators who need to create, review, approve, baseline, and maintain project management artifacts. You do not need to understand YAML or software systems, but you must follow the placeholder convention exactly and understand what each lifecycle status means before moving an artifact forward.

### AI Agents

This guide provides the artifact execution contract that governs how an agent must identify the correct artifact file, parse its structure, populate its template fields, and commit the result. Cross-reference `docs/ai-agents/ai-agent-guide.md` for agent-specific operating rules, tool policy, and output format constraints.

### Book Authors

This guide identifies which artifact files carry authoritative PMI-derived content and which sections contain synthesis or organizational interpretation. Use this guide to confirm which artifact IDs and sections are appropriate to cite.

---

## Prerequisites

- You have read `docs/human-practitioners/getting-started.md` and understand the repository structure and the three-tier authority model.
- You have identified the artifact you need using `SKILL-REGISTRY.md` (column: Primary Artifact Output) or the folder index in this guide.
- You have access to *A Guide to the Project Management Body of Knowledge (PMBOK® Guide) — Eighth Edition* and *The Standard for Project Management* (PMI, 2021) as the primary authority for any governance or terminology claim.
- For AI agents: your runtime can parse YAML front matter and Markdown tables. You must be able to halt on a missing mandatory input and report the gap rather than proceeding with an empty field.

---

## What Is an Artifact in This Repository?

An artifact is a document or record created during the project lifecycle to manage work and provide information to the team, stakeholders, and governance bodies. Artifacts are not deliverables — they are the management records and plans that govern how deliverables are produced, tracked, changed, and closed. Every artifact in PMOSkills has a defined purpose, a defined owner, a defined approval authority, and a defined point in the project lifecycle at which it must exist in an approved state before downstream work can proceed.

Within this repository, the word "artifact" is used to cover three distinct things that must be kept separate:

**(a) Artifact definition file** — describes what the artifact is: its purpose, scope, required sections, field definitions, quality criteria, authority routing, and lifecycle rules. This file is reference material. Read it to understand the artifact before you attempt to fill in its template.

**(b) Artifact template file** — the blank fill-in form. It contains all sections, tables, and `[FIELD: ...]` placeholders in the correct order and structure. Copy this file to start creating a project-specific instance.

**(c) A completed instance** — the filled-in template for a real project. It contains actual project data in every required field, carries the project name and ID, is versioned, and is routed for approval through the authority path specified in `AUTHORITY-ROUTING.md`.

Do not confuse these three things. Editing the definition file is not the same as completing an artifact. Copying the template without filling it in does not constitute a draft artifact.

*Authority: PMI Lexicon — "artifact" · PMBOK8 Guide §2.1.6*

---

## Definition File vs. Template File

Every artifact in PMOSkills exists as two companion files, both stored in the same folder:

**Definition file** — named `A##-kebab-name.md`. This is the artifact reference document. Open it to understand the artifact's purpose, governance layer, quality criteria, required sections, and authority routing. The definition file contains YAML front matter with machine-readable metadata, a Purpose section, a Scope table, a detailed field-by-field reference, and quality checks. Read sections 1–3 before attempting to fill in the template.

**Template file** — named `A##-kebab-name-template.md`. This is the blank form. Copy it, rename the copy to reflect your project (e.g., `ProjectAlpha-A04-project-charter.md`), and fill in every `[FIELD: ...]` placeholder. Never edit the template file itself; always work from a copy.

| File Type | When to Use It | Example Filename |
|-----------|---------------|-----------------|
| Definition file | To understand the artifact — read before filling in any template | `A04-project-charter.md` |
| Template file | To create a project instance — copy this and fill it in | `A04-project-charter-template.md` |
| Completed instance | The actual project artifact — your filled-in copy, stored in your project folder | `ProjectAlpha-A04-project-charter.md` |

Both the definition file and the template file live in the same `artifacts/` subfolder. The definition file does not contain `[FIELD: ...]` placeholders; the template file does.

---

## The `[FIELD: ...]` Placeholder Convention

Every template field uses the `[FIELD: description of what to enter]` format. This convention is the single signal that a field requires human or agent input. The rules are:

**Never leave a `[FIELD: ...]` placeholder in a completed instance.** Either fill it with real project data, or write "Not applicable — [reason]" to document explicitly why the field does not apply. A completed artifact instance that still contains any `[FIELD: ...]` text is not complete and must not be routed for approval.

**Enumerated fields list valid values inside the placeholder.** When a field has a constrained set of acceptable inputs, the valid options appear inside the brackets: for example, `[FIELD: select from High / Medium / Low]`. You must select from the listed values. Do not substitute synonyms or create new values unless the definition file explicitly permits free text.

**`[FIELD: ...]` in a template means the field is a required input.** If you cannot fill a field because the information does not yet exist, you must document this as an open item with an owner and a date by which it will be resolved. An unfilled mandatory field means the artifact is not complete — not that the field can be skipped.

**Conditional fields** are marked with a note inside the placeholder, such as `[FIELD: complete only if delivery approach is Adaptive]`. If the condition does not apply to your project, write "Not applicable — [state the condition that excluded this field]".

---

## Artifact Lifecycle

Every artifact in PMOSkills moves through a defined sequence of lifecycle states. The `Status` field in the artifact's YAML front matter and its header table must reflect the current state at all times. The sequence is:

**1. Blank Template**
What it means: The template file exists in the repository but no project data has been entered. No action has been taken.
Who acts: The PM or designated artifact owner identifies that the artifact is needed and makes a copy of the template.
Status field value: `Template · Active` (this is the status of the template file itself — your copy starts as `Draft · In Progress`).

**2. Draft**
What it means: The artifact owner has begun filling in the template. Some or all fields are populated, but the artifact has not been submitted for review. It may still contain `[FIELD: ...]` placeholders.
Who acts: The artifact owner (PM, analyst, or specialist defined in the definition file).
Status field value: `Draft · In Progress`

**3. Reviewed**
What it means: A qualified reviewer — defined in the definition file or skill that produces this artifact — has read the completed artifact, confirmed that all mandatory fields are filled, checked for consistency with upstream artifacts, and documented any required corrections. All corrections have been resolved.
Who acts: The reviewer designated by the skill or governance rules (typically a peer PM, PMO analyst, or technical lead).
Status field value: `Draft · In Review` → `Reviewed`

**4. Approved**
What it means: The approval authority designated in `AUTHORITY-ROUTING.md` for this artifact's governance layer has formally accepted the artifact. Approval authority varies by artifact — see the T1–T4 routing table.
Who acts: The designated approval authority (sponsor, governing body, PMO leader, or delegated change authority per `AUTHORITY-ROUTING.md`).
Status field value: `Approved`

**5. Baselined**
What it means: The artifact is locked as the approved reference point for this project. The baselined version becomes the standard against which all future changes are measured. Changes after baselining require formal change control.
Who acts: The PM records the baseline date and version. Sponsor or governing body confirms baselining authority where required.
Status field value: `Baselined · v[version number]`

**6. Controlled**
What it means: The artifact is under active change control. Any change to a controlled artifact must be requested via A12 (Change Log), assessed, approved at the appropriate T-band, and recorded before the artifact is modified.
Who acts: PM manages change requests; approval authority per `AUTHORITY-ROUTING.md`.
Status field value: `Controlled · v[version number]`

**7. Closed**
What it means: The artifact has reached the end of its active lifecycle. It is archived for audit and historical reference but no further changes are expected or permitted without a reopening decision.
Who acts: PM closes the artifact as part of phase gate or project closure (per SKL-06-01 and A27).
Status field value: `Closed · v[final version]`

---

## How to Baseline an Artifact

Baselining means the artifact is locked as the approved reference point for the project. Once baselined, the content of the artifact may not be changed without formal change control — you must submit a change request via A12 (Integrated Change Decision Record), have it approved at the correct T-band per `AUTHORITY-ROUTING.md`, and record the approved change before modifying the artifact.

To baseline an artifact:

1. Confirm the artifact has reached `Approved` status — the designated approval authority has signed off.
2. Record the baseline date and version number in the artifact header table and YAML front matter (e.g., `status: Baselined · v1.0`).
3. Commit the baselined file to version control with a commit message following the convention: `chore(artifacts): baseline [Artifact ID] [Artifact Name] at v[version]`.
4. Update A14 (Integrated Project Management Plan) to reference this artifact as a baselined subsidiary plan or component. A14 is the parent artifact that baselines all subsidiary plans and integrates the full set of project baselines. See [`artifacts/planning-and-baselines/A14-integrated-project-management-plan.md`](../artifacts/planning-and-baselines/A14-integrated-project-management-plan.md).
5. Update the project Change Log (A12) to record that the baseline was established.

Any change to a baselined artifact requires raising a change request in A12 and routing it through the T1–T4 threshold model before the artifact may be edited. See [`AUTHORITY-ROUTING.md`](../AUTHORITY-ROUTING.md) for the routing rules and decision thresholds.

---

## Artifact Folders and Where to Find Things

Artifacts are organized by lifecycle area under the `artifacts/` directory. The folder name indicates when and why the artifact is used. Some artifacts appear in more than one lifecycle area and are stored in the folder that reflects their primary use.

| Folder | What Artifacts Live There | Example Artifact IDs |
|--------|--------------------------|---------------------|
| `artifacts/initiating/` | Authorization records created at project or phase start | A01 Business Case · A04 Project Charter |
| `artifacts/governance/` | Context, constraints, AI/data controls, governance decision records | A05 Context Register · A34 · A35 · A37 · A39 |
| `artifacts/planning-and-baselines/` | All planning records and baseline documents | A06 · A08 · A14 · A15 · A16 · A28 |
| `artifacts/stakeholders/` | Stakeholder register, engagement strategy, benefits records | A02 · A07 |
| `artifacts/quality/` | Quality management plan and requirements traceability | A09 · A13 |
| `artifacts/communications/` | Communications management plan | A10 |
| `artifacts/monitoring-and-decisions/` | Change log, performance reporting, issue log, risk record, lessons learned | A12 · A17 · A18 · A19 · A20 · A21 |
| `artifacts/resources/` | Team operating agreements, resource capacity, repository configuration | A03 · A25 · A26 |
| `artifacts/procurement/` | Procurement and supplier management records, supplier evaluation | A31 · A32 |
| `artifacts/closing/` | Project closure record | A27 |
| `artifacts/knowledge/` | Knowledge and lessons management | A30 |
| `artifacts/stakeholders-communications/` | Change readiness and adoption records | A29 |

---

## Worked Example: Creating a Project Charter Using A04

The following steps show how to produce a completed, approval-ready Project Charter for a real project.

**Step 1 — Read the definition file.**
Open [`artifacts/initiating/A04-project-charter.md`](../artifacts/initiating/A04-project-charter.md). Read sections 1–3 (Purpose, Scope, and the Artifact Metadata table). Understand what the charter authorizes, what it explicitly excludes (detailed plans, full requirements, procurement strategy), and what approval authority it requires.

**Step 2 — Copy the template.**
Copy [`artifacts/initiating/A04-project-charter-template.md`](../artifacts/initiating/A04-project-charter-template.md) to a new file. Name the copy to reflect your project, for example: `ProjectAlpha-A04-project-charter.md`. Store it in your project's working folder. Do not modify the original template file.

**Step 3 — Fill in each `[FIELD: ...]`.**
Work through the template section by section. For every `[FIELD: ...]` placeholder, enter the required project data: project name, sponsor name and role, project manager name and authority level, high-level scope boundaries (in scope and out of scope), strategic alignment statement, key assumptions and initial constraints, high-level milestone intent, initial budget boundary, and success criteria at the governance level. If any mandatory field cannot be filled, document "Not applicable — [reason]" or flag it as an open item with an owner.

**Step 4 — Save your completed instance.**
Save the filled-in charter document. Update the header fields: set `Charter Version` (e.g., `1.0`), `Charter Date`, `Prepared By`, and set the `Status` field to `Draft · In Progress`. Ensure no `[FIELD: ...]` text remains.

**Step 5 — Route for sponsor approval.**
The Project Charter requires T3 approval (sponsor or authorized initiating body) per `AUTHORITY-ROUTING.md`. Route the draft charter to the sponsor for review and formal approval. Record the review in the charter's Review Log section if one is present.

**Step 6 — Update status and record in the Change Log.**
When the sponsor approves the charter, update the `Status` field to `Approved` and record the approval date and version. Add an entry to the project Change Log (A12) noting the charter was approved. If the charter is being baselined immediately upon approval, follow the baselining steps in the section above and update `Status` to `Baselined · v1.0`.

**Step 7 — Update the Context Register.**
Open the project's A05 Context Register ([`artifacts/governance/A05-context-register.md`](../artifacts/governance/A05-context-register.md)) and add a reference entry pointing to the approved charter. A05 tracks the project's environmental factors, assumptions, constraints, and linked governance records — the charter is the first entry in A05's project reference section.

---

## Cross-Reference to Related Skills

Each artifact is produced or consumed by one or more skills in the `skills/` directory. The table below shows the producing skill and primary consuming skill for the ten most commonly used artifacts.

| Artifact | Skill That Produces It | Primary Skill That Consumes It |
|----------|----------------------|-------------------------------|
| A04 — Project Charter | SKL-02-01 Initiate Project or Phase | SKL-03-01 Integrate and Align Project Plans |
| A05 — Context Register | SKL-01-01 Establish PM Governance Framework | SKL-02-01 · SKL-03-09 Plan Risk Management |
| A07 — Stakeholder Register | SKL-02-02 Identify Stakeholders | SKL-03-07 Plan Stakeholder Engagement |
| A08 — Scope and Requirements Decision Record | SKL-03-02 Plan Scope Management / SKL-03-03 Elicit Requirements | SKL-03-05 Develop Scope Structure |
| A14 — Integrated Project Management Plan | SKL-03-01 Integrate and Align Project Plans | All Pack 04 executing skills |
| A15 — Schedule Baseline Record | SKL-03-06 Plan Schedule Management | SKL-05-02 Monitor and Control Schedule |
| A16 — Financial Baseline Record | SKL-03-13 Plan Cost Management | SKL-05-03 Monitor and Control Costs |
| A19 — Risk Management Record | SKL-03-09 Plan Risk Management | SKL-05-05 Monitor and Control Risks |
| A12 — Change Log | SKL-05-06 Perform Integrated Change Control | All Pack 05 monitoring and controlling skills |
| A27 — Project Closure Record | SKL-06-01 Close Project or Phase | SKL-06-02 Capture Final Lessons Learned |

For the full skill-to-artifact dependency map, consult [`SKILL-REGISTRY.md`](../SKILL-REGISTRY.md).

---

## Related Files

| File | Purpose | Location |
|------|---------|----------|
| `docs/human-practitioners/getting-started.md` | Repository entry point — structure, audiences, directory map | [`docs/human-practitioners/getting-started.md`](getting-started.md) |
| `docs/human-practitioners/how-to-use-skills.md` | How to read and execute a skill file | [`docs/human-practitioners/how-to-use-skills.md`](how-to-use-skills.md) |
| `docs/ai-agents/ai-agent-guide.md` | AI agent operating contract for this repository | [`docs/ai-agents/ai-agent-guide.md`](ai-agent-guide.md) |
| `SKILL-REGISTRY.md` | Master index of all 47 skills and their primary artifact outputs | [`SKILL-REGISTRY.md`](../SKILL-REGISTRY.md) |
| `AUTHORITY-ROUTING.md` | T1–T4 decision threshold model and artifact approval authority table | [`AUTHORITY-ROUTING.md`](../AUTHORITY-ROUTING.md) |
| `LIFECYCLE-MAP.md` | Phase-by-phase artifact and process flow | [`LIFECYCLE-MAP.md`](../LIFECYCLE-MAP.md) |
| `CONTRIBUTING.md` | File naming conventions, commit message format, quality standards | [`CONTRIBUTING.md`](../CONTRIBUTING.md) |
| `artifacts/initiating/A04-project-charter.md` | Worked example — definition file for Project Charter | [`artifacts/initiating/A04-project-charter.md`](../artifacts/initiating/A04-project-charter.md) |
| `artifacts/initiating/A04-project-charter-template.md` | Worked example — template file for Project Charter | [`artifacts/initiating/A04-project-charter-template.md`](../artifacts/initiating/A04-project-charter-template.md) |
| `artifacts/planning-and-baselines/A14-integrated-project-management-plan.md` | Parent baseline artifact — integrates all subsidiary plans | [`artifacts/planning-and-baselines/A14-integrated-project-management-plan.md`](../artifacts/planning-and-baselines/A14-integrated-project-management-plan.md) |
| `artifacts/monitoring-and-decisions/A12-change-log.md` | Change control record — required for all post-baseline changes | [`artifacts/monitoring-and-decisions/A12-change-log.md`](../artifacts/monitoring-and-decisions/A12-change-log.md) |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
