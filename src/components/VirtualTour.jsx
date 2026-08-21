import { useState, useRef, useEffect } from 'react';
import { Info, X, Compass, ArrowLeft, ArrowRight, RefreshCw, Sparkles, Footprints, Maximize2, LogOut, Volume2, VolumeX, Play } from 'lucide-react';

export default function VirtualTour({ tourData, monasteryName }) {
  const nodes = tourData.nodes || [
    {
      id: 'entrance',
      title: '01. Main Gate & Approach',
      category: 'Exterior Approach',
      image: tourData.image || '/assets/images/rumtek_node_entrance.png',
      description: 'The monumental stone gateway adorned with traditional Tibetan roof carvings and colorful prayer flags.',
      portalArrows: [
        { targetNode: 'courtyard', label: 'Walk into Monastery Courtyard ➔', x: 75, y: 55 }
      ],
      hotspots: [
        { id: 'archway', name: 'Carved Gateway Arch', x: 45, y: 35, description: 'Traditional timber-carved gateway painted with eight auspicious symbols of Buddhism.' }
      ]
    }
  ];

  const [currentNodeId, setCurrentNodeId] = useState(nodes[0]?.id || 'entrance');
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const currentNode = nodes.find(n => n.id === currentNodeId) || nodes[0];
  const modalRef = useRef(null);
  const viewerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleStartTour = () => {
    setIsFullscreen(true);
    if (modalRef.current?.requestFullscreen) {
      modalRef.current.requestFullscreen().catch(() => {});
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  const handleLeaveTour = () => {
    setIsFullscreen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleMouseDown = (e) => {
    if (!viewerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - viewerRef.current.offsetLeft;
    scrollLeft.current = viewerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !viewerRef.current) return;
    e.preventDefault();
    const x = e.pageX - viewerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2.2;
    viewerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    if (!viewerRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - viewerRef.current.offsetLeft;
    scrollLeft.current = viewerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !viewerRef.current) return;
    const x = e.touches[0].pageX - viewerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2.2;
    viewerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handlePan = (direction) => {
    if (viewerRef.current) {
      viewerRef.current.scrollBy({
        left: direction === 'left' ? -450 : 450,
        behavior: 'smooth'
      });
    }
  };

  const handleResetPan = () => {
    if (viewerRef.current) {
      viewerRef.current.scrollTo({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const handleSwitchNode = (nodeId) => {
    setCurrentNodeId(nodeId);
    handleResetPan();
  };

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div className="virtual-tour-container" ref={modalRef}>
      {!isFullscreen ? (
        <div className="vt-launch-card">
          <div className="vt-launch-media">
            <img src={currentNode.image} alt={`${monasteryName} Virtual Tour`} className="vt-launch-img" />
            <div className="vt-launch-overlay">
              <span className="badge-gold"><Sparkles size={12} /> Interactive 360° Walkthrough Engine</span>
              <h2 className="serif">Start Virtual Tour of {monasteryName}</h2>
              <p>Experience a full-screen 360° immersive walk-through across 5 sacred locations: Main Entrance, Courtyard, Central Shrine, Golden Stupa Chamber, and Valley Overlook.</p>

              <div className="vt-launch-locations-list">
                {nodes.map((n) => (
                  <span key={n.id} className="location-chip">
                    <Footprints size={12} /> {n.title}
                  </span>
                ))}
              </div>

              <div className="vt-launch-actions">
                <button className="btn-primary vt-start-btn" onClick={handleStartTour}>
                  <Play size={18} /> Start Virtual Tour <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="vt-fullscreen-modal">
          <div className="vt-fullscreen-header">
            <div className="vt-fs-title">
              <span className="badge-small">{currentNode.category}</span>
              <h3>{monasteryName} • {currentNode.title}</h3>
            </div>

            <div className="vt-fs-tabs">
              {nodes.map((n) => (
                <button
                  key={n.id}
                  className={`vt-fs-tab ${n.id === currentNodeId ? 'active' : ''}`}
                  onClick={() => handleSwitchNode(n.id)}
                >
                  {n.title}
                </button>
              ))}
            </div>

            <div className="vt-fs-actions">
              <button className="vt-fs-audio-btn" onClick={toggleAudio}>
                {isAudioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span>{isAudioPlaying ? 'Chanting Sound On' : 'Chanting Sound Off'}</span>
              </button>

              <button className="vt-leave-btn" onClick={handleLeaveTour}>
                <LogOut size={16} /> Leave Tour
              </button>
            </div>
          </div>

          <div
            ref={viewerRef}
            className="vt-fullscreen-viewer hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUpOrLeave}
          >
            <div className="vt-fullscreen-wrapper">
              <img src={currentNode.image} alt={`${monasteryName} - ${currentNode.title}`} className="vt-fs-panorama-img" draggable="false" />

              {currentNode.portalArrows && currentNode.portalArrows.map((arrow, i) => (
                <button
                  key={i}
                  className="vt-portal-arrow-btn fs-arrow"
                  style={{ left: `${arrow.x}%`, top: `${arrow.y}%` }}
                  onClick={() => handleSwitchNode(arrow.targetNode)}
                >
                  <Footprints size={14} /> {arrow.label}
                </button>
              ))}

              {currentNode.hotspots && currentNode.hotspots.map((spot) => (
                <button
                  key={spot.id}
                  className="vt-hotspot-pin fs-pin"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onClick={() => setActiveHotspot(spot)}
                >
                  <span className="vt-pulse"></span>
                  <Info size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="vt-fullscreen-footer">
            <div className="vt-fs-desc">
              <p>{currentNode.description}</p>
            </div>

            <div className="vt-fs-controls">
              <button className="vt-pan-btn" onClick={() => handlePan('left')}>
                <ArrowLeft size={16} /> Pan Left
              </button>
              <button className="vt-pan-btn" onClick={handleResetPan}>
                <RefreshCw size={14} /> Center
              </button>
              <button className="vt-pan-btn" onClick={() => handlePan('right')}>
                Pan Right <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeHotspot && (
        <div className="vt-modal-overlay" onClick={() => setActiveHotspot(null)}>
          <div className="vt-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="vt-modal-close" onClick={() => setActiveHotspot(null)}>
              <X size={20} />
            </button>
            <img src={activeHotspot.detailImage || currentNode.image} alt={activeHotspot.name} className="vt-modal-img" />
            <div className="vt-modal-content">
              <h3 className="serif">{activeHotspot.name}</h3>
              <p>{activeHotspot.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
