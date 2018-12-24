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
        this.props.dispatch(getTopAll(10,1));
    }

    render() {
        return(
            <Container>
                    <Content>
                    <Loader isLoading={this.props.loading} />
                <AnimeListWithScore
                    data={this.props.topAllData}
                    isLoading={this.props.loading}
                    />
                    </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    topAllData: state.list.topAllData,
    loading: state.list.isLoading
})

export default connect(mapStateToProps)(AnimeListTopAll);