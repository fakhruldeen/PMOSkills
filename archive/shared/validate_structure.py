import os
import re
import yaml

dir_path = "/home/mohamed/Desktop/Work/PMSkills/github/PMOSkills/reference/processes"
files = [f for f in os.listdir(dir_path) if f.startswith("PR") and f.endswith(".md")]

all_valid = True
checked_ids = set()

print("=" * 60)
print("PMOSKILLS STRUCTURAL INTEGRITY VALIDATOR — PHASE 4 (C4)")
print("=" * 60)

for filename in sorted(files):
    pr_id = filename.split("-")[0]
    checked_ids.add(pr_id)
    file_path = os.path.join(dir_path, filename)
    
    print(f"Checking {filename}...", end="")
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        if not content.startswith("---"):
            print(" FAIL: Missing YAML front-matter start marker '---'")
            all_valid = False
            continue
            
        parts = content.split("---")
        if len(parts) < 3:
            print(" FAIL: YAML front-matter not properly closed with '---'")
            all_valid = False
            continue
            
        yaml_content = parts[1]
        try:
            data = yaml.safe_load(yaml_content)
        except Exception as e:
            print(f" FAIL: YAML syntax error: {e}")
            all_valid = False
            continue
            
        required_fields = [
            "ref_id", "ref_type", "ref_name", "version", 
            "status", "pmbok8_source", "companion_ref_shortcode", "file_path"
        ]
        
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            print(f" FAIL: Missing front-matter fields: {missing_fields}")
            all_valid = False
            continue
            
        if data["ref_id"] != pr_id:
            print(f" FAIL: Mismatched ref_id: expected {pr_id}, found {data['ref_id']}")
            all_valid = False
            continue
            
        if data["ref_type"] != "Process":
            print(f" FAIL: Mismatched ref_type: expected 'Process', found '{data['ref_type']}'")
            all_valid = False
            continue
            
        if not data["file_path"].endswith(filename):
            print(f" FAIL: Mismatched file_path: {data['file_path']} doesn't match {filename}")
            all_valid = False
            continue
            
        print(" OK")
        
    except Exception as e:
        print(f" FAIL: Error reading file: {e}")
        all_valid = False

print("-" * 60)
print(f"Total Process Records checked: {len(checked_ids)}")
expected_ids = {f"PR{i:02d}" for i in range(1, 41)}
expected_ids.add("PR41")

missing_ids = expected_ids - checked_ids
if missing_ids:
    print(f"FAIL: Missing process records: {sorted(list(missing_ids))}")
    all_valid = False
else:
    print("All 41 expected process records (PR01-PR41) are present!")

print("=" * 60)
if all_valid:
    print("SUCCESS: 100% structural and schema validation achieved! 🎉")
    print("=" * 60)
    exit(0)
else:
    print("FAILURE: Structural or schema discrepancies detected. Please resolve.")
    print("=" * 60)
    exit(1)
