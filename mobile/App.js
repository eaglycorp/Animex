import React, {Component} from 'react';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { StyleProvider, Button, Icon } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

import HomeStack from './src/animehome/AnimeHomeScreen';
import SearchStack from './src/public/components/SearchScreen';
import ListStack from './src/animelist/screens/AnimeListScreen';
import AccountStack from './src/animeaccount/screen/AnimeAccountScreen';
import GenreStack from './src/animegenre/AnimeGenreScreen';

import {Provider} from 'react-redux';
import reducers from './src/public/controller/redux/store';

// import getPopularAnime from './src/public/controller/AnimeController';

export default class App extends Component {
  
//   componentDidMount() {
//     getPopularAnime(10);
//  }

  render() {
    return (
      <Provider store={reducers}>
      <StyleProvider style={getTheme(commonColor)}>
        <AppContainer />
      </StyleProvider>
      </Provider>
    );
  }
}

const RootStack = createBottomTabNavigator(
  {
    home: {screen: HomeStack},
    search: {screen: SearchStack},
    genre: {screen: GenreStack},
    animelist: {screen: ListStack},
    account: {screen: AccountStack}
  }
);

const AppContainer = createAppContainer(RootStack);