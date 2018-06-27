import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import {connect} from 'react-redux';
import PowerOff from './PowerOff';
import Publish from './Publish';

const ListItemHome = (props) => {


  if (Platform.OS === 'ios') {
    return (
      <Header
        statusBarProps={{ barStyle: 'light-content'}}
        centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 20, marginTop: 10} }}
        outerContainerStyles={{ backgroundColor: '#00A6FB', height:90 }}

        rightComponent={
          <Publish/>
        }

        leftComponent={
          <PowerOff/>
        }
      />
    );
  }
  else {
    return (
      <Header
        statusBarProps={{ barStyle: 'light-content'}}
        centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 20, marginTop: 10} }}
        outerContainerStyles={{ backgroundColor: '#00A6FB', height:70 }}

        rightComponent={
          <Publish/>
        }

        leftComponent={
          <PowerOff/>
        }
      />
    );
  }

}

function mapStateToProps(state) {
    return { display: state.display }
}

export default connect(
  mapStateToProps,
  null
)(ListItemHome);
