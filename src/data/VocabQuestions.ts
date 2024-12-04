interface VocabQuestion {
  Word: string
  Choices: string[]
  Definition: string
}

const VocabQuestions: Map<string, VocabQuestion[]> = new Map<
  string,
  VocabQuestion[]
>()

VocabQuestions.set('vocab-one', [
  {
    Word: 'bir',
    Definition: 'One',
    Choices: ['My/Mine', 'One', 'Me (object)', 'I'],
  },
  { Word: 'bu', Definition: 'This', Choices: ['Not', 'This', 'Here'] },
  {
    Word: 'ne',
    Definition: 'What',
    Choices: ['Question particle', 'Your/Yours', 'What', 'To me'],
  },
  {
    Word: 've',
    Definition: 'And',
    Choices: ['Okay', 'You (object)', 'Like/As', 'And'],
  },
  { Word: 'için', Definition: 'For', Choices: ['For', 'Also', 'Why'] },
  {
    Word: 'mi',
    Definition: 'Question particle',
    Choices: ['After', 'Question particle', 'You', 'Are you?'],
  },
  {
    Word: 'de',
    Definition: 'Also',
    Choices: ['Thing', 'To you', 'How', 'Also'],
  },
  {
    Word: 'o',
    Definition: 'That/He/She/It',
    Choices: ['For', 'That/He/She/It', 'Also'],
  },
  {
    Word: 'ben',
    Definition: 'I',
    Choices: ['Question particle', 'Are you?', 'I'],
  },
  { Word: 'çok', Definition: 'Very/Much', Choices: ['Very/Much', 'Most'] },
  { Word: 'ama', Definition: 'But', Choices: ['But', 'Your/Yours', 'Here'] },
  { Word: 'evet', Definition: 'Yes', Choices: ['Yes', 'Only/Just', 'Like/As'] },
  {
    Word: 'var',
    Definition: 'Exists/There is',
    Choices: ['No', 'I', 'Yes', 'Exists/There is'],
  },
  {
    Word: 'da',
    Definition: 'Too/Also',
    Choices: ['Your/Yours', 'You (object)', 'Too/Also'],
  },
  {
    Word: 'mı',
    Definition: 'Question particle',
    Choices: ['Ever/Never', 'My/Mine', 'Question particle', 'Too/Also'],
  },
  { Word: 'değil', Definition: 'Not', Choices: ['Question particle', 'Not'] },
  {
    Word: 'şey',
    Definition: 'Thing',
    Choices: ['Thing', 'To me', 'You (object)', 'One'],
  },
  {
    Word: 'hayır',
    Definition: 'No',
    Choices: ['How', 'Very/Much', 'Too/Also', 'No'],
  },
  { Word: 'daha', Definition: 'More', Choices: ['More', 'Here', 'Most'] },
  {
    Word: 'sen',
    Definition: 'You',
    Choices: ['But', 'That it is/That you are', 'Only/Just', 'You'],
  },
  {
    Word: 'kadar',
    Definition: 'As much as',
    Choices: ['To you', 'For', 'As much as', 'And'],
  },
  {
    Word: 'bana',
    Definition: 'To me',
    Choices: ['This (object)', 'To me', 'This', 'Every'],
  },
  {
    Word: 'gibi',
    Definition: 'Like/As',
    Choices: ['After', 'Like/As', 'Exists/There is'],
  },
  {
    Word: 'bunu',
    Definition: 'This (object)',
    Choices: ['After', 'Question particle', 'This (object)'],
  },
  {
    Word: 'yok',
    Definition: 'Does not exist',
    Choices: ['Does not exist', 'My/Mine', 'Why'],
  },
  {
    Word: 'onu',
    Definition: 'Him/Her/It (object)',
    Choices: ['Thing', 'More', 'Him/Her/It (object)'],
  },
  { Word: 'iyi', Definition: 'Good', Choices: ['Good', 'Or', 'Why'] },
  {
    Word: 'tamam',
    Definition: 'Okay',
    Choices: ['Not', 'Okay', 'Me (object)'],
  },
  {
    Word: 'beni',
    Definition: 'Me (object)',
    Choices: ['Good', 'Me (object)', 'That (nearby)'],
  },
  {
    Word: 'seni',
    Definition: 'You (object)',
    Choices: ['More', 'You (object)'],
  },
  {
    Word: 'benim',
    Definition: 'My/Mine',
    Choices: ['Question particle', 'Okay', 'This', 'My/Mine'],
  },
  {
    Word: 'her',
    Definition: 'Every',
    Choices: ['My/Mine', 'Like that/So', 'Every'],
  },
  {
    Word: 'sana',
    Definition: 'To you',
    Choices: ['To you', 'Good', 'That/Which', 'Very/Much'],
  },
  {
    Word: 'ki',
    Definition: 'That/Which',
    Choices: ['More', 'To me', 'That/Which', 'Only/Just'],
  },
  {
    Word: 'neden',
    Definition: 'Why',
    Choices: ['Your/Yours', 'You', 'Me (object)', 'Why'],
  },
  { Word: 'ya', Definition: 'Or', Choices: ['Or', 'Like/As'] },
  {
    Word: 'sadece',
    Definition: 'Only/Just',
    Choices: ['Not', 'Only/Just', 'Also'],
  },
  { Word: 'zaman', Definition: 'Time', Choices: ['Good', 'Time', 'Too/Also'] },
  {
    Word: 'senin',
    Definition: 'Your/Yours',
    Choices: ['Does not exist', 'Your/Yours', 'Why'],
  },
  {
    Word: 'burada',
    Definition: 'Here',
    Choices: ['Here', 'This (object)', 'Very/Much', 'And'],
  },
  {
    Word: 'olduğunu',
    Definition: 'That it is/That you are',
    Choices: [
      'Does not exist',
      'That it is/That you are',
      'Him/Her/It (object)',
      'Yes',
    ],
  },
  { Word: 'nasıl', Definition: 'How', Choices: ['How', 'Now', 'Yes', 'Also'] },
  {
    Word: 'hiç',
    Definition: 'Ever/Never',
    Choices: ['Ever/Never', 'Okay', 'Now'],
  },
  {
    Word: 'sonra',
    Definition: 'After',
    Choices: ['Not', 'After', 'Now', 'Like/As'],
  },
  {
    Word: 'şimdi',
    Definition: 'Now',
    Choices: ['Ever/Never', 'Time', 'One', 'Now'],
  },
  { Word: 'en', Definition: 'Most', Choices: ['But', 'Most', 'I', 'And'] },
  {
    Word: 'öyle',
    Definition: 'Like that/So',
    Choices: ['Does not exist', 'Ever/Never', 'Like that/So', 'What'],
  },
  {
    Word: 'mu',
    Definition: 'Question particle',
    Choices: ['Question particle', 'Time', 'Like that/So'],
  },
  {
    Word: 'şu',
    Definition: 'That (nearby)',
    Choices: ['Does not exist', 'To me', 'No', 'That (nearby)'],
  },
  {
    Word: 'misin',
    Definition: 'Are you?',
    Choices: ['Are you?', 'What', 'Exists/There is'],
  },
])

