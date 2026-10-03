# Changelog Guide

**Repository:** PMOSkills  
**Version:** 1.0.0  
**Authority:** PMBOK8 Primary · PMI Companion References Secondary  
**File Path:** `docs/developer-tools/changelog-guide.md`

---

## Purpose

This guide explains how `CHANGELOG.md` works in the PMOSkills repository — how to read an existing entry, how to determine what kind of version bump a change requires, how to write a new entry correctly, and how changelog entries relate to the commit message convention defined in `CONTRIBUTING.md`. Read this guide before making any change that requires a version increment to the repository.

---

## Audience

### PMO Practitioners and Contributors

This guide is for anyone contributing content to the PMOSkills repository — adding skill files, artifact definitions, templates, reference files, or documentation — who needs to update `CHANGELOG.md` as part of their contribution. You do not need technical expertise, but you must understand semantic versioning and the commit convention before submitting a pull request.

### AI Agents

This guide defines the changelog update contract for agents performing automated repository maintenance tasks: adding files, correcting content, bumping versions, and committing changes. Agents must determine the correct version bump type, format the entry correctly, and include the appropriate commit message before writing to `CHANGELOG.md`.

---

## Prerequisites

- You have read `CONTRIBUTING.md` and understand the contribution workflow, file naming conventions, and quality standards.
- You have read `docs/human-practitioners/getting-started.md` and can navigate the repository structure.
- You understand the difference between a skill file, an artifact definition file, a template file, and a reference file — see `docs/human-practitioners/how-to-use-artifacts.md` and `docs/human-practitioners/how-to-use-skills.md`.
- You have access to the current `CHANGELOG.md` at the root of the repository.

---

## How to Read a CHANGELOG Entry

`CHANGELOG.md` follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format. Each entry corresponds to one released version of the repository. Entries appear in reverse chronological order — the most recent version is at the top.

**Entry structure:**

```
## [MAJOR.MINOR.PATCH] — YYYY-MM-DD

### Added
- Short description of what was added. File path in backticks.

### Changed
- Short description of what was modified and why.

### Fixed
- Short description of a correction made.

### Deprecated
- Content or files that are marked for future removal.

### Removed
- Content or files that have been deleted.

### Security
- Changes that address security or privacy concerns.
```

Not every subsection must appear in every entry — include only the subsections that apply to changes in that version.

**Example entry:**

```markdown
## [2.5.0] — 2026-05-31

### Added
- `docs/human-practitioners/getting-started.md` — orientation guide for PMO practitioners, AI agents,
  and book authors. Includes repo overview, directory map, three-audience quickstart
  paths, skill-finding decision tree, key files index. Phase 1 doc layer.
- `artifacts/governance/A05-context-register-template.md` — template for A05 Context
  Register. 20 `[FIELD: ...]` placeholders. Phase B2 Batch 3.

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.5.0 — Phase 1 docs status table added, B2
  template inventory corrected to 16 templates.
```

Reading this entry tells you: version 2.5.0 was released on 2026-05-31; two files were added (the getting-started guide and the A05 template); and the master plan was updated to reflect the new version. Each line describes one logical change and names the file it affects.

---

## Semantic Versioning in PMOSkills

PMOSkills uses a three-part version number in the format `MAJOR.MINOR.PATCH`. Every change to the repository must increment exactly one part of this number — determined by the type and scope of the change. Never skip a version number and never increment more than one part for a single release.

| Increment | Trigger | Example |
|-----------|---------|---------|
| **Patch (x.x.N)** | Typo fix, broken link repair, incorrect PMBOK section reference corrected, minor formatting correction, normalization of file metadata | `1.3.1 → 1.3.2` |
| **Minor (x.N.0)** | New skill file added, new artifact definition file added, new artifact template added, new reference file added, new docs file added, new shared component added | `1.3.0 → 1.4.0` |
| **Major (N.0.0)** | New lifecycle pack added, structural reorganization of repository folders, breaking schema change (e.g., artifact YAML front matter fields added or renamed in a way that breaks existing parsers), authority model revision that changes the T1–T4 routing logic | `1.x.x → 2.0.0` |

