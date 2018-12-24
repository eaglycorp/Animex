/**
 * 
 * minus: 
 * add clear text when the text is not null
 * 
 * 
 */

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
    Item,
    Input,
    Icon
} from 'native-base';

import {TouchableOpacity, Modal, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import AnimeDetailScreen from '../../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../../animeplayer/AnimePlayerScreen';
import AnimeListWithScore from './AnimeListWithScore';

import axios from 'axios';
import Colors from '../../assets/colors';
import Loader from './Loader';

import {connect} from 'react-redux';
import { getSearchResult } from '../controller/actions/actSearch';

class SearchScreen extends Component {
    
    constructor() {
        super();
        this.state = {
            deleteIcon: '',
            searchIcon: '',
        }
    }

    stringInput = '';

    clearText = () => {
        this.textInput._root.clear();
        this.setState({
            deleteIcon: '',
            searchIcon: ''
        })
    }

    render() {
        return(
            <Container>
                <Header searchBar style={{backgroundColor: 'black'}}>
                    <Item>
                        <Input
                            placeholder="Search"
                            ref={Input => this.textInput = Input}
                            onChangeText={(text) => {this.stringInput = text; this.setState({deleteIcon: 'close', searchIcon: 'search'})}}
                        />
                        <TouchableOpacity onPress={() => this.clearText()}>
                            <Icon name={this.state.deleteIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.dispatch(getSearchResult(this.stringInput, 10, 1))}>
                            <Icon name={this.state.searchIcon} />
                        </TouchableOpacity>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <View style={{translateY: 300, translateX: 150, position: 'absolute'}}>
                    <Text style={{textAlign: "center"}}>{this.props.placeholder}</Text>
                </View>
                <Content>
                    <Loader isLoading={this.props.loading} />
                    <AnimeListWithScore
                        data={this.props.searchData}
                        isLoading={this.props.loading}
                    />
                </Content>
            </Container>
        )
    }
}


const SearchStack = createStackNavigator(
    {
        search: {
            screen: SearchScreen,
            navigationOptions: {
                header: null
            }
        },
        detail: AnimeDetailScreen,
        player: AnimePlayerScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.pureBlack,
                shadowOpacity: 0,
                shadowOffset: {
                  height: 0,
                },
                shadowRadius: 0,
            },
            headerTintColor: Colors.pureWhite
        }
    }
);

const mapStateToProps = (state) => ({
    searchData: state.search.searchData,
    loading: state.search.isLoading,
    placeholder: state.search.searchPlaceholder
})

export default createAppContainer(connect(mapStateToProps)(SearchScreen));