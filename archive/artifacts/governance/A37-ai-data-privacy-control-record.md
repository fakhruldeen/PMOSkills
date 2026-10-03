# A37 — AI, Data, and Privacy Control Record

## Artifact Metadata

| Field | Value |
|---|---|
| **Artifact ID** | A37 |
| **Artifact Name** | AI, Data, and Privacy Control Record |
| **Artifact Type** | Digital risk and compliance artifact |
| **Source Type** | synthesis |
| **Governance Layer** | Project Governance · PMO Governance |
| **Version** | 1.0.5 |
| **Status** | Active |

---

## Purpose

Document AI-related, data-security, privacy, and prompt/data-handling controls where digital solutions or suppliers create elevated exposure. Ensures responsible handling of AI, data, and privacy risks within the project and its supply chain.

---

## When Used

- When the project, product, or supplier environment involves AI, sensitive data, automated decision support, or regulated digital processing
- Not created for projects with no AI or sensitive-data exposure (see Waste Test)

---

## PMI Authority

| Field | Detail |
|---|---|
| **Primary PMI Source** | PMBOK8 |
| **Exact Section** | Appendix X3 AI-related guidance; Appendix X4 procurement-related guidance; AI-Essentials; AI-Projects |
| **Purpose of Citation** | Support responsible handling of AI, data, privacy, and supplier digital-control risks |
| **Source Type** | synthesis |

---

## Performance Domains

Governance · Risk · Stakeholders · Resources

## Focus Areas

Planning · Monitoring and Controlling · Closing

## Related Processes

- Plan Risk Management
- Identify Risks
- Procure Project Resources
- Monitor Risks
- Assess and Implement Changes

---

## Inputs

- A19 Risk Management Record (AI and data risk entries)
- A31 Procurement and Supplier Management Record
- A32 Supplier Evaluation and Award Decision Record
- Organizational security, privacy, and data governance policies
- Applicable regulatory frameworks (e.g., GDPR, AI Act, sector-specific regulation)

---

## Outputs

- Control requirements per use case
- Compliance checks and evidence
- Decision restrictions for automated or AI-assisted actions
- Supplier or project exceptions with approved conditions

---

## Core Fields

| Field | Description |
|---|---|
| Use case or exposure area | Specific AI, data, or digital scenario creating risk |
| Data classification | Sensitivity level of data involved (public, internal, confidential, regulated) |
| Privacy and security controls | Technical and procedural controls applied |
| AI-specific controls | Bias checks, explainability requirements, human-in-the-loop rules, model monitoring |
| Supplier obligations | Contractual or attestation requirements placed on suppliers |
| Exception or escalation path | Approved exception conditions and escalation route |

---

## Ownership and Authority

| Role | Holder |
|---|---|
| **Owner** | Project manager with security, data, or compliance support as needed |
| **Approval Authority** | Designated security, privacy, compliance, or sponsor authority according to organizational policy |
| **Escalation Trigger** | Sensitive data, AI risk, or regulatory exposure requires specialist approval |

---

## Tailoring Guidance

Do not create this artifact unless digital, AI, or data exposure justifies it. When needed, keep one integrated record instead of separate privacy log, bias checklist, and prompt-sanitization register — unless regulation explicitly requires separation. The record should be proportionate to the actual exposure level.

---

## Waste Test

**Fail if:** AI control checklists are maintained for projects with no AI or sensitive-data exposure. This artifact is conditional — creation without a genuine digital risk trigger is pure waste.

---

## Migration Map (v1.0.2 → v1.0.5)

| Legacy Item | Legacy Name | Action |
|---|---|---|
| 162 | AI Algorithmic Accountability Transparency Charter | MERGE TO A37 (via A19) |
| 163 | AI Model Bias, Fairness & Robustness Auditing Ledger | MERGE TO A37 (via A19) |
| 164 | AI Model Performance Drift Monitoring Dashboard | MERGE TO A37 (via A19) |
| 165 | Generative AI Prompt Security Payload Sanitization Ledger | MERGE TO A37 (via A19) |
| 166 | Model Training Fine-Tuning Lifecycle Canvas | MERGE TO A37 (via A19) |
| 167 | AI-Assisted Workflow Integration Dependency Tracker | MERGE TO A37 (via A19) |
| 168 | Corporate Algorithmic Impact Assessment Form | MERGE TO A37 (via A19) |
| 235 | Supplier Data Security Cloud Privacy Attestation Form | MERGE TO A37 |

---

## Related Artifacts

| Artifact | Relationship |
|---|---|
| A19 Risk Management Record | AI and data risks are identified and tracked in A19; A37 defines the controls |
| A31 Procurement and Supplier Management Record | Supplier digital obligations flow from A37 into A31 |
| A33 Supplier Change, Claim, and Compliance Record | Supplier AI/data compliance findings route to A33 |
| A06 Tailoring Decision Record | Tailoring may activate or waive this artifact based on project context |
