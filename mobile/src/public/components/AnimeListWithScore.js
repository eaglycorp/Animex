import React, { Component } from 'react';
import { FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import {
    Card,
    CardItem,
    View,
    Thumbnail,
    H1,
    Text,
    Right,
    H2,
    ListItem,
    Left,
    Body
} from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Styles from '../../assets/styles';

class AnimeListWithScore extends Component {
    
    render() {

        const {data} = this.props;
        
        return(
                <FlatList
                    data={data}
                    renderItem={({item, index}) => 
                        <ListItem thumbnail onPress={() => this.props.navigation.navigate("detail", {itemId: item.id})}>
                            <Left>
                                <H2>{index + 1}</H2>
                                <Thumbnail square source={{uri: item.thumbnail}} />
                            </Left>
                            <Body>
                                <Text>{item.title}</Text>
                            </Body>
                            <Right>
                                <Text note>{item.view}</Text>
                                <Text note>{item.score}</Text>
                            </Right>
                        </ListItem>
                    }
                >
                </FlatList>
        )
    }
}

AnimeListWithScore.propTypes = {
    data: PropTypes.array.isRequired
}   

export default withNavigation(AnimeListWithScore);