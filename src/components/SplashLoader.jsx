import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './SplashLoader.css';

export default function SplashLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show on first session visit
    const hasSeenSplash = sessionStorage.getItem('orjwan_splash_seen');
    if (hasSeenSplash) {
      setVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('orjwan_splash_seen', 'true');
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="splash-content">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="splash-logo-wrap"
            >
              <img
                src="/logo.png"
                alt="ORJWAN CONTRACTING"
                className="splash-logo"
              />
            </motion.div>

            {/* Drawing thin gold line */}
            <motion.div
              className="splash-gold-line"
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
            />

            <motion.div
              className="splash-text-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="splash-company-name">ORJWAN CONTRACTING</div>
              <div className="splash-cr">CR No. 2053123342 • Dammam, Saudi Arabia</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
