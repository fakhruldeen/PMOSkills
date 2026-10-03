---
skill_id: SKL-05-09
name: Monitor Communications
pack: 05 — Monitoring and Controlling
version: 1.1.0
status: Active · Tested
source_type: PMI-derived
authority: PMI-derived
pmbok8_anchor: Process-Groups §7.9 · Figure 7-17 · Figure 7-18
performance_domains:
- Stakeholders
- Measurement
focus_area: Monitoring and Controlling
primary_artifact: A17 — Work Performance Information (communications section)
artifacts_updated:
- A28 — Communications Management Plan
- A07 — Stakeholder Engagement Plan
- A12 — Change Requests
- A18 — Issue Log
- A21 — Lessons Learned Register
upstream_prerequisites:
- SKL-04-07
downstream_skills:
- SKL-05-02
- SKL-03-11
- SKL-04-07
file_path: skills/05-monitoring-controlling/SKL-05-09-monitor-communications.md
tests: 5
last_updated: '2026-06-03'
lifecycle_applicability:
- predictive
- adaptive
- hybrid
lifecycle_notes: Universal process applicable across all lifecycle models with appropriate
  tailoring.
---

# SKL-05-09 — Monitor Communications

**Skill ID:** SKL-05-09  
**Canonical Title:** Monitor Communications  
**Pack:** 05 — Monitoring and Controlling  
**Version:** 1.1.0  
**Status:** Active · Tested  
**Source Type:** PMI-derived  
**File Path:** `skills/05-monitoring-controlling/SKL-05-09-monitor-communications.md`  
**Authority:** Process Groups: A Practice Guide §7.9 · Figure 7-17 · Figure 7-18  
**Last Updated:** 2026-06-03

---

## 1. Purpose

Monitor Communications is the process of ensuring the information needs of the project and its stakeholders are met. Its key benefit is the optimal information flow as defined in the communications management plan and the stakeholder engagement plan. This process is performed throughout the project.

Monitoring communications goes beyond confirming that messages were sent. It evaluates whether the right information reached the right people at the right time, in the right format, and with the intended effect. When communications are not achieving their purpose, Monitor Communications triggers a revision of the Plan Communications Management and/or Manage Communications processes.

---

## 2. Scope

This skill covers:
- Ensuring the information needs of the project and all stakeholders are being met
- Monitoring whether communications are being delivered as defined in A28 (communications management plan)
- Assessing whether delivered communications are achieving their intended effect
- Identifying gaps between planned and actual communication effectiveness
- Using observation, conversation, and the SEAM to assess communication reception
- Updating the communications management plan, stakeholder engagement plan, issue log, lessons learned, and stakeholder register
- Triggering revisions of SKL-03-11 (Plan Communications) or SKL-04-07 (Manage Communications) when the current approach is insufficient
- Raising change requests for communications plan changes

This skill does **not** cover:
- Planning the communications approach — that is SKL-03-11
- Creating and distributing communications — that is SKL-04-07
- Managing stakeholder engagement — that is SKL-04-06 and SKL-05-07

---

## 3. PMBOK Anchor

| Field | Value |
|-------|-------|
| **Process** | Monitor Communications |
| **Guide Section** | Process Groups §7.9 |
| **Figure** | Figure 7-17 — I/T/O · Figure 7-18 — Data Flow Diagram |
| **Performance Domain** | Stakeholders · Measurement |
| **Focus Area** | Monitoring and Controlling |
| **Primary Outcome** | Work performance information · Change requests · Updated communications and stakeholder plans |

**PMI definition (paraphrased):** Monitor Communications ensures the information needs of the project and its stakeholders are met, with optimal information flow as defined in the communications management plan and the stakeholder engagement plan.

---

## 4. The Communications Monitoring Loop

Process Groups §7.9 explicitly states that Monitor Communications can trigger an iteration of Plan Communications Management and/or Manage Communications when the current approach is insufficient. This creates a continuous improvement loop:

```text
Plan Communications (SKL-03-11)
        ↓
Manage Communications (SKL-04-07)
        ↓
Monitor Communications (SKL-05-09)
        ↓ [if insufficient]
Revise Plan → Return to SKL-03-11 or SKL-04-07
```

Issues, key performance indicators, risks, or conflicts may trigger an **immediate** revision rather than waiting for the scheduled monitoring cycle.

---

## 5. Roles

