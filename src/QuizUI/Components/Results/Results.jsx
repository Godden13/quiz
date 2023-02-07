/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResultContext } from '../Context/quiz.context';
import './Result.css';

export default function Result() {
  const { questions, answer } = useContext(ResultContext);
  // eslint-disable-next-line no-console
  return (
    <div className="resultContainer">
      <h2>Thank you for playing</h2>
      <div className="result_container">
        <h4>Here is your result</h4>
        <ol className="questions_list">
          {questions.map((question, index) => {
            return (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: question.question }}
              />
            );
          })}
        </ol>
        <div className="ans">
          <p id="pass">Passed: {answer.passed}</p>
          <p id="fail">Failed:{answer.failed}</p>
        </div>
        <Link to="/">
          <button type="button" className="replayBtn">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
}
