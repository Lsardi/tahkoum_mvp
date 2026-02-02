'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw, Check, X, Eye } from 'lucide-react';
import Link from 'next/link';
import { useUserStore } from '@/stores/userStore';
import { getCardsForReview, calculateNextReview, qualityFromScore } from '@/lib/srs/algorithm';
import PhraseCard from '@/components/lesson/PhraseCard';

export default function ReviewPage() {
  const { srsCards, updateSRSCard, addXP } = useUserStore();
  const [mounted, setMounted] = useState(false);
  const [cards, setCards] = useState<typeof srsCards>([]);
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    setMounted(true);
    const due = getCardsForReview(srsCards);
    setCards(due.length > 0 ? due : srsCards.slice(0, 10)); // Show all if none due
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-slate-200 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-medium">Revision</h1>
          </div>
        </header>
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <div className="text-4xl mb-4">📭</div>
          <h2 className="text-xl font-bold mb-2">Aucune carte a reviser</h2>
          <p className="text-slate-400 mb-6">
            Complete des lecons pour ajouter des phrases a ta revision.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-medium transition inline-block"
          >
            Retour aux lecons
          </Link>
        </div>
      </div>
    );
  }

  const card = cards[current];

  function handleRate(quality: 0 | 1 | 2 | 3 | 4 | 5) {
    const updates = calculateNextReview(card, quality);
    updateSRSCard(card.id, updates);

    if (quality >= 3) {
      addXP(5);
      setResults((r) => ({ correct: r.correct + 1, total: r.total + 1 }));
    } else {
      setResults((r) => ({ ...r, total: r.total + 1 }));
    }

    if (current + 1 >= cards.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setRevealed(false);
    }
  }

  if (done) {
    return (
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-slate-200 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-medium">Revision terminee</h1>
          </div>
        </header>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center py-12 px-4"
        >
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">Session terminee !</h2>
          <p className="text-slate-400 mb-6">
            {results.correct} / {results.total} cartes maitrisees
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-medium transition inline-block"
          >
            Retour
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-slate-400 hover:text-slate-200 transition">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="font-medium">
                <RotateCcw className="w-4 h-4 inline mr-1.5 text-purple-400" />
                Revision
              </h1>
            </div>
            <span className="text-sm text-slate-500">
              {current + 1} / {cards.length}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            {/* Card front - french */}
            <div className="text-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
              <p className="text-sm text-slate-500 mb-2">
                Comment dit-on en {card.phrase.language === 'kabyle' ? 'kabyle' : 'darija'} :
              </p>
              <p className="text-xl font-medium">{card.phrase.french}</p>
            </div>

            {/* Reveal */}
            {!revealed ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setRevealed(true)}
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Voir la reponse
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <PhraseCard phrase={card.phrase} />

                {/* Rating buttons */}
                <div className="space-y-2">
                  <p className="text-sm text-slate-500 text-center">
                    Comment c&apos;etait ?
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleRate(1)}
                      className="py-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition text-sm font-medium"
                    >
                      <X className="w-4 h-4 mx-auto mb-1" />
                      Pas du tout
                    </button>
                    <button
                      onClick={() => handleRate(3)}
                      className="py-3 bg-amber-500/20 text-amber-400 rounded-xl hover:bg-amber-500/30 transition text-sm font-medium"
                    >
                      ~
                      <br />
                      Difficile
                    </button>
                    <button
                      onClick={() => handleRate(5)}
                      className="py-3 bg-green-500/20 text-green-400 rounded-xl hover:bg-green-500/30 transition text-sm font-medium"
                    >
                      <Check className="w-4 h-4 mx-auto mb-1" />
                      Facile
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
