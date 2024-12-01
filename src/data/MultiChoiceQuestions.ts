

interface MultiChoiceQuestion {
    labelText: string;
    prompt: string;
    choices: string[]; // Multiple choice options
    correctAnswer: string;
}


const MultiChoiceQuestions: Map<string, MultiChoiceQuestion[]> = new Map<string, MultiChoiceQuestion[]>([
    [
        "plurals", // Key for this category or section of questions
        [
            {
                labelText: "Pick the correct plural form for the above word",
                prompt: "ekmek",
                choices: ["lar", "ler"],
                correctAnswer: "ler",
            },
            {
                labelText: "Pick the correct plural form for the above word",
                prompt: "saat",
                choices: ["lar", "ler"],
                correctAnswer: "ler",
            },
            {
                labelText: "Pick the correct plural form for the above word",
                prompt: "kiraz",
                choices: ["lar", "ler"],
                correctAnswer: "lar",
            },
            {
                labelText: "Pick the correct plural form for the above word",
                prompt: "erkek",
                choices: ["lar", "ler"],
                correctAnswer: "ler",
            },
        ],
    ],
]);

export default MultiChoiceQuestions;