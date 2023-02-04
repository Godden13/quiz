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
      <div className="result_container">
        <h2>Thank you for playing</h2>
        <h4>Here is your result</h4>
        <div className="ans">
          <p>Passed: {answer.passed}</p>
          <p>Failed:{answer.failed}</p>
        </div>
        <ol className="questions">
          {questions.map((question, index) => {
            return (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: question.question }}
              />
            );
          })}
        </ol>
        <div className="q1">Done</div>
        <Link to="/">
          <button type="button">Play Again</button>
        </Link>
      </div>
    </div>
  );
}