### 5.1 Project Manager
Owns communications monitoring. Reviews whether communication activities are meeting stakeholder information needs. Decides when plan revisions are needed. Raises change requests for plan changes.

### 5.2 Communications Lead (if assigned)
Monitors delivery of communications against the plan. Tracks response rates, feedback, and participation. Reports gaps to the project manager.

### 5.3 Project Team Members
Observe stakeholder reactions to communications during meetings, reviews, and informal interactions. Report communication effectiveness issues to the project manager.

### 5.4 Stakeholders
Provide direct or indirect feedback on whether they are receiving the right information at the right time. Their engagement level (via SEAM) is one indicator of communication effectiveness.

---

## 6. Inputs

Process Groups Figure 7-17 identifies:

| Input | Artifact | Role in This Skill |
|-------|----------|--------------------|
| **Resource management plan** | A25 / A14-linked | Defines roles and responsibilities relevant to communication activities |
| **Communications management plan** | A28 / A14-linked | The baseline plan defining what should be communicated, to whom, when, in what format, and via which channel — the standard against which monitoring compares actuals |
| **Stakeholder engagement plan** | A07 | Defines desired engagement levels; communication effectiveness directly influences engagement status |
| **Issue log** | A18 | Communication failures or gaps often surface as issues |
| **Lessons learned register** | A21 | Historical communication effectiveness patterns |
| **Project communications** | A28 delivery records | The actual communications sent — the raw evidence for monitoring |
| **Work performance data** | Executing outputs | Meeting attendance, response rates, feedback received, acknowledgment records |
| **Enterprise environmental factors** | EEF | Organizational communication culture, technology infrastructure, language and cultural factors |
| **Organizational process assets** | OPA / A05 | Communication templates, reporting standards, historical communication records |

---

## 7. Tools and Techniques

Process Groups Figure 7-17 names:

### 7.1 Expert Judgment
Used to interpret communication effectiveness signals, diagnose root causes of communication failure, and recommend appropriate plan revisions.

### 7.2 Project Management Information System (PMIS)
Used to track communication delivery, manage distribution lists, store project communications, and analyze communication patterns.

### 7.3 Data Representation
**Stakeholder Engagement Assessment Matrix (SEAM):**  
The SEAM serves a dual role here — it is both a stakeholder engagement monitoring tool (SKL-05-07) and an indicator of communication effectiveness. If stakeholders are not moving toward their desired engagement level despite communications being sent, it may indicate that the communications are not reaching them or are not resonating.

### 7.4 Interpersonal and Team Skills
**Observation/conversation:**  
Direct observation of stakeholder reactions during meetings, reviews, and project activities, combined with informal conversations, provides qualitative evidence of whether communications are achieving their intended effect. This is the primary qualitative monitoring technique for this process.

### 7.5 Meetings
Status meetings, review meetings, and one-on-one sessions provide direct evidence of information needs being met or unmet. Meeting dynamics reveal whether stakeholders have the information they need to participate effectively.

---

## 8. Communications Monitoring Rules

### Rule 1 — Delivery does not equal reception
Confirming that a communication was sent is not sufficient. Monitor Communications evaluates whether the communication was received, understood, and had the intended effect.

### Rule 2 — Communication gaps must trigger plan revision
When monitoring reveals that the communications management plan is not meeting stakeholder information needs, the plan must be revised — not just the individual communication. This may require a full iteration back to SKL-03-11.

### Rule 3 — Immediate revision for critical issues
Issues, KPI breaches, risks, or stakeholder conflicts that arise from communication failures require immediate plan revision, not waiting for the next scheduled monitoring cycle.

### Rule 4 — SEAM gaps are communication signals
If stakeholder engagement levels are below desired and communications are being sent, the communications approach — channel, format, frequency, or message framing — may be the problem.

### Rule 5 — Communication monitoring and stakeholder monitoring are linked but distinct
Monitor Communications (SKL-05-09) focuses on information flow and plan effectiveness. Monitor Stakeholder Engagement (SKL-05-07) focuses on relationship and engagement level. Both use the SEAM but from different angles.

---

## 9. Step-by-Step Instructions

### Step 1 — Review Communications Delivery Against Plan
For each planned communication in A28, verify:
- Was it delivered on schedule?
- Was it delivered to the correct recipients?
- Was it delivered through the correct channel?
- Was it in the correct format and level of detail?

Flag any delivery failures or deviations.

