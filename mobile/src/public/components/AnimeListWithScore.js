import React, { Component } from 'react';
import { FlatList, Image, TouchableHighlight, Dimensions, View } from 'react-native';
import {
    Card,
    CardItem,
    Text,
    Right,
    Left,
    Icon
} from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Styles from '../../assets/styles';
import Colors from '../../assets/colors';
import { getAnimeDetail } from '../controller/actions/actAnime';
import {connect} from 'react-redux';

class AnimeListDetailed extends Component {
    
    onEndReachedCalledDuringMomentum = true;

    render() {

        const {data, isLoading, handleLoadMore, lastPage, pageNo} = this.props;

        return(
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.detailAnime.id}
                    refreshing={isLoading}
                    contentContainerStyle={{margin: 8}}
                    data={data}
                    onEndReached={() => {
                        if (!this.onEndReachedCalledDuringMomentum && pageNo !== lastPage) {
                            this.props.dispatch(handleLoadMore)
                            this.onEndReachedCalledDuringMomentum = true;
                        }}
                    }
                    onEndReachedThreshold={1}
                    onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                    renderItem={({item, index}) => 

                            <TouchableHighlight onPress={() => {
                                this.props.dispatch(getAnimeDetail(item))
                            this.props.navigation.navigate("detail", {title: item.detailAnime.title})
                        }}>
                        <Card style={Styles.animeCardList}>
                            <View>
                                <View style={Styles.CardNumber}>
                                    <Text style={{textAlign: "center", fontWeight: 'bold'}}>{index+1}</Text>
                                </View>
                                <Image
                                    style={Styles.imageList}
                                    source={{uri: item.detailAnime.thumbnail}}
                                    />
                            </View>
                            <CardItem style={{height: 72}}>
                                <Text style={{color: Colors.pureWhite, alignSelf: 'flex-start'}} note numberOfLines={3}>{item.detailAnime.title}</Text>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Icon name='eye' style={{color: Colors.pureWhite, fontSize: 12}} />
                                    <Text note>{item.detailAnime.view}</Text>
                                </Left>
                                <Right style={{flexDirection:'row', alignItems: "center", translateX: 16}}>
                                    <Icon name='star' style={{color: '#FFFF00', fontSize: 14, marginRight: 8}} />
                                    <Text note>{item.detailAnime.score}</Text>
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

const mapStateToProps = () => ({});

AnimeListDetailed.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    pageNo: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired
}   

AnimeListWithScore = connect(mapStateToProps)(AnimeListDetailed);

export default withNavigation(AnimeListWithScore);