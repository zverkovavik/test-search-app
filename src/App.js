import './App.css';
import { MainPage } from './Components/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { About } from './Components/About/About.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
