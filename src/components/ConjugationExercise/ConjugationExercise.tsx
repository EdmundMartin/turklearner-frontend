import { useRef, useState, useEffect } from 'react'
import Keyboard from '../Keyboard/Keyboard'

interface ConjugationRow {
  subject: string
  value: string
  onChange: (newValue: string) => void
  inputRef: React.RefObject<HTMLInputElement>
  setCurrentRef: (input: HTMLInputElement) => void
}

const ConjugationRow = ({
  subject,
  value,
  onChange,
  inputRef,
  setCurrentRef,
}: ConjugationRow) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-lg font-medium">{subject}</span>
      <input
        type="text"
        value={value}
        onFocus={(e) => setCurrentRef(e.target)}
        onChange={(e) => onChange(e.target.value)}
        className={
          'w-auto px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
        }
      />
    </div>
  )
}

interface ConjugationExerciseProps {
  labelText: string
  prompt: string
  correctAnswer: string
  onAnswered: (correct: boolean) => void
  isAnswered: boolean
  conjugation: string
  setConjugation: React.Dispatch<React.SetStateAction<string>>
}

const ConjugationExercise = ({
  labelText,
  prompt,
  correctAnswer,
  onAnswered,
  isAnswered,
  conjugation,
  setConjugation,
}: ConjugationExerciseProps) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const currentInputRef = useRef<HTMLInputElement | null>(null)

  const setCurrentRef = (ref: HTMLInputElement) => {
    currentInputRef.current = ref
  }

  const handleInputChange = (field: string, newValue: string) => {
    setConjugation(newValue)
  }

  const handleKeyClick = (char: string) => {
    if (currentInputRef.current) {
      const currentValue = currentInputRef.current.value
      currentInputRef.current.value = currentValue + char
      handleInputChange('sen', currentInputRef.current.value) // Update the state
    }
  }

  const handleSubmit = () => {
    if (conjugation.trim().toLowerCase() === correctAnswer.toLowerCase()) {
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
    }
  }, [isAnswered])

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 w-full max-w-md">
      <div className="flex items-center space-x-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Activity"
          className="w-36 h-36 rounded-md object-cover shadow-lg"
        />
        <div className="flex flex-col space-y-4">
          <span className="text-xl font-semibold">{prompt}</span>
          <div className="space-y-3">
            <ConjugationRow
              subject={labelText}
              value={conjugation}
              onChange={(value) => handleInputChange('sen', value)}
              inputRef={currentInputRef}
              setCurrentRef={setCurrentRef}
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        <Keyboard onKeyClick={handleKeyClick} />{' '}
        {/* Pass handleKeyClick as prop */}
      </div>
      {/* Show submit button only when the question is not yet answered */}
      {!isAnswered && (
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Submit
        </button>
      )}
      {/* Show feedback message (correct or incorrect) after answering */}
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
              <span className="font-bold">{correctAnswer}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ConjugationExercise
