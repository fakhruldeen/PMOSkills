# SKL-03-10 — Identify Risks

**Skill ID:** SKL-03-10  
**Pack:** 03 — Planning  
**Version:** 1.0.0-draft  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/03-planning/SKL-03-10-identify-risks.md`  
**Authority:** PMBOK8 Guide §2.7.2.2 · Figure 2-49 · §2.7.1 Key Concepts · A19 Risk Management Record (Artifacts-V-1.0.5)  
**Last Updated:** 2026-05-29

> **Wave 1A patch — F-11:** Status updated from `Draft · Untested` to `Draft · Tests Defined`. Tests section (Section 13) was already present and complete.

---

## 1. Purpose

Identify Risks recognizes both **threats** (negative risks) and **opportunities** (positive risks) affecting the project, converts them from vague concerns into formally structured risk statements, and enters them as the initial population of the A19 Risk Register section. Risk identification is **iterative** — it does not end after this skill runs once. Every risk review triggered by the A19 plan cadence is a re-run of this skill against new project information.

This skill also absorbs and formalizes the engagement risk flags inserted into A19 by SKL-02-02 and SKL-03-07. Those entries exist as preliminary flags; this skill elevates them to full risk statements with all required fields populated.

Without this skill, A19 has a Risk Management Plan but no risk entries. SKL-03-11 (Perform Risk Analysis) cannot run against an empty register.

---

## 2. Scope

This skill covers:
- Applying structured identification techniques to surface threats and opportunities across all A19 RBS categories
- Writing every risk in the mandatory cause–event–consequence (C–E–C) structure
- Classifying every risk against the A19 RBS taxonomy
- Assigning a named risk owner to every entry
- Distinguishing genuine risks from issues, concerns, constraints, and non-risks — and correctly routing non-risks
- Promoting preliminary engagement risk flags from SKL-02-02 and SKL-03-07 to full A19 risk entries
- Populating all mandatory A19 Risk Register fields for each identified risk
- Re-running identification at each plan-defined cadence or trigger event

This skill does **not** cover:
- Scoring probability and impact (SKL-03-11)
- Developing response strategies (SKL-03-12)
- Implementing responses (SKL-04-Implement Risk Responses)
- Resolving issues (A18 — Issue, Impediment, and Action Log)
- Sizing reserves (SKL-03-11 / SKL-03-12 in coordination with A16)

---

## 3. PMBOK8 Anchor

| Field | Value |
|-------|-------|
| **Process** | Identify Risks |
| **Guide Section** | §2.7.2.2 |
| **Figure** | Figure 2-49 — Identify Risks Inputs, Tools and Techniques, and Outputs |
| **Performance Domain** | Risk · Governance |
| **Focus Area** | Planning (initial run); iterative throughout Executing and Monitoring and Controlling |
| **Domain Key Concepts** | Risk vs. issue · Threats vs. opportunities · Risk classification (Figure 2-46: Known-Known, Known-Unknown, Unknown-Known, Unknown-Unknown) · Cause–event–consequence · Overall risk vs. individual risk (PMBOK8 Guide §2.7.1) |
| **Domain Check Results** | PMBOK8 Guide Table 2-11 |
| **Secondary Authority** | Risk-PPP (PMI Practice Standard for Project Risk Management) |

---

## 4. Critical Distinction: Risk vs. Non-Risk

| Candidate Type | Definition | Correct Destination |
|---------------|------------|-------------------|
| **Risk (Threat)** | Uncertain future event that, if it occurs, would negatively impact one or more project objectives | A19 Risk Register — full entry required |
| **Risk (Opportunity)** | Uncertain future event that, if it occurs, would positively impact one or more project objectives | A19 Risk Register — full entry required |
| **Issue** | Condition or situation that has **already occurred** and requires action or management attention | A18 — Issue, Impediment, and Action Log |
| **Constraint** | Fixed boundary on scope, time, cost, or quality that is known and cannot be changed | A05 Context Register or A08 Scope Record |
| **Assumption** | Held-to-be-true statement that is not yet verified | Document in A05; convert to risk if assumption failing impacts objectives |
| **Concern** | General worry of a stakeholder — not a specific uncertain event | A07 Stakeholder Register |

---

## 5. Risk Statement Format: C–E–C

> **"Because of [CAUSE], there is a risk that [EVENT], which could result in [CONSEQUENCE]."**

---

## 6. Risk Classification (PMBOK8 Figure 2-46)

| Class | Definition |
|-------|------------|
| **Known-Known** | Facts and fixed requirements — not a risk |
| **Known-Unknown** | Identified uncertainty with assessable probability and impact (standard A19 entry) |
| **Unknown-Known** | Knowledge exists in the community but not with this team |
| **Unknown-Unknown** | Truly emergent; managed through reserves, not the register |

---

## 7. Inputs

| Input | Source | Mandatory? |
|-------|--------|------------|
| A19 — Risk Management Plan section | SKL-03-09 | Yes |
| A04 — Project Charter | SKL-02-01 | Yes |
| A05 — Context Register | SKL-02-01 | Yes |
| A07 — Stakeholder Register and Engagement Strategy | SKL-02-02 / SKL-03-07 | Yes |

---

## 8. Tools and Techniques

Per PMBOK8 Figure 2-49: Expert Judgment, Interviews, Brainstorming, Checklists, Root Cause Analysis, Assumption and Constraint Analysis, SWOT Analysis, Document Analysis, Facilitation, Prompt Lists, and AI-assisted analysis (Appendix X3).

---

## 9. Step-by-Step Instructions

### Step 1 — Confirm Prerequisites (Gate)
- [ ] A19 Risk Management Plan section approved and baselined (SKL-03-09)
- [ ] A04 baselined
- [ ] A05 populated
- [ ] A07 complete (identification and engagement strategy sections)
- [ ] RBS taxonomy finalized in A19
- [ ] P×I matrix finalized and sponsor-confirmed

### Step 2 — Retrieve Prior Risk Flags
Promote all engagement risk flags from SKL-02-02 and SKL-03-07 to full C–E–C entries in A19.

### Step 3 — Review Source Documents
Document analysis of A04, A05, A07, A08 (if available), and OPA lessons learned.

### Step 4 — Conduct Identification Sessions
Brainstorming, expert interviews, SWOT, assumption analysis, and prompt list review — explicitly soliciting both threats and opportunities in every session.

### Step 5 — Filter: Risk vs. Non-Risk
Apply the routing table from Section 4 to every candidate.

### Step 6 — Write C–E–C Risk Statements
For every genuine risk, write the full C–E–C statement. Reject vague statements.

### Step 7 — Classify Against RBS Taxonomy
Assign each entry to one or at most two RBS categories.

### Step 8 — Assign Risk Owners
Named individual owners only. No TBD, no teams, no roles.

### Step 9 — Populate All A19 Risk Register Fields
All required fields per A19 schema. Probability, impact, score, and response fields remain blank pending SKL-03-11 and SKL-03-12.

### Step 10 — Review for Completeness
- All prior flags promoted
- All entries have C–E–C, RBS category, knowledge class, and named owner
- No issues in register
- At least one opportunity present
- All RBS categories reviewed; zero-entry categories have rationale

### Step 11 — Update A19 Risk Register Section
Record total entries, date, and techniques used.

### Step 12 — Trigger Downstream
SKL-03-11 may begin once A19 register is populated with complete entries.

---

## 10. Outputs

| Output | Artifact | Notes |
|--------|---------|-------|
| Populated Risk Register | A19 | All identified threats and opportunities with full C–E–C entries |
| Promoted engagement risks | A19 | Prior SKL-02-02 and SKL-03-07 flags converted |
| A07 updates | A07 | Any new stakeholder risks discovered |

---

## 11. Tailoring Guidance

| Approach | Adjustment |
|----------|-----------|
| Predictive | Full initial session at planning; re-run at each phase gate |
| Adaptive | Lightweight per-sprint identification using C–E–C format |
| Hybrid | Predictive for fixed components; adaptive for evolving components |
| Small project | Single brainstorm + document review; 10–20 entries typical |
| Large project | Domain-specific workshops per RBS; 40–100+ entries expected |
| Regulated | Regulatory risk category mandatory; document methodology for audit |

---

## 12. Failure Cases

| Failure Mode | Prevention |
|-------------|------------|
| Running before A19 plan is approved | T-1 gate enforces prerequisite |
| Vague risk statements | T-3 enforces C–E–C format |
| Issues entered as risks | T-2 enforces risk vs. issue distinction |
| Risks without owners | T-4 enforces named ownership |
| Zero opportunities | T-6 checks for at least one opportunity |
| Prior flags not promoted | T-5 cross-checks all prior flags |
| One-time identification | T-7 checks iterative re-run mechanism |
| Separate risk log created | T-8 enforces single-artifact rule |

---

## 13. Tests

| Test ID | Assertion | Pass condition | Fail condition | Test type |
|---------|-----------|----------------|---------------|-----------|
| T-1 | Prerequisite gate | All prerequisites confirmed before any identification activity begins | Any prerequisite missing | Pre-execution gate |
| T-2 | No issues in register | All entries describe uncertain future events; active conditions routed to A18 | Any entry describes a current condition | Content quality check |
| T-3 | C–E–C format enforced | Every entry has identifiable cause, specific uncertain event, and consequence referencing a project objective | Any entry missing any C–E–C component | Content format check |
| T-4 | Named owner on every entry | Every entry has a first-name/last-name owner | Any entry with TBD, Team, or blank in owner field | Field completeness check |
| T-5 | Prior flags promoted | All SKL-02-02 and SKL-03-07 flags have full entries; originals marked as promoted | Any prior flag remains as unpromoted stub | Cross-artifact consistency |
| T-6 | At least one opportunity | One or more entries with Risk Type = Opportunity and complete C–E–C | Zero opportunity entries with no documented rationale | Coverage check |
| T-7 | Re-run mechanism confirmed | A19 plan has cadence statement; this run recorded with date and techniques | No cadence exists; or no run record | Process continuity check |
| T-8 | No separate risk log | No standalone risk file exists outside A19 | Separate risk log found | Artifact waste check |
| T-9 | All RBS categories reviewed | All categories reviewed; zero-entry categories have rationale | Categories not systematically reviewed | Methodology completeness |

---

## 14. Dependency Chain

```
UPSTREAM:
SKL-03-09 → A19 Risk Management Plan section (mandatory gate)
SKL-02-02 → A19 engagement risk flags (must be promoted)
SKL-03-07 → A19 engagement risk confirmations (must be promoted)
SKL-02-01 → A04 Project Charter
SKL-02-01 → A05 Context Register

DOWNSTREAM:
SKL-03-11 — Perform Risk Analysis
  └──▶ SKL-03-12 — Plan Risk Responses
           └──▶ SKL-04 — Implement Risk Responses
                └──▶ SKL-05 — Monitor Risks (re-runs identification)
```

---

## 15. Re-run Triggers

- Phase gate — full re-run
- Sprint/iteration planning — lightweight re-run
- New stakeholder identified
- Major scope, schedule, or cost change approved
- External event (market, regulatory, supplier)
- Risk materialization — re-examine neighboring RBS category entries
- Risk monitoring trigger indicator observed

---

## 16. Change Log

| Version | Date | Change description |
|---------|------|-------------------|
| 1.0.0 | 2026-05-29 | Initial build |
| 1.0.1 | 2026-06-03 | Wave 1A patch: status updated to Draft · Tests Defined |

---

*Authority: PMBOK8 Guide §2.7.2.2 · Figure 2-49 · Artifacts-V-1.0.5 A19*  
*Source type: PMI-derived*  
*Next skill: SKL-03-11 — Perform Risk Analysis*
