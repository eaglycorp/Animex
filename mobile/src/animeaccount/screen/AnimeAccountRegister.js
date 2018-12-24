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

export default class AnimeAccountRegister extends Component{
    
    static navigationOptions = {
        title: 'Register'
    };
    
    render() {
        return(
            <Container style={{alignContent:'center'}}>
                    <View style={{margin: 10}}>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Name</Label>
                            <Input style={{color: 'white'}}/>
                        </Item>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Username</Label>
                            <Input style={{color: 'white'}}/>
                        </Item>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Email</Label>
                            <Input style={{color: 'white'}}/>
                        </Item>
                        <Item floatingLabel style={{marginVertical: 8}}>
                            <Label style={{color: 'white'}}>Password</Label>
                            <Input secureTextEntry={true} style={{color: 'white'}} />
                        </Item>
                        <Button block last style={{marginTop: 24, marginBottom: 16}} onPress={() => this.props.navigation.navigate('TabScreen')}>
                            <Text>SIGN IN</Text>
                        </Button>
                    </View>
            </Container>
        )
    }
}