import React from 'react';
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
import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'

import {MonoText} from '../components/StyledText';

class PowerOff extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      signUp: false,
      signIn: false
    }
  }
  static navigationOptions = {
    header: null
  };

  render() {
    var display = false;

    if (Platform.OS === 'ios') {
      return (
        <Ionicons
          name="ios-power" size={30}
          color='#D8D8D8'
          style={{marginRight: 10, marginBottom: 2}}
          underlayColor="transparent"
          onPress={() => this.props.powerOff(display) }/>
      );
    }
    else {
      return (
        <Ionicons
          name="ios-power" size={30}
          color='#D8D8D8'
          style={{marginRight: 10,  marginTop: 10}}
          underlayColor="transparent"
          onPress={() => this.props.powerOff(display) }/>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    powerOff: function(display) {
      console.log("depuis le composant poweroff : click!")
      dispatch({type: 'poweroff', display});
    }
  }
}

export default connect(null, mapDispatchToProps,)(PowerOff);
