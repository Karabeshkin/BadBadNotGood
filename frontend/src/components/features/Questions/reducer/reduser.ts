import {Action} from './action';
import {State} from './type';

const init = {themes: []};
const reducerTheme = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'theme/init':
      return {
        ...state,
        themes: action.payload,
      };
    default:
      return state;
  }
};
export default reducerTheme;
