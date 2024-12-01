import { useState } from "react";
import MultipleChoiceExercise from "../MultipleChoiceExercise/MultipleChoiceExercise";
import {useNavigate, useParams} from "react-router";
import MultiChoiceQuestions from "../../data/MultiChoiceQuestions";


const MultipleChoiceQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false); // Track if the question has been answered
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Track if the answer is correct
    const navigate = useNavigate()
    const { topic } = useParams<{ topic: string }>()
    if (topic === undefined) {
        return <div>

        </div>
    }

    const questions = MultiChoiceQuestions.get(topic);


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
            navigate("/topic-list")
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="flex flex-col space-y-6 w-full max-w-md">
                <MultipleChoiceExercise
                    labelText={currentQuestion.labelText}
                    prompt={currentQuestion.prompt}
                    choices={currentQuestion.choices}
                    correctAnswer={currentQuestion.correctAnswer}
                    onAnswered={handleAnswered} // Pass callback to child
                    isAnswered={isAnswered} // Pass isAnswered state to MultipleChoiceExercise
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

export default MultipleChoiceQuiz;
