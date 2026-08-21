import { motion } from 'framer-motion';

export default function PageTransitionOverlay() {
  return (
    <motion.div
      className="page-cinematic-curtain"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3.8, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
    >
      <div className="curtain-center-crest text-center">
        <motion.img
          src="/sikkora_logo.png"
          alt="Sikkora Emblem"
          className="curtain-logo-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1.05, 1.08] }}
          transition={{ duration: 3.5, times: [0, 0.25, 0.8, 1], delay: 0.1 }}
        />

        <motion.h1
          className="serif curtain-title"
          initial={{ opacity: 0, scale: 0.95, letterSpacing: '6px' }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.95, 1, 1.03, 1.06],
            letterSpacing: ['6px', '10px', '12px', '14px']
          }}
          transition={{ duration: 3.5, times: [0, 0.25, 0.8, 1], delay: 0.2 }}
        >
          SIKKORA
        </motion.h1>

        <motion.div
          className="curtain-divider-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 3.4, times: [0, 0.3, 0.8, 1], delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
