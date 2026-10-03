---
ref_id: PR09
ref_type: Process
ref_name: "Define Activities"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.3"
companion_ref_shortcode: PG-APG-5.7
related_skills:
  - SKL-03-02
  - SKL-03-04
related_artifacts:
  - A05
  - A08
  - A14
  - A15
file_path: "reference/processes/PR09-define-activities.md"
---

# PR09 — Define Activities

**Ref ID:** PR09
**Type:** Process
**PMBOK8 Source:** §2.3
**Version:** 1.0.0

---

## Definition

Define Activities is the process of identifying and documenting the specific actions to be performed to produce the project deliverables.

## Key Characteristics

- **Granular Decomposition:** Breaks down WBS work packages into discrete, actionable schedule activities.
- **Activity List Creation:** Produces the comprehensive inventory of all activities required to deliver project scope.
- **Milestone Identification:** Extracts and documents significant timeline points, approvals, or phase gates.
- **Progressive Elaboration:** Employs Rolling Wave Planning to defer detail for future phases while elaborating near-term work.
- **Baseline Integration:** Connects physical scope packages to estimated, resource-loaded schedule models.

## PMBOK 8 Context

Under PMBOK 8, Define Activities is a core capability in the **Schedule Performance Domain**. It translates structural scope choices into temporal project execution units. It enables the progressive elaboration of planning models, ensuring that near-term tasks are decomposed with precise detail while longer-term work remains at high-level horizons.

## Inputs

| Input | Description | Source |
|---|---|---|
| Schedule Management Plan | Outlines the level of detail, formatting, and methodologies to define activities. | PR08 Plan Schedule Management |
| Scope Baseline | Provides the work packages that are decomposed into activities. | PR07 Create WBS |
| Enterprise Environmental Factors | Project management information systems (PMIS), standard structures, and resources. | Enterprise |
| Organizational Process Assets | Activity templates, past historical files, and lesson registers. | PMO Registry |

## Outputs

| Output | Description | Destination |
|---|---|---|
| Activity List | Comprehensive table of all schedule activities needed to produce work deliverables. | A15 Schedule Baseline |
| Activity Attributes | Specific characteristics (IDs, descriptions, dependencies, resources) for each task. | A15 Schedule Baseline |
| Milestone List | A record of key schedule points, indicators, constraints, or phase completions. | A15 Schedule Baseline |
| Change Requests | Proposed baseline updates triggered by activity discovery. | PR31 Integrated Change Control |

## Tools and Techniques

- **Expert Judgment:** Guidance on industry-specific task decomposition and estimation metrics.
- **Decomposition:** Dividing work packages into small, estimable, and assignable tasks.
- **Rolling Wave Planning:** Progressive elaboration planning where near-term work is detailed first.
- **Meetings:** Planning sessions with engineers, task owners, and subject matter experts.

## Cross-References

| Related Item | Type | Relationship |
|---|---|---|
| A05 | Artifact | Supplying scheduling constraints, calendar assumptions, and limits |
| A08 | Artifact | Backlog sprint task equivalent list in adaptive environments |
| A14 | Artifact | Schedule rules governance basis |
| A15 | Artifact | The scheduling database containing activity and milestone lists |
| PR07 | Process | Provides the work packages to decompose |
| PR08 | Process | Governs the planning rules and scheduling parameters |
| PR10 | Process | Receives the activity list to sequence network dependencies |
| SKL-03-04 | Skill | Plan Schedule |

## Practitioner Notes

Practitioners executing this process should seek answers to the following vital questions:
1. Is every WBS work package represented by one or more schedule activities in the final activity list?
2. Are activities defined at an appropriate level of detail to support meaningful estimation and assignment?
3. Have milestones been clearly identified to mark critical review, approval, or delivery gates?
4. How does rolling-wave planning affect the current activity list versus future-phase placeholders?
5. Are activity attributes documented well enough to support sequencing, networking, and resource loading?

## Change Log

| Version | Date | Description | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-02 | Rebuilt to align with canonical REF file structure and YAML front-matter | PMO Director |

---

*Authority: PMBOK8 Guide §2.3; Process Groups Practice Guide §5.7*
