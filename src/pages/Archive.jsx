import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARCHIVE_ITEMS, HISTORICAL_DOCUMENTS } from '../data/dataset';
import ThenAndNow from '../components/ThenAndNow';
import { Scroll, Landmark, Calendar, ShieldCheck } from 'lucide-react';

export default function Archive() {
  const [selectedArchiveId, setSelectedArchiveId] = useState(ARCHIVE_ITEMS[0].id);
  const [activeDocId, setActiveDocId] = useState(HISTORICAL_DOCUMENTS[0].id);

  const activeItem = ARCHIVE_ITEMS.find((a) => a.id === selectedArchiveId) || ARCHIVE_ITEMS[0];
  const activeDoc = HISTORICAL_DOCUMENTS.find((d) => d.id === activeDocId) || HISTORICAL_DOCUMENTS[0];

  return (
    <div className="archive-page container page-transition">
      <header className="archive-header">
        <span className="badge">Digital Preservation</span>
        <h1 className="serif">Sacred Manuscripts & Treaties</h1>
        <p>A declassified repository documenting the geopolitical and religious history of Sikkim. Overlay sketches with contemporary photos or read transcribed historical treaties.</p>
      </header>

      <section className="archive-comparison-section">
        <div className="section-title-block">
          <span className="num-badge">01</span>
          <h2 className="serif">Structural Overlays</h2>
        </div>
        <div className="archive-selector-bar">
          {ARCHIVE_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`archive-select-btn ${selectedArchiveId === item.id ? 'active' : ''}`}
              onClick={() => setSelectedArchiveId(item.id)}
            >
              {item.location.split(',')[0]}
            </button>
          ))}
        </div>
        <div className="archive-slider-frame">
          <ThenAndNow archiveItem={activeItem} />
        </div>
      </section>

      <section className="historical-treaties-section">
        <div className="section-title-block">
          <span className="num-badge">02</span>
          <h2 className="serif">Declassified State Treaties</h2>
        </div>

        <div className="treaty-layout">
          <div className="treaty-sidebar-menu">
            {HISTORICAL_DOCUMENTS.map((doc) => (
              <button
                key={doc.id}
                className={`treaty-menu-btn ${activeDocId === doc.id ? 'active' : ''}`}
                onClick={() => setActiveDocId(doc.id)}
              >
                <Scroll size={16} />
                <div className="btn-lbl">
                  <span className="btn-date">{doc.date}</span>
                  <span className="btn-title serif">{doc.title.replace('The ', '')}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="treaty-display-canvas">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDocId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="treaty-parchment"
              >
                <div className="parchment-wax-seal"></div>
                <h3 className="serif">{activeDoc.title}</h3>
                
                <div className="treaty-meta-row">
                  <span><Calendar size={14} /> {activeDoc.date}</span>
                  <span><Landmark size={14} /> {activeDoc.significance}</span>
                </div>

                <div className="treaty-body-text">
                  <p className="serif-italic">&ldquo;{activeDoc.transcript}&rdquo;</p>
                </div>

                <div className="parchment-signatures">
                  <div className="sig-block">
                    <span className="sig-line"></span>
                    <span className="sig-name">Namgyal House Seal</span>
                  </div>
                  <div className="sig-block">
                    <span className="sig-line"></span>
                    <span className="sig-name">State Plenipotentiary</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
