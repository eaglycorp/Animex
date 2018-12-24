import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import AnimeListTrending from './AnimeListTrending';
import AnimeListPopular from './AnimeListPopular';
import AnimeListTopAll from './AnimeListTopAll';
import AnimeDetailScreen from '../../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../../animeplayer/AnimePlayerScreen';
import Colors from '../../assets/colors';

const AnimeListScreen = createMaterialTopTabNavigator(
    {
        //Alphabetically: AnimeListAlphabet,
        top_all_time: AnimeListTopAll,
        Popular: AnimeListPopular,
        Trending: AnimeListTrending
    },
    {
        lazy: true,
        tabBarOptions: {
            scrollEnabled: true,
            optimizationsEnabled: true,
            inactiveTintColor: Colors.pureWhite,
            activeTintColor: Colors.primaryColor,
            style: {
                backgroundColor: Colors.pureBlack,
            },
            indicatorStyle: {
                backgroundColor: Colors.primaryColor
            }
        }
    }
)


const ListStack = createStackNavigator(
    {
        list: {screen: AnimeListScreen, navigationOptions: {title: 'Anime List'}},
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

export default createAppContainer(ListStack);