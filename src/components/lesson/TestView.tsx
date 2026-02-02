'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ChevronRight, Award, RotateCcw } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import ExerciseRenderer from '../exercise/ExerciseRenderer';
import ProgressBar from '../ui/ProgressBar';

interface TestViewProps {
  lesson: Lesson;
  onComplete: (score: number, passed: boolean) => void;
  onXP: (amount: number) => void;
}

export default function TestView({ lesson, onComplete, onXP }: TestViewProps) {
  const exercises = lesson.assessment.exercises;
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const progress = ((current + (answered ? 1 : 0)) / exercises.length) * 100;
  const exercise = exercises[current];
  const isLast = current === exercises.length - 1;

  const totalAnswered = current + (answered ? 1 : 0);
  const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
  const passed = percentage >= lesson.assessment.passingScore;

  function handleAnswer(correct: boolean, xp: number) {
    setAnswered(true);
    if (correct) {
      setScore((s) => s + 1);
      onXP(xp);
    }
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
      const finalPct = Math.round(((score + 0) / exercises.length) * 100);
      onComplete(finalPct, finalPct >= lesson.assessment.passingScore);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(false);
    }
  }

  function handleRetry() {
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }

  if (finished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
            passed ? 'bg-green-500/20' : 'bg-amber-500/20'
          }`}
        >
          <Award
            className={`w-12 h-12 ${
              passed ? 'text-green-400' : 'text-amber-400'
            }`}
          />
        </motion.div>

        <h2 className="text-2xl font-bold mb-2">
          {passed ? 'Bravo !' : 'Continue tes efforts !'}
        </h2>
        <p className="text-slate-400 mb-6">
          {passed
            ? `Tu as réussi avec ${percentage}% ! La leçon est terminée.`
            : `Tu as obtenu ${percentage}%. Il faut ${lesson.assessment.passingScore}% pour valider.`}
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="text-4xl font-bold text-slate-100">{percentage}%</div>
          <div className="text-sm text-slate-500 text-left">
            <div>{score} / {exercises.length} correct</div>
            <div>Minimum : {lesson.assessment.passingScore}%</div>
          </div>
        </div>

        {!passed && (
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition"
          >
            <RotateCcw className="w-4 h-4" />
            Réessayer
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-amber-400 text-sm mb-2">
          <ClipboardCheck className="w-4 h-4" />
          <span>Test - {lesson.title}</span>
        </div>
        <ProgressBar value={progress} color="bg-amber-500" />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>
            Question {current + 1} / {exercises.length}
          </span>
          <span>Minimum : {lesson.assessment.passingScore}%</span>
        </div>
      </div>

      {/* Exercise - no hints in test mode */}
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
            showHints={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
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
            className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-xl font-medium transition"
          >
            {isLast ? 'Voir les résultats' : 'Suivant'}
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
