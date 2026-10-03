# A34 — Information Retention and Records Control Record

## Artifact Metadata

| Field | Value |
|---|---|
| **Artifact ID** | A34 |
| **Artifact Name** | Information Retention and Records Control Record |
| **Artifact Type** | Records management artifact |
| **Source Type** | synthesis |
| **Governance Layer** | Project Governance · PMO Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Define retention, storage, access, archival, and disposal controls for project records. Provides a single controlled reference for how project information is managed from creation through disposal.

---

## When Used

- Established during planning when records obligations are defined
- Maintained through closure when archival actions are completed
- Referenced whenever records access, retention periods, or disposal decisions are required

---

## PMI Authority

| Field | Detail |
|---|---|
| **Primary PMI Source** | PMBOK8 |
| **Exact Section** | Table 2-1 Plan Communications Management; Close Project or Phase; OPM-Standard |
| **Purpose of Citation** | Support controlled retention and retrieval of project information as part of organizational project management practice |
| **Source Type** | synthesis |

---

## Performance Domains

Governance · Stakeholders

## Focus Areas

Planning · Closing

## Related Processes

- Plan Communications Management
- Close Project or Phase

---

## Inputs

- A28 Communications and Reporting Record (records inventory)
- Organizational compliance and legal retention requirements
- Regulatory obligations applicable to the project
- A24 Closure and Benefits Transition Record (archival trigger)

---

## Outputs

- Retention schedule per record category
- Archival location and access constraints
- Disposal triggers and authorization
- Compliance evidence that records obligations are met

---

## Core Fields

| Field | Description |
|---|---|
| Record category | Type of record (e.g., contracts, baselines, risk records, communications) |
| Retention rule | Minimum retention period and regulatory basis if applicable |
| Storage location | System, repository, or physical location |
| Access level | Who may access: public, team, restricted, confidential |
| Archival owner | Role responsible for long-term custody |
| Disposal trigger | Event or date that initiates disposal or review |

---

## Ownership and Authority

| Role | Holder |
|---|---|
| **Owner** | Project manager or records owner as assigned |
| **Approval Authority** | Records-management authority, PMO, or compliance owner according to organizational policy |
| **Escalation Trigger** | Retention or access rules affect compliance obligations or legal exposure |

---

## Tailoring Guidance

Keep as one control record unless distinct legal jurisdictions require jurisdiction-specific schedules. For most projects, a single table with record categories, retention periods, and storage references is sufficient. Avoid embedding retention rules in every individual artifact template — one central record is the canonical reference.

---

## Waste Test

**Fail if:** The same retention rules are copied verbatim into every artifact template or maintained in separate logs per department without producing distinct compliance value.

---

## Migration Map (v1.0.2 → v1.0.5)

| Legacy Item | Legacy Name | Action |
|---|---|---|
| 208 | Project Information Archival, Retrieval & Retention Log | MERGE TO A34 |

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A24 Closure and Benefits Transition Record | Closure triggers archival actions defined in A34 |
| A28 Communications and Reporting Record | Identifies what records exist and need coverage in A34 |
| A05 Context Register | Organizational policies and regulatory constraints inform A34 content |
