# A26 — Resource Capacity and Acquisition Record

## Artifact Metadata

| Field | Value |
|---|---|
| **Artifact ID** | A26 |
| **Artifact Name** | Resource Capacity and Acquisition Record |
| **Artifact Type** | Resource planning and acquisition artifact |
| **Source Type** | synthesis |
| **Governance Layer** | Project Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Integrate staffing needs, shared capacity, physical resource requirements, acquisition timing, and key allocation constraints into one managed record. Provides the project's resource baseline and control reference throughout planning, execution, and monitoring.

---

## When Used

- During planning when resource commitments are established
- Maintained whenever resource commitments, conflicts, or acquisition decisions materially change
- Referenced during monitoring to track capacity and release

---

## PMI Authority

| Field | Detail |
|---|---|
| **Primary PMI Source** | PMBOK8 |
| **Exact Section** | Guide, Resources Performance Domain 2.7; Table 2-1 Plan Resource Management, Acquire Resources, Lead the Team, Monitor and Control Resourcing |
| **Purpose of Citation** | Support resourcing decisions, acquisition planning, and capacity control |
| **Source Type** | synthesis |

---

## Performance Domains

Resources · Schedule · Finance · Governance

## Focus Areas

Planning · Executing · Monitoring and Controlling

## Related Processes

- Plan Resource Management
- Acquire Resources
- Monitor and Control Resourcing

---

## Inputs

- A08 Scope and Requirements Decision Record
- A15 Schedule Model and Baseline Record
- A16 Financial Management and Cost Baseline Record
- A22 Portfolio Interdependency Record (shared-resource conflicts)
- Stakeholder needs and organizational capacity constraints

---

## Outputs

- Staffing and acquisition plan
- Shared-resource conflict visibility
- Resource release schedule
- Escalation logic for capacity conflicts

---

## Core Fields

| Field | Description |
|---|---|
| Required roles and resources | Staff, equipment, materials, or facilities needed |
| Timing and duration | When each resource is needed and for how long |
| Acquisition path | Internal assignment, external hire, procurement, or shared pool |
| Shared-resource conflicts | Cross-project competition for the same resource |
| Allocation assumptions | Basis for utilization rates and availability estimates |
| Release criteria | Conditions under which each resource is released |

---

## Ownership and Authority

| Role | Holder |
|---|---|
| **Owner** | Project manager with functional managers or resource owners as needed |
| **Approval Authority** | Role-based according to staffing authority, procurement limits, and shared-capacity thresholds |
| **Escalation Trigger** | Capacity conflict, staffing threshold, or acquisition threshold is crossed |

---

## Tailoring Guidance

Merge staffing plan, allocation ledger, and equipment setup notes into one record unless different control owners require separation. For small, single-team projects, this record may be a simple table within the integrated planning record (A14). Expand to a full standalone record when shared-resource conflicts or procurement thresholds require formal management.

---

## Waste Test

**Fail if:** Multiple resource ledgers are maintained and manually reconciled every cycle without producing distinct control decisions. One integrated record is the default baseline.

---

## Migration Map (v1.0.2 → v1.0.5)

| Legacy Item | Legacy Name | Action |
|---|---|---|
| 182 | Cross-Functional Team Skill Inventory Versatility Matrix | MERGE TO A26 |
| 183 | Team Allocation Shared Resource Utilization Ledger | MERGE TO A26 |
| 185 | Resource Management Plan Template | MERGE TO A26 |
| 186 | Team Performance Space Resource Calibration Matrix | MERGE TO A26 |

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A25 Team Operating and Responsibility Record | A25 defines roles and responsibilities; A26 manages capacity and acquisition |
| A15 Schedule Model and Baseline Record | Resource availability directly affects schedule feasibility |
| A22 Portfolio Interdependency Record | Shared-resource conflicts surface at portfolio layer and feed into A26 |
| A27 Team Health and Development Record | Team capability gaps identified in A27 may require A26 acquisition updates |
