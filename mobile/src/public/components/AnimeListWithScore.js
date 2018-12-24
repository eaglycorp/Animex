import React, { Component } from 'react';
import { FlatList, Image, TouchableHighlight, Dimensions, View } from 'react-native';
import {
    Card,
    CardItem,
    Thumbnail,
    H1,
    Text,
    Right,
    H2,
    ListItem,
    Left,
    Body,
    Spinner,
    Icon
} from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Styles from '../../assets/styles';
import Colors from '../../assets/colors';

class AnimeListWithScore extends Component {
    
    render() {

        const {data, isLoading, getFunction, pageId} = this.props;
        const containerWidth = Dimensions.get("window").width
        
        return(
                <FlatList
                    scrollEnabled={false}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    refreshing={isLoading}
                    contentContainerStyle={{margin: 8}}
                    data={data}
                    renderItem={({item, index}) => 

                            <TouchableHighlight onPress={() => {
                            this.props.navigation.navigate("detail", {itemId: item.id, title: item.title})
                        }}>
                        <Card style={Styles.animeCardList}>
                            <View>
                                <View style={Styles.CardNumber}>
                                    <Text style={{textAlign: "center", fontWeight: 'bold'}}>{index+1}</Text>
                                </View>
                                <Image
                                    style={Styles.imageList}
                                    source={{uri: item.thumbnail}}
                                    />
                            </View>
                            <CardItem style={{height: 72}}>
                                <Text style={{color: Colors.pureWhite, alignSelf: 'flex-start'}} note numberOfLines={3}>{item.title}</Text>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Icon name='eye' style={{color: Colors.pureWhite, fontSize: 12}} />
                                    <Text note>{item.view}</Text>
                                </Left>
                                <Right style={{flexDirection:'row', alignItems: "center", translateX: 16}}>
                                    <Icon name='star' style={{color: '#FFFF00', fontSize: 14, marginRight: 8}} />
                                    <Text note>{item.score}</Text>
                                </Right>
                            </CardItem>
                        </Card>
                            </TouchableHighlight>
                        
                    }
                    >
                </FlatList>
        )
    }
}

AnimeListWithScore.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    pageId: PropTypes.number,
    getFunction: PropTypes.func
}   

export default withNavigation(AnimeListWithScore);

/**
 * 
 * 
                        <ListItem thumbnail onPress={() => this.props.navigation.navigate("detail", {itemId: item.id, title: item.title})}>
                            <Left>
                                
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
 * 
 */