'use client';

import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Dumbbell, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { getLesson } from '@/lib/data/modules';
import { useUserStore } from '@/stores/userStore';
import TheoryView from '@/components/lesson/TheoryView';
import PracticeView from '@/components/lesson/PracticeView';
import TestView from '@/components/lesson/TestView';
import type { SRSCard } from '@/lib/types';

type Phase = 'theory' | 'practice' | 'test' | 'complete';

interface PageProps {
  params: Promise<{ moduleId: string; lessonId: string }>;
}

export default function LessonPage({ params }: PageProps) {
  const { moduleId, lessonId } = use(params);
  const lesson = getLesson(moduleId, lessonId);
  const { addXP, completeLesson, addSRSCard, setCurrentPhase, setCurrentLesson, progress } =
    useUserStore();

  const [phase, setPhase] = useState<Phase>('theory');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (lesson) {
      setCurrentLesson(moduleId, lessonId);
      // Resume from saved phase if lesson was in progress
      if (progress.currentLesson === lessonId && progress.currentPhase !== 'complete') {
        setPhase(progress.currentPhase);
      }
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Lecon introuvable</p>
          <Link href="/" className="text-green-400 hover:underline">
            Retour
          </Link>
        </div>
      </div>
    );
  }

  function goToPhase(p: Phase) {
    setPhase(p);
    setCurrentPhase(p);
  }

  function handleTestComplete(score: number, passed: boolean) {
    if (passed) {
      completeLesson(lesson!.id, score);
      addXP(50); // Bonus for completing lesson

      // Add review phrases as SRS cards
      for (const phrase of lesson!.reviewPhrases) {
        const card: SRSCard = {
          id: `srs-${phrase.id}`,
          phrase,
          easeFactor: 2.5,
          interval: 1,
          repetitions: 0,
          lastReview: new Date().toISOString(),
          nextReview: new Date(Date.now() + 86400000).toISOString(),
          lessonId: lesson!.id,
        };
        addSRSCard(card);
      }

      goToPhase('complete');
    }
  }

  const phases: { id: Phase; label: string; icon: React.ReactNode }[] = [
    { id: 'theory', label: 'Cours', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'practice', label: 'Pratique', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'test', label: 'Test', icon: <ClipboardCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href="/"
              className="text-slate-400 hover:text-slate-200 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-medium text-sm truncate">{lesson.title}</h1>
          </div>

          {/* Phase tabs */}
          <div className="flex gap-1">
            {phases.map((p, idx) => {
              const phaseOrder = ['theory', 'practice', 'test'];
              const currentIdx = phaseOrder.indexOf(phase);
              const thisIdx = phaseOrder.indexOf(p.id);
              const isActive = phase === p.id;
              const isDone = phase === 'complete' || thisIdx < currentIdx;

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    if (isDone || isActive) goToPhase(p.id);
                  }}
                  disabled={thisIdx > currentIdx && phase !== 'complete'}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs rounded-lg transition ${
                    isActive
                      ? 'bg-green-500/20 text-green-400'
                      : isDone
                      ? 'bg-slate-800 text-green-400/60'
                      : 'bg-slate-800/50 text-slate-600'
                  }`}
                >
                  {isDone && !isActive ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    p.icon
                  )}
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 pt-6">
        <AnimatePresence mode="wait">
          {phase === 'theory' && (
            <motion.div
              key="theory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TheoryView
                lesson={lesson}
                onComplete={() => goToPhase('practice')}
              />
            </motion.div>
          )}

          {phase === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PracticeView
                lesson={lesson}
                onComplete={() => goToPhase('test')}
                onXP={addXP}
              />
            </motion.div>
          )}

          {phase === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TestView
                lesson={lesson}
                onComplete={handleTestComplete}
                onXP={addXP}
              />
            </motion.div>
          )}

          {phase === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.3 }}
                className="text-6xl mb-6"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">Lecon terminee !</h2>
              <p className="text-slate-400 mb-8">
                Les phrases de cette lecon ont ete ajoutees a tes cartes de revision.
              </p>
              <div className="flex flex-col gap-3 items-center">
                <Link
                  href="/review"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition"
                >
                  Reviser maintenant
                </Link>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-slate-200 transition"
                >
                  Retour au menu
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