VocabQuestions.set('vocab-two', [
  {
    Word: 'önce',
    Definition: 'Before',
    Choices: ['I think', 'Before', 'Day', 'Anymore'],
  },
  {
    Word: 'biraz',
    Definition: 'A little',
    Choices: ['Look', 'A little', 'Happened'],
  },
  {
    Word: 'hadi',
    Definition: 'Come on',
    Choices: ['I know', 'None', 'Come on'],
  },
  {
    Word: 'güzel',
    Definition: 'Beautiful',
    Choices: ['Beautiful', 'Other', 'I don’t know', 'Please'],
  },
  {
    Word: 'musun',
    Definition: 'Are you?',
    Choices: ['I know', 'Alright', 'Are you?', 'Because'],
  },
  {
    Word: 'oldu',
    Definition: 'Happened',
    Choices: ['His/Her/Its', 'Happened', 'To here'],
  },
  {
    Word: 'yani',
    Definition: 'I mean',
    Choices: ['Are you?', 'I mean', 'Because', 'Maybe'],
  },
  {
    Word: 'ona',
    Definition: 'To him/her',
    Choices: ['Man', 'To him/her', 'I mean', 'Happened'],
  },
  {
    Word: 'böyle',
    Definition: 'Like this',
    Choices: ['Other', 'Like this', 'With', 'I want'],
  },
  {
    Word: 'İyi',
    Definition: 'Good',
    Choices: ['Mr.', 'Are you?', 'Good', 'Come on'],
  },
  {
    Word: 'onun',
    Definition: 'His/Her/Its',
    Choices: ['His/Her/Its', 'In', 'Really'],
  },
  {
    Word: 'bile',
    Definition: 'Even',
    Choices: ['A little', 'Alright', 'Even', 'Someone'],
  },
  {
    Word: 'lütfen',
    Definition: 'Please',
    Choices: ['His/Her/Its', 'Please', 'Happened'],
  },
  {
    Word: 'bak',
    Definition: 'Look',
    Choices: ['Beautiful', 'Look', 'To him/her', 'Only'],
  },
  {
    Word: 'eğer',
    Definition: 'If',
    Choices: ['A little', 'I mean', 'Correct', 'If'],
  },
  {
    Word: 'peki',
    Definition: 'Alright',
    Choices: ['Will be', 'Alright', 'Come on'],
  },
  {
    Word: 'çünkü',
    Definition: 'Because',
    Choices: ['Hey', 'Because', 'To say', 'Someone'],
  },
  {
    Word: 'artık',
    Definition: 'Anymore',
    Choices: ['I think', 'In', 'Like this', 'Anymore'],
  },
  {
    Word: 'gerçekten',
    Definition: 'Really',
    Choices: ['Who', 'Really', 'I want', 'Thanks'],
  },
  {
    Word: 'geri',
    Definition: 'Back',
    Choices: ['His/Her/Its', 'Back', 'Someone'],
  },
  {
    Word: 'biliyorum',
    Definition: 'I know',
    Choices: ['As', 'Even', 'None', 'I know'],
  },
  {
    Word: 'istiyorum',
    Definition: 'I want',
    Choices: ['I think', 'I want', 'Because', 'Day'],
  },
  { Word: 'kim', Definition: 'Who', Choices: ['Who', 'Of this', 'To say'] },
  {
    Word: 'başka',
    Definition: 'Other',
    Choices: ['All', 'Other', 'Of this', 'Come on'],
  },
  { Word: 'olarak', Definition: 'As', Choices: ['As', 'We', 'Before'] },
  { Word: 'belki', Definition: 'Maybe', Choices: ['In', 'I want', 'Maybe'] },
  { Word: 'tek', Definition: 'Only', Choices: ['Big', 'In', 'Only'] },
  { Word: 'doğru', Definition: 'Correct', Choices: ['We', 'Correct', 'Maybe'] },
  { Word: 'büyük', Definition: 'Big', Choices: ['Before', 'Big', 'Maybe'] },
  {
    Word: 'olan',
    Definition: 'That is',
    Choices: ['I want', 'With', 'To say', 'That is'],
  },
  { Word: 'biri', Definition: 'Someone', Choices: ['Someone', 'Thanks'] },
  {
    Word: 'bay',
    Definition: 'Mr.',
    Choices: ['Before', 'Mr.', 'Hey', 'Come on'],
  },
  {
    Word: 'buraya',
    Definition: 'To here',
    Choices: ['I think', 'Look', 'To here', 'Anymore'],
  },
  {
    Word: 'olur',
    Definition: 'It happens',
    Choices: ['A little', 'Please', 'It happens', 'Thanks'],
  },
  { Word: 'in', Definition: 'In', Choices: ['In', 'Of this', 'Of', 'To here'] },
  { Word: 'adam', Definition: 'Man', Choices: ['Man', 'Mr.', 'Hey', 'Really'] },
  {
    Word: 'ile',
    Definition: 'With',
    Choices: ['To him/her', 'Like this', 'With'],
  },
  {
    Word: 'olacak',
    Definition: 'Will be',
    Choices: ['Who', 'Will be', 'Thanks'],
  },
  { Word: 'hey', Definition: 'Hey', Choices: ['Alright', 'I mean', 'Hey'] },
  {
    Word: 'hiçbir',
    Definition: 'None',
    Choices: ['I want', 'None', 'Come on', 'That is'],
  },
  { Word: 'biz', Definition: 'We', Choices: ['In', 'We', 'Come on', 'If'] },
  {
    Word: 'demek',
    Definition: 'To say',
    Choices: ['All', 'Big', 'To say', 'Day'],
  },
  {
    Word: 'sanırım',
    Definition: 'I think',
    Choices: ['I think', 'Who', 'That is'],
  },
  {
    Word: 'yardım',
    Definition: 'Help',
    Choices: ['His/Her/Its', 'A little', 'Back', 'Help'],
  },
  {
    Word: 'ın',
    Definition: 'Of',
    Choices: ['Beautiful', 'Before', 'Of', 'It happens'],
  },
  {
    Word: 'bilmiyorum',
    Definition: 'I don’t know',
    Choices: ['Really', 'Come on', 'I don’t know'],
  },
  {
    Word: 'bunun',
    Definition: 'Of this',
    Choices: ['Of this', 'I don’t know', 'Day'],
  },
  {
    Word: 'teşekkürler',
    Definition: 'Thanks',
    Choices: ['Back', 'As', 'Thanks', 'Help'],
  },
  {
    Word: 'tüm',
    Definition: 'All',
    Choices: ['All', 'Mr.', 'Of this', 'Even'],
  },
  {
    Word: 'gün',
    Definition: 'Day',
    Choices: ['A little', 'Big', 'Day', 'Anymore'],
  },
])

