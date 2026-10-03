import re

def inject(template: str, variables: dict) -> str:
    """
    A lightweight, zero-dependency prompt template injector.
    Merges variables into template strings supporting multiple placeholder formats:
    - {{variable}} and {{ variable }}
    - [FIELD: variable] and [FIELD:variable]
    - [variable]
    """
    result = template
    for key, value in variables.items():
        val_str = str(value)
        
        # Replace {{key}} or {{ key }}
        double_brace_pattern = re.compile(r"{{\s*" + re.escape(key) + r"\s*}}")
        result = double_brace_pattern.sub(val_str, result)
        
        # Replace [FIELD: key] or [FIELD:key]
        field_pattern = re.compile(r"\[FIELD:\s*" + re.escape(key) + r"\s*\]")
        result = field_pattern.sub(val_str, result)
        
        # Replace [key]
        bracket_pattern = re.compile(r"\[" + re.escape(key) + r"\]")
        result = bracket_pattern.sub(val_str, result)
        
    return result
