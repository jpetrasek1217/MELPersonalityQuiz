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
      <Route path="/MELpersonalityQuiz" element={<HomePage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result/ICAT" element={<ICAT />} />
      <Route path="/result/ICAN" element={<ICAN />} />
      <Route path="/result/ICOT" element={<ICOT />} />
      <Route path="/result/ICON" element={<ICON />} />
      <Route path="/result/ECAT" element={<ECAT />} />
      <Route path="/result/ECAN" element={<ECAN />} />
      <Route path="/result/ECOT" element={<ECOT />} />
      <Route path="/result/ECON" element={<ECON />} />
    </Routes>       
  );
}

export default App;
