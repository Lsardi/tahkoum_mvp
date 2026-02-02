import type { Lesson } from '@/lib/types';

export const alphabetLesson: Lesson = {
  id: 'basics-alphabet',
  moduleId: 'basics',
  title: "Les Alphabets — Arabe, Tifinagh & Prononciation",
  description:
    "Maîtrise les alphabets arabe et tifinagh utilisés en Algérie, avec la prononciation exacte de chaque lettre pour un francophone.",
  level: 1,
  estimatedMinutes: 30,

  theory: {
    introduction: `En Algérie, tu vas rencontrer **3 systèmes d'écriture** :

1. **L'alphabet arabe** — utilisé pour la darija, l'arabe officiel, les panneaux, l'administration
2. **Le tifinagh** (ⵜⵉⴼⵉⵏⴰⵖ) — l'alphabet berbère/amazigh, utilisé en Kabylie et reconnu officiellement
3. **L'alphabet latin** — utilisé au quotidien pour le français et l'Arabizi (darija écrite en latin+chiffres)

**Bonne nouvelle :** Tu n'as pas besoin de maîtriser l'écriture arabe ou tifinagh pour communiquer au quotidien. La plupart des Algériens eux-mêmes utilisent l'alphabet latin (Arabizi) pour écrire en darija sur leur téléphone.

**Mais** savoir reconnaître les lettres et les sons est essentiel pour :
- Lire les panneaux de rue
- Comprendre les menus de restaurant
- Déchiffrer les documents administratifs
- Impressionner tes amis algériens !

**Focus de cette leçon :** Les sons qui n'existent PAS en français et comment les prononcer.`,

    concepts: [
      {
        id: 'arabic-alphabet',
        title: "L'Alphabet Arabe — Les 28 lettres",
        explanation: `L'alphabet arabe a 28 lettres. Il s'écrit de **droite à gauche**. Chaque lettre change de forme selon sa position dans le mot (début, milieu, fin, isolée).

**Les lettres que tu connais déjà (sons existants en français) :**
ب (ba), ت (ta), ث (tha), ج (ja), د (da), ذ (dha), ر (ra), ز (za), س (sa), ش (sha), ف (fa), ك (ka), ل (la), م (ma), ن (na), و (wa), ي (ya)

**Les lettres avec des sons NOUVEAUX pour un francophone — LES PLUS IMPORTANTES :**

| Arabe | Nom | Arabizi | Son | Comment prononcer |
|-------|-----|---------|-----|-------------------|
| ع | Ayn | 3 | Son guttural | Contracte le fond de ta gorge en disant "a" |
| ح | Ha | 7 | H aspiré fort | Souffle fort comme si tu nettoyais tes lunettes |
| خ | Kha | 5 | "ch" allemand | Comme le "ch" dans "Bach" ou la "jota" espagnole |
| غ | Ghayn | gh | R grasseyé | Comme un R parisien exagéré, du fond de la gorge |
| ق | Qaf | 9 | K guttural | Comme un "K" mais prononcé du fond de la gorge |
| ه | Ha | 8 | H léger | Un souffle doux, comme "hello" en anglais |
| ء | Hamza | 2 | Coup de glotte | Petite pause dans le mot, comme "oh-oh" |
| ط | Ta emphatique | 6 | T lourd | Dis "T" avec la langue aplatie contre le palais |
| ص | Sad | s emphatic | S emphatique | Dis "S" avec la langue aplatie |
| ض | Dad | d emphatic | D emphatique | Dis "D" avec la langue aplatie |
| ظ | Dha | dh emphatic | Dh emphatique | Comme "th" anglais mais emphatique |`,
        examples: [
          {
            id: 'alph-ayn',
            arabic: 'ع — عين',
            latin: "3 — 3ayn",
            phonetic: 'AYN — contracte le fond de la gorge en disant "a"',
            french: "Ayn : le son le plus emblématique de l'arabe. 3lach=pourquoi, 3andi=j'ai",
            language: 'darija',
            tags: ['alphabet', 'son-nouveau'],
          },
          {
            id: 'alph-ha',
            arabic: 'ح — حاء',
            latin: '7 — 7a',
            phonetic: 'HA — souffle fort, comme nettoyer ses lunettes',
            french: 'Ha aspiré : 7amdoulilah=grâce à Dieu, 7lib=lait, 7aja=chose',
            language: 'darija',
            tags: ['alphabet', 'son-nouveau'],
          },
          {
            id: 'alph-kha',
            arabic: 'خ — خاء',
            latin: '5 — kha',
            phonetic: 'KHA — comme "ch" allemand (Bach) ou "j" espagnol',
            french: 'Kha : 5obz=pain, 5edma=travail, kho=frère',
            language: 'darija',
            tags: ['alphabet', 'son-nouveau'],
          },
          {
            id: 'alph-qaf',
            arabic: 'ق — قاف',
            latin: '9 — qaf',
            phonetic: 'QAF — "K" prononcé du fond de la gorge',
            french: 'Qaf : 9ahwa=café, 9alb=cœur, 9ri=lis',
            language: 'darija',
            tags: ['alphabet', 'son-nouveau'],
          },
          {
            id: 'alph-ghayn',
            arabic: 'غ — غين',
            latin: 'gh — ghayn',
            phonetic: 'GHAYN — R parisien exagéré, du fond de la gorge',
            french: 'Ghayn : ghali=cher, ghadwa=demain, ghir=seulement',
            language: 'darija',
            tags: ['alphabet', 'son-nouveau'],
          },
        ],
        culturalNote:
          "En Algérie, la prononciation varie BEAUCOUP selon les régions. Les gens de l'Est (Constantine) prononcent le ق (qaf) comme un \"g\" dur. Les Algérois le prononcent souvent comme un coup de glotte. Les Oranais ont encore un autre accent. C'est comme les accents français — aucun n'est \"faux\".",
      },
      {
        id: 'arabic-full-table',
        title: "Tableau Complet — Toutes les lettres arabes",
        explanation: `Voici les 28 lettres dans l'ordre traditionnel (de droite à gauche dans l'écriture, mais présentées ici de gauche à droite pour faciliter la lecture) :

**Groupe 1 — Sons familiers pour un francophone :**
أ (a/alif) — ب (b/ba) — ت (t/ta) — ج (j/jim) — د (d/dal) — ر (r/ra) — ز (z/zayn) — س (s/sin) — ش (sh/shin) — ف (f/fa) — ك (k/kaf) — ل (l/lam) — م (m/mim) — ن (n/nun) — و (w/waw) — ي (y/ya)

**Groupe 2 — Sons à apprendre (nouveaux pour francophones) :**
ث (th/tha) — comme "th" anglais dans "think"
ح (7/ha) — H aspiré fort
خ (5/kha) — "ch" allemand
ذ (dh/dhal) — comme "th" anglais dans "the"
ص (S/sad) — S emphatique
ض (D/dad) — D emphatique
ط (6/ta) — T emphatique
ظ (dh/dha) — "th" emphatique
ع (3/ayn) — son guttural
غ (gh/ghayn) — R grasseyé
ق (9/qaf) — K guttural
ه (8/ha) — H léger
ء (2/hamza) — coup de glotte

**Astuce darija :** En darija algérienne, certaines lettres se simplifient. Le ث (tha) devient souvent "t", le ذ (dhal) devient "d", et le ظ (dha) devient "d" aussi. La darija est plus "facile" que l'arabe classique pour la prononciation !`,
        examples: [
          {
            id: 'grp-familiar',
            arabic: 'ب ت ج د ر ز س ش ف ك ل م ن',
            latin: 'b t j d r z s sh f k l m n',
            phonetic: 'Mêmes sons qu\'en français',
            french: 'Lettres à sons familiers — tu les connais déjà !',
            language: 'darija',
            tags: ['alphabet', 'familier'],
          },
          {
            id: 'grp-new',
            arabic: 'ع ح خ غ ق ط ص ض',
            latin: '3  7  5  gh  9  6  S  D',
            phonetic: 'Sons gutturaux et emphatiques',
            french: 'Lettres à sons nouveaux — les 8 essentielles à maîtriser',
            language: 'darija',
            tags: ['alphabet', 'son-nouveau'],
          },
          {
            id: 'grp-vowels',
            arabic: 'اَ اِ اُ',
            latin: 'a i u (fatha, kasra, damma)',
            phonetic: 'a (court) — i (court) — ou (court)',
            french: 'Voyelles courtes : marquées par des petits signes au-dessus/dessous des lettres',
            language: 'darija',
            tags: ['alphabet', 'voyelles'],
          },
        ],
        culturalNote:
          "L'arabe n'écrit généralement pas les voyelles courtes — elles sont sous-entendues. C'est pour ça que \"كتب\" peut se lire \"kataba\" (il a écrit), \"kutub\" (livres) ou \"kutiba\" (a été écrit) selon le contexte. En darija, c'est encore plus relax — on devine par le contexte.",
      },
      {
        id: 'tifinagh-alphabet',
        title: "L'Alphabet Tifinagh — L'écriture amazighe",
        explanation: `Le tifinagh (ⵜⵉⴼⵉⵏⴰⵖ) est l'alphabet des Amazighs (Berbères). Il est utilisé en Kabylie et reconnu dans la constitution algérienne depuis 2016.

Tu le verras sur les panneaux officiels (souvent en 3 langues : arabe, tifinagh, français) et dans les livres/médias kabyles.

**Les lettres tifinagh courantes (alphabet IRCAM standardisé) :**

| Tifinagh | Latin | Son |
|----------|-------|-----|
| ⴰ | a | a |
| ⴱ | b | b |
| ⴳ | g | g dur (comme "gare") |
| ⴷ | d | d |
| ⴻ | e | e muet/schwa |
| ⴼ | f | f |
| ⵀ | h | h aspiré |
| ⵉ | i | i |
| ⵊ | j | j |
| ⴽ | k | k |
| ⵍ | l | l |
| ⵎ | m | m |
| ⵏ | n | n |
| ⵓ | u | ou |
| ⵔ | r | r roulé |
| ⵙ | s | s |
| ⵜ | t | t |
| ⵡ | w | w |
| ⵅ | x | kh (comme خ) |
| ⵢ | y | y |
| ⵣ | z | z |
| ⵛ | c | ch (comme "chat") |
| ⵇ | q | q guttural |
| ⵖ | gh | r grasseyé |
| ⵄ | ɛ | ayn (comme ع) |

**Lettres spéciales kabyles :**
| ⴹ | ḍ | d emphatique |
| ⵟ | ṭ | t emphatique |
| ⵚ | ṣ | s emphatique |
| ⵥ | ẓ | z emphatique |`,
        examples: [
          {
            id: 'tif-azul',
            arabic: 'ⴰⵣⵓⵍ',
            latin: 'Azul',
            phonetic: 'a-ZOUL',
            french: 'Bonjour — a(ⴰ) z(ⵣ) u(ⵓ) l(ⵍ)',
            language: 'kabyle',
            tags: ['alphabet', 'tifinagh'],
          },
          {
            id: 'tif-tamurt',
            arabic: 'ⵜⴰⵎⵓⵔⵜ',
            latin: 'Tamurt',
            phonetic: 'ta-MOORT',
            french: 'Pays/terre — t(ⵜ) a(ⴰ) m(ⵎ) u(ⵓ) r(ⵔ) t(ⵜ)',
            language: 'kabyle',
            tags: ['alphabet', 'tifinagh'],
          },
          {
            id: 'tif-idles',
            arabic: 'ⵉⴷⵍⴻⵙ',
            latin: 'Idles',
            phonetic: 'id-LESS',
            french: 'Livre — i(ⵉ) d(ⴷ) l(ⵍ) e(ⴻ) s(ⵙ)',
            language: 'kabyle',
            tags: ['alphabet', 'tifinagh'],
          },
          {
            id: 'tif-tamazight',
            arabic: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
            latin: 'Tamazight',
            phonetic: 'ta-ma-ZIGHT',
            french: 'La langue amazighe — le mot pour désigner la langue elle-même',
            language: 'kabyle',
            tags: ['alphabet', 'tifinagh'],
          },
        ],
        culturalNote:
          "Le tifinagh est un des plus anciens alphabets du monde — il date de plus de 2500 ans ! Les inscriptions tifinagh anciennes se trouvent dans tout le Sahara. Les Touaregs ont maintenu cette écriture vivante pendant des millénaires. Sa version moderne (néo-tifinagh) a été standardisée par l'IRCAM au Maroc et adoptée en Algérie.",
      },
      {
        id: 'pronunciation-guide',
        title: "Guide de Prononciation — Les sons difficiles",
        explanation: `Voici les exercices de prononciation pour les sons qui n'existent pas en français. Entraîne-toi en exagérant d'abord, puis en devenant plus naturel.

**ع (Ayn / 3) — LE plus important :**
1. Ouvre la bouche comme pour dire "a"
2. Contracte le fond de ta gorge (comme si tu allais vomir — désolé c'est la meilleure image)
3. Fais sortir le son "a" en maintenant cette contraction
4. Exercice : "3andi" (j'ai), "3lach" (pourquoi)

**ح (Ha / 7) — H aspiré fort :**
1. Imagine que tu veux créer de la buée sur une vitre
2. Souffle fort avec la bouche ouverte — "HHHHA"
3. C'est un souffle puissant, pas le "h" doux anglais
4. Exercice : "7amdoulilah", "7lib" (lait)

**خ (Kha / 5) — Le "ch" allemand :**
1. Place ta langue comme pour dire "K"
2. Au lieu de bloquer, laisse l'air passer en faisant un frottement
3. Ça ressemble au bruit quand on se racle la gorge doucement
4. Exercice : "5obz" (pain), "5edma" (travail)

**غ (Ghayn / gh) — Le R grasseyé :**
1. C'est comme un R parisien bien appuyé
2. Fais vibrer l'arrière de ta gorge
3. Plus facile pour les Français que les autres sons !
4. Exercice : "ghali" (cher), "ghadwa" (demain)

**ق (Qaf / 9) — Le K guttural :**
1. Dis "K" mais en reculant ta langue vers le fond de la gorge
2. Le son sort de plus profond que le K normal
3. Exercice : "9ahwa" (café), "9alb" (cœur)`,
        examples: [
          {
            id: 'pron-3andi',
            arabic: 'عندي',
            latin: "3andi",
            phonetic: "AN-di (le 'A' sort du fond de la gorge)",
            french: "J'ai — Exercice pour le ع (ayn)",
            language: 'darija',
            tags: ['prononciation', 'exercice'],
          },
          {
            id: 'pron-7lib',
            arabic: 'حليب',
            latin: '7lib',
            phonetic: "HLIB (le 'H' est un souffle fort)",
            french: 'Lait — Exercice pour le ح (ha)',
            language: 'darija',
            tags: ['prononciation', 'exercice'],
          },
          {
            id: 'pron-5obz',
            arabic: 'خبز',
            latin: '5obz',
            phonetic: "KHOBZ (le 'KH' gratte la gorge)",
            french: 'Pain — Exercice pour le خ (kha)',
            language: 'darija',
            tags: ['prononciation', 'exercice'],
          },
          {
            id: 'pron-9ahwa',
            arabic: 'قهوة',
            latin: '9ahwa',
            phonetic: "QAH-wa (le 'Q' vient du fond)",
            french: 'Café — Exercice pour le ق (qaf)',
            language: 'darija',
            tags: ['prononciation', 'exercice'],
          },
        ],
        culturalNote:
          "Ne t'inquiète pas si tu n'arrives pas à prononcer parfaitement ces sons du premier coup. Les Algériens apprécient l'effort et te comprendront même avec un accent. L'important c'est d'essayer — \"rak t7awel\" (tu essaies) et ça se respecte !",
      },
    ],

    culturalContext: `**Résumé des correspondances écriture :**

| Son | Arabe | Tifinagh | Arabizi | Français proche |
|-----|-------|----------|---------|----------------|
| a | ا | ⴰ | a | a |
| b | ب | ⴱ | b | b |
| t | ت | ⵜ | t | t |
| d | د | ⴷ | d | d |
| r | ر | ⵔ | r | r (roulé) |
| z | ز | ⵣ | z | z |
| s | س | ⵙ | s | s |
| sh | ش | ⵛ | ch | ch |
| f | ف | ⴼ | f | f |
| k | ك | ⴽ | k | k |
| l | ل | ⵍ | l | l |
| m | م | ⵎ | m | m |
| n | ن | ⵏ | n | n |
| w | و | ⵡ | w | w |
| y | ي | ⵢ | y | y |
| 3/ayn | ع | ⵄ | 3 | ∅ (n'existe pas) |
| 7/ha | ح | ⵃ | 7 | ∅ (n'existe pas) |
| 5/kha | خ | ⵅ | 5 | ∅ (ch allemand) |
| gh | غ | ⵖ | gh | R grasseyé |
| 9/qaf | ق | ⵇ | 9 | ∅ (n'existe pas) |

**Le conseil de Karim :** Concentre-toi sur 5 sons : **ع (3), ح (7), خ (5), غ (gh), ق (9)**. Si tu maîtrises ces 5 sons, tu peux prononcer 95% des mots en darija et en kabyle correctement.`,
  },

  practice: {
    guidedExercises: [
      {
        id: 'alph-p1',
        type: 'multiple_choice',
        question: 'Le chiffre "3" en Arabizi correspond à quelle lettre arabe ?',
        options: ['ح (ha)', 'ع (ayn)', 'غ (ghayn)', 'ق (qaf)'],
        correctAnswer: 'ع (ayn)',
        hint: "Regarde la forme du 3 et de la lettre ع — elles se ressemblent !",
        explanation: '3 = ع (ayn). La forme du chiffre 3 ressemble à la lettre ع tournée. C\'est le son guttural le plus emblématique de l\'arabe.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'alph-p2',
        type: 'multiple_choice',
        question: 'Comment prononce-t-on le son ح (7) ?',
        options: [
          'Comme le "h" dans "hello"',
          'Un souffle fort, comme créer de la buée sur une vitre',
          'Comme le "r" français',
          'Un "K" du fond de la gorge',
        ],
        correctAnswer: 'Un souffle fort, comme créer de la buée sur une vitre',
        hint: "C'est un H mais beaucoup plus fort que le H anglais.",
        explanation: 'Le ح (ha/7) est un souffle puissant du fond de la gorge. Plus fort que le "h" anglais mais pas aussi "rauque" que le خ (kha/5).',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'alph-p3',
        type: 'fill_blank',
        question: 'Le mot "café" (قهوة) commence par la lettre ___ qui se transcrit en Arabizi par le chiffre 9.',
        correctAnswer: 'ق',
        acceptableAnswers: ['ق', 'qaf', 'Qaf', 'q'],
        hint: "C'est le son guttural 'K' du fond de la gorge.",
        explanation: 'ق (qaf) = 9 en Arabizi. C\'est un K prononcé depuis le fond de la gorge. Très important car présent dans beaucoup de mots courants : 9ahwa, 9alb, 9ri.',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'alph-p4',
        type: 'multiple_choice',
        question: 'En tifinagh, comment écrit-on "Azul" (bonjour en kabyle) ?',
        options: ['ⵜⴰⵎⵓⵔⵜ', 'ⴰⵣⵓⵍ', 'ⵉⴷⵍⴻⵙ', 'ⵜⴰⵎⴰⵣⵉⵖⵜ'],
        correctAnswer: 'ⴰⵣⵓⵍ',
        hint: "Décompose : A(ⴰ) + Z(ⵣ) + U(ⵓ) + L(ⵍ)",
        explanation: 'Azul = ⴰⵣⵓⵍ. Les lettres tifinagh : ⴰ(a) + ⵣ(z) + ⵓ(u) + ⵍ(l). Le tifinagh se lit de gauche à droite, comme le français.',
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 'alph-p5',
        type: 'multiple_choice',
        question: 'L\'alphabet arabe s\'écrit dans quel sens ?',
        options: [
          'De gauche à droite',
          'De droite à gauche',
          'De haut en bas',
          'Dans les deux sens',
        ],
        correctAnswer: 'De droite à gauche',
        hint: 'C\'est l\'inverse du français.',
        explanation: 'L\'arabe s\'écrit de DROITE à GAUCHE. Les chiffres, eux, s\'écrivent de gauche à droite (comme en français). Le tifinagh moderne s\'écrit de gauche à droite.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'alph-p6',
        type: 'fill_blank',
        question: 'Le son "kh" (comme dans "5obz" = pain) correspond à la lettre arabe ___.',
        correctAnswer: 'خ',
        acceptableAnswers: ['خ', 'kha', 'Kha'],
        hint: 'En Arabizi c\'est le chiffre 5.',
        explanation: 'خ (kha) = 5 en Arabizi. Ce son ressemble au "ch" allemand (dans "Bach") ou au "j" espagnol (dans "jota"). En darija : 5obz (pain), 5edma (travail).',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'alph-p7',
        type: 'multiple_choice',
        question: 'Quel son est le plus facile à prononcer pour un Français ?',
        options: ['ع (ayn)', 'ق (qaf)', 'غ (ghayn)', 'ط (ta emphatique)'],
        correctAnswer: 'غ (ghayn)',
        hint: 'Un de ces sons ressemble beaucoup au "R" français...',
        explanation: 'Le غ (ghayn) est le plus facile pour un francophone car il ressemble au R grasseyé parisien ! C\'est le même type de vibration au fond de la gorge.',
        difficulty: 1,
        xpReward: 10,
      },
    ],
  },

  assessment: {
    exercises: [
      {
        id: 'alph-t1',
        type: 'fill_blank',
        question: 'Complète les correspondances Arabizi : 3 = ع, 7 = ح, 9 = ق, 5 = ___.',
        correctAnswer: 'خ',
        acceptableAnswers: ['خ', 'kha', 'Kha'],
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'alph-t2',
        type: 'multiple_choice',
        question: 'La lettre tifinagh ⵜ correspond à quel son ?',
        options: ['m', 't', 'n', 'r'],
        correctAnswer: 't',
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 'alph-t3',
        type: 'multiple_choice',
        question: 'Combien de lettres l\'alphabet arabe contient-il ?',
        options: ['24', '26', '28', '32'],
        correctAnswer: '28',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'alph-t4',
        type: 'free_response',
        question: 'Cite 3 sons arabes qui n\'existent pas en français, avec leur numéro Arabizi.',
        correctAnswer: 'ع (3 ayn), ح (7 ha), ق (9 qaf)',
        acceptableAnswers: ['3', '7', '9', '5', 'ayn', 'ha', 'qaf', 'kha', 'ghayn'],
        difficulty: 2,
        xpReward: 25,
      },
      {
        id: 'alph-t5',
        type: 'multiple_choice',
        question: 'Déchiffre ce mot en tifinagh : ⵜⴰⵎⴰⵣⵉⵖⵜ',
        options: ['Tamurt', 'Tamazight', 'Tanemmirt', 'Taddart'],
        correctAnswer: 'Tamazight',
        difficulty: 3,
        xpReward: 20,
      },
    ],
    passingScore: 70,
  },

  reviewPhrases: [
    {
      id: 'alph-r1',
      arabic: 'ع = 3 (Ayn)',
      latin: '3 — Son guttural profond',
      phonetic: 'Contracte le fond de la gorge en disant "a"',
      french: "3lach = pourquoi, 3andi = j'ai",
      language: 'darija',
      tags: ['alphabet', 'prononciation'],
    },
    {
      id: 'alph-r2',
      arabic: 'ح = 7 (Ha)',
      latin: '7 — H aspiré fort',
      phonetic: 'Souffle fort, comme créer de la buée',
      french: '7amdoulilah = grâce à Dieu, 7lib = lait',
      language: 'darija',
      tags: ['alphabet', 'prononciation'],
    },
    {
      id: 'alph-r3',
      arabic: 'خ = 5 (Kha)',
      latin: '5 — "ch" allemand',
      phonetic: 'Comme "Bach" ou la jota espagnole',
      french: '5obz = pain, 5edma = travail',
      language: 'darija',
      tags: ['alphabet', 'prononciation'],
    },
    {
      id: 'alph-r4',
      arabic: 'ق = 9 (Qaf)',
      latin: '9 — K guttural',
      phonetic: '"K" prononcé du fond de la gorge',
      french: '9ahwa = café, 9alb = cœur',
      language: 'darija',
      tags: ['alphabet', 'prononciation'],
    },
    {
      id: 'alph-r5',
      arabic: 'غ = gh (Ghayn)',
      latin: 'gh — R grasseyé',
      phonetic: 'Comme le R parisien exagéré',
      french: 'ghali = cher, ghadwa = demain',
      language: 'darija',
      tags: ['alphabet', 'prononciation'],
    },
    {
      id: 'alph-r6',
      arabic: 'ⴰ ⴱ ⴳ ⴷ ⵔ ⵙ ⵜ ⵏ ⵎ ⵍ',
      latin: 'a b g d r s t n m l',
      phonetic: 'Lettres tifinagh de base',
      french: 'Tifinagh : l\'alphabet amazigh, se lit de gauche à droite',
      language: 'kabyle',
      tags: ['alphabet', 'tifinagh'],
    },
    {
      id: 'alph-r7',
      arabic: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
      latin: 'Tamazight',
      phonetic: 'ta-ma-ZIGHT',
      french: 'La langue amazighe — le nom de la langue berbère',
      language: 'kabyle',
      tags: ['alphabet', 'tifinagh', 'culture'],
    },
    {
      id: 'alph-r8',
      arabic: 'ب ت ج د ر ز س ش ف ك ل م ن',
      latin: 'b t j d r z s sh f k l m n',
      phonetic: 'Sons familiers pour un francophone',
      french: 'Lettres arabes avec des sons que tu connais déjà',
      language: 'darija',
      tags: ['alphabet', 'familier'],
    },
  ],
};
