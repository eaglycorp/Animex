import {combineReducers} from 'redux';

import counter from './counter';
import cardAnime from './cardAnime';
import cardTopAll from './cardTopAll';
import cardPopular from './cardPopular';
import cardMovie from './cardMovie';

const appReducer = combineReducers({
    counter,
    cardAnime,
    cardTopAll,
    cardPopular,
    cardMovie
});

export default appReducer;