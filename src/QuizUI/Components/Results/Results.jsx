import { Link } from 'react-router-dom';
import './Result.css';
import { useContext } from 'react';
import { ResultContext } from '../Context/quiz.context';

export default function Result() {
  const result = useContext(ResultContext);
  return (
    <div className="resultContainer">
      <div className="result_container">
        <h2>Thank you for playing</h2>
        <h4>Here is your result</h4>
        <div className="ans">
          <div className="q1">{result}</div>
        </div>
        <Link to="/">
          <button type="button">Play Again</button>
        </Link>
      </div>
    </div>
  );
}
