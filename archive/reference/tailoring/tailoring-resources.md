---
ref_id: TAILOR-RES
ref_type: FocusArea
ref_name: "Resources Domain Tailoring Guidance"
version: "1.0.0"
status: Active
pmbok8_source: "PMBOK8 Guide §2.2 & §2.7 · Procurement Practice Standards"
file_path: "reference/tailoring/tailoring-resources.md"
---

# Resources Domain Tailoring Guidance

**Ref ID:** TAILOR-RES  
**Type:** FocusArea  
**PMBOK8 Source:** PMBOK 8 Resources & Team Performance Domains  
**Version:** 1.0.0  
**Status:** Active  

---

## 1. Resource Tailoring Factors

Resource tailoring ensures that resource requirements planning, physical equipment tracking, team capability development, and vendor acquisitions are proportional to the project's complexity and supply chain risks.

Key tailoring factors include:
* **Physical vs. Human Ratio:** Software projects focus heavily on human talent capacity; construction/manufacturing projects focus on material logistics.
* **Specialized Skill Scarcity:** Highly niche skills (e.g., legacy database migration, AI model training) require long-lead resource planning.
* **Sourcing Strategy:** Selecting make-or-buy options, vendor contracts, and partner integrations affects internal capacity planning.
* **Equipment & License Logistics:** Cloud server instantiations, software subscriptions, and hardware procurement schedules.

---

## 2. Scaling Resources Across T1–T4

Resource management mechanisms are scaled to fit project tiers:

| Resource Element | T1 (Low Complexity) | T2 (Medium Complexity) | T3 (High Complexity) | T4 (Strategic/Enterprise) |
|---|---|---|---|---|
| **Resource Tracking** | Simple task assignments | Resource Requirements (Doc) | Resource Requirements + RBS | Enterprise Resource Planning (ERP)|
| **Acquisition Mode** | Direct PM selection | PM + Functional Manager | Formal HR / Supplier Request | Multi-vendor bidding & RFP |
| **Material Logistics** | None (ad-hoc purchase) | Standard purchase orders | Dedicated logistics tracking | Global supply chain audits |
| **Contract Oversight** | Direct PM review | Standard PMO oversight | Legal + PMO audit gates | Steering Board + Legal Counsel |

---

## 3. Scenario Integration (Meridian CRM System Upgrade)

During the *Meridian CRM System Upgrade* project, the project was tailored to handle niche human and physical resources.
* **Human Resource Tailoring:** Due to specialized API coding needs, we hired an external agency rather than training internal junior coders (Make-or-Buy in `PR26`).
* **Physical Resource Tailoring:** Subscribed to a cloud-based development environment using a **Time and Material (T&M)** contract, setting cost ceilings (`PR19`).
* **Outcome:** Resource levels were optimized daily, preventing internal bottlenecks and completing migration on time.

---

## 4. Resource Tailoring Checklist

When tailoring project resources, answer these key questions:

- [ ] **Are internal skills sufficient?** Conduct a resource capacity review before assigning critical path tasks to junior resources.
- [ ] **How are physical materials managed?** For projects requiring hardware or software licenses, establish a strict inventory and licensing log.
- [ ] **Is a Resource Breakdown Structure (RBS) needed?** For T2–T4, map resources systematically using an RBS to categorize skills and equipment.
- [ ] **How is supplier performance monitored?** Establish clear Service Level Agreements (SLAs) and track vendor milestone completions inside `PR41`.

---

*Authority: PMBOK8 Guide §2.2 & §2.7 · Procurement Practice Standards*
