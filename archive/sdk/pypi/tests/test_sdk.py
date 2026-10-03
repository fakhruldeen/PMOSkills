import unittest
from pmoskills import pmoskills, inject

class TestPMOSkillsSDK(unittest.TestCase):
    # Executable Skills
    def test_load_all_48_executable_skills(self):
        skills = pmoskills.get_skills()
        self.assertEqual(len(skills), 58)

    def test_retrieve_specific_skill_by_id_and_metadata(self):
        skill = pmoskills.get_skill("SKL-01-01")
        self.assertIsNotNone(skill)
        self.assertEqual(skill.get("id"), "SKL-01-01")
        self.assertEqual(skill.get("title"), "Establish PM Governance Framework")
        self.assertEqual(skill.get("metadata", {}).get("domain"), "Governance")
        self.assertIn("## Purpose", skill.get("template", ""))

    def test_support_filtering_skills_by_domain(self):
        governance_skills = pmoskills.get_skills_by_domain("Governance")
        self.assertGreater(len(governance_skills), 0)
        self.assertEqual(governance_skills[0].get("metadata", {}).get("domain"), "Governance")

    # Process Records
    def test_load_all_41_pmbok_8_processes(self):
        processes = pmoskills.get_processes()
        self.assertEqual(len(processes), 41)

    def test_retrieve_specific_process_by_id(self):
        process = pmoskills.get_process("PR01")
        self.assertIsNotNone(process)
        self.assertEqual(process.get("id"), "PR01")
        self.assertEqual(process.get("title"), "Develop Project Charter")
        self.assertIn("Business Documents", process.get("inputs", []))
        self.assertIn("Project Charter", process.get("outputs", []))
        self.assertIn("Expert Judgment", process.get("tools", []))

    # System Prompts and Ontology
    def test_load_predefined_system_prompts(self):
        orchestrator = pmoskills.get_system_prompt("pmo-orchestrator")
        self.assertIsNotNone(orchestrator)
        self.assertIn("Master PMO Orchestrator", orchestrator.get("title", ""))
        self.assertIn("You are the PMOSkills Master PMO Orchestrator", orchestrator.get("prompt", ""))

    def test_retrieve_ontology_specification(self):
        ontology = pmoskills.get_ontology()
        self.assertIsNotNone(ontology)
        self.assertEqual(ontology.get("id"), "pmoskills-ontology")
        self.assertIn("# 🧠 PMOSkills Knowledge Graph & Ontology Specification", ontology.get("content", ""))

    # Artifact Templates
    def test_load_all_artifact_templates(self):
        artifacts = pmoskills.get_artifacts()
        self.assertEqual(len(artifacts), 100)

    def test_retrieve_a01_template(self):
        a01 = pmoskills.get_artifact("A01")
        self.assertIsNotNone(a01)
        self.assertEqual(a01.get("id"), "A01")
        self.assertIn("Business Case", a01.get("title", ""))

    def test_resolve_artifact_collisions_and_retrieve_both_a20_a27_variants(self):
        team_charter = pmoskills.get_artifact("A20-team-charter.md")
        self.assertIsNotNone(team_charter)
        self.assertEqual(team_charter.get("title"), "Team Charter")

        risk_record = pmoskills.get_artifact("A20-Quantitative-Risk-and-Reserve-Decision-Record.md")
        self.assertIsNotNone(risk_record)
        self.assertEqual(risk_record.get("title"), "Quantitative Risk and Reserve Decision Record")

        team_health = pmoskills.get_artifact("A27-team-health-development-record.md")
        self.assertIsNotNone(team_health)
        self.assertEqual(team_health.get("title"), "A27 — Team Health and Development Record")

        project_closure = pmoskills.get_artifact("A27-project-closure-record.md")
        self.assertIsNotNone(project_closure)
        self.assertEqual(project_closure.get("title"), "Project Closure Record")

    # Reference Files
    def test_load_non_process_reference_files(self):
        ref_files = pmoskills.get_reference_files()
        self.assertGreater(len(ref_files), 0)
        self.assertTrue(any(r.get("category") == "principles" for r in ref_files))

    def test_retrieve_principle_by_path(self):
        p01 = pmoskills.get_reference_file("reference/principles/pmbok8/P8-01-holistic-view.md")
        self.assertIsNotNone(p01)
        self.assertIn("Holistic", p01.get("title", ""))

    # Shared Assets
    def test_load_shared_assets(self):
        shared_files = pmoskills.get_shared_files()
        self.assertGreater(len(shared_files), 0)
        self.assertTrue(any(s.get("fileName") == "validate_structure.py" for s in shared_files))

    def test_retrieve_validate_structure_content(self):
        validator = pmoskills.get_shared_file("shared/validate_structure.py")
        self.assertIsNotNone(validator)
        self.assertIn("PMOSKILLS STRUCTURAL INTEGRITY VALIDATOR", validator.get("rawContent", ""))

    # Compliance and Skill Tests
    def test_load_all_testing_scenarios(self):
        test_files = pmoskills.get_test_files()
        self.assertGreater(len(test_files), 0)

    def test_retrieve_st_skl_01_01_test_scenario(self):
        st01 = pmoskills.get_test_file("ST-SKL-01-01")
        self.assertIsNotNone(st01)
        self.assertEqual(st01.get("id"), "ST-SKL-01-01")
        self.assertIn("Establish PM Governance Framework", st01.get("title", ""))

    # Prompt Template Injector
    def test_inject_brace_placeholders(self):
        template = "Hello {{ name }}! Welcome to {{ projectName }}."
        result = inject(template, {"name": "Alice", "projectName": "Helios"})
        self.assertEqual(result, "Hello Alice! Welcome to Helios.")

    def test_inject_field_placeholders(self):
        template = "Execute [FIELD: skillName] for project [FIELD:projectId]."
        result = inject(template, {"skillName": "Charter Setup", "projectId": "PRJ-101"})
        self.assertEqual(result, "Execute Charter Setup for project PRJ-101.")

    def test_inject_bracket_placeholders(self):
        template = "Authorize [role] to manage [scope]."
        result = inject(template, {"role": "PMO Director", "scope": "Governance Baseline"})
        self.assertEqual(result, "Authorize PMO Director to manage Governance Baseline.")

if __name__ == "__main__":
    unittest.main()
