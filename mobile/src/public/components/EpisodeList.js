import React, { Component } from 'react';
import { FlatList, TouchableHighlight} from 'react-native';
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

import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
import Colors from '../../assets/colors';

class EpisodeList extends Component {
    
    constructor() {
        super();
        this.state = {
            width: 0,
            height: 0
        }
    }

    render() {

        const {data, image} = this.props;
        
        return(
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('player', {episodeLink: item.video_embeded, title: 'Episode '+item.episode})}
                    >
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: Colors.pureBlack, marginVertical: 8}}>
                        <View>
                            <Text style={{marginLeft: 16, alignSelf: 'flex-start', fontWeight: 'bold'}}>Episode {item.episode}</Text>    
                        </View>
                        <View>
                            <Svg
                                width='120'
                                height='60'
                            >
                                <Defs>
                            <ClipPath id="clip">
                                <Polygon
                                    points={'60,0 120,0 120,60 0,60'} 
                                />
                            </ClipPath>
                        </Defs>

                        <Image
                            width="100%"
                            height='100%'
                            href={{uri: image}}
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#clip)"
                            />
                        <Polygon
                            fill='black'
                            fillOpacity='0.8'
                            points={'60,0 120,0 120,60 0,60'} 
                        />
                        </Svg>
                        </View>
                        </View>
                    </TouchableHighlight>
                }
            >
            </FlatList>
        )
    }
}

EpisodeList.propTypes = {
    data: PropTypes.array,
    image: PropTypes.string
}   

export default withNavigation(EpisodeList);