### Step 2 — Assess Communication Effectiveness
For each delivered communication, assess whether it achieved its intended effect:
- Did recipients acknowledge receipt where required?
- Did decision-makers have the information needed for upcoming decisions?
- Are stakeholders asking questions that indicate they did not receive or understand planned communications?
- Are issues or conflicts arising from information gaps?

### Step 3 — Apply Observation and Conversation
Observe stakeholder behavior in meetings, reviews, and project activities. Hold informal conversations to probe information gaps. Note discrepancies between what stakeholders say they know vs. what was communicated.

### Step 4 — Review SEAM for Communication Signals
Cross-reference the SEAM from SKL-05-07. For stakeholders whose engagement level is below desired, assess whether the communications approach may be contributing to the gap. Identify whether channel, frequency, format, or message framing needs adjustment.

### Step 5 — Identify Communication Gaps and Root Causes
For each identified gap, determine:
- Is this a delivery failure (wrong channel, missed distribution)?
- Is this a comprehension failure (wrong format, language, or complexity level)?
- Is this a timing failure (information delivered too late for the decision it was meant to support)?
- Is this a planning failure (information need not identified in the communications plan)?

### Step 6 — Evaluate Whether Plan Revision Is Needed
If monitoring reveals systematic or recurring gaps, evaluate whether the current communications management plan (A28) and/or stakeholder engagement plan (A07) need revision. Determine whether the issue requires iteration back to SKL-03-11 or SKL-04-07.

### Step 7 — Update Documents
Update the issue log (A18), lessons learned register (A21), and stakeholder register (A03) with communication monitoring findings.

### Step 8 — Raise Change Requests
For changes to the communications management plan, stakeholder engagement plan, or other plan components, raise A12 and route to SKL-05-02.

### Step 9 — Report Communications Status
Include communication plan compliance rate, identified gaps, corrective actions, and any plan revision triggers in A17.

---

## 10. Outputs

Process Groups Figure 7-17 identifies:

| Output | Artifact | Content |
|--------|----------|---------|
| **Work performance information** | A17 | Communication plan compliance, gap summary, effectiveness assessment, corrective actions |
| **Change requests** | A12 | Communications plan revisions, stakeholder engagement plan updates, resource plan updates |
| **Project management plan updates** | Communications management plan · Stakeholder engagement plan | Updated when monitoring reveals plan is not meeting information needs |
| **Project document updates** | A18 issue log · A21 lessons learned · A03 stakeholder register | Reflect communication gaps, stakeholder information issues, and learning |

---

## 11. Decision Logic

| Condition | Action |
|-----------|--------|
| All communications delivered as planned, feedback positive | Report compliance; no plan change needed |
| Individual communication missed or delayed | Log in A18; correct delivery; assess impact on stakeholder information needs |
| Communication reaching stakeholders but not understood | Revise format, language, or level of detail; update A28; raise A12 for plan change |
| Stakeholder information need not covered by current plan | Identify gap; add communication to A28; raise A12 for plan update |
| SEAM gap correlates with communication effectiveness issue | Coordinate with SKL-05-07; revise channel or frequency for affected stakeholder |
| Systematic failure across multiple communications | Trigger full iteration of SKL-03-11 (Plan Communications); raise A12 for plan revision |
| Issue, KPI breach, or conflict arises from communication failure | Immediate plan revision; raise A12; no wait for scheduled monitoring cycle |

---

## 12. Communication Effectiveness Assessment Framework

| Dimension | Monitoring Question | Evidence Source |
|-----------|--------------------|-----------------|
| **Delivery** | Was the communication sent on time, to the right recipients, via the right channel? | A28 delivery log · PMIS |
| **Receipt** | Did recipients receive and acknowledge the communication? | Acknowledgment records · Response rates |
| **Comprehension** | Did recipients understand the message as intended? | Q&A in meetings · Follow-up requests · Observation |
| **Action** | Did recipients take the expected action based on the communication? | Decision records · Meeting outcomes |
| **Engagement effect** | Did the communication contribute to the desired stakeholder engagement level? | SEAM C position · SKL-05-07 |

---

## 13. Tailoring Guidance

| Context | Guidance |
|---------|----------|
| **Small project** | Informal communication monitoring at status meetings; simplified feedback loop |
| **Large or stakeholder-intensive project** | Formal monitoring cycle with SEAM cross-reference; communication effectiveness metrics tracked in PMIS |
| **Adaptive project** | Communication monitored at each sprint review; retrospectives capture communication improvement actions; product owner manages key information flow |
| **Regulated or public project** | Formal records of all communications required; monitoring includes compliance with regulatory disclosure requirements |