**Rules:**
- A Minor increment resets the Patch counter to zero: `1.3.2 → 1.4.0`, not `1.4.2`.
- A Major increment resets both Minor and Patch to zero: `1.4.3 → 2.0.0`.
- Multiple additions in a single commit use the highest applicable increment: if you add two new skill files and fix a typo, the result is a Minor increment (not Patch), because a Minor trigger was present.
- Patch changes to files that are already under version control inside `artifacts/` (e.g., correcting a PMBOK section reference in a skill file) are Patch increments at the repository level.

---

## How to Write a CHANGELOG Entry

Follow these steps when adding a new entry to `CHANGELOG.md`:

**Step 1 — Find the current version.**
Open `CHANGELOG.md` at the repository root. The first `## [x.x.x]` heading at the top of the file is the current version. Note this number before proceeding.

**Step 2 — Determine the bump type.**
Review the changes you are about to commit. Use the Semantic Versioning table above to identify whether your changes trigger a Patch, Minor, or Major increment. If your changes span multiple categories, use the highest applicable increment.

**Step 3 — Calculate the new version number.**
Apply the increment to the current version:
- Patch: increment the third number (`1.3.1 → 1.3.2`)
- Minor: increment the second number, reset third to zero (`1.3.1 → 1.4.0`)
- Major: increment the first number, reset second and third to zero (`1.3.1 → 2.0.0`)

**Step 4 — Add a new entry block at the top.**
Immediately below the `# Changelog` header and the introductory paragraph (and the `---` separator), insert a new version block before all existing entries:

```markdown
## [x.x.x] — YYYY-MM-DD

### Added
- `path/to/new-file.md` — one-line description of what was added and its purpose.

### Changed
- `path/to/changed-file.md` — what was changed and why.

### Fixed
- `path/to/corrected-file.md` — what was incorrect and what correction was made.
```

Use today's date in `YYYY-MM-DD` format. Include only the subsections that apply. Write one bullet per logical change. Reference the file path in backticks. Keep each bullet to one or two lines — if more detail is needed, add it to the commit body, not the changelog.

**Step 5 — Save and commit.**
Save `CHANGELOG.md` and commit using the following message format:

```
chore(root): update CHANGELOG.md for vX.X.X
```

Replace `X.X.X` with the new version number. If the version bump also requires updating `MASTER-PLAN-V2.md` or `SKILL-REGISTRY.md`, include those files in the same commit and list them in the commit body under `Files:`.

---

## Commit Convention Reminder

All commits to PMOSkills follow the Conventional Commits format as defined in `CONTRIBUTING.md`. Every commit message must use this structure:

```
type(scope): short description

Body: what changed and why.
Files: list of files added/modified/deleted.
Phase: which plan phase this commit belongs to.
```

**Types:** `feat` · `fix` · `docs` · `chore` · `refactor` · `test`

**Scopes:** `skills` · `artifacts` · `docs` · `reference` · `shared` · `tests` · `root`

The short description (first line) must be lowercase, 72 characters or fewer, and must not end with a period. The body is optional for trivial changes but required for any change that touches more than one file or involves a non-obvious decision.

**Examples:**

```
feat(artifacts): add A05 context register template

Body: Adds blank fill-in template for A05 with 20 [FIELD: ...] placeholders
covering Project Reference, EEFs, OPAs, Assumptions, Constraints, and Review Log.
Files: artifacts/governance/A05-context-register-template.md
Phase: B2 Batch 3
```

```
fix(skills): correct PMBOK8 section reference in SKL-03-06

Body: SKL-03-06 cited §3.2.1; correct reference is Guide §2.3.2.4 (Schedule
Management). No content change.
Files: skills/03-planning/SKL-03-06-plan-schedule-management.md
Phase: A QA sweep
```

