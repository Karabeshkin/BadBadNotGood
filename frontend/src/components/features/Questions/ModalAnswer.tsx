import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as api from "./api";
import { RootState } from "../../store/store";

const question = {
  themeId: 1,
  question: "А хули",
  answer: "Тебя ебать не должно",
  score_points: 100,
};
// const user = {
//   id: 1,
//   login: "Тося",
//   email: "345@mail.ru",
//   score: 0,
// };

function ModalAnswer(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const [otvet, setOtvet] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    let poinScore = 0;
    if ("id" in user) {
      if (otvet === question.answer) {
        setMessage("Все корректно, братик");
        poinScore = user.score + question.score_points;
      } else {
        setMessage(`no no no ${question.answer} BOT TAK HADO`);
        poinScore = user.score - question.score_points;
      }
      api
        .poinTotalUser({ points: poinScore, id: user.id })
        .then((data) => dispatch({ type: "user/score", payload: data }));
    }
  }

  return (
    <div>
      <div>{question.question}</div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Ответ тут"
          onChange={(e) => setOtvet(e.target.value)}
        />
        <button type="submit">X</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default ModalAnswer;
