import { combineReducers } from 'redux';

import list from './list';
import anime from './anime';

const appReducer = combineReducers({
  list: list,
  anime: anime
});

export default appReducer;