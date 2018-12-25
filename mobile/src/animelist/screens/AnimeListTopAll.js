import React, {Component} from 'react';
import {
    Container,
    Content
} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import Loader from '../../public/components/Loader';

import {connect} from 'react-redux';
import { getTopAll } from '../../public/controller/actions/actList';

class AnimeListTopAll extends Component {

    componentDidMount() {
        this.props.dispatch(getTopAll(1));
    }

    render() {
        return(
            <Container>
                    <Loader isLoading={this.props.loading} />
                <AnimeListWithScore
                    data={this.props.topAllData}
                    pageNo={this.props.topAllPage}
                    lastPage={this.props.topAllLastPage}
                    handleLoadMore={getTopAll(this.props.topAllPage)}
                    />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    topAllData: state.list.topAllData,
    loading: state.list.isLoading,
    topAllPage: state.list.topAllPage,
    topAllLastPage: state.list.topAllLastPage
})

export default connect(mapStateToProps)(AnimeListTopAll);