```
chore(root): update CHANGELOG.md for v2.5.0

Body: Records addition of docs/human-practitioners/getting-started.md, docs/human-practitioners/how-to-use-skills.md,
docs/ai-agents/ai-agent-guide.md, and two artifact templates from Phase B2 Batch 3.
Files: CHANGELOG.md, MASTER-PLAN-V2.md
Phase: Phase 1 docs layer
```

---

## What Triggers Each Commit Type

| Type | When to Use | Example Commit Message |
|------|------------|------------------------|
| `feat` | Adding a new skill file, artifact definition, artifact template, docs file, or reference file — any net-new content | `feat(skills): add SKL-04-07 manage stakeholder engagement` |
| `fix` | Correcting a PMI reference, fixing a broken link, removing a duplicate file, correcting a schema inconsistency, fixing an incorrect field value in a definition or template | `fix(artifacts): correct approval authority in A09 definition` |
| `docs` | Updating an existing `docs/` file, improving `README.md`, correcting inline documentation within a skill or artifact that does not change its substance | `docs(docs): add prerequisites section to how-to-use-artifacts.md` |
| `chore` | Updating `MASTER-PLAN-V2.md`, `CHANGELOG.md`, `SKILL-REGISTRY.md`, `.gitignore`, repo metadata, or any maintenance file that is not directly user-facing content | `chore(root): update CHANGELOG.md for v1.4.0` |
| `refactor` | Renaming a file, moving a file to a different folder without changing its content, restructuring a directory that does not alter the skills or artifacts contained within | `refactor(artifacts): move A20 from extended-resources to monitoring-and-decisions` |
| `test` | Adding or updating test cases in the `tests/` directory, adding test table rows to a skill file's Tests section | `test(tests): add T10 edge case for SKL-03-09 risk management` |

**Guidance:**
- Use `feat` for anything that makes the repository more capable or complete — new content is always `feat`.
- Use `fix` when content that already existed was wrong and is being corrected.
- Use `docs` only for documentation improvements, not new documentation files (those are `feat`).
- Use `chore` for all administrative and maintenance updates that do not change user-facing content.
- Never combine a `feat` and a `fix` in the same commit if they affect different files — keep PRs focused.

---

## Related Files

| File | Purpose | Location |
|------|---------|----------|
| `CHANGELOG.md` | The changelog this guide describes — all version history | [`CHANGELOG.md`](../CHANGELOG.md) |
| `CONTRIBUTING.md` | Full contribution workflow, commit convention, quality standards | [`CONTRIBUTING.md`](../CONTRIBUTING.md) |
| `MASTER-PLAN-V2.md` | Phase-by-phase build plan — updated when major phases complete | [`MASTER-PLAN-V2.md`](../MASTER-PLAN-V2.md) |
| `SKILL-REGISTRY.md` | Master skill index — updated whenever a skill is added or changed | [`SKILL-REGISTRY.md`](../SKILL-REGISTRY.md) |
| `docs/human-practitioners/getting-started.md` | Repository orientation — entry point for all audiences | [`docs/human-practitioners/getting-started.md`](getting-started.md) |
| `docs/human-practitioners/how-to-use-skills.md` | How to read and execute a skill file | [`docs/human-practitioners/how-to-use-skills.md`](how-to-use-skills.md) |
| `docs/human-practitioners/how-to-use-artifacts.md` | How to produce, baseline, and version an artifact | [`docs/human-practitioners/how-to-use-artifacts.md`](how-to-use-artifacts.md) |
| `docs/ai-agents/ai-agent-guide.md` | AI agent operating contract for this repository | [`docs/ai-agents/ai-agent-guide.md`](ai-agent-guide.md) |

---

*Authority: PMBOK8 Primary · PMI Companion References Secondary*
