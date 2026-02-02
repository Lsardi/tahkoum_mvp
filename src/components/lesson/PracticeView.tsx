'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, ChevronRight, Trophy } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import ExerciseRenderer from '../exercise/ExerciseRenderer';
import ProgressBar from '../ui/ProgressBar';
import XPGain from '../gamification/XPGain';

interface PracticeViewProps {
  lesson: Lesson;
  onComplete: () => void;
  onXP: (amount: number) => void;
}

export default function PracticeView({
  lesson,
  onComplete,
  onXP,
}: PracticeViewProps) {
  const exercises = lesson.practice.guidedExercises;
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [xpGain, setXpGain] = useState(0);
  const [showXP, setShowXP] = useState(false);

  const progress = ((current + (answered ? 1 : 0)) / exercises.length) * 100;
  const exercise = exercises[current];
  const isLast = current === exercises.length - 1;

  function handleAnswer(correct: boolean, xp: number) {
    setAnswered(true);
    if (correct) {
      setScore((s) => s + 1);
      setXpGain(xp);
      setShowXP(true);
      onXP(xp);
      setTimeout(() => setShowXP(false), 1500);
    }
  }

  function handleNext() {
    if (isLast) {
      onComplete();
    } else {
      setCurrent((c) => c + 1);
      setAnswered(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
          <Dumbbell className="w-4 h-4" />
          <span>Pratique guidée - {lesson.title}</span>
        </div>
        <ProgressBar value={progress} color="bg-purple-500" />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>
            Exercice {current + 1} / {exercises.length}
          </span>
          <span>
            {score} / {current + (answered ? 1 : 0)} correct
          </span>
        </div>
      </div>

      {/* Exercise */}
      <div className="relative">
        <XPGain amount={xpGain} show={showXP} />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <ExerciseRenderer
              exercise={exercise}
              onAnswer={handleAnswer}
              showHints={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next button */}
      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
              isLast
                ? 'bg-green-600 hover:bg-green-500'
                : 'bg-purple-600 hover:bg-purple-500'
            }`}
          >
            {isLast ? (
              <>
                Passer au test
                <Trophy className="w-4 h-4" />
              </>
            ) : (
              <>
                Suivant
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
