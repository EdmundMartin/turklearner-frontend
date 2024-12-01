


interface ConjugationQuestion {
    labelText: string;
    prompt: string;
    correctAnswer: string;
}


const ConjunctionQuestions: Map<string, ConjugationQuestion[]> = new Map<string, ConjugationQuestion[]>(
    [
        ['common-verb-conjunction-1', [
            { labelText: "sen", prompt: "almak in the ıyor present", correctAnswer: "alıyorsun" },
            { labelText: "ben", prompt: "almak in the ıyor present", correctAnswer: "alıyorum" },
            { labelText: "o", prompt: "almak in the ıyor present", correctAnswer: "alıyor" }
        ]]
    ]
);

export default ConjunctionQuestions;