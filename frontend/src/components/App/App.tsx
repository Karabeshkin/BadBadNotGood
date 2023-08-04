import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Registration from '../features/Auth/Registration';
import QuestionsList from '../features/Questions/QuestionsList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/theme" element={<QuestionsList />} />
      </Routes>
      {/* <Test /> */}
    </div>
  );
}

export default App;
