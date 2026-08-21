import { useState } from 'react';
import { motion } from 'framer-motion';
import SikkimMap from '../components/SikkimMap';
import { ArrowRight, Compass, Landmark, BookOpen, Sun, MapPin, Navigation, Sparkles } from 'lucide-react';

const REGION_GUIDES = [
  {
    id: 'gangtok',
    name: 'Gangtok District (East Sikkim)',
    monasteriesText: 'Rumtek Monastery (Dharma Chakra Centre) & Enchey Monastery',
    influence: 'As the administrative and spiritual nexus of Sikkim, East Sikkim bridges ancient Nyingma traditions with the global seat of the Karma Kagyu lineage.',
    tourism: 'Connected via Gangtok highway; requires Inner Line Permits (ILP) for international visitors. Best visited during morning prayer hours.',
    elevation: '1,650m - 2,200m',
    image: '/assets/images/gangtok_region_real.png'
  },
  {
    id: 'gyalshing',
    name: 'Gyalshing District (West Sikkim)',
    monasteriesText: 'Pemayangtse Monastery & Tashiding Monastery',
    influence: 'The historical birthplace of Sikkimese Buddhism, home to the sacred coronation site at Yuksom and the unblemished view of Mount Kanchenjunga.',
    tourism: 'Accessible via Pelling; ideal for pilgrimage treks, sacred lake visits (Khecheopalri), and stone palace explorations (Rabdentse).',
    elevation: '2,080m - 2,150m',
    image: '/assets/images/gyalshing_region_real.png'
  },
  {
    id: 'namchi',
    name: 'Namchi District (South Sikkim)',
    monasteriesText: 'Ralang Monastery (Old & New Gompas)',
    influence: 'Renowned for preserving the sacred Mahakala Cham dances and hosting the annual Pang Lhabsol festivities amidst rolling tea slopes.',
    tourism: 'Located 78km from Gangtok; features mild weather, scenic mountain road loops, and serene monastery homestays.',
    elevation: '1,315m - 1,700m',
    image: '/assets/images/namchi_region_real.png'
  },
  {
    id: 'mangan',
    name: 'Mangan District (North Sikkim)',
    monasteriesText: 'Phodong Monastery & Labrang Monastery',
    influence: 'Guarding the northern alpine frontier, Mangan shelters ancient woodblock murals, tantric meditation retreats, and pristine river valleys.',
    tourism: 'Requires Protected Area Permits (PAP); dramatic high-altitude pass roads leading toward Lachung and Lachen.',
    elevation: '1,400m - 4,500m',
    image: '/assets/images/mangan_region_real.png'
  }
];

const ATTRACTIONS = [
  {
    name: 'Khecheopalri Sacred Lake',
    type: 'Wish-Fulfilling Lake',
    location: 'Gyalshing District',
    image: '/assets/images/khecheopalri_ai.png',
    desc: 'Surrounded by dense temperate forests, leaves falling onto the water surface are said to be picked up immediately by sacred birds.'
  },
  {
    name: 'Tsomgo Alpine Lake',
    type: 'High-Altitude Glacial Water',
    location: 'Gangtok District (3,753m)',
    image: '/assets/images/rumtek_ai.png',
    desc: 'A revered glacial lake associated with ancient monastic prophecies and seasonal Buddhist divinations.'
  },
  {
    name: 'Rabdentse Palace Ruins',
    type: 'Second Royal Capital',
    location: 'Gyalshing District',
    image: '/assets/images/pemayangtse_ai.png',
    desc: 'Historic stone palace ruins overlooking the Kanchenjunga range, established by the second Chogyal of Sikkim.'
  }
];

