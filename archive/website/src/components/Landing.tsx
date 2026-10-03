import React from 'react';
import { Play, Code, ArrowRight, Layers, FileText, BookOpen, CheckSquare, Settings } from 'lucide-react';

interface LandingProps {
  onNavigate: (tab: string) => void;
  stats: {
    skills: number;
    processes: number;
    artifacts: number;
    references: number;
    shared: number;
    tests: number;
  };
}

export const Landing: React.FC<LandingProps> = ({ onNavigate, stats }) => {
  return (
    <div className="animate-fade-in" style={{ maxWidth: '1200px', margin: '0 auto', overflowY: 'auto', height: '100%', width: '100%', paddingRight: '0.5rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '3.5rem 1rem 2.5rem', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          PMOSkills Explorer
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          The industry's first executable skill system and PMO reference architecture built directly upon the <strong style={{ color: 'var(--text-primary)' }}>PMI PMBOK® 8th Edition</strong>.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={() => onNavigate('skills')}
            className="glass" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: '#ffffff',
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 100%)',
              borderColor: 'rgba(249, 115, 22, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(249, 115, 22, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Explore Skills <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => onNavigate('references')}
            className="glass" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-panel)'; }}
          >
            Read Guides
          </button>
        </div>
      </section>

      {/* Statistics Scorecard */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
        <div className="glass-card glow-skill" style={{ padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }} onClick={() => onNavigate('skills')}>
          <Play size={24} style={{ color: 'var(--color-skill)', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{stats.skills}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Executable Skills</div>
        </div>
        <div className="glass-card glow-ref" style={{ padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }} onClick={() => onNavigate('processes')}>
          <Layers size={24} style={{ color: 'var(--color-ref)', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{stats.processes}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>PMBOK 8 Processes</div>
        </div>
        <div className="glass-card glow-art" style={{ padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }} onClick={() => onNavigate('artifacts')}>
          <FileText size={24} style={{ color: 'var(--color-art)', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{stats.artifacts}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Artifact Templates</div>
        </div>
        <div className="glass-card glow-ref" style={{ padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }} onClick={() => onNavigate('references')}>
          <BookOpen size={24} style={{ color: 'var(--color-ref)', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{stats.references}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Reference Files</div>
        </div>
        <div className="glass-card glow-test" style={{ padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }} onClick={() => onNavigate('tests')}>
          <CheckSquare size={24} style={{ color: 'var(--color-test)', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{stats.tests}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Compliance Tests</div>
        </div>
      </section>

      {/* 3-Tier Architecture Explanation */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="badge badge-ref" style={{ padding: '8px' }}><Layers size={18} /></div>
            <h3 style={{ fontSize: '1.25rem' }}>1. Reference Layer (Core PMBOK 8)</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Authoritative source material mapped directly to PMBOK 8 standards. Contains 41 Process Records, 6 Core Principles, and 8 Performance Domains.
          </p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Direct integration of 24 PMI companion standards.</li>
            <li style={{ marginBottom: '0.5rem' }}>Tailoring, scaling complexity registers (T1–T4).</li>
          </ul>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="badge badge-skill" style={{ padding: '8px' }}><Settings size={18} /></div>
            <h3 style={{ fontSize: '1.25rem' }}>2. Skills Layer (Executable SOPs)</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            A programmatic registry of 48 active PMO skills, complete with inputs, detailed SOP step checklists, quality metrics, and structured AI system prompts.
          </p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Interactive playground to inject custom parameters.</li>
            <li style={{ marginBottom: '0.5rem' }}>Form-based prompt generator for LLM co-piloting.</li>
          </ul>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="badge badge-art" style={{ padding: '8px' }}><FileText size={18} /></div>
            <h3 style={{ fontSize: '1.25rem' }}>3. Artifacts Layer (High-Integrity Deliverables)</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Clean templates and execution registers generated by running the skills. Contains 92 physical markdown files with placeholder templates and real examples.
          </p>
          <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Inline rendered document template viewer.</li>
            <li style={{ marginBottom: '0.5rem' }}>Instant copy and markdown file download buttons.</li>
          </ul>
        </div>
      </section>

      {/* AI Developer Section */}
      <section className="glass" style={{ padding: '2.5rem', marginBottom: '4rem', borderLeft: '4px solid var(--color-skill)', position: 'relative' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Code size={24} style={{ color: 'var(--color-skill)' }} /> Zero-Dependency Programmatic SDKs
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The entire PMOSkills knowledge corpus is pre-compiled at build time into an embedded JSON store. Deploy it inside Serverless, Edge, Browser, or AI Agentic workflows with no filesystem dependencies.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'var(--bg-input)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
            <h4 style={{ color: 'var(--color-ref)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>TypeScript / Node (NPM)</h4>
            <code style={{ display: 'block', padding: '0.5rem', background: '#000', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem', color: '#10b981' }}>
              npm install pmoskills
            </code>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Imports dual ESM/CJS and bundles database.</span>
          </div>
          
          <div style={{ background: 'var(--bg-input)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
            <h4 style={{ color: 'var(--color-skill)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Python 3 (PyPI)</h4>
            <code style={{ display: 'block', padding: '0.5rem', background: '#000', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem', color: '#10b981' }}>
              pip install pmoskills
            </code>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pure python package including compiled wheel.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
