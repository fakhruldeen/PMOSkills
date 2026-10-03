---
doc_id: DOC-ONTOLOGY-SPEC
doc_name: PMOSkills knowledge Graph and Ontology Specification
version: "1.0.0"
status: Active
authority: PMBOK8 Core Schema standard (Primary)
file_path: "docs/ai-agents/ontology-specification.md"
---

# 🧠 PMOSkills Knowledge Graph & Ontology Specification

This document provides the authoritative ontological specifications and semantic relationships governing the files in the **PMOSkills Reference Architecture**. It is designed explicitly for **AI Agents**, LLM parsers, knowledge graph builders, and developer tools to programmatically parse and navigate the repository.

---

## 1. Ontological Node Types (Entity Classes)

The PMOSkills repository is modeled as a directed, acyclic semantic graph consisting of five core entity classes:

```
  ┌────────────────────────────────────────────────────────────────────────┐
  │                                PMOSkills                               │
  └───────────────────┬─────────────────────────────────┬──────────────────┘
                      │                                 │
                      ▼                                 ▼
         ┌────────────────────────┐        ┌────────────────────────┐
         │    Reference Layer     │        │      Skills Layer      │
         └────────────┬───────────┘        └────────────┬───────────┘
                      │                                 │
                      ▼                                 ▼
         ┌────────────────────────┐        ┌────────────────────────┐
         │     Artifact Layer     │        │      Testing Layer     │
         └────────────────────────┘        └────────────────────────┘
```

1.  **`Principle` (P01-P12):** Core philosophical standards guiding behavior.
2.  **`PerformanceDomain` (PD01-PD08):** Broad operational performance fields.
3.  **`ProcessRecord` (PR01-PR41):** Formal project management process definitions.
4.  **`ExecutableSkill` (SKL-XX-YY):** Step-by-step procedural action manuals.
5.  **`ArtifactTemplate` (A01-A39):** Machine-parsable, placeholder-driven project deliverables.
6.  **`Testcase` (TST-XX-YY):** Programmatic QA tests validating skills and artifacts.

---

## 2. Relationship Schemas (Edges)

Nodes are linked by strict, deterministic semantic edges:

| Subject Node | Relationship (Edge) | Object Node | Description |
|---|---|---|---|
| `ProcessRecord` | `MAPS_TO` | `PerformanceDomain` | Maps a process to its PMBOK 8 operational domain. |
| `ExecutableSkill` | `IMPLEMENTS` | `ProcessRecord` | Maps a skill to its defining standard process. |
| `ExecutableSkill` | `OUTPUTS` | `ArtifactTemplate` | Declares the mandatory template produced by a skill. |
| `ArtifactTemplate` | `VALIDATES` | `ProcessRecord` | Connects a deliverable template back to standard process compliance. |
| `Testcase` | `VERIFIES` | `ExecutableSkill` | Programmatic unit tests validating skill execution logs. |

---

## 3. Strict GOV Front-Matter Metadata Properties

Every markdown document in the repository must contain a valid YAML front-matter block at the absolute beginning of the file. AI agents must parse and validate these properties:

### 3.1 Executable Skill (`skills/`) YAML Specifications
```yaml
---
skill_id: SKL-03-03
skill_name: "Create Work Breakdown Structure (WBS)"
pack: "Pack 03: Planning"
version: "1.0.0"
status: Active
pmo_level: "T2 Controlled"
inputs:
  - "docs/human-practitioners/tailoring-guide.md"
  - "artifacts/initiating/A04-project-charter-template.md"
outputs:
  - "artifacts/planning-and-baselines/A09-work-breakdown-structure-template.md"
  - "artifacts/planning-and-baselines/A10-wbs-dictionary-template.md"
pmbok8_align:
  - "PR07: Create WBS"
  - "PD03: Planning"
---
```

### 3.2 Artifact Template (`artifacts/`) YAML Specifications
```yaml
---
artifact_id: A09
artifact_name: "Work Breakdown Structure Record"
category: "Planning & Baselines"
version: "1.0.0"
status: Template
project_id: "PMO-TEMPLATE"
pmbok8_align:
  - "PR07: Create WBS"
  - "PD03: Planning"
---
```

---

## 4. Parser Directives for AI Graph Traversers

AI crawlers navigating this repository should follow these traversal protocols:

### 4.1 Upward Traceability Traversal
*   **Goal:** Trace a modified artifact template back to its source PMBOK 8 standard.
*   **Protocol:**
    1.  Read `artifacts/AXX.md` front-matter properties to identify `pmbok8_align` values.
    2.  Locate `reference/processes/PRXX.md` to review the standard process input/output definitions.
    3.  Confirm alignment by reviewing the corresponding principle `reference/principles/PXX.md`.

### 4.2 Downward Verification Traversal
*   **Goal:** Verify that a standard process change is fully integrated.
*   **Protocol:**
    1.  Read `reference/processes/PRXX.md`.
    2.  Query `skills/` for any skill matching `pmbok8_align: PRXX`.
    3.  Verify the skill outputs the expected `AXX` template.
    4.  Run unit tests `tests/` mapping `TST-XX` to confirm programmatic compliance.

---

*Authority: PMBOK 8 Core Schema Standard · PMO Shared Governance Board · AI Ontologies Council*
