'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Loader2, MessageCircle } from 'lucide-react';
import type { Exercise } from '@/lib/types';

interface FreeResponseProps {
  exercise: Exercise;
  onAnswer: (correct: boolean, xp: number) => void;
}

interface AIFeedback {
  isCorrect: boolean;
  score: number;
  feedback: string;
  correction?: string;
}

export default function FreeResponse({
  exercise,
  onAnswer,
}: FreeResponseProps) {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<AIFeedback | null>(null);

  async function evaluateWithAI(userAnswer: string): Promise<AIFeedback> {
    const expected = Array.isArray(exercise.correctAnswer)
      ? exercise.correctAnswer
      : [exercise.correctAnswer];
    const acceptable = exercise.acceptableAnswers ?? [];
    const allExpected = [...expected, ...acceptable];

    // Quick exact check first
    const normalized = userAnswer.trim().toLowerCase();
    for (const ans of allExpected) {
      if (normalized === ans.trim().toLowerCase()) {
        return {
          isCorrect: true,
          score: 100,
          feedback: 'Parfait ! Exactement la bonne réponse.',
        };
      }
    }

    // Call Ollama via the API route for intelligent evaluation
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          temperature: 0.3,
          messages: [
            {
              role: 'system',
              content: `Tu évalues les réponses d'un francophone apprenant l'arabe algérien (darija) et le kabyle.

ÉVALUE avec bienveillance:
- La réponse est-elle correcte ou acceptable ?
- Y a-t-il des variantes régionales valides ?
- L'orthographe/translittération est-elle raisonnable ?
- Le sens global est-il correct même si la forme diffère ?

SOIS INDULGENT sur:
- Les variations de translittération (kh/5/x pour خ, 3 pour ع, 7 pour ح)
- Les voyelles courtes manquantes
- Les petites erreurs qui n'empêchent pas la compréhension
- L'ordre des mots si le sens est préservé

SOIS STRICT sur:
- Le sens global (la phrase doit vouloir dire la même chose)
- Les confusions entre expressions très différentes

RÉPONDS UNIQUEMENT en JSON (pas de texte avant/après):
{
  "isCorrect": true/false,
  "score": 0-100,
  "feedback": "explication en français, encourage l'utilisateur",
  "correction": "la forme correcte si nécessaire, sinon null"
}`,
            },
            {
              role: 'user',
              content: `Réponse de l'utilisateur: "${userAnswer}"
Réponse(s) attendue(s): "${allExpected.join('" ou "')}"
Contexte: ${exercise.question}
${exercise.explanation ? `Explication: ${exercise.explanation}` : ''}`,
            },
          ],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const content: string = data.content || '';
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return {
            isCorrect: Boolean(parsed.isCorrect),
            score: Number(parsed.score) || 0,
            feedback: String(parsed.feedback || 'Réponse évaluée.'),
            correction: parsed.correction || undefined,
          };
        }
      }
    } catch (err) {
      console.warn('AI evaluation failed, using fallback:', err);
    }

    // Fallback: keyword matching if AI is unavailable
    const matchCount = allExpected.filter((kw) =>
      normalized.includes(kw.toLowerCase())
    ).length;
    const correct = matchCount >= Math.ceil(allExpected.length / 2);

    return {
      isCorrect: correct,
      score: correct ? 70 : 20,
      feedback: correct
        ? 'Bonne direction ! (lance Ollama pour un feedback détaillé)'
        : `La réponse attendue était : ${expected[0]} (lance Ollama pour un feedback détaillé)`,
      correction: correct ? undefined : (expected[0] as string),
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (answered || !input.trim()) return;

    setLoading(true);
    const feedback = await evaluateWithAI(input);
    setAiFeedback(feedback);
    setAnswered(true);
    setLoading(false);
    onAnswer(
      feedback.isCorrect,
      feedback.isCorrect
        ? exercise.xpReward
        : Math.floor(exercise.xpReward / 4)
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-slate-100">
        {exercise.question}
      </h3>

      {exercise.hint && (
        <p className="text-sm text-slate-500 italic">{exercise.hint}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={answered}
          rows={3}
          placeholder="Écris ta réponse ici..."
          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-500 transition resize-none disabled:opacity-50"
        />
        {!answered && (
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-full py-3 bg-green-600 hover:bg-green-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-xl font-medium transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                L&apos;IA analyse ta réponse...
              </>
            ) : (
              'Valider'
            )}
          </button>
        )}
      </form>

      {answered && aiFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            aiFeedback.isCorrect
              ? 'bg-green-500/10 border border-green-500/20'
              : 'bg-amber-500/10 border border-amber-500/20'
          }`}
        >
          <div className="flex items-start gap-3">
            {aiFeedback.isCorrect ? (
              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            )}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-xs text-slate-500">Feedback IA</span>
                <span className="text-xs text-slate-600">
                  ({aiFeedback.score}/100)
                </span>
              </div>

              <p
                className={`font-medium ${
                  aiFeedback.isCorrect ? 'text-green-400' : 'text-amber-400'
                }`}
              >
                {aiFeedback.feedback}
              </p>

              {aiFeedback.correction && (
                <p className="text-sm text-slate-400 mt-1">
                  Forme correcte :{' '}
                  <span className="text-slate-200">
                    {aiFeedback.correction}
                  </span>
                </p>
              )}

              {exercise.explanation && (
                <p className="text-xs text-slate-500 mt-2 border-t border-slate-700 pt-2">
                  {exercise.explanation}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
