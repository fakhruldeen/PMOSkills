---
artifact_id: A03
name: Repository and Tool Configuration Record
template_version: 1.0.0
status: Template · Active
category: Resources
authority: "PMBOK8 Guide §2.1.6.4 Manage Project Knowledge; §2.6 Resource Performance Domain"
source_type: PMI-derived
file_path: artifacts/resources/A03-repository-tool-configuration-record-template.md
---

# A03 — Repository and Tool Configuration Record Template

**Artifact ID:** A03  
**Artifact Name:** Repository and Tool Configuration Record  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide §2.1.6.4 Manage Project Knowledge; §2.6 Resource Performance Domain  
**Source Type:** PMI-derived  
**File Path:** `artifacts/resources/A03-repository-tool-configuration-record-template.md`

> **Usage note:** Create this record during Organizational Setup (SKL-01-03) before any project work begins. The environment readiness checklist (Section 5) must be 100% complete before Pack 02 skills run. Update whenever tool configuration, access controls, or repository structure changes — record every change in Section 6. This record provides the EEF / tool environment data for A05 — Context Register.

---

## Section 1 — Record Header

| Field | Value |
|---|---|
| **Project Name** | [FIELD: Project name] |
| **Project ID** | [FIELD: Project ID] |
| **Repository Name / URL** | [FIELD: Repository name and URL] |
| **Repository Administrator** | [FIELD: Name of the person responsible for administering this repository] |
| **Configuration Version** | [FIELD: e.g. 1.0] |
| **Last Updated** | [FIELD: YYYY-MM-DD] |
| **Status** | [FIELD: select from Draft / Active / Archived] |

---

## Section 2 — Repository Structure

Define the canonical folder structure and file naming conventions for this project's repository.

### 2.1 — Folder Structure

| Folder Path | Purpose | Naming Convention | Owner |
|---|---|---|---|
| [FIELD: e.g. /skills/] | [FIELD: What this folder contains and its role in the project] | [FIELD: Naming convention for files in this folder] | [FIELD: Role or name responsible for this folder] |
| [FIELD: e.g. /artifacts/] | [FIELD: What this folder contains and its role in the project] | [FIELD: Naming convention for files in this folder] | [FIELD: Role or name responsible for this folder] |
| [FIELD: e.g. /docs/] | [FIELD: What this folder contains and its role in the project] | [FIELD: Naming convention for files in this folder] | [FIELD: Role or name responsible for this folder] |
| [FIELD: e.g. /reference/] | [FIELD: What this folder contains and its role in the project] | [FIELD: Naming convention for files in this folder] | [FIELD: Role or name responsible for this folder] |
| [FIELD: e.g. /tests/] | [FIELD: What this folder contains and its role in the project] | [FIELD: Naming convention for files in this folder] | [FIELD: Role or name responsible for this folder] |

### 2.2 — File Naming Conventions

| File Type | Naming Pattern | Example |
|---|---|---|
| [FIELD: File type — e.g. Artifact file] | [FIELD: Pattern — e.g. A##-descriptive-name.md] | [FIELD: example for this project] |
| [FIELD: File type — e.g. Skill file] | [FIELD: Pattern — e.g. SKL-##-##-descriptive-name.md] | [FIELD: example for this project] |
| [FIELD: File type — e.g. Template file] | [FIELD: Pattern — e.g. A##-descriptive-name-template.md] | [FIELD: example for this project] |
| [FIELD: File type — e.g. Reference document] | [FIELD: Pattern — e.g. REF-descriptive-name.md] | [FIELD: example for this project] |

---

## Section 3 — Version Control Configuration

| Field | Value |
|---|---|
| **Version Control System** | [FIELD: e.g., Git / GitHub / GitLab / Bitbucket] |
| **Default Branch Name** | [FIELD: e.g., main / master / trunk] |
| **Branch Naming Convention** | [FIELD: e.g., feat/, fix/, docs/, test/] |
| **Commit Message Format** | [FIELD: reference to CONTRIBUTING.md or describe convention] |
| **Branch Protection Rules** | [FIELD: describe protection rules on the default branch] |
| **Merge Strategy** | [FIELD: e.g., merge commit / squash / rebase] |
| **Tag / Release Convention** | [FIELD: describe semantic versioning or tagging approach] |

---

## Section 4 — Access Control Matrix

Define permissions per role. Apply principle of least privilege.

| Role | Repository Root | Skills/ | Artifacts/ | Reference/ | Admin Settings |
|---|---|---|---|---|---|
| **Project Manager** | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] |
| **Team Member** | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] |
| **Reviewer** | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] |
| **External Stakeholder** | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] |
| **AI Agent / Automation** | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] | [FIELD: select from Read / Read-Write / Admin / None] |

