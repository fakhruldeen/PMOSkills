import json
import os
from typing import Dict, List, Optional, Any

class PMOSkillsLoader:
    def __init__(self, store_path: Optional[str] = None):
        if not store_path:
            # Locate the store.json inside the package data directory
            current_dir = os.path.dirname(os.path.abspath(__file__))
            store_path = os.path.join(current_dir, "data", "store.json")
            
        if not os.path.exists(store_path):
            # Try importing using importlib.resources (fallback for some zip imports/wheels)
            try:
                from importlib import resources
                # Python 3.9+ resource traversal
                if hasattr(resources, 'files'):
                    data = resources.files('pmoskills.data').joinpath('store.json').read_text(encoding='utf-8')
                    self.store = json.loads(data)
                    return
                else:
                    # Python 3.8 fallback
                    data = resources.read_text('pmoskills.data', 'store.json', encoding='utf-8')
                    self.store = json.loads(data)
                    return
            except Exception:
                pass
                
        with open(store_path, "r", encoding="utf-8") as f:
            self.store = json.load(f)

    def get_skill(self, id: str) -> Optional[Dict[str, Any]]:
        """Retrieves a specific executable skill by its unique ID or title."""
        skills = self.store.get("skills", {})
        if id in skills:
            return skills[id]
        for s in skills.values():
            if s.get("id") == id or s.get("title") == id:
                return s
        return None

    def get_skills(self) -> List[Dict[str, Any]]:
        """Returns all 48 executable skills."""
        return list(self.store.get("skills", {}).values())

    def get_skills_by_domain(self, domain: str) -> List[Dict[str, Any]]:
        """Returns skills matching a specific performance domain."""
        domain_lower = domain.lower()
        return [
            s for s in self.get_skills()
            if s.get("metadata", {}).get("domain") and domain_lower in s["metadata"]["domain"].lower()
        ]

    def get_process(self, id: str) -> Optional[Dict[str, Any]]:
        """Retrieves a specific PMBOK 8 process record by its ID or title."""
        processes = self.store.get("processes", {})
        if id in processes:
            return processes[id]
        for p in processes.values():
            if p.get("id") == id or p.get("title") == id:
                return p
        return None

    def get_processes(self) -> List[Dict[str, Any]]:
        """Returns all 41 process records."""
        return list(self.store.get("processes", {}).values())

    def get_artifact(self, id: str) -> Optional[Dict[str, Any]]:
        """Retrieves an artifact deliverable template by its ID, title, relative path, or filename."""
        artifacts = self.store.get("artifacts", {})
        if id in artifacts:
            return artifacts[id]
        
        lower_id = id.lower()
        clean_id = lower_id[:-3] if lower_id.endswith(".md") else lower_id

        for a in artifacts.values():
            if a.get("id", "").lower() == lower_id or a.get("title", "").lower() == lower_id:
                return a
            
            path_val = a.get("path")
            if path_val:
                lower_path = path_val.lower()
                filename = lower_path.split("/")[-1]
                filename_no_ext = filename[:-3] if filename.endswith(".md") else filename
                if filename == lower_id or filename_no_ext == clean_id or lower_path == lower_id:
                    return a
        return None

    def get_artifacts(self) -> List[Dict[str, Any]]:
        """Returns all artifact deliverable templates."""
        return list(self.store.get("artifacts", {}).values())

    def get_reference_file(self, path: str) -> Optional[Dict[str, Any]]:
        """Retrieves a specific reference file by its relative path or title."""
        reference = self.store.get("reference", {})
        if path in reference:
            return reference[path]
        for r in reference.values():
            if r.get("path") == path or r.get("title") == path:
                return r
        return None

    def get_reference_files(self) -> List[Dict[str, Any]]:
        """Returns all reference files."""
        return list(self.store.get("reference", {}).values())

    def get_shared_file(self, path: str) -> Optional[Dict[str, Any]]:
        """Retrieves a specific shared configuration file by its path or fileName."""
        shared = self.store.get("shared", {})
        if path in shared:
            return shared[path]
        for s in shared.values():
            if s.get("path") == path or s.get("fileName") == path:
                return s
        return None

    def get_shared_files(self) -> List[Dict[str, Any]]:
        """Returns all shared files."""
        return list(self.store.get("shared", {}).values())

    def get_test_file(self, id: str) -> Optional[Dict[str, Any]]:
        """Retrieves a specific test file by ID (e.g. ST-SKL-01-01) or path."""
        tests = self.store.get("tests", {})
        if id in tests:
            return tests[id]
        for t in tests.values():
            if t.get("id") == id or t.get("path") == id:
                return t
        return None

    def get_test_files(self) -> List[Dict[str, Any]]:
        """Returns all test files."""
        return list(self.store.get("tests", {}).values())

    def get_system_prompt(self, id: str) -> Optional[Dict[str, Any]]:
        """Retrieves an AI agent system prompt from the library by its ID."""
        return self.store.get("systemPrompts", {}).get(id)

    def get_system_prompts(self) -> List[Dict[str, Any]]:
        """Returns all system prompts."""
        return list(self.store.get("systemPrompts", {}).values())

    def get_ontology(self) -> Dict[str, Any]:
        """Returns the PMBOK 8 project management ontology specification."""
        return self.store.get("ontology", {})

    def get_version(self) -> str:
        """Returns the version of the PMOSkills framework."""
        return self.store.get("version", "0.0.0")

    def get_compiled_at(self) -> str:
        """Returns the exact build compilation ISO timestamp."""
        return self.store.get("compiledAt", "")

# Instantiate a default singleton loader for convenience
pmoskills = PMOSkillsLoader()
