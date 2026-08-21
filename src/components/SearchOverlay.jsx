import { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { MONASTERIES, GALLERY_ITEMS, ARCHIVE_ITEMS } from '../data/dataset';

export default function SearchOverlay({ onClose, navigate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ monasteries: [], gallery: [], archive: [], nearby: [] });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSearch = (val) => {
    setQuery(val);
    if (!val.trim()) {
      setResults({ monasteries: [], gallery: [], archive: [], nearby: [] });
      return;
    }
    const lower = val.toLowerCase();

    const matchedMonasteries = MONASTERIES.filter(
      (m) => m.name.toLowerCase().includes(lower) || m.shortDescription.toLowerCase().includes(lower) || m.district.toLowerCase().includes(lower)
    );

    const matchedGallery = GALLERY_ITEMS.filter(
      (g) => g.title.toLowerCase().includes(lower) || g.description.toLowerCase().includes(lower) || g.location.toLowerCase().includes(lower)
    );

    const matchedArchive = ARCHIVE_ITEMS.filter(
      (a) => a.title.toLowerCase().includes(lower) || a.description.toLowerCase().includes(lower) || a.location.toLowerCase().includes(lower)
    );

    const matchedNearby = [];
    MONASTERIES.forEach((m) => {
      m.nearbyLocations.forEach((n) => {
        if (n.name.toLowerCase().includes(lower) || n.description.toLowerCase().includes(lower)) {
          if (!matchedNearby.some((item) => item.id === n.id)) {
            matchedNearby.push({ ...n, monasteryId: m.id });
          }
        }
      });
    });

    setResults({
      monasteries: matchedMonasteries,
      gallery: matchedGallery,
      archive: matchedArchive,
      nearby: matchedNearby
    });
  };

  const handleItemClick = (type, id, extra = null) => {
    onClose();
    if (type === 'monastery') {
      navigate('detail', { id });
    } else if (type === 'gallery') {
      navigate('gallery');
    } else if (type === 'archive') {
      navigate('archive');
    } else if (type === 'nearby') {
      navigate('detail', { id: extra, scrollToNearby: true });
    }
  };

  const hasResults = Object.values(results).some((arr) => arr.length > 0);

  return (
    <div className="search-overlay">
      <div className="search-header">
        <div className="search-input-wrapper">
          <Search size={24} className="search-icon-active" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search monasteries, locations, heritage..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <button className="search-close" onClick={onClose}>
          <X size={28} />
        </button>
      </div>

      <div className="search-body hide-scrollbar">
        {query && !hasResults && (
          <div className="search-no-results">
            <p className="serif">No results found for &ldquo;{query}&rdquo;</p>
            <span>Try searching for &quot;Rumtek&quot;, &quot;fresco&quot;, &quot;architecture&quot;, or &quot;Gangtok&quot;.</span>
          </div>
        )}

        {hasResults && (
          <div className="search-results-grid">
            {results.monasteries.length > 0 && (
              <div className="search-category-section">
                <h3>Monasteries</h3>
                <ul>
                  {results.monasteries.map((m) => (
                    <li key={m.id} onClick={() => handleItemClick('monastery', m.id)}>
                      <div className="search-result-name">{m.name}</div>
                      <div className="search-result-sub">{m.district} District &bull; {m.quickFacts.sect}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.nearby.length > 0 && (
              <div className="search-category-section">
                <h3>Nearby Attractions</h3>
                <ul>
                  {results.nearby.map((n) => (
                    <li key={n.id} onClick={() => handleItemClick('nearby', n.id, n.monasteryId)}>
                      <div className="search-result-name">{n.name}</div>
                      <div className="search-result-sub">{n.category} &bull; Near {MONASTERIES.find(m => m.id === n.monasteryId)?.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.gallery.length > 0 && (
              <div className="search-category-section">
                <h3>Gallery</h3>
                <ul>
                  {results.gallery.map((g) => (
                    <li key={g.id} onClick={() => handleItemClick('gallery', g.id)}>
                      <div className="search-result-name">{g.title}</div>
                      <div className="search-result-sub">{g.location} &bull; {g.category}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.archive.length > 0 && (
              <div className="search-category-section">
                <h3>Heritage Archive</h3>
                <ul>
                  {results.archive.map((a) => (
                    <li key={a.id} onClick={() => handleItemClick('archive', a.id)}>
                      <div className="search-result-name">{a.title}</div>
                      <div className="search-result-sub">{a.location} &bull; {a.date}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
