import os
import json

def main():
    root_dir = "/home/mohamed/Desktop/Work/PMSkills/github/PMOSkills"
    store_path = os.path.join(root_dir, "sdk/npm/src/db/store.json")
    matrix_file_path = os.path.join(root_dir, "docs/pmbok8-traceability-matrix.md")
    
    if not os.path.exists(store_path):
        print(f"Error: Store not found at {store_path}")
        return
        
    with open(store_path, 'r', encoding='utf-8') as f:
        store = json.load(f)
        
    skills = store['skills']
    processes = store['processes']
    artifacts = store['artifacts']
    
    # Map from Process PRxx to Skills
    process_to_skills = {pr_id: [] for pr_id in processes}
    
    # Map from Artifact Axx to Skills (producing/consuming)
    artifact_to_skills = {path: {'produced': [], 'consumed': []} for path in artifacts}
    
    # Resolve mappings
    for skl_id, skl in skills.items():
        anchor = skl['metadata'].get('pmbok8_process_anchor', '')
        
        # Check matching process PR ids in the anchor
        for pr_id in processes:
            # Matches "PRxx" or the process name
            pr_name = processes[pr_id]['title']
            if pr_id in anchor or pr_name.lower() in anchor.lower() or pr_id in skl['metadata'].get('citations', []):
                process_to_skills[pr_id].append(skl_id)
            # Fallback check if the skill name matches the process name
            elif pr_name.lower() in skl['title'].lower():
                process_to_skills[pr_id].append(skl_id)
                
        # Match artifacts
        output = skl['metadata'].get('primary_artifact_output', '')
        for art_path, art in artifacts.items():
            art_id = art['id']
            if art_id in output or art['title'].lower() in output.lower():
                artifact_to_skills[art_path]['produced'].append(skl_id)
            for upd in skl['metadata'].get('artifacts_updated', []):
                if art_id in upd or art['title'].lower() in upd.lower():
                    artifact_to_skills[art_path]['consumed'].append(skl_id)

    # 1. Focus Area -> Process -> Skill -> Artifact Table
    mapping_rows = []
    
    # Group processes by Focus Area
    # Standard mapping of PR01-PR41 to Focus Areas
    # PR01-PR02: Initiating
    # PR03-PR27: Planning
    # PR28-PR29: Executing (and others)
    # PR30-PR39: Monitoring & Controlling
    # PR40: Closing
    # PR41: Executing/Monitoring (Procurements control)
    
    focus_areas = {
        'Initiating': ['PR01', 'PR02'],
        'Planning': [f'PR{i:02d}' for i in range(3, 28)],
        'Executing': ['PR28', 'PR29'],
        'Monitoring & Controlling': [f'PR{i:02d}' for i in range(30, 40)] + ['PR41'],
        'Closing': ['PR40']
    }
    
    for fa, pr_list in focus_areas.items():
        for pr_id in pr_list:
            if pr_id not in processes:
                continue
            pr_name = processes[pr_id]['title']
            mapped_skills = process_to_skills[pr_id]
            skills_str = ", ".join([f"[{s}](../{skills[s]['metadata']['file_path']})" for s in mapped_skills]) if mapped_skills else "*No Skill Mapped (Gap)*"
            
            # Find associated artifacts (outputs of the process/skills)
            associated_artifacts = []
            for art_path, art in artifacts.items():
                # Check if this process lists this artifact as output
                if any(art['id'] in out for out in processes[pr_id].get('outputs', [])):
                    associated_artifacts.append(art['id'])
                # Or if the mapped skills produce this artifact
                for s in mapped_skills:
                    if s in artifact_to_skills[art_path]['produced']:
                        associated_artifacts.append(art['id'])
            associated_artifacts = sorted(list(set(associated_artifacts)))
            artifacts_str = ", ".join(associated_artifacts) if associated_artifacts else "None"
            
            mapping_rows.append(f"| {fa} | {pr_id} | {pr_name} | {skills_str} | {artifacts_str} |")

    # 2. Performance Domain Coverage Heat Map
    domain_skills = {
        'Governance': [],
        'Scope': [],
        'Schedule': [],
        'Finance': [],
        'Stakeholders': [],
        'Resources': [],
        'Risk': []
    }
    for skl_id, skl in skills.items():
        domains = skl['metadata'].get('performance_domains', [])
        if isinstance(domains, str):
            domains = [domains]
        for d in domains:
            if d in domain_skills:
                domain_skills[d].append(skl_id)

    domain_rows = []
    for d, s_list in domain_skills.items():
        count = len(s_list)
        if count >= 8:
            status = "🟢 Full Coverage"
        elif count >= 3:
            status = "🟡 Partial Coverage"
        elif count > 0:
            status = "🟠 Low Coverage"
        else:
            status = "🔴 No Coverage (Gap)"
        domain_rows.append(f"| {d} | {count} | {status} | {', '.join(s_list)} |")

    # 3. Gap Register
    gap_rows = []
    for pr_id, mapped_skills in process_to_skills.items():
        if not mapped_skills:
            gap_rows.append(f"| {pr_id} | {processes[pr_id]['title']} | Mapped to reference only |")

    content = f"""# PMBOK 8 Traceability Matrix

**Version:** 1.0.0  
**Status:** Active  
**Last Updated:** 2026-06-07  
**Authority:** PMBOK 8 (Guide + Standard + Appendices)

---

## 1. Focus Area → Process → Skill → Artifact Mapping

| Focus Area | Process ID | Process Name | Mapped Skills | Primary Artifacts |
|------------|------------|--------------|---------------|-------------------|
""" + "\n".join(mapping_rows) + f"""

---

## 2. Performance Domain Coverage Heat Map

| Performance Domain | Mapped Skills Count | Status | Skills |
|--------------------|---------------------|--------|--------|
""" + "\n".join(domain_rows) + f"""

---

## 3. Process Gap Register

The following PMBOK 8 processes currently do not have a dedicated executable skill, or are covered via reference:

| Process ID | Process Name | Coverage Notes |
|------------|--------------|----------------|
""" + "\n".join(gap_rows) + f"""

---
*Generated programmatically by shared/generate_traceability_matrix.py.*
"""

    with open(matrix_file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated traceability matrix: {matrix_file_path}")

if __name__ == '__main__':
    main()
