import { useState } from "react";
import VocabQuestionExercise from "./VocabQuestionExercise";
import { useNavigate, useParams } from "react-router";
import VocabQuestions from "../../data/VocabQuestions";

const VocabQuestionQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false); // Track if the question has been answered
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Track if the answer is correct
    const navigate = useNavigate();
    const { topic } = useParams<{ topic: string }>();

    if (topic === undefined) {
        return <div>No topic selected</div>;
    }

    const questions = VocabQuestions.get(topic);

    if (!questions || questions.length === 0) {
        return <div>No questions available for this topic</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswered = (correct: boolean) => {
        setIsCorrect(correct); // Update correctness when question is answered
        setIsAnswered(true); // Mark question as answered
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
            setIsAnswered(false); // Reset answered flag
            setIsCorrect(null); // Reset correctness state
        } else {
            navigate("/topic-list");
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
                <VocabQuestionExercise
                    word={currentQuestion.Word}
                    definition={currentQuestion.Definition}
                    choices={currentQuestion.Choices}
                    onAnswered={handleAnswered} // Pass callback to child
                    isAnswered={isAnswered} // Pass isAnswered state to VocabQuestionExercise
                />

                {isAnswered && (
                    <button
                        onClick={handleNextQuestion}
                        className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default VocabQuestionQuiz;
