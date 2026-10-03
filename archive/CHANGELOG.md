# Changelog

All notable changes to this repository are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Authority: PMBOK 8 Primary · PMI Companion References Secondary.

---

## [5.1.0] — 2026-06-02

### Added
- **v0.3 Release Integration:**
  - Authoring `RELEASE-NOTES-v0.3.md` detailing metrics sync and documents integration.
  - Refactoring scorecard counts in `README.md` to catalog all 19 expanded documentation guides.
  - Syncing framework metrics to cover 354 total verified assets.

---

## [5.0.0] — 2026-06-02

### Added
- **Track 1 Expansion (Human PMs & PMOs):**
  - Authoring `pm-handbook.md` (Waterfall, Agile, and Hybrid delivery SOPs).
  - Authoring `tailoring-guide.md` (4-step PMBOK 8 tailoring scaled T1-T4).
  - Authoring `governance-guide.md` (OPM mapping, PMO RACI, escalation thresholds).
- **Track 2 Expansion (AI Agents):**
  - Authoring `ontology-specification.md` (relational graph ontology and YAML schemas).
  - Authoring `system-prompts.md` (injectable prompt library for PMO Orchestrator, Risk, and Waste auditors).
- **Track 3 Expansion (Developer Tools):**
  - Authoring `automated-validators.md` (3-tier QA gates, pre-commit configuration).
- **Track 4 Expansion (General & ESG):**
  - Standardized ESG-KPI Baseline Matrix added to `sustainability-guide.md`.
- **Portal Index Updates:**
  - Multi-audience track directory `docs/user-friendly-guide.md` updated to map all 6 new guides.
  - Scorecard metrics updated in `README.md` to cover 19 documentation guides and 354 total verified assets.

---

## [4.7.0] — 2026-06-02

### Added
- **Phase 6 Test Suites:**
  - 48 individual skill-level deterministic test suites under `tests/skill-tests/` (each containing 9 machine-readable test cases covering happy path, prerequisites, thresholds, ESG, constraints, waste, etc.).
  - 7 cross-skill integration flow test suites under `tests/integration-tests/` tracing artifact flows across at least two lifecycle phases.
  - Interactive Mermaid-based lifecycle flow diagrams for all integration tests.
  - Master catalogs `tests/skill-tests/index.md` and `tests/integration-tests/index.md`.
- **Phase 7 Quality Audit:**
  - Full quality review and validation of all 57 newly generated test files.
  - Active status and actual flat file structure documented in `tests/README.md`.

### Fixed
- **NC-001, NC-002, NC-003 Resolved:** Renamed legacy mixed-case artifact files in `artifacts/planning-and-baselines/` to strict lowercase kebab-case (e.g., `A14-integrated-project-management-plan.md`, `A15-schedule-model-and-baseline-record.md`, `A16-financial-management-and-cost-baseline-record.md`).
- **NC-004, NC-005, NC-006 Resolved:** Formally documented structural cleanups of root directories and duplicate plan standard files in `QUALITY-STANDARDS.md`.
- Updated all cross-references and links to lowercase kebab-case in `docs/human-practitioners/how-to-use-artifacts.md` and `QUALITY-STANDARDS.md`.

---

## [2.12.0] — 2026-05-31

### Audit Findings — Phase C4 Path Correction

Audit performed on all `reference/` and root directories to verify C4 process record locations.

**Findings:**
- PR01–PR10: Confirmed **missing from repository** — listed as complete in v2.11.0 but commits were not preserved. Rebuild required.
- PR11–PR40: Exist at root `C4-Process-Records/` (wrong location) and at `reference/C4-Process-Records/` (wrong subfolder name). Canonical target is `reference/processes/`.
- `C5-KA-Crossref/KA-Crossref-Index.md`: Exists at root. Must migrate to `reference/KA-Crossref-Index.md`.
- `C6-TT-Taxonomy/TT-Taxonomy-Index.md`: Exists at root. Must migrate to `reference/TT-Taxonomy-Index.md`.
- `C7-IO-Registry/IO-Registry-Index.md`: Exists at root. Must migrate to `reference/IO-Registry-Index.md`.

**Action:** Full 10-patch migration and rebuild session initiated.

### Session Migration Patch Plan

