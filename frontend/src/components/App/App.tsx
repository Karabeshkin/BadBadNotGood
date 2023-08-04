import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "../features/Auth/Registration";
import QuestionsList from "../features/Questions/QuestionsList";

import ModalAnswer from "../features/Questions/ModalAnswer";
import Navbar from "../features/Navbar/Navbar";
import MainPage from "../features/MainPage/MainPage";
import { useDispatch } from "react-redux";
import * as api from "../features/Auth/api";
import Authorization from "../features/Auth/Authorization";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .verificationFetch()
      .then((data) => dispatch({ type: "auth/verification", payload: data }));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/theme" element={<QuestionsList />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        {/* <Route path="/theme" element={<Registration />} /> */}
        {/* <Route path="/themes/:idTheme" element={<Registration />} />
        <Route path="/question" element={<Registration />} />
        <Route path="/question/:idQuestion" element={<Registration />} /> */}
      </Routes>
    </div>
  );
}
//bbhioln

export default App;
