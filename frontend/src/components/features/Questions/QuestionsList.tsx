import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as api from './api';
import {RootState} from '../../store/store';
import QuestionsCard from './QuestionsCard';

function QuestionsList(): JSX.Element {
  const dispatch = useDispatch();
  const {themes} = useSelector((store: RootState) => store.theme);
  console.log(themes);

  useEffect(() => {
    api
      .initThemeFetch()
      .then((data) => dispatch({type: 'theme/init', payload: data}));
  }, []);

  return (
    <div>
      {themes.map((theme) => (
        <div className='all'>
          <div className='theme'>{theme.theme}</div>
          <div className='question'>
            {theme.Questions.map((qestion) => (
              <QuestionsCard qestion={qestion} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionsList;
