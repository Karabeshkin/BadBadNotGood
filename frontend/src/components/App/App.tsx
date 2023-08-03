import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Registration from "../features/Auth/Registration";
// import Test from "../features/ModalWindow/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
      {/* <Test /> */}
    </div>
  );
}

export default App;
