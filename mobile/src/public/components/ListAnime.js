import React, { Component } from 'react';
import { FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import {
    Card,
    CardItem,
    View,
    H1,
    Text
} from 'native-base';
import PropTypes from 'prop-types';
import Styles from '../../assets/styles';
import {withNavigation} from 'react-navigation';

import {getAnime} from '../controller/actions/actAnime';

class ListAnime extends Component {
    
    render() {

        const {title, data, href} = this.props;
        
        return(
            <View>
                <H1>{title}</H1>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(href)}>
                    <Text>More</Text>
                </TouchableWithoutFeedback>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({item}) => 
                        <Card>
                                <TouchableWithoutFeedback onPress={() => {
                                    this.props.navigation.navigate("detail", {itemId: item.id})
                                }}>
                                <View>
                                    <Image
                                        style={Styles.imageList}
                                        source={{uri: item.thumbnail}}
                                        resizeMode='stretch'
                                        loadingIndicatorSource={true}
                                        />            
                                </View>
                                </TouchableWithoutFeedback>
                            </Card>
                    }
                >
                </FlatList>
            </View>
        )
    }
}

ListAnime.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    href: PropTypes.string.isRequired
}   

export default withNavigation(ListAnime);