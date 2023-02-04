/* eslint-disable no-constant-condition */
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ResultContext } from '../../Context/quiz.context';
import './Quiz.css';

export default function Quiz() {
  const index = useParams();
  const number = +index.id;
  const { questions, validate, response, setResponse, disable, setDisable } =
    useContext(ResultContext);

  // function disableBtn = () => {
  //   setDisable(true)
  // }

  return (
    questions.length > 0 && (
      <div className="landingContainer">
        <div className="questions">
          <h1>Question {number}</h1>
          <div
            className="question"
            dangerouslySetInnerHTML={{ __html: questions[number - 1].question }}
          />
          <div className="boolean">
            <button
              type="button"
              className="btnT"
              value="True"
              disabled={disable}
              onClick={(e) => {
                validate(e.target.value, questions[number - 1].correct_answer);
              }}
            >
              True
            </button>
            <button
              onClick={(e) => {
                validate(e.target.value, questions[number - 1].correct_answer);
              }}
              type="button"
              disabled={disable}
              value="False"
              className="btnF"
            >
              False
            </button>
          </div>
          <div className="nxtBtn">
            <Link
              to={number === 10 ? '/result' : `/question/${number + 1}`}
              replace
            >
              <button
                type="button"
                onClick={() => {
                  setResponse('');
                  setDisable(false);
                }}
              >
                Next
              </button>
            </Link>
          </div>
          <div className="answer">{response}</div>
        </div>
      </div>
    )
  );
}
