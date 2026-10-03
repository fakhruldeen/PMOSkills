import os
import yaml

skills_dir = "/home/mohamed/Desktop/Work/PMSkills/github/PMOSkills/skills"

# Map of skill ID prefixes or packs to default lifecycle applicability and notes
def get_lifecycle_defaults(skill_id, pack, skill_name):
    # Pack 07 is specifically adaptive and hybrid
    if "07" in pack or "adaptive" in skill_id.lower() or "hybrid" in skill_id.lower():
        return ["adaptive", "hybrid"], "Primary focus on agile release cycles, sprint backlogs, and hybrid integration frameworks."
    
    # Specific planning skills that are primarily predictive/hybrid
    predictive_heavy = ["schedule", "wbs", "budget", "procurement", "traceability", "cost", "earned-value", "evm"]
    is_pred = any(word in skill_id.lower() or word in skill_name.lower() for word in predictive_heavy)
    
    if is_pred:
        return ["predictive", "hybrid"], "Standardized predictive modeling with hybrid adaptation interfaces."
    
    # Defaults for all others
    return ["predictive", "adaptive", "hybrid"], "Universal process applicable across all lifecycle models with appropriate tailoring."

# Find all skill files
skill_files = []
for root, dirs, files in os.walk(skills_dir):
    for file in files:
        if file.endswith(".md") and file.startswith("SKL-"):
            skill_files.append(os.path.join(root, file))

print(f"Found {len(skill_files)} skill files.")

updated_count = 0
for file_path in skill_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if not content.startswith("---"):
        continue
    
    parts = content.split("---")
    if len(parts) < 3:
        continue
        
    yaml_content = parts[1]
    body = "---".join(parts[2:])
    
    try:
        data = yaml.safe_load(yaml_content)
    except Exception as e:
        print(f"Error parsing YAML in {file_path}: {e}")
        continue
        
    # Check if lifecycle_applicability already exists
    if "lifecycle_applicability" not in data:
        skill_id = data.get("skill_id", os.path.basename(file_path).replace(".md", ""))
        pack = data.get("pack", "")
        skill_name = data.get("skill_name", "")
        
        apps, notes = get_lifecycle_defaults(skill_id, pack, skill_name)
        data["lifecycle_applicability"] = apps
        data["lifecycle_notes"] = notes
        
        # Serialize back to yaml
        new_yaml = yaml.dump(data, sort_keys=False, allow_unicode=True).strip()
        new_content = f"---\n{new_yaml}\n---{body}"
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        updated_count += 1

print(f"Successfully updated {updated_count} skill files with lifecycle metadata.")
