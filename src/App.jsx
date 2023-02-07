/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import getQuestions from './QuizUI/Components/Api/Api';
import { ResultContext } from './QuizUI/Components/Context/quiz.context';
import Quiz from './QuizUI/Components/Pages/Questions_Page/Quiz';
import Result from './QuizUI/Components/Results/Results';
import LandingPage from './QuizUI/Landing';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({ passed: 0, failed: 0 });
  const [response, setResponse] = useState('');
  const [off, setOff] = useState(false);

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions([...data]);
    });
  }, []);

  function validate(ans, correctAns) {
    if (ans === '') {
      setResponse('');
    }
    if (ans === correctAns) {
      setResponse('Correct');
      setAnswer({ passed: answer.passed + 1, failed: answer.failed });
      // setOff(true);
    }
    if (ans !== correctAns) {
      setResponse('Wrong');
      setAnswer({ passed: answer.passed, failed: answer.failed + 1 });
      // setOff(true);
    }
  }

  return (
    <div className="App">
      <ResultContext.Provider
        value={{
          questions,
          validate,
          response,
          setResponse,
          answer,
          off,
          setOff,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/question/:id" element={<Quiz />} />
            <Route index path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </ResultContext.Provider>
    </div>
  );
}

export default App;
