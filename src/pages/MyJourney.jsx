import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MONASTERIES } from '../data/dataset';
import JourneyMap from '../components/JourneyMap';
import { ArrowUp, ArrowDown, Trash2, ArrowRight, Compass, ShieldAlert, CheckSquare, Square, Calendar, MapPin, Clock, DollarSign, Download, Sparkles, Check, RefreshCw } from 'lucide-react';

const PRESET_CIRCUITS = [
  {
    id: 'kagyu-nyingma',
    title: 'The Capital & North Sacred Trail',
    subtitle: '3 Days • 3 Monasteries • East & North Sikkim',
    ids: ['rumtek', 'enchey', 'phodong'],
    desc: 'Explore the royal seat of Karma Kagyu at Rumtek, the hilltop hermitage at Enchey, and the ancient woodblock library at Phodong.'
  },
  {
    id: 'west-sacred',
    title: 'West Sikkim Royal & Sacred Circle',
    subtitle: '2 Days • 2 Monasteries • West Sikkim',
    ids: ['pemayangtse', 'tashiding'],
    desc: 'Journey to Pemayangtse (royal consecration temple) and Tashiding (the wish-fulfilling mountain ridge above Rathong River).'
  },
  {
    id: 'grand-sikkim',
    title: 'Grand 4-District Heritage Pilgrimage',
    subtitle: '5 Days • 6 Monasteries • All 4 Districts',
    ids: ['rumtek', 'enchey', 'phodong', 'pemayangtse', 'tashiding', 'ralang'],
    desc: 'The complete spiritual circuit spanning Gangtok, Gyalshing, Namchi, and Mangan with full regional permit assistance.'
  }
];

const DISTANCES = {
  'rumtek-enchey': { dist: '24 km', time: '1 hr 15 mins' },
  'rumtek-pemayangtse': { dist: '115 km', time: '4 hrs 30 mins' },
  'rumtek-tashiding': { dist: '120 km', time: '4 hrs 45 mins' },
  'rumtek-ralang': { dist: '76 km', time: '3 hrs' },
  'rumtek-phodong': { dist: '50 km', time: '2 hrs' },
  'enchey-phodong': { dist: '40 km', time: '1 hr 30 mins' },
  'enchey-pemayangtse': { dist: '110 km', time: '4 hrs 15 mins' },
  'enchey-tashiding': { dist: '115 km', time: '4 hrs 30 mins' },
  'enchey-ralang': { dist: '72 km', time: '2 hrs 45 mins' },
  'pemayangtse-tashiding': { dist: '32 km', time: '1 hr 15 mins' },
  'pemayangtse-ralang': { dist: '65 km', time: '2 hrs 30 mins' },
  'pemayangtse-phodong': { dist: '145 km', time: '5 hrs 30 mins' },
  'tashiding-ralang': { dist: '42 km', time: '1 hr 45 mins' },
  'tashiding-phodong': { dist: '150 km', time: '5 hrs 45 mins' },
  'ralang-phodong': { dist: '105 km', time: '4 hrs' }
};

const getDistanceInfo = (id1, id2) => {
  const key = [id1, id2].sort().join('-');
  return DISTANCES[key] || { dist: '48 km', time: '2 hrs 10 mins' };
};

const SEASONAL_ADVICE = {
  Spring: [
    "Pack light woolens (evening wind gets chilly in mountain passes).",
    "Carry a folding umbrella for unpredictable afternoon pre-monsoon showers.",
    "Bring wide-angle camera lenses for blooming rhododendron valleys in West/North Sikkim."
  ],
  Monsoon: [
    "Sturdy high-traction hiking boots (stone staircases get slippery).",
    "Waterproof rain jacket and dry sacks for electronic gears.",
    "Add 1-2 buffer days to your itinerary due to potential mountain road blockages."
  ],
  Autumn: [
    "Medium woolens and windbreakers for clear, crisp autumn air.",
    "Plan visits around early morning hours (6:00 AM - 9:00 AM) for clearest Kanchenjunga views.",
    "Align travel days with local Kagyat Cham dance festival dates in December."
  ],
  Winter: [
    "Heavy thermals, down jackets, and insulated gloves.",
    "Start early: sun sets by 4:30 PM in mountain valleys.",
    "Check border checkpoints: high-altitude routes to North Sikkim might close due to snow."
  ]
};

