import './App.css';
import { MainPage } from './Components/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { About } from './Components/About/About.jsx';
import { AppRoute } from './constants/constants';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={AppRoute.MAIN_PAGE} element={<MainPage />} />
        <Route path={AppRoute.ABOUT} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
