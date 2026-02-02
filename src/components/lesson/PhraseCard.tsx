'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, Eye, EyeOff } from 'lucide-react';
import type { MultiScriptPhrase } from '@/lib/types';
import { pronouncePhrase, isSpeechSupported } from '@/lib/audio';

interface PhraseCardProps {
  phrase: MultiScriptPhrase;
  showAll?: boolean;
  compact?: boolean;
}

export default function PhraseCard({
  phrase,
  showAll = true,
  compact = false,
}: PhraseCardProps) {
  const [revealed, setRevealed] = useState(showAll);
  const [hasAudio, setHasAudio] = useState(false);
  const [playing, setPlaying] = useState(false);

  const isKabyle = phrase.language === 'kabyle';

  useEffect(() => {
    setHasAudio(isSpeechSupported());
  }, []);

  function handleSpeak() {
    setPlaying(true);
    pronouncePhrase(phrase);
    setTimeout(() => setPlaying(false), 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border border-slate-700 overflow-hidden ${
        compact ? 'p-3' : 'p-4'
      } bg-slate-800/50`}
    >
      {/* Language badge + controls */}
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            isKabyle
              ? 'bg-blue-500/20 text-blue-400'
              : 'bg-emerald-500/20 text-emerald-400'
          }`}
        >
          {isKabyle ? 'Kabyle' : 'Darija'}
        </span>
        <div className="flex items-center gap-2">
          {hasAudio && (
            <button
              onClick={handleSpeak}
              className={`transition ${
                playing
                  ? 'text-purple-400 animate-pulse'
                  : 'text-slate-400 hover:text-purple-400'
              }`}
              title="Écouter la prononciation"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
          {!showAll && (
            <button
              onClick={() => setRevealed(!revealed)}
              className="text-slate-400 hover:text-slate-200 transition"
            >
              {revealed ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Arabic/Tifinagh script */}
      <div
        className={`text-2xl mb-2 ${
          isKabyle ? 'tifinagh-text' : 'arabic-text'
        }`}
      >
        {phrase.arabic}
      </div>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-1"
        >
          {/* Latin transliteration */}
          <div className="text-lg font-medium text-slate-200">
            {phrase.latin}
          </div>

          {/* Phonetic */}
          <div className="text-sm text-purple-400 font-mono">
            /{phrase.phonetic}/
          </div>

          {/* French */}
          <div className="text-sm text-slate-400">{phrase.french}</div>
        </motion.div>
      )}
    </motion.div>
  );
}
