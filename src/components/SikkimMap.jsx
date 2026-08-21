import { useState } from 'react';
import { mapData } from '../data/mapPaths';

export default function SikkimMap({ activeDistrict, setActiveDistrict, onDistrictSelect }) {
  const handleDistrictClick = (dName) => {
    if (onDistrictSelect) {
      onDistrictSelect(dName);
    } else {
      const el = document.getElementById(dName.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const getDistrictColor = (dName) => {
    if (activeDistrict === dName) return 'var(--color-crimson)';
    return '#E0D4C3';
  };

  return (
    <div className="sikkim-map-blended-wrap">
      {activeDistrict && (
        <div className="blended-district-tag">
          <span>Active Region:</span>
          <strong>{activeDistrict.toUpperCase()}</strong>
        </div>
      )}
      <div className="sikkim-svg-container">
        <svg viewBox={mapData.viewBox} className="sikkim-blended-svg">
          <g className="map-context-group">
            {mapData.context.map((c) => (
              <path
                key={c.id}
                d={c.d}
                className={`context-path c-${c.id}`}
              />
            ))}
          </g>

          <g className="map-districts-group">
            {mapData.districts.map((d) => (
              <path
                key={d.id}
                d={d.d}
                className={`district-path ${activeDistrict === d.name ? 'highlighted' : ''}`}
                fill={getDistrictColor(d.name)}
                onMouseEnter={() => setActiveDistrict(d.name)}
                onMouseLeave={() => setActiveDistrict(null)}
                onClick={() => handleDistrictClick(d.name)}
              />
            ))}
          </g>

          {mapData.polylines && mapData.polylines.map((pl, idx) => (
            <polyline
              key={idx}
              points={pl.points}
              className={`map-polyline ${pl.class}`}
            />
          ))}

          <text x="50" y="320" className="map-country-label">NEPAL</text>
          <text x="550" y="360" className="map-country-label">BHUTAN</text>
          <text x="310" y="70" className="map-country-label">CHINA (TIBET)</text>
          <text x="310" y="745" className="map-country-label">WEST BENGAL</text>

          {mapData.districts.map((d) => {
            let lx = 0, ly = 0;
            if (d.name === 'Mangan') { lx = 320; ly = 240; }
            else if (d.name === 'Gangtok') { lx = 480; ly = 545; }
            else if (d.name === 'Pakyong') { lx = 490; ly = 635; }
            else if (d.name === 'Namchi') { lx = 300; ly = 680; }
            else if (d.name === 'Gyalshing') { lx = 120; ly = 510; }
            else if (d.name === 'Soreng') { lx = 120; ly = 670; }

            return (
              <text
                key={`label-${d.id}`}
                x={lx}
                y={ly}
                className={`map-district-label ${activeDistrict === d.name ? 'active' : ''}`}
                onClick={() => handleDistrictClick(d.name)}
              >
                {d.name.toUpperCase()}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
