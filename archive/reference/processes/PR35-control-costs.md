---
ref_id: PR35
ref_type: Process
ref_name: "Control Costs"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.1"
companion_ref_shortcode: PG-APG
related_skills:
  - SKL-05-05
related_artifacts:
  - A16
  - A17
file_path: "reference/processes/PR35-control-costs.md"
---
# PR35 — Control Costs

## Process Identity
| Field | Value |
|---|---|
| **Process ID** | PR35 |
| **Process Name** | Control Costs |
| **Process Group** | Monitoring and Controlling |
| **Knowledge Area** | Cost Management |
| **PMBOK Source** | Process Groups: A Practice Guide §7.6 |

---

## Purpose
Monitor the status of the project to update project costs and manage changes to the cost baseline. Maintains the cost baseline throughout the project.

---

## Inputs
| Input | Description |
|---|---|
| Project management plan | Cost management plan, cost baseline, performance measurement baseline |
| Project documents | Lessons learned register |
| Project funding requirements | Periodic and total funding needs |
| Work performance data | Actual costs expended to date |
| Organizational process assets | Cost control policies and procedures |

---

## Tools and Techniques
| Tool / Technique | Notes |
|---|---|
| Expert judgment | Interpretation of variances and forecasts |
| Data analysis | Earned value analysis (EV, PV, AC, CV, SV, CPI, SPI), variance analysis, trend analysis, reserve analysis |
| To-complete performance index (TCPI) | Required future efficiency to meet a cost objective |
| Project management information system | Cost tracking tools |

---

## Outputs
| Output | Description |
|---|---|
| Work performance information | Cost variance (CV), cost performance index (CPI) |
| Cost forecasts | EAC, ETC estimates |
| Change requests | Corrective action, cost baseline change requests |
| Project management plan updates | Cost management plan, cost baseline, performance measurement baseline |
| Project documents updates | Assumption log, basis of estimates, cost estimates, lessons learned register, risk register |

---

## Key Concepts
- Any increase to the authorized budget requires approval through Perform Integrated Change Control (PR31).
- Key to effective cost control: managing the **approved cost baseline**.
- Monitor expenditures against the **value of work accomplished**, not just funds spent.
- Prevent unapproved changes from being included in reported costs.

### EVM Quick Reference
| Metric | Formula | Good When |
|---|---|---|
| CV (Cost Variance) | EV − AC | Positive |
| SV (Schedule Variance) | EV − PV | Positive |
| CPI | EV / AC | > 1.0 |
| SPI | EV / PV | > 1.0 |
| EAC | BAC / CPI | Lower than BAC |

---

## PMBOK 8 Alignment
- Maps to the **Finance** performance domain (§2.4).
- Cost baselines and EVM are addressed throughout PMBOK 8 finance guidance.

---

## Related Processes
- Feeds into: PR31 (Perform Integrated Change Control)
- Cross-links: PR34 (Control Schedule), PR38 (Control Resources)

---

## Cross-References

| Related Item | Type | Relationship |
|---|---|---|
| A16 | Artifact | Primary artifact produced or updated by this process |
| A17 | Artifact | Primary artifact produced or updated by this process |
| SKL-05-05 | Skill | Skill that executes this process |

## Practitioner Notes

Practitioners executing this process should seek answers to the following questions:
1. Are cost variance (CV) and CPI calculated and reported regularly?
2. Are earned value forecasts (EAC, TCPI) communicated to stakeholders?
3. Are funding limit reconciliation checks performed?
4. Are corrective actions for cost overruns documented and approved?
5. Is the cost baseline updated only through formal change control?

## Change Log

| Version | Date | Description | Author |
|---|---|---|---|
| 1.0.1 | 2026-06-03 | Added Cross-References, Practitioner Notes, and Change Log sections (F-12 Batch 4) | PMO Director |
