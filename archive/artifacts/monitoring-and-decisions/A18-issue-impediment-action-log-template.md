---
artifact_id: A18
name: Issue, Impediment, and Action Log
template_version: 1.0.0
status: Template · Active
category: Execution and Delivery Control
authority: "PMBOK8 Guide §2.1.6.3 Manage Project Execution; Lexicon — issue, action item"
source_type: synthesis
file_path: artifacts/monitoring-and-decisions/A18-issue-impediment-action-log-template.md
---

# A18 — Issue, Impediment, and Action Log Template

**Artifact ID:** A18  
**Artifact Name:** Issue, Impediment, and Action Log  
**Template Version:** 1.0.0  
**Status:** Template · Active  
**Authority:** PMBOK8 Guide §2.1.6.3 Manage Project Execution; Lexicon — issue, action item  
**Source Type:** synthesis  
**File Path:** `artifacts/monitoring-and-decisions/A18-issue-impediment-action-log-template.md`

> **Usage note:** Open this log as soon as project execution begins (Pack 04 / SKL-04-01). Log every issue, impediment, and action item within 24 hours of identification. Items requiring formal change authority action must be escalated to A12 — this log feeds A12, it does not replace it. Archive resolved items in Section 5 to keep the active log lean. This log is a continuous execution artifact — it is never 'complete' until project closure.

---

## Section 1 — Log Header

| Field | Value |
|---|---|
| **Project Name** | [FIELD: Project name] |
| **Project ID** | [FIELD: Project ID] |
| **Project Manager** | [FIELD: Project manager name] |
| **Log Version** | [FIELD: e.g. 1.0] |
| **Last Updated** | [FIELD: YYYY-MM-DD] |
| **Reporting Period** | [FIELD: e.g. 2026-05-01 to 2026-05-31] |
| **Open Items Count** | [FIELD: Count of items with Status = Open or In Progress] |
| **Escalated Items Count** | [FIELD: Count of items with Status = Escalated] |
| **Linked Artifacts** | A12 · A17 · A19 · A25 · A28 |

---

## Section 2 — Active Issue, Impediment, and Action Register

Log every unresolved item here. One row per item. Archive to Section 5 when closed.

| ID | Type | Description | Raised By | Date Raised | Priority | Impact Domain | Owner | Due Date | Status | Resolution / Note | Escalated to A12? |
|---|---|---|---|---|---|---|---|---|---|---|---|
| I-001 | [FIELD: Type] | [FIELD: Clear description of the issue, impediment, or action item] | [FIELD: Name or role who raised this item] | [FIELD: YYYY-MM-DD] | [FIELD: Priority] | [FIELD: Impact Domain] | [FIELD: Name or role responsible for resolution] | [FIELD: YYYY-MM-DD] | [FIELD: Status] | [FIELD: Current resolution notes or outcome if resolved] | [FIELD: Yes — see Section 3 / No] |
| I-002 | [FIELD: Type] | [FIELD: Clear description of the issue, impediment, or action item] | [FIELD: Name or role who raised this item] | [FIELD: YYYY-MM-DD] | [FIELD: Priority] | [FIELD: Impact Domain] | [FIELD: Name or role responsible for resolution] | [FIELD: YYYY-MM-DD] | [FIELD: Status] | [FIELD: Current resolution notes or outcome if resolved] | [FIELD: Yes — see Section 3 / No] |
| I-003 | [FIELD: Type] | [FIELD: Clear description of the issue, impediment, or action item] | [FIELD: Name or role who raised this item] | [FIELD: YYYY-MM-DD] | [FIELD: Priority] | [FIELD: Impact Domain] | [FIELD: Name or role responsible for resolution] | [FIELD: YYYY-MM-DD] | [FIELD: Status] | [FIELD: Current resolution notes or outcome if resolved] | [FIELD: Yes — see Section 3 / No] |
| I-004 | [FIELD: Type] | [FIELD: Clear description of the issue, impediment, or action item] | [FIELD: Name or role who raised this item] | [FIELD: YYYY-MM-DD] | [FIELD: Priority] | [FIELD: Impact Domain] | [FIELD: Name or role responsible for resolution] | [FIELD: YYYY-MM-DD] | [FIELD: Status] | [FIELD: Current resolution notes or outcome if resolved] | [FIELD: Yes — see Section 3 / No] |
| I-005 | [FIELD: Type] | [FIELD: Clear description of the issue, impediment, or action item] | [FIELD: Name or role who raised this item] | [FIELD: YYYY-MM-DD] | [FIELD: Priority] | [FIELD: Impact Domain] | [FIELD: Name or role responsible for resolution] | [FIELD: YYYY-MM-DD] | [FIELD: Status] | [FIELD: Current resolution notes or outcome if resolved] | [FIELD: Yes — see Section 3 / No] |

