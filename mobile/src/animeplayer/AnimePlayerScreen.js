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
    Col
} from 'native-base'
import { Image } from 'react-native';
import Colors from '../assets/colors';
import Styles from '../assets/styles';
import { WebView } from 'react-native-gesture-handler';

import axios from 'axios';

export default class AnimePlayerScreen extends Component {
    
    // constructor() {
    //     super();
    //     this.state = {
    //       episodeVideo: '',
    //       loadingState: true,
    //       animeTitle: 'Anime Detail'
    //     }
    //   }

    // componentDidMount() {
    //     this.getEpisode(itemId, episodeId);
    //     setTimeout(() => this.setState({
    //             loadingState: false,
    //         })
    //     , 10000);
    // }

    // getEpisode = (itemId, episodeId) => {
    //     axios.get('https://animeapp1.herokuapp.com/api/anime/' + itemId + '/video/' + episodeId)
    //         .then((res) => {
    //             console.log(res.data.results)
    //             this.setState({
    //                 episodeVideo: res.data[0].video_embeded
    //             })
    //         })
    //         .catch((err) => {
    //             alert(err)
    //         })
    // }

    static navigationOptions = {
        title: 'Episode 4'
    };
    
    render() {
        
        episodeLink = this.props.navigation.getParam('episodeLink');

        // animeId = this.props.navigation.getParam('animeId');
        // episodeId = this.props.navigation.getParam('episodeId');

        return(
            <Container style={{backgroundColor: 'black'}}>
                    <View style={{flex: 1}}>
                        <WebView
                            style={{width: 360, height: 210}}
                            javaScriptEnabled={true}
                            source={{uri: episodeLink}}
                            />
                                </View>
            </Container>
        )
    }
}