| Patch | Action | Files |
|---|---|---|
| P1 | Update MASTER-PLAN-V2.md to v2.12.0 | 1 — ✅ Done |
| P2 | Update CHANGELOG.md | 1 — ✅ Done (this entry) |
| P3 | Migrate PR11–PR20 → `reference/processes/` | 10 |
| P4 | Migrate PR21–PR30 → `reference/processes/` | 10 |
| P5 | Migrate PR31–PR40 → `reference/processes/` | 10 |
| P6 | Build PR01–PR10 → `reference/processes/` | 10 |
| P7 | Push `reference/processes/00-index.md` | 1 |
| P8 | Migrate C5/C6/C7 → `reference/` with corrected paths | 3 |
| P9 | Delete old root dirs (C4/C5/C6/C7) | ~33 |
| P10 | Final MASTER-PLAN-V2.md + CHANGELOG.md update | 2 |

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.12.0 — C4 path correction documented, PR01–PR10 rebuild queued, C5/C6/C7 migration queued, session order updated, §1.7.1 and §1.7.2 added.

---

## [2.11.0] — 2026-05-31

### Added — Phase C4: Reference Process Records — Batch 1 (10/40 complete)

**Commit 1 — PR01–PR03 (SHA: 0fff65c)**
- `reference/processes/PR01-develop-project-charter.md` — Develop Project Charter. Process Group: Initiating. PMBOK 8: Governance PD, 2.1.6.1. Includes definition, purpose, when used, key inputs/T&T/outputs, process relationships, artifact connections (A01, A02, A04, A05, A14), skill connections (SKL-01-01, SKL-01-02, SKL-02-01, SKL-02-02), domain/focus-area links, practitioner questions.
- `reference/processes/PR02-identify-stakeholders.md` — Identify Stakeholders. Process Group: Initiating. PMBOK 8: Governance and Stakeholders PDs. Includes full standard structure + artifact connections (A04, A07, A10, A18, A19, A29), skill connections (SKL-02-03, SKL-03-03, SKL-03-08, SKL-04-04).
- `reference/processes/PR03-develop-project-management-plan.md` — Develop Project Management Plan. Process Group: Planning. PMBOK 8: Governance PD, 2.1.6.2. Includes full standard structure + artifact connections (A14, A09, A10, A11, A15, A16, A13, A05), skill connections (SKL-03-01 through SKL-03-08).

**Commit 2 — PR04–PR07 (SHA: 25e87e4)**
- `reference/processes/PR04-plan-scope-management.md` — Plan Scope Management. Process Group: Planning. PMBOK 8: Scope PD, 2.2.2.1. Artifact connections: A14, A08, A13, A04, A05.
- `reference/processes/PR05-collect-requirements.md` — Collect Requirements. Process Group: Planning. PMBOK 8: Scope PD, 2.2.2.2. Artifact connections: A08, A13, A07, A04, A14.
- `reference/processes/PR06-define-scope.md` — Define Scope. Process Group: Planning. PMBOK 8: Scope PD, 2.2.2.3. Artifact connections: A08, A13, A14, A05, A04.
- `reference/processes/PR07-create-wbs.md` — Create WBS. Process Group: Planning. PMBOK 8: Scope PD, 2.2.2.4. Artifact connections: A14, A08, A13, A15, A16, A05.

**Commit 3 — PR08–PR10 (SHA: 3d74bd0)**
- `reference/processes/PR08-plan-schedule-management.md` — Plan Schedule Management. Process Group: Planning. PMBOK 8: Schedule PD. Artifact connections: A14, A15, A05.
- `reference/processes/PR09-define-activities.md` — Define Activities. Process Group: Planning. PMBOK 8: Schedule PD. Artifact connections: A15, A14, A08, A05.
- `reference/processes/PR10-sequence-activities.md` — Sequence Activities. Process Group: Planning. PMBOK 8: Schedule PD. Artifact connections: A15, A14, A19, A05.

All 10 process records follow the standard structure: Type, Primary Source, Companion Source, Process Group, Version, Status, Definition, Purpose, When Used, Key Inputs, Key Tools and Techniques, Key Outputs, Relationship to Other Processes, Artifact Connections, Skill Connections, Domain and Focus Area Links, Practitioner Questions.

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.11.0 — C4 Batch 1 (PR01–PR10) marked complete in scorecard and status table. Session order updated. Version history entry added.

