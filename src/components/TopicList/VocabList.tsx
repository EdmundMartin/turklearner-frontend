

interface VocabListData {
    title: string;
    description: string;
    link: string;
}

const tableData: VocabListData[] = [
    {
        title: '50 Most Common Words',
        description: 'Practice the 50 most common Turkish words',
        link: '/vocab/vocab-one',
    },
    {
        title: '51st - 100th Most Common Words',
        description: 'Practice common Turkish words',
        link: '/vocab/vocab-two',
    },
    {
        title: '101st - 150th Most Common Words',
        description: 'Practice common Turkish words',
        link: '/vocab/vocab-three',
    },
    {
        title: '151st - 200th Most Common Words',
        description: 'Practice common Turkish words',
        link: '/vocab/vocab-four',
    },
];

const VocabList: React.FC = () => {
    return (
        <div className="overflow-x-auto p-6 bg-gray-50">
            <table className="min-w-full bg-white shadow-md rounded-md">
                <thead>
                <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Title</th>
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Description</th>
                    <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Link</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((data, index) => (
                    <tr
                        key={index}
                        className={`border-t border-red-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                        <td className="px-6 py-4 text-gray-700">{data.title}</td>
                        <td className="px-6 py-4 text-gray-600">{data.description}</td>
                        <td className="px-6 py-4">
                            <a
                                href={data.link}
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                                Visit
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default VocabList;
