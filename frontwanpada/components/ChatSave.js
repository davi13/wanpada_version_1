import React, { Component } from 'react';
import { Asset, AppLoading } from 'expo';
import { View, StyleSheet, Linking, Text } from 'react-native';




export default class ChatSave extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      step: 0,
      // appIsReady: false,
    };

  }


  render() {

    console.log("CONNECTED NOW!")

    return (
      <View>
        <Text>Hello !</Text>
      </View>


    );
  }

}
