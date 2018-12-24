import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import appReducer from '../reducers/index';

const store = createStore(
    appReducer,
    applyMiddleware(
        promiseMiddleware(),
        logger
    )
)

export default store;