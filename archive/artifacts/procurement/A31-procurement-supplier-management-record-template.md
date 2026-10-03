---
artifact_id: A31
artifact_name: Procurement and Supplier Management Record
artifact_type: template
version: "1.0.0"
status: Template · Active
parent_definition: artifacts/procurement/A31-Procurement-and-Supplier-Management-Record.md
authority: PMBOK8 Guide §2.8 Procurement Management
---

# A31 — Procurement and Supplier Management Record Template

> **Usage:** One record per project. Complete Section 3 (Procurement Management Approach) before initiating any procurement action. All external acquisitions must have an entry in Section 4 (Procurement Register). Route all contract changes through A12 before updating this record. Replace every `[FIELD: ...]` placeholder.

---

## Section 1 — Record Header

| Field | Entry |
|---|---|
| Project name | [FIELD: Full project name] |
| Project ID | [FIELD: Project identifier] |
| Record version | [FIELD: e.g., v1.0] |
| Record status | [FIELD: Draft / Active / Closed] |
| Project manager | [FIELD: PM name] |
| Procurement lead (if different) | [FIELD: Name and role or "PM"] |
| A14 reference | [FIELD: Version: v? · Date: YYYY-MM-DD] |
| A06 tailoring reference | [FIELD: Version: v?] |
| Date created | [FIELD: YYYY-MM-DD] |
| Date last updated | [FIELD: YYYY-MM-DD] |

---

## Section 2 — Procurement Context

| Field | Entry |
|---|---|
| Organizational procurement policy | [FIELD: Reference to OPA procurement policy document or brief summary] |
| Approved supplier list | [FIELD: ☐ Yes — reference: [name/location] · ☐ No — open market competition] |
| Procurement authority level | [FIELD: Describe PM vs. sponsor vs. governance authority per A06 thresholds — e.g., PM can approve up to [amount], sponsor above] |
| Legal / regulatory procurement obligations | [FIELD: List applicable laws, regulations, or standards — e.g., public procurement regulations, local content requirements] |
| Tailoring decision — procurement formality | [FIELD: From A06 — e.g., Lightweight (purchase orders only) / Standard (competitive tender) / Full (formal RFP + CCB)] |
| Currency and payment terms standard | [FIELD: Currency · standard payment terms — e.g., Net 30, milestone-based] |

---

## Section 3 — Procurement Management Approach

| Field | Entry |
|---|---|
| Procurement strategy | [FIELD: ☐ Make vs. Buy analysis completed · ☐ Buy decision confirmed · ☐ Make decision confirmed · ☐ Mixed] |
| Make vs. Buy rationale | [FIELD: Describe the analysis basis and final decision rationale] |
| Contract type(s) to be used | [FIELD: ☐ Fixed Price (FP) · ☐ Time & Materials (T&M) · ☐ Cost Reimbursable · ☐ Mixed — justify choice] |
| Supplier selection method | [FIELD: ☐ Competitive tender · ☐ RFP/RFQ · ☐ Sole source (with justification) · ☐ Framework agreement · ☐ Other] |
| Evaluation criteria | [FIELD: List criteria and weightings — e.g., Technical capability 40%, Price 30%, Past performance 20%, Risk 10%] |
| Procurement document types | [FIELD: ☐ Statement of Work (SOW) · ☐ RFP · ☐ RFQ · ☐ IFB · ☐ Purchase Order — describe use context] |
| Supplier performance review cadence | [FIELD: e.g., Monthly contract review / Quarterly performance assessment] |
| Contract change control | [FIELD: All changes via A12 CR-NNN before A31 update — confirm process] |
| Contract closure approach | [FIELD: Formal acceptance + A27 Section 6 entry — describe any additional steps] |
| Procurement risk approach | [FIELD: Risks entered in A19 — cross-referenced in Section 8 of this record] |

---

## Section 4 — Procurement Register

| Proc ID | Description | Contract type | Supplier / vendor | SOW reference | Estimated value | Approved budget (A16 ref) | Status | Contract ID | Start date | End date | A19 risk ref |
|---|---|---|---|---|---|---|---|---|---|---|---|
| PR-001 | [FIELD: Describe what is being procured] | [FIELD: FP / T&M / Cost-Reimbursable] | [FIELD: Supplier name or TBD] | [FIELD: SOW document reference or N/A] | [FIELD: Currency amount] | [FIELD: A16 cost line reference] | [FIELD: ☐ Planning ☐ Tendering ☐ Evaluation ☐ Awarded ☐ Active ☐ Closed ☐ Cancelled] | [FIELD: CTR-NNN or TBD] | [FIELD: YYYY-MM-DD] | [FIELD: YYYY-MM-DD] | [FIELD: A19 R-NNN or None] |

