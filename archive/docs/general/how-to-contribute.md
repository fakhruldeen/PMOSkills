---
file: how-to-contribute.md
version: "1.0.0"
status: Active
last_updated: "2026-05-31"
owner: Repository Maintainer
approval_authority: Repository Maintainer
---

# How to Contribute

**Version:** 1.0.0  
**Status:** Active  
**File Path:** `docs/general/how-to-contribute.md`  
**Authority:** PMBOK8 Primary · PMI Companion References Secondary

---

## Purpose

This guide is the docs-layer companion to [`CONTRIBUTING.md`](../CONTRIBUTING.md) at the repository root. It provides more context, structured workflows, and explanations for contributors who are new to this repository or to PMI-grounded content authoring. Read this document first, then consult `CONTRIBUTING.md` for the concise, rule-set version. This document complements `CONTRIBUTING.md` — it does not replace it.

---

## Audience

- New contributors unfamiliar with the repository structure or PMI authority model
- Project management practitioners who want to add artifacts, skills, or reference content
- Developers building skills, validators, or shared components
- AI practitioners integrating repository content into agents or MCP tools
- Reviewers assessing PRs for standards compliance

---

## Prerequisites

Before contributing:

1. Read [`CONTRIBUTING.md`](../CONTRIBUTING.md) for the authoritative rule set.
2. Read [`source-authority.md`](../source-authority.md) to understand the three-tier authority hierarchy.
3. Read [`AUTHORITY-ROUTING.md`](../AUTHORITY-ROUTING.md) to understand decision and governance routing.
4. Read [`SKILL-REGISTRY.md`](../SKILL-REGISTRY.md) to understand the current state of skills and avoid duplication.
5. Read [`README.md`](../README.md) for repository structure and folder organization.
6. Review the relevant schema README in the target folder (`artifacts/`, `skills/`, `reference/`, `shared/`, `tests/`) before authoring new content.

---

## What Can You Contribute?

| Contribution type | Description | Issue template to use |
|------------------|-------------|----------------------|
| Bug fix | Factual error, broken link, incorrect PMBOK reference, schema inconsistency, or terminology mismatch | `bug_report.md` |
| Content addition | New artifact definition, skill file, reference file, checklist, or validator | `content_addition.md` |
| Structure improvement | Folder organization, naming consistency, index updates, cross-reference corrections | `improvement.md` |
| Test cases | Skill test cases following the schema defined in `tests/README.md` | `content_addition.md` |
| Reference layer | Principle (`P##`), domain (`PD##`), process, or I/O files under `reference/` | `content_addition.md` |
| Shared components | Validators, routing logic, reusable checklists under `shared/` | `content_addition.md` or `improvement.md` |

---

## The Authority Rule

All contributions must be grounded in PMBOK 8 or PMI companion references listed in `pmi_reference_list.md`. Non-PMI content — including organization-specific methods, synthesised interpretations, or content derived from non-PMI sources — must be explicitly labeled in the file's YAML front matter using `source_type: synthesis` or `source_type: organization-defined`. These labels signal to readers, reviewers, and AI agents that the content is not directly PMI-authoritative. Never introduce content that contradicts PMBOK 8 without this explicit labeling; unlabeled content is assumed to be PMBOK 8 compliant, and undisclosed contradictions undermine the repository's authority model.

---

## Step-by-Step Contribution Workflow

### Step 1 — Open a GitHub Issue using the correct template

For anything beyond a minor typo fix, open a GitHub Issue before starting work. Select the issue template that matches your contribution type:

- `bug_report.md` — for factual errors, broken references, or schema inconsistencies
- `content_addition.md` — for new content: artifacts, skills, reference files, test cases
- `improvement.md` — for structural, naming, or organization improvements

Opening an issue first allows maintainers to confirm scope, avoid duplication, and align the contribution with current priorities before you invest time in authoring.

### Step 2 — Fork the repository

Fork `fakhruldeen/PMOSkills` to your own GitHub account. Do not push directly to the main repository. Work from your fork.

### Step 3 — Create a branch following the naming convention

Use one of the following branch prefixes:

```
fix/      — bug fixes and factual corrections
feat/     — new content or capabilities
docs/     — documentation improvements (including files in docs/)
test/     — test case additions or updates
refactor/ — structural changes without content change
```

Example: `git checkout -b feat/A42-vendor-evaluation-record`

### Step 4 — Make your changes

Apply the following standards as you author or edit files:

- **File naming:** follow the naming conventions in the table below.
- **PMBOK citations:** cite the specific section (e.g., `PMBOK8 Guide §2.3.2.1`) or companion reference. Do not cite PMBOK without a section number.
- **YAML front matter:** every artifact and skill file must include the standard YAML block: `file`, `version`, `status`, `last_updated`, `owner`, and `approval_authority`.
- **Non-PMI content:** label as `source_type: synthesis` or `source_type: organization-defined` in the YAML front matter.
- **Terminology:** use PMBOK 8 terms as defined in the PMI Lexicon. Do not substitute synonyms for defined terms.

### Step 5 — Run the quality checklist

Before submitting, complete all items in the **Required Content Checklist** in this document (see below). This mirrors the quality standards in `CONTRIBUTING.md` §Content Quality Standards. Do not submit a PR with unchecked items.

