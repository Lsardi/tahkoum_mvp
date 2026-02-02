'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import PhraseCard from './PhraseCard';
import CulturalNote from './CulturalNote';
import ProgressBar from '../ui/ProgressBar';

interface TheoryViewProps {
  lesson: Lesson;
  onComplete: () => void;
}

export default function TheoryView({ lesson, onComplete }: TheoryViewProps) {
  const [step, setStep] = useState(0);
  const { theory } = lesson;

  // Steps: intro + each concept + cultural context (optional)
  const steps: { type: string; content: unknown }[] = [
    { type: 'intro', content: theory.introduction },
    ...theory.concepts.map((c) => ({ type: 'concept', content: c })),
  ];
  if (theory.culturalContext) {
    steps.push({ type: 'cultural', content: theory.culturalContext });
  }

  const progress = ((step + 1) / steps.length) * 100;
  const current = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Cours - {lesson.title}</span>
        </div>
        <ProgressBar value={progress} />
        <p className="text-xs text-slate-500 mt-1">
          {step + 1} / {steps.length}
        </p>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {current.type === 'intro' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100">
                {lesson.title}
              </h2>
              <div className="prose prose-invert prose-sm max-w-none">
                {(current.content as string).split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed">
                    {para.split('**').map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-slate-100">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                ))}
              </div>
            </div>
          )}

          {current.type === 'concept' && (() => {
            const concept = current.content as Lesson['theory']['concepts'][0];
            return (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-100">
                  {concept.title}
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {concept.explanation}
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                    Expressions
                  </h3>
                  {concept.examples.map((phrase) => (
                    <PhraseCard key={phrase.id} phrase={phrase} />
                  ))}
                </div>

                {concept.culturalNote && (
                  <CulturalNote note={concept.culturalNote} />
                )}
              </div>
            );
          })()}

          {current.type === 'cultural' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-100">
                Contexte culturel
              </h2>
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
                {(current.content as string).split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="text-slate-300 leading-relaxed mb-3 last:mb-0"
                  >
                    {para.split('**').map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-amber-400">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-200 disabled:opacity-30 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          Précédent
        </button>

        {isLast ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onComplete}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-medium transition"
          >
            Passer à la pratique
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            className="flex items-center gap-2 px-4 py-2 text-green-400 hover:text-green-300 transition"
          >
            Suivant
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
