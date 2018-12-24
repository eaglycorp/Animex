import React, { Component } from 'react';
import { FlatList, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import {
    Card,
    CardItem,
    View,
    H1,
    Text,
    Spinner
} from 'native-base';
import PropTypes from 'prop-types';
import Styles from '../../assets/styles';
import {withNavigation} from 'react-navigation';

import {getAnime} from '../controller/actions/actAnime';
import Colors from '../../assets/colors';

class ListAnime extends Component {
    
    render() {

        const {title, data, href, isLoading} = this.props;
        
        const more = (href != '') ? 'more':'';

        return(
            <View style={{marginVertical: 8}}>
                <View style={Styles.animeListHeader}>
                    <H1>{title}</H1>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(href)}>
                        <Text note style={{color: Colors.primaryColor}}>{more}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    contentContainerStyle={{margin: 16}}
                    renderItem={({item}) => 
                        <Card style={{marginRight: 8}}>
                                <TouchableHighlight onPress={() => {
                                    this.props.navigation.navigate("detail", {itemId: item.id, title: item.title})
                                }}>
                                <View>
                                    <Image
                                        style={Styles.imageList}
                                        source={{uri: item.thumbnail}}
                                        resizeMode='stretch'
                                        loadingIndicatorSource={true}
                                        />            
                                </View>
                                </TouchableHighlight>
                             
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
    href: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
}   

export default withNavigation(ListAnime);