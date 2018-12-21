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
} from 'native-base'
import { Image } from 'react-native';
import Colors from '../assets/colors';
import Styles from '../assets/styles';
import ListAnime from '../public/components/ListAnime';
import AnimeDetailProps from '../public/components/AnimeDetailProps';
import EpisodeList from '../public/components/EpisodeList';
import { WebView } from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';

import axios from 'axios';

export default class AnimeDetailScreen extends Component {

    constructor() {
        super();
        this.state = {
          animeInfo: {},
          episodeList: [],
          loadingState: true,
          animeTitle: 'Anime Detail'
        }
      }
    
    static navigationOptions = {
        title: 'Detail Anime'
    };
    
    componentDidMount() {
        this.getAnimeInfo(itemId);
        this.getEpisodeList(itemId);
        setTimeout(() => this.setState({
                loadingState: false,
                //animeTitle: this.state.animeInfo.detailAnime[0].title
            })
        , 20000);
    }

    getAnimeInfo = (itemId) => {
        axios.get('https://animeapp1.herokuapp.com/api/anime/' + itemId)
            .then((res) => {
                console.log(res.data.results)
                this.setState({
                    animeInfo: res.data.results
                })
            })
            .catch((err) => {
                alert(err)
            })
    }
    
    getEpisodeList = (itemId) => {
        axios.get('https://animeapp1.herokuapp.com/api/anime/' + itemId + '/video')
            .then((res) => {
                console.log(res.data.results)
                this.setState({
                    episodeList: res.data.results.listVideo
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {
      
        itemId = this.props.navigation.getParam('itemId');

        if(this.state.loadingState) return(
            <View>
                <Text>Wait a moment...</Text>
                <Spinner/>
            </View>
        )
        
        else return(
            <Container>
            <NavigationEvents onDidFocus={() => this.getAnimeInfo(itemId)} />
                <Content style={{flex: 3}}>
                    <View>
                        <Image
                            source={{uri: this.state.animeInfo.detailAnime[0].thumbnail}}
                            style={Styles.fullscreenImage}
                        />
                        <H1>{this.state.animeInfo.detailAnime[0].title}</H1>
                    </View>
                    <AnimeDetailProps
                        genre={this.state.animeInfo.genres}
                        year={this.state.animeInfo.detailAnime[0].tahun}
                        status={this.state.animeInfo.detailAnime[0].status}
                        rating={this.state.animeInfo.detailAnime[0].rating}
                        score={this.state.animeInfo.detailAnime[0].score}
                        view={this.state.animeInfo.detailAnime[0].view}
                        desc={this.state.animeInfo.detailAnime[0].description}

                    />
                    <H1>EPISODE LIST</H1>
                    <EpisodeList
                        data={this.state.episodeList}
                        image={this.state.animeInfo.detailAnime[0].thumbnail}
                    />
                    
                </Content>
            </Container>
        ) 
        
    }
}