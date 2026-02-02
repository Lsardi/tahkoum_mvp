import type { Lesson } from '@/lib/types';

export const memesHumourLesson: Lesson = {
  id: 'advanced-memes-humour',
  moduleId: 'advanced',
  title: 'Memes, Humour & Expressions Cultes',
  description:
    "Comprends l'humour algérien, les expressions cultes, les proverbes et l'argot des jeunes pour parler comme un vrai local.",
  level: 3,
  estimatedMinutes: 30,

  theory: {
    introduction: `L'humour est au CŒUR de la culture algérienne. Les Algériens sont connus dans tout le Maghreb pour leur sens de l'humour — souvent noir, toujours piquant, et profondément lié au quotidien.

Si tu veux vraiment t'intégrer, il ne suffit pas de parler darija. Il faut comprendre **le tmeskhir** (التمسخير) — l'art algérien de se moquer gentiment, de rire de tout, et de transformer chaque galère en blague.

Les memes algériens circulent sur Facebook, Instagram et TikTok. Ils mélangent darija, français et Arabizi. Les comprendre, c'est comprendre l'âme algérienne.

**El Manchar** (المنشار) c'est le "Gorafi" algérien — un journal satirique en ligne qui parodie l'actualité. Ses titres sont devenus des memes à part entière.

**DZjoker** et d'autres humoristes YouTube ont popularisé des expressions qui sont devenues virales dans tout le pays.`,

    concepts: [
      {
        id: 'tmeskhir',
        title: "Tmeskhir — L'art de l'humour algérien",
        explanation: `Le "tmeskhir" (التمسخير) c'est l'art de la vanne, de la moquerie amicale. C'est fondamental dans les relations sociales en Algérie.

Entre amis, on se "tmeskhir" en permanence. C'est un signe d'affection — si un Algérien ne se moque PAS de toi, c'est qu'il ne t'aime pas encore assez !

**Règles du tmeskhir :**
1. Toujours entre proches — jamais avec un inconnu ou un supérieur
2. L'autre doit pouvoir répondre — c'est un ping-pong
3. On ne touche pas à la famille (sauf entre très proches)
4. On rit AVEC la personne, pas D'elle
5. Si quelqu'un dit "rak tmeskhir" = tu te moques de moi, ça peut être positif (drôle) ou négatif (tu vas trop loin)`,
        examples: [
          {
            id: 'tmk-1',
            arabic: 'راك تمسخير',
            latin: 'Rak tmeskhir',
            phonetic: 'RAK t-mes-KHIR',
            french: 'Tu te moques / Tu rigoles',
            language: 'darija',
            tags: ['humour', 'expression'],
          },
          {
            id: 'tmk-2',
            arabic: 'الدنيا تمسخير',
            latin: 'Eddenya tmeskhir',
            phonetic: 'ed-DEN-ya t-mes-KHIR',
            french: "La vie c'est de la rigolade",
            language: 'darija',
            tags: ['humour', 'philosophie'],
          },
          {
            id: 'tmk-3',
            arabic: 'والله غير ضحكتني',
            latin: 'Wallah ghir deh7aktni',
            phonetic: 'WAL-lah GHIR deh-HAK-tni',
            french: 'Je jure tu m\'as trop fait rire',
            language: 'darija',
            tags: ['humour', 'réaction'],
          },
          {
            id: 'tmk-4',
            arabic: 'ياو ماتقتلناش بالضحك',
            latin: 'Yaw matqetelnach bedde7k',
            phonetic: 'YAW mat-qet-el-NACH bed-DEHK',
            french: 'Arrête tu nous tues de rire',
            language: 'darija',
            tags: ['humour', 'exagération'],
          },
        ],
        culturalNote:
          "Le tmeskhir est un vrai talent social en Algérie. Les gens qui savent bien \"tmeskhir\" sont très appréciés. C'est comme être bon en stand-up, mais dans la vie de tous les jours. Si tu arrives à faire rire un groupe d'Algériens, tu es adopté.",
      },
      {
        id: 'expressions-cultes',
        title: 'Les Expressions Cultes du Quotidien',
        explanation: `Ces expressions sont utilisées des dizaines de fois par jour par les Algériens. Les connaître, c'est passer du statut de "touriste" à "il commence à capter" :

**"Ya kho"** (يا خو) — "mon frère/mec" — s'utilise avec tout le monde, même des inconnus
**"Sahbi"** (صاحبي) — "mon pote" — très affectueux
**"Hna haka"** (حنا هكا) — "c'est comme ça chez nous" — pour expliquer un truc algérien
**"Normal"** — dit avec un ton ironique, signifie "c'est n'importe quoi mais on s'y habitue"
**"Mkarfass"** (مكرفس) — "débordé/overwhelmed/en galère" — état permanent de l'Algérien moyen
**"Papicha"** (بابيشة) — "jolie fille/femme coquette" — du film algérien du même nom
**"Maqla"** (ماقلة) — "nourriture/bouffe" — littéralement "ce qui est frit" mais désigne tout repas
**"Hak"** (هاك) — "tiens/voilà" — pour donner quelque chose`,
        examples: [
          {
            id: 'exp-1',
            arabic: 'يا خو',
            latin: 'Ya kho',
            phonetic: 'ya KHO',
            french: 'Mec / Mon frère (passe-partout)',
            language: 'darija',
            tags: ['expression', 'argot', 'courant'],
          },
          {
            id: 'exp-2',
            arabic: 'صاحبي',
            latin: 'Sahbi',
            phonetic: 'SAH-bi',
            french: 'Mon pote / Mon ami',
            language: 'darija',
            tags: ['expression', 'argot', 'amitié'],
          },
          {
            id: 'exp-3',
            arabic: 'حنا هكا',
            latin: 'Hna haka',
            phonetic: 'HNA HA-ka',
            french: "C'est comme ça chez nous",
            language: 'darija',
            tags: ['expression', 'culture'],
          },
          {
            id: 'exp-4',
            arabic: 'مكرفس',
            latin: 'Mkarfass',
            phonetic: 'm-KAR-fass',
            french: 'Débordé / En galère / Overwhelmed',
            language: 'darija',
            tags: ['expression', 'argot', 'état'],
          },
          {
            id: 'exp-5',
            arabic: 'بابيشة',
            latin: 'Papicha',
            phonetic: 'pa-PI-cha',
            french: 'Jolie fille / Femme coquette',
            language: 'darija',
            tags: ['expression', 'argot', 'compliment'],
          },
          {
            id: 'exp-6',
            arabic: 'نورمال',
            latin: 'Normal (ironique)',
            phonetic: 'NOR-mal',
            french: '"Normal" — dit ironiquement = c\'est n\'importe quoi',
            language: 'darija',
            tags: ['expression', 'humour', 'ironie'],
          },
        ],
        culturalNote:
          "\"Normal\" est l'arme secrète de l'humour algérien. Quand un Algérien dit \"normal\" avec un certain ton, ça signifie exactement le contraire. Le bus est en retard de 2h ? \"Normal\". Le prix du café a doublé ? \"Normal\". C'est de l'ironie pure.",
      },
      {
        id: 'proverbes',
        title: 'Proverbes Algériens Célèbres',
        explanation: `Les proverbes (أمثال = amthal) sont omniprésents dans la conversation algérienne. Les anciens les sortent tout le temps, et les jeunes les connaissent aussi. En placer un au bon moment = respect immédiat.

Les proverbes reflètent la philosophie algérienne : pragmatisme, acceptation du destin, importance de la famille, méfiance prudente, et toujours une pointe d'humour.`,
        examples: [
          {
            id: 'prv-1',
            arabic: 'اللي فات مات',
            latin: 'Elli fat mat',
            phonetic: 'EL-li FAT MAT',
            french: 'Ce qui est passé est mort (= tourne la page)',
            language: 'darija',
            tags: ['proverbe', 'philosophie'],
          },
          {
            id: 'prv-2',
            arabic: 'المكتوب',
            latin: 'El mektoub',
            phonetic: 'el mek-TOUB',
            french: "C'est le destin / C'était écrit",
            language: 'darija',
            tags: ['proverbe', 'destin'],
          },
          {
            id: 'prv-3',
            arabic: 'كل واحد و حالو',
            latin: 'Koul wahd w halo',
            phonetic: 'KOUL WAH-d ou HA-lou',
            french: 'Chacun ses affaires / Mêle-toi de tes oignons',
            language: 'darija',
            tags: ['proverbe', 'sagesse'],
          },
          {
            id: 'prv-4',
            arabic: 'الدنيا لهوة',
            latin: 'Eddenya lahwa',
            phonetic: 'ed-DEN-ya LAH-wa',
            french: 'La vie est un jeu / Rien n\'est grave',
            language: 'darija',
            tags: ['proverbe', 'philosophie'],
          },
          {
            id: 'prv-5',
            arabic: 'اللي ما عندو الشيب عندو لعيب',
            latin: 'Elli ma 3andou echib 3andou l3ib',
            phonetic: 'EL-li ma AN-dou e-CHIB AN-dou LAIB',
            french: "Celui qui n'a pas les cheveux blancs a des défauts (= respecte les anciens)",
            language: 'darija',
            tags: ['proverbe', 'respect'],
          },
          {
            id: 'prv-6',
            arabic: 'يد وحدة ما تصفق',
            latin: 'Yed wahda matseffe9',
            phonetic: 'YED WAH-da mat-sef-FEQ',
            french: "Une seule main n'applaudit pas (= il faut s'entraider)",
            language: 'darija',
            tags: ['proverbe', 'solidarité'],
          },
        ],
        culturalNote:
          "Quand un vieil Algérien commence par \"kima galouna el kbar...\" (comme disaient nos anciens), prépare-toi à recevoir un proverbe. Écoute bien — c'est un signe de respect qu'il partage cette sagesse avec toi.",
      },
      {
        id: 'argot-jeunes',
        title: "L'Argot des Jeunes & la Culture Internet DZ",
        explanation: `Les jeunes Algériens ont leur propre vocabulaire, fortement influencé par le français, l'anglais et la culture internet.

**Expressions incontournables :**
- **"Bzaf / Bezaf"** (بزاف) — "trop/beaucoup" — le mot le plus algérien qui existe
- **"Ghaya"** (غاية) — "super/cool/excellent"
- **"Hatchi"** (هاتشي) — "truc/chose" (vient de "هاد الشي" = cette chose)
- **"Wesh"** (واش) — "quoi/comment" — oui, c'est le mot que les Français ont emprunté !
- **"Kirakum"** — "ça va" (contraction de "ki rakoum")

**Références culturelles :**
- **El Manchar** (المنشار) — Le journal satirique algérien en ligne, comme Le Gorafi. Ses titres absurdes sont partagés des millions de fois.
- **DZjoker** — Le YouTuber humoriste algérien le plus connu, spécialisé dans les caméras cachées et les pranks.
- **"Phrases hitlériennes"** — Un meme viral où des scènes du film "La Chute" sont sous-titrées en darija avec des situations algériennes.`,
        examples: [
          {
            id: 'arg-1',
            arabic: 'بزاف',
            latin: 'Bzaf / Bezaf',
            phonetic: 'b-ZAF',
            french: 'Trop / Beaucoup (LE mot algérien)',
            language: 'darija',
            tags: ['argot', 'jeunes', 'essentiel'],
          },
          {
            id: 'arg-2',
            arabic: 'غاية',
            latin: 'Ghaya',
            phonetic: 'GHA-ya',
            french: 'Super / Cool / Excellent',
            language: 'darija',
            tags: ['argot', 'jeunes', 'positif'],
          },
          {
            id: 'arg-3',
            arabic: 'هاتشي',
            latin: 'Hatchi',
            phonetic: 'HAT-chi',
            french: 'Truc / Chose / Le machin',
            language: 'darija',
            tags: ['argot', 'jeunes', 'courant'],
          },
          {
            id: 'arg-4',
            arabic: 'والله',
            latin: 'Wallah',
            phonetic: 'WAL-lah',
            french: 'Je jure (utilisé 100 fois par jour)',
            language: 'darija',
            tags: ['argot', 'jeunes', 'serment'],
          },
          {
            id: 'arg-5',
            arabic: 'واش من هدرة',
            latin: 'Wach men hedra',
            phonetic: 'WACH men HED-ra',
            french: "C'est quoi ces bêtises / N'importe quoi",
            language: 'darija',
            tags: ['argot', 'jeunes', 'réaction'],
          },
        ],
        culturalNote:
          "\"Bzaf\" est tellement algérien que les Algériens en France l'utilisent en pleine phrase française : \"il y avait bzaf de monde\". Si tu commences à dire \"bzaf\" naturellement, félicitations, tu es en voie d'intégration !",
      },
      {
        id: 'kabyle-humour',
        title: 'Expressions Kabyles Populaires & Humour',
        explanation: `Les Kabyles ont aussi leurs expressions cultes, leur humour et leurs proverbes. L'humour kabyle est souvent lié à la vie villageoise, aux relations familiales et à la rivalité amicale entre villages.

Les proverbes kabyles (inzan) sont une tradition orale riche. Les anciens les utilisent constamment dans la conversation.`,
        examples: [
          {
            id: 'kab-1',
            arabic: 'ⴰⵢⴻⵏ',
            latin: 'Ayen',
            phonetic: 'A-yen',
            french: "Rien / Rien du tout / C'est rien",
            language: 'kabyle',
            tags: ['expression', 'kabyle', 'courant'],
          },
          {
            id: 'kab-2',
            arabic: 'ⴰⵎⴻⴽ ⵉ ⵜⴻⵏⵏⵉⴹ',
            latin: 'Amek i tenniḍ?',
            phonetic: 'a-MEK i ten-NID',
            french: "Comment t'as dit ? / Répète ?",
            language: 'kabyle',
            tags: ['expression', 'kabyle', 'conversation'],
          },
          {
            id: 'kab-3',
            arabic: 'ⵓⵔ ⵜⵜⵅⵎⵎⵉⵎ ⴰⵔⴰ',
            latin: 'Ur texxmimim ara',
            phonetic: 'our tekh-MI-mim A-ra',
            french: "T'inquiète pas / Te prends pas la tête",
            language: 'kabyle',
            tags: ['expression', 'kabyle', 'réconfort'],
          },
          {
            id: 'kab-4',
            arabic: 'ⵡⵉⵏ ⵢⴻⵣⵔⴰⵏ ⴰⵢ ⴷ-ⵢⴻⵜⵜⴰⵡⵉⵏ',
            latin: 'Win yezran ay d-yettawin',
            phonetic: 'WIN yez-RAN ay d-yet-TA-win',
            french: 'Qui sait ce que l\'avenir réserve (proverbe)',
            language: 'kabyle',
            tags: ['proverbe', 'kabyle', 'sagesse'],
          },
          {
            id: 'kab-5',
            arabic: 'ⴰⴳⵍⵉⴷ ⵏ ⵜⴰⴷⴷⴰⵔⵜ-ⵉⵙ',
            latin: 'Agelid n taddart-is',
            phonetic: 'a-gue-LID n tad-DART-is',
            french: 'Roi de son village (= se prendre pour un chef)',
            language: 'kabyle',
            tags: ['proverbe', 'kabyle', 'humour'],
          },
        ],
        culturalNote:
          "En Kabylie, l'humour est aussi une forme de résistance. Pendant les périodes difficiles, les Kabyles ont toujours utilisé l'humour et la satire pour exprimer leur mécontentement. Les chansons de Matoub Lounès mélangent souvent humour mordant et critique sociale.",
      },
    ],

    culturalContext: `**L'humour algérien en résumé :**

1. **Le tmeskhir** — L'art de la vanne entre amis, signe d'affection
2. **L'auto-dérision** — Les Algériens rient énormément d'eux-mêmes
3. **L'ironie** — "Normal" est le mot le plus ironique de la darija
4. **Les proverbes** — La sagesse populaire, toujours avec une pointe d'humour
5. **Les memes** — Fusion de darija, français, Arabizi et culture internet

**Les sujets tabous en humour :**
- La religion (sauf entre très proches, et avec subtilité)
- La mère de quelqu'un (c'est la ligne rouge, même entre potes)
- Les tragédies nationales (décennie noire)

**Le test ultime d'intégration :**
Si tu fais rire un Algérien avec une blague en darija, ou si tu places un proverbe au bon moment, tu es officiellement adopté. "Wlid el bled" (fils du pays) — même si tu es étranger.`,
  },

  practice: {
    guidedExercises: [
      {
        id: 'mh-p1',
        type: 'multiple_choice',
        question: 'Que signifie "tmeskhir" ?',
        options: [
          'La cuisine algérienne',
          "L'art de la vanne/moquerie amicale",
          'Un type de danse',
          'Un plat traditionnel',
        ],
        correctAnswer: "L'art de la vanne/moquerie amicale",
        hint: "C'est lié à l'humour et aux relations sociales.",
        explanation:
          "Le \"tmeskhir\" est l'art algérien de la vanne amicale. C'est un signe d'affection entre amis — si on se moque de toi, c'est qu'on t'aime !",
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'mh-p2',
        type: 'multiple_choice',
        question: 'Que signifie "bzaf" ?',
        options: ['Peu', 'Rien', 'Trop / Beaucoup', 'Jamais'],
        correctAnswer: 'Trop / Beaucoup',
        hint: 'C\'est LE mot le plus algérien qui existe.',
        explanation:
          '"Bzaf" (بزاف) signifie "trop/beaucoup". C\'est probablement le mot darija le plus utilisé. "Ghali bzaf" = trop cher, "gens bzaf" = beaucoup de monde.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'mh-p3',
        type: 'fill_blank',
        question:
          'Complète ce proverbe : "_____ fat mat" (Ce qui est passé est mort).',
        correctAnswer: 'Elli',
        acceptableAnswers: ['elli', 'Elli', 'eli', 'Li'],
        hint: '"Elli" signifie "celui qui" ou "ce qui".',
        explanation:
          '"Elli fat mat" (اللي فات مات) = "Ce qui est passé est mort". C\'est le proverbe algérien par excellence pour dire "tourne la page".',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'mh-p4',
        type: 'multiple_choice',
        question: 'Si un ami algérien dit "Normal" avec un ton ironique, il veut dire :',
        options: [
          "C'est tout à fait normal",
          "C'est n'importe quoi mais on s'y est habitué",
          "C'est très bien",
          'Il est content',
        ],
        correctAnswer: "C'est n'importe quoi mais on s'y est habitué",
        hint: "L'ironie est l'arme secrète de l'humour algérien.",
        explanation:
          '"Normal" dit ironiquement est une spécialité algérienne. Ça exprime la résignation amusée face à l\'absurde du quotidien. Le bus a 2h de retard ? "Normal".',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'mh-p5',
        type: 'fill_blank',
        question: 'Comment dit-on "mon pote" en darija ? "____"',
        correctAnswer: 'Sahbi',
        acceptableAnswers: ['sahbi', 'Sahbi', 'sa7bi'],
        hint: 'Ça vient du mot arabe "sahib" (compagnon).',
        explanation:
          '"Sahbi" (صاحبي) = "mon pote/mon ami". C\'est très affectueux. "Ya sahbi" s\'utilise aussi pour exprimer la surprise ou l\'exaspération.',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'mh-p6',
        type: 'multiple_choice',
        question: 'Qu\'est-ce que "El Manchar" ?',
        options: [
          'Un plat algérien',
          'Un journal satirique algérien (comme Le Gorafi)',
          'Un chanteur célèbre',
          'Une fête traditionnelle',
        ],
        correctAnswer: 'Un journal satirique algérien (comme Le Gorafi)',
        hint: 'C\'est sur internet et ça fait rire tout le pays.',
        explanation:
          'El Manchar (المنشار, "la scie") est un site satirique algérien qui parodie l\'actualité avec des titres absurdes. Ses articles sont massivement partagés sur les réseaux sociaux.',
        difficulty: 2,
        xpReward: 10,
      },
      {
        id: 'mh-p7',
        type: 'free_response',
        question:
          'Tu es au café et la commande met 45 minutes à arriver. Ton ami algérien te regarde avec un sourire. Que dit-il probablement ? (Utilise une expression vue dans la leçon)',
        correctAnswer: 'Normal',
        acceptableAnswers: ['normal', 'Normal', 'hna haka', 'eddenya tmeskhir', 'el mektoub'],
        explanation:
          'La réponse la plus probable est "Normal" (avec le ton ironique) ou "Hna haka" (c\'est comme ça chez nous). C\'est de l\'ironie algérienne pure — rire de la situation plutôt que de s\'énerver.',
        difficulty: 2,
        xpReward: 20,
      },
    ],
  },

  assessment: {
    exercises: [
      {
        id: 'mh-t1',
        type: 'multiple_choice',
        question: 'Quel est le sujet TABOU absolu en humour algérien ?',
        options: [
          'La politique',
          'La mère de quelqu\'un',
          'Le football',
          'La nourriture',
        ],
        correctAnswer: 'La mère de quelqu\'un',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'mh-t2',
        type: 'fill_blank',
        question: 'Complète le proverbe : "Koul wahd w ____" (Chacun ses affaires).',
        correctAnswer: 'halo',
        acceptableAnswers: ['halo', 'halou', '7alou', '7alo'],
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 'mh-t3',
        type: 'multiple_choice',
        question: 'Que signifie "mkarfass" ?',
        options: [
          'Content',
          'Fatigué',
          'Débordé / En galère',
          'En colère',
        ],
        correctAnswer: 'Débordé / En galère',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'mh-t4',
        type: 'free_response',
        question:
          'Cite 3 expressions ou mots d\'argot algérien vus dans cette leçon et donne leur traduction.',
        correctAnswer:
          'ya kho = mec, bzaf = trop, sahbi = mon pote',
        acceptableAnswers: ['ya kho', 'bzaf', 'sahbi', 'ghaya', 'wallah', 'hatchi', 'mkarfass', 'papicha', 'hna haka'],
        difficulty: 2,
        xpReward: 25,
      },
      {
        id: 'mh-t5',
        type: 'multiple_choice',
        question: 'Que signifie le proverbe "Yed wahda matseffe9" ?',
        options: [
          'Il faut manger avec une seule main',
          'Une seule main n\'applaudit pas (= il faut s\'entraider)',
          'Une main vaut mieux que deux',
          'On frappe d\'une seule main',
        ],
        correctAnswer: 'Une seule main n\'applaudit pas (= il faut s\'entraider)',
        difficulty: 2,
        xpReward: 15,
      },
    ],
    passingScore: 70,
  },

  reviewPhrases: [
    {
      id: 'mh-r1',
      arabic: 'راك تمسخير',
      latin: 'Rak tmeskhir',
      phonetic: 'RAK t-mes-KHIR',
      french: 'Tu te moques / Tu rigoles',
      language: 'darija',
      tags: ['humour'],
    },
    {
      id: 'mh-r2',
      arabic: 'بزاف',
      latin: 'Bzaf',
      phonetic: 'b-ZAF',
      french: 'Trop / Beaucoup',
      language: 'darija',
      tags: ['argot', 'essentiel'],
    },
    {
      id: 'mh-r3',
      arabic: 'يا خو',
      latin: 'Ya kho',
      phonetic: 'ya KHO',
      french: 'Mec / Mon frère',
      language: 'darija',
      tags: ['argot', 'courant'],
    },
    {
      id: 'mh-r4',
      arabic: 'اللي فات مات',
      latin: 'Elli fat mat',
      phonetic: 'EL-li FAT MAT',
      french: 'Ce qui est passé est mort',
      language: 'darija',
      tags: ['proverbe'],
    },
    {
      id: 'mh-r5',
      arabic: 'المكتوب',
      latin: 'El mektoub',
      phonetic: 'el mek-TOUB',
      french: "C'est le destin",
      language: 'darija',
      tags: ['proverbe'],
    },
    {
      id: 'mh-r6',
      arabic: 'صاحبي',
      latin: 'Sahbi',
      phonetic: 'SAH-bi',
      french: 'Mon pote',
      language: 'darija',
      tags: ['argot', 'amitié'],
    },
    {
      id: 'mh-r7',
      arabic: 'غاية',
      latin: 'Ghaya',
      phonetic: 'GHA-ya',
      french: 'Super / Cool',
      language: 'darija',
      tags: ['argot', 'positif'],
    },
    {
      id: 'mh-r8',
      arabic: 'حنا هكا',
      latin: 'Hna haka',
      phonetic: 'HNA HA-ka',
      french: "C'est comme ça chez nous",
      language: 'darija',
      tags: ['expression', 'culture'],
    },
    {
      id: 'mh-r9',
      arabic: 'ⴰⵢⴻⵏ',
      latin: 'Ayen',
      phonetic: 'A-yen',
      french: "Rien / C'est rien",
      language: 'kabyle',
      tags: ['expression', 'kabyle'],
    },
    {
      id: 'mh-r10',
      arabic: 'والله',
      latin: 'Wallah',
      phonetic: 'WAL-lah',
      french: 'Je jure',
      language: 'darija',
      tags: ['argot', 'courant'],
    },
  ],
};
