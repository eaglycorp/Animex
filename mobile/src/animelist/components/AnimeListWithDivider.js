/**
 * 
 * DIVIDER stuck in top
 * 
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    List,
    ListItem,
    Content
} from 'native-base';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Styles from '../../assets/styles';

class AnimeListWithDivider extends Component {
    render() {

        const { data } = this.props;

        return(
            <FlatList
                data={data}
                renderItem={({item}) => 
                    <View>
                    <ListItem itemDivider>
                        <Text>{item.alphabet}</Text>
                    </ListItem>
                    {item.animes.map((anime) => 
                          <ListItem onPress={() => this.props.navigation.navigate("detail")}>
                              <Text>{anime}</Text>
                          </ListItem>    
                    )}
                    </View>
                }
            >
            </FlatList>
        )
    }
}

AnimeListWithDivider.propTypes = {
    data: PropTypes.array
}

export default withNavigation(AnimeListWithDivider);
