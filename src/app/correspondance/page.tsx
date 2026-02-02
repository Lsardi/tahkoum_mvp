'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Volume2, ArrowLeftRight, Globe } from 'lucide-react';
import Link from 'next/link';
import { pronouncePhrase, isSpeechSupported } from '@/lib/audio';
import type { MultiScriptPhrase } from '@/lib/types';

// ===== CORRESPONDANCE DATABASE =====
// Grouped by theme: French → Darija → Kabyle

interface CorrespondanceEntry {
  id: string;
  french: string;
  darija: { text: string; arabic: string; arabizi: string };
  kabyle: { text: string; tifinagh: string };
  category: string;
}

const CORRESPONDANCES: CorrespondanceEntry[] = [
  // --- Salutations ---
  { id: 'c-bonjour', french: 'Bonjour', darija: { text: 'Salam / Salam aleykoum', arabic: 'سلام عليكم', arabizi: 'slam 3likoum' }, kabyle: { text: 'Azul', tifinagh: 'ⴰⵣⵓⵍ' }, category: 'Salutations' },
  { id: 'c-bonsoir', french: 'Bonsoir', darija: { text: 'Msa el khir', arabic: 'مسا الخير', arabizi: 'msa lkhir' }, kabyle: { text: 'Azul n tmeddit', tifinagh: 'ⴰⵣⵓⵍ ⵏ ⵜⵎⴻⴷⴷⵉⵜ' }, category: 'Salutations' },
  { id: 'c-cava', french: 'Comment ça va ?', darija: { text: 'Wach rak? (m) / Wach raki? (f)', arabic: 'واش راك؟', arabizi: 'wach rak?' }, kabyle: { text: 'Amek? / Amek telliḍ?', tifinagh: 'ⴰⵎⴻⴽ' }, category: 'Salutations' },
  { id: 'c-bien', french: 'Ça va bien', darija: { text: 'Labas, el hamdoulilah', arabic: 'لاباس الحمد لله', arabizi: 'labas l7amdoulilah' }, kabyle: { text: 'Labas, lhamdullah', tifinagh: 'ⵍⴰⴱⴰⵙ' }, category: 'Salutations' },
  { id: 'c-aurevoir', french: 'Au revoir', darija: { text: 'Bslama', arabic: 'بالسلامة', arabizi: 'bslama' }, kabyle: { text: 'Ar tufat / Ar timlillit', tifinagh: 'ⴰⵔ ⵜⵓⴼⴰⵜ' }, category: 'Salutations' },
  { id: 'c-merci', french: 'Merci', darija: { text: 'Sahit / Barak Allahu fik', arabic: 'صحيت / بارك الله فيك', arabizi: 'sa7it / barak allahu fik' }, kabyle: { text: 'Tanemmirt', tifinagh: 'ⵜⴰⵏⴻⵎⵎⵉⵔⵜ' }, category: 'Salutations' },
  { id: 'c-svp', french: "S'il vous plaît", darija: { text: 'Yaatik essa7a / Min fadlek', arabic: 'يعطيك الصحة / من فضلك', arabizi: 'ya3tik essa7a' }, kabyle: { text: 'Ttxil-k (m) / Ttxil-m (f)', tifinagh: 'ⵜⵜⵅⵉⵍ-ⴽ' }, category: 'Salutations' },

  // --- Pronoms ---
  { id: 'c-je', french: 'Je / Moi', darija: { text: 'Ana', arabic: 'أنا', arabizi: '2ana' }, kabyle: { text: 'Nekk', tifinagh: 'ⵏⴻⴽⴽ' }, category: 'Pronoms' },
  { id: 'c-tu-m', french: 'Tu (masculin)', darija: { text: 'Nta', arabic: 'نتا', arabizi: 'nta' }, kabyle: { text: 'Kečč', tifinagh: 'ⴽⴻⵛⵛ' }, category: 'Pronoms' },
  { id: 'c-tu-f', french: 'Tu (féminin)', darija: { text: 'Nti', arabic: 'نتي', arabizi: 'nti' }, kabyle: { text: 'Kemm', tifinagh: 'ⴽⴻⵎⵎ' }, category: 'Pronoms' },
  { id: 'c-il', french: 'Il', darija: { text: 'Houwa', arabic: 'هو', arabizi: '8owa' }, kabyle: { text: 'Netta', tifinagh: 'ⵏⴻⵜⵜⴰ' }, category: 'Pronoms' },
  { id: 'c-elle', french: 'Elle', darija: { text: 'Hiya', arabic: 'هي', arabizi: '8iya' }, kabyle: { text: 'Nettat', tifinagh: 'ⵏⴻⵜⵜⴰⵜ' }, category: 'Pronoms' },
  { id: 'c-nous', french: 'Nous', darija: { text: 'Hna', arabic: 'حنا', arabizi: '7na' }, kabyle: { text: 'Nekni', tifinagh: 'ⵏⴻⴽⵏⵉ' }, category: 'Pronoms' },
  { id: 'c-vous', french: 'Vous', darija: { text: 'Ntouma', arabic: 'نتوما', arabizi: 'ntouma' }, kabyle: { text: 'Kunwi (m) / Kunnemti (f)', tifinagh: 'ⴽⵓⵏⵡⵉ' }, category: 'Pronoms' },

  // --- Nourriture ---
  { id: 'c-pain', french: 'Pain', darija: { text: 'Khoubz', arabic: 'خبز', arabizi: '5obz' }, kabyle: { text: 'Aghrum', tifinagh: 'ⴰⵖⵔⵓⵎ' }, category: 'Nourriture' },
  { id: 'c-eau', french: 'Eau', darija: { text: 'Ma / El ma', arabic: 'الما', arabizi: 'lma' }, kabyle: { text: 'Aman', tifinagh: 'ⴰⵎⴰⵏ' }, category: 'Nourriture' },
  { id: 'c-lait', french: 'Lait', darija: { text: 'Hlib', arabic: 'حليب', arabizi: '7lib' }, kabyle: { text: 'Ayefki', tifinagh: 'ⴰⵢⴻⴼⴽⵉ' }, category: 'Nourriture' },
  { id: 'c-viande', french: 'Viande', darija: { text: 'Lhem', arabic: 'اللحم', arabizi: 'l7em' }, kabyle: { text: 'Aksum', tifinagh: 'ⴰⴽⵙⵓⵎ' }, category: 'Nourriture' },
  { id: 'c-poulet', french: 'Poulet', darija: { text: 'Djaj', arabic: 'دجاج', arabizi: 'djaj' }, kabyle: { text: 'Ayaziḍ', tifinagh: 'ⴰⵢⴰⵣⵉⴹ' }, category: 'Nourriture' },
  { id: 'c-cafe', french: 'Café', darija: { text: 'Qahwa', arabic: 'قهوة', arabizi: '9ahwa' }, kabyle: { text: 'Lqahwa', tifinagh: 'ⵍⵇⴰⵀⵡⴰ' }, category: 'Nourriture' },
  { id: 'c-the', french: 'Thé', darija: { text: 'Atay', arabic: 'أتاي', arabizi: 'atay' }, kabyle: { text: 'Latay', tifinagh: 'ⵍⴰⵜⴰⵢ' }, category: 'Nourriture' },
  { id: 'c-sucre', french: 'Sucre', darija: { text: 'Sokkor', arabic: 'سكر', arabizi: 'sokkor' }, kabyle: { text: 'Ssekwar', tifinagh: 'ⵙⵙⴻⴽⵡⴰⵔ' }, category: 'Nourriture' },
  { id: 'c-sel', french: 'Sel', darija: { text: 'Melh', arabic: 'ملح', arabizi: 'mel7' }, kabyle: { text: 'Tisent', tifinagh: 'ⵜⵉⵙⴻⵏⵜ' }, category: 'Nourriture' },
  { id: 'c-couscous', french: 'Couscous', darija: { text: 'Kosksi / Ta3am', arabic: 'كسكسي / طعام', arabizi: 'kosksi / 6a3am' }, kabyle: { text: 'Seksu', tifinagh: 'ⵙⴻⴽⵙⵓ' }, category: 'Nourriture' },
  { id: 'c-oeuf', french: 'Œuf', darija: { text: 'Baydha', arabic: 'بيضة', arabizi: 'bayda' }, kabyle: { text: 'Tamellalt', tifinagh: 'ⵜⴰⵎⴻⵍⵍⴰⵍⵜ' }, category: 'Nourriture' },
  { id: 'c-huile', french: 'Huile', darija: { text: 'Zit', arabic: 'زيت', arabizi: 'zit' }, kabyle: { text: 'Zzit', tifinagh: 'ⵣⵣⵉⵜ' }, category: 'Nourriture' },

  // --- Famille ---
  { id: 'c-pere', french: 'Père / Papa', darija: { text: 'Baba / El walid', arabic: 'بابا / الوالد', arabizi: 'baba' }, kabyle: { text: 'Vava / Baba', tifinagh: 'ⴱⴰⴱⴰ' }, category: 'Famille' },
  { id: 'c-mere', french: 'Mère / Maman', darija: { text: 'Yemma / El walida', arabic: 'يمّا / الوالدة', arabizi: 'yemma' }, kabyle: { text: 'Yemma', tifinagh: 'ⵢⴻⵎⵎⴰ' }, category: 'Famille' },
  { id: 'c-frere', french: 'Frère', darija: { text: 'Kho / Khouya', arabic: 'خويا', arabizi: '5oya' }, kabyle: { text: 'Gma', tifinagh: 'ⴳⵎⴰ' }, category: 'Famille' },
  { id: 'c-soeur', french: 'Sœur', darija: { text: 'Kht / Khti', arabic: 'ختي', arabizi: '5ti' }, kabyle: { text: 'Weltma', tifinagh: 'ⵡⴻⵍⵜⵎⴰ' }, category: 'Famille' },
  { id: 'c-fils', french: 'Fils', darija: { text: 'Weld / Weldi', arabic: 'ولدي', arabizi: 'weldi' }, kabyle: { text: 'Mmi', tifinagh: 'ⵎⵎⵉ' }, category: 'Famille' },
  { id: 'c-fille', french: 'Fille', darija: { text: 'Bent / Benti', arabic: 'بنتي', arabizi: 'benti' }, kabyle: { text: 'Yelli', tifinagh: 'ⵢⴻⵍⵍⵉ' }, category: 'Famille' },
  { id: 'c-gp', french: 'Grand-père', darija: { text: 'Jedd / Jeddi', arabic: 'جدي', arabizi: 'jeddi' }, kabyle: { text: 'Jeddi', tifinagh: 'ⵊⴻⴷⴷⵉ' }, category: 'Famille' },
  { id: 'c-gm', french: 'Grand-mère', darija: { text: 'Jedda', arabic: 'جدة', arabizi: 'jedda' }, kabyle: { text: 'Seṭṭi', tifinagh: 'ⵙⴻⵟⵟⵉ' }, category: 'Famille' },
  { id: 'c-famille', french: 'Famille', darija: { text: 'El 3ayla / Familya', arabic: 'العائلة', arabizi: 'l3ayla' }, kabyle: { text: 'Tawacult', tifinagh: 'ⵜⴰⵡⴰⵛⵓⵍⵜ' }, category: 'Famille' },

  // --- Chiffres ---
  { id: 'c-1', french: '1 — Un', darija: { text: 'Wahd', arabic: 'واحد', arabizi: 'wa7d' }, kabyle: { text: 'Yiwen (m) / Yiwet (f)', tifinagh: 'ⵢⵉⵡⴻⵏ' }, category: 'Chiffres' },
  { id: 'c-2', french: '2 — Deux', darija: { text: 'Zouj', arabic: 'زوج', arabizi: 'zouj' }, kabyle: { text: 'Sin (m) / Snat (f)', tifinagh: 'ⵙⵉⵏ' }, category: 'Chiffres' },
  { id: 'c-3', french: '3 — Trois', darija: { text: 'Tlata', arabic: 'ثلاثة', arabizi: 'tlata' }, kabyle: { text: 'Tlata', tifinagh: 'ⵜⵍⴰⵜⴰ' }, category: 'Chiffres' },
  { id: 'c-4', french: '4 — Quatre', darija: { text: "Rab3a", arabic: 'ربعة', arabizi: "rab3a" }, kabyle: { text: 'Kkuẓ', tifinagh: 'ⴽⴽⵓⵥ' }, category: 'Chiffres' },
  { id: 'c-5', french: '5 — Cinq', darija: { text: 'Khamsa', arabic: 'خمسة', arabizi: '5amsa' }, kabyle: { text: 'Semmus', tifinagh: 'ⵙⴻⵎⵎⵓⵙ' }, category: 'Chiffres' },
  { id: 'c-10', french: '10 — Dix', darija: { text: "3achra", arabic: 'عشرة', arabizi: "3achra" }, kabyle: { text: 'Mraw', tifinagh: 'ⵎⵔⴰⵡ' }, category: 'Chiffres' },

  // --- Verbes essentiels ---
  { id: 'c-manger', french: 'Manger', darija: { text: 'Kla / Yakol', arabic: 'كلا / ياكل', arabizi: 'kla' }, kabyle: { text: 'Ečč', tifinagh: 'ⴻⵛⵛ' }, category: 'Verbes' },
  { id: 'c-boire', french: 'Boire', darija: { text: 'Chreb / Ychreb', arabic: 'شرب / يشرب', arabizi: 'chreb' }, kabyle: { text: 'Su / Yeswa', tifinagh: 'ⵙⵓ' }, category: 'Verbes' },
  { id: 'c-aller', french: 'Aller', darija: { text: 'Mcha / Yemchi', arabic: 'مشا / يمشي', arabizi: 'mcha' }, kabyle: { text: 'Ruḥ / Yettruḥu', tifinagh: 'ⵔⵓⵃ' }, category: 'Verbes' },
  { id: 'c-venir', french: 'Venir / Viens !', darija: { text: 'Ja / Arwah!', arabic: 'جا / أرواح', arabizi: 'ja / arwa7' }, kabyle: { text: 'Yas-d / Aṛuḥ-d!', tifinagh: 'ⵢⴰⵙ-ⴷ' }, category: 'Verbes' },
  { id: 'c-parler', french: 'Parler', darija: { text: 'Hder / Yehder', arabic: 'هدر / يهدر', arabizi: '8der' }, kabyle: { text: 'Meslay / Yettmeslay', tifinagh: 'ⵎⴻⵙⵍⴰⵢ' }, category: 'Verbes' },
  { id: 'c-comprendre', french: 'Comprendre', darija: { text: 'Fhem / Yefhem', arabic: 'فهم / يفهم', arabizi: 'fhem' }, kabyle: { text: 'Fhem / Yefhem', tifinagh: 'ⴼⵀⴻⵎ' }, category: 'Verbes' },
  { id: 'c-dormir', french: 'Dormir', darija: { text: 'Rqed / Yerqed', arabic: 'رقد / يرقد', arabizi: 'rqed' }, kabyle: { text: 'Ṭṭes / Yeṭṭes', tifinagh: 'ⵟⵟⴻⵙ' }, category: 'Verbes' },
  { id: 'c-travailler', french: 'Travailler', darija: { text: 'Khdem / Yakhdem', arabic: 'خدم / يخدم', arabizi: '5dem' }, kabyle: { text: 'Xdem / Yettxeddem', tifinagh: 'ⵅⴷⴻⵎ' }, category: 'Verbes' },
  { id: 'c-vouloir', french: 'Je veux', darija: { text: 'Bghit', arabic: 'بغيت', arabizi: 'bghit' }, kabyle: { text: 'Bghiɣ', tifinagh: 'ⴱⵖⵉⵖ' }, category: 'Verbes' },
  { id: 'c-avoir', french: "J'ai", darija: { text: "3andi", arabic: 'عندي', arabizi: "3andi" }, kabyle: { text: 'Ɣur-i', tifinagh: 'ⵖⵓⵔ-ⵉ' }, category: 'Verbes' },

  // --- Expressions courantes ---
  { id: 'c-oui', french: 'Oui', darija: { text: 'Ih / Wah', arabic: 'إيه / واه', arabizi: 'ih / wah' }, kabyle: { text: 'Ih', tifinagh: 'ⵉⵀ' }, category: 'Expressions' },
  { id: 'c-non', french: 'Non', darija: { text: 'La', arabic: 'لا', arabizi: 'la' }, kabyle: { text: 'Ala', tifinagh: 'ⴰⵍⴰ' }, category: 'Expressions' },
  { id: 'c-combien', french: 'Combien ?', darija: { text: "Bchhal?", arabic: 'بشحال؟', arabizi: "bch7al?" }, kabyle: { text: 'Acḥal?', tifinagh: 'ⴰⵛⵃⴰⵍ' }, category: 'Expressions' },
  { id: 'c-ou', french: 'Où ?', darija: { text: 'Win? / Fayn?', arabic: 'وين؟', arabizi: 'win?' }, kabyle: { text: 'Anda? / Anida?', tifinagh: 'ⴰⵏⴷⴰ' }, category: 'Expressions' },
  { id: 'c-pourquoi', french: 'Pourquoi ?', darija: { text: "3lach?", arabic: 'علاش؟', arabizi: "3lach?" }, kabyle: { text: 'Ayɣer?', tifinagh: 'ⴰⵢⵖⴻⵔ' }, category: 'Expressions' },
  { id: 'c-quand', french: 'Quand ?', darija: { text: 'Waqtach? / Imta?', arabic: 'وقتاش؟', arabizi: 'wa9tach?' }, kabyle: { text: 'Melmi?', tifinagh: 'ⵎⴻⵍⵎⵉ' }, category: 'Expressions' },
  { id: 'c-jesaispas', french: 'Je ne sais pas', darija: { text: "Ma3raftch", arabic: 'ما عرفتش', arabizi: "ma3raftch" }, kabyle: { text: 'Ur ssineɣ ara', tifinagh: 'ⵓⵔ ⵙⵙⵉⵏⴻⵖ ⴰⵔⴰ' }, category: 'Expressions' },
  { id: 'c-comprpas', french: "Je n'ai pas compris", darija: { text: 'Mafhamtch', arabic: 'ما فهمتش', arabizi: 'mafhamtch' }, kabyle: { text: 'Ur fhimeɣ ara', tifinagh: 'ⵓⵔ ⴼⵀⵉⵎⴻⵖ ⴰⵔⴰ' }, category: 'Expressions' },
  { id: 'c-beaucoup', french: 'Beaucoup / Trop', darija: { text: 'Bzaf / Bezaf', arabic: 'بزاف', arabizi: 'bzaf' }, kabyle: { text: 'Aṭas', tifinagh: 'ⴰⵟⴰⵙ' }, category: 'Expressions' },
  { id: 'c-bienvenue', french: 'Bienvenue', darija: { text: 'Merhba', arabic: 'مرحبا', arabizi: 'mer7ba' }, kabyle: { text: 'Ansuf', tifinagh: 'ⴰⵏⵙⵓⴼ' }, category: 'Expressions' },

  // --- Lieux ---
  { id: 'c-maison', french: 'Maison', darija: { text: 'Dar / Ed-dar', arabic: 'الدار', arabizi: 'eddar' }, kabyle: { text: 'Axxam', tifinagh: 'ⴰⵅⵅⴰⵎ' }, category: 'Lieux' },
  { id: 'c-marche', french: 'Marché', darija: { text: 'Souq / Es-souq', arabic: 'السوق', arabizi: 'essou9' }, kabyle: { text: 'Ssuq', tifinagh: 'ⵙⵙⵓⵇ' }, category: 'Lieux' },
  { id: 'c-ecole', french: 'École', darija: { text: 'Madrasa / El medrsa', arabic: 'المدرسة', arabizi: 'lmedrsa' }, kabyle: { text: 'Lakul / Aɣerbaz', tifinagh: 'ⴰⵖⴻⵔⴱⴰⵣ' }, category: 'Lieux' },
  { id: 'c-hopital', french: 'Hôpital', darija: { text: 'Sbitar', arabic: 'سبيطار', arabizi: 'sbitar' }, kabyle: { text: 'Sbiṭar', tifinagh: 'ⵙⴱⵉⵟⴰⵔ' }, category: 'Lieux' },
  { id: 'c-magasin', french: 'Magasin / Boutique', darija: { text: 'El hanout', arabic: 'الحانوت', arabizi: 'l7anout' }, kabyle: { text: 'Taḥanut', tifinagh: 'ⵜⴰⵃⴰⵏⵓⵜ' }, category: 'Lieux' },
  { id: 'c-pays', french: 'Pays / Terre', darija: { text: 'Bled', arabic: 'بلاد', arabizi: 'bled' }, kabyle: { text: 'Tamurt', tifinagh: 'ⵜⴰⵎⵓⵔⵜ' }, category: 'Lieux' },
];

