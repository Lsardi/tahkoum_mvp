'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  RotateCcw,
  MessageCircle,
  ChevronRight,
  Lock,
  CheckCircle2,
  Settings,
  Library,
  ArrowLeftRight,
} from 'lucide-react';
import { useUserStore } from '@/stores/userStore';
import { modules } from '@/lib/data/modules';
import XPBar from '@/components/gamification/XPBar';
import Link from 'next/link';

export default function HomePage() {
  const { stats, progress } = useUserStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    useUserStore.getState().updateStreak();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-lg font-bold">
                <span className="text-green-400">DZ</span>Learner
              </h1>
              <p className="text-xs text-slate-500">
                Darija & Kabyle
              </p>
            </div>
            <Link
              href="/tutor"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Tuteur IA
            </Link>
          </div>
          <XPBar />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          <Link
            href="/review"
            className="flex flex-col items-center gap-1.5 p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition"
          >
            <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <RotateCcw className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-xs">Révision</div>
              <div className="text-[10px] text-slate-500">SRS</div>
            </div>
          </Link>
          <Link
            href="/tutor"
            className="flex flex-col items-center gap-1.5 p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-xs">Tuteur</div>
              <div className="text-[10px] text-slate-500">Karim IA</div>
            </div>
          </Link>
          <Link
            href="/lexique"
            className="flex flex-col items-center gap-1.5 p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500/50 transition"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Library className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-xs">Lexique</div>
              <div className="text-[10px] text-slate-500">Arabizi</div>
            </div>
          </Link>
          <Link
            href="/correspondance"
            className="flex flex-col items-center gap-1.5 p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <ArrowLeftRight className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-xs">Langues</div>
              <div className="text-[10px] text-slate-500">FR↔DZ↔KAB</div>
            </div>
          </Link>
        </div>

        {/* Modules */}
        <h2 className="text-lg font-bold mb-4">Parcours d&apos;apprentissage</h2>
        <div className="space-y-3">
          {modules.map((mod, idx) => {
            const hasLessons = mod.lessons.length > 0;
            const completedCount = mod.lessons.filter((l) =>
              progress.completedLessons.includes(l.id)
            ).length;
            const isLocked = !hasLessons;

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div
                  className={`p-4 rounded-xl border transition ${
                    isLocked
                      ? 'bg-slate-800/30 border-slate-800 opacity-60'
                      : 'bg-slate-800/50 border-slate-700 hover:border-green-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{mod.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{mod.name}</h3>
                        {isLocked && (
                          <Lock className="w-3.5 h-3.5 text-slate-600" />
                        )}
                        {completedCount === mod.lessons.length &&
                          mod.lessons.length > 0 && (
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          )}
                      </div>
                      <p className="text-sm text-slate-500">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  {/* Lesson list */}
                  {hasLessons && (
                    <div className="mt-3 space-y-2">
                      {mod.lessons.map((lesson) => {
                        const isComplete =
                          progress.completedLessons.includes(lesson.id);
                        return (
                          <Link
                            key={lesson.id}
                            href={`/learn/${mod.id}/${lesson.id}`}
                            className={`flex items-center justify-between p-3 rounded-lg transition ${
                              isComplete
                                ? 'bg-green-500/10 hover:bg-green-500/20'
                                : 'bg-slate-700/30 hover:bg-slate-700/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isComplete ? (
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                              ) : (
                                <BookOpen className="w-4 h-4 text-slate-400" />
                              )}
                              <span className="text-sm">{lesson.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500">
                                ~{lesson.estimatedMinutes} min
                              </span>
                              <ChevronRight className="w-4 h-4 text-slate-600" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {!hasLessons && (
                    <p className="text-xs text-slate-600 mt-2 ml-10">
                      Bientot disponible
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-8 p-4 bg-slate-800/30 rounded-xl border border-slate-800">
          <h3 className="text-sm font-medium text-slate-400 mb-3">
            Tes statistiques
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">
                {stats.phrasesLearned}
              </div>
              <div className="text-xs text-slate-500">Phrases</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {stats.exercisesCompleted}
              </div>
              <div className="text-xs text-slate-500">Exercices</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">
                {stats.accuracy}%
              </div>
              <div className="text-xs text-slate-500">Précision</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
