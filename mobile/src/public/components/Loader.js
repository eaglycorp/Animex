import React, {Component} from 'react';
import {
    View,
    Modal
} from 'react-native';
import { Spinner } from 'native-base';
import Colors from '../../assets/colors';
import Styles from '../../assets/styles';

const Loader = props => {
    const {
        isLoading,
        ...attributes
    } = props;

    return (
        <Modal
            visible={isLoading}
            transparent={true}
        >
            <View style={Styles.LoadingModal}>
                <View style={Styles.LoadingWrapper}>
                    <Spinner color={Colors.primaryColor}/>
                </View>
            </View>
        </Modal>
    )
}

export default Loader;