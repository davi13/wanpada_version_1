import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import {Ionicons} from '@expo/vector-icons';

import { styles } from './style';

class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champs: ''
    }
  }

  render() {


        if (Platform.OS === 'ios') {
          return (
            <View style= {{marginLeft: 20, marginRight: 20, marginTop: 'auto', marginBottom: 'auto'}}>
                        <Ionicons
                          name="ios-options" size={30} color='#fff'
                          underlayColor="transparent"/>

              </View>
                  );

        } else {
              return (
                <View style= {{marginLeft: 20, marginRight: 20, marginTop: 'auto', marginBottom: 'auto'}}>
                            <Ionicons   name="md-options" size={30} color='#fff'          underlayColor="transparent"
                            />
                  </View>
                      )
                }
            }
}
export default FilterSearch;
