import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import {connect} from 'react-redux';

class AnimeListTrending extends Component {
    
    render() {
        return(
            <Container>
                <Content>
                <AnimeListWithScore
                    data={this.props.trendingData}
                    isLoading={this.props.loading}
                    />
                    </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    trendingData: state.list.trendingData,
    loading: state.list.isLoading
})

export default connect(mapStateToProps)(AnimeListTrending);