import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
    View,
    H2,
    H3
} from 'native-base';
import {Dimensions} from 'react-native';

import ListAnime from '../public/components/ListAnime';
import AnimeDetailProps from '../public/components/AnimeDetailProps';
import EpisodeList from '../public/components/EpisodeList';

import {connect} from 'react-redux';

import Loader from '../public/components/Loader';

import {
    Svg,
    Polygon,
    Image,
    Defs,
    ClipPath
} from 'react-native-svg';

import axios from 'axios';

class AnimeDetailScreen extends Component {

    constructor() {
        super();
        this.state = {
          animeInfo: {
              detailAnime: [{title: 'Anime Detail', thumbnail: ''}],
              genres: [{title: ''}]
            },
          episodeList: [],
          relatedAnime: [],
          loading: true,
          loadingDetail: true,
          loadingEpisode: true,
          animeTitle: 'Anime Detail'
        }
      }
    
    static navigationOptions = ({ navigation }) => ({
        title:  navigation.state.params.title || 'Anime Detail'
    });
    
    componentDidMount() {
        this.getAnimeInfo(itemId);
        this.getEpisodeList(itemId);
    }

    reloadAnimeData = (itemId) => {
        this.getAnimeInfo(itemId);
        this.getEpisodeList(itemId);
        setTimeout(() => {
            this.getRelated(this.state.animeInfo.genres[0].title, this.state.animeInfo.genres[1].title);
            this.setState({
                navigationOptions: this.state.animeInfo.detailAnime[0].title
            });
        }
        , 3000);
    }

    getAnimeInfo = (itemId) => {
        axios.get('https://animeapp1.herokuapp.com/api/anime/' + itemId)
            .then((res) => {
                console.log(res.data.results)
                this.setState({
                    animeInfo: res.data.results,
                    navigationOptions: this.state.animeInfo.detailAnime[0].title
                })
                this.getRelated(this.state.animeInfo.genres[0].title, this.state.animeInfo.genres[1].title);
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
                    episodeList: res.data.results.listVideo,
                    loadingEpisode: false
                })
                this.checkLoadingStatus();
            })
            .catch((err) => {
                alert(err)
            })
    }
    
    getRelated = (genre1 = 'action', genre2 = 'adventure') => {
        axios.get('https://animeapp1.herokuapp.com/api/related?genrePertama=' + genre1 + '&genreKedua=' + genre2 + '&content=5&page=1')
            .then((res) => {
                console.log(res.data.results)
                this.setState({
                    relatedAnime: res.data.result[0],
                    loadingDetail: false
                })
                this.checkLoadingStatus();
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {
      
        const width = Dimensions.get("window").width

        itemId = this.props.navigation.getParam('itemId');

        return(
            <Container>
                <Content>
                <Loader isLoading={this.state.loading} />
                    <View>
                    <Svg
                        style={{position: "absolute"}}
                        height='300'
                        width={width}
                    >
                        <Defs>
                            <ClipPath id="clip">
                                <Polygon
                                    points={'0,0 ' + width + ',0 ' + width + ',150, 0,300'} 
                                />
                            </ClipPath>
                        </Defs>

                        <Image
                            width="100%"
                            height='100%'
                            href={{uri: this.state.animeInfo.detailAnime[0].thumbnail}}
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#clip)"
                            />
                        <Polygon
                            fill='black'
                            fillOpacity='0.9'
                            points={'0,0 ' + width + ',0 ' + width + ',150, 0,300'} 
                        />
                        <Image
                            x='5%'
                            y='20%'
                            width="40%"
                            height="70%"
                            href={{uri: this.state.animeInfo.detailAnime[0].thumbnail}}
                            preserveAspectRatio="xMidYMid slice"
                            />

                    </Svg>
                    </View>
                    <View style={{translateY: 57, height: 300, margin: 8}}>
                        <H3 style={{width: 180, alignSelf: 'flex-end', marginBottom: 8}}>{this.state.animeInfo.detailAnime[0].title}</H3>
                    <AnimeDetailProps
                        genre={this.state.animeInfo.genres}
                        year={this.state.animeInfo.detailAnime[0].tahun}
                        status={this.state.animeInfo.detailAnime[0].status}
                        rating={this.state.animeInfo.detailAnime[0].rating}
                        score={this.state.animeInfo.detailAnime[0].score}
                        view={this.state.animeInfo.detailAnime[0].view}
                    />
                    </View>
                    <H2 style={{marginHorizontal: 16, marginVertical: 8}}>Description</H2>
                    <Text style={{marginHorizontal: 16, marginBottom: 8}}>{this.state.animeInfo.detailAnime[0].description}</Text>
                    <ListAnime
                        title='you may like this'
                        data={this.state.relatedAnime}
                        href=''
                    />
                    <H2 style={{marginHorizontal: 16, marginVertical: 8}}>EPISODE LIST</H2>
                    <EpisodeList
                        data={this.state.episodeList}
                        image={this.state.animeInfo.detailAnime[0].thumbnail}
                    />
                    
                </Content>
            </Container>
        ) 
        
    }
}

const mapStateToProps = (state) => ({
    detail: state.anime.detailData,
    related: state.anime.relatedData,
    episode: state.anime.episodeData,
    loading: state.anime.isLoading
})

export default connect(mapStateToProps)(AnimeDetailScreen);