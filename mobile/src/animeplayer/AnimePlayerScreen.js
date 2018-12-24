import React, {Component} from 'react';
import { Container, View } from 'native-base'
import WebView from 'react-native-android-fullscreen-webview-video';

export default class AnimePlayerScreen extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title || 'Episode 00'
    });

    render() {
        
        title = this.props.navigation.getParam('title', 'Episode Zero');
        episodeLink = this.props.navigation.getParam('episodeLink');
        
        return(
            <Container>
                    <View style={{flex: 1}}>
                        <WebView
                            scalesPageToFit={true}
                            renderLoading={true}
                            allowsInlineMediaPlayback={true}
                            style={{width: 360, height: 210}}
                            javaScriptEnabled={true}
                            source={{uri: episodeLink}}
                            />
                                </View>
            </Container>
        )
    }
}