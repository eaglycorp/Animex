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
import store from './src/public/controller/redux/store';

import Colors from './src/assets/colors';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <StyleProvider style={getTheme(commonColor)}>
        <AppContainer />
      </StyleProvider>
      </Provider>
    );
  }
}

const RootStack = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Search: {screen: SearchStack},
    Genre: {screen: GenreStack},
    List: {screen: ListStack},
    Account: {screen: AccountStack}
  },
  {
    lazy: true,
    tabBarOptions: {
      style: {backgroundColor: Colors.pureBlack},
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: Colors.pureWhite
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Search') {
          iconName = `search`;
        } else if (routeName === 'Genre') {
          iconName = `albums`;
        } else if (routeName === 'List') {
          iconName = `list`;
        } else if (routeName === 'Account') {
          iconName = `contact`;
        }

        return <Icon name={iconName} style={{color: tintColor, fontSize: 20}} />;
      },
    })
  }
);

const AppContainer = createAppContainer(RootStack);