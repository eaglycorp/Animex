/**
 * 
 * Verivy input data
 * 
 */

import React, {Component} from 'react';
import {
    Container,
    Item,
    Input,
    Text,
    Button,
    Label
} from 'native-base';
import { View } from 'react-native';
import { registerAccount } from '../../public/controller/actions/actAccount';
import { connect } from 'react-redux';
import Colors from '../../assets/colors';

import Loader from '../../public/components/Loader';

class AnimeAccountRegister extends Component{
    
    static navigationOptions = {
        title: 'Register'
    };
    
    username = '';
    name = '';
    email = '';
    password = '';

    registerCheck = () => {
        console.log('tes')
        this.props.dispatch(registerAccount(this.username, this.name, this.email, this.password));
        setTimeout(() => {if(this.props.message === 'success') this.props.navigation.navigate('loggedInScreen')}, 3000)
    }

    render() {
        return(
            <Container style={{alignContent:'center'}}>
                    <Loader isLoading={this.props.loading} />
                    <View style={{margin: 10}}>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Name</Label>
                            <Input style={{color: 'white'}} onChangeText={(text) => this.name = text}/>
                        </Item>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Username</Label>
                            <Input style={{color: 'white'}} onChangeText={(text) => this.username = text}/>
                        </Item>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Email</Label>
                            <Input style={{color: 'white'}} onChangeText={(text) => this.email = text} textContentType='emailAddress'/>
                        </Item>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Password</Label>
                            <Input secureTextEntry={true} style={{color: 'white'}} onChangeText={(text) => this.password = text}/>
                        </Item>
                        <Button block last style={{marginTop: 24, marginBottom: 16}} onPress={() => this.registerCheck()}>
                            <Text>REGISTER</Text>
                        </Button>
                        <Text style={{color: Colors.primaryColor}}>{this.props.message}</Text>
                    </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.account.message,
    loading: state.account.isLoading
})

export default connect(mapStateToProps)(AnimeAccountRegister);