export default function Home({ navigate, onSearchClick }) {
  const [activeDistrict, setActiveDistrict] = useState(null);

  const handleDistrictSelect = (dName) => {
    setActiveDistrict(dName);
    const targetEl = document.getElementById(dName.toLowerCase());
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="home-page page-transition">
      <section className="home-hero-blended">
        <div className="hero-bg-image" style={{ backgroundImage: `url('/assets/images/pemayangtse_ai.png')` }} />
        <div className="hero-gradient-overlay" />

        <motion.div
          className="hero-content-wrap text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title-light">Sikkim's Sacred Monastic Heritage</h1>
          <p className="hero-subtitle-light">
            Journey through centuries of Vajrayana Buddhist wisdom, serene high-altitude gompas, and preserved architectural sanctuaries across the Eastern Himalayas.
          </p>
        </motion.div>
      </section>

      <section className="home-editorial-map-section container">
        <div className="editorial-map-grid">
          <motion.div
            className="map-col-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="serif editorial-section-title">Sacred Map of Sikkim</h2>
            <p className="editorial-lead-para">
              Click any district on the blended map below to jump directly to its regional guide.
            </p>

            <SikkimMap
              activeDistrict={activeDistrict}
              setActiveDistrict={setActiveDistrict}
              onDistrictSelect={handleDistrictSelect}
            />
          </motion.div>

          <motion.div
            className="editorial-col-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="editorial-text-card">
              <span className="badge"><Landmark size={12} /> Origins & History</span>
              <h3 className="serif">The Dawn of Vajrayana in Sikkim</h3>
              <p>
                In the 17th century, three revered Tibetan lamas—Lhatsun Namkha Jigme, Nga-dag Sempa Chenpo, and Kathog Rigzin Chenpo—converged at Yuksom to consecrate Phuntsog Namgyal as the first Chogyal (Dharma King) of Sikkim.
              </p>
              <p>
                This historic union established Sikkim as <em>Beyul Demazong</em>—the hidden valley of rice prophesied by Guru Rinpoche in the 8th century. Over subsequent centuries, grand gompas were built on high mountain ridges to guard spiritual purity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-cinematic-block container">
        <motion.div
          className="cinematic-editorial-card flex-row"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cinematic-card-text">

            <h2 className="serif">Repositories of Sacred Wisdom</h2>
            <p>
              Beyond architectural marvels, Sikkimese monasteries serve as vital centers of learning, housing centuries-old hand-printed Kangyur and Tengyur scriptures, intricate thangka scrolls, and rare woodblock printing presses.
            </p>
            <p>
              Monks undergo rigorous years of meditative retreats, scriptural study, and traditional sacred music training to maintain the unbroken lineage of Nyingma and Kagyu Buddhist schools.
            </p>
          </div>
          <div className="cinematic-card-img-wrap">
            <img src="/assets/images/tasiding_ai.png" alt="Monastic scripture collection" className="cinematic-card-img" />
          </div>
        </motion.div>
      </section>

      <section className="home-cinematic-block container">
        <motion.div
          className="cinematic-editorial-card flex-row-reverse"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cinematic-card-text">

            <h2 className="serif">Festivals, Cham Dances & Beliefs</h2>
            <p>
              Annual monastic festivals transform peaceful gompas into vibrant spiritual theaters. Monks don elaborate brocade robes and hand-carved wooden masks to perform the sacred <strong>Cham dance</strong>, symbolizing the triumph of Dharma over negative energies.
            </p>
            <p>
              Key observances include <em>Losar</em> (Tibetan New Year), <em>Bumchu</em> (the sacred water blessing ceremony at Tashiding), and <em>Pang Lhabsol</em>, honoring Mount Kanchenjunga as Sikkim's guardian deity.
            </p>
          </div>
          <div className="cinematic-card-img-wrap">
            <img src="/assets/images/enchey_ai.png" alt="Cham dance ritual" className="cinematic-card-img" />
          </div>
        </motion.div>
      </section>

      <section className="home-regions-showcase container">
        <div className="text-center section-header-wrap">

          <h2 className="serif">Explore Sikkim by Region</h2>
          <p className="centered-desc">Discover the geography, spiritual influence, travel details, and sanctuaries located across Sikkim's 4 districts.</p>
        </div>

        <div className="regions-list">
          {REGION_GUIDES.map((reg, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <motion.div
                key={reg.id}
                id={reg.id}
                className={`regional-guide-card ${isReverse ? 'card-reverse' : ''}`}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="regional-card-img-col">
                  <div className="regional-img-frame">
                    <img src={reg.image} alt={reg.name} className="regional-card-photo" />
                    <span className="regional-elev-tag">Elev: {reg.elevation}</span>
                  </div>
                </div>

                <div className="regional-card-text-col">
                  <h3 className="serif regional-card-title">{reg.name}</h3>

                  <div className="regional-monasteries-box">
                    <span className="box-label">Monasteries Housed:</span>
                    <strong className="box-value">{reg.monasteriesText}</strong>
                  </div>

                  <p className="regional-influence">
                    <strong>Spiritual Heritage:</strong> {reg.influence}
                  </p>

                  <p className="regional-tourism">
                    <Navigation size={13} className="inline-icon" /> <strong>Tourism & Travel Info:</strong> {reg.tourism}
                  </p>

                  <div className="regional-action-row">
                    <button
                      className="btn-primary"
                      onClick={() => navigate('explore')}
                    >
                      Explore Region in Index <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="home-lamas-section container">
        <div className="text-center section-header-wrap">
          <span className="badge">Spiritual Pioneers</span>
          <h2 className="serif">Renowned Spiritual Masters of Sikkim</h2>
          <p className="centered-desc">Discover the historical lamas and patrons who shaped the Vajrayana lineage and sacred heritage of the region.</p>
        </div>

        <div className="lamas-grid">
          {RENOWNED_LAMAS.map((lama, idx) => (
            <motion.div
              key={lama.name}
              className="lama-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
            >
              <div className="lama-meta">
                <h3 className="serif lama-name">{lama.name}</h3>
                <span className="lama-lifespan">{lama.lifespan}</span>
              </div>
              <p className="lama-desc">{lama.desc}</p>
              <div className="lama-quote-box">
                <p>"{lama.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-attractions-section container">
        <div className="text-center section-header-wrap">
          <span className="badge">Surrounding Sacred Realm</span>
          <h2 className="serif">Nearby Sacred Attractions</h2>
          <p className="centered-desc">Explore sacred alpine lakes and royal stone ruins surrounding Sikkim's monastic sites.</p>
        </div>

        <div className="attractions-grid">
          {ATTRACTIONS.map((att, idx) => (
            <motion.div
              key={att.name}
              className="attraction-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="attraction-img-frame">
                <img src={att.image} alt={att.name} className="attraction-photo" />
                <span className="attraction-type-badge">{att.type}</span>
              </div>
              <div className="attraction-body">
                <span className="attraction-loc"><MapPin size={12} /> {att.location}</span>
                <h3 className="serif attraction-title">{att.name}</h3>
                <p className="attraction-desc">{att.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const RENOWNED_LAMAS = [
  {
    name: "Lhatsun Namkha Jigme",
    lifespan: "1597 - 1650",
    desc: "The patron saint of Sikkim who pioneered the Nyingma lineage, opened the sacred mountain routes, and consecrated the first king at Yuksom.",
    quote: "The snowy peaks of Kanchenjunga are not merely earth and stone, but the physical manifestation of the deities guarding our sacred sanctuary."
  },
  {
    name: "Nga-dag Sempa Chenpo",
    lifespan: "1590 - 1660",
    desc: "One of the three historical patron lamas who established the Tashiding lineage and consecrated Sikkim's first royal palace at Rabdentse.",
    quote: "Let the waters of Bumchu be a sacred reminder that compassion flows infinitely to wash away the suffering of all sentient beings."
  },
  {
    name: "Chogyal Phuntsog Namgyal",
    lifespan: "1604 - 1670",
    desc: "The consecrated spiritual king and priest who unified Sikkim and established Buddhism as the foundation of the kingdom.",
    quote: "A ruler's crown is only heavy when he forgets that his true duty is to serve the spiritual and temporal well-being of his people."
  },
  {
    name: "Gyargal Rinpoche",
    lifespan: "1875 - 1938",
    desc: "A highly realized master of the Tashiding lineage who taught extensively on spiritual preservation and Vajrayana meditation.",
    quote: "Preserve the mind as a clean mirror, free from dust, reflecting the pure nature of the Dharma in every breath."
  },
  {
    name: "Trulshik Rinpoche",
    lifespan: "1923 - 2011",
    desc: "One of the most revered modern Nyingma masters who spent decades preservation-teaching the sacred rituals and prayers in Sikkim.",
    quote: "True pilgrimage is not in walking the mountain pathways, but in turning the gaze inward to tame the untamed mind."
  }
];

