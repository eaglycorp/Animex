import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import {connect} from 'react-redux';
import {getPopular} from '../../public/controller/actions/actList';

class AnimeListPopular extends Component {
    
    render() {
        return(
            <Container>
                {/* <Loader isLoading={this.state.loading} /> */}
                <AnimeListWithScore
                    data={this.props.popularData}
                    pageNo={this.props.popularPage}
                    lastPage={this.props.popularLastPage}
                    handleLoadMore={getPopular(this.props.popularPage)}
                    />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    popularData: state.list.popularData,
    popularPage: state.list.popularPage,
    popularLastPage: state.list.popularLastPage
})

export default connect(mapStateToProps)(AnimeListPopular);