# pmoskills

[![npm version](https://img.shields.io/npm/v/pmoskills?style=for-the-badge&logo=npm&logoColor=white&color=cb0000)](https://www.npmjs.com/package/pmoskills)
[![npm downloads](https://img.shields.io/npm/dm/pmoskills?style=for-the-badge&logo=npm&logoColor=white&color=cb0000)](https://www.npmjs.com/package/pmoskills)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&color=888888)](../../LICENSE)
[![Tests](https://img.shields.io/badge/Tests-18%2F18%20Passed-green?style=for-the-badge&logo=vitest&color=2eb82e)](./tests/sdk.test.ts)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.20510540-blue?style=for-the-badge)](https://doi.org/10.5281/zenodo.20510540)

> **An executable skill system & PMO reference architecture built on PMI PMBOK® 8th Edition.**  
> Zero dependencies · Dual ESM/CJS · TypeScript declarations · Edge & Browser compatible

---

## Installation

```bash
npm install pmoskills
# or
yarn add pmoskills
# or
pnpm add pmoskills
```

---

## Quick Start

```typescript
import { pmoskills, inject } from 'pmoskills';

// Get an executable skill definition
const skill = pmoskills.getSkill('SKL-01-01');
console.log(skill.title);        // "Establish PM Governance Framework"
console.log(skill.domain);       // "Governance"
console.log(skill.inputs);       // ["Project Charter", ...]

// Inject variables into the skill's prompt template
const prompt = inject(skill.prompt, {
  projectName:        'Apex Initiative',
  authorityThreshold: '$100,000'
});

// Retrieve a deliverable template
const businessCase = pmoskills.getArtifact('A01');
console.log(businessCase.title);    // "Business Case"
console.log(businessCase.category); // "Authorization"

// Query PMBOK 8 principles
const principle = pmoskills.getReferenceFile(
  'reference/principles/P01-stewardship.md'
);
console.log(principle.title); // "Be a Diligent, Respectful, and Caring Steward"
```

---

## API Reference

### Executable Skills

```typescript
pmoskills.getSkills()                         // → ExecutableSkill[]
pmoskills.getSkill(id: string)                // → ExecutableSkill | undefined
pmoskills.getSkillsByDomain(domain: string)   // → ExecutableSkill[]
```

### PMBOK 8 Process Records

```typescript
pmoskills.getProcesses()                      // → ProcessRecord[]
pmoskills.getProcess(id: string)              // → ProcessRecord | undefined
```

### Artifact Templates

```typescript
pmoskills.getArtifacts()                      // → ArtifactTemplate[]
pmoskills.getArtifact(id: string)             // → ArtifactTemplate | undefined
```

### Reference Files (Principles, Domains, Focus Areas…)

```typescript
pmoskills.getReferenceFiles()                 // → ReferenceFile[]
pmoskills.getReferenceFile(path: string)      // → ReferenceFile | undefined
```

### Shared Validators & Checklists

```typescript
pmoskills.getSharedFiles()                    // → SharedFile[]
pmoskills.getSharedFile(path: string)         // → SharedFile | undefined
```

### Compliance & Skill Tests

```typescript
pmoskills.getTestFiles()                      // → TestFile[]
pmoskills.getTestFile(id: string)             // → TestFile | undefined
```

### System Prompts & Ontology

```typescript
pmoskills.getSystemPrompt(key: string)        // → SystemPrompt | undefined
pmoskills.getOntology()                       // → OntologySpec
```

### Prompt Template Injector

```typescript
import { inject } from 'pmoskills';

// Supports three placeholder formats:
inject(template, vars);   // {{ var }}, [FIELD: var], [var]
```

---

## Corpus Summary

| Collection | Items | Method |
|---|:---:|---|
| Executable Skills | **48** | `getSkills()` / `getSkill(id)` |
| PMBOK 8 Process Records | **41** | `getProcesses()` / `getProcess(id)` |
| Artifact Templates | **92** | `getArtifacts()` / `getArtifact(id)` |
| Reference Files | **97** | `getReferenceFiles()` / `getReferenceFile(path)` |
| Shared Validators & Checklists | **28** | `getSharedFiles()` / `getSharedFile(path)` |
| Compliance Test Scenarios | **59** | `getTestFiles()` / `getTestFile(id)` |
| System Prompts | **4** | `getSystemPrompt(key)` |
| **Total Corpus Items** | **369+** | |

---

## Architecture

```
sdk/npm/
├── src/
│   ├── index.ts              ← Public API surface
│   ├── core/
│   │   ├── loader.ts         ← PMOSkillsLoader singleton (pmoskills)
│   │   └── injector.ts       ← Multi-format prompt template injector
│   ├── types/
│   │   └── index.ts          ← TypeScript interfaces for all collections
│   └── db/
│       └── store.json        ← Pre-compiled corpus (auto-generated at build time)
├── scripts/
│   └── compile-db.ts         ← Build-time corpus compiler (reads entire repo)
├── tests/
│   └── sdk.test.ts           ← Vitest unit tests (18 tests, 100% pass rate)
└── dist/
    ├── index.js              ← CommonJS bundle
    └── index.mjs             ← ES Module bundle
```

### Zero-FS Architecture

All corpus data is serialized into `src/db/store.json` **at build time** by `scripts/compile-db.ts`. The compiled bundles (`dist/index.js` and `dist/index.mjs`) contain the entire corpus inline — no file-system access is performed at runtime.

This makes the package compatible with:
- ✅ Node.js (any version)
- ✅ Cloudflare Workers
- ✅ Vercel Edge Functions
- ✅ Browser (via bundlers like Vite, Webpack)
- ✅ Deno (via npm compatibility)

---

## Building Locally

```bash
# Install dependencies
npm install

# Compile corpus + build dual CJS/ESM bundles
npm run build

# Run unit tests
npm test
```

---

## Citation

```bibtex
@misc{pmoskills2026,
  author    = {Fakhruldeen, Mohamed Fouad},
  title     = {{PMOSkills: An Executable Skill System \& PMO Reference Architecture
                built on PMI PMBOK® 8th Edition}},
  month     = jun,
  year      = 2026,
  publisher = {Zenodo},
  version   = {v0.5},
  doi       = {10.5281/zenodo.20510540},
  url       = {https://doi.org/10.5281/zenodo.20510540}
}
```

---

## License

MIT © [Mohamed Fouad Fakhruldeen](https://fakhruldeen.me)

*PMBOK® is a registered trademark of the Project Management Institute, Inc. This project is independently developed and is not affiliated with or endorsed by PMI.*
