import './Landing.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="quiz_home_container">
      <div className="homeBody">
        <h1>Goddens Quiz Game📕</h1>
        <h3>Simple Quiz Game</h3>
        <p>
          Hello. This is a simple quiz game where all the user has to do is
          answer true or false. The answers will be displayed at the end of the
          game
        </p>
        <Link to="/question/1">
          <button type="button" className="begin_btn">
            Start 🤩
          </button>
        </Link>
      </div>
    </div>
  );
}
