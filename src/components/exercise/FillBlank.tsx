'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import type { Exercise } from '@/lib/types';

interface FillBlankProps {
  exercise: Exercise;
  onAnswer: (correct: boolean, xp: number) => void;
  showHints?: boolean;
}

export default function FillBlank({
  exercise,
  onAnswer,
  showHints = false,
}: FillBlankProps) {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const allAcceptable = [
    exercise.correctAnswer,
    ...(exercise.acceptableAnswers ?? []),
  ].flat();

  const isCorrect = allAcceptable.some(
    (a) => input.trim().toLowerCase() === a.toLowerCase()
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (answered || !input.trim()) return;
    setAnswered(true);
    onAnswer(isCorrect, exercise.xpReward);
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-slate-100">
        {exercise.question}
      </h3>

      {showHints && exercise.hint && !answered && (
        <div>
          {showHint ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-blue-400 bg-blue-500/10 p-3 rounded-lg"
            >
              {exercise.hint}
            </motion.p>
          ) : (
            <button
              onClick={() => setShowHint(true)}
              className="text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Besoin d&apos;un indice ?
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={answered}
          placeholder="Ta réponse..."
          className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-500 transition disabled:opacity-50"
          autoFocus
        />
        {!answered && (
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-6 py-3 bg-green-600 hover:bg-green-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-xl font-medium transition"
          >
            Valider
          </button>
        )}
      </form>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl flex items-start gap-3 ${
            isCorrect
              ? 'bg-green-500/10 border border-green-500/20'
              : 'bg-red-500/10 border border-red-500/20'
          }`}
        >
          {isCorrect ? (
            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          ) : (
            <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          )}
          <div>
            {isCorrect ? (
              <p className="text-green-400 font-medium">Bravo !</p>
            ) : (
              <div>
                <p className="text-red-400 font-medium mb-1">
                  Pas tout à fait !
                </p>
                <p className="text-slate-300 text-sm">
                  La bonne réponse : <strong>{exercise.correctAnswer}</strong>
                </p>
              </div>
            )}
            {exercise.explanation && (
              <p className="text-sm text-slate-400 mt-2">
                {exercise.explanation}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
