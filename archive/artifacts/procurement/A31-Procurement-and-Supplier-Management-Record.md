---
artifact_id: A31
artifact_name: Procurement and Supplier Management Record
version: "1.0.0"
status: "Template · Active"
pack: "04 — Executing / 03 — Planning (procurement planning section)"
primary_skill: "SKL-04-09 — Conduct Procurements"
secondary_skills:
  - "SKL-03-16 — Plan Resource Management (acquisition strategy)"
  - "SKL-06-01 — Close Project or Phase (contract closure)"
feeds_into:
  - "A16 — Financial Management and Cost Baseline Record (procurement costs)"
  - "A26 — Resource Capacity and Acquisition Record (external resource acquisition)"
  - "A27 — Project Closure Record (contract closure confirmation)"
  - "A19 — Risk Management Record (procurement-related risks)"
receives_from:
  - "A06 — Tailoring Decision Record (procurement formality)"
  - "A08 — Scope and Requirements Decision Record (procurement scope)"
  - "A14 — Integrated PM Plan (subsidiary reference)"
  - "A05 — Context Register (OPA — procurement policies, approved suppliers)"
pmbok8_anchor: "Guide §2.8 Procurement Management"
performance_domains:
  - Resources
  - Finance
  - Governance
file_path: "artifacts/procurement/A31-Procurement-and-Supplier-Management-Record.md"
---

# A31 — Procurement and Supplier Management Record

**Artifact ID:** A31  
**Version:** 1.0.0  
**Status:** Template · Active  
**Pack:** 04 — Executing / 03 — Planning  
**Primary skill:** SKL-04-09 — Conduct Procurements  
**File path:** `artifacts/procurement/A31-Procurement-and-Supplier-Management-Record.md`

---

## Purpose

A31 is the single authoritative record for all procurement planning, acquisition, supplier selection, contract management, performance monitoring, and contract closure decisions on the project. It ensures that all external resource and service acquisitions are traceable, governed, and closed formally.

---

## Operating Rules

1. **One record per project.** All procurement activity for the project is consolidated in this single artifact.
2. **Every external acquisition has an entry.** No supplier, contractor, or vendor engagement begins without a corresponding row in Section 4 (Procurement Register).
3. **Procurement approach must precede acquisition.** Section 3 (Procurement Management Approach) must be completed before any procurement action is initiated.
4. **Contract changes route through A12.** Any change to contract scope, price, or terms is logged in A12 before A31 is updated.
5. **Contract closure feeds A27.** Every contract must be formally closed and recorded in A27 Section 6 before project closure approval.
6. **Procurement risks feed A19.** Supplier risk entries belong in A19 — A31 cross-references them.
7. **Costs feed A16.** All contracted costs and actuals are reported in A16 Section 4. A31 is the source of record; A16 is the cost baseline.

---

## Sections

---

### Section 1 — Record Header

| Field | Value |
|---|---|
| Project name | |
| Project ID | |
| Record version | |
| Record status | |
| Project manager | |
| Procurement lead (if different) | |
| A14 reference | Version: · Date: |
| A06 tailoring reference | Version: |
| Date created | |
| Date last updated | |

---

### Section 2 — Procurement Context

*Summarize the procurement environment based on A05 (OPA/EEF) and A06 tailoring.*

| Field | Value |
|---|---|
| Organizational procurement policy | Reference or summary |
| Approved supplier list (if OPA exists) | ☐ Yes — reference: ☐ No — open market |
| Procurement authority level (PM vs. sponsor vs. governance) | |
| Legal / regulatory procurement obligations | |
| Tailoring decision — procurement formality level | From A06: |
| Currency and payment terms standard | |

---

### Section 3 — Procurement Management Approach

*Complete before initiating any procurement action. This is the procurement equivalent of a subsidiary management plan.*

