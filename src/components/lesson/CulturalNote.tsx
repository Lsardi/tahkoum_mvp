'use client';

import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface CulturalNoteProps {
  note: string;
}

export default function CulturalNote({ note }: CulturalNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 my-4"
    >
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <div className="text-amber-400 font-medium text-sm mb-1">
            Note culturelle
          </div>
          <div className="text-slate-300 text-sm leading-relaxed">
            {note}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
