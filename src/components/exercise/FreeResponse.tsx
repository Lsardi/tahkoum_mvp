'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Loader2 } from 'lucide-react';
import type { Exercise } from '@/lib/types';

interface FreeResponseProps {
  exercise: Exercise;
  onAnswer: (correct: boolean, xp: number) => void;
}

export default function FreeResponse({
  exercise,
  onAnswer,
}: FreeResponseProps) {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (answered || !input.trim()) return;

    setLoading(true);

    // Simple keyword matching for free response
    const keywords = exercise.acceptableAnswers ?? [];
    const inputLower = input.toLowerCase();
    const matchCount = keywords.filter((kw) =>
      inputLower.includes(kw.toLowerCase())
    ).length;
    const correct = matchCount >= Math.ceil(keywords.length / 2);

    setIsCorrect(correct);
    setAnswered(true);
    setLoading(false);
    onAnswer(correct, correct ? exercise.xpReward : Math.floor(exercise.xpReward / 3));
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-slate-100">
        {exercise.question}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={answered}
          rows={4}
          placeholder="Écris ta réponse ici..."
          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-500 transition resize-none disabled:opacity-50"
        />
        {!answered && (
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-full py-3 bg-green-600 hover:bg-green-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-xl font-medium transition flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Valider
          </button>
        )}
      </form>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            isCorrect
              ? 'bg-green-500/10 border border-green-500/20'
              : 'bg-amber-500/10 border border-amber-500/20'
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              {isCorrect ? (
                <p className="text-green-400 font-medium">Bonne réponse !</p>
              ) : (
                <p className="text-amber-400 font-medium">
                  Pas mal, mais il manque des éléments.
                </p>
              )}
              <p className="text-sm text-slate-400 mt-2">
                Exemple de réponse attendue : {exercise.correctAnswer}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
