import { combineReducers } from 'redux';

import list from './list';
import anime from './anime';
import search from './search';
import account from './account';

const appReducer = combineReducers({
  list,
  anime,
  search,
  account
});

export default appReducer;