import React, { Component } from 'react';
import {View,  Text } from 'react-native';
import {connect} from 'react-redux';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from '../navigation/AppNavigator';
import  LandingScreen  from '../screens/LandingScreen';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('ici en bas la reponse Props');
    console.log('stringggggggggggg');
    
    console.log(this.props.display);

    if (this.props.display){
      return (<AppNavigator/>)
    }
    else {
      return (<LandingScreen/>)
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user, display: state.display }
}

export default connect(
  mapStateToProps,
  null
)(Display);
