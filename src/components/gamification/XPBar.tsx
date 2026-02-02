'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Flame } from 'lucide-react';
import { useUserStore } from '@/stores/userStore';

export default function XPBar() {
  const { stats } = useUserStore();
  const xpInLevel = stats.xp % 100;
  const xpNeeded = 100;

  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-slate-800/50 rounded-xl">
      {/* Level */}
      <div className="flex items-center gap-1.5">
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <Star className="w-4 h-4 text-green-400" />
        </div>
        <div className="text-sm">
          <div className="text-slate-400 text-xs">Niveau</div>
          <div className="font-bold text-green-400">{stats.level}</div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="flex-1">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>{stats.xp} XP</span>
          <span>{xpNeeded - xpInLevel} XP restants</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
            animate={{ width: `${(xpInLevel / xpNeeded) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-1.5">
        <Flame
          className={`w-5 h-5 ${
            stats.streak > 0 ? 'text-orange-400' : 'text-slate-600'
          }`}
        />
        <span
          className={`font-bold text-sm ${
            stats.streak > 0 ? 'text-orange-400' : 'text-slate-600'
          }`}
        >
          {stats.streak}
        </span>
      </div>
    </div>
  );
}
