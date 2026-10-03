---
artifact_id: A37
name: AI, Data, and Privacy Control Record
template_version: "1.0.0"
status: "Template · Active"
category: Digital Risk and Compliance
authority: "PMBOK8 Appendix X3 AI-related guidance; Appendix X4 procurement-related guidance"
source_type: synthesis
file_path: artifacts/governance/A37-ai-data-privacy-control-record-template.md
---

## [A37] — AI, Data, and Privacy Control Record | Template

> **Usage note:** This is a blank template. Replace every `[FIELD: ...]` placeholder with project-specific content. Static rules, checklist items, and legends are pre-filled and must not be replaced with field placeholders. The Applicability Gate in Section 2 must be completed first — if none of the three triggers apply, record the rationale and file this document as "Not Applicable" with no further sections completed. Remove this usage note before publishing the completed record.

---

## Section 1 — Header / Identification

| Field | Value |
|---|---|
| Project Name | [FIELD: full project name] |
| Project Manager | [FIELD: name of the project manager] |
| Security / Privacy Authority | [FIELD: name and title of the individual or function accountable for security and privacy compliance on this project] |
| Review Date | [FIELD: date of this review, YYYY-MM-DD] |
| Document Version | [FIELD: e.g., 1.0] |
| Status | [FIELD: select from Draft / Active / Under Review / Superseded / Not Applicable] |
| Linked Artifacts | A19 — Risk Register; A31 — Procurement Register; A33 — Benefit Realisation Plan; A06 — Project Management Plan |

---

## Section 2 — Applicability Gate

Complete Section 2 only if AI, sensitive data, or regulated digital processing applies to this project. If none of the three triggers below are present, record the rationale and file this record as "Not Applicable."

| Trigger | Applies? | Notes |
|---|---|---|
| AI Exposure — the project develops, procures, deploys, or is significantly supported by AI or machine learning tools | [FIELD: select from Yes / No] | [FIELD: brief rationale or description of the AI exposure] |
| Sensitive Data Exposure — the project processes, stores, or transmits personal, health, financial, or commercially sensitive data | [FIELD: select from Yes / No] | [FIELD: brief rationale or description of the data exposure] |
| Regulated Processing — the project is subject to a legal, regulatory, or contractual data or AI governance obligation | [FIELD: select from Yes / No] | [FIELD: brief rationale, naming the applicable regulation or obligation] |
| Activation Rationale | [FIELD: overall statement explaining whether this record is activated (one or more triggers = Yes) or filed as Not Applicable (all triggers = No)] | |

---

## Section 3 — Use Case and Exposure Register

| Use Case ID | Use Case Description | Exposure Area | Data Classification | AI-Involved Y/N | Regulatory Framework | Inherent Risk Level |
|---|---|---|---|---|---|---|
| [FIELD: unique identifier, e.g., UC-001] | [FIELD: brief description of the use case or processing activity] | [FIELD: area of exposure, e.g., Customer Data Processing / AI-assisted Decision Support / Third-Party Data Sharing] | [FIELD: select from Public / Internal / Confidential / Regulated] | [FIELD: Yes / No] | [FIELD: applicable regulation, standard, or policy, e.g., GDPR, ISO 27001, or None] | [FIELD: select from Low / Medium / High / Critical] |
| [FIELD: unique identifier] | [FIELD: use case description] | [FIELD: exposure area] | [FIELD: select from Public / Internal / Confidential / Regulated] | [FIELD: Yes / No] | [FIELD: regulatory framework or None] | [FIELD: select from Low / Medium / High / Critical] |
| [FIELD: unique identifier] | [FIELD: use case description] | [FIELD: exposure area] | [FIELD: select from Public / Internal / Confidential / Regulated] | [FIELD: Yes / No] | [FIELD: regulatory framework or None] | [FIELD: select from Low / Medium / High / Critical] |

**Data Classification Definitions:**
- **Public** — no sensitivity; can be shared openly
- **Internal** — for organisational use; not for external distribution without approval
- **Confidential** — restricted to named roles; disclosure requires authorisation
- **Regulated** — subject to specific legal, regulatory, or contractual requirements governing its handling, storage, and transfer

**Risk Level Definitions:**
- **Low** — limited impact if breached or misused; standard controls sufficient
- **Medium** — moderate impact; enhanced controls and monitoring required
- **High** — significant legal, financial, or reputational impact; executive awareness required
- **Critical** — severe or irreversible impact; immediate escalation and specialist controls required

---

## Section 4 — Control Requirements

