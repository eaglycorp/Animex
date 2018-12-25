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
    Button,
    Item,
    Input,
    Icon
} from 'native-base';

import {TouchableOpacity, Modal, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import AnimeDetailScreen from '../../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../../animeplayer/AnimePlayerScreen';
import AnimeListWithScore from './AnimeListWithScore';

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
    searchQuery = '';

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
                            keyboardType='web-search'
                            onChangeText={(text) => {this.stringInput = text; this.setState({deleteIcon: 'close', searchIcon: 'search'})}}
                        />
                        <TouchableOpacity onPress={() => this.clearText()}>
                            <Icon name={this.state.deleteIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.searchQuery = this.stringInput; this.props.dispatch(getSearchResult(this.searchQuery, 1))}}>
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
                    <Loader isLoading={this.props.loading} />
                    <AnimeListWithScore
                        data={this.props.searchData}
                        pageNo={this.props.searchPage}
                        lastPage={this.props.searchLastPage}
                        handleLoadMore={getSearchResult(this.searchQuery, this.props.searchPage)}
                    />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    searchData: state.search.searchData,
    loading: state.search.isLoading,
    placeholder: state.search.searchPlaceholder,
    searchPage: state.search.searchPage,
    searchLastPage: state.search.searchLastPage
})

const SearchStack = createStackNavigator(
    {
        search: {
            screen: connect(mapStateToProps)(SearchScreen),
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

export default createAppContainer(SearchStack);