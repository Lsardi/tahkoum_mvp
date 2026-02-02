'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Volume2,
  Filter,
  BookOpen,
  Hash,
} from 'lucide-react';
import Link from 'next/link';
import { modules } from '@/lib/data/modules';
import type { MultiScriptPhrase } from '@/lib/types';
import { pronouncePhrase, isSpeechSupported } from '@/lib/audio';

// Arabizi reference table
const ARABIZI_TABLE = [
  { num: '3', arabic: 'ع', name: 'Ayn', sound: 'Son guttural profond', examples: "3lach (pourquoi), 3andi (j'ai), 3id (fête)" },
  { num: '7', arabic: 'ح', name: 'Ha aspiré', sound: 'H aspiré fort (souffle)', examples: '7amdoulilah (grâce à Dieu), 7lib (lait)' },
  { num: '9', arabic: 'ق', name: 'Qaf', sound: 'K guttural profond', examples: '9ahwa (café), 9ri (lis), 9alb (cœur)' },
  { num: '5', arabic: 'خ', name: 'Kha', sound: '"ch" allemand / "j" espagnol', examples: '5obz (pain), 5edma (travail), 5lass (fini)' },
  { num: '2', arabic: 'ء', name: 'Hamza', sound: 'Coup de glotte', examples: '2ana (moi), 2akh (frère)' },
  { num: '8', arabic: 'ه', name: 'Ha léger', sound: 'H léger (souffle doux)', examples: '8ad (ce/cette), 8na (ici)' },
  { num: '6', arabic: 'ط', name: 'Ta emphatique', sound: 'T lourd, langue au palais', examples: '6bib (médecin), 6ayara (avion)' },
  { num: "3' / gh", arabic: 'غ', name: 'Ghayn', sound: 'R grasseyé parisien exagéré', examples: 'ghadwa (demain), ghali (cher)' },
];

// Collect all phrases from all lessons
function getAllPhrases(): { phrase: MultiScriptPhrase; moduleName: string; lessonTitle: string }[] {
  const all: { phrase: MultiScriptPhrase; moduleName: string; lessonTitle: string }[] = [];

  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      // Review phrases
      for (const p of lesson.reviewPhrases) {
        all.push({ phrase: p, moduleName: mod.name, lessonTitle: lesson.title });
      }
      // Concept examples
      for (const concept of lesson.theory.concepts) {
        for (const ex of concept.examples) {
          // Avoid duplicates by ID
          if (!all.find((a) => a.phrase.id === ex.id)) {
            all.push({ phrase: ex, moduleName: mod.name, lessonTitle: lesson.title });
          }
        }
      }
    }
  }

  return all;
}

type FilterLang = 'all' | 'darija' | 'kabyle';

export default function LexiquePage() {
  const [search, setSearch] = useState('');
  const [filterLang, setFilterLang] = useState<FilterLang>('all');
  const [showArabizi, setShowArabizi] = useState(true);
  const [hasAudio, setHasAudio] = useState(false);

  useEffect(() => {
    setHasAudio(isSpeechSupported());
  }, []);

  const allPhrases = useMemo(() => getAllPhrases(), []);

  const filtered = useMemo(() => {
    return allPhrases.filter(({ phrase }) => {
      // Language filter
      if (filterLang !== 'all' && phrase.language !== filterLang) return false;

      // Search
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          phrase.french.toLowerCase().includes(q) ||
          phrase.latin.toLowerCase().includes(q) ||
          phrase.arabic.includes(q) ||
          phrase.phonetic.toLowerCase().includes(q) ||
          phrase.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [allPhrases, search, filterLang]);

  return (
    <div className="min-h-screen pb-20">
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
            <div>
              <h1 className="font-bold text-lg">Lexique</h1>
              <p className="text-xs text-slate-500">
                {allPhrases.length} expressions — Arabizi, Darija, Kabyle
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Chercher en français, latin, arabe..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-500 transition"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowArabizi(!showArabizi)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                showArabizi
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Hash className="w-3.5 h-3.5" />
              Arabizi
            </button>
            {(['all', 'darija', 'kabyle'] as FilterLang[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setFilterLang(lang)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  filterLang === lang
                    ? lang === 'kabyle'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : lang === 'darija'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {lang === 'all' ? 'Tout' : lang === 'darija' ? 'Darija' : 'Kabyle'}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-4">
        {/* Arabizi Reference Table */}
        <AnimatePresence>
          {showArabizi && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4">
                <h2 className="font-bold text-amber-400 mb-3 flex items-center gap-2">
                  <Hash className="w-5 h-5" />
                  Tableau Arabizi — Chiffres = Lettres Arabes
                </h2>
                <p className="text-xs text-slate-400 mb-3">
                  Les Algériens utilisent ces chiffres pour écrire les sons arabes en alphabet latin (SMS, WhatsApp, réseaux sociaux).
                </p>
                <div className="grid gap-2">
                  {ARABIZI_TABLE.map((row) => (
                    <div
                      key={row.num}
                      className="flex items-start gap-3 p-2.5 bg-slate-800/60 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-amber-400">
                          {row.num}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xl">{row.arabic}</span>
                          <span className="text-sm font-medium text-slate-200">
                            {row.name}
                          </span>
                        </div>
                        <div className="text-xs text-purple-400 mb-0.5">
                          {row.sound}
                        </div>
                        <div className="text-xs text-slate-500">
                          {row.examples}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phrases list */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-bold text-sm text-slate-300">
            {search ? `${filtered.length} résultat${filtered.length !== 1 ? 's' : ''}` : `Toutes les expressions (${filtered.length})`}
          </h2>
        </div>

        <div className="space-y-2">
          {filtered.map(({ phrase, moduleName, lessonTitle }) => (
            <motion.div
              key={phrase.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  {/* Script + Language badge */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        phrase.language === 'kabyle'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {phrase.language === 'kabyle' ? 'Kabyle' : 'Darija'}
                    </span>
                    <span className="text-xs text-slate-600 truncate">
                      {moduleName} &rsaquo; {lessonTitle}
                    </span>
                  </div>

                  {/* Arabic */}
                  <div className={`text-lg mb-0.5 ${phrase.language === 'kabyle' ? 'tifinagh-text' : 'arabic-text'}`}>
                    {phrase.arabic}
                  </div>

                  {/* Latin */}
                  <div className="text-sm font-medium text-slate-200">
                    {phrase.latin}
                  </div>

                  {/* Phonetic */}
                  <div className="text-xs text-purple-400 font-mono">
                    /{phrase.phonetic}/
                  </div>

                  {/* French */}
                  <div className="text-sm text-slate-400 mt-0.5">
                    {phrase.french}
                  </div>

                  {/* Tags */}
                  {phrase.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {phrase.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearch(tag)}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-500 hover:text-slate-300 transition"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Audio button */}
                {hasAudio && (
                  <button
                    onClick={() => pronouncePhrase(phrase)}
                    className="flex-shrink-0 p-2 rounded-lg bg-slate-700/50 hover:bg-purple-500/20 text-slate-400 hover:text-purple-400 transition"
                    title="Écouter la prononciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-500">
              {search ? 'Aucune expression trouvée.' : 'Aucune expression disponible.'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
