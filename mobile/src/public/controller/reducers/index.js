import { combineReducers } from 'redux';

import list from './list';
import anime from './anime';
import search from './search';

const appReducer = combineReducers({
  list,
  anime,
  search
});

export default appReducer;