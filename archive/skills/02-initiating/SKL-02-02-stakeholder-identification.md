---
skill_id: SKL-02-02
skill_name: Stakeholder Identification
pack: 02 — Initiating
version: 1.0.0
status: Active · Tested
source_type: PMI-derived
primary_artifact_output: A07 — Stakeholder Register
artifacts_updated:
- A04 — Project Charter (initial stakeholder list update)
- A05 — Context Register (stakeholder context notes)
pmbok8_process_anchor: Guide §2.5.6.1 Identify Stakeholders · Guide §2.5 Stakeholders
  Domain · Standard §3.8 Build an Empowered Culture
performance_domains:
- Stakeholders
focus_area: Initiating
upstream_prerequisites:
- SKL-02-01 — A04 Project Charter must be baselined
downstream_skills:
- SKL-03-07 — Plan Stakeholder Engagement
- SKL-03-08 — Plan Communications Management
- SKL-04-06 — Manage Stakeholder Engagement
- SKL-05-07 — Monitor Stakeholder Engagement
file_path: skills/02-initiating/SKL-02-02-stakeholder-identification.md
tests: 10
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-02-02 — Stakeholder Identification

**Skill ID:** SKL-02-02  
**Pack:** 02 — Initiating  
**Status:** Active · Tested  
**Source type:** PMI-derived  
**PMBOK8 anchor:** Guide §2.5.6.1 Identify Stakeholders · Guide §2.5 Stakeholders Domain · Standard §3.8 Build an Empowered Culture  
**File path:** `skills/02-initiating/SKL-02-02-stakeholder-identification.md`

---

## Purpose

Identify, categorize, and document all individuals, groups, and organizations that may affect, be affected by, or perceive themselves to be affected by the project. The output is a baselined Stakeholder Register (A07) that provides the foundation for stakeholder engagement planning, communications management, and ongoing engagement monitoring throughout the project lifecycle.

---

## Scope

This skill covers the identification and initial classification of stakeholders only. It does not plan stakeholder engagement strategies (SKL-03-07), develop the communications management plan (SKL-03-08), or execute stakeholder engagement activities (SKL-04-06). Stakeholder identification is an iterative process — new stakeholders may be added as the project evolves.

---

## Inputs Required

| Input | Source | Mandatory? |
|---|---|---|
| A04 — Project Charter (baselined) | SKL-02-01 output | Yes |
| Organizational charts and structure | EEF | Yes |
| Existing stakeholder registers (similar projects) | OPA | If available |
| Industry/regulatory stakeholder lists | EEF (regulatory) | If applicable |
| Contract documents | EEF (procurement) | If applicable |
| A05 — Context Register (environmental context) | SKL-01-01 output | Yes |

**Gate check:** A04 must be baselined before this skill runs.

---

## Instructions

### Step 1 — Conduct Stakeholder Discovery
1. Review A04 (Project Charter) for the initial stakeholder list from Step 7 of SKL-02-01.
2. Expand the list using the following discovery methods:
   - **Organizational chart analysis:** Identify all departments, business units, and roles impacted by the project scope.
   - **Process flow analysis:** Map business processes that the project will change; identify every role in those processes.
   - **Regulatory and legal review:** Identify all regulatory bodies, compliance authorities, and legal entities with oversight.
   - **Supply chain analysis:** Identify vendors, contractors, partners, and third-party organizations involved in or affected by the project.
   - **End-user analysis:** Identify groups of users who will use, operate, or be affected by the project outputs.
   - **Interviews and workshops:** Conduct structured interviews with the sponsor and key known stakeholders to identify additional parties.
3. Document every identified stakeholder (individual or group) in the A07 discovery draft.

