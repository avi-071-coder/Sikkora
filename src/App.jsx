import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import Preloader from './components/Preloader';
import SacredGuide from './components/SacredGuide';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MonasteryDetail from './pages/MonasteryDetail';
import Gallery from './pages/Gallery';
import Archive from './pages/Archive';
import MyJourney from './pages/MyJourney';
import PageTransitionOverlay from './components/PageTransitionOverlay';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [journeyIds, setJourneyIds] = useState(() => {
    const saved = localStorage.getItem('sikkora_journey');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('sikkora_journey', JSON.stringify(journeyIds));
  }, [journeyIds]);

  const navigate = (page, params = {}) => {
    if (page === currentPage && JSON.stringify(params) === JSON.stringify(pageParams)) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      setPageParams(params);
      window.scrollTo(0, 0);
    }, 2200);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 5800);
  };

  const toggleJourney = (id) => {
    setJourneyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={navigate} onSearchClick={() => setIsSearchOpen(true)} />;
      case 'explore':
        return (
          <Explore
            navigate={navigate}
            journeyIds={journeyIds}
            toggleJourney={toggleJourney}
          />
        );
      case 'detail':
        return (
          <MonasteryDetail
            params={pageParams}
            navigate={navigate}
            journeyIds={journeyIds}
            toggleJourney={toggleJourney}
          />
        );
      case 'gallery':
        return <Gallery />;
      case 'archive':
        return <Archive />;
      case 'journey':
        return (
          <MyJourney
            journeyIds={journeyIds}
            setJourneyIds={setJourneyIds}
            navigate={navigate}
          />
        );
      default:
        return <Home navigate={navigate} onSearchClick={() => setIsSearchOpen(true)} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="app-shell">
          <AnimatePresence>
            {isTransitioning && <PageTransitionOverlay key="active-cinematic-curtain" />}
          </AnimatePresence>

          <Navbar
            currentPage={currentPage}
            navigate={navigate}
            journeyCount={journeyIds.length}
            onSearchClick={() => setIsSearchOpen(true)}
          />

          <main className="main-content">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="page-wrapper-frame"
            >
              {renderPage()}
            </motion.div>
          </main>

          {currentPage !== 'gallery' && <Footer navigate={navigate} />}

          {isSearchOpen && (
            <SearchOverlay
              onClose={() => setIsSearchOpen(false)}
              navigate={navigate}
            />
          )}

          <SacredGuide />
        </div>
      )}
    </>
  );
}
