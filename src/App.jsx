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
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);

  // const [userAns, setUserAns] = useState([]);

  useEffect(() => {
    getQuestions()
      .then((data) => {
        setQuestions([...data]);
      })
      .catch(() => {
        setError('There was an error loading the questions');
      });
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
  }, []);

  if (questions.length < 0) {
    <h2>Loading....</h2>;
  } else {
    return (
      <div className="App">
        <ResultContext.Provider value={questions}>
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<LandingPage />} />
              <Route
                path="/question/:id"
                element={
                  <Quiz
                    quest={questions}
                    number={page}
                    movePage={() => setPage((prevPage) => prevPage + 1)}
                  />
                }
              />
              <Route index path="result" element={<Result />} />
            </Routes>
          </BrowserRouter>
        </ResultContext.Provider>
      </div>
    );
  }
}

export default App;
