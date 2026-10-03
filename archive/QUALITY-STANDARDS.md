# PMOSkills — Quality Standards and Enforcement Rules
**Version:** 2.0.0
**Date:** 2026-06-01
**Repository:** https://github.com/fakhruldeen/PMOSkills
**Authority:** PMBOK 8 Primary · PMI Companion References Secondary
**Status:** Active · Enforced from this version forward
**Supersedes:** QUALITY-STANDARDS.md v1.1.0 (2026-06-01)
**Applies to:** Every file in this repository — past, present, and future

> This document is the **single authoritative source** for quality standards, structural requirements, file naming rules, and quality gate enforcement for the PMOSkills repository. All other documents that reference quality standards defer to this file. `MASTER-PLAN.md` and `COMPLETION-PLAN-V4.md` reference this file — they do not define quality rules independently.

---

## Table of Contents

1. [File Type Registry](#1-file-type-registry)
2. [YAML Front-Matter Schemas](#2-yaml-front-matter-schemas)
3. [File Structure Standards](#3-file-structure-standards)
4. [File Naming Conventions](#4-file-naming-conventions)
5. [Directory Structure Rules](#5-directory-structure-rules)
6. [Source Traceability Rules](#6-source-traceability-rules)
7. [Quality Gate Checklists](#7-quality-gate-checklists)
8. [Enforcement and Failure Protocol](#8-enforcement-and-failure-protocol)
9. [AI Agent Pre-Commit Checklist](#9-ai-agent-pre-commit-checklist)
10. [Version History](#10-version-history)

---

## 1. File Type Registry

Every file in this repository belongs to exactly one of the following canonical types. File type determines: YAML schema, section structure, naming pattern, and quality gate.

| Type Code | File Type | Location Pattern | Naming Pattern |
|---|---|---|---|
| `SKL` | Skill file | `skills/NN-pack-name/` | `SKL-NN-NN-kebab-name.md` |
| `ART-DEF` | Artifact definition | `artifacts/category-name/` | `ANN-kebab-name.md` |
| `ART-TPL` | Artifact template | `artifacts/category-name/` | `ANN-kebab-name-template.md` |
| `ART-EX` | Artifact example | `artifacts/category-name/` | `ANN-kebab-name-example.md` |
| `REF` | Reference file | `reference/subdirectory/` | `XXnn-kebab-name.md` |
| `DOC` | Documentation file | `docs/` | `kebab-name.md` |
| `SHR` | Shared component | `shared/subdirectory/` | `kebab-name.md` |
| `TST` | Test file | `tests/subdirectory/` | `ST-SKL-NN-NN.md` or `IT-NN.md` |
| `GOV` | Governance/root file | root `/` | `UPPER-KEBAB.md` |

---

## 2. YAML Front-Matter Schemas

Every file **must** begin with a YAML front-matter block. Fields marked `required` cause a quality gate failure if absent. Fields marked `if-applicable` must be present when the condition is met.

### 2.1 Skill File (`SKL`) — Required YAML

Derived from live file `skills/01-organizational-setup/SKL-01-01-establish-pm-governance-framework.md`.

```yaml
---
skill_id: SKL-NN-NN                          # required · format: SKL-[pack_num]-[seq_num]
skill_name: [Full Skill Name]                # required · title case · no abbreviations
pack: "NN — Pack Name"                       # required · matches directory name
version: "1.0.0"                            # required · semver
status: "Draft · Untested"                  # required · see status vocabulary §2.6
source_type: PMI-derived                     # required · PMI-derived | PMI-adapted | org-defined
primary_artifact_output: "ANN — Artifact Name"  # required · one primary output only
artifacts_updated:                           # required · list all artifacts written/updated
  - "ANN — Artifact Name (section note)"
artifacts_consumed:                          # if-applicable · list all artifacts read as inputs
  - "ANN — Artifact Name"
pmbok8_process_anchor: "[PMBOK8 section reference]"  # required · §X.X or principle name
performance_domains:                         # required · one or more from canonical list
  - Governance
focus_area: [Phase Name]                     # required · see focus area vocabulary §2.7
upstream_prerequisites:                      # required · what must exist before this skill runs
  - "ANN — Artifact name must exist"
downstream_skills:                           # if-applicable · skills unlocked by this skill
  - "SKL-NN-NN — Skill Name"
file_path: "skills/NN-pack-name/SKL-NN-NN-kebab-name.md"  # required · exact repo path
tests: 9                                     # required · count of test cases in ## Tests section
---
```

**Canonical `status` vocabulary:**
- `Draft · Untested` — stub or initial build, no test cases verified
- `Draft · In Review` — content complete, under peer or PMO review
- `Active · Tested` — all test cases pass, approved for use
- `Deprecated` — superseded; do not use for new work

**Canonical `performance_domains` vocabulary (PMBOK 8 Guide):**
Governance · Scope · Schedule · Finance · Stakeholders · Resources · Risk

**Canonical `focus_area` vocabulary:**
Organizational Setup · Initiating · Planning · Executing · Monitoring and Controlling · Closing · Adaptive and Hybrid · PMO Operations · Portfolio and Program Management

---

### 2.2 Artifact Definition File (`ART-DEF`) — Required YAML

Derived from live files `A06-project-management-plan.md`, `A08-scope-requirements-backlog.md`.

```yaml
---
artifact_id: ANN                             # required · format: A[two-digit-num]
artifact_name: [Full Artifact Name]          # required · title case
version: "1.0.0"                            # required · semver
status: Active                               # required · Active | Draft | Deprecated
authority: "PMBOK8 Guide §X.X.X"            # required · specific section, not just chapter
pmbok8_process_group: [Process Group Name]   # required · Initiating|Planning|Executing|M&C|Closing
performance_domains:                          # required
  - [Domain Name]
produced_by_skills:                          # required · list of SKL IDs
  - SKL-NN-NN
consumed_by_skills:                          # if-applicable
  - SKL-NN-NN
related_artifacts:                           # if-applicable
  - ANN
has_template: true                           # required · true|false
has_example: true                            # required · true|false
file_path: "artifacts/category-name/ANN-kebab-name.md"  # required
---
```

---

### 2.3 Artifact Template File (`ART-TPL`) — Required YAML

```yaml
---
template_for: ANN                            # required · parent artifact ID
artifact_name: [Full Artifact Name]          # required · must match parent definition
version: "1.0.0"                            # required · must match parent definition version
status: Active                               # required
file_path: "artifacts/category-name/ANN-kebab-name-template.md"  # required
parent_definition: "artifacts/category-name/ANN-kebab-name.md"   # required · relative path
---
```

**Template rule:** Every `[FIELD: description]` placeholder must remain as-is. Pre-filling a template placeholder with sample data is a critical quality failure (L1).

---

### 2.4 Artifact Example File (`ART-EX`) — Required YAML

```yaml
---
example_for: ANN                             # required · parent artifact ID
artifact_name: [Full Artifact Name]          # required
version: "1.0.0"                            # required
scenario: "Meridian CRM System Upgrade"     # required · all examples use Meridian scenario
status: Active                               # required
file_path: "artifacts/category-name/ANN-kebab-name-example.md"  # required
parent_definition: "artifacts/category-name/ANN-kebab-name.md"  # required
parent_template: "artifacts/category-name/ANN-kebab-name-template.md"  # required
---
```

**Example scenario lock:** All artifact examples in this repository use the **Meridian CRM System Upgrade** scenario for cross-artifact consistency. No other scenario may be used without a governance decision logged in CHANGELOG.md and MASTER-PLAN.md.

---

### 2.5 Reference File (`REF`) — Required YAML

```yaml
---
ref_id: XXnn                                 # required · e.g. P01, PD02, FA03, PR11
ref_type: Principle|PerformanceDomain|FocusArea|Process|KnowledgeArea|Tool|IO|Appendix|Glossary
ref_name: [Full Reference Name]              # required · title case
version: "1.0.0"                            # required
status: Active                               # required
pmbok8_source: "PMBOK8 Guide §X.X.X"        # required · specific section
companion_ref_shortcode: [code]             # if-applicable · e.g. WBS-3E, PSS-3E, PMO-PG
related_skills:                              # if-applicable
  - SKL-NN-NN
related_artifacts:                           # if-applicable
  - ANN
file_path: "reference/subdir/XXnn-kebab-name.md"  # required
---
```

---

### 2.6 Documentation File (`DOC`) — Required YAML

```yaml
---
doc_id: DOC-NN                               # required · sequential
doc_name: [Full Document Name]               # required
version: "1.0.0"                            # required
status: Active                               # required
audience:                                    # required · one or more
  - Project Manager
  - PMO Director
  - AI Agent
file_path: "docs/kebab-name.md"             # required
---
```

---

### 2.7 Shared Component File (`SHR`) — Required YAML

```yaml
---
shared_id: SHR-{subtype}-NN                  # required · e.g. SHR-VAL-01, SHR-CL-03
shared_name: [Full Component Name]           # required · title case
shared_type: Validator|Checklist|Component|Routing  # required
version: "1.0.0"                            # required
status: Active                               # required
applies_to:                                  # required · file type(s) this component is used for
  - SKL
  - ART-DEF
file_path: "shared/subdir/kebab-name.md"    # required
---
```

---

### 2.8 Test File (`TST`) — Required YAML

```yaml
---
test_id: ST-SKL-NN-NN                        # required · format: ST-[parent-skill-id]
test_type: SkillTest|IntegrationTest         # required
target: SKL-NN-NN                            # required · skill or flow under test
version: "1.0.0"                            # required
status: Active                               # required
test_case_count: 9                           # required · must match actual cases in file
file_path: "tests/skill-tests/ST-SKL-NN-NN.md"  # required
---
```

---

### 2.9 Root Governance File (`GOV`) — Required YAML

```yaml
---
gov_id: [FILENAME without extension]         # required · e.g. MASTER-PLAN
gov_name: [Full Document Name]               # required · title case
version: "N.N.N"                            # required · semver
status: Active                               # required
authority: PMBOK8 Primary                   # required
supersedes: [filename or "none"]            # required · traceability chain
file_path: "[FILENAME].md"                  # required
---
```

---

## 3. File Structure Standards

### 3.1 Skill File Structure (`SKL`)

Every full skill file must contain exactly these sections in this order. No section may be omitted. No section may be renamed.

```
[YAML front-matter]                    ← required · per §2.1

# SKL-NN-NN — [Skill Name]            ← H1 heading · exact format

**Skill ID:** SKL-NN-NN               ← metadata block (bold labels)
**Pack:** NN — Pack Name
**Status:** [status]
**Source type:** PMI-derived
**PMBOK8 anchor:** [section ref]
**File path:** `skills/...`

---

## Purpose                             ← §3.1.1 · 1–3 sentences · no bullet lists

## Scope                               ← §3.1.2 · what this skill covers AND does not cover

## Inputs Required                     ← §3.1.3 · table: Input | Source | Mandatory?
                                         + Gate check: what must exist before running

## Instructions                        ← §3.1.4 · H3 steps · numbered sub-steps
### Step 1 — [Name]
### Step 2 — [Name]
...

## Outputs                             ← §3.1.5 · table: Output | Artifact | Section | Notes

## Constraints                         ← §3.1.6 · bullet list of hard rules and limits

## Tailoring Guidance                  ← §3.1.7 · table: Approach | Adjustment
                                         Minimum 6 rows

## Failure Cases                       ← §3.1.8 · table: Failure | Symptom | Resolution
                                         Minimum 5 rows

## Tests                               ← §3.1.9 · table: Test ID | Description | Pass | Fail
                                         Minimum 9 test cases per skill

## Change Log                          ← §3.1.10 · table: Version | Date | Change description

---

*Authority: [PMBOK8 ref]*             ← footer block (4 italic lines)
*Source type: PMI-derived*
*Owner: [role]*
*Approval authority: [role]*
```

**Minimums enforced:**
- Test cases: ≥ 9 (matching `tests:` YAML field)
- Tailoring rows: ≥ 6 approaches
- Failure cases: ≥ 5 rows
- Instructions: ≥ 4 named steps

---

### 3.2 Artifact Definition File Structure (`ART-DEF`)

```
[YAML front-matter]                    ← required · per §2.2

# ANN — [Artifact Name]               ← H1 heading

**Artifact ID:** ANN                  ← metadata block (bold labels)
**Version:** 1.0.0
**Status:** Active
**Authority:** PMBOK8 Guide §X.X.X
**Process Group:** [name]

---

## Purpose
## When to Create
## Inputs                              ← table: Input | Source | Mandatory?
## Content Requirements                ← table: Field Name | Description | Format
## Outputs / Downstream Use
## Quality Criteria                    ← table: Criterion | Standard | Failure Indicator
                                         minimum 5 criteria
## Waste Test                          ← exactly 5 binary yes/no questions; all must be YES
## Related Artifacts                   ← table: Artifact ID | Name | Relationship
## Authority and Governance
## Change Log

---

*Authority: PMBOK8 Guide §X.X.X*
*Owner: [role]*
```

---

### 3.3 Artifact Template File Structure (`ART-TPL`)

```
[YAML front-matter]                    ← required · per §2.3

# ANN — [Artifact Name] — Template

> **Usage note:** [1–2 sentences]
> **Parent definition:** [link]
> **Version:** must match parent definition version

---

[Sections matching Content Requirements in parent ART-DEF]
Each field: **[FIELD: Field Name]** — [description]
OR table rows: | [FIELD: name] | [FIELD: desc] | [FIELD: format] |

---

*Template for: ANN — [Artifact Name]*
*Do not pre-fill. Remove this note when completing.*
```

---

### 3.4 Artifact Example File Structure (`ART-EX`)

```
[YAML front-matter]                    ← required · per §2.4

# ANN — [Artifact Name] — Example
## Scenario: Meridian CRM System Upgrade

> **Note:** Fictional data for illustration only.
> **Parent definition:** [link]
> **Parent template:** [link]

---

[Completed fields — all [FIELD: ...] replaced with Meridian data]

---

## Reviewer Notes

---

*Example for: ANN — [Artifact Name] · Scenario: Meridian CRM System Upgrade*
```

---

### 3.5 Reference File Structure (`REF`)

```
[YAML front-matter]                    ← required · per §2.5

# [Ref ID] — [Reference Name]

**Ref ID:** XXnn
**Type:** [ref_type]
**PMBOK8 Source:** §X.X.X
**Version:** 1.0.0

---

## Definition                          ← PMI definition, cited with section number
## Key Characteristics                 ← bullet list: 4–8 characteristics
## PMBOK 8 Context
## Inputs                              ← table (if applicable)
## Outputs                             ← table (if applicable)
## Tools and Techniques                ← table or list (if applicable)
## Cross-References                    ← table: Related Item | Type | Relationship (≥ 2 entries)
## Practitioner Notes                  ← 3–5 questions a practitioner should ask
## Change Log

---

*Authority: PMBOK8 Guide §X.X.X*
```

---

### 3.6 Documentation File Structure (`DOC`)

```
[YAML front-matter]                    ← required · per §2.6

# [Document Name]

**Version:** 1.0.0
**Audience:** [list]
**Status:** Active

---

## Purpose
## Audience
## Prerequisites
[Main content — H2/H3 as needed]
## Related Files                       ← table: File | Description | When to use
## Change Log
```

---

### 3.7 Test File Structure (`TST`)

```
[YAML front-matter]                    ← required · per §2.8

# ST-SKL-NN-NN — [Skill Name] — Test Cases

**Target skill:** SKL-NN-NN
**Test count:** 9
**Version:** 1.0.0

---

## Test Environment

## Test Cases

### TC-01 — [Name]
**Scenario:** [description]
**Input:** [what is provided]
**Expected output:** [what must result]
**Pass condition:** [measurable]
**Fail condition:** [measurable]
**Authority check:** [PMBOK8 ref]

[Repeat TC-02 through TC-09 minimum]

## Integration Notes
## Change Log
```

---

### 3.8 Shared Component File Structure (`SHR`)

```
[YAML front-matter]                    ← required · per §2.7

# [Component Name]

**Component ID:** SHR-{type}-NN
**Type:** Validator | Checklist | Component | Routing
**Applies to:** [file type(s)]
**Version:** 1.0.0
**Status:** Active

---

## Purpose
## Applies To
## Inputs
## Instructions / Logic                ← numbered steps or decision table
## Output / Result Format              ← must produce PASS | FAIL | WARN — not narrative only
## Failure Handling
## Examples                            ← at least one PASS and one FAIL example
## Change Log
```

---

### 3.9 Root Governance File Structure (`GOV`)

```
[YAML front-matter]                    ← required · per §2.9

# [Document Title]
**Version:** N.N.N
**Date:** YYYY-MM-DD
**Repository:** [URL]
**Authority:** [primary authority]
**Status:** Active
**Supersedes:** [filename or "none"]

> [One-line purpose statement]

---

[Document sections — H2/H3 as appropriate]

---

## Version History (or Change Log)    ← table: Version | Date | Changes

---
*Authority: [source]*
*Repository: [URL]*
*Last Updated: YYYY-MM-DD · Version N.N.N*
```

---

## 4. File Naming Conventions

### 4.1 Universal Rules

- All filenames use **lowercase kebab-case**: `kebab-case-words.md`
- **No spaces**, no underscores, no camelCase in filenames
- **Exceptions:** Root governance files use `UPPER-KEBAB.md` (e.g., `MASTER-PLAN.md`)
- All content files use `.md` extension
- Machine-readable manifests use `.json` or `.yaml`
- Data files use `.csv`
- Maximum filename length: **80 characters** (including extension)

### 4.2 Skill Files

**Pattern:** `SKL-{pack_num}-{seq_num}-{kebab-name}.md`

```
SKL-01-01-establish-pm-governance-framework.md    ✅
SKL-03-07-develop-risk-register.md               ✅
skl-01-01.md                                      ❌ missing name
SKL_01_01_governance.md                          ❌ underscores
SKL-1-1-governance.md                            ❌ missing leading zeros
```

- Pack number: 2-digit zero-padded (`01`–`09`)
- Sequence number: 2-digit zero-padded (`01`–`17`)
- Name: full descriptive kebab slug — minimum 3 words

### 4.3 Artifact Files

**Definition:** `A{nn}-{kebab-name}.md`
**Template:** `A{nn}-{kebab-name}-template.md`
**Example:** `A{nn}-{kebab-name}-example.md`

Every artifact **must** have all three files to be fully complete. Partial delivery is acceptable during build phases but must be flagged in the MASTER-PLAN scorecard.

**Legacy non-conformances (fixed in Phase 7):**
- `A14-integrated-project-management-plan.md` (resolved)
- `A15-schedule-model-and-baseline-record.md` (resolved)
- `A16-financial-management-and-cost-baseline-record.md` (resolved)

### 4.4 Reference Files

| Subdir | ID Pattern | Example |
|---|---|---|
| `principles/` | `P{nn}-{kebab}.md` | `P01-be-a-diligent-steward.md` |
| `performance-domains/` | `PD{nn}-{kebab}.md` | `PD01-governance.md` |
| `focus-areas/` | `FA{nn}-{kebab}.md` | `FA01-project-integration.md` |
| `processes/` | `PR{nn}-{kebab}.md` | `PR11-develop-project-charter.md` |
| `tools-techniques/` | `TT{nn}-{kebab}.md` | `TT01-expert-judgment.md` |
| `inputs-outputs/` | `IO{nn}-{kebab}.md` | `IO01-inputs-outputs-registry.md` |
| `appendices/` | `X{n}-{kebab}.md` | `X2-pmo.md` |

### 4.5 Test Files

**Skill test:** `ST-SKL-{pack}-{seq}.md` → `ST-SKL-01-01.md`
**Integration test:** `IT-{nn}.md` → `IT-01.md`

### 4.6 Prohibited Filename Patterns

| Pattern | Example | Failure Level | Reason |
|---|---|---|---|
| Contains spaces | `my skill.md` | L1 | Breaks tooling and links |
| Uses underscores | `SKL_01_01.md` | L2 | Not kebab-case |
| Mixed case (non-root) | `ProjectCharter.md` | L2 | Not kebab-case |
| No ID prefix (skills) | `governance-framework.md` in `skills/` | L1 | Not traceable |
| No ID prefix (artifacts) | `project-plan.md` in `artifacts/` | L1 | Not traceable |
| Generic names | `template.md`, `test.md` | L2 | Not descriptive |
| Version in filename | `SKL-01-01-v2.md` | L2 | Version belongs in YAML only |

### 4.7 Root Governance Files

Root-level files use `SCREAMING-KEBAB.md`:

```
MASTER-PLAN.md          ✅
SKILL-REGISTRY.md       ✅
AUTHORITY-ROUTING.md    ✅
QUALITY-STANDARDS.md    ✅
COMPLETION-PLAN-V4.md   ✅
CHANGELOG.md            ✅
README.md               ✅
```

---

## 5. Directory Structure Rules

### 5.1 Canonical Directory Tree

The following is the **only** permitted directory structure. No directory may be created outside this tree without a governance decision recorded in CHANGELOG.md and MASTER-PLAN.md.

```
PMOSkills/
│
├── [Root governance files — UPPER-KEBAB.md]
│
├── .github/
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── SECURITY.md
│   └── [PR/issue templates]
│
├── Archive/                         ← archived creation files and legacy drafts
│   ├── COMPLETION-PLAN.md
│   ├── legacy/
│   └── meta/
│
├── docs/
│   ├── img/
│   ├── user-friendly-guide.md       ← Master Onboarding Handbook (Multi-Audience Hub)
│   ├── human-practitioners/         ← Track 1: PM handbook, authority routing, and PMO guides
│   ├── ai-agents/                   ← Track 2: Onboarding guides & prompt specs
│   ├── developer-tools/             ← Track 3: Tooling, automation, and validators
│   └── general/                     ← Track 4: Glossary, FAQ, and sustainability guides
│
├── artifacts/
│   ├── closing/
│   ├── initiating/
│   ├── monitoring-and-decisions/
│   ├── planning-and-baselines/
│   ├── procurement/
│   ├── resources/
│   └── [other approved subdirs]
│
├── skills/
│   ├── 01-organizational-setup/
│   ├── 02-initiating/
│   ├── 03-planning/
│   ├── 04-executing/
│   ├── 05-monitoring-controlling/
│   ├── 06-closing/
│   └── 07-adaptive-hybrid/
│
├── reference/
│   ├── README.md
│   ├── GLOSSARY.md                          ← Phase 4-C9
│   ├── principles/                          ← ✅ complete
│   ├── performance-domains/                 ← ✅ complete
│   ├── focus-areas/                         ← ✅ complete
│   ├── processes/                           ← ✅ complete (PR01–PR41)
│   ├── tools-techniques/                    ← ✅ complete (registry format)
│   ├── inputs-outputs/                      ← ✅ complete (registry format)
│   ├── companion-references/                ← ✅ complete (Phase 4-C10)
│   ├── tailoring/                           ← ✅ complete (Phase 4-C11)
│   ├── pmo/                                 ← ✅ complete (Phase 4-C12)
│   └── appendices/                          ← ✅ complete (Phase 4-C8)
│
├── shared/
│   ├── README.md
│   ├── validators/
│   ├── checklists/
│   ├── components/
│   └── routing/
│
└── tests/
    ├── README.md
    ├── pmbok8-compliance-test-plan.md      ← Phase 8 compliance testing framework
    ├── skill-tests/
    └── integration-tests/
```

### 5.2 Directory Rules

1. **No files at root level** except the canonical root governance files in §4.7.
2. **No new top-level directories** without a governance decision. `C4-Process-Records/`, `C5-KA-Crossref/`, `C6-TT-Taxonomy/`, `C7-IO-Registry/`, and `repo/` are current structural violations (NC-004) awaiting Phase 0 cleanup.
3. **Every directory with 3+ files must have an `index.md`** listing all files, status, and purpose.
4. **No file may exist in a parent directory** if it belongs in a subdirectory.
5. **Directory names use lowercase kebab-case** with numeric prefix for ordered packs.
6. **`docs/legacy/`** is the only permitted archive location for superseded files.

### 5.3 Index File Requirements

Every directory with 3+ content files must contain `index.md`:

```markdown
# [Directory Name] — Index
**Directory:** `path/to/dir/`
**Status:** Active | In Progress | Pending
**File count:** N
**Last updated:** YYYY-MM-DD

| File | ID | Name | Status | Phase |
|---|---|---|---|---|
| filename.md | ID | Name | Draft/Active | Phase N |
```

### 5.4 New Directory Creation Governance Protocol

Before creating any directory not listed in §5.1:

1. Check §5.1 — confirm the directory does not already exist under another name.
2. Log intent in MASTER-PLAN.md under a new task entry.
3. Log decision in CHANGELOG.md with `chore(root):` commit.
4. Update §5.1 in this file in the same commit.
5. Update relevant parent README if inside `reference/`.

Failure to follow this protocol = L2 non-conformance (NC entry required in §8.3).

---

## 6. Source Traceability Rules

### 6.1 Citation Format

Every substantive claim in every file must be traceable to a source. Use this format inline or in a footer:

```
*Authority: [Source] — [Section/Chapter/Page]*
```

| Source Type | Citation Format | Example |
|---|---|---|
| PMBOK8 Guide | `PMBOK8 Guide §X.X.X` | `PMBOK8 Guide §4.1.3` |
| PMBOK8 Standard | `PMBOK8 Standard — [Principle Name]` | `PMBOK8 Standard — Principle 3` |
| PMI Companion ref | `[Shortcode] §X.X` or `[Shortcode] p.NN` | `PSS-3E §4.2`, `WBS-3E p.45` |
| PMI Lexicon | `PMI Lexicon — [Term]` | `PMI Lexicon — Risk` |
| Synthesis / derived | `Synthesis: [PMBOK8 §X] + [Shortcode §Y]` | `Synthesis: PMBOK8 §4.1 + PSS-3E §3.2` |
| Org-defined | `Org-defined — see AUTHORITY-ROUTING.md §N` | `Org-defined — see AUTHORITY-ROUTING.md §3` |

### 6.2 Citation Prohibition Rules

The following citation forms are **never permitted**:

| Prohibited Form | Reason | Correct Alternative |
|---|---|---|
| `PMBOK8` with no section number | Untraceable | Add `§X.X.X` |
| `PMI says...` | Paraphrase without reference | Cite specific document and section |
| `Best practice` with no source | Unverifiable | Identify source or label as `Org-defined` |
| Verbatim PMI text without quotation marks | Copyright violation | Paraphrase and cite |
| Verbatim PMI text > 30 words (even quoted) | Copyright violation | Summarise and cite |

### 6.3 Required Authority Footer

Every content file (SKL, ART-DEF, ART-TPL, ART-EX, REF) must end with an authority footer block. Minimum required fields:

```
---
*Authority: [primary PMBOK8 ref]*
*Source type: PMI-derived | PMI-adapted | Org-defined*
*Owner: [responsible role]*
*Approval authority: [approval role]*
```

### 6.4 Companion Reference Shortcodes

| Shortcode | Full Title |
|---|---|
| `PSS-3E` | Practice Standard for Scheduling, 3rd Edition |
| `WBS-3E` | Practice Standard for Work Breakdown Structures, 3rd Edition |
| `PMO-PG` | Project Management Office — A Practice Guide |
| `PGPG` | Process Groups: A Practice Guide |
| `EVM-PG` | Practice Standard for Earned Value Management |
| `RISK-PG` | Risk Management in Portfolios, Programs, and Projects |
| `BA-PG` | PMI Guide to Business Analysis |
| `CHANGE-PG` | Managing Change in Organizations: A Practice Guide |
| `COMPLEX-PG` | Navigating Complexity: A Practice Guide |
| `PROG-5E` | Standard for Program Management, Fifth Edition |
| `PORT-4E` | Standard for Portfolio Management, 4th Edition |
| `OPM-PG` | Implementing Organizational Project Management: A Practice Guide |
| `DAD-2E` | Introduction to Disciplined Agile Delivery, 2nd Edition |
| `AI-PG` | Guide to Leading and Managing AI Projects |
| `AI-LEAD` | Leading AI Transformation |
| `REQ-PG` | Requirements Management: A Practice Guide |
| `GOV-PG` | Governance of Portfolios, Programs and Projects |
| `FORMS` | Project Manager's Book of Forms |
| `LEXICON` | PMI Lexicon of Project Management Terms |
| `OPM-STD` | The Standard for Organizational Project Management |

---

## 7. Quality Gate Checklists

A quality gate is a mandatory pass/fail check that must be completed before a phase is closed or a file is committed. Every gate has a **level** (file-level, phase-level, or repo-level) and a **blocking rule** (L1 = hard block, L2 = warn + log, L3 = advisory).

### 7.1 Universal File-Level Gate (applies to every file, every commit)

Run this checklist on every file before committing. All items must pass.

| # | Check | Pass Condition | Failure Level |
|---|---|---|---|
| U-01 | YAML front-matter present | File begins with `---` block | L1 |
| U-02 | All required YAML fields present | No `required` field is absent or blank | L1 |
| U-03 | `version` field is valid semver | Format `N.N.N` | L1 |
| U-04 | `file_path` matches actual path | YAML `file_path` equals the file's real location | L1 |
| U-05 | `status` uses canonical vocabulary | From §2.1 status list | L2 |
| U-06 | H1 heading format correct | Matches type pattern (e.g. `# SKL-NN-NN — Name`) | L2 |
| U-07 | Authority footer present | Footer block exists per §6.3 | L1 |
| U-08 | All PMI citations include section number | No bare `PMBOK8` references | L1 |
| U-09 | No verbatim PMI text > 30 words | Content is paraphrased and cited | L1 |
| U-10 | All cross-referenced IDs resolve | Every ANN, SKL-NN-NN, PR-NN in the file points to an existing file | L1 |
| U-11 | File is in correct canonical path | Path matches §5.1 tree | L1 |
| U-12 | Filename matches type convention | Per §4.2–§4.7 | L2 |
| U-13 | No `[FIELD: ...]` placeholders in non-template files | Templates exempt; all others must have placeholders replaced | L1 |
| U-14 | `[FIELD: ...]` placeholders in template files are NOT pre-filled | Templates must not contain actual data | L1 |
| U-15 | Change Log section present and updated | Version and date match YAML | L2 |

### 7.2 Skill File Gate (`SKL`)

Run after the universal gate. All items must pass before committing a skill file.

| # | Check | Pass Condition | Failure Level |
|---|---|---|---|
| S-01 | All 10 required sections present | §3.1 sections 1–10 all exist | L1 |
| S-02 | Section headings match exactly | No renamed or merged sections | L2 |
| S-03 | `tests:` YAML count matches actual test rows | Integer in YAML equals table rows in `## Tests` | L1 |
| S-04 | Minimum 9 test cases | `tests:` ≥ 9 | L1 |
| S-05 | Minimum 6 tailoring rows | `## Tailoring Guidance` table ≥ 6 rows | L2 |
| S-06 | Minimum 5 failure cases | `## Failure Cases` table ≥ 5 rows | L2 |
| S-07 | Minimum 4 instruction steps | `## Instructions` has ≥ 4 H3 `### Step N` headings | L2 |
| S-08 | `primary_artifact_output` resolves | Named artifact file exists in `artifacts/` | L1 |
| S-09 | All `artifacts_updated` IDs resolve | Each listed ANN file exists | L1 |
| S-10 | `upstream_prerequisites` stated | At least one entry in YAML list | L2 |
| S-11 | Gate check present in `## Inputs Required` | "Gate check:" line present | L2 |
| S-12 | Metadata block present after H1 | Bold label block: Skill ID, Pack, Status, Source type, PMBOK8 anchor, File path | L2 |

### 7.3 Artifact File Gate (`ART-DEF`, `ART-TPL`, `ART-EX`)

| # | Check | Pass Condition | Failure Level |
|---|---|---|---|
| A-01 | Triplet complete | All three files exist: DEF + TPL + EX | L2 (flag in scorecard) |
| A-02 | Template version matches definition version | `version:` in TPL equals `version:` in DEF | L1 |
| A-03 | Example version matches definition version | `version:` in EX equals `version:` in DEF | L1 |
| A-04 | Example uses Meridian scenario | `scenario: "Meridian CRM System Upgrade"` in EX YAML | L1 |
| A-05 | Waste test has exactly 5 questions | DEF `## Waste Test` contains exactly 5 yes/no questions | L2 |
| A-06 | Quality criteria ≥ 5 rows | DEF `## Quality Criteria` table ≥ 5 rows | L2 |
| A-07 | Template placeholders intact | No `[FIELD: ...]` pre-filled in TPL | L1 |
| A-08 | Example has no remaining `[FIELD: ...]` | All placeholders replaced in EX | L1 |
| A-09 | `## Reviewer Notes` present in EX | Section exists with at least 2 sentences | L2 |
| A-10 | `produced_by_skills` IDs resolve | Each SKL-NN-NN listed exists in `skills/` | L1 |

### 7.4 Reference File Gate (`REF`)

| # | Check | Pass Condition | Failure Level |
|---|---|---|---|
| R-01 | `pmbok8_source` includes section number | Not just `PMBOK8 Guide` — must include `§X.X.X` | L1 |
| R-02 | `## Definition` uses PMI definition | Cited with section number; not paraphrased without citation | L1 |
| R-03 | Key characteristics 4–8 bullets | `## Key Characteristics` has 4–8 bullet points | L2 |
| R-04 | Cross-references ≥ 2 entries | `## Cross-References` table has ≥ 2 rows | L2 |
| R-05 | Practitioner notes 3–5 questions | `## Practitioner Notes` has 3–5 questions | L2 |

### 7.5 Phase-Level Quality Gates

Each plan phase must pass its gate before the phase is marked complete in MASTER-PLAN.md.

#### Phase 0 — Structure Cleanup Gate

| # | Check | Pass Condition |
|---|---|---|
| P0-01 | No `C4-Process-Records/`, `C5-KA-Crossref/`, `C6-TT-Taxonomy/`, `C7-IO-Registry/` at root | All deleted or migrated |
| P0-02 | No `repo/` directory at root | Deleted or migrated |
| P0-03 | No legacy dirs inside `reference/` | `reference/C4-*`, `C5-*`, `C6-*`, `C7-*` removed |
| P0-04 | `reference/README.md` updated | Reflects clean post-migration structure |
| P0-05 | CHANGELOG.md updated with Phase 0 entries | Every delete/migrate action logged |

#### Phase 3 — Skills Gate (per skill)

| # | Check | Pass Condition |
|---|---|---|
| P3-01 | All 47 skill files exist at canonical paths | `skills/NN-*/SKL-NN-NN-*.md` |
| P3-02 | Every skill passes §7.2 skill file gate | 0 L1 failures; all L2 logged |
| P3-03 | Every artifact referenced in skills exists | No broken ANN cross-references |
| P3-04 | SKILL-REGISTRY.md updated | All 47 skills listed with correct status |

#### Phase 4 — Reference Layer Gate

| # | Check | Pass Condition |
|---|---|---|
| P4-01 | PR01–PR10 rebuilt | 10 process record files exist at `reference/processes/PR0N-*.md` |
| P4-02 | T&T registry exists | `reference/tools-techniques/tools-techniques-registry.md` |
| P4-03 | I/O registry exists | `reference/inputs-outputs/inputs-outputs-registry.md` |
| P4-04 | 4 appendices exist | `reference/appendices/X2-pmo.md` through `X5-evolution.md` |
| P4-05 | GLOSSARY exists | `reference/GLOSSARY.md` |
| P4-06 | Every reference file passes §7.4 gate | 0 L1 failures |

#### Phase 5 — Shared Components Gate

| # | Check | Pass Condition |
|---|---|---|
| P5-01 | All 11 shared files exist at canonical paths | Per COMPLETION-PLAN-V4.md §4 Phase 5 list |
| P5-02 | Every validator produces binary output | PASS/FAIL/WARN — not narrative only |
| P5-03 | Every file passes §7.1 universal gate | 0 L1 failures |

#### Phase 6 — Test Suite Gate

| # | Check | Pass Condition |
|---|---|---|
| P6-01 | 47 skill test files exist | `tests/skill-tests/ST-SKL-NN-NN.md` for each skill |
| P6-02 | 6 integration test files exist | `tests/integration-tests/IT-01.md` through `IT-06.md` |
| P6-03 | Every skill test has ≥ 9 test cases | `test_case_count:` ≥ 9 in YAML |
| P6-04 | Every test case has all 6 fields | Scenario, Input, Expected output, Pass, Fail, Authority check |
| P6-05 | Integration tests trace end-to-end | Each IT file shows artifact flow across at least 2 lifecycle phases |

#### Phase 7 — Quality Audit Gate (continuous)

Runs after every phase. No phase is fully closed until Phase 7 passes for all files produced in that phase.

| # | Check | Pass Condition |
|---|---|---|
| Q-01 | Universal gate (§7.1) passes for all new files | 0 L1 failures |
| Q-02 | No legacy NC items introduced | No new files with prohibited naming patterns |
| Q-03 | NC register in §8.3 is current | Every known NC logged with owner and resolution target |
| Q-04 | MASTER-PLAN.md updated | Session log entry, version bump, completion metrics updated |
| Q-05 | CHANGELOG.md updated | Every committed file has a corresponding CHANGELOG entry |
| Q-06 | Commit messages follow §2.6 convention | `type(scope): description` with body, files, and phase |

---

## 8. Enforcement and Failure Protocol

### 8.1 Failure Severity Levels

| Level | Code | Name | Effect | Resolution |
|---|---|---|---|---|
| Critical | **L1** | Hard Block | File must not be committed. Work stops until resolved. | Fix immediately; re-run full gate before commit. |
| Warning | **L2** | Log and Continue | File may be committed with NC entry logged. | Log NC in §8.3; resolve within same phase. |
| Advisory | **L3** | Note Only | No commit block. Record in session notes. | Address in Phase 7 quality audit. |

### 8.2 Failure Response Protocol

**On L1 failure:**
1. Stop. Do not commit the file.
2. Identify the specific check that failed (U-NN, S-NN, A-NN, R-NN, or P-NN).
3. Fix the failure in the file.
4. Re-run the full gate checklist from the beginning.
5. Only commit when all L1 checks pass.

**On L2 failure:**
1. Log the NC in §8.3 with: NC-ID, file path, check code, date, owner, resolution target phase.
2. Commit the file with a note in the commit body: `L2-NC: [NC-ID] logged.`
3. Do not close the phase until all L2 NCs for that phase are resolved.

**On L3 failure:**
1. Record in session notes in MASTER-PLAN.md.
2. No commit action required.
3. Address during Phase 7 quality audit.

### 8.3 Non-Conformance Register

All known NCs for this repository. Update this table whenever a new NC is logged or resolved.

| NC-ID | File | Check | Description | Date Logged | Owner | Target Phase | Status |
|---|---|---|---|---|---|---|---|
| NC-001 | `artifacts/planning-and-baselines/A14-integrated-project-management-plan.md` | §4.3 | Mixed-case filename | 2026-06-01 | PMO | Phase 7 | Resolved |
| NC-002 | `artifacts/planning-and-baselines/A15-schedule-model-and-baseline-record.md` | §4.3 | Mixed-case filename | 2026-06-01 | PMO | Phase 7 | Resolved |
| NC-003 | `artifacts/planning-and-baselines/A16-financial-management-and-cost-baseline-record.md` | §4.3 | Mixed-case filename | 2026-06-01 | PMO | Phase 7 | Resolved |
| NC-004 | Root: `C4-Process-Records/`, `C5-KA-Crossref/`, `C6-TT-Taxonomy/`, `C7-IO-Registry/`, `repo/` | §5.2 | Stale directories at root — structural violation | 2026-06-01 | PMO | Phase 0 | Resolved |
| NC-005 | `COMPLETION-PLAN-V4.md §2` | §1 (single authority) | Duplicate quality rules — conflicts with this file | 2026-06-01 | PMO | Step 4 | Resolved |
| NC-006 | `MASTER-PLAN.md §2` (if present) | §1 (single authority) | Duplicate quality rules — conflicts with this file | 2026-06-01 | PMO | Step 3 | Resolved |

### 8.4 Quality Failure Examples

**L1 Example — Missing section:**
```
File: skills/03-planning/SKL-03-01-define-scope.md
Check: S-01 — All 10 required sections present
Finding: ## Tailoring Guidance section is absent
Action: DO NOT COMMIT. Add section. Re-run gate.
```

**L2 Example — NC filename:**
```
File: artifacts/planning-and-baselines/A14-Integrated-Project-Management-Plan.md
Check: §4.3 — Artifact filename must be lowercase kebab-case
Finding: Mixed-case filename (legacy file)
Action: Log NC-001. Commit permitted. Fix in Phase 7.
```

**L1 Example — Unresolved cross-reference:**
```
File: skills/02-initiating/SKL-02-01-initiate-project.md
Check: U-10 — All cross-referenced IDs resolve
Finding: artifacts_updated lists "A99 — Nonexistent Artifact"
Action: DO NOT COMMIT. Remove or correct the reference.
```

---

## 9. AI Agent Pre-Commit Checklist

Run this checklist **before every `git commit`**. It is a compressed version of the full gate system. Every item must be checked. Items marked 🔴 are L1 — a single failure stops the commit.

```
PRE-COMMIT CHECKLIST — PMOSkills Repository
============================================
File being committed: ___________________
File type (from §1): ___________________
Date: ___________________

YAML FRONT-MATTER
🔴 [ ] U-01  File begins with --- YAML block
🔴 [ ] U-02  All required fields present (no blanks)
🔴 [ ] U-03  version: is valid semver (N.N.N)
🔴 [ ] U-04  file_path: matches actual file location

CONTENT STRUCTURE
🔴 [ ] U-07  Authority footer present (§6.3)
🔴 [ ] U-08  All PMI citations include §X.X.X
🔴 [ ] U-09  No verbatim PMI text > 30 words
🔴 [ ] U-10  All ANN / SKL-NN-NN / PR-NN references resolve to existing files
🔴 [ ] U-11  File is in the correct canonical directory (§5.1)
🔴 [ ] U-13  No [FIELD: ...] placeholders in non-template files
🔴 [ ] U-14  Template [FIELD: ...] placeholders are NOT pre-filled with data

FILE-TYPE-SPECIFIC
🔴 [ ] S-01  (SKL) All 10 required sections present
🔴 [ ] S-03  (SKL) tests: YAML count equals actual test row count
🔴 [ ] S-08  (SKL) primary_artifact_output file exists
🔴 [ ] A-04  (ART-EX) scenario: is "Meridian CRM System Upgrade"
🔴 [ ] A-07  (ART-TPL) No [FIELD: ...] pre-filled
🔴 [ ] A-10  (ART-DEF) produced_by_skills IDs resolve
🔴 [ ] R-01  (REF) pmbok8_source includes §X.X.X

WARNINGS (L2 — log NC if failing)
🟡 [ ] U-05  status uses canonical vocabulary
🟡 [ ] U-12  Filename matches §4 naming convention
🟡 [ ] U-15  Change Log updated with correct version and date
🟡 [ ] S-04  (SKL) tests: ≥ 9
🟡 [ ] S-05  (SKL) Tailoring Guidance ≥ 6 rows
🟡 [ ] S-06  (SKL) Failure Cases ≥ 5 rows
🟡 [ ] A-01  (ART) Triplet DEF + TPL + EX all exist

COMMIT MESSAGE
🔴 [ ] Follows format: type(scope): short description
🔴 [ ] Body includes: what changed and why
🔴 [ ] Body includes: Files: [list]
🔴 [ ] Body includes: Phase: [phase name/number]

POST-COMMIT
🟡 [ ] MASTER-PLAN.md session log updated (end of session)
🟡 [ ] CHANGELOG.md entry added (end of session)
============================================
RESULT: [ ] ALL L1 PASS → COMMIT PERMITTED
         [ ] ANY L1 FAIL → STOP. FIX. RE-RUN.
```

### 9.1 AI Agent Operating Rules (Non-Negotiable)

These rules apply to every AI agent session in this repository. No exception without a governance decision logged in CHANGELOG.md.

1. **Never modify a canonical artifact definition file without bumping its version.**
2. **Never create a skill file that references an artifact that does not yet exist.** Create the artifact first.
3. **Always check MASTER-PLAN.md before starting a session** to avoid duplicating completed work.
4. **Always commit after each file** — not in large batches — to maintain traceability.
5. **Never cite PMBOK 8 without a section number.**
6. **Apply the waste test to every artifact before committing it.**
7. **When in doubt about scope, authority, or terminology, defer to PMBOK8 as primary source.**
8. **Update MASTER-PLAN.md and CHANGELOG.md at the end of every session — no exceptions.**
9. **The pre-commit checklist (§9) applies to every file, every session — no skipping.**
10. **Never create a directory not listed in §5.1 without following the governance protocol in §5.4.**
11. **All quality standards are enforced from this file (QUALITY-STANDARDS.md). Do not create parallel quality rules in other files.**
12. **Any conflict between this file and another governance file is resolved in favour of this file**, unless the user explicitly states otherwise in the session.

---

## 10. Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-06-01 | Initial creation — §1 File Type Registry, §2 YAML schemas (§2.1–§2.8), §3 File Structure Standards (§3.1–§3.8), §4 Naming Conventions, §5 Directory Structure |
| 1.1.0 | 2026-06-01 | Added §2.9 Root Governance YAML, §3.9 GOV structure, §3.8 SHR structure, §4.8 Prohibited patterns, §5.4 Directory creation governance protocol. Added NC-001–NC-004. |
| 2.0.0 | 2026-06-01 | **Completed all sections.** Added §6 Source Traceability (§6.1–§6.4 with companion ref shortcodes), §7 Quality Gate Checklists (§7.1–§7.5 universal + per-file-type + per-phase gates), §8 Enforcement and Failure Protocol (L1/L2/L3 severity, NC register with NC-001–NC-006, failure examples), §9 AI Agent Pre-Commit Checklist (compressed gate + operating rules), §10 Version History. Designated as single authority — MASTER-PLAN.md and COMPLETION-PLAN-V4.md must reference this file, not define quality rules independently. |

---

*Authority: PMBOK8 Standard §3 Principles · PMBOK8 Guide §8 Project Quality Management*
*Source type: PMI-derived + Org-defined*
*Owner: PMO / Repository Governance Authority*
*Approval authority: Repository owner*
*Repository: https://github.com/fakhruldeen/PMOSkills*
*Last Updated: 2026-06-01 · Version 2.0.0*
