import type { MultiScriptPhrase } from '@/lib/types';

let voices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    voices = synth.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    synth.onvoiceschanged = () => {
      voices = synth.getVoices();
      resolve(voices);
    };
    // Fallback timeout
    setTimeout(() => resolve(synth.getVoices()), 500);
  });
}

function findVoice(langPrefix: string): SpeechSynthesisVoice | undefined {
  return (
    voices.find((v) => v.lang.startsWith(langPrefix) && v.localService) ||
    voices.find((v) => v.lang.startsWith(langPrefix))
  );
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export async function pronouncePhrase(phrase: MultiScriptPhrase): Promise<void> {
  if (!isSpeechSupported()) return;

  const synth = window.speechSynthesis;
  synth.cancel(); // Stop any ongoing speech

  if (voices.length === 0) {
    await loadVoices();
  }

  const utterance = new SpeechSynthesisUtterance();

  if (phrase.language === 'darija') {
    // Try Arabic voice first with the Arabic text
    const arVoice = findVoice('ar');
    if (arVoice) {
      utterance.voice = arVoice;
      utterance.text = phrase.arabic;
      utterance.lang = arVoice.lang;
    } else {
      // Fallback: French voice reading the phonetic transcription
      const frVoice = findVoice('fr');
      if (frVoice) utterance.voice = frVoice;
      utterance.text = phrase.phonetic;
      utterance.lang = 'fr-FR';
    }
  } else {
    // Kabyle: use French voice with phonetic (no native Kabyle TTS exists)
    const frVoice = findVoice('fr');
    if (frVoice) utterance.voice = frVoice;
    utterance.text = phrase.phonetic;
    utterance.lang = 'fr-FR';
  }

  utterance.rate = 0.8; // Slower for learning
  utterance.pitch = 1.0;

  synth.speak(utterance);
}

export function stopSpeech(): void {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
}
