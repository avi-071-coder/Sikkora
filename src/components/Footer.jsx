import { Compass, Camera, Archive as ArchiveIcon, Map } from 'lucide-react';

export default function Footer({ navigate }) {
  return (
    <footer className="global-footer">
      <div className="footer-flex-wrap container">
        <div className="footer-brand-left">
          <div className="footer-logo-wrap">
            <img src="/sikkora_logo.png" alt="Sikkora Emblem" className="footer-logo-img" />
            <h2 className="serif footer-logo">SIKKORA</h2>
          </div>
          <span className="footer-author">Made by Abhishek Jha</span>
          <p className="footer-tagline">A digital sanctuary preserving the monastic cartography and sacred heritage of Sikkim.</p>
        </div>

        <div className="footer-links-right">
          <div className="footer-nav-col">
            <h4 className="serif">Sanctuaries</h4>
            <ul>
              <li><button onClick={() => navigate('explore')}><Compass size={14} /> Explore</button></li>
              <li><button onClick={() => navigate('journey')}><Map size={14} /> Planner</button></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="serif">Preservation</h4>
            <ul>
              <li><button onClick={() => navigate('gallery')}><Camera size={14} /> Gallery</button></li>
              <li><button onClick={() => navigate('archive')}><ArchiveIcon size={14} /> Archives</button></li>
            </ul>
          </div>

          <div className="footer-nav-col etiquette-col">
            <h4 className="serif">Etiquette</h4>
            <p className="footer-manner-tip">Remove shoes, walk clockwise around shrines, and maintain silence inside inner chambers.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>&copy; {new Date().getFullYear()} Sikkora Digital Preservation</span>
        <span>Yuksom &bull; Gangtok &bull; Mangan &bull; Gyalshing</span>
      </div>
    </footer>
  );
}
