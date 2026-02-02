'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface XPGainProps {
  amount: number;
  show: boolean;
}

export default function XPGain({ amount, show }: XPGainProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{ opacity: 1, y: -30, scale: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 text-green-400 font-bold text-lg pointer-events-none"
        >
          +{amount} XP
        </motion.div>
      )}
    </AnimatePresence>
  );
}
