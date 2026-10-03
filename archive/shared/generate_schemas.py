import os
import re
import yaml

def snake_case(s):
    s = s.strip().lower()
    s = re.sub(r'[^a-z0-9\s_-]', '', s)
    s = re.sub(r'[\s-]+', '_', s)
    return s

def clean_markdown_cell(s):
    s = s.strip()
    s = re.sub(r'^\*+|^\_+|^\`+|^\s*|\s*\`+$|\s*\_+$|\s*\*+$', '', s)
    return s.strip()

def parse_metadata_table(body):
    # Match markdown tables under artifact metadata
    table_match = re.search(r'\|\s*Field\s*\|\s*Value\s*\|(.*?)(?=\n\s*\n|\n\s*---|\n\s*##|\Z)', body, re.DOTALL | re.IGNORECASE)
    metadata = {}
    if table_match:
        lines = table_match.group(1).strip().split('\n')
        for line in lines:
            if re.match(r'^\s*\|?\s*:?-+:?\s*\|', line):
                continue
            cols = [clean_markdown_cell(col) for col in line.split('|')[1:-1]]
            if len(cols) >= 2:
                key = snake_case(cols[0])
                val = cols[1]
                # Try to parse list-like strings
                if ',' in val and not val.startswith('$') and '[' not in val:
                    val = [v.strip() for v in val.split(',')]
                metadata[key] = val
    return metadata

def parse_fields_table(body):
    # Match markdown tables under Core fields or Required Sections / Fields
    table_match = re.search(r'\|\s*Field\s*\|\s*Description\s*\|\s*Required\s*\|(.*?)(?=\n\s*\n|\n\s*---|\n\s*##|\Z)', body, re.DOTALL | re.IGNORECASE)
    if not table_match:
        table_match = re.search(r'\|\s*Field\s*\|\s*Description\s*\|(.*?)(?=\n\s*\n|\n\s*---|\n\s*##|\Z)', body, re.DOTALL | re.IGNORECASE)
        
    fields = []
    if table_match:
        lines = table_match.group(1).strip().split('\n')
        for line in lines:
            if re.match(r'^\s*\|?\s*:?-+:?\s*\|', line):
                continue
            cols = [clean_markdown_cell(col) for col in line.split('|')[1:-1]]
            if len(cols) >= 2:
                field_title = cols[0]
                field_name = snake_case(field_title)
                desc = cols[1]
                required = False
                if len(cols) >= 3:
                    req_str = cols[2].lower()
                    if 'mandatory' in req_str or 'yes' in req_str or 'required' in req_str:
                        required = True
                
                field_type = 'string'
                if 'list' in desc.lower() or 'array' in desc.lower():
                    field_type = 'array'
                elif 'date' in desc.lower():
                    field_type = 'date'
                elif 'number' in desc.lower() or 'cost' in desc.lower() or 'budget' in desc.lower():
                    field_type = 'number'
                elif 'yes/no' in desc.lower() or 'boolean' in desc.lower():
                    field_type = 'boolean'
                
                fields.append({
                    'name': field_name,
                    'title': field_title,
                    'type': field_type,
                    'required': required,
                    'description': desc
                })
    return fields