| Use Case ID | Privacy / Security Controls | AI-Specific Controls | Human-in-Loop Requirements | Supplier Obligations | Status |
|---|---|---|---|---|---|
| [FIELD: use case ID from Section 3] | [FIELD: privacy and security controls applied or required, e.g., data minimisation, encryption at rest and in transit, access logging] | [FIELD: AI-specific controls, e.g., model explainability, bias testing, model version control — or "N/A" if no AI involved] | [FIELD: human-in-loop requirements, e.g., human review required before AI-generated output is actioned — or "N/A" if no AI involved] | [FIELD: obligations placed on external suppliers or vendors, e.g., DPA signed, ISO 27001 certification required — or "None"] | [FIELD: select from Planned / In Place / Partially In Place / Not In Place / N/A] |
| [FIELD: use case ID] | [FIELD: privacy / security controls] | [FIELD: AI-specific controls or N/A] | [FIELD: human-in-loop requirements or N/A] | [FIELD: supplier obligations or None] | [FIELD: status] |
| [FIELD: use case ID] | [FIELD: privacy / security controls] | [FIELD: AI-specific controls or N/A] | [FIELD: human-in-loop requirements or N/A] | [FIELD: supplier obligations or None] | [FIELD: status] |

---

## Section 5 — Compliance Evidence Log

| Requirement | Evidence Type | Location | Owner | Last Verified | Next Review Date |
|---|---|---|---|---|---|
| [FIELD: specific compliance requirement, e.g., Data Processing Agreement signed with Supplier X] | [FIELD: type of evidence, e.g., Signed contract / Audit report / Certification / Test result / Attestation] | [FIELD: where the evidence is stored, e.g., SharePoint path, document reference, or register entry] | [FIELD: role or name accountable for maintaining this evidence] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] |
| [FIELD: compliance requirement] | [FIELD: evidence type] | [FIELD: location] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] |
| [FIELD: compliance requirement] | [FIELD: evidence type] | [FIELD: location] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] |
| [FIELD: compliance requirement] | [FIELD: evidence type] | [FIELD: location] | [FIELD: owner] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] |

---

## Section 6 — Exception and Escalation Register

| Exception ID | Use Case ID | Exception Description | Approved Conditions | Approval Authority | Approval Date | Review Date |
|---|---|---|---|---|---|---|
| [FIELD: unique exception identifier, e.g., EXC-001] | [FIELD: use case ID from Section 3] | [FIELD: description of the exception — what control or requirement is not being met, and why] | [FIELD: conditions under which the exception is approved, including any mitigating measures] | [FIELD: role or body that approved the exception] | [FIELD: YYYY-MM-DD] | [FIELD: date by which the exception must be reviewed or closed, YYYY-MM-DD] |
| [FIELD: unique exception identifier] | [FIELD: use case ID] | [FIELD: exception description] | [FIELD: approved conditions] | [FIELD: approval authority] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] |

---

## Section 7 — AI Control Rules

The following rules apply to all projects with AI Exposure = Yes (Section 2) and are mandatory for all team members working with AI tools or outputs:

1. No AI tool may be used to process Confidential or Regulated data unless it has been reviewed and explicitly approved by the Security / Privacy Authority named in Section 1.
2. AI-generated outputs that inform decisions affecting individuals, contractual obligations, or financial commitments must be reviewed by a qualified human before being actioned. The Human-in-Loop requirement in Section 4 documents this obligation for each use case.
3. AI models and tools procured from external suppliers must be accompanied by a signed Data Processing Agreement or equivalent contractual instrument. Evidence must be recorded in Section 5 before the tool is used in a live environment.
4. All AI tools used on the project must be recorded in the A31 — Procurement Register, including tool name, vendor, intended use, and the procurement or licensing basis.
5. Bias risk and model explainability must be assessed for any AI use case where outputs affect allocation of resources, prioritisation of work, or decisions affecting stakeholders. Assessment results must be documented in Section 4.
6. If a new AI use case emerges during the project that was not in scope at the last review, Section 3 and Section 4 must be updated within ten business days of the new use case being identified.
7. Any Critical risk use case (Section 3) must be escalated to the project sponsor and Security / Privacy Authority immediately upon identification and must not proceed without their explicit approval.

---

## Section 8 — Waste Test

The following checklist confirms that this record adds clear value and avoids unnecessary overhead:

- [ ] The Applicability Gate in Section 2 was completed honestly and based on actual project scope — not completed to appear compliant when no AI, sensitive data, or regulated processing applies.
- [ ] Every use case in Section 3 is a real, active processing activity — not theoretical or out-of-scope.
- [ ] Control requirements in Section 4 are specific and actionable — not vague aspirations such as "apply appropriate security."
- [ ] All High and Critical risk use cases have been communicated to the project sponsor and Security / Privacy Authority.
- [ ] Compliance evidence in Section 5 is in place or formally planned with a due date — no controls are marked "In Place" without verifiable evidence.
- [ ] Exceptions in Section 6 have formal approval — no undocumented or informally tolerated exceptions exist.
- [ ] This record is reviewed at each project phase gate and following any material change to the scope of AI use or data processing.

---

## Change Log

| Version | Date | Author / Event | Description |
|---|---|---|---|
| 1.0.0 | 2026-05-31 | Phase B2 Batch C | Initial template |

---

*Template for: AI, Data, and Privacy Control Record*
*Authority: PMBOK8 Appendix X3 AI-related guidance; Appendix X4 procurement-related guidance*
*See definition file: artifacts/governance/A37-ai-data-privacy-control-record-template.md*
