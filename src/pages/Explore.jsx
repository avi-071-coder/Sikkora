import { useState } from 'react';
import { motion } from 'framer-motion';
import { MONASTERIES } from '../data/dataset';
import { MapPin, ArrowRight, Bookmark, BookmarkCheck } from 'lucide-react';

export default function Explore({ navigate, journeyIds, toggleJourney }) {
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const districts = ['All', 'Gangtok', 'Gyalshing', 'Namchi', 'Mangan'];

  const filteredMonasteries = MONASTERIES.filter((m) => {
    const matchesDistrict = selectedDistrict === 'All' || m.district.toLowerCase() === selectedDistrict.toLowerCase();
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <div className="explore-page container page-transition">
      <header className="explore-header text-center">
        <span className="badge">Sanctuary Index</span>
        <h1 className="serif">Monasteries of Sikkim</h1>
        <p className="centered-desc">Explore the 6 sacred Buddhist sanctuaries across Gangtok, Gyalshing, Namchi, and Mangan.</p>

        <div className="explore-filters">
          <div className="district-filter-tabs">
            {districts.map((d) => (
              <button
                key={d}
                className={`filter-tab ${selectedDistrict === d ? 'active' : ''}`}
                onClick={() => setSelectedDistrict(d)}
              >
                {d}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search by monastery name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="explore-search-input"
          />
        </div>
      </header>

      <div className="explore-zigzag-list">
        {filteredMonasteries.map((m, idx) => {
          const isEven = idx % 2 === 1;
          const isSaved = journeyIds.includes(m.id);

          return (
            <motion.div
              key={m.id}
              className={`explore-zigzag-item ${isEven ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="zigzag-image-col">
                <div className="zigzag-img-frame">
                  <img src={m.heroImage} alt={m.name} className="zigzag-photo" />
                  <button
                    className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleJourney(m.id);
                    }}
                    title={isSaved ? "Remove from Pilgrimage" : "Add to Pilgrimage"}
                  >
                    {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                  </button>
                </div>
              </div>

              <div className="zigzag-text-col">
                <div className="zigzag-meta">
                  <span className="badge"><MapPin size={12} /> {m.district} District</span>
                  <span className="sect-name">{m.quickFacts.sect} Lineage</span>
                </div>

                <h2 className="serif zigzag-title">{m.name}</h2>
                <p className="zigzag-desc">{m.shortDescription}</p>

                <div className="zigzag-facts-row">
                  <span>Founded: <strong>{m.quickFacts.established}</strong></span>
                  <span>Elevation: <strong>{m.quickFacts.elevation}</strong></span>
                </div>

                <div className="zigzag-action-row">
                  <button className="btn-primary" onClick={() => navigate('detail', { id: m.id })}>
                    View More Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
