import { PMOSkillsStore, Skill, ProcessRecord, SystemPrompt, OntologySpec, ArtifactTemplate, ReferenceFile, SharedFile, TestFile } from '../types';
import storeData from '../db/store.json';

// Cast the imported JSON into our strict PMOSkillsStore type
const store = storeData as unknown as PMOSkillsStore;

export class PMOSkillsLoader {
  /**
   * Retrieves a specific executable skill by its unique ID (e.g. 'SKL-01-01').
   */
  public getSkill(id: string): Skill | undefined {
    return store.skills[id] || Object.values(store.skills).find(s => s.id === id || s.title === id);
  }

  /**
   * Returns all 48 executable skills.
   */
  public getSkills(): Skill[] {
    return Object.values(store.skills);
  }

  /**
   * Returns skills matching a specific performance domain.
   */
  public getSkillsByDomain(domain: string): Skill[] {
    const domainLower = domain.toLowerCase();
    return this.getSkills().filter(
      s => s.metadata.domain && s.metadata.domain.toLowerCase().includes(domainLower)
    );
  }

  /**
   * Retrieves a specific PMBOK 8 process record by its ID (e.g. 'PR01').
   */
  public getProcess(id: string): ProcessRecord | undefined {
    return store.processes[id] || Object.values(store.processes).find(p => p.id === id || p.title === id);
  }

  /**
   * Returns all 41 process records.
   */
  public getProcesses(): ProcessRecord[] {
    return Object.values(store.processes);
  }

  /**
   * Retrieves an artifact deliverable template by its ID (e.g., 'A01', or path/filename).
   */
  public getArtifact(id: string): ArtifactTemplate | undefined {
    if (store.artifacts[id]) {
      return store.artifacts[id];
    }
    const lowerId = id.toLowerCase();
    const cleanId = lowerId.replace(/\.md$/, '');

    return Object.values(store.artifacts).find(a => {
      if (a.id.toLowerCase() === lowerId || a.title.toLowerCase() === lowerId) {
        return true;
      }
      if (!a.path) return false;
      const lowerPath = a.path.toLowerCase();
      const parts = lowerPath.split('/');
      const filename = parts[parts.length - 1];
      const filenameNoExt = filename.replace(/\.md$/, '');
      return filename === lowerId || filenameNoExt === cleanId || lowerPath === lowerId;
    });
  }

  /**
   * Returns all artifact deliverable templates.
   */
  public getArtifacts(): ArtifactTemplate[] {
    return Object.values(store.artifacts);
  }

  /**
   * Retrieves a specific reference file by its relative path.
   */
  public getReferenceFile(path: string): ReferenceFile | undefined {
    return store.reference[path] || Object.values(store.reference).find(r => r.path === path || r.title === path);
  }

  /**
   * Returns all reference files.
   */
  public getReferenceFiles(): ReferenceFile[] {
    return Object.values(store.reference);
  }

  /**
   * Retrieves a specific shared configuration file by its path.
   */
  public getSharedFile(path: string): SharedFile | undefined {
    return store.shared[path] || Object.values(store.shared).find(s => s.path === path || s.fileName === path);
  }

  /**
   * Returns all shared files.
   */
  public getSharedFiles(): SharedFile[] {
    return Object.values(store.shared);
  }

  /**
   * Retrieves a specific test file by ID (e.g. ST-SKL-01-01) or path.
   */
  public getTestFile(id: string): TestFile | undefined {
    return store.tests[id] || Object.values(store.tests).find(t => t.id === id || t.path === id);
  }

  /**
   * Returns all test files.
   */
  public getTestFiles(): TestFile[] {
    return Object.values(store.tests);
  }

  /**
   * Retrieves an AI agent system prompt from the library by its ID.
   */
  public getSystemPrompt(id: string): SystemPrompt | undefined {
    return store.systemPrompts[id];
  }

  /**
   * Returns all system prompts.
   */
  public getSystemPrompts(): SystemPrompt[] {
    return Object.values(store.systemPrompts);
  }

  /**
   * Returns the PMBOK 8 project management ontology specification.
   */
  public getOntology(): OntologySpec {
    return store.ontology;
  }

  /**
   * Returns the version of the PMOSkills framework.
   */
  public getVersion(): string {
    return store.version;
  }

  /**
   * Returns the exact build compilation ISO timestamp.
   */
  public getCompiledAt(): string {
    return store.compiledAt;
  }
}

// Export a singleton instance for easy default usage
export const pmoskills = new PMOSkillsLoader();
export default pmoskills;
