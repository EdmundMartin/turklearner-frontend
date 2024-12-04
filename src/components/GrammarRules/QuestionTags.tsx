
const QuestionTagExplanation  = () => {
    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Turkish Question Tags</h2>
            <p className="text-gray-700 mb-4">
                In Turkish, the question tags <strong>mi</strong>, <strong>mı</strong>, <strong>mu</strong>, and <strong>mü</strong> are used to form yes-or-no questions. These tags follow the rules of <strong>vowel harmony</strong>, which determines the correct form to use based on the vowels in the key word.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Rules of Vowel Harmony</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                    If the last vowel is a <strong>front vowel</strong> (<em>e, i, ö, ü</em>):
                    <ul className="list-disc list-inside ml-6">
                        <li>Use <strong>mi</strong> for <em>e, i</em>.</li>
                        <li>Use <strong>mü</strong> for <em>ö, ü</em>.</li>
                    </ul>
                </li>
                <li>
                    If the last vowel is a <strong>back vowel</strong> (<em>a, ı, o, u</em>):
                    <ul className="list-disc list-inside ml-6">
                        <li>Use <strong>mı</strong> for <em>a, ı</em>.</li>
                        <li>Use <strong>mu</strong> for <em>o, u</em>.</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Examples</h3>
            <table className="table-auto border-collapse border border-gray-200 w-full mb-4">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-gray-800">Turkish Sentence</th>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800">English Translation</th>
                    <th className="border border-gray-300 px-4 py-2 text-gray-800">Correct Question Tag</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Bu yol doğru mu?</td>
                    <td className="border border-gray-300 px-4 py-2">Is this road correct?</td>
                    <td className="border border-gray-300 px-4 py-2">mu</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Yemek sıcak mı?</td>
                    <td className="border border-gray-300 px-4 py-2">Is the food hot?</td>
                    <td className="border border-gray-300 px-4 py-2">mı</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Kız güzel mi?</td>
                    <td className="border border-gray-300 px-4 py-2">Is the girl beautiful?</td>
                    <td className="border border-gray-300 px-4 py-2">mi</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Kitap büyük mü?</td>
                    <td className="border border-gray-300 px-4 py-2">Is the book big?</td>
                    <td className="border border-gray-300 px-4 py-2">mü</td>
                </tr>
                </tbody>
            </table>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Practice</h3>
            <p className="text-gray-700 mb-4">
                Try forming questions using the rules of vowel harmony. For example:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><strong>Okul uzak mu?</strong> (Is the school far?) - Correct: <strong>mu</strong>.</li>
                <li><strong>Film uzun mu?</strong> (Is the movie long?) - Correct: <strong>mu</strong>.</li>
                <li><strong>Elbise temiz mi?</strong> (Is the dress clean?) - Correct: <strong>mi</strong>.</li>
            </ul>

            <p className="text-gray-700 mt-4">
                Understanding and practicing these rules will help you confidently form yes-or-no questions in Turkish!
            </p>
        </div>
    );
};

export default QuestionTagExplanation;
