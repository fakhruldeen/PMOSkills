export interface SkillMetadata {
  id: string;
  title: string;
  domain: string;
  phase: string;
  lifecycle: string;
  citations: string[];
  [key: string]: any;
}

export interface Skill {
  id: string;
  title: string;
  metadata: SkillMetadata;
  template: string;
  rawContent: string;
}

export interface ProcessRecord {
  id: string;
  title: string;
  inputs: string[];
  tools: string[];
  outputs: string[];
  citations: string[];
  rawContent: string;
}

export interface SystemPrompt {
  id: string;
  title: string;
  prompt: string;
}

export interface OntologySpec {
  id: string;
  title: string;
  content: string;
}

export interface ArtifactTemplate {
  id: string;
  path: string;
  title: string;
  category: string;
  version: string;
  status: string;
  rawContent: string;
  [key: string]: any;
}

export interface ReferenceFile {
  path: string;
  title: string;
  category: string;
  rawContent: string;
  [key: string]: any;
}

export interface SharedFile {
  path: string;
  fileName: string;
  rawContent: string;
}

export interface TestFile {
  id: string;
  path: string;
  title: string;
  rawContent: string;
  [key: string]: any;
}

export interface PMOSkillsStore {
  skills: Record<string, Skill>;
  processes: Record<string, ProcessRecord>;
  artifacts: Record<string, ArtifactTemplate>;
  reference: Record<string, ReferenceFile>;
  shared: Record<string, SharedFile>;
  tests: Record<string, TestFile>;
  systemPrompts: Record<string, SystemPrompt>;
  ontology: OntologySpec;
  version: string;
  compiledAt: string;
}
