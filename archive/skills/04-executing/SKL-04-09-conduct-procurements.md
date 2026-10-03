---
skill_id: SKL-04-09
skill_name: Conduct Procurements
pack: 04 — Executing
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
primary_artifact: A31 — Procurement and Supplier Management Record
artifacts_updated:
- A16 — Financial Management and Cost Baseline Record (contracted costs in §4)
- A26 — Resource Capacity and Acquisition Record (external resource acquisition)
- A18 — Issue, Impediment and Action Log (supplier performance issues)
pmbok8_anchor: Guide §2.8 Procurement Management
performance_domains:
- Resources
- Finance
- Governance
focus_area: Executing
upstream_prerequisites:
- SKL-03-16 — A26 resource management plan (acquisition strategy)
- SKL-02-03 — A06 tailoring (procurement formality level)
downstream_skills:
- SKL-05-05 — Control Costs (contracted cost tracking)
- SKL-06-01 — Close Project or Phase (contract closure via A31 §6)
file_path: skills/04-executing/SKL-04-09-conduct-procurements.md
tests: 9
lifecycle_applicability:
- predictive
- hybrid
lifecycle_notes: Standardized predictive modeling with hybrid adaptation interfaces.
---

# SKL-04-09 — Conduct Procurements

**Pack:** 04 — Executing
**Status:** Active · Tested
**Primary Artifact:** A31 — Procurement and Supplier Management Record
**PMBOK8 Anchor:** Guide §2.8 Procurement Management

> **Wave 1B patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`.
> Tests T-1 through T-9 are fully defined in the Tests section below.

---

## Purpose

Conduct Procurements selects suppliers, awards contracts, and manages ongoing supplier performance. All procurement activity is consolidated in A31. Contracted costs feed A16. External resources feed A26. Contract closure feeds A31 §6 and is consumed by SKL-06-01.

---

## A31 Section Map

| Section | Content |
|---|---|
| §1 | Procurement policy and approvals |
| §2 | Procurement plan summary |
| §3 | Procurement approach per item (method, criteria, type) |
| §4 | Procurement register (all items, status) |
| §5 | Supplier evaluation log |
| §6 | Contract management log (per contract) |
| §7 | Contract financial summary |
| §8 | Procurement risk cross-reference |

---

## Inputs

| Input | Artifact | Section | Status required |
|---|---|---|---|
| Procurement plan | A31 | §2–§3 | Complete |
| Resource management plan | A26 | §1 | Complete |
| Procurement approval thresholds | A06 | §4 authority levels | Current |
| Risk register | A19 | Risk register | Current |
| Cost baseline | A16 | §4 | Current |

---

## Steps

### Step 1 — Issue Procurement Documents
For each planned procurement in A31 §4 with status = Ready, prepare and issue the appropriate document (RFP / RFQ / IFB) per A31 §3. Record issuance date in A31 §4.

### Step 2 — Receive and Evaluate Proposals
Complete A31 §5 evaluation log for each responding supplier with evaluation criteria scores, technical and financial summaries, and risk assessment.

### Step 3 — Select Supplier
Apply the selection method defined in A31 §3 (Competitive / Negotiation / Sole source). Document selection rationale. Obtain required approvals per A06 thresholds.

### Step 4 — Award Contract
Create A31 §6 contract management log entry: contract ID, procurement ID, supplier, contract type, value, payment milestones, deliverables schedule, performance review dates, contract manager.

### Step 5 — Update A16 and A26
Add contracted costs to A16 §4. Update A26 with externally acquired resources noting contract reference.

### Step 6 — Manage Supplier Performance
At each performance review date, assess supplier and record status in A31 §6: On track / At risk / In default. Log At risk or In default status in A18 within 48 hours.

### Step 7 — Manage Contract Changes
All contract changes must route through A12 ICC before being reflected in A31 §6.

### Step 8 — Cross-Reference Procurement Risks
Add or update A31 §8 with A19 Risk IDs for all procurement-related risks.

---

## Outputs

| Output | Artifact | Section |
|---|---|---|
| Procurement register | A31 | §4 |
| Supplier evaluation log | A31 | §5 |
| Contract management log | A31 | §6 |
| Contract financial summary | A31 | §7 |
| Contracted costs | A16 | §4 cost estimates |
| External resource records | A26 | Acquisition log |
| Supplier performance issues | A18 | Issue log (At risk / In default) |

---

## Operating Rules

1. No contract is signed without an A31 §4 procurement register entry at status = Approved.
2. All contract changes route through A12 before A31 §6 is updated.
3. Supplier performance reviews are mandatory at the cadence defined in A31 §6.
4. At-risk or In-default supplier status must create an A18 issue within 48 hours of assessment.
5. Procurement risks must be cross-referenced in both A19 and A31 §8.
6. Sole-source justification must be documented in A06 before a sole-source procurement proceeds.

---

## Failure Modes

| Failure mode | Detection signal | Corrective action |
|---|---|---|
| Contract without A31 entry | Contract in place but no A31 §4 record | Retroactive A31 entry; review A06 compliance |
| Supplier performance not reviewed | A31 §6 review dates passed with no entry | Conduct overdue review; document in A31 §6 |
| Contract change without A12 | A31 §6 change with no A12 Approved reference | Retroactive A12 entry; assess if change was authorized |
| Procurement risk not in A19 | A31 §8 has no A19 cross-reference | Identify procurement risks; log in A19 and cross-reference |
| Supplier insolvency or sudden incapacity | Supplier unable to perform mid-contract | Log in A18 as High priority; activate A19 risk response; raise A12 if baseline affected |
| Contract dispute with no escalation path | Supplier challenges deliverable acceptance or payment | Engage contract manager and legal counsel; document in A31 §6; escalate per A06 |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|---|
| T-1 | A31 entry before contract | Every contract has an A31 §4 procurement register entry before signing | Contract signed with no A31 §4 entry |
| T-2 | Evaluation documented | Every awarded contract has a completed A31 §5 evaluation log entry | Contract awarded with no evaluation log |
| T-3 | Approval threshold respected | Contracts above A06 threshold have required approvals documented in A31 §5 | Contract signed without documented approval |
| T-4 | A16 updated | All contracted costs reflected in A16 §4 cost estimates | Contracted cost not in A16 |
| T-5 | A26 updated | All external resources resulting from contracts entered in A26 | External resource not in A26 |
| T-6 | Performance reviews conducted | A31 §6 has performance status entries at each scheduled review date | Scheduled review date passed with no A31 §6 entry |
| T-7 | At-risk escalated | At-risk or In-default supplier status logged in A18 within 48 hours | At-risk supplier assessment with no A18 entry |
| T-8 | Contract changes via A12 | All contract changes have A12 change request with Approved status before A31 update | Contract modified without A12 Approved entry |
| T-9 | Risk cross-reference | A31 §8 references A19 Risk IDs for all procurement-related risks | Procurement risk in A19 with no A31 §8 cross-reference |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.1.0 | 2026-05-30 | Expanded failure modes from 4 to 6 |
| 1.1.1 | 2026-06-03 | Wave 1B patch — F-11: status updated from Draft · Untested to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.8 Procurement Management*
*Source type: PMI-derived*
