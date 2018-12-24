import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import {connect} from 'react-redux';

class AnimeListPopular extends Component {
    
    render() {
        return(
            <Container>
                <Content>
                {/* <Loader isLoading={this.state.loading} /> */}
                <AnimeListWithScore
                    data={this.props.popularData}
                    isLoading={this.props.loading}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    popularData: state.list.popularData,
    loading: state.list.isLoading
})

export default connect(mapStateToProps)(AnimeListPopular);