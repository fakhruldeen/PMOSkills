---
skill_id: SKL-01-02
skill_name: Define Artifact and Document Control Standards
pack: 01 — Organizational Setup
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A05 — Context Register (OPA / Document Control Standards
  section)
artifacts_updated:
- A06 — Project Management Plan (document control reference)
pmbok8_process_anchor: PMBOK8 Standard §3 Principles · Guide §2.1.6.4 Manage Project
  Knowledge · Artifacts-V-1.1
performance_domains:
- Governance
- Delivery
focus_area: Organizational Setup
upstream_prerequisites:
- SKL-01-01 — A05 Governance section must be baselined
downstream_skills:
- SKL-01-03 — Configure Project Repository and Tool Environment
- SKL-02-01 — Initiate Project or Phase
- All artifact-producing skills (Pack 02 through Pack 07)
file_path: skills/01-organizational-setup/SKL-01-02-define-artifact-and-document-control-standards.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-01-02 — Define Artifact and Document Control Standards

**Skill ID:** SKL-01-02  
**Pack:** 01 — Organizational Setup  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1.6.4 Manage Project Knowledge · Artifacts-V-1.1  
**File path:** `skills/01-organizational-setup/SKL-01-02-define-artifact-and-document-control-standards.md`

---

## Purpose

Define and record the artifact naming conventions, versioning scheme, status lifecycle, ownership rules, baseline and change control standards, and archiving requirements that govern all project artifacts in this repository. The output is the Document Control Standards section of A05 (Context Register / OPA), which becomes the single authority reference for how all artifacts are created, maintained, baselined, updated, and retired across all skills and packs.

---

## Scope

This skill covers organizational-level document and artifact control standards only. It does not create any specific artifact (those are downstream skills), configure the tool environment (SKL-01-03), or define project-specific content standards. It must run before any artifact-producing skill executes, as all artifact-producing skills depend on these standards for naming, versioning, and status management.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A05 Governance section (baselined) | SKL-01-01 output | Yes |
| Artifact registry / master artifact list | Artifacts-V-1.1 | Yes |
| Organizational document control policies | EEF / OPA (existing) | If available |
| Repository operating rules | repo/ folder | Yes |
| Tool environment constraints | SKL-01-03 (anticipated) / EEF | If available |

**Gate check:** SKL-01-01 must be complete and A05 Governance section must be baselined before this skill runs.

---

## Instructions

### Step 1 — Establish Artifact Naming Convention
1. Confirm the artifact ID scheme: `A##` format (e.g., A04 = Project Charter, A07 = Stakeholder Register).
2. Define the file naming convention for artifact files:
   - Format: `A##-kebab-case-artifact-name.md` (e.g., `A04-project-charter.md`)
   - No spaces, no special characters except hyphens
   - Always lowercase except artifact ID prefix
3. Define the folder structure for artifacts:
   - Root artifacts folder: `artifacts/`
   - Sub-folders by domain if the artifact set grows beyond 20 items
4. Confirm that skill file naming follows: `SKL-PP-NN-kebab-case-skill-name.md`
5. Record all naming conventions in A05 Document Control section.

### Step 2 — Define Versioning Scheme
1. Adopt semantic versioning for all artifacts and skills:
   - **Major version (X.0.0):** Re-baseline after formal change control (A12 approved change)
   - **Minor version (x.Y.0):** Substantive content addition that does not affect baseline
   - **Patch version (x.y.Z):** Correction of error, typo, or clarification without content change
2. Define the version field location: YAML frontmatter `version:` field in every artifact and skill file.
3. Define the starting version: all new files begin at `1.0.0`.
4. Define the version increment rule: version must be incremented on every commit that changes content.
5. Record versioning scheme in A05 Document Control section.

### Step 3 — Define Artifact Status Lifecycle
1. Define the permitted status values for all artifacts:
   - `Draft` — in progress, not ready for use
   - `Draft · In Review` — under formal review
   - `Baselined` — formally approved and under change control
   - `Superseded` — replaced by a newer baseline version
   - `Archived` — project closed; artifact retained for OPA
   - `Void` — withdrawn; no longer applicable
2. Define the status transition rules:
   - Draft → Baselined requires formal approval (authority per A05 governance thresholds)
   - Baselined → updated content requires A12 change request and approval before re-baselining
   - Archived artifacts are read-only; no further updates permitted
3. Define who can change artifact status (authority per A05 governance RACI).
4. Record the status lifecycle in A05 Document Control section.

### Step 4 — Define Artifact Ownership Rules
1. For each artifact in the master artifact list (Artifacts-V-1.1), assign:
   - **Owner:** the role responsible for maintaining the artifact (typically the PM for project artifacts, PMO for organizational artifacts)
   - **Approval authority:** the role that must approve baseline and re-baseline
   - **Consumer list:** the skills and roles that read or update this artifact
2. Confirm that artifact ownership is consistent with governance RACI in A05.
3. Record ownership assignments in A05 Document Control section.

### Step 5 — Define Baseline and Change Control Rules
1. Define what constitutes a baseline event for each artifact type:
   - Planning artifacts (A08, A14, A15, A16, A19): baselined at end of Planning focus area
   - Execution artifacts (A18, A21, A28): living documents — no formal baseline; continuous update
   - Charter (A04): baselined at Initiating completion
   - Closure (A27): baselined at project close
