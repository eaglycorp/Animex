import {
    StyleSheet
  } from 'react-native';
import { Dimensions } from 'react-native';
import Colros from './colors';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
    imageList: {
        width: 120,
        height: 200,
    },
    fullscreenImage: {
        width: deviceWidth,
        height: (deviceHeight*3)/5
    }
})
  
export default Styles;