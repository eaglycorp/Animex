import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
    Button,
    View,
    H3
} from 'native-base';
import { Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Colors from '../assets/colors';

import ListAnime from '../public/components/ListAnime';
import AnimeDetailScreen from '../animedetail/AnimeDetailScreen';
import AnimePlayerScreen from '../animeplayer/AnimePlayerScreen';

import Loader from '../public/components/Loader';
import {connect} from 'react-redux';
import {getPopular, getTrending, getRandom} from '../public/controller/actions/actList';

import Svg,{
    Polygon,
    Image,
    Defs,
    ClipPath
} from 'react-native-svg';
import { getAnimeDetail } from '../public/controller/actions/actAnime';

class AnimeHomeScreen extends Component {
    
        componentDidMount() {
            this.props.dispatch(getPopular(1));
            this.props.dispatch(getTrending(1));
            this.props.dispatch(getRandom());
    }
    
    render() {

        const width = Dimensions.get("window").width

        return(
            <Container>
                <Content>
                <Loader isLoading={this.props.loading} />
                    <Svg
                        style={{position: "absolute"}}
                        height='200'
                        width={width}
                    >
                        <Defs>
                            <ClipPath id="clip">
                                <Polygon
                                    points={'0,0 ' + width + ',0 ' + width + ',100, 0,200'} 
                                />
                            </ClipPath>
                        </Defs>

                        <Image
                            width="100%"
                            href={{uri: this.props.randomData[0].detailAnime.thumbnail}}
                            preserveAspectRatio="xMidYMid slice"
                            clipPath="url(#clip)"
                            />
                        <Polygon
                            fill='black'
                            fillOpacity='0.8'
                            points={'0,0 ' + width + ',0 ' + width + ',100, 0,200'} 
                        />
                        <Image
                            x='5%'
                            y='10%'
                            width="40%"
                            height="90%"
                            href={{uri: this.props.randomData[0].detailAnime.thumbnail}}
                            preserveAspectRatio="xMidYMid slice"
                            />

                    </Svg>
                    <View style={{height: 200, margin: 16, justifyContent: 'center'}}>
                               <H3 style={{textAlign: 'right', width: 150, alignSelf: 'flex-end'}}>{(this.props.randomData[0].detailAnime.title || '')}</H3>
                        <Button style={{alignSelf: "flex-end", marginTop: 16}} small onPress={() => {this.props.dispatch(getAnimeDetail(this.props.randomData[0])); this.props.navigation.navigate('detail', {title: this.props.randomData[0].detailAnime.title})}}>
                            <Text>WATCH NOW</Text>
                        </Button>
                    </View>
                    <View>

                    <ListAnime
                        title='TRENDING'
                        data={this.props.trendingData}
                        href='Trending'
                        />
                    <ListAnime
                        title='MOST POPULAR'
                        data={this.props.popularData}
                        href='Popular' 
                        />
                        </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    popularData: state.list.popularData,
    trendingData: state.list.trendingData,
    randomData: state.list.randomData,
    loading: state.list.isLoading
})

const HomeStack = createStackNavigator(
    {
        home: {screen: connect(mapStateToProps)(AnimeHomeScreen), navigationOptions: {header: null}},
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

export default createAppContainer(HomeStack);