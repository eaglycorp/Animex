import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
    Card,
    CardItem,
    View,
    H1,
    Button,
    Text,
} from 'native-base';
import PropTypes from 'prop-types';
import Styles from '../../assets/styles';
import NumberFormat from 'react-number-format';

class AnimeDetailProps extends Component {
    
    render() {

        const {genre, year, desc, status, rating, score, view} = this.props;
        
        return(
            <View style={{alignItems: 'flex-end'}}>
                <View style={{width: 180}}>
                    <Text note><Text note style={{fontWeight: "bold"}}>genre : </Text>{genre.map((data) => <Text note>{data.title}, </Text>)}</Text>
                    <Text note><Text note style={{fontWeight: "bold"}}>Year :</Text> {year}</Text>
                    <Text note><Text note style={{fontWeight: "bold"}}>status :</Text> {status}</Text>
                    <Text note><Text note style={{fontWeight: "bold"}}>Rating :</Text> {rating}</Text>
                    <Text note><Text note style={{fontWeight: "bold"}}>Score :</Text> {score}</Text>
                    <Text note><Text note style={{fontWeight: "bold"}}>Total Viewers :</Text> {view}</Text>
                </View>
            </View>
        )
    }
}

AnimeDetailProps.propTypes = {
    genre: PropTypes.array.isRequired,
    year: PropTypes.string,
    status: PropTypes.string,
    rating: PropTypes.string,
    score: PropTypes.number,
    view: PropTypes.number,
    desc: PropTypes.string
}   

export default AnimeDetailProps;                
