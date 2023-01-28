import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Quiz from './QuizUI/Components/Pages/Questions_Page/Quiz';
import Result from './QuizUI/Components/Results/Results';
import LandingPage from './QuizUI/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route
            path="/question1"
            element={<Quiz page="1" path="/question2" />}
          />
          <Route
            path="/question2"
            element={<Quiz page="2" path="/question3" />}
          />
          <Route
            path="/question3"
            element={<Quiz page="3" path="/question4" />}
          />
          <Route
            path="/question4"
            element={<Quiz page="4" path="/question5" />}
          />
          <Route
            path="/question5"
            element={<Quiz page="5" path="/question6" />}
          />
          <Route
            path="/question6"
            element={<Quiz page="6" path="/question7" />}
          />
          <Route
            path="/question7"
            element={<Quiz page="7" path="/question8" />}
          />
          <Route
            path="/question8"
            element={<Quiz page="8" path="/question9" />}
          />
          <Route
            path="/question9"
            element={<Quiz page="9" path="/question10" />}
          />
          <Route
            path="/question10"
            element={<Quiz page="10" path="/result" />}
          />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
