import React, {Component} from 'react';
import {
    Text,
    Content,
    Button,
    Container,
    Col,
    Header,
    Title,
    Body
} from 'native-base';

import AnimeListWithScore from '../public/components/AnimeListWithScore';
import AnimeDetailScreen from '../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../animeplayer/AnimePlayerScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {ScrollView} from 'react-native';

import Colors from '../assets/colors';
import Loader from '../public/components/Loader';

import {connect} from 'react-redux';
import { getGenreAnime, getGenreList, getGenreTitle } from '../public/controller/actions/actList';


class AnimeGenreScreen extends Component {

    componentDidMount() {
        this.props.dispatch(getGenreTitle('Action'));
        this.props.dispatch(getGenreAnime('Action', 10, 1));
        this.props.dispatch(getGenreList());
    }
    
    render() {

        return(
            <Container>
                <Loader isLoading={this.props.loading} />
            <Header style={{backgroundColor: Colors.pureBlack}}>
                    <Body style={{marginLeft: 16}}>
                    <Title>{this.props.title}</Title>
                    </Body>
            </Header>
            <Col size={1}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{translateY: 12, paddingHorizontal: 8}}> 
                    {this.props.genreList.map((data) =>     
                        <Button small bordered rounded key={data.toString()} style={{marginRight: 4}} onPress={() => {this.props.dispatch(getGenreTitle(data.title)); this.props.dispatch(getGenreAnime(data.title, 10, 1))}}>
                            <Text>{data.title}</Text>
                        </Button>
                    )}
                </ScrollView>
                    </Col>
                    <Col size={11}>
                        <Content>
                <AnimeListWithScore
                    data={this.props.genreData}
                    isLoading={this.props.loading}
                    />
            </Content>
                    </Col>
                    </Container>
        )
    }
}

const GenreStack = createStackNavigator(
    {
        genre: AnimeGenreScreen,
        detail: AnimeDetailScreen,
        player: AnimePlayerScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.pureBlack,
                shadowOpacity: 0,
                shadowOffset: {
                  height: 0,
                },
                shadowRadius: 0,
            },
            headerTintColor: Colors.pureWhite
        }
    }
);

const mapStateToProps = (state) => ({
    genreData: state.list.genreData,
    genreList: state.list.genreList,
    title: state.list.genreTitle,
    loading: state.list.isLoading
})

export default createAppContainer(connect(mapStateToProps)(AnimeGenreScreen));  
 