def parse_artifact_md(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    metadata = {}
    body = content
    
    if content.strip().startswith('---'):
        parts = content.split('---')
        if len(parts) >= 3:
            yaml_text = parts[1]
            try:
                metadata = yaml.safe_load(yaml_text)
            except Exception as e:
                print(f"Error parsing YAML in {filepath}: {e}")
            body = '---'.join(parts[2:])
            
    # If not loaded via YAML, try markdown metadata table
    if not isinstance(metadata, dict) or not metadata:
        metadata = parse_metadata_table(content)
        
    fields = parse_fields_table(body)
    
    if not fields:
        fields = [
            {'name': 'title', 'title': 'Title', 'type': 'string', 'required': True, 'description': 'The title of the artifact'},
            {'name': 'description', 'title': 'Description', 'type': 'string', 'required': True, 'description': 'General description of the artifact'}
        ]
        
    return {
        'metadata': metadata,
        'fields': fields
    }

def main():
    root_dir = "/home/mohamed/Desktop/Work/PMSkills/github/PMOSkills"
    artifacts_dir = os.path.join(root_dir, "artifacts")
    schemas_dir = os.path.join(artifacts_dir, "schemas")
    os.makedirs(schemas_dir, exist_ok=True)
    
    # Find all artifact definition md files
    md_files = []
    for root, dirs, files in os.walk(artifacts_dir):
        if 'schemas' in root:
            continue
        for file in files:
            if file.startswith('A') and file.endswith('.md') and not file.endswith('-template.md') and not file.endswith('-example.md'):
                md_files.append(os.path.join(root, file))
                
    print(f"Found {len(md_files)} artifact definition files.")
    
    generated_count = 0
    all_schemas = {}
    for filepath in sorted(md_files):
        parsed = parse_artifact_md(filepath)
        if not parsed:
            continue
            
        meta = parsed['metadata']
        fields = parsed['fields']
        
        if not isinstance(meta, dict):
            print(f"Warning: Metadata in {filepath} could not be parsed as dict. Skipping.")
            continue
            
        artifact_id = meta.get('artifact_id', '')
        if not artifact_id:
            base = os.path.basename(filepath)
            m = re.match(r'^(A[0-9]+)', base)
            if m:
                artifact_id = m.group(1)
            else:
                continue
                
        name = meta.get('artifact_name', meta.get('name', os.path.basename(filepath).replace('.md', '').replace('-', ' ').title()))
        if isinstance(name, list):
            name = " ".join(name)
            
        pmbok8_ref = meta.get('pmbok8_anchor', meta.get('authority', 'PMBOK8'))
        if isinstance(pmbok8_ref, list):
            pmbok8_ref = "; ".join(pmbok8_ref)
            
        focus_areas = meta.get('focus_areas', meta.get('focus_area', ['Planning']))
        if isinstance(focus_areas, list):
            focus_area = focus_areas[0] if focus_areas else 'Planning'
        else:
            focus_area = focus_areas
            
        p_domains = meta.get('performance_domains', ['Governance'])
        if isinstance(p_domains, str):
            p_domains = [p_domains]
            
        produced_by = meta.get('created_by_skills', meta.get('created_by', []))
        if isinstance(produced_by, str):
            produced_by = [produced_by]
            
        consumed_by = meta.get('required_by_skills', meta.get('required_by', []))
        if isinstance(consumed_by, str):
            consumed_by = [consumed_by]
            
        schema_data = {
            'schema_version': '1.0.0',
            'artifact_id': artifact_id,
            'artifact_name': name,
            'pmbok8_ref': pmbok8_ref,
            'focus_area': focus_area,
            'performance_domains': p_domains,
            'lifecycle_applicability': ['predictive', 'adaptive', 'hybrid'],
            'fields': fields,
            'produced_by_skills': produced_by,
            'consumed_by_skills': consumed_by
        }
        
        schema_filename = f"{artifact_id.lower()}-{snake_case(name).replace('_', '-')}.schema.yaml"
        schema_path = os.path.join(schemas_dir, schema_filename)
        
        with open(schema_path, 'w', encoding='utf-8') as f:
            yaml.dump(schema_data, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
            
        all_schemas[artifact_id] = schema_data
        generated_count += 1
        print(f"Generated schema for {artifact_id}: {schema_filename}")
        
    # Write unified JSON schemas
    import json
    json_path = os.path.join(schemas_dir, "schemas.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(all_schemas, f, indent=2, ensure_ascii=False)
    print(f"Generated unified schemas JSON: {json_path}")
        
    print(f"Successfully generated {generated_count} schema files.")

if __name__ == '__main__':
    main()