### Step 2 — Classify Stakeholders
1. For each identified stakeholder, assign the following classification attributes:
   - **Type:** Internal, External, Regulatory, Contractual, End User, Beneficiary, Opposition
   - **Role:** Sponsor, Governance Body, PM Team, SME, Supplier, Customer, Regulator, Affected Party
   - **Interest level (1–5):** How much does this stakeholder care about the project outcome?
   - **Influence level (1–5):** How much can this stakeholder affect project decisions or execution?
   - **Impact level (1–5):** How significantly will the project affect this stakeholder?
2. Calculate a composite priority score: `Priority = (Interest + Influence + Impact) / 3`
3. Assign a priority tier based on score:
   - **Tier 1 (High):** Score 4.0–5.0 — require active management
   - **Tier 2 (Medium):** Score 2.5–3.9 — require regular monitoring
   - **Tier 3 (Low):** Score 1.0–2.4 — require periodic awareness checks
4. Record all classification data in A07.

### Step 3 — Assess Stakeholder Stance
1. For each Tier 1 stakeholder, assess their current stance toward the project:
   - **Unaware:** Not yet informed about the project
   - **Resistant:** Aware but opposed to the project
   - **Neutral:** Aware but neither supportive nor resistant
   - **Supportive:** Aware and in favor of the project
   - **Leading:** Actively championing the project
2. Record current stance in A07.
3. Define the desired stance for each Tier 1 stakeholder (what stance do we need them to have by key project milestones?).
4. Calculate the stance gap (current vs. desired) — this will drive engagement strategy in SKL-03-07.

### Step 4 — Identify Stakeholder Interests and Concerns
1. For each Tier 1 and Tier 2 stakeholder, document:
   - **Primary interest:** What does this stakeholder want from the project?
   - **Primary concern:** What is this stakeholder worried about or opposed to?
   - **Success criteria:** How will this stakeholder judge project success?
   - **Key risk to stakeholder:** What project risk most affects this stakeholder?
2. Record interests and concerns in A07.

### Step 5 — Map Stakeholder Relationships
1. Identify key relationships between stakeholders:
   - Who influences whom? (Power networks)
   - Who has conflicting interests with whom? (Tension points)
   - Who are the informal leaders or opinion influencers?
2. Create a simple relationship map (table or diagram) showing key influence relationships.
3. Record the relationship map or description in A07.

### Step 6 — Assign Preliminary Engagement Roles
1. For each Tier 1 stakeholder, assign a preliminary engagement role to the project team:
   - **PM:** Owns primary relationship
   - **Sponsor:** Handles peer-level or executive-level engagement
   - **SME / Team lead:** Handles technical or functional engagement
2. This is a preliminary assignment — full engagement planning is done in SKL-03-07.
3. Record preliminary engagement roles in A07.

### Step 7 — Baseline A07 and Update Downstream Artifacts
1. Review the completed A07 with the project sponsor and PMO.
2. Obtain baseline approval from the sponsor or PMO lead.
3. Record version, baseline date, and approver in A07.
4. Update A04 (Project Charter) — replace the preliminary stakeholder list with a reference to A07.
5. Update A05 (Context Register) — add relevant stakeholder context notes.
6. Distribute A07 to project team leads (note: restrict sensitive stakeholder information to authorized roles per A05 governance).
7. Update SKILL-REGISTRY.md — mark SKL-02-02 as complete.

---

## Outputs

| Output | Artifact | Section | Notes |
|---|---|---|
| Stakeholder Register | A07 | Full document | All stakeholders, classifications, stances, interests, relationship map |
| A04 Charter update | A04 | Stakeholder list section | Reference pointer to A07 |
| A05 Context update | A05 | Stakeholder context notes | Environmental context for key stakeholders |

---

## Constraints

- Every identified stakeholder must have at minimum: name/group, type, role, interest, influence, and impact scores recorded.
- Tier 1 stakeholders must have stance assessment and interests/concerns documented before A07 is baselined.
- Sensitive stakeholder information (e.g., resistance assessment, internal politics) must be access-controlled per A05 governance.
- A07 is a living document — it must be updated at each phase gate and whenever significant new stakeholders are identified.

