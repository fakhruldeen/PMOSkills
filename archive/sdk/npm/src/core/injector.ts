/**
 * A lightweight, zero-dependency prompt template injector.
 * Merges variables into template strings supporting multiple placeholder formats:
 * - {{variable}} and {{ variable }}
 * - [FIELD: variable] and [FIELD:variable]
 * - [variable]
 */
export function inject(template: string, variables: Record<string, string | number | boolean>): string {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    const valStr = String(value);
    
    // Replace {{key}} or {{ key }}
    const doubleBraceRegex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    result = result.replace(doubleBraceRegex, valStr);

    // Replace [FIELD: key] or [FIELD:key]
    const fieldRegex = new RegExp(`\\[FIELD:\\s*${key}\\s*\\]`, 'g');
    result = result.replace(fieldRegex, valStr);

    // Replace [key]
    const bracketRegex = new RegExp(`\\[${key}\\]`, 'g');
    result = result.replace(bracketRegex, valStr);
  }
  return result;
}
