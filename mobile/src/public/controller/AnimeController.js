import axios from 'axios';
import { getPopular } from './actions/actList';
import { connect } from 'react-redux';

const baseURL = 'https://animeapp1.herokuapp.com/api';

mapStateToProps = (state) => {
    return {
        popular: state.list.dataPopular,
        trending: state.list.dataTrending,
        topAll: state.list.dataTopAll
    }
}


    export default connect(mapStateToProps)(getPopularAnime);