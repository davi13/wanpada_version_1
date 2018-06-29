import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { styles } from './style'

class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champs: ''
    }
  }

  render() {
    return(
      <View style={{width: 250, marginLeft:100}}>
      <Icon
        name='search'
        size={24}
        color='white'
      />
      <Input
      style={{width:100}}
        placeholder='Rechercher'
        leftIcon={
       }
      />
      </View>
    );
  }
}

export default BarSearch;
