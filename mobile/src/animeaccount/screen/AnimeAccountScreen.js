import React, {Component} from 'react';
import {
    Text,
    View,
    H1,
    Button
} from 'native-base';
import AnimeAccountLogin from './AnimeAccountLogin';
import AnimeAccountRegister from './AnimeAccountRegister'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AnimeAccountScreenLoggedIn from './AnimeAccountScreenLoggedIn';

const loggedin = false; //props to check if user already logged in or not

class AnimeAccountScreen extends Component {

    static navigationOptions = {
        title: 'Account'
    };

    render() {

        if(loggedin) {
            return( 
                <AnimeAccountScreenLoggedIn />
            )
        } else {
            return(
                <View>
                <H1>Account Screen</H1>
                <Button full bordered rounded style={{margin: 8}} onPress={() => this.props.navigation.navigate("login")}>
                    <Text>Sign In</Text>
                </Button>
                <Button full style={{margin: 8}} onPress={() => this.props.navigation.navigate("register")}>
                    <Text>Register</Text>
                </Button>
                
            </View>
            )
        }
    }
}

const AccountStack = createStackNavigator(
    {
        account: AnimeAccountScreen,
        login: AnimeAccountLogin,
        register: AnimeAccountRegister
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

export default createAppContainer(AccountStack);