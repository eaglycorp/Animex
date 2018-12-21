import React, {Component} from 'react';
import {Text, View} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import axios from 'axios';

export default class AnimeListPopular extends Component {
    
    constructor() {
        super();
        this.state = {
            popularAnime: []
        }
    }

    componentDidMount() {
        this.getPopularAnime();
    }

    //maybe the content number can placed in redux?
    getPopularAnime() {
        axios.get('https://animeapp1.herokuapp.com/api?sort=Popular&content=50&page=1')
        .then((res) => {
            console.log(res.data.results)
            this.setState({
                popularAnime: res.data.results
            })
        })
        .catch((err) => {
            alert(err)
        })
    }
    
    render() {
        return(
            <View>
                <AnimeListWithScore
                    data={this.state.popularAnime}
                />
            </View>
        )
    }
}