---

## Section 5 — Supplier Evaluation and Selection Log

| Proc ID | Evaluation method | Evaluation criteria | Candidate suppliers | Selected supplier | Selection rationale | Selection authority | Selection date |
|---|---|---|---|---|---|---|---|
| PR-001 | [FIELD: RFP scoring / panel review / technical assessment] | [FIELD: Criteria applied — from Section 3] | [FIELD: Names of evaluated suppliers] | [FIELD: Selected supplier name] | [FIELD: Why this supplier was selected — reference scoring or analysis] | [FIELD: Name and role per procurement authority threshold] | [FIELD: YYYY-MM-DD] |

---

## Section 6 — Contract Management Log

| Contract ID | Proc ID | Supplier | Contract value | Payment milestones | Performance review dates | Performance status | Issues / escalations | A19 risk ref | A12 change ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| CTR-001 | PR-001 | [FIELD: Supplier name] | [FIELD: Currency amount] | [FIELD: List milestone dates and amounts] | [FIELD: Review dates per cadence in Section 3] | [FIELD: ☐ On track ☐ At risk ☐ In default] | [FIELD: Describe or "None"] | [FIELD: A19 R-NNN or None] | [FIELD: A12 CR-NNN or None] | [FIELD: Additional notes] |

---

## Section 7 — Contract Financial Summary

| Contract ID | Supplier | Contracted value | Approved amendments (A12) | Total approved value | Invoiced to date | Paid to date | Remaining | Variance | Notes |
|---|---|---|---|---|---|---|---|---|---|
| CTR-001 | [FIELD: Supplier] | [FIELD: Original contract value] | [FIELD: +/− cumulative approved changes] | [FIELD: Contracted + amendments] | [FIELD: Amount invoiced to date] | [FIELD: Amount paid to date] | [FIELD: Approved value − paid] | [FIELD: +/− vs. A16 budget line] | [FIELD: Notes] |

**Total contracted value (all contracts):** [FIELD: Currency amount]
**Total paid to date:** [FIELD: Currency amount]
**Reference: A16 Section 4 cost rows for contracted items**

---

## Section 8 — Procurement Risk Register (Cross-Reference)

> Do not duplicate risk entries — A19 is the authoritative risk record.

| A19 Risk ID | Risk description (brief) | Proc ID affected | Response strategy | Risk owner | Status |
|---|---|---|---|---|---|
| [FIELD: A19 R-NNN] | [FIELD: One-line summary] | [FIELD: PR-NNN] | [FIELD: Strategy from A19] | [FIELD: Owner from A19] | [FIELD: From A19] |

---

## Section 9 — Contract Closure Log

| Contract ID | Proc ID | Supplier | Closure date | Final accepted deliverables | Final payment made | Claims settled | Retention released | Closed by | A27 Section 6 reference |
|---|---|---|---|---|---|---|---|---|---|
| CTR-001 | PR-001 | [FIELD: Supplier] | [FIELD: YYYY-MM-DD] | [FIELD: List accepted deliverables] | [FIELD: ☐ Yes · Amount: · ☐ No — pending] | [FIELD: ☐ Yes · ☐ Pending — details] | [FIELD: ☐ Yes · Amount: · ☐ N/A] | [FIELD: Name and role] | [FIELD: A27 Section 6 row reference] |

**All contracts formally closed:** [FIELD: ☐ Yes · ☐ No — details:]

---

## Section 10 — Procurement Lessons Learned

> Brief entries only — full lessons are in A21.

| Date | Proc ID | Lesson | A21 Reference |
|---|---|---|---|
| [FIELD: YYYY-MM-DD] | [FIELD: PR-NNN] | [FIELD: One-sentence actionable lesson] | [FIELD: A21 LL-NNN] |

---

## Section 11 — Record Approval and Version Control

| Version | Date | Status | Updated by | Approved by | Notes |
|---|---|---|---|---|---|
| v1.0 | [FIELD: YYYY-MM-DD] | [FIELD: Draft / Active] | [FIELD: Name] | [FIELD: Name and role] | Initial record |

---

*Authority: PMBOK8 Guide §2.8 Procurement Management*
*Source type: PMI-derived · Version: 1.0.0 · Parent definition: A31-Procurement-and-Supplier-Management-Record.md*
