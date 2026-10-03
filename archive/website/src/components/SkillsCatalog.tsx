import React, { useState, useMemo, useEffect } from 'react';
import { Search, Play, Check, Copy, Info } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  domain: string;
  status: string;
  authority: string;
  complexity?: string;
  lifecycle?: string;
  inputs?: string[];
  outputs?: string[];
  steps?: string[];
  prompt?: string;
  content?: string;
  yaml?: any;
}

interface SkillsCatalogProps {
  skills: Skill[];
  selectedSkillId: string;
  setSelectedSkillId: (id: string) => void;
}

export const SkillsCatalog: React.FC<SkillsCatalogProps> = ({ skills, selectedSkillId, setSelectedSkillId }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeLifecycleFilter, setActiveLifecycleFilter] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'steps' | 'playground' | 'details'>('steps');
  const [copied, setCopied] = useState<boolean>(false);

  // Playground Variables state
  const [playgroundVariables, setPlaygroundVariables] = useState<Record<string, string>>({});

  // Active selected skill
  const selectedSkill = useMemo(() => {
    return skills.find(s => s.id === selectedSkillId) || skills[0];
  }, [skills, selectedSkillId]);

  // Extract variables from the prompt
  const promptVariables = useMemo(() => {
    if (!selectedSkill?.prompt) return [];
    const template = selectedSkill.prompt;
    const vars = new Set<string>();
    
    // Match {{key}} or {{ key }}
    const doubleBraceRegex = /{{\s*([a-zA-Z0-9_-]+)\s*}}/g;
    let match;
    while ((match = doubleBraceRegex.exec(template)) !== null) {
      vars.add(match[1]);
    }

    // Match [FIELD: key] or [FIELD:key]
    const fieldRegex = /\[FIELD:\s*([a-zA-Z0-9_-]+)\s*\]/g;
    while ((match = fieldRegex.exec(template)) !== null) {
      vars.add(match[1]);
    }

    // Match [key] - look for common capital variables like [PROJECT_NAME] or [DATE]
    // avoiding standard markdown brackets like [View Guide](link)
    const bracketRegex = /\[([A-Z0-9_]{3,20})\]/g;
    while ((match = bracketRegex.exec(template)) !== null) {
      vars.add(match[1]);
    }

    return Array.from(vars);
  }, [selectedSkill]);

  // Reset variables whenever active skill changes
  useEffect(() => {
    const initialVars: Record<string, string> = {};
    promptVariables.forEach(v => {
      // Human-friendly default values
      if (v.toLowerCase().includes('projectname') || v.includes('PROJECT')) {
        initialVars[v] = 'Project Apex';
      } else if (v.toLowerCase().includes('authority') || v.includes('THRESHOLD')) {
        initialVars[v] = '$50,000';
      } else if (v.toLowerCase().includes('date')) {
        initialVars[v] = new Date().toISOString().split('T')[0];
      } else {
        initialVars[v] = `[${v}]`;
      }
    });
    setPlaygroundVariables(initialVars);
    setActiveTab('steps');
  }, [selectedSkill, promptVariables]);

  // Inject variables into prompt for the playground
  const injectedPrompt = useMemo(() => {
    if (!selectedSkill?.prompt) return '';
    let result = selectedSkill.prompt;
    for (const [key, value] of Object.entries(playgroundVariables)) {
      // {{key}}
      const doubleBraceRegex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      result = result.replace(doubleBraceRegex, value);

      // [FIELD: key]
      const fieldRegex = new RegExp(`\\[FIELD:\\s*${key}\\s*\\]`, 'g');
      result = result.replace(fieldRegex, value);

      // [key]
      const bracketRegex = new RegExp(`\\[${key}\\]`, 'g');
      result = result.replace(bracketRegex, value);
    }
    return result;
  }, [selectedSkill, playgroundVariables]);

  // Copy injected prompt to clipboard
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(injectedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get unique lifecycle phases for filter
  const lifecycleOptions = useMemo(() => {
    const lifecycles = new Set<string>();
    skills.forEach(s => {
      if (s.lifecycle) lifecycles.add(s.lifecycle);
    });
    return ['All', ...Array.from(lifecycles)];
  }, [skills]);

  // Filter skills
  const filteredSkills = useMemo(() => {
    return skills.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            s.domain.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLifecycle = activeLifecycleFilter === 'All' || s.lifecycle === activeLifecycleFilter;
      
      return matchesSearch && matchesLifecycle;
    });
  }, [skills, searchTerm, activeLifecycleFilter]);

  // Set first filtered skill as selected if current selection is filtered out
  useEffect(() => {
    if (filteredSkills.length > 0 && !filteredSkills.some(s => s.id === selectedSkillId)) {
      setSelectedSkillId(filteredSkills[0].id);
    }
  }, [filteredSkills, selectedSkillId]);

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', height: '100%', minHeight: 0, overflow: 'hidden' }}>
      {/* Left Sidebar: Skill List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', minHeight: 0, borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem', overflow: 'hidden' }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search 48 skills..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 1rem 0.6rem 2.2rem',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '0.9rem'
            }}
          />
        </div>

        {/* Lifecycle Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Lifecycle Phase
          </label>
          <select 
            value={activeLifecycleFilter} 
            onChange={(e) => setActiveLifecycleFilter(e.target.value)}
            style={{
              padding: '0.5rem',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              fontSize: '0.85rem'
            }}
          >
            {lifecycleOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Scrollable list */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '4px' }}>
          {filteredSkills.map(skill => {
            const isSelected = skill.id === selectedSkillId;
            return (
              <button
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  borderColor: isSelected ? 'var(--color-skill)' : 'var(--border-color)',
                  background: isSelected ? 'rgba(249, 115, 22, 0.08)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 10px rgba(249, 115, 22, 0.1)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.25rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isSelected ? 'var(--color-skill)' : 'var(--text-secondary)' }}>
                    {skill.id}
                  </span>
                  <span className="badge badge-skill" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                    {skill.complexity || 'T1'}
                  </span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {skill.title}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {skill.domain}
                </span>
              </button>
            );
          })}

          {filteredSkills.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
              No skills found matching search criteria.
            </div>
          )}
        </div>
      </div>

      {/* Right Details Panel */}
      {selectedSkill && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-skill">{selectedSkill.id}</span>
              <span className="badge badge-ref" style={{ textTransform: 'none' }}>{selectedSkill.domain}</span>
              <span className="badge badge-art" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                {selectedSkill.status}
              </span>
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff' }}>{selectedSkill.title}</h2>
            {selectedSkill.authority && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Authority Level: <strong style={{ color: 'var(--text-primary)' }}>{selectedSkill.authority}</strong>
              </span>
            )}
          </div>

          {/* Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <button 
              onClick={() => setActiveTab('steps')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'steps' ? 'var(--color-skill)' : 'var(--text-secondary)',
                fontWeight: activeTab === 'steps' ? 600 : 400,
                borderBottom: activeTab === 'steps' ? '2px solid var(--color-skill)' : 'none',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Execution Steps (SOP)
            </button>
            <button 
              onClick={() => setActiveTab('playground')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'playground' ? 'var(--color-skill)' : 'var(--text-secondary)',
                fontWeight: activeTab === 'playground' ? 600 : 400,
                borderBottom: activeTab === 'playground' ? '2px solid var(--color-skill)' : 'none',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              AI Prompt Playground
            </button>
            <button 
              onClick={() => setActiveTab('details')}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                background: 'transparent',
                color: activeTab === 'details' ? 'var(--color-skill)' : 'var(--text-secondary)',
                fontWeight: activeTab === 'details' ? 600 : 400,
                borderBottom: activeTab === 'details' ? '2px solid var(--color-skill)' : 'none',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Inputs & Outputs
            </button>
          </div>

          {/* Tab Content Panel */}
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
            {activeTab === 'steps' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Info size={18} style={{ color: 'var(--color-skill)' }} /> Execution SOP
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {selectedSkill.steps && selectedSkill.steps.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(249, 115, 22, 0.1)',
                          color: 'var(--color-skill)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          {idx + 1}
                        </div>
                        <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                          {step}
                        </p>
                      </div>
                    ))}
                    {!selectedSkill.steps && (
                      <span style={{ color: 'var(--text-muted)' }}>No steps compiled for this skill.</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'playground' && (
              <div style={{ display: 'grid', gridTemplateColumns: promptVariables.length > 0 ? '1fr 1fr' : '1fr', gap: '1.5rem', height: '100%', minHeight: '350px' }}>
                {/* Variable Form */}
                {promptVariables.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', overflowY: 'auto' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Sandbox Parameters</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Change parameter inputs to dynamically inject them into the system prompt template in real-time.
                    </p>
                    
                    {promptVariables.map(v => (
                      <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{v}</label>
                        <input
                          type="text"
                          value={playgroundVariables[v] || ''}
                          onChange={(e) => setPlaygroundVariables(prev => ({ ...prev, [v]: e.target.value }))}
                          style={{
                            padding: '0.5rem',
                            background: 'var(--bg-input)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            color: 'var(--text-primary)',
                            fontSize: '0.85rem'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Prompt Preview */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Play size={14} style={{ color: 'var(--color-skill)' }} /> Live Prompt Output
                    </span>
                    <button
                      onClick={handleCopyPrompt}
                      className="glass"
                      style={{
                        padding: '4px 10px',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: copied ? '#10b981' : 'var(--text-primary)',
                        borderColor: copied ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-color)',
                        background: copied ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-panel)'
                      }}
                    >
                      {copied ? (
                        <>
                          <Check size={12} /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy Prompt
                        </>
                      )}
                    </button>
                  </div>
                  
                  <textarea
                    readOnly
                    value={injectedPrompt || selectedSkill.prompt || 'No AI prompt template exists for this skill.'}
                    style={{
                      flex: 1,
                      width: '100%',
                      minHeight: '280px',
                      padding: '1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
                      fontSize: '0.85rem',
                      resize: 'none',
                      lineHeight: '1.5'
                    }}
                  />
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-ref)' }}>Required Inputs</h3>
                  <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedSkill.inputs && selectedSkill.inputs.map((inp, idx) => (
                      <li key={idx} style={{ marginBottom: '0.4rem' }}>{inp}</li>
                    ))}
                    {(!selectedSkill.inputs || selectedSkill.inputs.length === 0) && (
                      <li style={{ color: 'var(--text-muted)', listStyle: 'none' }}>No direct inputs required.</li>
                    )}
                  </ul>
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-art)' }}>Outputs Produced</h3>
                  <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedSkill.outputs && selectedSkill.outputs.map((out, idx) => (
                      <li key={idx} style={{ marginBottom: '0.4rem' }}>{out}</li>
                    ))}
                    {(!selectedSkill.outputs || selectedSkill.outputs.length === 0) && (
                      <li style={{ color: 'var(--text-muted)', listStyle: 'none' }}>No direct outputs mapped.</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
