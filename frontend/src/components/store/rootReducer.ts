import {combineReducers} from 'redux';
import reducerAuth from '../features/Auth/reducer/reducer';
import reducerTheme from '../features/Questions/reducer/reduser';

const rootReducer = combineReducers({

  auth: reducerAuth,
  theme: reducerTheme,

auth: reducerAuth,


});

export default rootReducer;
