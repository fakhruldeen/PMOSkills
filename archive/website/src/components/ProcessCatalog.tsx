import React, { useState, useMemo } from 'react';
import { Search, Info, ArrowRight, Settings } from 'lucide-react';

interface Process {
  id: string;
  title: string;
  domain: string;
  description?: string;
  inputs?: string[];
  outputs?: string[];
  tools?: string[];
  skills?: string[]; // associated skill IDs
  content?: string;
}

interface ProcessCatalogProps {
  processes: Process[];
  onNavigateToSkill: (skillId: string) => void;
}

export const ProcessCatalog: React.FC<ProcessCatalogProps> = ({ processes, onNavigateToSkill }) => {
  const [selectedProcessId, setSelectedProcessId] = useState<string>(processes[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Active selected process
  const selectedProcess = useMemo(() => {
    return processes.find(p => p.id === selectedProcessId) || processes[0];
  }, [processes, selectedProcessId]);

  // Filter processes
  const filteredProcesses = useMemo(() => {
    return processes.filter(p => {
      return p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
             p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
             p.domain.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [processes, searchTerm]);

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', height: '100%', minHeight: 0, overflow: 'hidden' }}>
      {/* Left Sidebar: Process List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', minHeight: 0, borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem', overflow: 'hidden' }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search 41 processes..." 
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

        {/* Scrollable list */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '4px' }}>
          {filteredProcesses.map(proc => {
            const isSelected = proc.id === selectedProcessId;
            return (
              <button
                key={proc.id}
                onClick={() => setSelectedProcessId(proc.id)}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  borderColor: isSelected ? 'var(--color-ref)' : 'var(--border-color)',
                  background: isSelected ? 'rgba(56, 189, 248, 0.08)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 10px rgba(56, 189, 248, 0.1)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.25rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isSelected ? 'var(--color-ref)' : 'var(--text-secondary)' }}>
                    {proc.id}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    PMBOK 8
                  </span>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {proc.title}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {proc.domain}
                </span>
              </button>
            );
          })}

          {filteredProcesses.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
              No processes found.
            </div>
          )}
        </div>
      </div>

      {/* Right Details Panel */}
      {selectedProcess && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-ref">{selectedProcess.id}</span>
              <span className="badge badge-skill" style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--color-skill)', borderColor: 'rgba(249, 115, 22, 0.2)' }}>
                Process Record
              </span>
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff' }}>{selectedProcess.title}</h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Performance Domain: <strong style={{ color: 'var(--text-primary)' }}>{selectedProcess.domain}</strong>
            </span>
          </div>

          {/* Details Content Scroll Panel */}
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Description */}
            {selectedProcess.description && (
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ref)' }}>
                  <Info size={18} /> Description
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {selectedProcess.description}
                </p>
              </div>
            )}

            {/* Inputs & Outputs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>Inputs</h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {selectedProcess.inputs && selectedProcess.inputs.map((inp, idx) => (
                    <li key={idx} style={{ marginBottom: '0.4rem' }}>{inp}</li>
                  ))}
                  {(!selectedProcess.inputs || selectedProcess.inputs.length === 0) && (
                    <li style={{ color: 'var(--text-muted)', listStyle: 'none' }}>No direct inputs listed.</li>
                  )}
                </ul>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>Outputs</h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {selectedProcess.outputs && selectedProcess.outputs.map((out, idx) => (
                    <li key={idx} style={{ marginBottom: '0.4rem' }}>{out}</li>
                  ))}
                  {(!selectedProcess.outputs || selectedProcess.outputs.length === 0) && (
                    <li style={{ color: 'var(--text-muted)', listStyle: 'none' }}>No direct outputs listed.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Tools and Techniques */}
            {selectedProcess.tools && selectedProcess.tools.length > 0 && (
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>Tools & Techniques</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProcess.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="glass" 
                      style={{ 
                        padding: '4px 10px', 
                        borderRadius: '4px', 
                        fontSize: '0.8rem', 
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Mapped Skills */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-skill)' }}>
                <Settings size={18} /> Executable Implementation Skills
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                The following skills in the repository programmatically execute this process record:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProcess.skills && selectedProcess.skills.map((skillId) => (
                  <button
                    key={skillId}
                    onClick={() => onNavigateToSkill(skillId)}
                    className="glass-interactive"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-skill)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="badge badge-skill" style={{ fontSize: '0.7rem' }}>{skillId}</span>
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </button>
                ))}
                {(!selectedProcess.skills || selectedProcess.skills.length === 0) && (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    No directly mapped skills in the database.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
