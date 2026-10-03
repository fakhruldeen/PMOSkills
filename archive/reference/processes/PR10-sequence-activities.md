---
ref_id: PR10
ref_type: Process
ref_name: "Sequence Activities"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.3"
companion_ref_shortcode: PG-APG-5.8
related_skills:
  - SKL-03-04
  - SKL-04-01
related_artifacts:
  - A05
  - A14
  - A15
  - A19
file_path: "reference/processes/PR10-sequence-activities.md"
---

# PR10 — Sequence Activities

**Ref ID:** PR10
**Type:** Process
**PMBOK8 Source:** §2.3
**Version:** 1.0.0

---

## Definition

Sequence Activities is the process of identifying and documenting relationships among the project activities to establish the logical order in which activities will be performed.

## Key Characteristics

- **Network Structure:** Formulates the logical Project Schedule Network Diagram that links all activities together.
- **Precedence Relations:** Employs Precedence Diagramming Method (PDM) to model dependencies (Finish-to-Start, Finish-to-Finish, Start-to-Start, Start-to-Finish).
- **Dependency Classification:** Categorizes constraints into Mandatory (hard logic), Discretionary (soft logic), Internal, or External.
- **Lead & Lag Integration:** Inserts leads (acceleration) and lags (delays) selectively with clear physical justification.
- **Critical Path Prep:** Provides the mathematical network backbone required for Critical Path Method (CPM) calculations and resource leveling.

## PMBOK 8 Context

Under PMBOK 8, Sequence Activities resides in the **Schedule Performance Domain**. This process creates the network logic model that enables predictive or hybrid schedule calculations. Defining relationships carefully ensures that external supplier dependencies, regulatory constraints, and internal handoffs are synchronized to facilitate steady value delivery.

## Inputs

| Input | Description | Source |
|---|---|---|
| Schedule Management Plan | Dictates the tools and techniques to sequence project activities. | PR08 Plan Schedule Management |
| Activity List | The database of defined tasks that must be logically organized. | PR09 Define Activities |
| Milestone List | Major milestones that act as start or end boundaries for sequences. | PR09 Define Activities |
| Project Documents | Assumption logs, risk registers, and scope statements containing constraints. | Project Registry |
| Enterprise Environmental Factors | Industry scheduling standards and organizational workflow systems. | Enterprise |
| Organizational Process Assets | Existing sequencing templates, templates, and workflow procedures. | PMO Registry |

## Outputs

| Output | Description | Destination |
|---|---|---|
| Schedule Network Diagram | Schematic visualization of the logical dependencies among project activities. | A15 Schedule Baseline |
| Project Updates | Refinements or updates to activity attributes, milestones, and assumption logs. | Project Registry |

## Tools and Techniques

- **Precedence Diagramming Method:** Node-based logical modeling (FS, FF, SS, SF relationships).
- **Dependency Determination:** Evaluating mandatory, discretionary, internal, and external constraints.
- **Leads and Lags:** Strategic modifiers to adjust predecessor-successor sequencing.
- **Project Management Information System:** Software tools used to compile, organize, and calculate logical networks.

## Cross-References

| Related Item | Type | Relationship |
|---|---|---|
| A05 | Artifact | Supplying external dependency constraints and calendar limitations |
| A14 | Artifact | Schedule rules governance basis |
| A15 | Artifact | The scheduling database containing the network diagram |
| A19 | Artifact | High-dependency or critical path tasks logged for risk tracking |
| PR09 | Process | Supplies the activity and milestone lists to sequence |
| SKL-03-04 | Skill | Plan Schedule |

## Practitioner Notes

Practitioners executing this process should seek answers to the following vital questions:
1. Are all mandatory dependencies (hard logic) correctly identified and distinguished from discretionary dependencies (soft logic)?
2. Have external dependencies — such as subcontractor deliveries or regulatory approvals — been explicitly modeled in the network?
3. Are leads and lags applied conservatively, and is each instance backed by clear documentation and physical justification?
4. Does the completed schedule network diagram have any loops, dead ends, or illogical open paths?
5. Which activities reside on the critical path, and have they been prioritized for risk analysis and resource allocation?

## Change Log

| Version | Date | Description | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-02 | Rebuilt to align with canonical REF file structure and YAML front-matter | PMO Director |

---

*Authority: PMBOK8 Guide §2.3; Process Groups Practice Guide §5.8*
