import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, navigate, journeyCount, onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 30);

      if (currentY <= 50) {
        setIsHidden(false);
      } else if (currentY < lastY) {
        setIsHidden(false);
      } else if (currentY > lastY) {
        setIsHidden(true);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page) => {
    navigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNav('home')}>
          <img src="/sikkora_logo.png" alt="Sikkora Emblem" className="navbar-logo-img" />
          <span>SIKKORA</span>
        </div>

        <ul className="nav-links">
          <li className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNav('home')}>Home</li>
          <li className={currentPage === 'explore' ? 'active' : ''} onClick={() => handleNav('explore')}>Explore</li>
          <li className={currentPage === 'gallery' ? 'active' : ''} onClick={() => handleNav('gallery')}>Gallery</li>
          <li className={currentPage === 'archive' ? 'active' : ''} onClick={() => handleNav('archive')}>Archive</li>
          <li className={currentPage === 'journey' ? 'active' : ''} onClick={() => handleNav('journey')}>
            <span className="journey-nav-link">
              My Journey
              {journeyCount > 0 && <span className="journey-badge">{journeyCount}</span>}
            </span>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="nav-btn" onClick={onSearchClick} aria-label="Search">
            <Search size={20} />
          </button>

          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNav('home')}>Home</li>
            <li className={currentPage === 'explore' ? 'active' : ''} onClick={() => handleNav('explore')}>Explore</li>
            <li className={currentPage === 'gallery' ? 'active' : ''} onClick={() => handleNav('gallery')}>Gallery</li>
            <li className={currentPage === 'archive' ? 'active' : ''} onClick={() => handleNav('archive')}>Archive</li>
            <li className={currentPage === 'journey' ? 'active' : ''} onClick={() => handleNav('journey')}>
              <span className="journey-nav-link">
                My Journey
                {journeyCount > 0 && <span className="journey-badge">{journeyCount}</span>}
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
