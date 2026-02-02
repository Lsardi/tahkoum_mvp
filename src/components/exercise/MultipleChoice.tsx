'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import type { Exercise } from '@/lib/types';

interface MultipleChoiceProps {
  exercise: Exercise;
  onAnswer: (correct: boolean, xp: number) => void;
  showHints?: boolean;
}

export default function MultipleChoice({
  exercise,
  onAnswer,
  showHints = false,
}: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCorrect = selected === exercise.correctAnswer;

  function handleSelect(option: string) {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    onAnswer(option === exercise.correctAnswer, exercise.xpReward);
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

      <div className="grid gap-3">
        {exercise.options?.map((option, idx) => {
          const isThis = selected === option;
          const isRight = option === exercise.correctAnswer;

          let bgColor = 'bg-slate-800 hover:bg-slate-700 border-slate-600';
          if (answered) {
            if (isRight) bgColor = 'bg-green-500/20 border-green-500';
            else if (isThis && !isRight)
              bgColor = 'bg-red-500/20 border-red-500';
            else bgColor = 'bg-slate-800/50 border-slate-700';
          }

          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleSelect(option)}
              disabled={answered}
              className={`w-full text-left p-4 rounded-xl border transition-all ${bgColor} ${
                answered ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-200">{option}</span>
                {answered && isRight && (
                  <Check className="w-5 h-5 text-green-400" />
                )}
                {answered && isThis && !isRight && (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {answered && exercise.explanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            isCorrect
              ? 'bg-green-500/10 border border-green-500/20'
              : 'bg-red-500/10 border border-red-500/20'
          }`}
        >
          <p className="text-sm text-slate-300">{exercise.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}
