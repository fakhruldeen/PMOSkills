import React, { useState, useMemo, useEffect } from 'react';
import { Search, Layers, Clipboard, Check } from 'lucide-react';
import { marked } from 'marked';

interface ReferenceFile {
  path: string;
  title: string;
  content: string;
}

interface ReferenceViewerProps {
  references: ReferenceFile[];
}

export const ReferenceViewer: React.FC<ReferenceViewerProps> = ({ references }) => {
  const [selectedPath, setSelectedPath] = useState<string>(references[0]?.path || '');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Group references by their folder
  const groupedReferences = useMemo(() => {
    const groups: Record<string, ReferenceFile[]> = {};
    
    references.forEach(ref => {
      // Find category from path, e.g. reference/principles/P01-stewardship.md -> principles
      const parts = ref.path.split('/');
      const groupName = parts.length > 2 ? parts[1] : 'general';
      
      // Filter out processes index or main catalog if needed, or keep everything
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(ref);
    });
    
    // Sort items inside groups
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => a.title.localeCompare(b.title));
    });
    
    return groups;
  }, [references]);

  // Selected reference item
  const selectedRef = useMemo(() => {
    return references.find(r => r.path === selectedPath) || references[0];
  }, [references, selectedPath]);

  // HTML content of selected reference
  const htmlContent = useMemo(() => {
    if (!selectedRef?.content) return '';
    try {
      return marked.parse(selectedRef.content, {
        gfm: true,
        breaks: true
      }) as string;
    } catch (e) {
      console.error(e);
      return selectedRef.content;
    }
  }, [selectedRef]);

  // Handle copy content
  const handleCopy = () => {
    if (!selectedRef?.content) return;
    navigator.clipboard.writeText(selectedRef.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter groups based on search term
  const filteredGroupedReferences = useMemo(() => {
    if (!searchTerm) return groupedReferences;
    
    const term = searchTerm.toLowerCase();
    const filtered: Record<string, ReferenceFile[]> = {};
    
    Object.entries(groupedReferences).forEach(([groupName, files]) => {
      const matchingFiles = files.filter(f => 
        f.title.toLowerCase().includes(term) || 
        f.path.toLowerCase().includes(term)
      );
      
      if (matchingFiles.length > 0) {
        filtered[groupName] = matchingFiles;
      }
    });
    
    return filtered;
  }, [groupedReferences, searchTerm]);

  // Set first filtered file as active if selection is lost
  useEffect(() => {
    const allFilteredPaths = Object.values(filteredGroupedReferences).flatMap(files => files.map(f => f.path));
    if (allFilteredPaths.length > 0 && !allFilteredPaths.includes(selectedPath)) {
      setSelectedPath(allFilteredPaths[0]);
    }
  }, [filteredGroupedReferences, selectedPath]);

  // Human friendly category names
  const formatCategoryName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  };

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', height: '100%', minHeight: 0, overflow: 'hidden' }}>
      {/* Left Sidebar: Nav Tree */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', minHeight: 0, borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem', overflow: 'hidden' }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search reference guides..." 
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
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingRight: '4px' }}>
          {Object.entries(filteredGroupedReferences).map(([groupName, files]) => (
            <div key={groupName} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Layers size={12} /> {formatCategoryName(groupName)}
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {files.map(file => {
                  const isSelected = file.path === selectedPath;
                  return (
                    <button
                      key={file.path}
                      onClick={() => setSelectedPath(file.path)}
                      style={{
                        padding: '0.4rem 0.75rem',
                        background: isSelected ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                        border: 'none',
                        borderRadius: '6px',
                        color: isSelected ? 'var(--color-ref)' : 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        fontWeight: isSelected ? 600 : 400,
                        cursor: 'pointer',
                        textAlign: 'left',
                        width: '100%',
                        display: 'block',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {file.title}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {Object.keys(filteredGroupedReferences).length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
              No reference files match your query.
            </div>
          )}
        </div>
      </div>

      {/* Right Content Panel */}
      {selectedRef && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Header Controls */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="badge badge-ref" style={{ marginBottom: '0.25rem' }}>Reference Layer</span>
              <h2 style={{ fontSize: '1.5rem', color: '#ffffff' }}>{selectedRef.title}</h2>
            </div>
            
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
                  <Check size={14} /> Copied!
                </>
              ) : (
                <>
                  <Clipboard size={14} /> Copy Source
                </>
              )}
            </button>
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
