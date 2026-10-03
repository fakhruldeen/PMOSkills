# 📚 PMOSkills Onboarding Handbook — Multi-Audience Portal

Welcome to the official **PMOSkills Onboarding Handbook and Master Portal**! PMOSkills is a state-of-the-art, executable PMO reference architecture built strictly upon the **PMI PMBOK® 8th Edition** (Primary Authority) and **23 secondary companion standards** (Secondary Authority).

This repository is uniquely engineered as a **dual-purpose operating system** designed to serve both **Human Practitioners** and **Autonomous AI Agents / Developer Tools** with equal fidelity and deterministic precision.

To help you get started, we have organized the entire documentation suite into **four specialized, high-impact tracks**:

---

## 🗺️ Select Your Onboarding Track

```
   ┌─────────────────────────────────────────────────────────────┐
   │             PMOSkills Master Onboarding Handbook            │
   └──────────────────────────────┬──────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
 👔 Track 1: Human        🤖 Track 2: AI           🛠️ Track 3: Tool
  Practitioners            Agents & Prompts         Builders & QA
 (PMs & PMO Directors)    (LLMs & Co-pilots)       (ASTs & Integrators)
```

### 👔 Track 1: Human Project Managers & PMO Directors
*For project managers, PMO directors, scrum masters, and business analysts seeking to instantiate standards and run active projects.*

| Document | Purpose | Core Standard Coverage |
|---|---|---|
| 👔 **[Executive Guide to Agentic PMO & MCP](general/pmo-executive-guide-ai-mcp.md)** | 10,000-ft strategic overview translating AI, Agents, and MCP for leadership. | Strategic PMO & OPM Alignment |
| 📘 **[Getting Started Guide](human-practitioners/getting-started.md)** | Initialize workspace, establish directory control, and start execution. | PMO Services, Infrastructure |
| ⚙️ **[SOP: How to Use Skills](human-practitioners/how-to-use-skills.md)** | Dynamic instructions on using the 48 atomic skills (Packs 01–07). | Executable PM checklists |
| 📁 **[SOP: How to Use Artifacts](human-practitioners/how-to-use-artifacts.md)** | Guidance on instantiating the 78 clean templates and case examples. | Core PMBOK 8 Deliverables |
| ⚖️ **[SOP: Authority & T1-T4 Routing](human-practitioners/authority-routing.md)** | PMO escalation models, RACI charts, and decision matrices. | Portfolio & PMO Governance |
| 👥 **[Audience & Role Guide](human-practitioners/audience-guide.md)** | Maps organizational roles (PM, PMO, Admin) to specific skills. | Stakeholder Performance Domain |
| 📘 **[PM Handbook: Lifecycles SOP](human-practitioners/pm-handbook.md)** | Directives for Waterfall, Agile sprint iterations, and Hybrid loops. | Lifecycle Delivery Domain |
| ✂️ **[Tailoring & Scaling Guide](human-practitioners/tailoring-guide.md)** | Tailoring parameters scaled across T1–T4 project complexity. | PMBOK 8 Tailoring Section |
| ⚖️ **[Governance & RACI Guide](human-practitioners/governance-guide.md)** | OPM corporate-to-project mappings and core governance RACI parameters. | PMO Services governance |

---

### 🤖 Track 2: AI Agents & Autonomous LLM Co-Pilots
*For LLM prompt engineers, GPT developers, and autonomous agent frameworks interacting programmatically with the repository.*

| Document | Purpose | Format |
|---|---|---|
| 🤖 **[AI Agent Master Guide](ai-agents/ai-agent-guide.md)** | Master prompt injection templates, zero-shot loaders, and operational bounds. | Markdown + Prompts |
| 📖 **[Source Reference Extraction Guide](ai-agents/source-usage-guide.md)** | Mappings to the 23 companion books, citation syntaxes, and authority levels. | PMBOK 8 Ontology |
| 🧠 **[Knowledge Graph Ontology](ai-agents/ontology-specification.md)** | Directed relation schemas, edge classes, and metadata parsing rules. | AI Graph Traversal |
| 🤖 **[System Prompts Library](ai-agents/system-prompts.md)** | Prompt library initializing PMO Orchestrator, Risk & Waste auditors. | Prompt Injection Templates |

---

### 🛠️ Track 3: Developer Tools & Integration QA
*For systems developers, tool integrations, AST builders, and continuous integration validation engineers.*

