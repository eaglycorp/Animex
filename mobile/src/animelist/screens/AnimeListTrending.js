import React, {Component} from 'react';
import {Text, View} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import axios from 'axios';

export default class AnimeListTrending extends Component {
    
    constructor() {
        super();
        this.state = {
            trendingAnime: []
        }
    }

    componentDidMount() {
        this.getTrendingAnime();
    }

    //maybe the content number can placed in redux?
    getTrendingAnime() {
        axios.get('https://animeapp1.herokuapp.com/api?sort=Trending&content=50&page=1')
        .then((res) => {
            console.log(res.data.results)
            this.setState({
                trendingAnime: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })
    }
    
    render() {
        const listLatest = [
            {
                name: 'Naruto Usuzami',
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

        return(
            <View>
                <AnimeListWithScore
                    data={this.state.trendingAnime}
                />
            </View>
        )
    }
}