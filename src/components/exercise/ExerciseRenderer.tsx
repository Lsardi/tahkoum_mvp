'use client';

import type { Exercise } from '@/lib/types';
import MultipleChoice from './MultipleChoice';
import FillBlank from './FillBlank';
import FreeResponse from './FreeResponse';

interface ExerciseRendererProps {
  exercise: Exercise;
  onAnswer: (correct: boolean, xp: number) => void;
  showHints?: boolean;
}

export default function ExerciseRenderer({
  exercise,
  onAnswer,
  showHints = false,
}: ExerciseRendererProps) {
  switch (exercise.type) {
    case 'multiple_choice':
      return (
        <MultipleChoice
          exercise={exercise}
          onAnswer={onAnswer}
          showHints={showHints}
        />
      );
    case 'fill_blank':
      return (
        <FillBlank
          exercise={exercise}
          onAnswer={onAnswer}
          showHints={showHints}
        />
      );
    case 'free_response':
      return <FreeResponse exercise={exercise} onAnswer={onAnswer} />;
    case 'translation':
      return (
        <FillBlank
          exercise={exercise}
          onAnswer={onAnswer}
          showHints={showHints}
        />
      );
    case 'matching':
      // Rendered as multiple choice for MVP
      return (
        <MultipleChoice
          exercise={{
            ...exercise,
            type: 'multiple_choice',
            question: exercise.question + '\n(Vérifie chaque paire)',
            options: exercise.options,
            correctAnswer: exercise.options?.[0] ?? '',
          }}
          onAnswer={onAnswer}
          showHints={showHints}
        />
      );
    default:
      return (
        <div className="text-slate-400 p-4 bg-slate-800 rounded-xl">
          Type d&apos;exercice non supporté : {exercise.type}
        </div>
      );
  }
}
