/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getQuestions from '../../Api/Api';
import './Quiz.css';

export default function Quiz({ page, path }) {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [button, setButton] = useState('');

  useEffect(() => {
    getQuestions()
      .then((data) => {
        setQuestions([...data]);
        // eslint-disable-next-line no-console
        console.log(data);
      })
      .catch(() => {
        setError('There was an error loading the questions');
      });
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
  }, []);

  // eslint-disable-next-line no-console
  console.log(button);

  function checkAnswer() {
    if (button === '') return '';
    if (button === questions[page - 1].correct_answer) {
      return <h4>Pass</h4>;
    }
    return <h4>Fail</h4>;
  }

  return (
    questions.length > 0 && (
      <div className="landingContainer">
        <div>
          <h1>Question {page}</h1>
          <Link to={path} replace>
            <button type="button" onClick={(e) => setButton('')}>
              Next
            </button>
          </Link>
          <div
            dangerouslySetInnerHTML={{ __html: questions[page - 1].question }}
          />
          <button type="button" onClick={(e) => setButton('True')}>
            True
          </button>
          <button onClick={(e) => setButton('False')} type="button">
            False
          </button>
        </div>
        <div className="answer">{checkAnswer()}</div>
      </div>
    )
  );
}
