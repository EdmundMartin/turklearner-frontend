import { useState, useEffect } from 'react'

interface VocabQuestionExerciseProps {
  word: string
  definition: string
  choices: string[] // Array of multiple-choice options
  onAnswered: (correct: boolean) => void // Callback when the question is answered
  isAnswered: boolean // Flag indicating if the question has been answered
}

const VocabQuestionExercise = ({
  word,
  definition,
  choices,
  onAnswered,
  isAnswered,
}: VocabQuestionExerciseProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null) // Correctness state

  const handleChoiceClick = (choice: string) => {
    if (!isAnswered) {
      setSelectedAnswer(choice) // Update selected answer only if not answered yet
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer?.trim().toLowerCase() === definition.toLowerCase()) {
      setIsCorrect(true)
      onAnswered(true) // Notify parent that the answer is correct
    } else {
      setIsCorrect(false)
      onAnswered(false) // Notify parent that the answer is incorrect
    }
  }

  useEffect(() => {
    if (!isAnswered) {
      setIsCorrect(null) // Reset correctness state when the question is not yet answered
      setSelectedAnswer(null) // Reset selected answer when the question is not answered
    }
  }, [isAnswered])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="flex flex-col space-y-4">
        <span className="text-xl font-semibold">
          What definition matches the word below?
        </span>
        <span className="text-lg italic">{word}</span>
        <div className="space-y-3">
          {/* Display the multiple choice buttons */}
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceClick(choice)}
              className={`w-full px-4 py-2 text-lg font-semibold rounded-md ${
                selectedAnswer === choice
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
      {!isAnswered && (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Submit
        </button>
      )}
      {isCorrect !== null && (
        <div>
          <div
            className={`mt-4 text-xl font-semibold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
          >
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </div>
          {!isCorrect && (
            <div className="mt-2 text-sm text-gray-600">
              The correct answer is:{' '}
              <span className="font-bold">{definition}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default VocabQuestionExercise
