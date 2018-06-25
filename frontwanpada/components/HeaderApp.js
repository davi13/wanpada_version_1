import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux';
import PowerOff from './PowerOff';

const ListItemHome = (props) => {
  return (
    <Header
      statusBarProps={{ barStyle: 'light-content'}}
      centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 20, marginTop: 10} }}
      outerContainerStyles={{ backgroundColor: '#00A6FB', height:70 }}
      rightComponent={
        <Ionicons   name="ios-paper-plane" size={30} color='#D8D8D8' style={{marginRight: 10, marginTop:10}}
          underlayColor="transparent"
          onPress={() => {
            this.handleClick_publication()
          }}
        />
      }
      leftComponent={
        <PowerOff/>
      }
    />
  );
}

function mapStateToProps(state) {
    return { display: state.display }
}

export default connect(
  mapStateToProps,
  null
)(ListItemHome);