| Document | Purpose | Format |
|---|---|---|
| 📋 **[Framework Changelog Guide](developer-tools/changelog-guide.md)** | Versioning thresholds, metadata change controls, and scorecard audits. | Governance Rules |
| 📊 **[Skills-Reference CSV Map](developer-tools/skill-reference-map.csv)** | Programmatic skill-to-PMBOK8-process crosswalk. | CSV Dataset |
| 🛠️ **[Automated Quality Gates](developer-tools/automated-validators.md)** | pre-commit hook hooks, CLI validation rules, and structural testing. | CLI Validator Handbooks |

---

### 🌱 Track 4: General References & Open-Source Library
*Core glossary definitions, frequently asked questions, sustainability (ESG) indices, and open-source contribution guidelines.*

| Document | Purpose | Core Standard Coverage |
|---|---|---|
| 👔 **[Executive Guide to Agentic PMO & MCP](general/pmo-executive-guide-ai-mcp.md)** | 10,000-ft strategic overview translating AI, Agents, and MCP for leadership. | Strategic PMO & OPM Alignment |
| 📖 **[Glossary of PM Terms](general/glossary.md)** | Standard definitions for PMBOK 8th Edition terminologies. | Lexicon standard alignment |
| ❓ **[Frequently Asked Questions](general/faq.md)** | Standard repository operations, template copy rules, and troubleshooting. | PMO Helpdesk Support |
| 🌱 **[Sustainability & ESG Guide](general/sustainability-guide.md)** | ESG principles and metrics mapped directly to Pack 03 skills. | Environmental Stewardship |
| 🤝 **[How to Contribute](general/how-to-contribute.md)** | Coding conventions, validation rules, and pull request gates. | Open-Source Governance |


---

## 🎨 Unified Project Lifecycle SOP Mappings

Depending on your delivery framework, you can follow standard operational routes mapping through our Executable Skills (`skills/`) and Templates (`artifacts/`):

### 1. Predictive (Waterfall) Lifecycle Routing
```
[Setup Governance] ➔ [Project Initiating] ➔ [Triple-Constraints Baselines] ➔ [Monitoring & Gate Reviews] ➔ [Closure & Transitions]
```
1. **Setup:** Consult **[Establishing Governance](human-practitioners/authority-routing.md)** and skill `SKL-01-01`.
2. **Initiate:** Follow processes `PR01`/`PR02`, instantiating business cases and project charters (`A01` / `A04`).
3. **Plan:** Execute Pack 03 skills, developing the integrated Project Management Plan (`A14`) including Schedule (`A15`) and Budget (`A16`).
4. **Monitor & Control:** Track thresholds using `threshold-router.md` and manage change control issues via `A18` / `A19`.
5. **Close:** Execute administrative archivals via `A24` and lessons learned records (`A21`).

### 2. Adaptive (Agile) Lifecycle Routing
```
[Define Vision] ➔ [Collaborative Story Mapping] ➔ [Sprint Planning & Execution] ➔ [continuous Waste Auditing] ➔ [Value Transition]
```
1. **Vision:** Define vision and product backlogs using template `A28`.
2. **Story Mapping:** Plan releases using story mapping practices outlined in skill `SKL-07-02`.
3. **Sprint Run:** Manage Kanban boards and burn-down analytics via `SKL-07-03` and sprint backlogs (`A30`).
4. **Waste Testing:** Eliminate overhead using the programmatic waste auditor `shared/validators/waste-test.md` at sprint boundaries.
5. **Release:** Transition features to benefits realization via `A24`.

### 📦 Programmatic Distribution Channels (SDKs)

For developers and integration engineers building autonomous agents or automated tooling, the PMOSkills corpus is published as zero-dependency packages:
- **NPM Package (TypeScript / Node.js / Edge):** `npm install pmoskills`
- **PyPI Package (Python / AI Orchestrators):** `pip install pmoskills`

These packages embed all 369+ Markdown definitions, templates, reference documents, checklist rules, and validation tests in a highly optimized, single-JSON database structure for fast, zero-filesystem in-memory lookup.

---

*Authority: PMBOK 8 Core Standard · PMI Companion References Secondary · PMO Shared Governance Board*  
*Contact & Lead Architect:* **Mohamed Fouad Fakhruldeen** ([fakhruldeen.me](https://fakhruldeen.me))
