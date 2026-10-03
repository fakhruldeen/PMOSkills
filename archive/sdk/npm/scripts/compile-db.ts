import * as fs from 'fs';
import * as path from 'path';
import { PMOSkillsStore, Skill, ProcessRecord, SystemPrompt, OntologySpec, ArtifactTemplate, ReferenceFile, SharedFile, TestFile } from '../src/types';

// Helper to parse simple YAML front-matter without dependencies
function parseFrontMatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { metadata: {} as Record<string, any>, body: content };
  const yamlStr = match[1];
  const body = match[2];
  const metadata: Record<string, any> = {};
  const lines = yamlStr.split(/\r?\n/);
  let currentKey: string | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('-')) {
      if (currentKey && Array.isArray(metadata[currentKey])) {
        const val = trimmed.substring(1).trim().replace(/^['"]|['"]$/g, '');
        metadata[currentKey].push(val);
      }
    } else {
      const colonIdx = trimmed.indexOf(':');
      if (colonIdx !== -1) {
        const key = trimmed.substring(0, colonIdx).trim();
        let val = trimmed.substring(colonIdx + 1).trim();
        val = val.replace(/^['"]|['"]$/g, '');
        if (val === '[]' || val === '') {
          metadata[key] = [];
          currentKey = key;
        } else if (val.startsWith('[') && val.endsWith(']')) {
          metadata[key] = val.substring(1, val.length - 1)
            .split(',')
            .map(s => s.trim().replace(/^['"]|['"]$/g, ''));
          currentKey = key;
        } else {
          metadata[key] = val;
          currentKey = key;
        }
      }
    }
  }
  return { metadata, body };
}

// Recursively find files in a directory matching a pattern
function getFilesRecursively(dir: string, extension: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.resolve(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, extension));
    } else if (filePath.endsWith(extension)) {
      results.push(filePath);
    }
  }
  return results;
}

// Recursively find files in a directory matching multiple extensions
function getFilesRecursivelyMultiple(dir: string, extensions: string[]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.resolve(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursivelyMultiple(filePath, extensions));
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

// Extract inputs, tools, outputs from process record body
function parseProcessDetails(body: string) {
  const inputs: string[] = [];
  const tools: string[] = [];
  const outputs: string[] = [];

  // Parse Inputs Table
  const inputsMatch = body.match(/## Inputs\r?\n\r?\n\|([\s\S]*?)(?=\n\r?\n##|\n\r?\n---|$)/);
  if (inputsMatch) {
    const rows = inputsMatch[1].split(/\r?\n/).slice(2);
    for (const row of rows) {
      const cols = row.split('|').map(s => s.trim());
      if (cols.length > 2 && cols[1]) {
        inputs.push(cols[1]);
      }
    }
  }

  // Parse Outputs Table
  const outputsMatch = body.match(/## Outputs\r?\n\r?\n\|([\s\S]*?)(?=\n\r?\n##|\n\r?\n---|$)/);
  if (outputsMatch) {
    const rows = outputsMatch[1].split(/\r?\n/).slice(2);
    for (const row of rows) {
      const cols = row.split('|').map(s => s.trim());
      if (cols.length > 2 && cols[1]) {
        outputs.push(cols[1]);
      }
    }
  }

  // Parse Tools and Techniques
  const toolsMatch = body.match(/## Tools (?:and|&) Techniques\r?\n\r?\n([\s\S]*?)(?=\n\r?\n##|\n\r?\n---|$)/);
  if (toolsMatch) {
    const lines = toolsMatch[1].split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('-')) {
        let toolName = trimmed.substring(1).trim();
        // Strip markdown bold and colons cleanly
        toolName = toolName.replace(/^\*\*|\*\*/g, '').trim();
        const colonIdx = toolName.indexOf(':');
        if (colonIdx !== -1) {
          toolName = toolName.substring(0, colonIdx).trim();
        }
        toolName = toolName.replace(/^[:\s\-]+|[:\s\-]+$/g, '').trim();
        if (toolName) {
          tools.push(toolName);
        }
      }
    }
  }

  return { inputs, tools, outputs };
}

// Split and parse system prompts file
function parseSystemPrompts(content: string): Record<string, SystemPrompt> {
  const prompts: Record<string, SystemPrompt> = {};
  const sections = content.split(/## \d+\. /);

  for (const section of sections) {
    const trimmed = section.trim();
    if (!trimmed) continue;
    
    const lines = trimmed.split(/\r?\n/);
    const titleLine = lines[0].trim();
    let id = '';
    if (titleLine.toLowerCase().includes('orchestrator')) {
      id = 'pmo-orchestrator';
    } else if (titleLine.toLowerCase().includes('risk')) {
      id = 'risk-compliance-audit';
    } else if (titleLine.toLowerCase().includes('waste')) {
      id = 'waste-performance-auditor';
    } else {
      id = titleLine.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    const codeBlockMatch = trimmed.match(/```markdown\r?\n([\s\S]*?)\r?\n```/);
    const promptText = codeBlockMatch ? codeBlockMatch[1].trim() : trimmed;

    prompts[id] = {
      id,
      title: titleLine.replace(/\s+Prompt$/, ''),
      prompt: promptText
    };
  }

  return prompts;
}

function main() {
  const rootDir = path.resolve(__dirname, '../../../');
  console.log(`Starting compile-db in root: ${rootDir}`);

  const store: PMOSkillsStore = {
    skills: {},
    processes: {},
    artifacts: {},
    reference: {},
    shared: {},
    tests: {},
    systemPrompts: {},
    ontology: {} as OntologySpec,
    version: '0.3.0',
    compiledAt: new Date().toISOString()
  };

  // 1. Compile Skills
  const skillsDir = path.resolve(rootDir, 'skills');
  const skillFiles = getFilesRecursively(skillsDir, '.md');
  console.log(`Found ${skillFiles.length} skill files to parse...`);

  for (const file of skillFiles) {
    const raw = fs.readFileSync(file, 'utf-8');
    const { metadata, body } = parseFrontMatter(raw);
    const id = metadata.skill_id || path.basename(file, '.md').split('-').slice(0, 3).join('-');
    
    store.skills[id] = {
      id,
      title: metadata.skill_name || id,
      metadata: {
        id,
        title: metadata.skill_name || id,
        domain: Array.isArray(metadata.performance_domains) ? metadata.performance_domains[0] : (metadata.performance_domains || 'Default'),
        phase: metadata.focus_area || 'Execution',
        lifecycle: metadata.pack || 'Default',
        citations: metadata.pmbok8_process_anchor ? [metadata.pmbok8_process_anchor] : [],
        ...metadata
      },
      template: body.trim(),
      rawContent: raw
    };
  }

  // 2. Compile Processes
  const processesDir = path.resolve(rootDir, 'reference/processes');
  const processFiles = fs.readdirSync(processesDir)
    .filter(f => f.startsWith('PR') && f.endsWith('.md'))
    .map(f => path.resolve(processesDir, f));
  console.log(`Found ${processFiles.length} process records to parse...`);

  for (const file of processFiles) {
    const raw = fs.readFileSync(file, 'utf-8');
    const { metadata, body } = parseFrontMatter(raw);
    const id = metadata.ref_id || path.basename(file, '.md').split('-')[0];
    const { inputs, tools, outputs } = parseProcessDetails(body);

    store.processes[id] = {
      id,
      title: metadata.ref_name || id,
      inputs,
      tools,
      outputs,
      citations: metadata.pmbok8_source ? [metadata.pmbok8_source] : [],
      rawContent: raw
    };
  }

  // 3. Compile Artifacts
  const artifactsDir = path.resolve(rootDir, 'artifacts');
  const schemasPath = path.resolve(rootDir, 'artifacts/schemas/schemas.json');
  let schemas: Record<string, any> = {};
  if (fs.existsSync(schemasPath)) {
    try {
      schemas = JSON.parse(fs.readFileSync(schemasPath, 'utf-8'));
      console.log(`Loaded ${Object.keys(schemas).length} pre-compiled artifact schemas.`);
    } catch (e) {
      console.warn('Warning: Could not parse schemas.json:', e);
    }
  }

  if (fs.existsSync(artifactsDir)) {
    const artifactFiles = getFilesRecursively(artifactsDir, '.md');
    console.log(`Found ${artifactFiles.length} artifact files to parse...`);
    for (const file of artifactFiles) {
      const raw = fs.readFileSync(file, 'utf-8');
      const { metadata, body } = parseFrontMatter(raw);
      const relativePath = path.relative(rootDir, file);
      
      // Match A01, A02, etc.
      const idMatch = path.basename(file).match(/^A\d+/);
      const id = metadata.artifact_id || (idMatch ? idMatch[0] : relativePath);

      store.artifacts[relativePath] = {
        id,
        path: relativePath,
        title: metadata.name || metadata.artifact_name || metadata.title || (body.trim().split('\n')[0].replace(/^#+\s*/, '').trim()) || id,
        category: metadata.category || path.basename(path.dirname(file)),
        version: metadata.version || '1.0.0',
        status: metadata.status || 'Active',
        rawContent: raw,
        schema: schemas[id] || null,
        ...metadata
      };
    }
  }

  // 4. Compile Reference Files (excluding processes/)
  const referenceDir = path.resolve(rootDir, 'reference');
  if (fs.existsSync(referenceDir)) {
    const referenceFiles = getFilesRecursively(referenceDir, '.md');
    console.log(`Found ${referenceFiles.length} reference files to parse...`);
    for (const file of referenceFiles) {
      // Skip process files (which start with PR) but include index files in reference/processes/
      if (file.includes('/reference/processes/') && path.basename(file).startsWith('PR')) {
        continue;
      }
      const raw = fs.readFileSync(file, 'utf-8');
      const { metadata, body } = parseFrontMatter(raw);
      const relativePath = path.relative(rootDir, file);
      const category = path.basename(path.dirname(file));

      store.reference[relativePath] = {
        path: relativePath,
        title: metadata.name || metadata.title || metadata.ref_name || (body.trim().split('\n')[0].replace(/^#+\s*/, '').trim()) || path.basename(file, '.md'),
        category,
        rawContent: raw,
        ...metadata
      };
    }
  }

  // 5. Compile Shared Assets
  const sharedDir = path.resolve(rootDir, 'shared');
  if (fs.existsSync(sharedDir)) {
    const sharedFiles = getFilesRecursivelyMultiple(sharedDir, ['.py', '.json', '.md']);
    console.log(`Found ${sharedFiles.length} shared files to parse...`);
    for (const file of sharedFiles) {
      const raw = fs.readFileSync(file, 'utf-8');
      const relativePath = path.relative(rootDir, file);
      
      store.shared[relativePath] = {
        path: relativePath,
        fileName: path.basename(file),
        rawContent: raw
      };
    }
  }

  // 6. Compile Tests Assets
  const testsDir = path.resolve(rootDir, 'tests');
  if (fs.existsSync(testsDir)) {
    const testFiles = getFilesRecursivelyMultiple(testsDir, ['.md', '.json', '.py']);
    console.log(`Found ${testFiles.length} test files to parse...`);
    for (const file of testFiles) {
      // Don't bundle local vitest tests or sdk tests
      if (file.includes('sdk/tests')) {
        continue;
      }
      const raw = fs.readFileSync(file, 'utf-8');
      const { metadata, body } = parseFrontMatter(raw);
      const relativePath = path.relative(rootDir, file);
      
      // Look for ST-SKL-01-01 format
      const idMatch = path.basename(file).match(/^ST-[A-Z0-9\-]+/i);
      const id = metadata.test_id || (idMatch ? idMatch[0] : relativePath);

      store.tests[id] = {
        id,
        path: relativePath,
        title: metadata.name || metadata.title || metadata.test_description || (body.trim().split('\n')[0].replace(/^#+\s*/, '').trim()) || path.basename(file, '.md'),
        rawContent: raw,
        ...metadata
      };
    }
  }

  // 7. Compile System Prompts
  const promptsFile = path.resolve(rootDir, 'docs/ai-agents/system-prompts.md');
  if (fs.existsSync(promptsFile)) {
    const raw = fs.readFileSync(promptsFile, 'utf-8');
    const { body } = parseFrontMatter(raw);
    store.systemPrompts = parseSystemPrompts(body);
    console.log(`Parsed ${Object.keys(store.systemPrompts).length} system prompts.`);
  }

  // 8. Compile Ontology
  const ontologyFile = path.resolve(rootDir, 'docs/ai-agents/ontology-specification.md');
  if (fs.existsSync(ontologyFile)) {
    const raw = fs.readFileSync(ontologyFile, 'utf-8');
    const { metadata, body } = parseFrontMatter(raw);
    store.ontology = {
      id: 'pmoskills-ontology',
      title: metadata.doc_name || 'PMOSkills Ontology Specification',
      content: body.trim()
    };
    console.log('Parsed Ontology Specification.');
  }

  // Write store
  const dbDir = path.resolve(__dirname, '../src/db');
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  fs.writeFileSync(path.resolve(dbDir, 'store.json'), JSON.stringify(store, null, 2), 'utf-8');
  console.log(`SUCCESS: store.json compiled at ${path.resolve(dbDir, 'store.json')} (${(fs.statSync(path.resolve(dbDir, 'store.json')).size / 1024).toFixed(1)} KB)`);

  // Write store to PyPI SDK if directory exists
  const pypiDbDir = path.resolve(rootDir, 'sdk/pypi/pmoskills/data');
  if (fs.existsSync(pypiDbDir)) {
    fs.writeFileSync(path.resolve(pypiDbDir, 'store.json'), JSON.stringify(store, null, 2), 'utf-8');
    console.log(`SUCCESS: store.json copied to PyPI SDK at ${path.resolve(pypiDbDir, 'store.json')}`);
  }
}

main();
