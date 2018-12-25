import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import {connect} from 'react-redux';
import { getTrending } from '../../public/controller/actions/actList';

class AnimeListTrending extends Component {
    
    render() {
        return(
            <Container>
                <AnimeListWithScore
                    data={this.props.trendingData}
                    pageNo={this.props.trendingPage}
                    lastPage={this.props.trendingLastPage}
                    handleLoadMore={getTrending(this.props.trendingPage)}
                    />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    trendingData: state.list.trendingData,
    trendingPage: state.list.trendingPage,
    trendingLastPage: state.list.trendingLastPage
})

export default connect(mapStateToProps)(AnimeListTrending);