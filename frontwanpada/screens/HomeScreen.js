import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Header, Input, Button, Overlay, ListItem, Icon  } from 'react-native-elements';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity,
  View, ImageBackground, Modal, } from 'react-native';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';

import CardHome from '../components/homepage/cardHome/CardHome';
import ModalHome from '../components/homepage/modal/ModalHome';
import HeaderApp from '../components/HeaderApp';
import Profile_user from '../components/profile/Profile_user';
import Post_user from '../components/profile/Post_user';

import { MonoText } from '../components/StyledText';
import URL from '../constants/Connect'

import PublishReduxForm from '../components/PublishReduxForm';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.ShowProfilUser = this.ShowProfilUser.bind(this);
    this.returnHome = this.returnHome.bind(this);

    this.state = {
      messagesList: [],
      showUser: [],
      show: false
    }
    this.getAllMessages();
  }

  getAllMessages() {
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
    .then((response) => { return response.json();
     })
    .then((data) => {
      // this.setState({messagesList: data})
      // console.log(data);
      self.props.getAllMessages(data)
    })
  }

  ShowProfilUser(userIdprofil){
    console.log(userIdprofil)
    self = this
    fetch(URL.urlApp+'/profiluser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'id='+userIdprofil
      }
    )
    .then((response) => {return response.json();})
    .then((data) => {
      console.log('coooolklsf lfljklglkfgjkfgdlk')
      console.log(data)
      self.setState({showUser: data, show: true})
    })
  }

  returnHome(valeurVisible){
   this.setState({ show:  valeurVisible})
  }

  render() {
    console.log("ICI EST LE PREMIER LOGGGGG")
    var messagesList = this.props.messages

    console.log("ICI EST LE DEUXIEME LOGGGGG")
    console.log(messagesList)
    const Displays = {}
   
    const messagesItem = messagesList.map((item, index) => <CardHome key={index} msg={item.comments} name={item.username} id={item.userid} ParentShowProfilUser={this.ShowProfilUser}/>);

    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>
        <HeaderApp title="Timeline" />

        <View style={styles.container}>
          <ScrollView style={styles.container, Displays} contentContainerStyle={styles.contentContainer}>

            { messagesItem }
            <ModalHome />

          </ScrollView>
        </View>
        <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.show}
              onRequestClose={() => {
                alert('Modal has been closed.');
                
              }}>
             
              <ScrollView>
                <Profile_user ParentReturnHome={this.returnHome}/>
                <Post_user/>
              </ScrollView>

            </Modal>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
    return { display: state.display, user: state.user, messages: state.messages }
}


function mapDispatchToProps(dispatch){
  return {
    getAllMessages: function(messages) {
      dispatch( {type: 'getall', messages} )
    }
  }
}





export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
