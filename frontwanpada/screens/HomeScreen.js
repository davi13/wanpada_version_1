import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Header, Input, Button, Overlay, ListItem  } from 'react-native-elements';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity,
  View, ImageBackground, Modal, } from 'react-native';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';

import CardHome from '../components/homepage/cardHome/CardHome';
import ModalHome from '../components/homepage/modal/ModalHome';
import HeaderApp from '../components/HeaderApp';

import { MonoText } from '../components/StyledText';
import URL from '../constants/Connect'

import PublishReduxForm from '../components/PublishReduxForm';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      messagesList: [],
    }
    this.getAllUsers();
  }

  getAllUsers() {
    self = this
    fetch(URL.urlApp+'/messages',
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
      this.setState({ messagesList: data})
    })
  }



  render() {
    console.log("hello ceci est un test!!")
    var messages = this.props.messages
    // console.log(user)
    // console.log(this.props.user)
    const messagesItem = this.state.messagesList.map((item, index) => <CardHome key={index} nom={item.nom} prenom={item.prenom} />);

    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>
        <HeaderApp title="Timeline" />

        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            { messagesItem }
            <ModalHome />

          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
    return { display: state.display, user: state.user }
}








export default connect(
  mapStateToProps,
  null
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
