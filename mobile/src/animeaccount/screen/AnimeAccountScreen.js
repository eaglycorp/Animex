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
import {connect} from 'react-redux';

class AnimeAccountScreen extends Component {

    static navigationOptions = {
        title: 'Account'
    };

    render() {
            return(
                <Container style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <H3>You are not logged in</H3>
                <Button full style={{margin: 8}} onPress={() => this.props.navigation.navigate("login")}>
                    <Text>Login</Text>
                </Button>
                <Button full style={{margin: 8}} onPress={() => this.props.navigation.navigate("register")}>
                    <Text>Register</Text>
                </Button>
                
            </Container>
            )
        }
    }

const mapStateToProps = (state) => ({
    loggedIn: state.account.loggedIn,
    username: state.account.username,
    name: state.account.name,
    email: state.account.email
})

const AccountStack = createStackNavigator(
    {
        account: connect(mapStateToProps)(AnimeAccountScreen),
        login: AnimeAccountLogin,
        register: AnimeAccountRegister,
        loggedInScreen: AnimeAccountScreenLoggedIn
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