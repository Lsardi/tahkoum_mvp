import type { Module } from '@/lib/types';
import { salutationsLesson } from './lessons/salutations';

export const modules: Module[] = [
  {
    id: 'basics',
    name: 'Premiers Jours',
    icon: '🆘',
    description:
      'Les bases indispensables pour tes premiers jours en Algérie.',
    order: 1,
    lessons: [salutationsLesson],
  },
  {
    id: 'daily_life',
    name: 'Vie Quotidienne',
    icon: '🏪',
    description: 'Faire les courses, aller au café, se déplacer...',
    order: 2,
    lessons: [], // Coming soon
  },
  {
    id: 'admin',
    name: 'Démarches Administratives',
    icon: '📋',
    description: 'Mairie, documents, location, banque...',
    order: 3,
    lessons: [],
  },
  {
    id: 'work',
    name: 'Monde du Travail',
    icon: '💼',
    description: 'Entretiens, collègues, vocabulaire pro...',
    order: 4,
    lessons: [],
  },
  {
    id: 'social',
    name: 'Vie Sociale',
    icon: '👥',
    description: 'Amis, famille, fêtes, traditions...',
    order: 5,
    lessons: [],
  },
  {
    id: 'kabylie',
    name: 'Intégration en Kabylie',
    icon: '🏔️',
    description: 'La langue et la culture kabyle en profondeur.',
    order: 6,
    lessons: [],
  },
  {
    id: 'advanced',
    name: 'Parler Comme un Local',
    icon: '🇩🇿',
    description: 'Argot, contractions, humour, proverbes...',
    order: 7,
    lessons: [],
  },
];

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getLesson(moduleId: string, lessonId: string) {
  const mod = getModule(moduleId);
  return mod?.lessons.find((l) => l.id === lessonId);
}
