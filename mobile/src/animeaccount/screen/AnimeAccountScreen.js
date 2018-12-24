import React, {Component} from 'react';
import {
    Text,
    View,
    H1,
    Button,
    Container,
    H3
} from 'native-base';
import AnimeAccountLogin from './AnimeAccountLogin';
import AnimeAccountRegister from './AnimeAccountRegister'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AnimeAccountScreenLoggedIn from './AnimeAccountScreenLoggedIn';
import Colors from '../../assets/colors';

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
                <Container style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <H3>You are not logged in</H3>
                <Button full style={{margin: 8}} onPress={() => this.props.navigation.navigate("login")}>
                    <Text>Sign In</Text>
                </Button>
                <Button full style={{margin: 8}} onPress={() => this.props.navigation.navigate("register")}>
                    <Text>Register</Text>
                </Button>
                
            </Container>
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

export default createAppContainer(AccountStack);