| Field | Value |
|---|---|
| **Procurement strategy** | ☐ Make vs. Buy analysis completed ☐ Buy decision confirmed ☐ Make decision confirmed ☐ Mixed |
| **Make vs. Buy rationale** | |
| **Contract type(s) to be used** | ☐ Fixed Price (FP) ☐ Time & Materials (T&M) ☐ Cost Reimbursable ☐ Mixed |
| **Contract type rationale** | |
| **Supplier selection method** | ☐ Competitive tender ☐ RFP/RFQ ☐ Sole source ☐ Framework agreement ☐ Other |
| **Evaluation criteria** | (e.g., price, technical capability, past performance, risk profile) |
| **Procurement document types** | ☐ Statement of Work (SOW) ☐ RFP ☐ RFQ ☐ IFB ☐ Purchase Order |
| **Supplier performance review cadence** | |
| **Contract change control** | All changes via A12; A31 updated post-approval |
| **Contract closure approach** | Formal acceptance + A27 Section 6 entry |
| **Procurement risk approach** | Risks entered in A19; cross-referenced in Section 6 below |

---

### Section 4 — Procurement Register

*One row per procurement item. Add rows as needed.*

| Proc ID | Description | Contract type | Supplier / vendor | SOW reference | Estimated value | Approved budget (A16) | Status | Contract ID | Start date | End date | A19 risk ref |
|---|---|---|---|---|---|---|---|---|---|---|---|
| PR-001 | | | | | | | ☐ Planning ☐ Tendering ☐ Evaluation ☐ Awarded ☐ Active ☐ Closed ☐ Cancelled | | | | |
| PR-002 | | | | | | | | | | | |

---

### Section 5 — Supplier Evaluation and Selection Log

*One entry per procurement item that goes through a formal evaluation process.*

| Proc ID | Evaluation method | Evaluation criteria | Candidate suppliers | Selected supplier | Selection rationale | Selection authority | Selection date |
|---|---|---|---|---|---|---|---|
| PR-001 | | | | | | | |

---

### Section 6 — Contract Management Log

*One entry per active contract. Update throughout execution.*

| Contract ID | Proc ID | Supplier | Contract value | Payment milestones | Performance review dates | Performance status | Issues / escalations | A19 risk ref | A12 change ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| CTR-001 | | | | | | ☐ On track ☐ At risk ☐ In default | | | | |

---

### Section 7 — Contract Financial Summary

*Feeds A16. One row per contract.*

| Contract ID | Supplier | Contracted value | Approved amendments (via A12) | Total approved value | Invoiced to date | Paid to date | Remaining | Variance | Notes |
|---|---|---|---|---|---|---|---|---|---|
| CTR-001 | | | | | | | | | |

**Total contracted value (all contracts):**  
**Total paid to date:**  
**Reference: A16 Section 4 cost estimate rows for contracted items**

---

### Section 8 — Procurement Risk Register (Cross-Reference)

*Do not duplicate risk entries — A19 is the authoritative risk record. Cross-reference only.*

| A19 Risk ID | Risk description (brief) | Proc ID affected | Response strategy | Risk owner | Status |
|---|---|---|---|---|---|
| R-NNN | | | | | |

---

### Section 9 — Contract Closure Log

*One entry per closed contract. Must be complete before A27 closure approval.*

| Contract ID | Proc ID | Supplier | Closure date | Final accepted deliverables | Final payment made | Claims settled | Retention released | Closed by | A27 Section 6 reference |
|---|---|---|---|---|---|---|---|---|---|
| CTR-001 | | | | | ☐ Yes ☐ No | ☐ Yes ☐ Pending | ☐ Yes ☐ N/A | | |

**All contracts formally closed:** ☐ Yes ☐ No — details:

---

### Section 10 — Procurement Lessons Learned

*Brief entries only — full lessons are in A21.*

| Date | Proc ID | Lesson | A21 Reference |
|---|---|---|---|
| | | | |

---

### Section 11 — Procurement Record Approval and Version Control

| Version | Date | Status | Updated by | Approved by | Notes |
|---|---|---|---|---|---|
| 1.0.0 | | Template | | | |

---

## Change Log

| Version | Date | Change description | Changed by |
|---|---|---|---|
| 1.0.0 | 2026-05-29 | Initial template | Knowledge base |

---

*Authority: PMBOK8 — Guide §2.8 Procurement Management*  
*Source type: PMI-derived*  
*Owner: Project manager / procurement lead*  
*Approval authority: Sponsor or designated procurement authority per A06 thresholds*
