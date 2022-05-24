import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import TimeAttackPage from './Components/TimeAttackPage.jsx';
import HomePage from './Components/HomePage.jsx';
import DriftPage from './Components/DriftPage.jsx';
import ForzaPage from './Components/ForzaPage.jsx';
import Menu from './Components/Menu.jsx';


export default function App() {
  return (
    <HashRouter>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}