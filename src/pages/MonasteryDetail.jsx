import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MONASTERIES } from '../data/dataset';
import VirtualTour from '../components/VirtualTour';
import { ArrowLeft, Bookmark, BookmarkCheck, MapPin, Compass } from 'lucide-react';

export default function MonasteryDetail({ params, navigate, journeyIds, toggleJourney }) {
  const m = MONASTERIES.find((item) => item.id === params.id) || MONASTERIES[0];
  const isSaved = journeyIds.includes(m.id);
  const nearbyRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params.scrollToNearby && nearbyRef.current) {
      setTimeout(() => {
        nearbyRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [params]);

  const handleBack = () => {
    navigate('explore');
  };

  return (
    <div className="monastery-detail-page page-transition">
      <header className="detail-hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(24,24,26,0.25), rgba(24,24,26,0.85)), url('${m.heroImage}')` }}>
        <motion.div
          className="detail-hero-content container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="back-btn" onClick={handleBack} aria-label="Back to catalog">
            <ArrowLeft size={16} /> Back to explore
          </button>
          <span className="badge">{m.district} District</span>
          <h1 className="serif">{m.name}</h1>
          <p>{m.shortDescription}</p>

          <div className="detail-hero-actions">
            <a href="#virtual-tour" className="btn-primary">
              <Compass size={16} /> Virtual Tour
            </a>
            <button
              className={`btn-secondary-light ${isSaved ? 'saved' : ''}`}
              onClick={() => toggleJourney(m.id)}
            >
              {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              <span>{isSaved ? "Saved in Journey" : "Save to Journey"}</span>
            </button>
          </div>
        </motion.div>
      </header>

      <section className="detail-main-layout container">
        <div className="detail-left-content">
          <motion.div
            className="detail-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="serif">History</h2>
            <p>{m.history}</p>
          </motion.div>

          <motion.div
            className="detail-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="serif">Cultural Significance</h2>
            <p>{m.culturalSignificance}</p>
          </motion.div>

          <motion.div
            className="detail-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="serif">Architecture & Art</h2>
            <p>{m.architecture}</p>
          </motion.div>
        </div>

        <aside className="detail-right-sidebar">
          <motion.div
            className="sidebar-card facts-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="serif">Quick Facts</h3>
            <ul>
              <li>
                <span className="fact-label">Established</span>
                <span className="fact-value">{m.quickFacts.established}</span>
              </li>
              <li>
                <span className="fact-label">Founder</span>
                <span className="fact-value">{m.quickFacts.founder}</span>
              </li>
              <li>
                <span className="fact-label">Buddhist Sect</span>
                <span className="fact-value">{m.quickFacts.sect}</span>
              </li>
              <li>
                <span className="fact-label">Elevation</span>
                <span className="fact-value">{m.quickFacts.elevation}</span>
              </li>
              <li>
                <span className="fact-label">Key Festival</span>
                <span className="fact-value">{m.quickFacts.keyFestival}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="sidebar-card etiquette-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="serif">Visitor Manners</h3>
            <ul>
              {m.visitorEtiquette.map((rule, idx) => (
                <li key={idx}>
                  <span className="etiquette-dot"></span>
                  <p>{rule}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </aside>
      </section>

      <section id="virtual-tour" className="vt-section container">
        <VirtualTour tourData={m.virtualTour} monasteryName={m.name} />
      </section>

      <section ref={nearbyRef} className="detail-nearby-section container">
        <div className="section-header">
          <span className="badge">Local Environment</span>
          <h2 className="serif">Explore Nearby</h2>
        </div>

        <div className="detail-nearby-grid">
          {m.nearbyLocations.map((n, i) => (
            <motion.div
              key={n.id}
              className="nearby-detail-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={n.image} alt={n.name} />
              <div className="nearby-card-details">
                <div className="nearby-card-header">
                  <h3 className="serif">{n.name}</h3>
                  <span className="nearby-meta-pill"><MapPin size={12} /> {n.distance} &bull; {n.category}</span>
                </div>
                <p>{n.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
