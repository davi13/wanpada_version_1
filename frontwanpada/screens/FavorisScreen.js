import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Header, Input, Button, Overlay, ListItem  } from 'react-native-elements';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity,
  View, ImageBackground, Modal, } from 'react-native';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';

import CardSearch from '../components/search/cards/CardSearch';
import ModalHome from '../components/homepage/modal/ModalHome';
import HeaderApp from '../components/HeaderApp';

import { MonoText } from '../components/StyledText';
import URL from '../constants/Connect'

import PublishReduxForm from '../components/PublishReduxForm';

class FavorisScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
    }
    this.getAllUsers();
  }

  getAllUsers() {
    self = this
    fetch(URL.urlApp,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => { return response.json() })
    .then((data) => {
      // console.log(data);
      this.setState({ usersList: data})
    })
  }



  render() {
    console.log("hello ceci est un test!!")
    var user = this.props.user
    // console.log(user)
    // console.log(this.props.user)
    const followings = this.props.followings.map((item, index) => <CardSearch key={index} nom={item.nom} prenom={item.prenom} />);

    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>
        <HeaderApp title="Timeline" />

        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            { followings }
            <ModalHome />

          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
    return { followings: state.followings }
}








export default connect(
  mapStateToProps,
  null
)(FavorisScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
