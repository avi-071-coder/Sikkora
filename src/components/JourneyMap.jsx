import { MONASTERIES } from '../data/dataset';

export default function JourneyMap({ journeyIds }) {
  const selectedMonasteries = journeyIds
    .map((id) => MONASTERIES.find((m) => m.id === id))
    .filter(Boolean);

  const mapWidth = 300;
  const mapHeight = 300;

  const points = selectedMonasteries.map((m) => ({
    x: (m.coordinates.x / 100) * mapWidth,
    y: (m.coordinates.y / 100) * mapHeight,
    name: m.name
  }));

  let pathD = '';
  if (points.length > 1) {
    pathD = `M ${points[0].x},${points[0].y} ` + points.slice(1).map((p) => `L ${p.x},${p.y}`).join(' ');
  }

  return (
    <div className="journey-map-container">
      <div className="journey-map-header">
        <h3 className="serif">Your Custom Route Map</h3>
        <p>Visualizing the path connecting your selected heritage sanctuaries in chronological order.</p>
      </div>

      <div className="journey-map-wrapper">
        <svg width={mapWidth} height={mapHeight} viewBox={`0 0 ${mapWidth} ${mapHeight}`} className="journey-svg">
          <rect width="100%" height="100%" fill="none" />
          
          <path
            d="M 75,15 L 225,15 L 285,135 L 195,165 L 165,135 L 112,142 Z M 75,120 L 112,142 L 105,210 L 60,232 L 30,217 L 15,180 Z M 60,232 L 105,210 L 112,247 L 90,285 L 52,270 Z M 112,142 L 165,135 L 187,195 L 150,240 L 112,247 Z M 165,135 L 195,165 L 240,157 L 217,217 L 187,195 Z M 187,195 L 217,217 L 195,277 L 150,240 Z"
            fill="#F3ECE0"
            stroke="#DCD4C6"
            strokeWidth="1.5"
          />

          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#8C2A27"
              strokeWidth="3"
              strokeDasharray="6 4"
              className="route-line"
            />
          )}

          {points.map((p, idx) => (
            <g key={idx}>
              <circle cx={p.x} cy={p.y} r="8" fill="#8C2A27" stroke="#FAF5EB" strokeWidth="2" />
              <circle cx={p.x} cy={p.y} r="3" fill="#FAF5EB" />
              <text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                className="journey-map-label"
              >
                {idx + 1}
              </text>
            </g>
          ))}
        </svg>

        {selectedMonasteries.length === 0 && (
          <div className="journey-map-empty-overlay">
            <p className="serif">Add places to your journey to plot the route map.</p>
          </div>
        )}
      </div>
    </div>
  );
}
