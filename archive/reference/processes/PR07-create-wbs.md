---
ref_id: PR07
ref_type: Process
ref_name: "Create WBS"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.2.2.4"
companion_ref_shortcode: PG-APG-5.5
related_skills:
  - SKL-03-02
  - SKL-03-04
  - SKL-03-05
related_artifacts:
  - A05
  - A08
  - A13
  - A14
  - A15
  - A16
file_path: "reference/processes/PR07-create-wbs.md"
---

# PR07 — Create WBS

**Ref ID:** PR07
**Type:** Process
**PMBOK8 Source:** §2.2.2.4
**Version:** 1.0.0

---

## Definition

Create WBS is the process of subdividing project deliverables and project work into smaller, more manageable components to establish the scope baseline.

## Key Characteristics

- **Hierarchical Decomposition:** Subdivides the total scope of work into logical, manageable components.
- **The 100% Rule:** Mandates that the WBS contains 100% of the project work defined by the scope statement, leaving nothing out and including no extra work.
- **Work Package Level:** Decomposes scope down to the lowest level (Work Packages) where cost and duration can be reliably estimated and managed.
- **WBS Dictionary backing:** Couples WBS elements with details regarding owner, resources, milestones, and acceptance criteria.
- **Scope Baseline Creation:** Formulates the approved Scope Baseline (Scope Statement, WBS, WBS Dictionary) to govern all project execution and change control.

## PMBOK 8 Context

Under PMBOK 8, Create WBS resides in the **Scope Performance Domain** under **Develop Scope Structure**. It establishes the structural framework that connects Scope, Schedule, Finance, Resources, and Risk performance domains. In adaptive environments, this is represented by decomposing the Product Backlog from epics and features down to granular user stories.

## Inputs

| Input | Description | Source |
|---|---|---|
| Scope Management Plan | Documents how the WBS will be created, structured, and maintained. | PR04 Plan Scope Management |
| Project Scope Statement | Defines the detailed deliverables and boundaries to be decomposed. | PR06 Define Scope |
| Requirements Documentation | Supplies the details of requirements that must be accounted for in the WBS. | PR05 Collect Requirements |
| Enterprise Environmental Factors | Industry-specific structure templates and regulatory frameworks. | Enterprise |
| Organizational Process Assets | Existing WBS templates, guidelines, and past lessons learned. | PMO Registry |

## Outputs

| Output | Description | Destination |
|---|---|---|
| Scope Baseline | The consolidated WBS, WBS Dictionary, and Project Scope Statement. | A14 Integrated Project Management Plan |
| Backlog Decomposition | Epics and features decomposed into user stories in adaptive projects. | A08 Scope and Requirements Backlog |

## Tools and Techniques

- **Expert Judgment:** Guidance on decomposition structures for specific engineering or business domains.
- **Decomposition:** Subdividing major deliverables into progressively smaller, more manageable work units.
- **Brainstorming:** Group sessions to identify all necessary work components and deliverables.

## Cross-References

| Related Item | Type | Relationship |
|---|---|---|
| A05 | Artifact | Supplying environmental assumptions and project constraints |
| A08 | Artifact | Backlog equivalents in adaptive or hybrid projects |
| A13 | Artifact | Mapping WBS elements back to requirements |
| A14 | Artifact | Destination for the approved Scope Baseline |
| A15 | Artifact | Base schedule built on activities derived from WBS work packages |
| A16 | Artifact | Base cost estimates rolling up from WBS work packages |
| PR06 | Process | Supplies the detailed Scope Statement to decompose |
| PR09 | Process | Receives WBS work packages to decompose further into schedule activities |
| SKL-03-02 | Skill | Plan Scope and Requirements |

## Practitioner Notes

Practitioners executing this process should seek answers to the following vital questions:
1. Does the completed WBS capture 100% of the project scope with absolutely no gaps or overlapping elements?
2. Are work packages sized appropriately to be estimated, scheduled, assigned, and controlled as discrete, accountable units?
3. Is a WBS dictionary fully populated to define boundaries, resources, owners, and acceptance criteria for each work package?
4. How are the WBS elements linked back to requirements to maintain vertical traceability?
5. In adaptive contexts, are the epics and user stories decomposed to a level that directly supports sprint or iteration planning?

## Change Log

| Version | Date | Description | Author |
|---|---|---|---|
| 1.0.0 | 2026-06-02 | Rebuilt to align with canonical REF file structure and YAML front-matter | PMO Director |

---

*Authority: PMBOK8 Guide §2.2.2.4; Process Groups Practice Guide §5.5*
