import React, { Component } from 'react';
import { Asset, AppLoading } from 'expo';
import { View, StyleSheet, Linking } from 'react-native';

import CustomView from '../CustomView';

import ChatSave from '../components/ChatSave';



export default class Chat extends Component {

  constructor(props) {
    super(props);


  }


  render() {


    return (

        <ChatSave />
      
    );
  }

}
