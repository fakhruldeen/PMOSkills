# PMOSkills Python SDK

Python SDK for **PMOSkills** — an Executable Skill System & PMO Reference Architecture built on the PMI PMBOK® 8th Edition.

This SDK provides programmatic access to the entire compiled PMOSkills database (skills, processes, artifacts, reference guides, shared tools, and tests) for use in Python agentic AI and LLM workflows (e.g., LangGraph, Autogen, CrewAI).

## Installation

```bash
pip install pmoskills
```

## Quick Start

```python
from pmoskills import pmoskills, inject

# 1. Access executable skills (Packs 01 to 08, 58 skills total)
skill = pmoskills.get_skill("SKL-01-01")
print(f"Skill Title: {skill['title']}")
print(f"Focus Focus: {skill['metadata']['domain']}")

# 2. Access PMBOK 8 Process Records
process = pmoskills.get_process("PR01")
print(f"Process: {process['title']}")
print(f"Inputs: {process['inputs']}")

# 3. Retrieve Artifact Templates
artifact = pmoskills.get_artifact("A01")
print(f"Artifact Template:\n{artifact['rawContent']}")

# 4. Inject variables into templates/prompts
prompt_template = "Draft a plan for [project_name] with complexity tier [complexity]."
injected = inject(prompt_template, {
    "project_name": "Apex Project",
    "complexity": "T1"
})
print(injected)
```

## API Reference

### Executable Skills
- `pmoskills.get_skills()`: Returns a list of all skills.
- `pmoskills.get_skill(id)`: Retrieves a specific skill by its ID (e.g., `SKL-01-01`).
- `pmoskills.get_skills_by_domain(domain)`: Returns all skills in a specific Performance Domain (e.g., `Planning`).

### Processes
- `pmoskills.get_processes()`: Returns a list of all PMBOK 8 processes.
- `pmoskills.get_process(id)`: Retrieves a specific process by its ID (e.g., `PR01`).

### Artifacts
- `pmoskills.get_artifacts()`: Returns a list of all artifacts.
- `pmoskills.get_artifact(id)`: Retrieves a specific artifact by its ID (e.g., `A01`).

### References
- `pmoskills.get_reference_files()`: Returns a list of reference documents.
- `pmoskills.get_reference_file(path)`: Retrieves a specific reference file content by its relative path.

### Shared Assets
- `pmoskills.get_shared_files()`: Returns a list of shared assets.
- `pmoskills.get_shared_file(path)`: Retrieves a specific shared file by its relative path.

### Compliance Tests
- `pmoskills.get_test_files()`: Returns a list of compliance test assets.
- `pmoskills.get_test_file(id)`: Retrieves a test asset by its ID.

### Ontology & System Prompts
- `pmoskills.get_system_prompts()`: Returns a list of system role prompts.
- `pmoskills.get_system_prompt(id)`: Retrieves a specific system prompt (e.g., `pmo-orchestrator`).
- `pmoskills.get_ontology()`: Retrieves the PMOSkills ontology specification.

---

## Citation

```bibtex
@misc{pmoskills2026,
  author    = {Fakhruldeen, Mohamed Fouad},
  title     = {{PMOSkills: An Executable Skill System \& PMO Reference Architecture
                built on PMI PMBOK® 8th Edition}},
  month     = jun,
  year      = 2026,
  publisher = {Zenodo},
  version   = {v0.6},
  doi       = {10.5281/zenodo.20510540},
  url       = {https://doi.org/10.5281/zenodo.20510540}
}
```

---

## License

MIT © [Mohamed Fouad Fakhruldeen](https://fakhruldeen.me)

*PMBOK® is a registered trademark of the Project Management Institute, Inc. This project is independently developed and is not affiliated with or endorsed by PMI.*
