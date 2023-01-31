/* eslint-disable no-constant-condition */
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResultContext } from '../../Context/quiz.context';
import './Quiz.css';

export default function Quiz({ quest, number, movePage }) {
  const [button, setButton] = useState('');
  const [result, setResult] = useState('');

  function checkAnswer() {
    if ({ button } === '') return result;
    if ({ button } === quest[number].correct_answer) {
      setResult('Pass');
      return result;
    }
    if ({ button } === quest[number].incorrect_answer) {
      setResult('Fail');
    }
    return result;
  }

  return (
    <div className="landingContainer">
      <div className="questions">
        <h1>Question {number + 1}</h1>
        <div
          className="question"
          dangerouslySetInnerHTML={{ __html: quest[number].question }}
        />
        <div className="boolean">
          <button
            type="button"
            className="btnT"
            onClick={(e) => setButton('True')}
          >
            True
          </button>
          <button
            onClick={(e) => setButton('False')}
            type="button"
            className="btnF"
          >
            False
          </button>
        </div>
        <div className="nxtBtn">
          <Link to={number === 9 ? '/result' : `/question/${number}`} replace>
            <button
              type="button"
              onClick={() => {
                movePage();
                setButton('');
                // setAnswer((prevResult) => [...prevResult, result]);
              }}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
      <div className="answer">{button}</div>
    </div>
  );
}
