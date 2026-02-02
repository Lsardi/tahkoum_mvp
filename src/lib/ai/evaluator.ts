import { chatWithOllama } from './ollama';
import { EXERCISE_EVALUATOR_PROMPT } from './prompts';

interface EvaluationResult {
  isCorrect: boolean;
  score: number;
  feedback: string;
  correction?: string;
}

export async function evaluateResponse(
  userAnswer: string,
  expectedAnswer: string | string[],
  context: string
): Promise<EvaluationResult> {
  // First try simple matching
  const expected = Array.isArray(expectedAnswer) ? expectedAnswer : [expectedAnswer];
  const normalized = userAnswer.trim().toLowerCase();

  for (const ans of expected) {
    if (normalized === ans.trim().toLowerCase()) {
      return {
        isCorrect: true,
        score: 100,
        feedback: 'Parfait ! Bravo !',
      };
    }
  }

  // Fuzzy match - allow small typos
  for (const ans of expected) {
    if (levenshtein(normalized, ans.trim().toLowerCase()) <= 2) {
      return {
        isCorrect: true,
        score: 85,
        feedback: 'Presque parfait ! Petite erreur de frappe.',
        correction: ans,
      };
    }
  }

  // Try AI evaluation for free-form answers
  try {
    const response = await chatWithOllama([
      { role: 'system', content: EXERCISE_EVALUATOR_PROMPT },
      {
        role: 'user',
        content: `Réponse utilisateur: "${userAnswer}"
Réponse(s) attendue(s): "${expected.join('" ou "')}"
Contexte: ${context}`,
      },
    ], { temperature: 0.3 });

    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch {
    // AI unavailable, fall back to simple wrong answer
  }

  return {
    isCorrect: false,
    score: 0,
    feedback: `La bonne réponse était : ${expected[0]}`,
    correction: expected[0],
  };
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  return dp[m][n];
}
