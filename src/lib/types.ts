// Core types for the entire application

export interface MultiScriptPhrase {
  id: string;
  arabic: string;           // العربية الدارجة or ⵜⴰⵎⴰⵣⵉⵖⵜ
  latin: string;            // Translittération latine
  phonetic: string;         // Phonétique pour francophone
  french: string;           // Traduction française
  language: 'darija' | 'kabyle';
  audio?: string;           // URL fichier audio
  tags: string[];
}

export interface Concept {
  id: string;
  title: string;
  explanation: string;
  examples: MultiScriptPhrase[];
  culturalNote?: string;
  image?: string;
}

export interface Exercise {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'matching' | 'free_response' | 'dialogue' | 'pronunciation' | 'ordering' | 'translation';
  question: string;
  questionPhrase?: MultiScriptPhrase;
  options?: string[];
  correctAnswer: string | string[];
  acceptableAnswers?: string[];
  hint?: string;
  explanation?: string;
  difficulty: 1 | 2 | 3;
  xpReward: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  level: number;
  estimatedMinutes: number;

  theory: {
    introduction: string;
    concepts: Concept[];
    culturalContext?: string;
  };

  practice: {
    guidedExercises: Exercise[];
  };

  assessment: {
    exercises: Exercise[];
    passingScore: number;
  };

  reviewPhrases: MultiScriptPhrase[];
}

export interface Module {
  id: string;
  name: string;
  icon: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface SRSCard {
  id: string;
  phrase: MultiScriptPhrase;
  easeFactor: number;
  interval: number;
  repetitions: number;
  lastReview: string;
  nextReview: string;
  lessonId: string;
}

export interface UserProgress {
  currentModule: string;
  currentLesson: string;
  currentPhase: 'theory' | 'practice' | 'test' | 'complete';
  completedLessons: string[];
  lessonScores: Record<string, number>;
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  totalTimeMinutes: number;
  exercisesCompleted: number;
  accuracy: number;
  phrasesLearned: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  condition: string;
  unlockedAt?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
