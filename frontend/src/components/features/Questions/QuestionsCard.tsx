import React from 'react';
import {Question} from './type';

function QuestionsCard({qestion}: {qestion: Question}): JSX.Element {
  return (
    <div>
      <h3>{qestion.score_points}</h3>
    </div>
  );
}

export default QuestionsCard;
