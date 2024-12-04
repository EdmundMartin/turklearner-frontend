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

export default MultiChoiceQuestions
