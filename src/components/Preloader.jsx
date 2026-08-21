import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Unrolling historical parchment archives...",
    "Blessing the valleys of Mangan and Gyalshing...",
    "Tuning the resonance of ancient chants...",
    "Trimming prayer flags along the mountain ridges...",
    "Opening the Sacred Sanctuaries..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 4;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
    const idx = Math.min(Math.floor(progress / 20), quotes.length - 1);
    setQuoteIndex(idx);
  }, [progress, onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
    >
      <div className="preloader-content">
        <motion.div
          className="prayer-wheel-container"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="preloader-dharmachakra">
            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-saffron)" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="12" fill="none" stroke="var(--color-saffron)" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="6" fill="var(--color-saffron)" />
            
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x2 = 50 + 45 * Math.cos(angle);
              const y2 = 50 + 45 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-saffron)"
                  strokeWidth="1.5"
                />
              );
            })}
            
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const cx = 50 + 45 * Math.cos(angle);
              const cy = 50 + 45 * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="2.5"
                  fill="var(--color-parchment)"
                  stroke="var(--color-saffron)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </motion.div>

        <div className="loading-bar-wrapper">
          <div className="loading-bar-track">
            <motion.div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="loading-percentage font-sans">{progress}%</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            className="loading-quote serif-italic"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.8, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {quotes[quoteIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