### Step 6 — Submit a PR using the PR template

Open a pull request from your branch to `main`. Use the repository's PR template. In the PR description:

- Reference the related GitHub Issue number (e.g., `Closes #42`)
- Confirm all checklist items are complete
- Note any design decisions, authority interpretations, or tradeoffs made during authoring

Keep PRs focused — one logical change per PR. Do not bundle unrelated changes.

### Step 7 — Address review comments

Respond to reviewer comments promptly. If a reviewer flags an authority concern (e.g., a PMBOK citation is incorrect or content contradicts a standard), resolve it by correcting the content or adding explicit labeling. Do not argue against the authority model — if you believe a divergence is justified, label it explicitly and explain the rationale in the PR thread.

### Step 8 — Merge on approval

Merge is performed by a maintainer after all required reviewers have approved and all checklist items are confirmed. Squash or merge commits per the project's merge policy. Delete your branch after merge.

---

## File Naming Conventions

| File type | Naming pattern | Example |
|-----------|---------------|---------|
| Artifact definition | `A##-kebab-name.md` | `A12-integrated-change-decision-record.md` |
| Artifact template | `A##-kebab-name-template.md` | `A12-integrated-change-decision-record-template.md` |
| Skill file | `SKL-PP-NN-kebab-name.md` | `SKL-03-06-risk-response-planning.md` |
| Reference principle | `P##-name.md` | `P04-value.md` |
| Reference domain | `PD##-name.md` | `PD02-stakeholder.md` |
| Docs file | `descriptive-kebab-name.md` | `how-to-use-authority-routing.md` |

All filenames must be lowercase kebab-case. No spaces, no underscores (except where the schema explicitly requires them), no version suffixes in filenames (use the YAML `version` field instead).

---

## Required Content Checklist (before submitting a PR)

- [ ] Cites the specific PMBOK 8 section (e.g., `§2.3.2.1`) or named PMI companion reference for every substantive claim
- [ ] Uses consistent terminology matching the PMBOK 8 Lexicon throughout the file
- [ ] Follows the artifact or skill schema defined in the relevant folder README
- [ ] Does not duplicate content already present in another file — cross-references instead
- [ ] Includes a `Last Updated` and `Patch` label at the bottom of the file (or in YAML front matter)
- [ ] Passes a basic consistency check against `SKILL-REGISTRY.md` if adding or modifying a skill
- [ ] All non-PMI content is labeled `source_type: synthesis` or `source_type: organization-defined` in YAML front matter
- [ ] File follows the naming convention for its file type (see table above)
- [ ] YAML front matter is present and complete: `file`, `version`, `status`, `last_updated`, `owner`, `approval_authority`
- [ ] PR references the related GitHub Issue number

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
<type>(scope): short description

[optional body]
[optional footer]
```

**Types:** `feat` · `fix` · `docs` · `chore` · `refactor` · `test`

**Examples:**
```
feat(artifacts): add A09 quality management plan definition
fix(skills): correct PMBOK8 section reference in SKL-03-06
docs(reference): add P04-value principle file
```

---

## What Will Be Rejected

- **Content not grounded in PMI sources** — any substantive claim that cannot be traced to PMBOK 8 or a named PMI companion reference, unless explicitly labeled `source_type: synthesis` or `source_type: organization-defined`.
- **Duplicate files or content** — content already covered in another file must be cross-referenced, not reproduced. Duplication creates authority conflicts and maintenance burden.
- **PRs that mix unrelated changes** — a PR that fixes a bug in an artifact and simultaneously adds a new skill will be split or rejected. Keep each PR to one logical change.
- **Files that do not follow naming conventions** — incorrectly named files break indexing, registry lookups, and agent tool routing.
- **Contributions that introduce terminology inconsistent with PMBOK 8** — substituting synonyms, redefining established terms, or introducing non-PMI vocabulary without labeling undermines the repository's authority model.
- **Missing or incomplete YAML front matter** — files without version, status, owner, and approval authority fields cannot be properly governed or audited.
- **Uncited PMBOK references** — citing "PMBOK 8" without a section number is insufficient. All citations must include the specific section.

---

## Related Files

| File | Purpose |
|------|---------|
| [`CONTRIBUTING.md`](../CONTRIBUTING.md) | Root-level contribution rules — the authoritative, concise rule set that this document expands |
| [`AUTHORITY-ROUTING.md`](../AUTHORITY-ROUTING.md) | Decision routing model — T1–T4 bands, governance layers, artifact authority rows |
| [`source-authority.md`](../source-authority.md) | Repository source authority model — three-tier authority hierarchy |
| [`SKILL-REGISTRY.md`](../SKILL-REGISTRY.md) | Current registry of all skills — check before adding new content |
| [`pmi_reference_list.md`](../pmi_reference_list.md) | Full list of PMI companion references approved for citation |
| [`docs/human-practitioners/authority-routing.md`](how-to-use-authority-routing.md) | Step-by-step guide to applying the T1–T4 decision model |
| [`docs/human-practitioners/getting-started.md`](getting-started.md) | Onboarding guide for new repository users |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
