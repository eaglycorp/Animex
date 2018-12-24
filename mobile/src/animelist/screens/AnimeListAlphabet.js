import React, {Component} from 'react';
import {
    Text,
    View,
    Spinner,
    Content
} from 'native-base';
import AnimeListWithDivider from '../components/AnimeListWithDivider';

import axios from 'axios';
import { setInterval } from 'core-js';
import Container from '../../../native-base-theme/components/Container';
import Colors from '../../assets/colors';

export default class AnimeListAlphabet extends Component {
    
    constructor() {
        super();
        this.state = {
            loadingState: true,
            animeData: [
                {alphabet: '#', animes: []},
                {alphabet: 'A', animes: []},
                {alphabet: 'B', animes: []},
                {alphabet: 'C', animes: []},
                {alphabet: 'D', animes: []},
                {alphabet: 'E', animes: []},
                {alphabet: 'F', animes: []},
                {alphabet: 'G', animes: []},
                {alphabet: 'H', animes: []},
                {alphabet: 'I', animes: []},
                {alphabet: 'J', animes: []},
                {alphabet: 'K', animes: []},
                {alphabet: 'L', animes: []},
                {alphabet: 'M', animes: []},
                {alphabet: 'N', animes: []},
                {alphabet: 'O', animes: []},
                {alphabet: 'P', animes: []},
                {alphabet: 'Q', animes: []},
                {alphabet: 'R', animes: []},
                {alphabet: 'S', animes: []},
                {alphabet: 'T', animes: []},
                {alphabet: 'U', animes: []},
                {alphabet: 'V', animes: []},
                {alphabet: 'W', animes: []},
                {alphabet: 'X', animes: []},
                {alphabet: 'Y', animes: []},
                {alphabet: 'Z', animes: []}
            ]
        }
    }

    animeDataPlaceholder = [
        {alphabet: '#', animes: []},
        {alphabet: 'A', animes: []},
        {alphabet: 'B', animes: []},
        {alphabet: 'C', animes: []},
        {alphabet: 'D', animes: []},
        {alphabet: 'E', animes: []},
        {alphabet: 'F', animes: []},
        {alphabet: 'G', animes: []},
        {alphabet: 'H', animes: []},
        {alphabet: 'I', animes: []},
        {alphabet: 'J', animes: []},
        {alphabet: 'K', animes: []},
        {alphabet: 'L', animes: []},
        {alphabet: 'M', animes: []},
        {alphabet: 'N', animes: []},
        {alphabet: 'O', animes: []},
        {alphabet: 'P', animes: []},
        {alphabet: 'Q', animes: []},
        {alphabet: 'R', animes: []},
        {alphabet: 'S', animes: []},
        {alphabet: 'T', animes: []},
        {alphabet: 'U', animes: []},
        {alphabet: 'V', animes: []},
        {alphabet: 'W', animes: []},
        {alphabet: 'X', animes: []},
        {alphabet: 'Y', animes: []},
        {alphabet: 'Z', animes: []}
    ]

    // componentDidMount() {
    //     this.state.animeData.map((data, index) => {
    //         this.getAnimeData(data.alphabet, index);
    //     })
    //     setTimeout(() => this.setState({
    //         animeData: this.animeDataPlaceholder,
    //         loadingState: false
    //     })
    //     ,20000)
    // }
    
    getAnimeData(alphabet, index) {
        if(alphabet === '#') {
            axios.get('https://animeapp1.herokuapp.com/api?sort=all&content=18')
            .then((res) => {
                this.animeDataPlaceholder[index].animes = res.data.results      
            })
            .catch((err) => {
                alert(err)
            })
        } else {
            axios.get('https://animeapp1.herokuapp.com/api/' + alphabet)
            .then((res) => {
                this.animeDataPlaceholder[index].animes = res.data.results
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

    render() {
        return(
                <Content>
                    <AnimeListWithDivider 
                        data={this.state.animeData}
                        />
                </Content>
        )
    }
}