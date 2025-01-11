import React from 'react'

interface TopicListData {
  title: string
  description: string
  link: string
  guideLink?: string // Optional guide link
}

const tableData: TopicListData[] = [
  {
    title: 'Plurals',
    description: 'Learn how to correctly form Turkish plurals',
    link: '/multi-choice/plurals',
    guideLink: '/guides/plurals',
  },
  {
    title: 'Verb Conjunction - 1',
    description: 'Learn to conjugate common verbs in the present tense.',
    link: '/quiz/common-verbs',
    guideLink: '/guides/conjugation-one',
  },
  {
    title: "Question words",
    description: 'Learn how to pick the correct question word to use',
    link: '/multi-choice/question-tags',
    guideLink: '/guides/question-tags-one'
  },
  {
    title: "Consonant Mutation - Past Tense Simple",
    description: "Consonant mutation in simple past tense",
    link: "/multi-choice/consonant-mutation-past-tense-simple"
  }
]

const TopicList: React.FC = () => {
  return (
    <div className="overflow-x-auto p-6 bg-gray-50">
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
              Title
            </th>
            <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
              Description
            </th>
            <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">
              Links
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr
              key={index}
              className={`border-t border-red-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="px-6 py-4 text-gray-700">{data.title}</td>
              <td className="px-6 py-4 text-gray-600">{data.description}</td>
              <td className="px-6 py-4 flex gap-2">
                {/* Optional Guide Button */}
                {data.guideLink && (
                  <a
                    href={data.guideLink}
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Grammar Guide
                  </a>
                )}
                {/* Visit Button */}
                <a
                  href={data.link}
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Study
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 bg-red-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-red-800">
          Master Turkish Grammar with Ease!
        </h2>
        <p className="text-gray-700 mt-2">
          Did you know that mastering key Turkish grammar concepts can dramatically improve your ability to communicate with confidence?
          With our interactive online exercises, you can practice and repeat essential grammar rules at your own pace.
          Build a strong foundation step by step and watch your fluency soar. Start mastering Turkish grammar today!
        </p>
      </div>
    </div>
  )
}

export default TopicList
