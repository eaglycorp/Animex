import React, {Component} from 'react';
import {
    Text,
    View,
    H1,
    Button,
    Container
} from 'native-base';

import {connect} from 'react-redux';
import { logoutAccount } from '../../public/controller/actions/actAccount';
import {withNavigation} from 'react-navigation';

class AnimeAccountScreenLoggedIn extends Component {
    
    static navigationOptions = {
        title: 'Your Account'
    };

    handleLogout = () => {
        this.props.dispatch(logoutAccount());
        this.props.navigation.navigate("account");
        this.props.navigation.navigate("home");
    }

    render() {
        
        return(
            <Container style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <H1>{this.props.name}</H1>
                    <Text>{this.props.username}</Text>
                    <Text note>{this.props.email}</Text>
                    <Button style={{alignSelf: "center", marginTop: 16}} onPress={() => {
                        this.props.dispatch(logoutAccount());
                        this.props.navigation.navigate("account");
                        this.props.navigation.navigate("home");
                    }}>
                        <Text>LOG OUT</Text>
                    </Button>
                
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.account.name,
    username: state.account.username,
    email: state.account.email,
})

export default connect(mapStateToProps)(AnimeAccountScreenLoggedIn);