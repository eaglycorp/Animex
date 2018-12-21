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

class AnimeDetailProps extends Component {
    
    render() {

        const {genre, year, desc, status, rating, score, view} = this.props;
        
        return(
            <View>
                <ScrollView horizontal>
                    {genre.map((data) =>     
                        <Button small bordered rounded key={data.toString()} style={{margin: 4}}>
                            <Text>{data.title}</Text>
                        </Button>
                    )}
                </ScrollView>
                <Text note>Year : {year}</Text>
                <Text note>status : {status}</Text>
                <Text note>Rating : {rating}</Text>
                <Text note>Score : {score}</Text>
                <Text note>Total Viewers : {view}</Text>
                <Text>{desc}</Text>
            </View>
        )
    }
}

AnimeDetailProps.propTypes = {
    genre: PropTypes.array.isRequired,
    year: PropTypes.string,
    status: PropTypes.string,
    rating: PropTypes.string,
    score: PropTypes.string,
    view: PropTypes.string,
    desc: PropTypes.string
}   

export default AnimeDetailProps;                