---

## Section 5 — Tool Integration Register

Record all tools integrated with the project repository or workflow.

> **Integration Type values:** Version Control / CI/CD / AI Agent Interface / Scheduling / Communication / Documentation / Security  
> **Configuration Status values:** Configured / Pending / Not Required

| Tool Name | Integration Type | Owner | Configuration Status | Notes |
|---|---|---|---|---|
| [FIELD: Tool name] | [FIELD: select from Integration Type values above] | [FIELD: Role or name responsible for this integration] | [FIELD: select from Configuration Status values above] | [FIELD: Any relevant notes, limitations, or configuration details] |
| [FIELD: Tool name] | [FIELD: select from Integration Type values above] | [FIELD: Role or name responsible for this integration] | [FIELD: select from Configuration Status values above] | [FIELD: Any relevant notes, limitations, or configuration details] |
| [FIELD: Tool name] | [FIELD: select from Integration Type values above] | [FIELD: Role or name responsible for this integration] | [FIELD: select from Configuration Status values above] | [FIELD: Any relevant notes, limitations, or configuration details] |
| [FIELD: Tool name] | [FIELD: select from Integration Type values above] | [FIELD: Role or name responsible for this integration] | [FIELD: select from Configuration Status values above] | [FIELD: Any relevant notes, limitations, or configuration details] |
| [FIELD: Tool name] | [FIELD: select from Integration Type values above] | [FIELD: Role or name responsible for this integration] | [FIELD: select from Configuration Status values above] | [FIELD: Any relevant notes, limitations, or configuration details] |
| [FIELD: Tool name] | [FIELD: select from Integration Type values above] | [FIELD: Role or name responsible for this integration] | [FIELD: select from Configuration Status values above] | [FIELD: Any relevant notes, limitations, or configuration details] |

---

## Section 6 — Environment Readiness Checklist

All items must be checked before Pack 02 (Initiating) skills run. Record the verifier and date for each item.

| Check Item | Required By | Verified By | Verification Date | Status |
|---|---|---|---|---|
| Repository created and folder structure verified against Section 2 | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| Default branch created and branch protection rules applied per Section 3 | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| All team members have correct access permissions per Section 4 | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| Commit message convention documented and communicated to team | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| Tool integrations in Section 5 configured and tested | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| A05 Context Register EEF/tool section updated with reference to this record | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| Repository administrator contact documented and accessible | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |
| Naming conventions confirmed against Section 2.2 | SKL-01-03 | [FIELD: Name or role] | [FIELD: YYYY-MM-DD] | [FIELD: select from Complete / Incomplete / Not Applicable] |

---

## Section 7 — Change Log

Record every change to repository configuration, access controls, or tool integrations.

| Version | Date | Changed By | Change Description | Approved By |
|---|---|---|---|---|
| [FIELD: e.g. 1.1] | [FIELD: YYYY-MM-DD] | [FIELD: Name or role] | [FIELD: Description of what changed and why] | [FIELD: Name or role — PM approval required per T1 authority] |
| [FIELD: Version] | [FIELD: YYYY-MM-DD] | [FIELD: Name or role] | [FIELD: Description of what changed and why] | [FIELD: Name or role] |
| [FIELD: Version] | [FIELD: YYYY-MM-DD] | [FIELD: Name or role] | [FIELD: Description of what changed and why] | [FIELD: Name or role] |

---

## Template Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch 3 | Initial template |

---

*Template for: A03 — Repository and Tool Configuration Record*  
*Authority: PMBOK8 Guide §2.1.6.4; §2.6 Resource Performance Domain*  
*See definition file: `artifacts/resources/A03-repository-tool-configuration-record.md`*
