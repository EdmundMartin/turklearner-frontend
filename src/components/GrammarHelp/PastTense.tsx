

const PastTense = () => {
    return (
        <div className="space-y-8 p-6">
            {/* Voiceless and Voiced Consonants Table */}
            <div>
                <h2 className="text-2xl font-semibold text-center mb-4">Consonants</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-200">
                        <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Category</th>
                            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Consonants</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Voiceless Consonants</td>
                            <td className="border border-gray-300 px-4 py-2">c, f, h, k, s, ş, ş, t, p</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Voiced Consonants</td>
                            <td className="border border-gray-300 px-4 py-2">b, c, d, g, ğ, j, l, m, n, r, v, y, z</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Past Tense Endings Table */}
            <div>
                <h2 className="text-2xl font-semibold text-center mb-4">Past Tense Endings</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-200">
                        <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Last Vowel</th>
                            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Voiceless</th>
                            <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Voiced</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">a, ı</td>
                            <td className="border border-gray-300 px-4 py-2">-tı</td>
                            <td className="border border-gray-300 px-4 py-2">-dı</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">o, u</td>
                            <td className="border border-gray-300 px-4 py-2">-tu</td>
                            <td className="border border-gray-300 px-4 py-2">-du</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">e, i</td>
                            <td className="border border-gray-300 px-4 py-2">-ti</td>
                            <td className="border border-gray-300 px-4 py-2">-di</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">ö, ü</td>
                            <td className="border border-gray-300 px-4 py-2">-tü</td>
                            <td className="border border-gray-300 px-4 py-2">-dü</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PastTense;
