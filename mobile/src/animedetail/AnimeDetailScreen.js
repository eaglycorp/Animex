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
import { getRelated, getEpisodeList } from '../public/controller/actions/actAnime';

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
        this.props.dispatch(getRelated(this.props.detail.genre[0].title, this.props.detail.genre[1].title));
        this.props.dispatch(getEpisodeList(this.props.detail.detailAnime.id));
    }

    render() {
      
        const width = Dimensions.get("window").width

        itemId = this.props.navigation.getParam('itemId');

        return(
            <Container>
                <Content>
                <Loader isLoading={this.props.loading} />
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
                            href={{uri: this.props.detail.detailAnime.thumbnail}}
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
                            href={{uri: this.props.detail.detailAnime.thumbnail}}
                            preserveAspectRatio="xMidYMid slice"
                            />

                    </Svg>
                    </View>
                    <View style={{translateY: 57, height: 300, margin: 8}}>
                        <H3 style={{width: 180, alignSelf: 'flex-end', marginBottom: 8}}>{this.props.detail.detailAnime.title}</H3>
                    <AnimeDetailProps
                        genre={this.props.detail.genre}
                        year={this.props.detail.detailAnime.tahun}
                        status={this.props.detail.detailAnime.status}
                        rating={this.props.detail.detailAnime.rating}
                        score={this.props.detail.detailAnime.score}
                        view={this.props.detail.detailAnime.view}
                    />
                    </View>
                    <H2 style={{marginHorizontal: 16, marginVertical: 8}}>Description</H2>
                    <Text style={{marginHorizontal: 16, marginBottom: 8}}>{this.props.detail.detailAnime.description}</Text>
                    <ListAnime
                        title='you may like this'
                        data={this.props.related}
                        href=''
                    />
                    <H2 style={{marginHorizontal: 16, marginVertical: 8}}>EPISODE LIST</H2>
                    <EpisodeList
                        data={this.props.episode}
                        image={this.props.detail.detailAnime.thumbnail}
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