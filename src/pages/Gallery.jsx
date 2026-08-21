import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/dataset';
import { Orbit, Disc } from 'lucide-react';

export default function Gallery() {
  const [viewMode, setViewMode] = useState('spiral');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cylinderAngle, setCylinderAngle] = useState(0);
  const lastScrollTimeRef = useRef(0);

  const total = GALLERY_ITEMS.length;

  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 850) return;

    if (Math.abs(e.deltaY) < 15) return;

    lastScrollTimeRef.current = now;

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev + 1) % total);
      setCylinderAngle((prev) => prev + (360 / total));
    } else if (e.deltaY < 0) {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setCylinderAngle((prev) => prev - (360 / total));
    }
  };

  const getItemAtOffset = (offset) => {
    const idx = (currentIndex + offset + total * 100) % total;
    return { ...GALLERY_ITEMS[idx], originalIndex: idx };
  };

  return (
    <div className="gallery-page container page-transition full-gallery-viewport" onWheel={handleWheel}>
      <header className="gallery-header text-center">
        <span className="badge">Visual Sanctuary</span>
        <h1 className="serif floating-gallery-title">The Floating Gallery</h1>
        <p className="floating-gallery-subtitle">SCROLL OR SWIPE ANYWHERE TO EXPLORE</p>

        <div className="view-switcher-center-wrap">
          <span className="switcher-label">Change Gallery View:</span>
          <div className="view-switcher-btn-group">
            <button
              className={`switcher-btn ${viewMode === 'spiral' ? 'active' : ''}`}
              onClick={() => setViewMode('spiral')}
            >
              <Orbit size={16} /> Spiral / Floating
            </button>
            <button
              className={`switcher-btn ${viewMode === 'cylindrical' ? 'active' : ''}`}
              onClick={() => setViewMode('cylindrical')}
            >
              <Disc size={16} /> Cylindrical View
            </button>
          </div>
        </div>
      </header>

      {viewMode === 'spiral' ? (
        <div className="floating-gallery-container">
          <div className="floating-gallery-stage">
            {[-1, 0, 1, 2].map((offset) => {
              const item = getItemAtOffset(offset);

              let x = 0;
              let y = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 1;

              if (offset === -1) {
                x = -560;
                y = -180;
                scale = 0.75;
                opacity = 0.45;
                zIndex = 2;
              } else if (offset === 0) {
                x = -130;
                y = 20;
                scale = 1.05;
                opacity = 1;
                zIndex = 10;
              } else if (offset === 1) {
                x = 320;
                y = 140;
                scale = 0.88;
                opacity = 0.9;
                zIndex = 5;
              } else if (offset === 2) {
                x = 650;
                y = 280;
                scale = 0.65;
                opacity = 0;
                zIndex = 1;
              }

              return (
                <motion.div
                  key={`${item.id}-${offset}`}
                  className="floating-card-wrap"
                  animate={{ x, y, scale, opacity, zIndex }}
                  transition={{
                    duration: 0.75,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                  onClick={() => setCurrentIndex(item.originalIndex)}
                >
                  <div className={`floating-white-frame ${offset === 0 ? 'active-floating-frame' : ''}`}>
                    <img src={item.image} alt={`Sanctuary photo ${item.originalIndex + 1}`} className="floating-photo" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="revolving-cylinder-container">
          <div className="cylinder-viewport">
            <motion.div
              className="cylinder-revolving-drum"
              animate={{ rotateY: -cylinderAngle }}
              transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            >
              {GALLERY_ITEMS.map((item, idx) => {
                const angle = idx * (360 / total);
                return (
                  <div
                    key={item.id}
                    className={`revolving-panel ${currentIndex === idx ? 'panel-highlight' : ''}`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(480px)`
                    }}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setCylinderAngle(idx * (360 / total));
                    }}
                  >
                    <div className="revolving-frame spaced-frame">
                      <img src={item.image} alt={`Monastery view ${idx + 1}`} className="revolving-img" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
