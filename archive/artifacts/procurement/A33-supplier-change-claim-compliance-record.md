---
artifact_id: A33
artifact_name: Supplier Change, Claim, and Compliance Record
artifact_type: Supplier administration and exception artifact
source_type: synthesis
governance_layer: Project Governance
version: "1.0.5"
status: Active
performance_domains:
  - Governance
  - Finance
  - Risk
  - Scope
  - Schedule
focus_areas:
  - Monitoring and Controlling
  - Closing
linked_artifacts:
  - A31
  - A32
  - A12
  - A19
file_path: "artifacts/procurement/A33-supplier-change-claim-compliance-record.md"
---

# A33 — Supplier Change, Claim, and Compliance Record

## Artifact Metadata

| Field | Value |
|---|---|
| **Artifact ID** | A33 |
| **Artifact Name** | Supplier Change, Claim, and Compliance Record |
| **Artifact Type** | Supplier administration and exception artifact |
| **Source Type** | synthesis |
| **Governance Layer** | Project Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Capture supplier-related changes, disputes, claims, compliance checks, inbound acceptance findings, and resolution decisions in one auditable record throughout supplier delivery and during closing.

---

## When Used

- Throughout active supplier delivery when changes, claims, or compliance issues arise
- During acceptance testing of supplier deliverables
- At contract closeout

---

## PMI Authority

| Field | Detail |
|---|---|
| **Primary PMI Source** | PMBOK8 |
| **Exact Section** | Appendix X4 procurement-related guidance; Table 2-1 Assess and Implement Changes; Close Project or Phase |
| **Purpose of Citation** | Align supplier change and claim handling with PMI-aligned control and closure practices |
| **Source Type** | synthesis |

---

## Performance Domains

Governance · Finance · Risk · Scope · Schedule

## Focus Areas

Monitoring and Controlling · Closing

## Related Processes

- Assess and Implement Changes
- Monitor and Control Project Performance
- Close Project or Phase

---

## Inputs

- A31 Procurement and Supplier Management Record
- Change requests from supplier
- Claims or dispute notices
- Compliance check findings
- Acceptance inspection results

---

## Outputs

- Supplier decisions and approvals
- Approved contract adjustments
- Claim resolutions
- Compliance evidence for audit
- Closeout action items

---

## Core Fields

| Field | Description |
|---|---|
| Supplier event or issue | Brief description of the change, claim, or compliance matter |
| Type of event | Change order / Claim / Dispute / Compliance finding / Acceptance finding |
| Impact summary | Effect on cost, schedule, scope, or quality |
| Compliance finding | Specific compliance requirement involved (if applicable) |
| Decision authority | Role authorized to resolve this event per threshold |
| Resolution | Decision made, conditions, adjustments |
| Follow-up action | Outstanding items, owner, due date |

---

## Ownership and Authority

| Role | Holder |
|---|---|
| **Owner** | Project manager, contract administrator, or procurement lead |
| **Approval Authority** | Procurement authority, legal authority, sponsor, or quality authority depending on issue type and threshold |
| **Escalation Trigger** | Claim, dispute, compliance breach, or supplier change exceeds delegated limits |

---

## Tailoring Guidance

Use one record for supplier-side change, claim, and compliance history. Separate registers are justified only if legal or audit requirements specifically demand them.

---

## Waste Test

**Fail if:** Change orders, claims logs, and supplier acceptance checklists are maintained as separate files with the same case identifiers and decision fields.

---

## Migration Map (v1.0.2 → v1.0.5)

| Legacy Item | Legacy Name | Action |
|---|---|---|
| 237 | Procurement Change Order Tracking Ledger | MERGE TO A33 |
| 238 | Vendor Claims, Disputes & Resolutions Log | MERGE TO A33 |
| 239 | Supplier Release Cadence Quality Control Checklist | MERGE TO A33 |
| 272 | Procurement Change Order Tracking Ledger (duplicate) | MERGE TO A33 |
| 273 | Vendor Claims, Disputes & Resolutions Log (duplicate) | MERGE TO A33 |
| 274 | Supplier Release Cadence Quality Control Checklist (duplicate) | MERGE TO A33 |

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A31 Procurement and Supplier Management Record | Planning and ongoing administration — A33 captures exceptions |
| A32 Supplier Evaluation and Award Decision Record | Pre-award — A33 is post-award administration |
| A12 Change and Exception Decision Log | Project-level change log; supplier-specific events route to A33 |
| A19 Risk Management Record | Risk triggers may generate A33 entries and vice versa |

---

## Change Log

| Version | Date | Change |
|---|---|---|
| 1.0.5 | 2026-05-31 | Canonical definition |
| 1.0.6 | 2026-06-01 | Migrated from artifacts/extended-procurement/ to artifacts/procurement/ (P0-0I) |
