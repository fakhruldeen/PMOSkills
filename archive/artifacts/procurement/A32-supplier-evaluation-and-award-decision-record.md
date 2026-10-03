# A32 — Supplier Evaluation and Award Decision Record

## Artifact metadata

| Field | Value |
|---|---|
| **Artifact ID** | A32 |
| **Artifact name** | Supplier Evaluation and Award Decision Record |
| **Artifact family** | Procurement and digital controls |
| **Artifact type** | Procurement decision artifact |
| **Source type** | synthesis |
| **Governance layer** | Project Governance / Portfolio Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Document the supplier evaluation process, scoring rationale, and award recommendation in one auditable record that supports the contract award decision and satisfies procurement governance requirements.

---

## When used

After proposals or bids are received and before contract award. Also used for sole-source justification decisions where competitive evaluation is not conducted.

---

## PMI authority

| Field | Detail |
|---|---|
| **Primary PMI source** | PMBOK8 |
| **Exact section** | Guide, Table 2-1 Conduct Procurements; Guide, Resources Performance Domain 2.6 (physical resources); Lexicon — source selection, proposal evaluation |
| **Purpose of citation** | Align supplier evaluation and award with PMBOK 8 procurement processes and establish an auditable selection record. |

---

## Performance domains and focus areas

- **Performance domains:** Governance, Resources, Finance, Risk
- **Focus areas:** Executing
- **Related processes:** Conduct Procurements

---

## Inputs and outputs

### Inputs
- Procurement and supplier management record (A31) — evaluation criteria and weighting
- Received proposals, bids, or quotations
- Source selection plan or evaluation committee composition
- Reference checks, due diligence findings, and capability assessments
- Financial analysis of bid pricing and total cost of ownership

### Outputs
- Evaluation scores and rationale by supplier
- Ranked recommendation
- Award decision and authorization
- Debrief preparation notes (for unsuccessful bidders when required)
- Input to contract formation and A33 (Supplier Change, Claim, and Compliance Record)

---

## Core fields

| Field | Description |
|---|---|
| Procurement reference | Identifier linking to the A31 procurement record and solicitation |
| Evaluation criteria | Criteria used (technical, commercial, risk, past performance, etc.) |
| Weighting | Weight assigned to each criterion |
| Suppliers evaluated | Names or IDs of all suppliers in the evaluation |
| Scores by criterion | Individual scores for each supplier against each criterion |
| Aggregate score | Weighted total per supplier |
| Risk and compliance flags | Any red flags, qualifications, or compliance concerns noted |
| Recommendation | Recommended supplier with rationale |
| Award decision | Approved award, authority, and date |
| Sole-source justification | Required when competitive process is not used |
| Debrief notes | Summary for unsuccessful supplier feedback when required |

---

## Governance

| Field | Detail |
|---|---|
| **Owner** | Procurement lead |
| **Approval authority** | Procurement board, sponsor, or contract authority |
| **Escalation trigger** | Award threshold, regulated sourcing rules, enterprise supplier exposure, or legal review requirement applies |

---

## Tailoring guidance

- Use a formal scoring matrix when multiple competitive bids are evaluated; a simplified record is acceptable for low-value or low-risk procurements.
- For sole-source procurement, the justification field is mandatory and must be consistent with organizational procurement policy.
- Retain all evaluation evidence (proposals, scoring sheets, committee notes) as supporting records — do not embed full proposal content in this record.

---

## Waste test

Fail if supplier pre-qualification scoring, proposal evaluation, and award certification are maintained as three separate unlinked forms with no single award decision record connecting evaluation evidence to the contract action.

---

## Notes

- Replaces and consolidates v1.0.2 Items 232 (Supplier Capability Pre-Qualification Scoring Grid) and 234 (Procurement Award Board Certification Form).
- Distinct from A31 (procurement planning and sourcing strategy) and A33 (supplier changes, claims, and compliance post-award).
- Source type is synthesis: PMBOK 8 provides the Conduct Procurements process basis; evaluation methodology is organization-defined within that frame.
