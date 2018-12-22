import {combineReducers} from 'redux';

import counter from './counter';
import cardAnime from './cardAnime';
import cardTopAll from './cardTopAll';
import cardPopular from './cardPopular';
import cardMovie from './cardMovie';
import getEpisode from './getEpisode';
import getDetails from './getDetails';
import getGenres from './getGenre';
import cardSearch from './search';

const appReducer = combineReducers({
    counter,
    cardAnime,
    cardTopAll,
    cardPopular,
    cardMovie,
    getEpisode,
    getDetails,
    getGenres,
    cardSearch,
});

export default appReducer;