export default function MyJourney({ journeyIds, setJourneyIds, navigate }) {
  const [selectedSeason, setSelectedSeason] = useState('Autumn');
  const [checkedAdvice, setCheckedAdvice] = useState([]);
  const [copied, setCopied] = useState(false);

  const savedMonasteries = journeyIds
    .map((id) => MONASTERIES.find((m) => m.id === id))
    .filter(Boolean);

  const hasNorthSikkim = savedMonasteries.some(m => m.district === 'Mangan');

  const handleMove = (index, direction) => {
    const newIds = [...journeyIds];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newIds.length) return;
    const temp = newIds[index];
    newIds[index] = newIds[targetIndex];
    newIds[targetIndex] = temp;
    setJourneyIds(newIds);
  };

  const handleRemove = (id) => {
    setJourneyIds(journeyIds.filter((item) => item !== id));
  };

  const toggleAdvice = (index) => {
    setCheckedAdvice((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleLoadCircuit = (circuitIds) => {
    setJourneyIds(circuitIds);
  };

  const generateItineraryText = () => {
    let text = "SIKKORA - MY SACRED SIKKIM PILGRIMAGE ITINERARY\n\n";
    savedMonasteries.forEach((m, idx) => {
      text += `Stop ${idx + 1}: ${m.name} (${m.district} District)\n`;
      text += `Sect: ${m.quickFacts.sect} | Elevation: ${m.quickFacts.elevation}\n`;
      text += `Highlights: ${m.shortDescription}\n\n`;
    });
    text += `Required Permits: ${hasNorthSikkim ? 'Inner Line Permit (ILP) + North Sikkim PAP' : 'Inner Line Permit (ILP)'}\n`;
    return text;
  };

  const handleCopyItinerary = () => {
    const text = generateItineraryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="journey-page container page-transition">
      <header className="journey-header">
        <span className="badge"><Compass size={14} /> Sacred Pilgrimage & Travel Planner</span>
        <h1 className="serif">Custom Route & Itinerary Builder</h1>
        <p>Plan your personalized mountain pilgrimage. Load curated circuits, sequence custom sanctuary stops, view real driving times, permit requirements, and day-by-day travel schedules.</p>
      </header>

      <section className="curated-circuits-section">
        <h2 className="serif curated-title">Recommended Curated Circuits</h2>
        <div className="circuits-grid">
          {PRESET_CIRCUITS.map((c) => {
            const isActive = c.ids.every(id => journeyIds.includes(id)) && journeyIds.length === c.ids.length;
            return (
              <div key={c.id} className={`circuit-card ${isActive ? 'active' : ''}`}>
                <div className="circuit-header">
                  <span className="badge-small">{c.subtitle}</span>
                  <h3 className="serif">{c.title}</h3>
                </div>
                <p>{c.desc}</p>
                <button
                  className={`btn-circuit ${isActive ? 'loaded' : ''}`}
                  onClick={() => handleLoadCircuit(c.ids)}
                >
                  {isActive ? <Check size={14} /> : <Sparkles size={14} />}
                  <span>{isActive ? 'Loaded in Itinerary' : 'Load Circuit'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {savedMonasteries.length === 0 ? (
        <div className="journey-empty-state">
          <p className="serif">Your custom itinerary is empty</p>
          <span>Select a curated circuit above or browse monasteries to build your route.</span>
          <button className="btn-primary" onClick={() => navigate('explore')}>
            Browse All Sanctuaries <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="journey-layout-grid">
          <div className="journey-list-wrapper">
            <div className="journey-list-actions">
              <div className="actions-left">
                <span className="pill-count">{savedMonasteries.length} Sanctuaries Selected</span>
              </div>
              <div className="actions-right">
                <button className="btn-text-icon" onClick={handleCopyItinerary}>
                  {copied ? <Check size={14} /> : <Download size={14} />}
                  <span>{copied ? 'Itinerary Copied!' : 'Export Summary'}</span>
                </button>
                <button className="btn-text delete-text" onClick={() => setJourneyIds([])}>Clear All</button>
              </div>
            </div>

            <div className="journey-itinerary-list">
              <AnimatePresence initial={false}>
                {savedMonasteries.map((m, idx) => {
                  const hasNext = idx < savedMonasteries.length - 1;
                  const nextM = hasNext ? savedMonasteries[idx + 1] : null;
                  const distInfo = nextM ? getDistanceInfo(m.id, nextM.id) : null;

                  return (
                    <motion.div
                      key={m.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="journey-item-wrapper"
                    >
                      <div className="journey-item-card">
                        <div className="journey-item-num">{idx + 1}</div>
                        <img src={m.thumbnail} alt={m.name} className="journey-item-thumb" />
                        
                        <div className="journey-item-details">
                          <span className="badge">{m.district} District</span>
                          <h3 className="serif" onClick={() => navigate('detail', { id: m.id })}>{m.name}</h3>
                          <span className="journey-item-sect">{m.quickFacts.sect} Sect &bull; Elev: {m.quickFacts.elevation}</span>
                        </div>

                        <div className="journey-item-controls">
                          <button
                            className="control-btn"
                            onClick={() => handleMove(idx, -1)}
                            disabled={idx === 0}
                            aria-label="Move Up"
                          >
                            <ArrowUp size={16} />
                          </button>
                          <button
                            className="control-btn"
                            onClick={() => handleMove(idx, 1)}
                            disabled={idx === savedMonasteries.length - 1}
                            aria-label="Move Down"
                          >
                            <ArrowDown size={16} />
                          </button>
                          <button
                            className="control-btn remove-btn"
                            onClick={() => handleRemove(m.id)}
                            aria-label="Remove Location"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      {hasNext && distInfo && (
                        <div className="route-connecting-leg">
                          <div className="leg-line"></div>
                          <div className="leg-details">
                            <Compass size={12} />
                            <span>{distInfo.dist} &bull; {distInfo.time} driving via mountain highway</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="day-breakdown-card">
              <h3 className="serif"><Calendar size={18} /> Day-by-Day Travel Schedule</h3>
              <div className="timeline-steps">
                {savedMonasteries.map((m, idx) => (
                  <div key={m.id} className="timeline-step">
                    <div className="step-badge">Day {Math.floor(idx / 2) + 1} - {idx % 2 === 0 ? 'Morning' : 'Afternoon'}</div>
                    <h4 className="serif">{m.name} ({m.district})</h4>
                    <p>{m.shortDescription}</p>
                    <div className="step-meta">
                      <span><Clock size={12} /> Rec. Stay: 2-3 Hours</span>
                      <span><MapPin size={12} /> Base Hub: {m.district === 'Gangtok' ? 'Gangtok Town' : m.district === 'Gyalshing' ? 'Pelling' : m.district === 'Namchi' ? 'Ravangla' : 'Mangan Town'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="travel-advisory-cards">
              <div className="advisory-card warnings">
                <h4 className="serif"><ShieldAlert size={16} /> Travel Permits & Checklist</h4>
                <ul>
                  <li>Foreign tourists require an Inner Line Permit (ILP) stamp at Rangpo or Melli border checkpoints (free of charge).</li>
                  {hasNorthSikkim && (
                    <li className="warning-highlight">
                      ⚠️ <strong>Mangan District PAP Required:</strong> Your itinerary includes North Sikkim. You must procure a Protected Area Permit (PAP) through a registered local agency in Gangtok.
                    </li>
                  )}
                  <li>Carry 4-6 passport-size photographs and government photo ID copies for permit stamps.</li>
                </ul>
              </div>

              <div className="advisory-card packing-helper">
                <div className="packing-header">
                  <h4 className="serif"><CheckSquare size={16} /> Packing & Seasonal Guide</h4>
                  <select
                    value={selectedSeason}
                    onChange={(e) => {
                      setSelectedSeason(e.target.value);
                      setCheckedAdvice([]);
                    }}
                    className="season-selector"
                  >
                    <option value="Spring">Spring (Mar-May)</option>
                    <option value="Monsoon">Monsoon (Jun-Sep)</option>
                    <option value="Autumn">Autumn (Oct-Nov)</option>
                    <option value="Winter">Winter (Dec-Feb)</option>
                  </select>
                </div>
                <ul className="advice-checklist">
                  {SEASONAL_ADVICE[selectedSeason].map((advice, index) => {
                    const isChecked = checkedAdvice.includes(index);
                    return (
                      <li key={index} onClick={() => toggleAdvice(index)} className={isChecked ? 'checked' : ''}>
                        {isChecked ? <CheckSquare size={16} className="chk-icon active" /> : <Square size={16} className="chk-icon" />}
                        <span>{advice}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="journey-map-aside">
            <JourneyMap journeyIds={journeyIds} />
          </div>
        </div>
      )}
    </div>
  );
}
