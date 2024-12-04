export interface ConjugationQuestion {
  labelText: string
  prompt: string
  correctAnswer: string
}

const ConjunctionQuestions: Map<string, ConjugationQuestion[]> = new Map<
  string,
  ConjugationQuestion[]
>([
  [
    'common-verbs',
    [
      // "etmek" conjugations
      {
        labelText: 'ben',
        prompt: 'etmek in the ıyor present',
        correctAnswer: 'ediyorum',
      },
      {
        labelText: 'sen',
        prompt: 'etmek in the ıyor present',
        correctAnswer: 'ediyorsun',
      },
      {
        labelText: 'o',
        prompt: 'etmek in the ıyor present',
        correctAnswer: 'ediyor',
      },
      {
        labelText: 'biz',
        prompt: 'etmek in the ıyor present',
        correctAnswer: 'ediyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'etmek in the ıyor present',
        correctAnswer: 'ediyorsunuz',
      },

      // "almak" conjugations
      {
        labelText: 'ben',
        prompt: 'almak in the ıyor present',
        correctAnswer: 'alıyorsun',
      },
      {
        labelText: 'sen',
        prompt: 'almak in the ıyor present',
        correctAnswer: 'alıyorum',
      },
      {
        labelText: 'o',
        prompt: 'almak in the ıyor present',
        correctAnswer: 'alıyor',
      },
      {
        labelText: 'biz',
        prompt: 'almak in the ıyor present',
        correctAnswer: 'alıyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'almak in the ıyor present',
        correctAnswer: 'alıyorsunuz',
      },

      // "gelmek" conjugations
      {
        labelText: 'ben',
        prompt: 'gelmek in the ıyor present',
        correctAnswer: 'geliyorum',
      },
      {
        labelText: 'sen',
        prompt: 'gelmek in the ıyor present',
        correctAnswer: 'geliyorsun',
      },
      {
        labelText: 'o',
        prompt: 'gelmek in the ıyor present',
        correctAnswer: 'geliyor',
      },
      {
        labelText: 'biz',
        prompt: 'gelmek in the ıyor present',
        correctAnswer: 'geliyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'gelmek in the ıyor present',
        correctAnswer: 'geliyorsunuz',
      },

      // "olmak" conjugations
      {
        labelText: 'ben',
        prompt: 'olmak in the ıyor present',
        correctAnswer: 'oluyorum',
      },
      {
        labelText: 'sen',
        prompt: 'olmak in the ıyor present',
        correctAnswer: 'oluyorsun',
      },
      {
        labelText: 'o',
        prompt: 'olmak in the ıyor present',
        correctAnswer: 'oluyor',
      },
      {
        labelText: 'biz',
        prompt: 'olmak in the ıyor present',
        correctAnswer: 'oluyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'olmak in the ıyor present',
        correctAnswer: 'oluyorsunuz',
      },

      // "gitmek" conjugations
      {
        labelText: 'ben',
        prompt: 'gitmek in the ıyor present',
        correctAnswer: 'gidiyorum',
      },
      {
        labelText: 'sen',
        prompt: 'gitmek in the ıyor present',
        correctAnswer: 'gidiyorsun',
      },
      {
        labelText: 'o',
        prompt: 'gitmek in the ıyor present',
        correctAnswer: 'gidiyor',
      },
      {
        labelText: 'biz',
        prompt: 'gitmek in the ıyor present',
        correctAnswer: 'gidiyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'gitmek in the ıyor present',
        correctAnswer: 'gidiyorsunuz',
      },

      // "yapmak" conjugations
      {
        labelText: 'ben',
        prompt: 'yapmak in the ıyor present',
        correctAnswer: 'yapıyorum',
      },
      {
        labelText: 'sen',
        prompt: 'yapmak in the ıyor present',
        correctAnswer: 'yapıyorsun',
      },
      {
        labelText: 'o',
        prompt: 'yapmak in the ıyor present',
        correctAnswer: 'yapıyor',
      },
      {
        labelText: 'biz',
        prompt: 'yapmak in the ıyor present',
        correctAnswer: 'yapıyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'yapmak in the ıyor present',
        correctAnswer: 'yapıyorsunuz',
      },

      // "istemek" conjugations
      {
        labelText: 'ben',
        prompt: 'istemek in the ıyor present',
        correctAnswer: 'istiyorum',
      },
      {
        labelText: 'sen',
        prompt: 'istemek in the ıyor present',
        correctAnswer: 'istiyorsun',
      },
      {
        labelText: 'o',
        prompt: 'istemek in the ıyor present',
        correctAnswer: 'istiyor',
      },
      {
        labelText: 'biz',
        prompt: 'istemek in the ıyor present',
        correctAnswer: 'istiyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'istemek in the ıyor present',
        correctAnswer: 'istiyorsunuz',
      },

      // "bakmak" conjugations
      {
        labelText: 'ben',
        prompt: 'bakmak in the ıyor present',
        correctAnswer: 'bakıyorum',
      },
      {
        labelText: 'sen',
        prompt: 'bakmak in the ıyor present',
        correctAnswer: 'bakıyorsun',
      },
      {
        labelText: 'o',
        prompt: 'bakmak in the ıyor present',
        correctAnswer: 'bakıyor',
      },
      {
        labelText: 'biz',
        prompt: 'bakmak in the ıyor present',
        correctAnswer: 'bakıyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'bakmak in the ıyor present',
        correctAnswer: 'bakıyorsunuz',
      },

      // "görmek" conjugations
      {
        labelText: 'ben',
        prompt: 'görmek in the ıyor present',
        correctAnswer: 'görüyorum',
      },
      {
        labelText: 'sen',
        prompt: 'görmek in the ıyor present',
        correctAnswer: 'görüyorsun',
      },
      {
        labelText: 'o',
        prompt: 'görmek in the ıyor present',
        correctAnswer: 'görüyor',
      },
      {
        labelText: 'biz',
        prompt: 'görmek in the ıyor present',
        correctAnswer: 'görüyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'görmek in the ıyor present',
        correctAnswer: 'görüyorsunuz',
      },

      // "bilmek" conjugations
      {
        labelText: 'ben',
        prompt: 'bilmek in the ıyor present',
        correctAnswer: 'biliyorum',
      },
      {
        labelText: 'sen',
        prompt: 'bilmek in the ıyor present',
        correctAnswer: 'biliyorsun',
      },
      {
        labelText: 'o',
        prompt: 'bilmek in the ıyor present',
        correctAnswer: 'biliyor',
      },
      {
        labelText: 'biz',
        prompt: 'bilmek in the ıyor present',
        correctAnswer: 'biliyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'bilmek in the ıyor present',
        correctAnswer: 'biliyorsunuz',
      },

      // "konuşmak" conjugations
      {
        labelText: 'ben',
        prompt: 'konuşmak in the ıyor present',
        correctAnswer: 'konuşuyorum',
      },
      {
        labelText: 'sen',
        prompt: 'konuşmak in the ıyor present',
        correctAnswer: 'konuşuyorsun',
      },
      {
        labelText: 'o',
        prompt: 'konuşmak in the ıyor present',
        correctAnswer: 'konuşuyor',
      },
      {
        labelText: 'biz',
        prompt: 'konuşmak in the ıyor present',
        correctAnswer: 'konuşuyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'konuşmak in the ıyor present',
        correctAnswer: 'konuşuyorsunuz',
      },

      // "çalışmak" conjugations
      {
        labelText: 'ben',
        prompt: 'çalışmak in the ıyor present',
        correctAnswer: 'çalışıyorum',
      },
      {
        labelText: 'sen',
        prompt: 'çalışmak in the ıyor present',
        correctAnswer: 'çalışıyorsun',
      },
      {
        labelText: 'o',
        prompt: 'çalışmak in the ıyor present',
        correctAnswer: 'çalışıyor',
      },
      {
        labelText: 'biz',
        prompt: 'çalışmak in the ıyor present',
        correctAnswer: 'çalışıyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'çalışmak in the ıyor present',
        correctAnswer: 'çalışıyorsunuz',
      },

      // "bulmak" conjugations
      {
        labelText: 'ben',
        prompt: 'bulmak in the ıyor present',
        correctAnswer: 'buluyorum',
      },
      {
        labelText: 'sen',
        prompt: 'bulmak in the ıyor present',
        correctAnswer: 'buluyorsun',
      },
      {
        labelText: 'o',
        prompt: 'bulmak in the ıyor present',
        correctAnswer: 'buluyor',
      },
      {
        labelText: 'biz',
        prompt: 'bulmak in the ıyor present',
        correctAnswer: 'buluyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'bulmak in the ıyor present',
        correctAnswer: 'buluyorsunuz',
      },

      // "yemek" conjugations
      {
        labelText: 'ben',
        prompt: 'yemek in the ıyor present',
        correctAnswer: 'yiyorum',
      },
      {
        labelText: 'sen',
        prompt: 'yemek in the ıyor present',
        correctAnswer: 'yiyorsun',
      },
      {
        labelText: 'o',
        prompt: 'yemek in the ıyor present',
        correctAnswer: 'yiyor',
      },
      {
        labelText: 'biz',
        prompt: 'yemek in the ıyor present',
        correctAnswer: 'yiyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'yemek in the ıyor present',
        correctAnswer: 'yiyorsunuz',
      },

      // "girmek" conjugations
      {
        labelText: 'ben',
        prompt: 'girmek in the ıyor present',
        correctAnswer: 'giriyorum',
      },
      {
        labelText: 'sen',
        prompt: 'girmek in the ıyor present',
        correctAnswer: 'giriyorsun',
      },
      {
        labelText: 'o',
        prompt: 'girmek in the ıyor present',
        correctAnswer: 'giriyor',
      },
      {
        labelText: 'biz',
        prompt: 'girmek in the ıyor present',
        correctAnswer: 'giriyoruz',
      },
      {
        labelText: 'siz',
        prompt: 'girmek in the ıyor present',
        correctAnswer: 'giriyorsunuz',
      },
    ],
  ],
])

export default ConjunctionQuestions
