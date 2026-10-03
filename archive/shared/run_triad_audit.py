import os
import re

def main():
    root_dir = "/home/mohamed/Desktop/Work/PMSkills/github/PMOSkills"
    artifacts_dir = os.path.join(root_dir, "artifacts")
    audit_file_path = os.path.join(root_dir, "docs/developer-tools/artifact-triad-audit.md")
    
    # We expect artifact IDs from A01 to A41 (excluding stubs/missing numbers if any, let's scan all discovered IDs)
    artifact_map = {}
    
    for root, dirs, files in os.walk(artifacts_dir):
        if 'schemas' in root:
            continue
        for file in files:
            if not file.startswith('A') or not file.endswith('.md'):
                continue
            
            # Find the ID (e.g. A01, A20, etc.)
            m = re.match(r'^(A[0-9]+)', file)
            if not m:
                continue
            artifact_id = m.group(1)
            
            if artifact_id not in artifact_map:
                artifact_map[artifact_id] = {
                    'definition': None,
                    'template': None,
                    'example': None
                }
            
            if file.endswith('-template.md'):
                artifact_map[artifact_id]['template'] = file
            elif file.endswith('-example.md'):
                artifact_map[artifact_id]['example'] = file
            else:
                artifact_map[artifact_id]['definition'] = file
                
    # Sort by ID numeric value
    sorted_ids = sorted(artifact_map.keys(), key=lambda x: int(x[1:]))
    
    complete_count = 0
    partial_count = 0
    total_artifacts = len(sorted_ids)
    
    rows = []
    for aid in sorted_ids:
        triad = artifact_map[aid]
        def_status = "✅ Present" if triad['definition'] else "❌ Missing"
        temp_status = "✅ Present" if triad['template'] else "❌ Missing"
        ex_status = "✅ Present" if triad['example'] else "❌ Missing"
        
        is_complete = triad['definition'] and triad['template'] and triad['example']
        if is_complete:
            status_label = "🟢 Complete"
            complete_count += 1
        else:
            status_label = "🔴 Incomplete"
            partial_count += 1
            
        rows.append(f"| {aid} | {triad['definition'] or 'N/A'} | {def_status} | {temp_status} | {ex_status} | {status_label} |")
        
    completion_rate = (complete_count / total_artifacts * 100) if total_artifacts > 0 else 0
    
    report_content = f"""# Artifact Triad Completion Audit Report

**Version:** 1.0.0  
**Status:** Executed  
**Last Run:** 2026-06-07  
**Authority:** QUALITY-STANDARDS.md §4.3 (Artifact Triad Rule)

---

## Executive Summary

Per [QUALITY-STANDARDS.md](../../QUALITY-STANDARDS.md#L577), every artifact ID must consist of a **triad** of files:
1. **Definition** (e.g., `A04-project-charter.md`)
2. **Template** (e.g., `A04-project-charter-template.md`)
3. **Example** (e.g., `A04-project-charter-example.md`)

This audit scans all physical directories under `artifacts/` to verify compliance.

- **Total Unique Artifact IDs:** {total_artifacts}
- **Complete Triads:** {complete_count}
- **Incomplete Triads:** {partial_count}
- **Artifact Triad Compliance Rate:** {completion_rate:.1f}%

---

## Triad Registry and Status

| Artifact ID | Definition File | Definition | Template | Example | Status |
|-------------|-----------------|------------|----------|---------|--------|
""" + "\n".join(rows) + f"""

---

## Identified Gaps

Below are all artifact IDs that are missing their Template or Example files:

| Artifact ID | Missing Components |
|-------------|--------------------|
"""
    
    gap_rows = []
    for aid in sorted_ids:
        triad = artifact_map[aid]
        missing = []
        if not triad['definition']:
            missing.append("Definition")
        if not triad['template']:
            missing.append("Template")
        if not triad['example']:
            missing.append("Example")
        if missing:
            gap_rows.append(f"| {aid} | {', '.join(missing)} |")
            
    report_content += "\n".join(gap_rows) + "\n\n---\n*Audit conducted programmatically by shared/run_triad_audit.py.*\n"
    
    with open(audit_file_path, 'w', encoding='utf-8') as f:
        f.write(report_content)
        
    print(f"Generated triad audit report: {audit_file_path}")
    print(f"Compliance rate: {completion_rate:.1f}% ({complete_count}/{total_artifacts})")

if __name__ == '__main__':
    main()
