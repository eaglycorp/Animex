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

import { createStackNavigator, createAppContainer } from 'react-navigation';

import AnimeDetailScreen from '../../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../../animeplayer/AnimePlayerScreen';
import AnimeListWithScore from './AnimeListWithScore';

import axios from 'axios';

class SearchScreen extends Component {
    
    constructor() {
        super();
        this.state = {
            searchResult: [],
            loadingState: true
        }
    }
    
    getSearchResult = (textInput) => {
        axios.get('https://animeapp1.herokuapp.com/api?search=' + textInput)
        .then((res) => {
            // console.log(res.data.results)
            this.setState({
                searchResult: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })        
    }

    render() {
        return(
            <Container>
                <Header searchBar style={{backgroundColor: 'black'}}>
                    <Item>
                        <Input placeholder="Search" onChangeText={(text) => this.getSearchResult(text)} />
                        <Icon name='close' />
                        <Icon name='search' />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <AnimeListWithScore
                        data={this.state.searchResult}
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
                backgroundColor: '#000'
            },
            headerTintColor: '#FFF'
        }
    }
);

export default createAppContainer(SearchStack);