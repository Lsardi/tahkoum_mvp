import type { Lesson } from '@/lib/types';

export const salutationsLesson: Lesson = {
  id: 'basics-salutations',
  moduleId: 'basics',
  title: 'Les salutations selon le contexte',
  description:
    'Apprenez à saluer correctement en darija et en kabyle, selon que vous parlez à un ami, un ancien, ou un inconnu.',
  level: 1,
  estimatedMinutes: 20,

  theory: {
    introduction: `En Algérie, les salutations ne sont pas qu'une formalité — c'est un art social. La façon dont tu salues quelqu'un révèle immédiatement si tu es "du coin" ou un étranger.

Les Algériens utilisent un mélange de salutations arabes, françaises et berbères selon le contexte, la région et la relation. Voici les règles essentielles :

**1. Le contexte change TOUT**
Un "salam" rapide à un ami ≠ une salutation formelle à un ancien.

**2. L'âge et le respect**
On ne salue pas un jeune comme on salue un vieux. Le respect des aînés est fondamental.

**3. Homme/Femme**
Entre hommes : poignée de main + bise possible entre proches.
Homme-femme : dépend de la relation et la famille. En cas de doute, pas de contact physique, juste un salut verbal.

**4. La durée compte**
En Algérie, on ne dit pas juste "bonjour". On demande des nouvelles, de la famille, de la santé... C'est un rituel.`,

    concepts: [
      {
        id: 'salam-basic',
        title: 'Le Salam - La base universelle',
        explanation: `"Salam" (سلام) est la salutation la plus courante. C'est un raccourci de "As-salamu alaykum" (que la paix soit sur vous). Tout le monde la comprend et l'utilise, musulman ou non.`,
        examples: [
          {
            id: 'salam-1',
            arabic: 'السلام عليكم',
            latin: 'Salam aleykoum',
            phonetic: 'sa-LAM a-ley-KOUM',
            french: 'Que la paix soit sur vous (formel)',
            language: 'darija',
            tags: ['salutation', 'formel', 'universel'],
          },
          {
            id: 'salam-2',
            arabic: 'وعليكم السلام',
            latin: 'Wa aleykoum essalam',
            phonetic: 'wa a-ley-KOUM es-sa-LAM',
            french: 'Et que la paix soit sur vous (réponse)',
            language: 'darija',
            tags: ['salutation', 'formel', 'réponse'],
          },
          {
            id: 'salam-3',
            arabic: 'سلام',
            latin: 'Salam',
            phonetic: 'sa-LAM',
            french: 'Salut (informel, courant)',
            language: 'darija',
            tags: ['salutation', 'informel'],
          },
        ],
        culturalNote:
          'En Algérie, quand tu entres dans un lieu (magasin, café, salle d\'attente), tu lances un "Salam" général à tout le monde. Ne pas saluer est considéré comme très malpoli.',
      },
      {
        id: 'how-are-you',
        title: 'Comment ça va ? - Les nouvelles',
        explanation: `Après le salam, on demande TOUJOURS des nouvelles. C'est pas optionnel — c'est le protocole social. Tu demandes même si tu t'en fiches. Plusieurs formules existent selon le dialecte.`,
        examples: [
          {
            id: 'wesh-1',
            arabic: 'واش راك ؟',
            latin: 'Wach rak?',
            phonetic: 'WACH rak ?',
            french: 'Comment tu vas ? (à un homme)',
            language: 'darija',
            tags: ['nouvelles', 'informel', 'masculin'],
          },
          {
            id: 'wesh-2',
            arabic: 'واش راكي ؟',
            latin: 'Wach raki?',
            phonetic: 'WACH ra-KI ?',
            french: 'Comment tu vas ? (à une femme)',
            language: 'darija',
            tags: ['nouvelles', 'informel', 'féminin'],
          },
          {
            id: 'labas-1',
            arabic: 'لاباس',
            latin: 'Labas',
            phonetic: 'la-BASS',
            french: 'Ça va (réponse courante)',
            language: 'darija',
            tags: ['nouvelles', 'réponse'],
          },
          {
            id: 'hamdoullah-1',
            arabic: 'الحمد لله',
            latin: 'El hamdoulilah',
            phonetic: 'el ham-dou-LI-lah',
            french: 'Dieu merci (réponse très courante)',
            language: 'darija',
            tags: ['nouvelles', 'réponse', 'religieux'],
          },
        ],
        culturalNote:
          '"Labas" vient du français "la base" (à l\'aise). "El hamdoulilah" est la réponse la plus courante — même les non-religieux l\'utilisent. C\'est culturel, pas forcément religieux.',
      },
      {
        id: 'kabyle-greetings',
        title: 'Salutations en Kabyle',
        explanation: `En Kabylie, les gens utilisent aussi "salam" mais ont leurs propres expressions. Les connaître montre un vrai respect pour la culture kabyle et impressionnera vos interlocuteurs.`,
        examples: [
          {
            id: 'azul-1',
            arabic: 'ⴰⵣⵓⵍ',
            latin: 'Azul',
            phonetic: 'a-ZOUL',
            french: 'Bonjour / Salut (kabyle)',
            language: 'kabyle',
            tags: ['salutation', 'kabyle', 'informel'],
          },
          {
            id: 'azul-2',
            arabic: 'ⴰⵣⵓⵍ ⴼⵍⵍⴰⵡⵏ',
            latin: 'Azul fellawen',
            phonetic: 'a-ZOUL fel-LA-wen',
            french: 'Bonjour à vous (kabyle, formel/pluriel)',
            language: 'kabyle',
            tags: ['salutation', 'kabyle', 'formel'],
          },
          {
            id: 'amek-1',
            arabic: 'ⴰⵎⴻⴽ',
            latin: 'Amek?',
            phonetic: 'a-MEK ?',
            french: 'Comment ? / Comment ça va ?',
            language: 'kabyle',
            tags: ['nouvelles', 'kabyle'],
          },
          {
            id: 'labas-kabyle',
            arabic: 'ⵍⴰⴱⴰⵙ',
            latin: 'Labas',
            phonetic: 'la-BASS',
            french: 'Ça va (même en kabyle !)',
            language: 'kabyle',
            tags: ['nouvelles', 'kabyle', 'réponse'],
          },
        ],
        culturalNote:
          '"Azul" est un mot amazigh pur qui signifie "salut". L\'utiliser en Kabylie montre que tu respectes l\'identité berbère. Beaucoup de Kabyles apprécient quand un étranger dit "Azul" au lieu de "Salam".',
      },
      {
        id: 'goodbye',
        title: 'Se dire au revoir',
        explanation: `Les au-revoir sont aussi importants que les salutations. Il y a souvent un mini-rituel : on souhaite le bien à l'autre personne.`,
        examples: [
          {
            id: 'bslama-1',
            arabic: 'بالسلامة',
            latin: 'Bslama',
            phonetic: 'b-SLA-ma',
            french: 'Au revoir (le plus courant)',
            language: 'darija',
            tags: ['au-revoir', 'courant'],
          },
          {
            id: 'allah-1',
            arabic: 'الله يحفظك',
            latin: 'Allah yahafdek',
            phonetic: 'AL-lah ya-HAF-dek',
            french: 'Que Dieu te protège (au revoir chaleureux)',
            language: 'darija',
            tags: ['au-revoir', 'chaleureux'],
          },
          {
            id: 'ar-tufat',
            arabic: 'ⴰⵔ ⵜⵓⴼⴰⵜ',
            latin: 'Ar tufat',
            phonetic: 'ar tou-FAT',
            french: 'À demain (kabyle)',
            language: 'kabyle',
            tags: ['au-revoir', 'kabyle'],
          },
        ],
        culturalNote:
          'En Algérie, les au-revoir prennent souvent plus longtemps que les bonjours ! On te dit "bslama", puis "Allah yahafdek", puis on reparle 5 minutes, puis re-"bslama"... C\'est normal !',
      },
    ],

    culturalContext: `**Le rituel de salutation complet en Algérie :**

1. **Salam / Azul** — la salutation de base
2. **Wach rak/raki ?** — Comment ça va ?
3. **El hamdoulilah / Labas** — Ça va bien
4. **Wach el khedma ?** — Et le travail ?
5. **Wach la famille ?** — Et la famille ?
6. **El hamdoulilah, kulshi bikhir** — Tout va bien

Ce rituel peut durer 2-3 minutes. Ne pas le suivre est considéré comme pressé ou impoli. Même si tu es pressé, prends au moins 30 secondes pour les étapes 1-3.

**Astuce de local :** Les jeunes entre eux vont souvent raccourcir : un simple "wach" ou même "wa" suffit entre potes.`,
  },

  practice: {
    guidedExercises: [
      {
        id: 'p1',
        type: 'multiple_choice',
        question: 'Comment salue-t-on quelqu\'un formellement en darija ?',
        options: ['Salam', 'Salam aleykoum', 'Wach rak', 'Bslama'],
        correctAnswer: 'Salam aleykoum',
        hint: 'C\'est la version complète et respectueuse du "salam"',
        explanation:
          '"Salam aleykoum" (السلام عليكم) est la forme complète et formelle. On l\'utilise avec les personnes âgées, en contexte professionnel, ou quand on entre dans un lieu.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'p2',
        type: 'multiple_choice',
        question:
          'Quelle est la réponse correcte à "Salam aleykoum" ?',
        options: [
          'Salam aleykoum',
          'Wa aleykoum essalam',
          'Labas',
          'El hamdoulilah',
        ],
        correctAnswer: 'Wa aleykoum essalam',
        hint: 'On "retourne" la salutation avec un mot supplémentaire au début',
        explanation:
          'La réponse traditionnelle inverse la formule : "Wa aleykoum essalam" = "Et sur vous la paix". C\'est important de répondre correctement, ça montre le respect.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'p3',
        type: 'fill_blank',
        question:
          'Pour demander "comment ça va ?" à un homme en darija, on dit : "_____ rak ?"',
        correctAnswer: 'Wach',
        acceptableAnswers: ['wach', 'Wesh', 'wesh', 'Wach'],
        hint: 'Ça commence par "W" et ressemble à un mot que tu connais peut-être déjà...',
        explanation:
          '"Wach rak?" (واش راك) est la formule standard. "Wach" signifie "comment/quoi". Tu as peut-être entendu "wesh" en France — c\'est le même mot !',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'p4',
        type: 'matching',
        question: 'Associe chaque expression à sa traduction :',
        questionPhrase: undefined,
        options: [
          'Salam aleykoum → Que la paix soit sur vous',
          'Wach rak → Comment ça va (homme)',
          'Labas → Ça va',
          'Bslama → Au revoir',
        ],
        correctAnswer: [
          'Salam aleykoum → Que la paix soit sur vous',
          'Wach rak → Comment ça va (homme)',
          'Labas → Ça va',
          'Bslama → Au revoir',
        ],
        difficulty: 1,
        xpReward: 20,
      },
      {
        id: 'p5',
        type: 'multiple_choice',
        question: 'Comment dit-on "Bonjour" en kabyle ?',
        options: ['Salam', 'Azul', 'Labas', 'Amek'],
        correctAnswer: 'Azul',
        hint: 'C\'est un mot amazigh pur, pas d\'origine arabe.',
        explanation:
          '"Azul" (ⴰⵣⵓⵍ) est la salutation kabyle/amazighe. L\'utiliser en Kabylie est très apprécié car ça montre le respect de l\'identité berbère.',
        difficulty: 1,
        xpReward: 10,
      },
      {
        id: 'p6',
        type: 'fill_blank',
        question:
          'Quand quelqu\'un demande "Wach rak?", la réponse la plus courante est "_____, el hamdoulilah".',
        correctAnswer: 'Labas',
        acceptableAnswers: ['labas', 'Labas', 'la bas'],
        hint: 'Ce mot ressemble à un mot français familier...',
        explanation:
          '"Labas, el hamdoulilah" est LA réponse standard. "Labas" = ça va, "el hamdoulilah" = grâce à Dieu. C\'est quasi automatique.',
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 'p7',
        type: 'multiple_choice',
        question:
          'Quelle situation est correcte ?',
        options: [
          'Tu entres dans un café et tu ne dis rien',
          'Tu entres dans un café et tu lances "Salam" à tout le monde',
          'Tu entres dans un café et tu salues seulement le serveur',
          'Tu entres dans un café et tu fais la bise à tout le monde',
        ],
        correctAnswer:
          'Tu entres dans un café et tu lances "Salam" à tout le monde',
        hint: 'En Algérie, on salue toujours en entrant quelque part.',
        explanation:
          'En Algérie, quand tu entres dans un lieu public (café, magasin, salle d\'attente), tu lances un "Salam" général. Ne pas le faire est considéré comme impoli.',
        difficulty: 1,
        xpReward: 10,
      },
    ],
  },

  assessment: {
    exercises: [
      {
        id: 't1',
        type: 'translation',
        question: 'Comment dit-on "Au revoir" en darija ?',
        correctAnswer: 'Bslama',
        acceptableAnswers: ['bslama', 'b\'slama', 'beslama', 'besslama'],
        difficulty: 1,
        xpReward: 15,
      },
      {
        id: 't2',
        type: 'multiple_choice',
        question:
          'Quelle est la forme féminine de "Wach rak?" ?',
        options: ['Wach raki', 'Wach rakha', 'Wach rakoum', 'Wach raka'],
        correctAnswer: 'Wach raki',
        difficulty: 2,
        xpReward: 15,
      },
      {
        id: 't3',
        type: 'fill_blank',
        question:
          'En kabyle, pour dire "Bonjour à vous" on dit "Azul _____".',
        correctAnswer: 'fellawen',
        acceptableAnswers: ['fellawen', 'fell-awen', 'fellawen'],
        difficulty: 2,
        xpReward: 20,
      },
      {
        id: 't4',
        type: 'free_response',
        question:
          'Tu arrives chez un ami algérien. Écris le dialogue de salutation complet (3 échanges minimum).',
        correctAnswer:
          'Salam aleykoum - Wa aleykoum essalam - Wach rak - Labas el hamdoulilah',
        acceptableAnswers: [
          'salam',
          'wach rak',
          'labas',
          'el hamdoulilah',
        ],
        difficulty: 3,
        xpReward: 30,
      },
      {
        id: 't5',
        type: 'multiple_choice',
        question:
          'Que signifie "El hamdoulilah" et quand l\'utilise-t-on ?',
        options: [
          'Merci - quand on remercie quelqu\'un',
          'Dieu merci - comme réponse standard à "comment ça va"',
          'S\'il vous plaît - pour demander quelque chose',
          'Bienvenue - quand quelqu\'un arrive',
        ],
        correctAnswer:
          'Dieu merci - comme réponse standard à "comment ça va"',
        difficulty: 1,
        xpReward: 15,
      },
    ],
    passingScore: 70,
  },

  reviewPhrases: [
    {
      id: 'salam-1',
      arabic: 'السلام عليكم',
      latin: 'Salam aleykoum',
      phonetic: 'sa-LAM a-ley-KOUM',
      french: 'Que la paix soit sur vous',
      language: 'darija',
      tags: ['salutation', 'formel'],
    },
    {
      id: 'salam-2',
      arabic: 'وعليكم السلام',
      latin: 'Wa aleykoum essalam',
      phonetic: 'wa a-ley-KOUM es-sa-LAM',
      french: 'Et que la paix soit sur vous (réponse)',
      language: 'darija',
      tags: ['salutation', 'formel', 'réponse'],
    },
    {
      id: 'wesh-1',
      arabic: 'واش راك ؟',
      latin: 'Wach rak?',
      phonetic: 'WACH rak ?',
      french: 'Comment tu vas ? (homme)',
      language: 'darija',
      tags: ['nouvelles', 'informel'],
    },
    {
      id: 'labas-1',
      arabic: 'لاباس',
      latin: 'Labas',
      phonetic: 'la-BASS',
      french: 'Ça va',
      language: 'darija',
      tags: ['nouvelles', 'réponse'],
    },
    {
      id: 'hamdoullah-1',
      arabic: 'الحمد لله',
      latin: 'El hamdoulilah',
      phonetic: 'el ham-dou-LI-lah',
      french: 'Dieu merci',
      language: 'darija',
      tags: ['réponse', 'courant'],
    },
    {
      id: 'azul-1',
      arabic: 'ⴰⵣⵓⵍ',
      latin: 'Azul',
      phonetic: 'a-ZOUL',
      french: 'Bonjour (kabyle)',
      language: 'kabyle',
      tags: ['salutation', 'kabyle'],
    },
    {
      id: 'bslama-1',
      arabic: 'بالسلامة',
      latin: 'Bslama',
      phonetic: 'b-SLA-ma',
      french: 'Au revoir',
      language: 'darija',
      tags: ['au-revoir'],
    },
  ],
};
