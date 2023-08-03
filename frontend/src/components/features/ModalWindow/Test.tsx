import React, { useState } from "react";

const question = {
  themeId: 1,
  question: "А хули",
  answer: "Тебя ебать не должо",
  score_points: 100,
};

function Test(): JSX.Element {
  const [otvet, setOtvet] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (otvet === question.answer) {
      setMessage("Все корректно, братик");
    } else {
      setMessage(`no no no ${question.answer} BOT TAK HADO`);
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

export default Test;
