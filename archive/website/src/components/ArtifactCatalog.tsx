import React, { useState, useMemo, useEffect } from 'react';
import { Search, Folder, Copy, Check, Download } from 'lucide-react';
import { marked } from 'marked';

interface Artifact {
  id: string;
  title: string;
  path?: string;
  content: string; // raw markdown template content
}

interface ArtifactCatalogProps {
  artifacts: Artifact[];
}

export const ArtifactCatalog: React.FC<ArtifactCatalogProps> = ({ artifacts }) => {
  const [selectedArtifactId, setSelectedArtifactId] = useState<string>(artifacts[0]?.path || artifacts[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copied, setCopied] = useState<boolean>(false);

  // Active selected artifact
  const selectedArtifact = useMemo(() => {
    return artifacts.find(a => (a.path || a.id) === selectedArtifactId) || artifacts[0];
  }, [artifacts, selectedArtifactId]);

  // Extract categories (folder names) from artifact paths
  const categories = useMemo(() => {
    const cats = new Set<string>();
    artifacts.forEach(a => {
      if (a.path) {
        const parts = a.path.split('/');
        if (parts.length > 2) {
          // e.g. artifacts/initiating/A01-business-case.md -> initiating
          cats.add(parts[1]);
        }
      }
    });
    return ['All', ...Array.from(cats)];
  }, [artifacts]);

  // Filter artifacts
  const filteredArtifacts = useMemo(() => {
    return artifacts.filter(a => {
      const name = a.path ? a.path.split('/').pop() || '' : '';
      const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            a.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            name.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesCategory = true;
      if (activeCategory !== 'All' && a.path) {
        const parts = a.path.split('/');
        matchesCategory = parts.length > 2 && parts[1] === activeCategory;
      }

      return matchesSearch && matchesCategory;
    });
  }, [artifacts, searchTerm, activeCategory]);

  // Set first filtered artifact if current selection is filtered out
  useEffect(() => {
    if (filteredArtifacts.length > 0 && !filteredArtifacts.some(a => (a.path || a.id) === selectedArtifactId)) {
      setSelectedArtifactId(filteredArtifacts[0].path || filteredArtifacts[0].id);
    }
  }, [filteredArtifacts, selectedArtifactId]);

  // Copy raw markdown template to clipboard
  const handleCopy = () => {
    if (!selectedArtifact?.content) return;
    navigator.clipboard.writeText(selectedArtifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download markdown file
  const handleDownload = () => {
    if (!selectedArtifact) return;
    const blob = new Blob([selectedArtifact.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const filename = selectedArtifact.path ? selectedArtifact.path.split('/').pop() || `${selectedArtifact.id}.md` : `${selectedArtifact.id}.md`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // HTML content from markdown
  const htmlContent = useMemo(() => {
    if (!selectedArtifact?.content) return '';
    try {
      // Configure marked option to prevent security warnings
      return marked.parse(selectedArtifact.content, {
        gfm: true,
        breaks: true
      }) as string;
    } catch (e) {
      console.error(e);
      return selectedArtifact.content;
    }
  }, [selectedArtifact]);

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', height: '100%', minHeight: 0, overflow: 'hidden' }}>
      {/* Left Sidebar: Artifacts list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', minHeight: 0, borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem', overflow: 'hidden' }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search 92 templates..." 
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

        {/* Category Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Category
          </label>
          <select 
            value={activeCategory} 
            onChange={(e) => setActiveCategory(e.target.value)}
            style={{
              padding: '0.5rem',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              textTransform: 'capitalize'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.replace(/-/g, ' ')}</option>
            ))}
          </select>
        </div>

        {/* Scrollable list */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '4px' }}>
          {filteredArtifacts.map(art => {
            const artKey = art.path || art.id;
            const isSelected = artKey === selectedArtifactId;
            const filename = art.path ? art.path.split('/').pop() || art.id : art.id;
            return (
              <button
                key={artKey}
                onClick={() => setSelectedArtifactId(artKey)}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0.75rem 1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  borderColor: isSelected ? 'var(--color-art)' : 'var(--border-color)',
                  background: isSelected ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 10px rgba(16, 185, 129, 0.1)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.2rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isSelected ? 'var(--color-art)' : 'var(--text-secondary)' }}>
                    {art.id}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Folder size={10} /> {art.path ? art.path.split('/')[1] : 'artifacts'}
                  </span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {art.title}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'monospace', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {filename}
                </span>
              </button>
            );
          })}

          {filteredArtifacts.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
              No templates found.
            </div>
          )}
        </div>
      </div>

      {/* Right Details / Document Preview Panel */}
      {selectedArtifact && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Header Controls */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span className="badge badge-art">{selectedArtifact.id}</span>
                {selectedArtifact.path && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                    {selectedArtifact.path}
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: '1.5rem', color: '#ffffff' }}>{selectedArtifact.title}</h2>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleCopy}
                className="glass"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
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
                    <Check size={14} /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy Template
                  </>
                )}
              </button>

              <button
                onClick={handleDownload}
                className="glass"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-primary)'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-art)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                <Download size={14} /> Download .md
              </button>
            </div>
          </div>

          {/* HTML Render Panel */}
          <div 
            className="glass markdown-body" 
            style={{ 
              flex: 1, 
              overflowY: 'auto', 
              padding: '2rem', 
              background: 'rgba(10, 14, 28, 0.3)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px'
            }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      )}
    </div>
  );
};
