import { useState } from "react";
import ConjugationExercise from "../ConjugationExercise/ConjugationExercise";
import {useNavigate, useParams} from "react-router";
import ConjunctionQuestions from "../../data/ConjugationQuestions";


const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false); // Track if the question has been answered
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Track if the answer is correct
    const [conjugation, setConjugation] = useState(""); // Track user's answer
    const navigate = useNavigate();
    const { topic } = useParams<{ topic: string }>()
    if (topic === undefined) {
        return <div>

        </div>
    }

    const questions = ConjunctionQuestions.get(topic);

    const currentQuestion = questions[currentQuestionIndex];

    // Handles advancing to the next question
    const handleNextQuestion = () => {
        // If there are still questions, go to the next one
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setIsAnswered(false); // Reset answered flag
            setIsCorrect(null); // Reset correctness state
            setConjugation(""); // Reset input field
        } else {
            navigate("/topic-list")
        }
    };

    // Calculate the progress as a percentage (0-100)
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const progressPercentage = Math.round(progress);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="w-1/2 bg-gray-300 h-2 mb-4 relative">
                <div
                    className="bg-red-600 h-full"
                    style={{ width: `${progress}%` }}
                ></div>
                <span className="absolute top-0 right-0 text-xs font-semibold text-gray-700 mr-2 mt-2">
                    {progressPercentage}%
                </span>
            </div>
            <div className="flex flex-col space-y-6 w-full max-w-md">
                <ConjugationExercise
                    labelText={currentQuestion.labelText}
                    prompt={currentQuestion.prompt}
                    correctAnswer={currentQuestion.correctAnswer}
                    onAnswered={(correct: boolean) => {
                        setIsCorrect(correct); // Update correctness when question is answered
                        setIsAnswered(true); // Mark question as answered
                    }}
                    isAnswered={isAnswered} // Pass the isAnswered state to ConjugationExercise
                    conjugation={conjugation}
                    setConjugation={setConjugation}
                />
                {/* Only show the Next Question button if the question has been answered */}
                {isAnswered && (
                    <button
                        onClick={handleNextQuestion}
                        className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        {currentQuestionIndex < questions.length - 1
                            ? "Next Question"
                            : "Finish Quiz"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
