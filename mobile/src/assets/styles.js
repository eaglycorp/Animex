import {
    StyleSheet
  } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from './colors';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
    imageList: {
        width: 170,
        height: 230
    },
    fullscreenImage: {
        width: deviceWidth,
        height: (deviceHeight*3)/5
    },

    animeListHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16
    },
    CardNumber: {
        width: 25,
        height: 25,
        backgroundColor: Colors.primaryColor,
        position: "absolute",
        alignSelf: 'flex-start',
        alignContent: 'center',
        zIndex: 2
    },
    animeCardList: {
        margin: 8,
        width: 170,
        borderWidth: 0,
        borderColor: Colors.pureBlack,
        backgroundColor: Colors.pureBlack
    },
    LoadingModal: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadingWrapper: {
        height: 100,
        width: 100,
        backgroundColor: Colors.pureBlack,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})
  
export default Styles;