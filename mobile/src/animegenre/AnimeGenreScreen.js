import React, {Component} from 'react';
import {
    Text,
    View,
    H1,
    List,
    ListItem,
    Content,
    Button,
    Spinner
} from 'native-base';
import AnimeListWithScore from '../public/components/AnimeListWithScore';

import AnimeDetailScreen from '../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../animeplayer/AnimePlayerScreen';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {ScrollView} from 'react-native';

import axios from 'axios';

class AnimeGenreScreen extends Component {
    
    constructor() {
        super();
        this.state = {
            genre: [],
            animeList: [],
            loadingState: true
        }
    }

    componentDidMount() {
        this.getAnimeGenre();
        setTimeout(() => 
            this.setState({loadingState: false})
        , 20000);
    }

    getAnimeGenre = () => {
        axios.get('https://animeapp1.herokuapp.com/api/genre')
        .then((res) => {
            // console.log(res.data.results)
            this.setState({
                genre: res.data
            })
        })
        .catch((err) => {
            alert(err)
        })        
    }

    getGenreList = (genre = 'action') => {
        axios.get('https://animeapp1.herokuapp.com/api/genre/' + genre)
        .then((res) => {
            // console.log(res.data.results)
            this.setState({
                animeList: res.data.result
            })
        })
        .catch((err) => {
            alert(err)
        })        
    }
    
    render() {

        const listLatest = [
            {
                name: 'Cardcaptor Sakura',
                viewers: 23432,
                rating: '9.3',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/518VI3j73pL._SX331_BO1,204,203,200_.jpg'
            },
            {
                name: 'Akame ga Kill',
                viewers: 23432,
                rating: '9.3',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/518VI3j73pL._SX331_BO1,204,203,200_.jpg'
            },
            {
                name: 'Akame ga Kill',
                viewers: 23432,
                rating: '9.3',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/518VI3j73pL._SX331_BO1,204,203,200_.jpg'
            },
        ]

        //when genre button clicked, the list will filtered by selected genre and the button will be filled
        genre = ['horror', 'action', 'adventrue', 'mystery', 'sci-fi', 'fantasy', 'shounen',  'shoujou', 'seinen', 'josei'];

        if(this.state.loadingState) return (
            <View>
                <Text>Wait a moment...</Text>
                <Spinner/>
            </View>
        )

        else return(
            <Content>
                <ScrollView horizontal> 
                    {this.state.genre.map((data) =>     
                        <Button small bordered rounded key={data.toString()} style={{margin: 4}} onPress={() => this.getGenreList(data.title)}>
                            <Text>{data.title}</Text>
                        </Button>
                    )}
                </ScrollView>
                <AnimeListWithScore
                    data={this.state.animeList}
                />
            </Content>
        )
    }
}

const GenreStack = createStackNavigator(
    {
        genre: AnimeGenreScreen,
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

export default createAppContainer(GenreStack);