VocabQuestions.set('vocab-three', [
  { Word: 'yeni', Definition: 'New', Choices: ['Lady', 'New'] },
  {
    Word: 'fazla',
    Definition: 'Too much',
    Choices: ['Too much', 'Problem', 'You (formal/plural)', 'I am sorry'],
  },
  {
    Word: 'ederim',
    Definition: 'I do (or Thank you, depending on context)',
    Choices: [
      'Thanks',
      'To you',
      'I do (or Thank you, depending on context)',
      'New',
    ],
  },
  {
    Word: 'nerede',
    Definition: 'Where',
    Choices: ['To you', 'You (formal/plural)', 'Where'],
  },
  {
    Word: 'tanrım',
    Definition: 'My God',
    Choices: ['Exact', 'Whole', 'Permission', 'My God'],
  },
  { Word: 'merhaba', Definition: 'Hello', Choices: ['Them', 'About', 'Hello'] },
  {
    Word: 'efendim',
    Definition: 'Sir/Madam',
    Choices: ['Necessary', 'Sir/Madam', 'New'],
  },
  {
    Word: 'a',
    Definition: 'To',
    Choices: ['Small', 'Things', 'Continue', 'To'],
  },
  {
    Word: 'şeyi',
    Definition: 'Thing',
    Choices: ['Them', 'Thing', 'Whole', 'Same'],
  },
  {
    Word: 'orada',
    Definition: 'There',
    Choices: ['To us', 'Of course', 'There', 'My God'],
  },
  {
    Word: 'gece',
    Definition: 'Night',
    Choices: ['Exact', 'Give', 'Same', 'Night'],
  },
  {
    Word: 'son',
    Definition: 'End',
    Choices: ['Knows', 'Lady', 'Night', 'End'],
  },
  {
    Word: 'kötü',
    Definition: 'Bad',
    Choices: ['To you', 'Night', 'Bad', 'Wonderful'],
  },
  {
    Word: 'şeyler',
    Definition: 'Things',
    Choices: ['Girl', 'Things', 'Hello', 'Wonderful'],
  },
  { Word: 'biliyor', Definition: 'Knows', Choices: ['Two', 'Knows', 'Hello'] },
  { Word: 'harika', Definition: 'Wonderful', Choices: ['Hello', 'Wonderful'] },
  {
    Word: 'iki',
    Definition: 'Two',
    Choices: ['Two', 'Saying/As', 'Sir/Madam', 'Where'],
  },
  {
    Word: 'sorun',
    Definition: 'Problem',
    Choices: [
      'Problem',
      'Of course',
      'Here it is',
      'Goodness (or simply a placeholder vowel in Turkish grammar)',
    ],
  },
  { Word: 'et', Definition: 'Do', Choices: ['Do', 'End', 'There'] },
  {
    Word: 'İşte',
    Definition: 'Here it is',
    Choices: ['Two', 'Small', 'Here it is', 'New'],
  },
  {
    Word: 'bütün',
    Definition: 'Whole',
    Choices: ['Of', 'Whole', 'Sir/Madam', 'Hello'],
  },
  {
    Word: 'tam',
    Definition: 'Exact',
    Choices: ['I do (or Thank you, depending on context)', 'Thing', 'Exact'],
  },
  { Word: 'gerek', Definition: 'Necessary', Choices: ['Necessary', 'Thing'] },
  {
    Word: 'siz',
    Definition: 'You (formal/plural)',
    Choices: ['End', 'Immediately', 'You (formal/plural)', 'Wonderful'],
  },
  {
    Word: 'diye',
    Definition: 'Saying/As',
    Choices: ['Two', 'Own', 'Saying/As'],
  },
  {
    Word: 'hemen',
    Definition: 'Immediately',
    Choices: ['To you', 'Things', 'Saying/As', 'Immediately'],
  },
  { Word: 'ol', Definition: 'Be', Choices: ['Exact', 'Be', 'My God'] },
  {
    Word: 'üzgünüm',
    Definition: 'I am sorry',
    Choices: ['Exact', 'Them', 'I am sorry', 'My God'],
  },
  {
    Word: 'küçük',
    Definition: 'Small',
    Choices: [
      'Small',
      'Goodness (or simply a placeholder vowel in Turkish grammar)',
      'Because of',
    ],
  },
  {
    Word: 'olabilir',
    Definition: 'May/Can be',
    Choices: ['Thing', 'May/Can be', 'Because of', 'Wonderful'],
  },
  {
    Word: 'olsun',
    Definition: 'Let it be',
    Choices: ['Do', 'Let it be', 'Bad'],
  },
  {
    Word: 'i',
    Definition: 'Goodness (or simply a placeholder vowel in Turkish grammar)',
    Choices: [
      'Necessary',
      'Small',
      'Goodness (or simply a placeholder vowel in Turkish grammar)',
      'New',
    ],
  },
  {
    Word: 'size',
    Definition: 'To you',
    Choices: ['Exact', 'Lady', 'To you', 'Where'],
  },
  {
    Word: 'bayan',
    Definition: 'Lady',
    Choices: ['Lady', 'About', 'You (formal/plural)'],
  },
  {
    Word: 'aynı',
    Definition: 'Same',
    Choices: ['Of course', 'Same', 'Problem'],
  },
  {
    Word: 'hakkında',
    Definition: 'About',
    Choices: ['Lady', 'About', 'Problem', 'I am sorry'],
  },
  {
    Word: 'teşekkür',
    Definition: 'Thanks',
    Choices: ['Thanks', 'Come', 'Give'],
  },
  { Word: 'gel', Definition: 'Come', Choices: ['Come', 'Night'] },
  {
    Word: 'tabii',
    Definition: 'Of course',
    Choices: ['Of course', 'Same', 'Here it is'],
  },
  {
    Word: 'yüzden',
    Definition: 'Because of',
    Choices: ['Lady', 'Things', 'Because of'],
  },
  {
    Word: 'onları',
    Definition: 'Them',
    Choices: ['Because of', 'Them', 'About', 'Night'],
  },
  {
    Word: 'kız',
    Definition: 'Girl',
    Choices: ['New', 'Girl', 'Too much', 'Hello'],
  },
  { Word: 'kendi', Definition: 'Own', Choices: ['Own', 'Give', 'Sir/Madam'] },
  {
    Word: 'devam',
    Definition: 'Continue',
    Choices: ['To us', 'Of course', 'Continue'],
  },
  { Word: 'nin', Definition: 'Of', Choices: ['Thanks', 'Exact', 'Of', 'Bad'] },
  {
    Word: 'bize',
    Definition: 'To us',
    Choices: ['To us', 'Whole', 'Saying/As'],
  },
  { Word: 'e', Definition: 'To', Choices: ['Exact', 'Girl', 'To', 'Night'] },
  {
    Word: 'ver',
    Definition: 'Give',
    Choices: ['Thing', 'Give', 'Immediately'],
  },
  {
    Word: 'oluyor',
    Definition: 'Is happening',
    Choices: ['Own', 'Is happening', 'About', 'Where'],
  },
  {
    Word: 'izin',
    Definition: 'Permission',
    Choices: ['Of', 'To', 'Permission'],
  },
])

