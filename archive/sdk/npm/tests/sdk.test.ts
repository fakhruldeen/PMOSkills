import { describe, it, expect } from 'vitest';
import { pmoskills, inject } from '../src';

describe('PMOSkills SDK Test Suite', () => {
  describe('Executable Skills', () => {
    it('should load all 58 executable skills', () => {
      const skills = pmoskills.getSkills();
      expect(skills.length).toBe(58);
    });

    it('should retrieve a specific skill by ID and have correct metadata', () => {
      const skill = pmoskills.getSkill('SKL-01-01');
      expect(skill).toBeDefined();
      expect(skill?.id).toBe('SKL-01-01');
      expect(skill?.title).toBe('Establish PM Governance Framework');
      expect(skill?.metadata.domain).toBe('Governance');
      expect(skill?.template).toContain('## Purpose');
    });

    it('should support filtering skills by performance domain', () => {
      const governanceSkills = pmoskills.getSkillsByDomain('Governance');
      expect(governanceSkills.length).toBeGreaterThan(0);
      expect(governanceSkills[0].metadata.domain).toBe('Governance');
    });
  });

  describe('Process Records', () => {
    it('should load all 41 PMBOK 8 process records', () => {
      const processes = pmoskills.getProcesses();
      expect(processes.length).toBe(41);
    });

    it('should retrieve a specific process by ID and contain parsed lists', () => {
      const process = pmoskills.getProcess('PR01');
      expect(process).toBeDefined();
      expect(process?.id).toBe('PR01');
      expect(process?.title).toBe('Develop Project Charter');
      expect(process?.inputs).toContain('Business Documents');
      expect(process?.outputs).toContain('Project Charter');
      expect(process?.tools).toContain('Expert Judgment');
    });
  });

  describe('System Prompts and Ontology', () => {
    it('should load pre-defined system prompts correctly', () => {
      const orchestrator = pmoskills.getSystemPrompt('pmo-orchestrator');
      expect(orchestrator).toBeDefined();
      expect(orchestrator?.title).toContain('Master PMO Orchestrator');
      expect(orchestrator?.prompt).toContain('You are the PMOSkills Master PMO Orchestrator');
    });

    it('should retrieve the ontology specification', () => {
      const ontology = pmoskills.getOntology();
      expect(ontology).toBeDefined();
      expect(ontology.id).toBe('pmoskills-ontology');
      expect(ontology.content).toContain('# 🧠 PMOSkills Knowledge Graph & Ontology Specification');
    });
  });

  describe('Artifact Templates', () => {
    it('should load all artifact deliverable templates', () => {
      const artifacts = pmoskills.getArtifacts();
      expect(artifacts.length).toBe(100);
    });

    it('should retrieve A01 template correctly', () => {
      const a01 = pmoskills.getArtifact('A01');
      expect(a01).toBeDefined();
      expect(a01?.id).toBe('A01');
      expect(a01?.title).toContain('Business Case');
    });

    it('should retrieve A01 template with its parsed schema', () => {
      const a01 = pmoskills.getArtifact('A01');
      expect(a01).toBeDefined();
      expect(a01?.schema).toBeDefined();
      expect(a01?.schema.artifact_id).toBe('A01');
      expect(a01?.schema.fields.length).toBeGreaterThan(0);
      expect(a01?.schema.fields[0].name).toBe('business_need');
    });

    it('should resolve artifact collisions by file name and retrieve both A20 / A27 variants', () => {
      const teamCharter = pmoskills.getArtifact('A20-team-charter.md');
      expect(teamCharter).toBeDefined();
      expect(teamCharter?.title).toBe('Team Charter');

      const riskRecord = pmoskills.getArtifact('A20-Quantitative-Risk-and-Reserve-Decision-Record.md');
      expect(riskRecord).toBeDefined();
      expect(riskRecord?.title).toBe('Quantitative Risk and Reserve Decision Record');

      const teamHealth = pmoskills.getArtifact('A27-team-health-development-record.md');
      expect(teamHealth).toBeDefined();
      expect(teamHealth?.title).toBe('A27 — Team Health and Development Record');

      const projectClosure = pmoskills.getArtifact('A27-project-closure-record.md');
      expect(projectClosure).toBeDefined();
      expect(projectClosure?.title).toBe('Project Closure Record');
    });
  });

  describe('Reference Files', () => {
    it('should load non-process reference files', () => {
      const refFiles = pmoskills.getReferenceFiles();
      expect(refFiles.length).toBeGreaterThan(0);
      expect(refFiles.some(r => r.category === 'principles')).toBe(true);
    });

    it('should retrieve a principle by relative path', () => {
      const p01 = pmoskills.getReferenceFile('reference/principles/pmbok8/P8-01-holistic-view.md');
      expect(p01).toBeDefined();
      expect(p01?.title).toContain('Holistic');
    });
  });

  describe('Shared Assets', () => {
    it('should load shared validation scripts and checklists', () => {
      const sharedFiles = pmoskills.getSharedFiles();
      expect(sharedFiles.length).toBeGreaterThan(0);
      expect(sharedFiles.some(s => s.fileName === 'validate_structure.py')).toBe(true);
    });

    it('should retrieve validate_structure.py file content', () => {
      const validator = pmoskills.getSharedFile('shared/validate_structure.py');
      expect(validator).toBeDefined();
      expect(validator?.rawContent).toContain('PMOSKILLS STRUCTURAL INTEGRITY VALIDATOR');
    });
  });

  describe('Compliance and Skill Tests', () => {
    it('should load all testing scenarios', () => {
      const testFiles = pmoskills.getTestFiles();
      expect(testFiles.length).toBeGreaterThan(0);
    });

    it('should retrieve ST-SKL-01-01 test scenario', () => {
      const st01 = pmoskills.getTestFile('ST-SKL-01-01');
      expect(st01).toBeDefined();
      expect(st01?.id).toBe('ST-SKL-01-01');
      expect(st01?.title).toContain('Establish PM Governance Framework');
    });
  });

  describe('Prompt Template Injector', () => {
    it('should inject variables into {{ brace }} format placeholders', () => {
      const template = 'Hello {{ name }}! Welcome to {{ projectName }}.';
      const result = inject(template, { name: 'Alice', projectName: 'Helios' });
      expect(result).toBe('Hello Alice! Welcome to Helios.');
    });

    it('should inject variables into [FIELD: variable] format placeholders', () => {
      const template = 'Execute [FIELD: skillName] for project [FIELD:projectId].';
      const result = inject(template, { skillName: 'Charter Setup', projectId: 'PRJ-101' });
      expect(result).toBe('Execute Charter Setup for project PRJ-101.');
    });

    it('should inject variables into [variable] format placeholders', () => {
      const template = 'Authorize [role] to manage [scope].';
      const result = inject(template, { role: 'PMO Director', scope: 'Governance Baseline' });
      expect(result).toBe('Authorize PMO Director to manage Governance Baseline.');
    });
  });
});
