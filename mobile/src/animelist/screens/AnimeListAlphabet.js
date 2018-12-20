import React, {Component} from 'react';
import {
    Text,
    View,
    List,
    ListItem,
    Content
} from 'native-base';
import AnimeListWithDivider from '../components/AnimeListWithDivider';

export default class AnimeListAlphabet extends Component {
    render() {
        
        const dataAlphabr = [
            {
                alphabet: 'A',
                animes: [
                    'Akame ga Kill!!!',
                    'Ano hi Mita Hana'
                ]
            },
            {
                alphabet: 'B',
                animes: [
                    'Bakuman',
                    'Barakamon',
                    'Bake no monogatari'
                ]
            },
            {
                alphabet: 'G',
                animes: [
                    'Gundam SEED',
                    'Gundam 00',
                    'Gundam Unicorn',
                    'Gundam Wing'
                ]
            },
            {
                alphabet: 'P',
                animes: [
                    'Persona 3 movie 1 - Spring of Birth',
                    'Persona 3 movie 2 - Midsummer Knight Dream',
                    'Persona 3 movie 3 - Falling Down',
                    'Persona 3 movie 4 - Winter of Rebirth',
                    'Persona 4 the Animation',
                    'Persona 5 the Animation'
                ]
            },
        ]

        return(
            <Content>
                <AnimeListWithDivider 
                    data={dataAlphabr}
                />
            </Content>
        )
    }
}