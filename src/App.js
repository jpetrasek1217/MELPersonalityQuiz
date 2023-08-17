import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import ICAN from './components/results/ICAN';
import ICAT from './components/results/ICAT';
import ICON from './components/results/ICON';
import ICOT from './components/results/ICOT';
import ECAT from './components/results/ECAT';
import ECON from './components/results/ECON';
import ECAN from './components/results/ECAN';
import ECOT from './components/results/ECOT';


function App() {

  return (
    <Routes>
      <Route path="/MelPersonalityQuiz" element={<HomePage />} />
      <Route path="/MelPersonalityQuiz/quiz" element={<Quiz />} />
      <Route path="/MelPersonalityQuiz/result/ICAT" element={<ICAT />} />
      <Route path="/MelPersonalityQuiz/result/ICAN" element={<ICAN />} />
      <Route path="/MelPersonalityQuiz/result/ICOT" element={<ICOT />} />
      <Route path="/MelPersonalityQuiz/result/ICON" element={<ICON />} />
      <Route path="/MelPersonalityQuiz/result/ECAT" element={<ECAT />} />
      <Route path="/MelPersonalityQuiz/result/ECAN" element={<ECAN />} />
      <Route path="/MelPersonalityQuiz/result/ECOT" element={<ECOT />} />
      <Route path="/MelPersonalityQuiz/result/ECON" element={<ECON />} />
    </Routes>       
  );
}

export default App;