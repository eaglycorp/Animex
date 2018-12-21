import React, {Component} from 'react';
import {
    Text,
    View
} from 'native-base';
import AnimeListWithScore from '../../public/components/AnimeListWithScore';

import axios from 'axios';

export default class AnimeListTopAll extends Component {
    
    constructor() {
        super();
        this.state = {
            topAllAnime: []
        }
    }

    componentDidMount() {
        this.getTopAllAnime();
    }

    //maybe the content number can placed in redux?
    getTopAllAnime() {
        axios.get('https://animeapp1.herokuapp.com/api?sort=TopAll&content=50&page=1')
        .then((res) => {
            console.log(res.data.results)
            this.setState({
                topAllAnime: res.data.results
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
                    data={this.state.topAllAnime}
                />
            </View>
        )
    }
}