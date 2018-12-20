import React, { Component } from 'react';
import { FlatList, Image } from 'react-native';
import {
    Card,
    CardItem,
    View,
    H1,
    ListItem,
    Button,
    Text,
    Thumbnail,
    Row,
    Col
} from 'native-base';
import PropTypes from 'prop-types';
import Styles from '../../assets/styles';
import { withNavigation } from 'react-navigation';

class EpisodeList extends Component {
    
    render() {

        const {data, image, animeId} = this.props;
        
        return(
            <FlatList
                inverted
                data={data}
                renderItem={({item}) => 
                    <ListItem onPress={() => this.props.navigation.navigate('player', {episodeLink: item.video_embeded})}>
                        <Col size={3}>
                            <Text style={{alignSelf: 'flex-start'}}>Episode {item.episode}</Text>    
                        </Col>
                        <Col size={1}>
                                <Thumbnail square source={{uri: image}} style={{width: 100, height: 50}} />
                        </Col>
                    </ListItem>
                }
            >
            </FlatList>
        )
    }
}

EpisodeList.propTypes = {
    data: PropTypes.array,
    image: PropTypes.string,
    animeId: PropTypes.number
}   

export default withNavigation(EpisodeList);