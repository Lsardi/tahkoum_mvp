import type { SRSCard } from '@/lib/types';

/**
 * SM-2 Spaced Repetition Algorithm
 * quality: 0 = total blackout, 5 = perfect recall
 */
export function calculateNextReview(
  card: SRSCard,
  quality: 0 | 1 | 2 | 3 | 4 | 5
): Partial<SRSCard> {
  let { easeFactor, interval, repetitions } = card;

  if (quality < 3) {
    // Failed - reset
    repetitions = 0;
    interval = 1;
  } else {
    // Success
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const now = new Date();
  const nextReview = new Date(now.getTime() + interval * 86400000);

  return {
    easeFactor,
    interval,
    repetitions,
    lastReview: now.toISOString(),
    nextReview: nextReview.toISOString(),
  };
}

export function getCardsForReview(cards: SRSCard[]): SRSCard[] {
  const now = new Date().toISOString();
  return cards
    .filter((card) => card.nextReview <= now)
    .sort((a, b) => a.nextReview.localeCompare(b.nextReview));
}

export function qualityFromScore(score: number): 0 | 1 | 2 | 3 | 4 | 5 {
  if (score >= 95) return 5;
  if (score >= 80) return 4;
  if (score >= 60) return 3;
  if (score >= 40) return 2;
  if (score >= 20) return 1;
  return 0;
}