2. Define change control rules for baselined artifacts:
   - Any change to a baselined artifact requires an A12 Change and Exception Decision Log entry
   - Change must be assessed for impact on dependent artifacts before approval
   - Re-baseline must increment the major version
3. Define the consolidation rule: no duplicate artifact records — one canonical file per artifact ID.
4. Record baseline and change control rules in A05 Document Control section.

### Step 6 — Define Archiving and Retention Rules
1. Define what happens to artifacts at project close:
   - All baselined artifacts transition to `Archived` status
   - Archived artifacts are moved to a designated archive folder or tagged
   - Lesson learned inputs from A21 are extracted and transferred to OPA before archiving
2. Define the retention period (organizational policy or regulatory requirement).
3. Define who is responsible for archiving (PM, PMO, or designated records authority).
4. Record archiving and retention rules in A05 Document Control section.

### Step 7 — Define the Artifact Master List Reference
1. Confirm that Artifacts-V-1.1 is the authoritative artifact registry for this repository.
2. Record any project-specific artifacts not in Artifacts-V-1.1 with a local extension entry in A05.
3. Confirm that all skills reference artifacts by their canonical A## IDs — no aliases or informal names.

### Step 8 — Baseline A05 Document Control Section
1. Review the complete Document Control Standards section with the sponsor or PMO authority.
2. Obtain formal sign-off.
3. Record version, baseline date, and approval in A05.
4. Distribute to all project team members who produce or maintain artifacts.

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Document Control Standards | A05 | Document Control section | Naming, versioning, status lifecycle, ownership, baseline/change control, archiving |
| Document control reference | A06 | Document control reference | Subsidiary pointer to A05 — not a duplicate |

---

## Constraints

- All artifact-producing skills (Pack 02 through Pack 07) must comply with the standards defined here — no exceptions without documented tailoring rationale.
- The artifact ID scheme (A## format) is fixed — do not create artifacts with non-standard IDs.
- Version numbers must be maintained in YAML frontmatter — they cannot be inferred from commit history alone.
- Archiving rules must comply with any applicable legal or regulatory retention requirements.
- This skill does not create artifact templates or content — that is done by downstream skills.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Simple / low-governance project | Simplified status lifecycle (Draft → Approved → Archived). Relaxed versioning (major only). |
| Complex / regulated project | Full status lifecycle with audit trail. Mandatory change log in every artifact. Formal archiving with retention schedule. |
| Adaptive project | Living document approach for backlog and iteration records. Baseline concept applies only to A04, A06, A07. |
| Hybrid project | Split: predictive artifacts follow full baseline/change control; adaptive artifacts use living document approach. |
| Program-level setup | Add cross-project artifact ID namespace (e.g., P##-A## for program-level artifacts). Define artifact inheritance rules. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| SKL-01-01 not complete | A05 Governance section not baselined | Stop; complete SKL-01-01 before running this skill |
| Inconsistent artifact naming across files | Artifacts referenced by informal names (e.g., "risk register" instead of A19) | Enforce A## canonical IDs across all skill and artifact files |
| Version numbers not maintained | Files updated without version increment | Audit all files; enforce YAML version field; add Change Log sections |
| No ownership assigned for an artifact | Artifact updated by multiple parties with no clear owner | Assign owner in A05 Document Control section; align with governance RACI |
| Baseline rules not enforced | Baselined artifact changed without A12 entry | Re-validate all baselined artifacts; create retroactive A12 entries; tighten controls |
| Archiving not executed at close | Project closed but artifacts not archived | Re-run Step 6; assign archiving responsibility; execute before records are lost |
| Local artifact created without registry entry | Artifact file exists but not in A05 extension list or Artifacts-V-1.1 | Add extension entry to A05; update SKILL-REGISTRY.md artifact cross-reference |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | SKL-01-01 gate check | A05 Governance section is baselined before this skill runs | A05 Governance section in draft |
| T-2 | Naming convention defined | Artifact naming convention (`A##-kebab-case.md`) and skill naming convention documented in A05 | Any format not documented |
| T-3 | Versioning scheme defined | Semantic versioning rules (major/minor/patch) documented in A05 | Versioning scheme absent or ambiguous |
| T-4 | Status lifecycle defined | All six status values and transition rules documented in A05 | Any status value undefined or transition rule missing |
| T-5 | Artifact ownership assigned | Every artifact in master list has an Owner and Approval Authority | Any artifact with no owner |
| T-6 | Baseline rules defined per artifact type | Each artifact type has a documented baseline event and change control rule | Any artifact type with no baseline rule |
| T-7 | Archiving rules defined | Retention period, responsibility, and procedure documented | Archiving rules absent |
| T-8 | A05 Document Control section baselined | Version, baseline date, and sign-off recorded in A05 | A05 Document Control section unsigned or in draft |
| T-9 | Standards distributed | All artifact-producing team members have received A05 Document Control section | Document exists but not distributed |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.1.6.4 Manage Project Knowledge · Artifacts-V-1.1 · Repository Operating Rules*  
*Source type: PMI-derived*  
*Owner: PMO / Organizational governance authority*  
*Approval authority: Sponsor or PMO lead*
