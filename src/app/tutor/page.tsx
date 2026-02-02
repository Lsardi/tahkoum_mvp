'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Loader2, Wifi, WifiOff, Bot } from 'lucide-react';
import Link from 'next/link';
import { chatWithOllama, checkOllamaStatus } from '@/lib/ai/ollama';
import { TUTOR_SYSTEM_PROMPT } from '@/lib/ai/prompts';
import type { ChatMessage } from '@/lib/types';

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: `Salam ! Moi c'est Karim 👋

Bienvenue en Algérie ! Je suis la pour t'aider a apprendre le darija (arabe algerien) et le kabyle.

Dis-moi, qu'est-ce qui t'interesse ?
- Les bases pour survivre les premiers jours ?
- Une situation precise (marche, cafe, administration) ?
- La difference entre darija et kabyle ?
- Ou juste bavarder pour pratiquer ?

Allez, on commence ! Wach rak/raki ? (comment tu vas ?)`,
  timestamp: new Date().toISOString(),
};

export default function TutorPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [ollamaOnline, setOllamaOnline] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkOllamaStatus().then(setOllamaOnline);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const ollamaMessages = [
        { role: 'system' as const, content: TUTOR_SYSTEM_PROMPT },
        ...messages
          .filter((m) => m.id !== 'welcome')
          .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
        { role: 'user' as const, content: userMsg.content },
      ];

      const response = await chatWithOllama(ollamaMessages, {
        temperature: 0.7,
        maxTokens: 2048,
      });

      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `e-${Date.now()}`,
        role: 'assistant',
        content:
          'Desolee, je n\'arrive pas a me connecter a Ollama. Verifie que le serveur tourne (`ollama serve`) et qu\'un modele est installe (`ollama pull llama3.1:8b`).',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-slate-400 hover:text-slate-200 transition">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h1 className="font-medium text-sm">Karim - Tuteur IA</h1>
                  <p className="text-xs text-slate-500">Darija & Kabyle</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {ollamaOnline === null ? (
                <Loader2 className="w-4 h-4 text-slate-500 animate-spin" />
              ) : ollamaOnline ? (
                <Wifi className="w-4 h-4 text-green-400" />
              ) : (
                <WifiOff className="w-4 h-4 text-red-400" />
              )}
              <span className="text-xs text-slate-500">
                {ollamaOnline ? 'Ollama' : 'Hors ligne'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-800 text-slate-200'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {msg.content}
                </p>
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-slate-800 rounded-2xl px-4 py-3 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                <span className="text-sm text-slate-400">Karim reflechit...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input */}
      <div className="sticky bottom-0 bg-slate-950/80 backdrop-blur-lg border-t border-slate-800">
        <form
          onSubmit={handleSend}
          className="max-w-2xl mx-auto px-4 py-3 flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ecris ton message..."
            disabled={loading}
            className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-4 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 rounded-xl transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
