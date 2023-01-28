import { Link } from 'react-router-dom';
import './Result.css';

export default function Result() {
  return (
    <div className="result_container">
      <h3>Thank you for playing</h3>
      <Link to="/">
        <button type="button">Play Again</button>
      </Link>
    </div>
  );
}
