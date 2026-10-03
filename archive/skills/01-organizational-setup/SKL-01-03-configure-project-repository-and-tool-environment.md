---
skill_id: SKL-01-03
skill_name: Configure Project Repository and Tool Environment
pack: 01 — Organizational Setup
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A03 — Repository and Tool Configuration Record
artifacts_updated:
- A05 — Context Register (EEF / tool environment section)
- A06 — Project Management Plan (tool environment reference)
pmbok8_process_anchor: PMBOK8 Standard §3 Principles · Guide §2.1.6.4 Manage Project
  Knowledge · Guide §2.6 Resource Management
performance_domains:
- Governance
- Resources
- Delivery
focus_area: Organizational Setup
upstream_prerequisites:
- SKL-01-01 — A05 Governance section must be baselined
- SKL-01-02 — A05 Document Control Standards must be baselined
downstream_skills:
- SKL-02-01 — Initiate Project or Phase
- All Pack 02 through Pack 07 skills (repository must be configured before project
  execution)
file_path: skills/01-organizational-setup/SKL-01-03-configure-project-repository-and-tool-environment.md
tests: 9
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-01-03 — Configure Project Repository and Tool Environment

**Skill ID:** SKL-01-03  
**Pack:** 01 — Organizational Setup  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.1.6.4 Manage Project Knowledge · Guide §2.6 Resource Management  
**File path:** `skills/01-organizational-setup/SKL-01-03-configure-project-repository-and-tool-environment.md`

---

## Purpose

Configure the project repository structure, access controls, branching or folder conventions, and tool environment so that all project artifacts, skill files, and knowledge records can be created, maintained, versioned, and retrieved in a controlled, consistent, and accessible manner. The output is A03 (Repository and Tool Configuration Record), which becomes the single reference for repository structure, tool decisions, access rules, and integration points.

---

## Scope

This skill covers the initial setup and configuration of the repository and tool environment for the project. It does not create project artifacts (downstream skills), define governance (SKL-01-01), or define document control standards (SKL-01-02). It must run after SKL-01-01 and SKL-01-02 are complete, as repository configuration must respect governance authority and document control standards. It may be re-run when the tool environment changes significantly (e.g., migration to a new platform, major repository restructuring).

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A05 Governance section (baselined) | SKL-01-01 output | Yes |
| A05 Document Control Standards (baselined) | SKL-01-02 output | Yes |
| Approved tooling decisions | EEF / organizational standard | Yes |
| Access control requirements | A05 governance + security/legal EEF | Yes |
| Repository operating rules | repo/ folder | Yes |
| Integration requirements | EEF (CI/CD, MCP server, agent pipelines) | If applicable |

**Gate check:** Both SKL-01-01 and SKL-01-02 must be complete before this skill runs. A05 Governance and Document Control sections must be baselined.

---

## Instructions

### Step 1 — Confirm Repository Platform and Access Model
1. Confirm the designated repository platform (e.g., GitHub, GitLab, Azure DevOps, local file system).
2. Define the access model:
   - Who has read access
   - Who has write access
   - Who has admin/owner access
   - Who has no access (restricted content)
3. Align access levels with governance RACI in A05.
4. Record the platform selection and access model in A03.

### Step 2 — Define and Create Folder Structure
1. Confirm the canonical folder structure based on existing repo conventions and document control standards:

```
/
├── artifacts/          — Project artifact files (A01 through A##)
├── skills/             — Skill files organized by pack
│   ├── 01-organizational-setup/
│   ├── 02-initiating/
│   ├── 03-planning/
│   ├── 04-executing/
│   ├── 05-monitoring-controlling/
│   ├── 06-closing/
│   └── 07-adaptive-hybrid/
├── repo/               — Repository operating rules, templates, meta-documents
├── .gitignore          — Version control exclusion rules
├── README.md           — Repository entry point and navigation guide
├── SKILL-REGISTRY.md   — Master skill index
├── AUTHORITY-ROUTING.md — Governance authority routing reference
├── LIFECYCLE-MAP.md    — Process lifecycle map
└── PRINCIPLES-CROSSWALK.md — PMBOK8 principles to skills crosswalk
```

2. Verify that all required folders exist. Create any missing folders with a `.gitkeep` placeholder if needed.
3. Confirm that the folder structure matches the document control naming conventions in A05.
4. Record the folder structure in A03.

### Step 3 — Configure Version Control Settings
1. Confirm branching or versioning strategy:
   - For Git-based repos: define branch naming conventions (e.g., `main` = production, `dev` = in-progress builds, `patch/` prefix for fixes)
   - Define commit message conventions: `feat:`, `patch:`, `fix:`, `docs:` prefixes
   - Define pull request / merge review requirements (who must review before merging)
2. Configure `.gitignore` to exclude:
   - Local environment files
   - Temporary files and cache
   - Sensitive data files (credentials, personal data)
3. Confirm that version control configuration is consistent with document control standards in A05.
4. Record version control settings in A03.

### Step 4 — Configure Access Controls
1. Implement the access model defined in Step 1:
   - Create or confirm user roles and permissions in the repository platform
   - Apply branch protection rules for `main` (require review before merge, no force-push)
   - Apply folder-level access restrictions for any sensitive content
