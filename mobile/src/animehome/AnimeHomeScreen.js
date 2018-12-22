import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
    Header,
    Footer,
    Card,
    CardItem,
    Left,
    Body,
    Right,
    Button,
    Title,
    Icon,
    View,
    H1,
    Spinner
} from 'native-base';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Colors from '../assets/colors';
import Styles from '../assets/styles';
import ListAnime from '../public/components/ListAnime';

import AnimeDetailScreen from '../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../animeplayer/AnimePlayerScreen';

import axios from 'axios';
import {connect} from 'react-redux';

import { getPopular } from '../public/controller/actions/actList';

class AnimeHomeScreen extends Component {
    
    constructor() {
        super();
        this.state = {
            randomAnime: [],
            popularAnime: [],
            trendingAnime: [],
            topAllAnime: [],
            loadingState: true
        }
    }

        componentDidMount() {
            this.getRandomAnime();
        this.getPopularAnime();
        this.getTrendingAnime();
        this.getTopAllAnime();
        setTimeout(() => this.setState({loadingState: false}), 10000)
    }
            
    //if(this.state.popularAnime !== [] && this.state.trendingAnime !== [] && this.state.topAllAnime !== [] && this.state.randomAnime !== [] ) {this.setState({loadingState: false})}
    
    getRandomAnime = () => {
        axios.get('https://animeapp1.herokuapp.com/api?sort=random&content=1')
        .then((res) => {
            // console.log(res.data.results)
            this.setState({
                randomAnime: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })        
    }

    getTopAllAnime = () => {
        axios.get('https://animeapp1.herokuapp.com/api?sort=TopAll&content=10&page=1')
        .then((res) => {
            console.log(res.data.results)
            this.setState({
                topAllAnime: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })
    }

    getTrendingAnime = () => {
        axios.get('https://animeapp1.herokuapp.com/api?sort=Trending&content=10&page=1')
        .then((res) => {
            // console.log(res.data.results)
            this.setState({
                trendingAnime: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })
    }
    
    getPopularAnime = () => {
        axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=10&page=1')
        .then((res) => {
            this.setState({
                popularAnime: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })
    }
    
    render() {
        if(this.state.loadingState) return (
            <View>
                <Text>Wait a moment...</Text>
                <Spinner/>
            </View>
        )
        else
        return(
            <Container>
                <Content>
                    <View>
                        <TouchableWithoutFeedback transparent onPress={() => this.props.navigation.navigate('detail', {itemId: this.state.randomAnime[0].id})}>
                            <Image
                                source={{uri: this.state.randomAnime[0].thumbnail}}
                                style={Styles.fullscreenImage}
                                />
                        </TouchableWithoutFeedback>
                        <H1>{this.state.randomAnime[0].title}</H1>
                    </View>
                    <ListAnime
                        title='TRENDING'
                        data={this.state.trendingAnime}
                        href='Trending'
                    />
                    <ListAnime
                        title='MOST POPULAR'
                        data={this.state.popularAnime}
                        href='Popular' 
                    />
                </Content>
            </Container>
        )
    }
}

const HomeStack = createStackNavigator(
    {
        home: AnimeHomeScreen,
        detail: AnimeDetailScreen,
        player: AnimePlayerScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#FFF'
        }
    }
);

const mapStateToProps = (state) => {
    return {
        list: state.list.dataPopular,
        anime: state.anime
        // trending: state.dataTrending,
        // topAll: state.dataTopAll
    }
}

export default createAppContainer(connect(mapStateToProps)(HomeStack));