const CATEGORIES = [...new Set(CORRESPONDANCES.map((c) => c.category))];

export default function CorrespondancePage() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [hasAudio, setHasAudio] = useState(false);

  useEffect(() => {
    setHasAudio(isSpeechSupported());
  }, []);

  const filtered = useMemo(() => {
    return CORRESPONDANCES.filter((entry) => {
      if (selectedCat && entry.category !== selectedCat) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          entry.french.toLowerCase().includes(q) ||
          entry.darija.text.toLowerCase().includes(q) ||
          entry.darija.arabic.includes(q) ||
          entry.darija.arabizi.toLowerCase().includes(q) ||
          entry.kabyle.text.toLowerCase().includes(q) ||
          entry.kabyle.tifinagh.includes(q)
        );
      }
      return true;
    });
  }, [search, selectedCat]);

  function speakDarija(entry: CorrespondanceEntry) {
    const phrase: MultiScriptPhrase = {
      id: entry.id + '-d',
      arabic: entry.darija.arabic,
      latin: entry.darija.text,
      phonetic: entry.darija.text,
      french: entry.french,
      language: 'darija',
      tags: [],
    };
    pronouncePhrase(phrase);
  }

  function speakKabyle(entry: CorrespondanceEntry) {
    const phrase: MultiScriptPhrase = {
      id: entry.id + '-k',
      arabic: entry.kabyle.tifinagh,
      latin: entry.kabyle.text,
      phonetic: entry.kabyle.text,
      french: entry.french,
      language: 'kabyle',
      tags: [],
    };
    pronouncePhrase(phrase);
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/" className="text-slate-400 hover:text-slate-200 transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-bold text-lg flex items-center gap-2">
                <ArrowLeftRight className="w-5 h-5 text-cyan-400" />
                Correspondance des Langues
              </h1>
              <p className="text-xs text-slate-500">
                Français ↔ Darija ↔ Kabyle — {CORRESPONDANCES.length} entrées
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
              placeholder="Chercher un mot (français, darija, kabyle, arabizi)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCat(null)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                !selectedCat
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              Tout
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(selectedCat === cat ? null : cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                  selectedCat === cat
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-4">
        {/* Legend */}
        <div className="flex items-center gap-4 mb-4 px-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            Français
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Darija
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            Arabizi
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            Kabyle
          </div>
        </div>

        {/* Results count */}
        <div className="mb-3 text-xs text-slate-500">
          {filtered.length} résultat{filtered.length !== 1 ? 's' : ''}
        </div>

        {/* Entries */}
        <div className="space-y-2">
          {filtered.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-500">
                  {entry.category}
                </span>
              </div>

              {/* French */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-6 rounded-full bg-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-400/70 font-medium">Français</div>
                  <div className="text-sm font-medium text-slate-100">{entry.french}</div>
                </div>
              </div>

              {/* Darija */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-6 rounded-full bg-emerald-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-emerald-400/70 font-medium">Darija</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-200">{entry.darija.text}</span>
                    <span className="text-sm arabic-text text-slate-400">{entry.darija.arabic}</span>
                    {hasAudio && (
                      <button onClick={() => speakDarija(entry)} className="text-slate-500 hover:text-emerald-400 transition">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <div className="text-xs text-amber-400/70 font-mono">
                    Arabizi: {entry.darija.arabizi}
                  </div>
                </div>
              </div>

              {/* Kabyle */}
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 rounded-full bg-purple-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-purple-400/70 font-medium">Kabyle</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-200">{entry.kabyle.text}</span>
                    <span className="text-sm tifinagh-text text-slate-400">{entry.kabyle.tifinagh}</span>
                    {hasAudio && (
                      <button onClick={() => speakKabyle(entry)} className="text-slate-500 hover:text-purple-400 transition">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Globe className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-500">Aucun résultat trouvé.</p>
          </div>
        )}
      </main>
    </div>
  );
}