### Progress: Phase C4
- **Completed:** PR01–PR10 (10/40 process records) — NOTE: later audit (v2.12.0) confirmed these files are missing; rebuild queued.
- **Remaining:** PR11–PR40 (30 records across Batches 2–4)
- **Next batch:** PR11–PR20 — Schedule (continued), Finance, Quality, Resource planning chain

---

## [2.10.0] — 2026-05-31

### Added — Phase C2: Reference Performance Domains Layer (COMPLETE)
- `reference/performance-domains/00-index.md` — Full performance domains index: 8 domains, interdependency matrix, interaction diagram, artifact coverage, skill connections. SHA: b2cdd222.
- `reference/performance-domains/PD01-stakeholders.md` — Stakeholder Performance Domain (PMBOK8 §4.1). SHA: 229de93c.
- `reference/performance-domains/PD02-team.md` — Team Performance Domain (PMBOK8 §4.2). SHA: e67e0b17.
- `reference/performance-domains/PD03-development-approach.md` — Development Approach and Life Cycle Performance Domain (PMBOK8 §4.3). SHA: c6e28640.
- `reference/performance-domains/PD04-planning.md` — Planning Performance Domain (PMBOK8 §4.4). SHA: 1cbc7013.
- `reference/performance-domains/PD05-project-work.md` — Project Work Performance Domain (PMBOK8 §4.5). SHA: d26bf832.
- `reference/performance-domains/PD06-delivery.md` — Delivery Performance Domain (PMBOK8 §4.6). SHA: 8cf1706d.
- `reference/performance-domains/PD07-measurement.md` — Measurement Performance Domain (PMBOK8 §4.7). SHA: c0f874d3.
- `reference/performance-domains/PD08-uncertainty.md` — Uncertainty Performance Domain (PMBOK8 §4.8). SHA: 102bfb0e.

### Added — Phase C3: Reference Focus Areas Layer (COMPLETE)
- `reference/focus-areas/FA01-initiating.md` — Initiating Focus Area (Process Groups Practice Guide §4). SHA: bef503db.
- `reference/focus-areas/FA02-planning.md` — Planning Focus Area (Process Groups Practice Guide §5). SHA: 316daf73.
- `reference/focus-areas/FA03-executing.md` — Executing Focus Area (Process Groups Practice Guide §6). SHA: be012353.
- `reference/focus-areas/FA04-monitoring-controlling.md` — Monitoring & Controlling Focus Area (Process Groups Practice Guide §7). SHA: c8f193da.
- `reference/focus-areas/FA05-closing.md` — Closing Focus Area (Process Groups Practice Guide §8). SHA: 02f47fd3.

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.10.0 — Phase C2 and C3 marked COMPLETE; Phase C4 (40 process records) opened.

---

## [2.9.0] — 2026-05-31

### Added — Phase C1: Reference Principles Layer (COMPLETE)
- `reference/principles/00-index.md` — Full principles index: 12 principles, §3.N references, interdependency map, artifact coverage summary (18 artifacts), usage guidance for practitioners/AI agents/auditors. SHA: 693364ac.
- `reference/principles/P01-stewardship.md` — Be a Diligent, Respectful, and Caring Steward (PMBOK8 §3.1). SHA: 2ce6cfee.
- `reference/principles/P02-team.md` — Create a Collaborative Project Team Environment (PMBOK8 §3.2). SHA: 7bd44d69.
- `reference/principles/P03-stakeholders.md` — Effectively Engage with Stakeholders (PMBOK8 §3.3). SHA: c9fe6f0d.
- `reference/principles/P04-value.md` — Focus on Value (PMBOK8 §3.4). SHA: 05699468.
- `reference/principles/P05-systems-thinking.md` — Recognize, Evaluate, and Respond to System Interactions (PMBOK8 §3.5). SHA: 69372c50.
- `reference/principles/P06-leadership.md` — Demonstrate Leadership Behaviors (PMBOK8 §3.6). SHA: e41019fe.
- `reference/principles/P07-tailoring.md` — Tailor Based on Context (PMBOK8 §3.7). SHA: 072cef9c.
- `reference/principles/P08-quality.md` — Build Quality into Processes and Deliverables (PMBOK8 §3.8). SHA: c30df61e.
- `reference/principles/P09-complexity.md` — Navigate Complexity (PMBOK8 §3.9). SHA: f90ea7ab.
- `reference/principles/P10-risk.md` — Optimize Risk Responses (PMBOK8 §3.10). SHA: 873e5a22.
- `reference/principles/P11-adaptability.md` — Embrace Adaptability and Resiliency (PMBOK8 §3.11). SHA: 2e5e678b.
- `reference/principles/P12-change.md` — Enable Change to Achieve the Envisioned Future State (PMBOK8 §3.12). SHA: d69ebaae.

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.9.0 — Phase C1 marked COMPLETE, Phase C2 + C3 opened.

