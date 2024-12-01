import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Quiz from "./components/Quiz/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz/MultipleChoiceQuiz";
import TopicList from "./components/TopicList/TopicList";
import LandingPage from "./components/LandingPage/LandingPage";

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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

