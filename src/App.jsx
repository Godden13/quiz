import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './QuizUI/Components/Pages/Landing_Page/Landing';
import Quiz from './QuizUI/QuizUI';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Quiz />} />
          <Route index path="/question" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
