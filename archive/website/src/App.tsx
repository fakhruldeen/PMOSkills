import { useState } from 'react';
import { Landing } from './components/Landing';
import { SkillsCatalog } from './components/SkillsCatalog';
import { ProcessCatalog } from './components/ProcessCatalog';
import { ArtifactCatalog } from './components/ArtifactCatalog';
import { ReferenceViewer } from './components/ReferenceViewer';
import { Home, Play, Layers, FileText, BookOpen, Box, ExternalLink } from 'lucide-react';
import './App.css';

// Import the pre-compiled database directly into the bundle
import store from '../../sdk/npm/src/db/store.json';

// Convert the database objects into simple arrays
const skillsList = Object.values(store.skills).map((skill: any) => ({
  id: skill.id,
  title: skill.title,
  domain: skill.domain,
  status: skill.status,
  authority: skill.authority,
  complexity: skill.complexity,
  lifecycle: skill.lifecycle,
  inputs: skill.inputs,
  outputs: skill.outputs,
  steps: skill.steps,
  prompt: skill.prompt,
  content: skill.content,
  yaml: skill.yaml
}));

const processesList = Object.values(store.processes).map((proc: any) => ({
  id: proc.id,
  title: proc.title,
  domain: proc.domain,
  description: proc.description,
  inputs: proc.inputs,
  outputs: proc.outputs,
  tools: proc.tools,
  skills: proc.skills || [],
  content: proc.content
}));

const artifactsList = Object.values(store.artifacts).map((art: any) => ({
  id: art.id,
  title: art.title,
  path: art.path,
  content: art.content || ''
}));

const referencesList = Object.values(store.reference).map((ref: any) => ({
  path: ref.path,
  title: ref.title || ref.path.split('/').pop() || 'Reference File',
  content: ref.content || ''
}));

const sharedList = Object.values(store.shared);
const testsList = Object.values(store.tests);

// Custom GitHub Icon Component to avoid dependency mismatches
const GithubIcon = ({ size = 18, ...props }: { size?: number; [key: string]: any }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skillsList[0]?.id || '');

  // Unified stats
  const stats = {
    skills: skillsList.length,
    processes: processesList.length,
    artifacts: artifactsList.length,
    references: referencesList.length,
    shared: sharedList.length,
    tests: testsList.length
  };

  // Nav helper to jump directly to a skill from process catalog
  const handleNavigateToSkill = (skillId: string) => {
    setSelectedSkillId(skillId);
    setActiveTab('skills');
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="glass" style={{ width: '280px', display: 'flex', flexDirection: 'column', height: '100vh', borderRight: '1px solid var(--border-color)', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
        {/* Logo */}
        <div style={{ padding: '1.75rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ref) 0%, var(--color-skill) 100%)',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '0.95rem',
            color: '#000000'
          }}>
            PM
          </div>
          <div>
            <h2 style={{ fontSize: '1.15rem', color: '#ffffff', lineHeight: 1 }}>PMOSkills</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>v0.5.1 Explorer</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav style={{ flex: 1, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <button 
            onClick={() => setActiveTab('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.65rem 0.85rem',
              width: '100%',
              background: activeTab === 'home' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === 'home' ? '#ffffff' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
          >
            <Home size={18} /> Dashboard
          </button>
          
          <button 
            onClick={() => setActiveTab('skills')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              width: '100%',
              background: activeTab === 'skills' ? 'rgba(249, 115, 22, 0.08)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === 'skills' ? 'var(--color-skill)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Play size={18} /> Executable Skills
            </span>
            <span className="badge badge-skill" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{stats.skills}</span>
          </button>

          <button 
            onClick={() => setActiveTab('processes')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              width: '100%',
              background: activeTab === 'processes' ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === 'processes' ? 'var(--color-ref)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Layers size={18} /> PMBOK 8 Processes
            </span>
            <span className="badge badge-ref" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{stats.processes}</span>
          </button>

          <button 
            onClick={() => setActiveTab('artifacts')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              width: '100%',
              background: activeTab === 'artifacts' ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === 'artifacts' ? 'var(--color-art)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FileText size={18} /> Artifact Templates
            </span>
            <span className="badge badge-art" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{stats.artifacts}</span>
          </button>

          <button 
            onClick={() => setActiveTab('references')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              width: '100%',
              background: activeTab === 'references' ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              color: activeTab === 'references' ? 'var(--color-ref)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={18} /> Reference Guides
            </span>
            <span className="badge badge-ref" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{stats.references}</span>
          </button>
        </nav>

        {/* Footer links */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a 
            href="https://github.com/fakhruldeen/PMOSkills" 
            target="_blank" 
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}
          >
            <GithubIcon size={16} /> GitHub Repository <ExternalLink size={12} />
          </a>
          <a 
            href="https://www.npmjs.com/package/pmoskills" 
            target="_blank" 
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}
          >
            <Box size={16} /> NPM Package <ExternalLink size={12} />
          </a>
          <a 
            href="https://pypi.org/project/pmoskills/" 
            target="_blank" 
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}
          >
            <Box size={16} /> PyPI Package <ExternalLink size={12} />
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'home' && <Landing onNavigate={setActiveTab} stats={stats} />}
        {activeTab === 'skills' && <SkillsCatalog skills={skillsList} selectedSkillId={selectedSkillId} setSelectedSkillId={setSelectedSkillId} />}
        {activeTab === 'processes' && <ProcessCatalog processes={processesList} onNavigateToSkill={handleNavigateToSkill} />}
        {activeTab === 'artifacts' && <ArtifactCatalog artifacts={artifactsList} />}
        {activeTab === 'references' && <ReferenceViewer references={referencesList} />}
      </main>
    </div>
  );
}