---

## [2.8.0] — 2026-05-31

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.8.0 — merged Plan v3.0.0. Added Phase 3, Phase D, Phase E, quality standards §2, dependency map, completion metrics, updated session order. Phase C1 opened.

---

## [2.7.0] — 2026-05-31

### Added — Phase B2 Final Templates + Phase B3 Examples

See v2.7.0 entry above for full detail on 14 templates (Batches A–D) and 10 examples (Batches E–F).

### Confirmed Closed
- **Phase B2 — Artifact Templates** — 38/38 committed. 2026-05-31.
- **Phase B3 — Artifact Examples** — 10/10 committed. 2026-05-31.

---

## [2.6.0] — 2026-05-31

### Added — Phase 1 Documentation Layer (COMPLETE)
- 6 docs files: `how-to-use-artifacts.md`, `changelog-guide.md`, `faq.md`, `how-to-use-authority-routing.md`, `how-to-contribute.md`, `glossary.md`
- 8 B2 templates: A02, A03, A10, A18, A20, A24, A25, A26

### Confirmed Closed
- **Phase 1 — Documentation Layer** — 9/9 docs files committed. 2026-05-31.

---

## [2.5.0] — 2026-05-31

### Added
- `docs/human-practitioners/getting-started.md`, `docs/human-practitioners/how-to-use-skills.md`, `docs/ai-agents/ai-agent-guide.md`
- `artifacts/governance/A05-context-register-template.md`
- `artifacts/quality/A09-quality-management-plan-template.md`

---

## [2.3.0] — 2026-05-30

### Changed
- `MASTER-PLAN-V2.md` bumped to v2.3.0 — Phase B1 marked complete.
- Deleted duplicate `artifacts/resources/A26-Resource-Capacity-and-Acquisition-Record.md`.
- `CHANGELOG.md` created.

### Confirmed Closed
- **Phase B1** — all 24 artifact definitions built and confirmed present.

---

## [2.2.0] — 2026-05-30

### Changed
- Phase A declared complete. Phase B1 opened.

---

## [2.1.0] — 2026-05-30

### Changed
- `MASTER-PLAN-V2.md` created at v2.1.0, superseding `NEXT-STEPS-PLAN.md` v1.0.0.

---

## [1.1.0] — 2026-05-29 / 2026-05-30

### Added
- All 47 skills upgraded to v1.1.0. YAML front matter, Tests T01–T09, Change Log added to each.
- `AUTHORITY-ROUTING.md`, `LIFECYCLE-MAP.md`, `PRINCIPLES-CROSSWALK.md`, `pmi_reference_list.md`, `source-authority.md`
- GitHub community files: `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, issue templates, PR template.

---

## [1.0.0] — 2026-05-28 / 2026-05-29

### Added
- Repository scaffolding: `README.md`, `LICENSE`, `.gitignore`.
- 47 skills at v1.0.0 across Packs 01–07.
- 17 artifact definitions across 6 folders.
- `reference/`, `shared/`, `tests/` directory structure seeded.
- `NEXT-STEPS-PLAN.md` v1.0.0.

---

## [0.1.0] — 2026-05-28

### Added
- Repository created: [fakhruldeen/PMOSkills](https://github.com/fakhruldeen/PMOSkills).
- Initial commit with README.md, LICENSE, and .gitignore.
- Authority model established: PMBOK 8 primary, 23 PMI companion references secondary.
- Artifacts-V-1.0.5 vocabulary adopted.
