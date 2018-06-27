import React, { Component } from 'react';
import {View,  Text } from 'react-native';
import {connect} from 'react-redux';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from '../navigation/AppNavigator';
import  LandingScreen  from '../screens/LandingScreen';

class Display extends Component {
  constructor() {
    super();
  }

  render(){
    console.log('ici en bas la reponse Props');
    console.log(this.props.user);
    if (this.props.display){
      console.log("PREMIER LOG!!")
      console.log(this.props.updateUser)
      return (<AppNavigator />)
    }
    if (this.props.updateUser){
      return (<HomeScreen />)
    }
    else {
      return (<LandingScreen/>)
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user, display: state.display, updateUser : state.updateUser }
}

export default connect(
  mapStateToProps,
  null
)(Display);
