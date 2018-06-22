import React from 'react';
import { Platform, StatusBar, StyleSheet, View, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import  LandingScreen  from './screens/LandingScreen';
import isVisible from './reducer/user.reducer';
import { reducer as formReducer } from 'redux-form';
import display from './reducer/display.reducer';
import { combineReducers, createStore } from 'redux';
import user from './reducer/user.reducer';
import {Provider} from 'react-redux';
import Display from './components/display'


var globalReducers= combineReducers({form: formReducer, isVisible, user, display});

const store = createStore(globalReducers);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isConnected: false,
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




    // console.log(this.props.user);

    //   if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //     return (

    //           <AppLoading
    //             startAsync={this._loadResourcesAsync}
    //             onError={this._handleLoadingError}
    //             onFinish={this._handleFinishLoading}
    //           />


    //     );
    //   } else {
    //     var display=null;
    //     if (this.state.isConnected){
    //       display = <AppNavigator />
    //     } else {
    //       if(this.props.user){

    //           this.setState({
    //             isConnected: true
    //           })
    //       }
    //       display = <LandingScreen />
    //     }




  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Arial': require('./assets/fonts/arial.ttf'),
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
