import type { Lesson } from '@/lib/types';

export const arabiziLesson: Lesson = {
  id: 'advanced-arabizi',
  moduleId: 'advanced',
  title: "L'Arabizi — Écrire l'algérien en Latin + Chiffres",
  description:
    "Apprends le système d'écriture utilisé par tous les Algériens sur WhatsApp, Facebook et Instagram : les lettres latines mélangées avec des chiffres.",
  level: 2,
  estimatedMinutes: 25,

  theory: {
    introduction: `Quand tu ouvres le téléphone d'un Algérien, tu verras un truc bizarre dans ses messages :

**"Salam cv? wach rak? 3lach mat3aytlich? nroo7o l9ahwa ghda?"**

C'est quoi ces chiffres au milieu des mots ? Bienvenue dans le monde de l'**Arabizi** (عربيزي) — un mélange de "arabe" et "easy" (anglais).

**Pourquoi ça existe ?**
Dans les années 2000, les téléphones n'avaient pas de clavier arabe. Les Algériens ont inventé un système génial : utiliser des **chiffres qui ressemblent aux lettres arabes** pour écrire des sons qui n'existent pas en alphabet latin.

Aujourd'hui, même avec des claviers arabes disponibles, l'Arabizi reste LE mode d'écriture principal pour les jeunes Algériens sur les réseaux sociaux. Si tu veux comprendre les messages de tes amis algériens, c'est **indispensable**.`,

    concepts: [
      {
        id: 'arabizi-intro',
        title: "C'est quoi l'Arabizi ?",
        explanation: `L'Arabizi est un système d'écriture informel né de la nécessité. Les Algériens écrivent l'arabe (darija) en utilisant l'alphabet latin + des chiffres pour les sons arabes qui n'ont pas d'équivalent en français.

C'est devenu une culture à part entière — sur Facebook, Instagram, WhatsApp, TikTok. Même les panneaux publicitaires en Algérie utilisent parfois l'Arabizi pour cibler les jeunes.

**Important :** L'Arabizi n'a pas de règles strictes. Chacun écrit un peu à sa manière. Mais les chiffres de base sont universels.`,
        examples: [
          {
            id: 'arabizi-ex1',
            arabic: 'واش راك؟',
            latin: 'Wach rak?',
            phonetic: 'WACH rak',
            french: 'Comment ça va ?',
            language: 'darija',
            tags: ['arabizi', 'salutation'],
          },
          {
            id: 'arabizi-ex2',
            arabic: 'الحمد لله',
            latin: '7amdoulilah',
            phonetic: 'ham-dou-LI-lah',
            french: 'Dieu merci (en Arabizi: 7 = ح)',
            language: 'darija',
            tags: ['arabizi', 'courant'],
          },
          {
            id: 'arabizi-ex3',
            arabic: 'نروحو للقهوة',
            latin: 'Nroo7o l9ahwa',
            phonetic: 'n-ROU-hou la-KAH-wa',
            french: 'On va au café (7=ح, 9=ق)',
            language: 'darija',
            tags: ['arabizi', 'sortie'],
          },
        ],
        culturalNote:
          "L'Arabizi n'est PAS considéré comme de l'arabe correct. Les puristes et les institutions le critiquent. Mais dans la vie de tous les jours, c'est la norme sur les réseaux sociaux. Ne l'utilise pas dans un contexte formel (administration, travail officiel).",
      },
      {
        id: 'arabizi-numbers',
        title: 'Les Chiffres Magiques — Le Lexique Complet',
        explanation: `Voici LE tableau essentiel. Chaque chiffre représente une lettre arabe dont la forme ressemble au chiffre :

**3** = ع (ayn) — Son guttural profond, comme un "a" du fond de la gorge
→ 3lach (pourquoi), 3andi (j'ai), 3aychek (je t'aime), 3id (fête)

**7** = ح (ha) — H aspiré fort, comme souffler sur ses lunettes pour les nettoyer
→ 7amdoulilah (grâce à Dieu), 7lib (lait), 7aja (chose), 7na (nous)

**9** = ق (qaf) — Son guttural du fond de la gorge, comme un K très profond
→ 9ahwa (café), 9ri (lis/étudie), 9alb (cœur), 9dim (ancien)

**5** = خ (kha) — Comme le "ch" allemand dans "Bach" ou le "j" espagnol
→ 5obz (pain), 5edma (travail), 5oya (mon frère), 5lass (c'est fini)

**2** = ء (hamza) — Coup de glotte, petite pause dans le mot
→ 2ana (moi), 2akh (frère), mas2oul (responsable)

**8** = ه (ha léger) — H léger, presque comme un souffle
→ 8ad (ce/cette), 8na (ici)

**6** = ط (ta emphatique) — T lourd/emphatique, langue contre le palais
→ 6bib (médecin), 6oumobil (voiture), 6ayara (avion)

**3'** ou **gh** = غ (ghayn) — R grasseyé, comme le R parisien exagéré
→ ghadwa (demain), ghali (cher)`,
        examples: [
          {
            id: 'num-3',
            arabic: 'ع',
            latin: '3 (ayn)',
            phonetic: 'AYN — son guttural profond',
            french: "3lach = pourquoi, 3andi = j'ai, 3aychek = je t'aime",
            language: 'darija',
            tags: ['arabizi', 'chiffre', 'référence'],
          },
          {
            id: 'num-7',
            arabic: 'ح',
            latin: '7 (ha aspiré)',
            phonetic: 'HA — souffler fort',
            french: '7amdoulilah = grâce à Dieu, 7lib = lait, 7aja = chose',
            language: 'darija',
            tags: ['arabizi', 'chiffre', 'référence'],
          },
          {
            id: 'num-9',
            arabic: 'ق',
            latin: '9 (qaf)',
            phonetic: 'QAF — K guttural profond',
            french: '9ahwa = café, 9ri = lis, 9alb = cœur',
            language: 'darija',
            tags: ['arabizi', 'chiffre', 'référence'],
          },
          {
            id: 'num-5',
            arabic: 'خ',
            latin: '5 (kha)',
            phonetic: 'KHA — comme "ch" allemand',
            french: '5obz = pain, 5edma = travail, 5lass = fini',
            language: 'darija',
            tags: ['arabizi', 'chiffre', 'référence'],
          },
          {
            id: 'num-2',
            arabic: 'ء',
            latin: '2 (hamza)',
            phonetic: 'HAMZA — coup de glotte',
            french: '2ana = moi, 2akh = frère',
            language: 'darija',
            tags: ['arabizi', 'chiffre', 'référence'],
          },
          {
            id: 'num-6',
            arabic: 'ط',
            latin: '6 (ta emphatique)',
            phonetic: 'TA — t lourd/emphatique',
            french: '6bib = médecin, 6ayara = avion',
            language: 'darija',
            tags: ['arabizi', 'chiffre', 'référence'],
          },
        ],
        culturalNote:
          "Astuce pour mémoriser : regarde la FORME du chiffre et compare-la à la lettre arabe. Le 3 ressemble à ع retourné. Le 7 ressemble à ح. Le 9 ressemble à ق. C'est pour ça que ces chiffres ont été choisis !",
      },
      {
        id: 'arabizi-real-life',
        title: "Lire l'Arabizi dans la vraie vie",
        explanation: `Maintenant, décodons de vrais messages comme tu les verrais sur WhatsApp :

**Conversation entre potes :**
- A: "salam cv? wach rak?"
  → Salut ça va ? Comment tu vas ?
- B: "labas 7amdoulilah, winta? 3lach mat3aytlich?"
  → Ça va bien merci, et toi ? Pourquoi tu m'as pas appelé ?
- A: "sorry kho kont m5eddem, nroo7o l9ahwa ghda?"
  → Désolé frère j'étais au travail, on va au café demain ?
- B: "inchallah, 9oulili winta w win"
  → Si Dieu le veut, dis-moi quand et où

**Message typique d'une mère algérienne :**
"wlidi arwa7 ldar, el ma9la jat, 5obz chritouh, matji 3ach pas?"
→ Mon fils viens à la maison, la nourriture est prête, le pain on l'a acheté, tu viens ou pas ?

**Abréviations courantes en Arabizi :**
- cv = ça va
- stp = s'il te plaît
- mdr = mort de rire
- nn = non
- wlh = wallah (je jure)
- nch = inchallah
- 7md = el hamdoulilah
- slm = salam`,
        examples: [
          {
            id: 'real-1',
            arabic: 'علاش ما تعيطليش؟',
            latin: "3lach mat3aytlich?",
            phonetic: "ALACH ma-TAYT-lich",
            french: "Pourquoi tu m'as pas appelé ? (3=ع)",
            language: 'darija',
            tags: ['arabizi', 'conversation'],
          },
          {
            id: 'real-2',
            arabic: 'قوليلي وينتا و وين',
            latin: '9oulili winta w win',
            phonetic: 'gou-LI-li win-TA ou WIN',
            french: 'Dis-moi quand et où (9=ق)',
            language: 'darija',
            tags: ['arabizi', 'conversation'],
          },
          {
            id: 'real-3',
            arabic: 'خلاص ما نقدرش',
            latin: '5lass manqderch',
            phonetic: 'KHLASSE man-QDER-ch',
            french: "C'est fini, je ne peux pas (5=خ)",
            language: 'darija',
            tags: ['arabizi', 'expression'],
          },
          {
            id: 'real-4',
            arabic: 'عندي خدمة غدوة',
            latin: '3andi 5edma ghadwa',
            phonetic: 'AN-di KHED-ma GHAD-wa',
            french: "J'ai du travail demain (3=ع, 5=خ)",
            language: 'darija',
            tags: ['arabizi', 'quotidien'],
          },
        ],
        culturalNote:
          "L'Arabizi est très flexible. \"Pourquoi\" peut s'écrire 3lach, 3lash, 3lech, 3lesh... C'est normal ! L'important c'est d'être compris. Ne stress pas sur l'orthographe exacte.",
      },
      {
        id: 'arabizi-comparison',
        title: 'Arabizi vs Arabe vs Français — Comparaison',
        explanation: `Pour bien comprendre le système, voici la même phrase dans les 3 écritures :

| Arabe | Arabizi | Français |
|-------|---------|----------|
| السلام عليكم | salam 3likoum | Paix sur vous |
| واش راك | wach rak | Comment ça va |
| الحمد لله | 7amdoulilah | Dieu merci |
| بشحال | bch7al | Combien |
| خبز | 5obz | Pain |
| قهوة | 9ahwa | Café |
| علاش | 3lach | Pourquoi |
| طبيب | 6bib | Médecin |
| عندي | 3andi | J'ai |
| حاجة | 7aja | Chose/truc |

**L'Arabizi au-delà de la darija :**
Les Kabyles aussi utilisent un système similaire pour écrire en kabyle avec des chiffres, notamment pour les sons emphatiques et le "ε" (ayn) qu'on retrouve dans certains mots kabyles d'origine arabe.`,
        examples: [
          {
            id: 'comp-1',
            arabic: 'بشحال هادي؟',
            latin: 'Bch7al hadi?',
            phonetic: 'bech-HAL ha-DI',
            french: "Combien ça coûte ? (7=ح)",
            language: 'darija',
            tags: ['arabizi', 'marché'],
          },
          {
            id: 'comp-2',
            arabic: 'عيد مبارك',
            latin: '3id moubarak',
            phonetic: 'AYD mou-BA-rak',
            french: 'Bonne fête (3=ع)',
            language: 'darija',
            tags: ['arabizi', 'fête'],
          },
          {
            id: 'comp-3',
            arabic: 'يعيشك',
            latin: 'Ya3tik essa7a',
            phonetic: 'YAA-tik es-SA-ha',
            french: 'Bon courage / bravo (3=ع, 7=ح)',
            language: 'darija',
            tags: ['arabizi', 'expression'],
          },
        ],
        culturalNote:
          "Sur les réseaux sociaux algériens, tu verras souvent un mélange de français et d'Arabizi dans le même message : \"stp 3awtli message 3la had le projet\". C'est le vrai quotidien linguistique algérien — un mélange permanent.",
      },
    ],

    culturalContext: `**L'Arabizi, c'est plus qu'un système d'écriture — c'est une identité.**

Pour les jeunes Algériens, écrire en Arabizi c'est :
1. **Rapide** — plus facile à taper que l'arabe sur un clavier
2. **Cool** — ça fait "jeune" et moderne
3. **Inclusif** — tout le monde comprend, même les Algériens qui ne lisent pas bien l'arabe
4. **Mixable** — on peut mélanger français, darija et anglais dans la même phrase

**Le débat culturel :**
Certains intellectuels algériens critiquent l'Arabizi comme une "dégradation" de la langue arabe. D'autres le voient comme une forme créative d'expression. Dans tous les cas, c'est devenu incontournable.

**Récap des chiffres essentiels :**
3 = ع (ayn) | 7 = ح (ha) | 9 = ق (qaf) | 5 = خ (kha)
2 = ء (hamza) | 6 = ط (ta) | 8 = ه (ha léger)

Apprends ces 7 chiffres et tu pourras lire 95% des messages en Arabizi !`,
  },

  practice: {
    guidedExercises: [
      {
        id: 'az-p1',
        type: 'multiple_choice',
        question: 'Dans l\'Arabizi, le chiffre "3" représente quelle lettre arabe ?',
        options: ['ح (ha)', 'ع (ayn)', 'ق (qaf)', 'خ (kha)'],
        correctAnswer: 'ع (ayn)',
        hint: 'Regarde la forme du chiffre 3 — il ressemble à cette lettre retournée.',
        explanation:
          '3 = ع (ayn). C\'est LE chiffre le plus important en Arabizi. On le retrouve dans des dizaines de mots : 3lach (pourquoi), 3andi (j\'ai), 3aychek (je t\'aime).',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'az-p2',
        type: 'multiple_choice',
        question: 'Que signifie "7amdoulilah" en Arabizi ?',
        options: ['Bonjour', 'Au revoir', 'Dieu merci', 'S\'il te plaît'],
        correctAnswer: 'Dieu merci',
        hint: '7 = ح, donc 7amdoulilah = حمد لله...',
        explanation:
          '7amdoulilah = El hamdoulilah = الحمد لله = "Dieu merci". Le 7 remplace le ح (ha aspiré fort). C\'est une des expressions les plus fréquentes en Arabizi.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'az-p3',
        type: 'fill_blank',
        question: 'Complète : Pour écrire "café" (قهوة) en Arabizi, on écrit "___ahwa".',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hint: 'Le ق (qaf) est représenté par quel chiffre ?',
        explanation:
          '9 = ق (qaf). Donc قهوة (qahwa, café) s\'écrit "9ahwa" en Arabizi. Le 9 ressemble à la forme de la lettre ق.',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'az-p4',
        type: 'multiple_choice',
        question: 'Décode ce message Arabizi : "3lach mat3aytlich?"',
        options: [
          'Où est le café ?',
          'Pourquoi tu m\'as pas appelé ?',
          'Comment tu vas ?',
          'Quand tu viens ?',
        ],
        correctAnswer: 'Pourquoi tu m\'as pas appelé ?',
        hint: '3lach = pourquoi (3 = ع), t3aytli = tu m\'as appelé, ch = négation',
        explanation:
          '"3lach mat3aytlich?" = "علاش ما تعيطليش؟" = "Pourquoi tu m\'as pas appelé ?". Le "ma...ch" est la négation en darija, le 3 remplace le ع.',
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 'az-p5',
        type: 'fill_blank',
        question: 'Écris "pain" (خبز) en Arabizi : "___obz".',
        correctAnswer: '5',
        acceptableAnswers: ['5', 'kh'],
        hint: 'Le خ (kha) est représenté par quel chiffre ?',
        explanation:
          '5 = خ (kha). Donc خبز (khobz, pain) s\'écrit "5obz" en Arabizi. Tu peux aussi écrire "khobz" — les deux sont acceptés, mais "5obz" est plus Arabizi.',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'az-p6',
        type: 'multiple_choice',
        question: 'Décode : "nroo7o l9ahwa ghda, cv?"',
        options: [
          'Je vais acheter du café, d\'accord ?',
          'On va au café demain, ça va ?',
          'Le café est fermé demain, non ?',
          'Tu veux du café maintenant ?',
        ],
        correctAnswer: 'On va au café demain, ça va ?',
        hint: 'nroo7o = on va (7=ح), l9ahwa = au café (9=ق), ghda = demain',
        explanation:
          '"nroo7o l9ahwa ghda, cv?" = "On va au café demain, ça va ?". nroo7o (نروحو) = on va, l9ahwa (القهوة) = au café, ghda (غدوة) = demain.',
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 'az-p7',
        type: 'free_response',
        question: 'Écris "J\'ai du travail demain" en Arabizi. (Indice : j\'ai = 3andi, travail = 5edma, demain = ghda)',
        correctAnswer: '3andi 5edma ghda',
        acceptableAnswers: ['3andi 5edma ghda', '3endi 5edma ghadwa', '3andi khedma ghda', '3andi khedma ghadwa'],
        hint: 'Utilise 3 pour ع et 5 pour خ.',
        explanation:
          '"3andi 5edma ghda" = "عندي خدمة غدوة" = "J\'ai du travail demain". 3 = ع (dans 3andi), 5 = خ (dans 5edma).',
        difficulty: 2,
        xpReward: 20,
      },
    ],
  },

  assessment: {
    exercises: [
      {
        id: 'az-t1',
        type: 'fill_blank',
        question: 'Associe chaque chiffre Arabizi : 3 = ___, 7 = ___, 9 = ___. (Écris les 3 lettres séparées par des virgules)',
        correctAnswer: 'ع, ح, ق',
        acceptableAnswers: ['ع, ح, ق', 'ayn, ha, qaf', '3ayn, 7a, 9af', 'ayn ha qaf'],
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'az-t2',
        type: 'free_response',
        question: 'Décode ce message complet : "salam, wach rak? 3lach ma7abtch tji l9ahwa m3ana? kont 5ayef wla?"',
        correctAnswer: 'Salut, comment ça va ? Pourquoi tu as pas voulu venir au café avec nous ? Tu avais peur ou quoi ?',
        acceptableAnswers: ['salut', 'pourquoi', 'café', 'peur', 'avec nous'],
        difficulty: 3,
        xpReward: 30,
      },
      {
        id: 'az-t3',
        type: 'multiple_choice',
        question: 'Comment écrit-on "médecin" (طبيب) en Arabizi ?',
        options: ['7bib', '6bib', '3bib', '9bib'],
        correctAnswer: '6bib',
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 'az-t4',
        type: 'free_response',
        question: 'Écris en Arabizi : "Pourquoi le café est cher ?" (pourquoi = 3lach, café = 9ahwa, cher = ghali)',
        correctAnswer: '3lach 9ahwa ghalia?',
        acceptableAnswers: ['3lach 9ahwa ghalia', '3lach l9ahwa ghalia', '3lach el 9ahwa ghalya', '3lach 9ahwa ghalya'],
        difficulty: 2,
        xpReward: 20,
      },
      {
        id: 'az-t5',
        type: 'multiple_choice',
        question: 'Quel chiffre Arabizi représente le son "kha" (خ), comme dans "pain" (خبز) ?',
        options: ['3', '5', '7', '9'],
        correctAnswer: '5',
        difficulty: 1,
        xpReward: 10,
      },
    ],
    passingScore: 70,
  },

  reviewPhrases: [
    {
      id: 'az-r1',
      arabic: 'ع = 3',
      latin: "3 = Ayn (ع)",
      phonetic: 'AYN — son guttural',
      french: "3lach = pourquoi, 3andi = j'ai",
      language: 'darija',
      tags: ['arabizi', 'référence'],
    },
    {
      id: 'az-r2',
      arabic: 'ح = 7',
      latin: '7 = Ha aspiré (ح)',
      phonetic: 'HA — souffle fort',
      french: '7amdoulilah = grâce à Dieu, 7lib = lait',
      language: 'darija',
      tags: ['arabizi', 'référence'],
    },
    {
      id: 'az-r3',
      arabic: 'ق = 9',
      latin: '9 = Qaf (ق)',
      phonetic: 'QAF — K guttural',
      french: '9ahwa = café, 9alb = cœur',
      language: 'darija',
      tags: ['arabizi', 'référence'],
    },
    {
      id: 'az-r4',
      arabic: 'خ = 5',
      latin: '5 = Kha (خ)',
      phonetic: 'KHA — "ch" allemand',
      french: '5obz = pain, 5edma = travail',
      language: 'darija',
      tags: ['arabizi', 'référence'],
    },
    {
      id: 'az-r5',
      arabic: 'علاش ما تعيطليش؟',
      latin: "3lach mat3aytlich?",
      phonetic: 'ALACH ma-TAYT-lich',
      french: "Pourquoi tu m'as pas appelé ?",
      language: 'darija',
      tags: ['arabizi', 'conversation'],
    },
    {
      id: 'az-r6',
      arabic: 'نروحو للقهوة غدوة',
      latin: 'Nroo7o l9ahwa ghda',
      phonetic: 'n-ROU-hou la-KAH-wa GHDA',
      french: 'On va au café demain',
      language: 'darija',
      tags: ['arabizi', 'sortie'],
    },
    {
      id: 'az-r7',
      arabic: 'عندي خدمة',
      latin: '3andi 5edma',
      phonetic: 'AN-di KHED-ma',
      french: "J'ai du travail",
      language: 'darija',
      tags: ['arabizi', 'quotidien'],
    },
    {
      id: 'az-r8',
      arabic: 'ط = 6 | ء = 2 | ه = 8',
      latin: '6 = Ta (ط) | 2 = Hamza (ء) | 8 = Ha (ه)',
      phonetic: 'TA emphatique | coup de glotte | H léger',
      french: '6bib = médecin, 2ana = moi, 8ad = ce/cette',
      language: 'darija',
      tags: ['arabizi', 'référence'],
    },
  ],
};
