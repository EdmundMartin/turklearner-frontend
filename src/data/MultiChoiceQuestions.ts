interface MultiChoiceQuestion {
  labelText: string
  prompt: string
  choices: string[] // Multiple choice options
  correctAnswer: string
}

const MultiChoiceQuestions: Map<string, MultiChoiceQuestion[]> = new Map<
  string,
  MultiChoiceQuestion[]
>([
  [
    'plurals', // Key for this category or section of questions
    [
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'şey',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'zaman',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'yer',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'gece',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'iş',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'para',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'sorun',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'tanrı',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'efendi',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'çocuk',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'yardım',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'gün',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'kadın',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'insan',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'yıl',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'yol',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'ateş',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'durum',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'fark',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'su',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'dünya',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'adı',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'hayat',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'karar',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'adım',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'göz',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'kan',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'ara',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'süre',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'adam',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'kız',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'anne',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'baba',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'bay',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'bayan',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'doktor',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'polis',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'araba',
        choices: ['lar', 'ler'],
        correctAnswer: 'lar',
      },
      {
        labelText: 'Pick the correct plural form for the above word',
        prompt: 'saat',
        choices: ['lar', 'ler'],
        correctAnswer: 'ler',
      },
    ],
  ],
])

MultiChoiceQuestions.set("question-tags", [
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu doğru ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Evet güzel ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "O çok sıcak ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu araba eski ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Yemek hazır ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu senin kitabın ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "O evde yalnız ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Saat dokuz ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bugün hava güzel ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu senin çantan ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Su temiz ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Evin önü boş ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu koltuk rahat ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Yemek sıcak ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu kalem kırmızı ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Kız mutlu ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Oğlum okulda ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Çay sıcak ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Annen evde ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu defter senin ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Film uzun ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Tatlı lezzetli ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Burası sessiz ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu yol doğru ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mu"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Ev temiz ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Elbise yeni ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mi"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu telefon kırık ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Bu kitap pahalı ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  },
  {
    labelText: "Pick the correct question word for the following sentence",
    prompt: "Yemek hazır ....?",
    choices: ["mi", "mu", "mü", "mı"],
    correctAnswer: "mı"
  }
]);


export default MultiChoiceQuestions
