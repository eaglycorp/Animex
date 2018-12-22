import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducers/index.reducer';
import thunk from 'redux-thunk';

export default createStore(reducers, applyMiddleware(thunk));