'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  color?: string;
  height?: number;
}

export default function ProgressBar({
  value,
  label,
  color = 'bg-green-500',
  height = 8,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-slate-400 mb-1">
          <span>{label}</span>
          <span>{Math.round(value)}%</span>
        </div>
      )}
      <div
        className="w-full bg-slate-700 rounded-full overflow-hidden"
        style={{ height }}
      >
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, value)}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
