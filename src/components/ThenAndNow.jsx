import { useState } from 'react';

export default function ThenAndNow({ archiveItem }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="then-now-container">
      <div className="then-now-slider-wrapper">
        <div className="then-now-image-container then-image">
          <img src={archiveItem.image} alt="Then" draggable="false" />
          <div className="label-badge then-label">Then (Archival Sketch)</div>
        </div>

        <div
          className="then-now-image-container now-image"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={archiveItem.currentImage} alt="Now" draggable="false" />
          <div className="label-badge now-label">Now</div>
        </div>

        <div className="slider-bar" style={{ left: `${sliderPosition}%` }}>
          <div className="slider-handle"></div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider-input"
          aria-label="Drag to compare past and present"
        />
      </div>
      <div className="then-now-meta">
        <h3 className="serif">{archiveItem.title}</h3>
        <p>{archiveItem.description}</p>
        <span className="source-info">Source: {archiveItem.source} &bull; Date: {archiveItem.date}</span>
      </div>
    </div>
  );
}
