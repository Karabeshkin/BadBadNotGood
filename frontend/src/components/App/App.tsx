import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "../features/Auth/Registration";
import ModalAnswer from "../features/Questions/ModalAnswer";
// import Test from "../features/ModalWindow/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/game" element={<ModalAnswer />} />
      </Routes>
    </div>
  );
}

export default App;