VocabQuestions.set('vocab-four', [
  { Word: 'iş', Definition: 'Work', Choices: ['Today', 'Never', 'Work'] },
  {
    Word: 'bizi',
    Definition: 'Us',
    Choices: ['In a way', 'Nobody', 'Us', 'Here it is'],
  },
  {
    Word: 'buna',
    Definition: 'To this',
    Choices: ['Stop', 'Go', 'To this', 'Long'],
  },
  {
    Word: 'selam',
    Definition: 'Hi',
    Choices: ['Of', 'Father', 'Hi', 'Already'],
  },
  {
    Word: 'anne',
    Definition: 'Mother',
    Choices: ['Is coming', 'Mother', 'According to', 'Long'],
  },
  {
    Word: 'vardı',
    Definition: 'Was',
    Choices: ['In a way', 'Was', 'Come on', 'Long'],
  },
  {
    Word: 'bizim',
    Definition: 'Our',
    Choices: ['Are you', 'You know', 'According to', 'Our'],
  },
  { Word: 'geldi', Definition: 'Came', Choices: ['Again', 'Still', 'Came'] },
  {
    Word: 'sizi',
    Definition: 'You (formal/plural)',
    Choices: ['With him/her', 'Say', 'Was', 'You (formal/plural)'],
  },
  { Word: 'baba', Definition: 'Father', Choices: ['Father', 'Work', 'Long'] },
  {
    Word: 'dur',
    Definition: 'Stop',
    Choices: ['With him/her', 'Stop', 'You (formal/plural)', 'Still'],
  },
  {
    Word: 'aslında',
    Definition: 'Actually',
    Choices: ['Important', 'Still', 'Actually'],
  },
  {
    Word: 'seninle',
    Definition: 'With you',
    Choices: ['With me', 'Needed', 'With you'],
  },
  { Word: 'asla', Definition: 'Never', Choices: ['Never', 'First', 'Inside'] },
  {
    Word: 'göre',
    Definition: 'According to',
    Choices: ['According to', 'Here it is', 'Of', 'Hi'],
  },
  {
    Word: 'kimse',
    Definition: 'Nobody',
    Choices: ['Nobody', 'Apology', 'Father', 'Is it (question particle)'],
  },
  {
    Word: 'özür',
    Definition: 'Apology',
    Choices: ['In my opinion', 'With him/her', 'Apology'],
  },
  {
    Word: 'değilim',
    Definition: 'I am not',
    Choices: ['Money', 'Or else', 'I am not', 'Of'],
  },
  { Word: 'oh', Definition: 'Oh', Choices: ['Oh', 'Take', 'Alright'] },
  {
    Word: 'önemli',
    Definition: 'Important',
    Choices: ['Was', 'Work', 'Important', 'With you'],
  },
  {
    Word: 'git',
    Definition: 'Go',
    Choices: ['Go', 'With me', 'According to', 'Is it (question particle)'],
  },
  {
    Word: 'hala',
    Definition: 'Still',
    Choices: ["Let's see", 'To this', 'Still'],
  },
  {
    Word: 'işte',
    Definition: 'Here it is',
    Choices: ['Money', 'Or else', 'Here it is'],
  },
  {
    Word: 'tekrar',
    Definition: 'Again',
    Choices: ['Stop', 'Again', 'To this'],
  },
  {
    Word: 'yoksa',
    Definition: 'Or else',
    Choices: ['Or else', 'Together', 'Already'],
  },
  {
    Word: 'içinde',
    Definition: 'Inside',
    Choices: ['In a way', 'Was', 'Hi', 'Inside'],
  },
  {
    Word: 'nın',
    Definition: 'Of',
    Choices: ['In my opinion', 'Of', 'Apology', 'According to'],
  },
  {
    Word: 'benimle',
    Definition: 'With me',
    Choices: ['Nobody', 'With me', 'Of', 'To be'],
  },
  {
    Word: 'mısın',
    Definition: 'Are you',
    Choices: ['Are you', 'Never', 'Work', 'Our'],
  },
  {
    Word: 'mü',
    Definition: 'Is it (question particle)',
    Choices: ['Apology', 'Came', 'To be', 'Is it (question particle)'],
  },
  {
    Word: 'yine',
    Definition: 'Again',
    Choices: ['You know', 'Again', 'Still', 'Here it is'],
  },
  {
    Word: 'bence',
    Definition: 'In my opinion',
    Choices: ["Let's see", 'In my opinion', 'Already', 'Mother'],
  },
  {
    Word: 'haydi',
    Definition: 'Come on',
    Choices: ['In my opinion', 'Come on', 'To this'],
  },
  {
    Word: 'şekilde',
    Definition: 'In a way',
    Choices: ['In a way', 'To be', 'Needed'],
  },
  {
    Word: 'olmak',
    Definition: 'To be',
    Choices: ['With him/her', 'First', 'To be'],
  },
  {
    Word: 'bugün',
    Definition: 'Today',
    Choices: ['In my opinion', 'Today', 'Father', 'Inside'],
  },
  { Word: 'söyle', Definition: 'Say', Choices: ['Say', 'Was', 'Us'] },
  {
    Word: 'pekala',
    Definition: 'Alright',
    Choices: ['Or else', 'First', 'You know', 'Alright'],
  },
  {
    Word: 'birlikte',
    Definition: 'Together',
    Choices: ['Together', 'Nobody', 'Important', 'Still'],
  },
  {
    Word: 'para',
    Definition: 'Money',
    Choices: ['Money', 'Is it (question particle)'],
  },
  {
    Word: 'olmaz',
    Definition: 'It cannot be',
    Choices: ['It cannot be', 'Money', 'Father', 'You (formal/plural)'],
  },
  { Word: 'uzun', Definition: 'Long', Choices: ['Say', 'Work', 'Hi', 'Long'] },
  {
    Word: 'onunla',
    Definition: 'With him/her',
    Choices: ['With him/her', 'Needed'],
  },
  {
    Word: 'bakalım',
    Definition: "Let's see",
    Choices: ["Let's see", 'Was', 'Inside', 'Long'],
  },
  {
    Word: 'zaten',
    Definition: 'Already',
    Choices: ['Are you', 'Again', 'Already', 'Is it (question particle)'],
  },
  {
    Word: 'biliyorsun',
    Definition: 'You know',
    Choices: ['You know', 'Again', 'Long'],
  },
  {
    Word: 'ilk',
    Definition: 'First',
    Choices: ['First', 'Go', 'Again', 'Our'],
  },
  {
    Word: 'al',
    Definition: 'Take',
    Choices: ['In my opinion', 'Today', 'Take'],
  },
  {
    Word: 'geliyor',
    Definition: 'Is coming',
    Choices: ['Is coming', 'Here it is', 'Alright'],
  },
  {
    Word: 'lazım',
    Definition: 'Needed',
    Choices: ['Are you', 'According to', 'Together', 'Needed'],
  },
])

export default VocabQuestions