2. Verify that access controls are consistent with governance authority in A05.
3. Record access control configuration in A03.

### Step 5 — Configure Tool Integrations
1. Identify all tool integrations required for the project:
   - CI/CD pipelines (automated testing, linting, deployment)
   - MCP server connections (if applicable — for AI agent integration)
   - Issue trackers or project management tools (if linked)
   - Communication tool integrations (notifications, webhooks)
2. For each integration, document:
   - Tool name and version
   - Connection type and authentication method
   - Data flow (what the integration reads/writes)
   - Owner and maintenance responsibility
3. Record all integrations in A03.

### Step 6 — Verify Repository Readiness
1. Confirm that all required folders exist and are correctly named.
2. Confirm that SKILL-REGISTRY.md, AUTHORITY-ROUTING.md, LIFECYCLE-MAP.md, and README.md are present and current.
3. Confirm that `.gitignore` is configured correctly.
4. Confirm that access controls are active and verified.
5. Confirm that all tool integrations are tested and operational.
6. Run a readiness checklist and record results in A03.

### Step 7 — Update A05 Tool Environment Section
1. Add or update the Tool Environment section in A05 with:
   - Repository platform and URL
   - Access model summary
   - Integration list (tool names, purposes, owners)
   - Any EEF constraints that affect tool usage
2. Record the A05 update in the A05 Change Log.

### Step 8 — Baseline A03 and Notify Team
1. Finalize A03 content and obtain PM or PMO sign-off.
2. Record version, baseline date, and approval in A03.
3. Distribute A03 to all project team members who will use the repository.
4. Confirm that all team members have access and can successfully read and write to their permitted areas.

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|---|
| Repository and Tool Configuration Record | A03 | Full document | Platform, folder structure, access controls, version control settings, integrations, readiness checklist |
| Tool environment section | A05 | Tool Environment section | Summary reference — A03 is the authority |
| Tool environment reference | A06 | Tool environment reference | Subsidiary pointer only |

---

## Constraints

- Repository folder structure must match the document control naming conventions in A05 — no ad hoc folders.
- Branch protection on `main` is mandatory for all production-grade repository configurations.
- No credentials, tokens, or personal data may be stored in the repository — `.gitignore` must exclude all such files.
- All tool integrations must have a named owner — no orphaned integrations.
- This skill does not create project content — it creates the container for project content.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Simple / single-PM project | Minimal folder structure. No CI/CD. Basic access model (owner + contributor). README serves as A03. |
| Full PMO / multi-team project | Full folder hierarchy. Branch protection enforced. Role-based access. CI/CD pipeline for linting/testing. MCP server integration. |
| Regulated environment | Audit log enabled. Access review schedule defined. Retention and archiving configured at repository level. |
| AI agent / MCP integration | MCP server endpoint configured. Tool manifest registered. Agent authentication defined. Scope of agent read/write access documented. |
| Offline / air-gapped environment | Local repository configuration. No cloud integrations. Manual distribution process for artifact updates. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| SKL-01-01 or SKL-01-02 not complete | Repository configured without governance or document control standards | Stop; complete prerequisite skills before proceeding |
| Folder structure deviates from A05 standards | Artifacts stored in non-canonical locations | Restructure folders; update all affected file paths in SKILL-REGISTRY.md |
| No branch protection on main | Direct commits to main without review | Enable branch protection rules immediately |
| Credentials stored in repository | Secret or token committed to repo | Remove immediately; rotate credentials; update .gitignore; audit commit history |
| Tool integration has no named owner | Integration breaks with no clear responsibility | Assign owner in A03; establish maintenance schedule |
| Team members cannot access repository | Access control misconfigured | Review and correct permissions; re-verify access for all roles |
| MCP server not registered | AI agent cannot locate skill or artifact files | Register tool manifest; define read/write scope; test connection |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | Prerequisite gate check | SKL-01-01 and SKL-01-02 complete; A05 Governance and Document Control sections baselined | Either prerequisite incomplete |
| T-2 | Folder structure verified | All required folders exist and match A05 naming conventions | Any required folder missing or incorrectly named |
| T-3 | Version control configured | Branch naming, commit conventions, and merge rules documented and active | Version control settings undocumented or unenforced |
| T-4 | Branch protection active | Main branch has protection rules (review required, no force-push) | Main branch unprotected |
| T-5 | .gitignore configured | .gitignore excludes temp files, credentials, and local environment files | .gitignore absent or misconfigured |
| T-6 | Access controls implemented | All roles have correct permissions per A05 governance RACI | Any role with incorrect or missing permissions |
| T-7 | Tool integrations documented | Every active integration has tool name, owner, connection type, and data flow recorded in A03 | Any integration without an owner or undocumented |
| T-8 | Readiness checklist passed | All Step 6 checklist items confirmed | Any checklist item failed or skipped |
| T-9 | A03 baselined and distributed | A03 has version, baseline date, sign-off; distributed to all team members | A03 in draft or not distributed |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.1.6.4 Manage Project Knowledge · Guide §2.6 Resource Management · Repository Operating Rules*  
*Source type: PMI-derived*  
*Owner: PMO / Repository administrator*  
*Approval authority: PMO lead or PM*
