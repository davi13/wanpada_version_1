import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { Font } from  'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isVisible from './reducer/user.reducer';
import display from './reducer/display.reducer';
import user from './reducer/user.reducer';
import followings from './reducer/favoris.reducer'
import modal from './reducer/modalpublish.reducer'
import messages from './reducer/messages.reducer'

import Display from './components/display'


var globalReducers= combineReducers({ form: formReducer, isVisible, user, display, followings, modal, messages });

const store = createStore(globalReducers);

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };


  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
           <Display/>
        </View>
      </Provider>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),Azert
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
