

interface VocabQuestion {
    Word: string
    Choices: string[]
    Definition: string
}

const VocabQuestions: Map<string, VocabQuestion[]> = new Map<string, VocabQuestion[]>()

VocabQuestions.set('vocab-one', [
    { Word: "bir", Definition: "One", Choices: ["My/Mine", "One", "Me (object)", "I"] },
    { Word: "bu", Definition: "This", Choices: ["Not", "This", "Here"] },
    { Word: "ne", Definition: "What", Choices: ["Question particle", "Your/Yours", "What", "To me"] },
    { Word: "ve", Definition: "And", Choices: ["Okay", "You (object)", "Like/As", "And"] },
    { Word: "için", Definition: "For", Choices: ["For", "Also", "Why"] },
    { Word: "mi", Definition: "Question particle", Choices: ["After", "Question particle", "You", "Are you?"] },
    { Word: "de", Definition: "Also", Choices: ["Thing", "To you", "How", "Also"] },
    { Word: "o", Definition: "That/He/She/It", Choices: ["For", "That/He/She/It", "Also"] },
    { Word: "ben", Definition: "I", Choices: ["Question particle", "Are you?", "I"] },
    { Word: "çok", Definition: "Very/Much", Choices: ["Very/Much", "Most"] },
    { Word: "ama", Definition: "But", Choices: ["But", "Your/Yours", "Here"] },
    { Word: "evet", Definition: "Yes", Choices: ["Yes", "Only/Just", "Like/As"] },
    { Word: "var", Definition: "Exists/There is", Choices: ["No", "I", "Yes", "Exists/There is"] },
    { Word: "da", Definition: "Too/Also", Choices: ["Your/Yours", "You (object)", "Too/Also"] },
    { Word: "mı", Definition: "Question particle", Choices: ["Ever/Never", "My/Mine", "Question particle", "Too/Also"] },
    { Word: "değil", Definition: "Not", Choices: ["Question particle", "Not"] },
    { Word: "şey", Definition: "Thing", Choices: ["Thing", "To me", "You (object)", "One"] },
    { Word: "hayır", Definition: "No", Choices: ["How", "Very/Much", "Too/Also", "No"] },
    { Word: "daha", Definition: "More", Choices: ["More", "Here", "Most"] },
    { Word: "sen", Definition: "You", Choices: ["But", "That it is/That you are", "Only/Just", "You"] },
    { Word: "kadar", Definition: "As much as", Choices: ["To you", "For", "As much as", "And"] },
    { Word: "bana", Definition: "To me", Choices: ["This (object)", "To me", "This", "Every"] },
    { Word: "gibi", Definition: "Like/As", Choices: ["After", "Like/As", "Exists/There is"] },
    { Word: "bunu", Definition: "This (object)", Choices: ["After", "Question particle", "This (object)"] },
    { Word: "yok", Definition: "Does not exist", Choices: ["Does not exist", "My/Mine", "Why"] },
    { Word: "onu", Definition: "Him/Her/It (object)", Choices: ["Thing", "More", "Him/Her/It (object)"] },
    { Word: "iyi", Definition: "Good", Choices: ["Good", "Or", "Why"] },
    { Word: "tamam", Definition: "Okay", Choices: ["Not", "Okay", "Me (object)"] },
    { Word: "beni", Definition: "Me (object)", Choices: ["Good", "Me (object)", "That (nearby)"] },
    { Word: "seni", Definition: "You (object)", Choices: ["More", "You (object)"] },
    { Word: "benim", Definition: "My/Mine", Choices: ["Question particle", "Okay", "This", "My/Mine"] },
    { Word: "her", Definition: "Every", Choices: ["My/Mine", "Like that/So", "Every"] },
    { Word: "sana", Definition: "To you", Choices: ["To you", "Good", "That/Which", "Very/Much"] },
    { Word: "ki", Definition: "That/Which", Choices: ["More", "To me", "That/Which", "Only/Just"] },
    { Word: "neden", Definition: "Why", Choices: ["Your/Yours", "You", "Me (object)", "Why"] },
    { Word: "ya", Definition: "Or", Choices: ["Or", "Like/As"] },
    { Word: "sadece", Definition: "Only/Just", Choices: ["Not", "Only/Just", "Also"] },
    { Word: "zaman", Definition: "Time", Choices: ["Good", "Time", "Too/Also"] },
    { Word: "senin", Definition: "Your/Yours", Choices: ["Does not exist", "Your/Yours", "Why"] },
    { Word: "burada", Definition: "Here", Choices: ["Here", "This (object)", "Very/Much", "And"] },
    { Word: "olduğunu", Definition: "That it is/That you are", Choices: ["Does not exist", "That it is/That you are", "Him/Her/It (object)", "Yes"] },
    { Word: "nasıl", Definition: "How", Choices: ["How", "Now", "Yes", "Also"] },
    { Word: "hiç", Definition: "Ever/Never", Choices: ["Ever/Never", "Okay", "Now"] },
    { Word: "sonra", Definition: "After", Choices: ["Not", "After", "Now", "Like/As"] },
    { Word: "şimdi", Definition: "Now", Choices: ["Ever/Never", "Time", "One", "Now"] },
    { Word: "en", Definition: "Most", Choices: ["But", "Most", "I", "And"] },
    { Word: "öyle", Definition: "Like that/So", Choices: ["Does not exist", "Ever/Never", "Like that/So", "What"] },
    { Word: "mu", Definition: "Question particle", Choices: ["Question particle", "Time", "Like that/So"] },
    { Word: "şu", Definition: "That (nearby)", Choices: ["Does not exist", "To me", "No", "That (nearby)"] },
    { Word: "misin", Definition: "Are you?", Choices: ["Are you?", "What", "Exists/There is"] },
]);

export default VocabQuestions;