> **Type values:** Issue / Impediment / Action Item / Decision Required  
> **Priority values:** Critical / High / Medium / Low  
> **Impact Domain values:** Scope / Schedule / Finance / Risk / Resources / Stakeholders / Quality / Team  
> **Status values:** Open / In Progress / Resolved / Escalated / Closed

---

## Section 3 — Escalation Register

Record items escalated from Section 2 to A12 for formal decision authority.

| A18 ID | A12 Reference | Escalation Date | Escalation Reason | Decision Authority | Resolution Date | Outcome |
|---|---|---|---|---|---|---|
| [FIELD: A18 item ID from Section 2] | [FIELD: A12 change request or decision record reference number] | [FIELD: YYYY-MM-DD] | [FIELD: Why this item requires formal change authority action beyond PM discretion] | [FIELD: Role or body with decision authority — e.g. Change Control Board, Sponsor] | [FIELD: YYYY-MM-DD or Pending] | [FIELD: Decision or resolution reached through A12] |
| [FIELD: A18 item ID from Section 2] | [FIELD: A12 reference] | [FIELD: YYYY-MM-DD] | [FIELD: Escalation reason] | [FIELD: Decision authority] | [FIELD: YYYY-MM-DD or Pending] | [FIELD: Outcome] |
| [FIELD: A18 item ID from Section 2] | [FIELD: A12 reference] | [FIELD: YYYY-MM-DD] | [FIELD: Escalation reason] | [FIELD: Decision authority] | [FIELD: YYYY-MM-DD or Pending] | [FIELD: Outcome] |

---

## Section 4 — Operating Rules

1. Every unresolved issue, impediment, or action item must be logged before the next status cycle.
2. Any item requiring a formal change authority decision must be escalated to A12 and cross-referenced in Section 3.
3. Items resolved within the PM's authority do not require A12 escalation — record resolution in Section 2.
4. A18 entries feed A17 (performance reporting) and A19 if risk-related.
5. For adaptive approaches, link each impediment to the sprint or iteration in which it was raised and resolved.

---

## Section 5 — Closed Items Archive

Move fully resolved and closed items here to keep Section 2 manageable.

| ID | Type | Description | Resolution | Closed Date | Owner |
|---|---|---|---|---|---|
| [FIELD: Original A18 ID] | [FIELD: Type] | [FIELD: Original description of the item] | [FIELD: How the item was resolved — action taken and outcome] | [FIELD: YYYY-MM-DD] | [FIELD: Name or role that owned resolution] |
| [FIELD: Original A18 ID] | [FIELD: Type] | [FIELD: Original description of the item] | [FIELD: Resolution summary] | [FIELD: YYYY-MM-DD] | [FIELD: Owner] |
| [FIELD: Original A18 ID] | [FIELD: Type] | [FIELD: Original description of the item] | [FIELD: Resolution summary] | [FIELD: YYYY-MM-DD] | [FIELD: Owner] |

---

## Section 6 — Review and Update Log

| Date | Updated By | Trigger | Key Changes |
|---|---|---|---|
| [FIELD: YYYY-MM-DD] | [FIELD: Name] | [FIELD: What triggered this update — e.g. status cycle, phase gate, escalation, item closure] | [FIELD: Summary of what changed in this update] |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch 3 | Initial template |

---

*Template for: A18 — Issue, Impediment, and Action Log*  
*Authority: PMBOK8 Guide §2.1.6.3; Lexicon — issue, action item*  
*See definition file: `artifacts/monitoring-and-decisions/A18-Issue-Impediment-and-Action-Log.md`*
