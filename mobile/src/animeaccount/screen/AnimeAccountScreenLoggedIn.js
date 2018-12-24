import React, {Component} from 'react';
import {
    Text,
    View,
    H1,
    Button
} from 'native-base';
import Container from '../../../native-base-theme/components/Container';

export default class AnimeAccountScreenLoggedIn extends Component {
    render() {
        return(
            <Container>
            <View>
                <Text>Account Logged In</Text>
            </View>
            </Container>
        )
    }
}