---

## 14. Failure Cases

| Failure Mode | Consequence | Prevention |
|-------------|-------------|-----------|
| Monitoring confirms delivery only, not effectiveness | Communication gaps persist undetected | Rule 1: Delivery ≠ reception; assess effect |
| Gaps identified but plan not revised | Same gaps recur next cycle | Rule 2: Gaps must trigger plan revision |
| Communication failure response delayed to next scheduled cycle | Conflict or decision failure occurs in the interim | Rule 3: Critical issues trigger immediate revision |
| SEAM gaps not cross-referenced with communications | Communication root cause of engagement problem missed | Rule 4: SEAM gaps are communication signals |

---

## 15. Tests

| Test | Assertion | Pass | Fail |
|------|-----------|------|------|
| T-1 | All planned communications reviewed for delivery compliance this cycle | Delivery log reviewed and annotated | No delivery review performed |
| T-2 | Communication effectiveness assessed beyond delivery confirmation | Effectiveness notes in A17 or monitoring log | Only delivery confirmation, no effectiveness assessment |
| T-3 | SEAM reviewed for communication effectiveness signals | SEAM cross-reference documented | No SEAM review in communications monitoring |
| T-4 | Communication gaps result in plan revision or A12 | A28 updated or A12 raised for plan change | Gaps noted but plan unchanged |
| T-5 | Immediate revision triggered for critical issues | A12 raised same cycle as critical issue identified | Issue waited for scheduled monitoring cycle |

---

## 16. Dependency Chain

```text
UPSTREAM
SKL-03-11 — Plan Communications Management (A28 baseline)
SKL-04-07 — Manage Communications (communications being delivered)
A28 — Communications management plan and delivery records
A07 — Stakeholder engagement plan (SEAM)
A03 — Stakeholder register

CURRENT SKILL
SKL-05-09 — Monitor Communications

DOWNSTREAM
A17 — Work performance information (communications section)
A12 — Change requests for plan revisions
SKL-05-02 — Perform Integrated Change Control
A28 — Updated communications management plan
A07 — Updated stakeholder engagement plan
A18 — Issue log updated
A21 — Lessons learned updated
→ Triggers: SKL-03-11 (Plan revision) or SKL-04-07 (Delivery revision)
```

---

## 17. Examples

### Example A — Format Mismatch Causing Comprehension Failure
At month 2, observation during steering committee meetings reveals that three committee members are consistently asking questions about schedule status that are covered in the bi-weekly project report. Informal conversation reveals the report format is too dense for non-PM stakeholders. Monitor Communications identifies a comprehension failure. The communications plan is revised to add a one-page executive summary with a traffic-light schedule dashboard for the steering committee. A12 is raised for the plan update. The following cycle, steering committee questions about schedule status drop significantly.

### Example B — Immediate Revision Triggered by Conflict
At week 9, a key technical stakeholder raises a formal objection to a design decision, claiming she was not consulted. Review of A28 shows she was listed as a secondary recipient of the design review meeting minutes, not a primary invitee. Monitor Communications identifies a planning failure — her information need was incorrectly categorized. An immediate revision of A28 is initiated to include her as a primary stakeholder for all design decisions. A12 is raised, and A18 is updated with the issue. The next design review meeting includes her as a primary participant.

---

## 18. Primary References

| Reference | Alias | Section | Purpose |
|-----------|-------|---------|---------|
| Process Groups: A Practice Guide | Process-Groups | §7.9, Figure 7-17, Figure 7-18 | Core process definition, I/T/O, data flow, iteration trigger logic |
| PMBOK Guide, Eighth Edition | PMBOK8 | Stakeholders domain · Measurement domain | Communications monitoring principles, tailoring |

---

## Change Log

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0.0 | 2026-05-30 | PMO Repository | Initial build |
| 1.1.0 | 2026-06-03 | Wave 1 QA | Added GOV YAML front-matter; updated Last Updated date |

---

*Authority: Process-Groups §7.9 · PMBOK8*  
*Owner: Project Manager / Communications Lead*  
*Upstream: A28 communications plan · SKL-04-07 · A07 stakeholder engagement plan*  
*Downstream: A17 communications information · A12 change requests · SKL-05-02 · Triggers SKL-03-11 or SKL-04-07*
