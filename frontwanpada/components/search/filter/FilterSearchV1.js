import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';

class FilterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champs: ''
    }
  }

  render() {
    return(
      <View>
        <Button
          icon={
            <Icon
              name='filter-list'
              type='MaterialIcons'
              color='#ffffff'
              iconStyle={styles.containerIcon}
            />
          }
          title='Filtrer'
        />
      </View>
    );
  }
}
export default FilterSearch;
