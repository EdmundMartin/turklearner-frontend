

const Plurals = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Turkish Pluralization Rules</h1>
            <p className="text-gray-700 text-lg mb-6">
                Pluralization in Turkish is straightforward and follows a consistent rule:
            </p>
            <ol className="list-decimal list-inside mb-6">
                <li>
                    Add the suffix <span className="font-semibold text-red-500">-ler</span> or{" "}
                    <span className="font-semibold text-red-500">-lar</span> to the noun.
                </li>
                <li>
                    The choice of <span className="font-semibold text-red-500">-ler</span> or{" "}
                    <span className="font-semibold text-red-500">-lar</span> depends on{" "}
                    <span className="font-semibold">vowel harmony</span> in the noun.
                </li>
            </ol>
            <h2 className="text-xl font-semibold text-red-600 mb-3">What is Vowel Harmony?</h2>
            <p className="text-gray-700 mb-6">
                Turkish words are influenced by their vowels. Based on vowel harmony:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>
                    Use <span className="font-semibold text-red-500">-ler</span> if the final vowel in the word is{" "}
                    <span className="text-gray-900 italic">e, i, ö, ü</span> (front vowels).
                </li>
                <li>
                    Use <span className="font-semibold text-red-500">-lar</span> if the final vowel in the word is{" "}
                    <span className="text-gray-900 italic">a, ı, o, u</span> (back vowels).
                </li>
            </ul>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Examples</h2>
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Using -ler (Front Vowels):</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <span className="font-bold">Ev</span> (house) → <span className="font-bold">Evler</span> (houses)
                    </li>
                    <li>
                        <span className="font-bold">Göz</span> (eye) → <span className="font-bold">Gözler</span> (eyes)
                    </li>
                    <li>
                        <span className="font-bold">Kedi</span> (cat) → <span className="font-bold">Kediler</span> (cats)
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Using -lar (Back Vowels):</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <span className="font-bold">Araba</span> (car) → <span className="font-bold">Arabalar</span> (cars)
                    </li>
                    <li>
                        <span className="font-bold">Kapı</span> (door) → <span className="font-bold">Kapılar</span> (doors)
                    </li>
                    <li>
                        <span className="font-bold">Elma</span> (apple) → <span className="font-bold">Elmalar</span> (apples)
                    </li>
                </ul>
            </div>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Special Notes</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>
                    <span className="font-semibold">No Plural for General Statements:</span> In Turkish, nouns are not
                    pluralized when talking about something in general.
                    <div className="mt-2 ml-6 text-gray-600">
                        Example: <span className="font-bold">Elma severim.</span> (I like apples.)
                    </div>
                </li>
                <li>
                    <span className="font-semibold">Plural for Specific References:</span> Use plural forms when referring
                    to specific groups.
                    <div className="mt-2 ml-6 text-gray-600">
                        Example: <span className="font-bold">Elmalar masada.</span> (The apples are on the table.)
                    </div>
                </li>
                <li>
                    <span className="font-semibold">Irregular Cases:</span> Some borrowed or compound nouns may not follow
                    standard pluralization rules.
                </li>
            </ul>
            <h2 className="text-xl font-semibold text-red-600 mb-3">Quick Tip to Remember</h2>
            <p className="text-gray-700">
                <span className="font-bold text-red-500">Front vowels → -ler</span>
                <br />
                <span className="font-bold text-red-500">Back vowels → -lar</span>
            </p>
            <p className="mt-4 text-gray-700">
                Practice listening to words to get comfortable with vowel harmony, and soon it will feel natural!
            </p>
        </div>
    );
};

export default Plurals;
