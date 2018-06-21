import React, {Component} from 'react';
import {View} from 'react-native';

import FilterSearch from './filter/FilterSearch';
import BarSearch from './bar/BarSearch';
import {styles} from './style'

export default SearchScreen = () => {
  return(
    <View style={styles.container}>
      <FilterSearch />
      <BarSearch />
    </View>
  );
}
