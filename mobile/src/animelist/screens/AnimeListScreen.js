import React, {Component} from 'react';
import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import AnimeListAlphabet from './AnimeListAlphabet';
import AnimeListTrending from './AnimeListTrending';
import AnimeListPopular from './AnimeListPopular';
import AnimeListTopAll from './AnimeListTopAll';
import AnimeDetailScreen from '../../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../../animeplayer/AnimePlayerScreen';

const AnimeListScreen = createMaterialTopTabNavigator(
    {
        Alphabetically: AnimeListAlphabet,
        top_all_time: AnimeListTopAll,
        Popular: AnimeListPopular,
        Trending: AnimeListTrending
    },
    {
        tabBarOptions: {
            scrollEnabled: true,
            inactiveBackgroundColor: '#000',
            activeBackgroundColor: '#000',
            tabStyle: {
                backgroundColor: '#000'
            }
        }
    }
)


const ListStack = createStackNavigator(
    {
        list: AnimeListScreen,
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

export default createAppContainer(ListStack);