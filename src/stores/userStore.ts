import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserStats, UserProgress, Badge, SRSCard } from '@/lib/types';

interface UserState {
  stats: UserStats;
  progress: UserProgress;
  badges: Badge[];
  srsCards: SRSCard[];

  // Actions
  addXP: (amount: number) => void;
  updateStreak: () => void;
  completeLesson: (lessonId: string, score: number) => void;
  setCurrentPhase: (phase: UserProgress['currentPhase']) => void;
  setCurrentLesson: (moduleId: string, lessonId: string) => void;
  addSRSCard: (card: SRSCard) => void;
  updateSRSCard: (cardId: string, updates: Partial<SRSCard>) => void;
  unlockBadge: (badgeId: string) => void;
  incrementExercises: (correct: boolean) => void;
}

const INITIAL_STATS: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: '',
  totalTimeMinutes: 0,
  exercisesCompleted: 0,
  accuracy: 100,
  phrasesLearned: 0,
};

const INITIAL_PROGRESS: UserProgress = {
  currentModule: 'basics',
  currentLesson: '',
  currentPhase: 'theory',
  completedLessons: [],
  lessonScores: {},
};

function calculateLevel(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      stats: INITIAL_STATS,
      progress: INITIAL_PROGRESS,
      badges: [],
      srsCards: [],

      addXP: (amount) =>
        set((state) => {
          const newXP = state.stats.xp + amount;
          return {
            stats: {
              ...state.stats,
              xp: newXP,
              level: calculateLevel(newXP),
            },
          };
        }),

      updateStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          const last = state.stats.lastActiveDate;

          let newStreak = state.stats.streak;
          if (last === yesterday) {
            newStreak += 1;
          } else if (last !== today) {
            newStreak = 1;
          }

          return {
            stats: {
              ...state.stats,
              streak: newStreak,
              lastActiveDate: today,
            },
          };
        }),

      completeLesson: (lessonId, score) =>
        set((state) => ({
          progress: {
            ...state.progress,
            completedLessons: [...new Set([...state.progress.completedLessons, lessonId])],
            lessonScores: { ...state.progress.lessonScores, [lessonId]: score },
            currentPhase: 'complete',
          },
        })),

      setCurrentPhase: (phase) =>
        set((state) => ({
          progress: { ...state.progress, currentPhase: phase },
        })),

      setCurrentLesson: (moduleId, lessonId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            currentModule: moduleId,
            currentLesson: lessonId,
            currentPhase: 'theory',
          },
        })),

      addSRSCard: (card) =>
        set((state) => ({
          srsCards: [...state.srsCards.filter((c) => c.id !== card.id), card],
        })),

      updateSRSCard: (cardId, updates) =>
        set((state) => ({
          srsCards: state.srsCards.map((c) =>
            c.id === cardId ? { ...c, ...updates } : c
          ),
        })),

      unlockBadge: (badgeId) =>
        set((state) => {
          if (state.badges.find((b) => b.id === badgeId && b.unlockedAt)) return state;
          return {
            badges: state.badges.map((b) =>
              b.id === badgeId ? { ...b, unlockedAt: new Date().toISOString() } : b
            ),
          };
        }),

      incrementExercises: (correct) =>
        set((state) => {
          const total = state.stats.exercisesCompleted + 1;
          const prevCorrect = Math.round(
            (state.stats.accuracy / 100) * state.stats.exercisesCompleted
          );
          const newCorrect = prevCorrect + (correct ? 1 : 0);
          return {
            stats: {
              ...state.stats,
              exercisesCompleted: total,
              accuracy: Math.round((newCorrect / total) * 100),
            },
          };
        }),
    }),
    {
      name: 'dzlearner-user',
    }
  )
);