---

## Tailoring Guidance

| Approach | Adjustment |
|---|---|
| Small / internal project | Simple list with interest/influence matrix. No formal scoring. PM manages all relationships. |
| Large / complex project | Full discovery with interviews and workshops. Formal scoring model. Relationship map required. Restricted access tier for sensitive data. |
| Agile / adaptive project | Stakeholders identified at program increment level. Register updated every sprint review. Product Owner manages primary stakeholder relationships. |
| Regulatory / compliance project | Regulatory bodies as mandatory Tier 1. Stance assessment mandatory for all regulators. Legal/compliance review before baselining. |
| Program or portfolio | Stakeholder register covers program-level and project-level stakeholders. Cross-project stakeholder coordination noted. |

---

## Failure Cases

| Failure | Symptom | Resolution |
|---|---|---|
| Key stakeholder not identified | Resistance or conflict surfaces late in execution | Re-run stakeholder discovery; add missing stakeholders; update A07 |
| Stance not assessed for Tier 1 | Engagement planning based on assumptions | Run structured interviews; update A07 before engagement planning |
| Conflicting stakeholder interests not mapped | Unresolved conflicts escalate to sponsor | Map conflicts in A07; design engagement to address conflicts proactively |
| Sensitive data not access-controlled | Stakeholder resistance assessment shared inappropriately | Apply access controls per A05 governance; review distribution list |
| A07 not updated after phase gate | Outdated stakeholder data drives poor engagement decisions | Schedule A07 review at every phase gate; assign ownership for updates |
| Engagement role not assigned for Tier 1 stakeholder | No one owns the relationship; stakeholder feels ignored | Assign engagement role in A07; confirm with team lead |

---

## Tests

| Test ID | Test description | Pass condition | Fail condition |
|---|---|---|
| T-1 | A04 charter gate check | A04 is baselined before this skill runs | A04 in draft or unsigned |
| T-2 | Full stakeholder discovery completed | All six discovery methods (org chart, process flow, regulatory, supply chain, end-user, interviews) attempted and documented | Any method skipped without documented rationale |
| T-3 | All stakeholders classified | Every stakeholder has type, role, interest, influence, and impact scores recorded | Any stakeholder with incomplete classification |
| T-4 | Priority tier assigned to all stakeholders | Priority score calculated and tier assigned for all stakeholders | Any stakeholder without a tier |
| T-5 | Stance assessed for all Tier 1 stakeholders | Current and desired stance recorded for every Tier 1 stakeholder | Any Tier 1 stakeholder without stance assessment |
| T-6 | Interests and concerns documented for Tier 1 and 2 | Primary interest, primary concern, success criteria, and key risk recorded for all Tier 1 and 2 stakeholders | Any Tier 1 or 2 stakeholder missing interests/concerns |
| T-7 | Relationship map created | Key influence relationships and conflict points documented or diagrammed | Relationship map absent |
| T-8 | Engagement roles assigned for Tier 1 | Every Tier 1 stakeholder has an assigned engagement owner | Any Tier 1 stakeholder without engagement role |
| T-9 | A04 and A05 updated | A04 stakeholder section references A07; A05 has stakeholder context notes | A04 or A05 not updated |
| T-10 | A07 baselined and distributed | Version, baseline date, approver recorded; access controls applied; distributed to authorized team leads | A07 in draft, unsigned, or distributed without access controls |

---

## Change Log

| Version | Date | Change description |
|---|---|---|
| 1.0.0 | 2026-05-30 | Initial build |

---

*Authority: PMBOK8 Guide §2.5.6.1 Identify Stakeholders · Guide §2.5 Stakeholders Domain · Standard §3.8 Build an Empowered Culture*  
*Source type: PMI-derived*  
*Owner: Project Manager*  
*Approval authority: Project Sponsor or PMO lead*
