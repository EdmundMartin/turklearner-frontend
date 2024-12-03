import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Quiz from "./components/Quiz/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz/MultipleChoiceQuiz";
import TopicList from "./components/TopicList/TopicList";
import LandingPage from "./components/LandingPage/LandingPage";
import VocabQuestionQuiz from "./components/VocabQuiz/VocabQuestionQuiz";
import VocabList from "./components/TopicList/VocabList";
import Plurals from "./components/GrammarRules/Plurals";
import SimpleConjugationOne from "./components/GrammarRules/SimpleConjugationOne";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/quiz/:topic" element={<Quiz />} />
                    <Route path="/multi-choice/:topic" element={<MultipleChoiceQuiz />} />
                    <Route path="/topic-list" element={<TopicList />} />
                    <Route path="/vocab-list" element={<VocabList />} />
                    <Route path="/vocab/:topic" element={<VocabQuestionQuiz/>} />
                    <Route path="/guides/plurals" element={<Plurals />} />
                    <Route path="/guides/conjugation-one" element={<SimpleConjugationOne />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

