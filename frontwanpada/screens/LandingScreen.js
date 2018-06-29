import React from 'react';
import {Modal, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Overlay, Input, Button, Divider, Icon} from 'react-native-elements';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {connect} from 'react-redux'

import SignUp from '../components/connexion/form';
import SignIn from '../components/connexion/SignIn';
import URL from '../constants/Connect'


class LandingScreen extends React.Component {

  constructor() {
    super();
    this.returnHome = this.returnHome.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.SubmitsignUp = this.SubmitsignUp.bind(this);
    this.SubmitsignIn = this.SubmitsignIn.bind(this);
    this.state = {
      isVisible : false,
      signUp: false,
      signIn: false,
      msgErr: '',
      notConnected: false
    }
  }

  returnHome(){
    this.setState({isVisible: false})
  }

  signUp(){

    this.setState({isVisible: true, signUp: true, signIn: false})
  }

  signIn(){

    this.setState({isVisible: true, signIn: true, signUp: false})
  }


  SubmitsignUp(value) {
    console.log("NUMERO 1")
    var display = false;
    var ctx = this;
    fetch(URL.urlApp+'/signup', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'nom='+value.Nom+'&prenom='+value.Prenom+'&email='+value.Email+'&password='+value.Password
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data == false) {
        this.setState({msgErr: 'Mince il y a des erreurs au niveau des champs', notConnected: true})
      }
      else{
        if(data._id){
          display = true;
          ctx.props.onSignUpClick(data, display);
        }
        else {
          ctx.props.onSignUpClick(data, display);
        }
        console.log(data);
      }
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
    this.setState({
      isVisible : false
    })
  }


  ////////////////////////////////
  ///   FORMULAIRE CONNEXION   //
  ///////////////////////////////
  SubmitsignIn(value) {
    console.log("test depuis submitsignin")
    console.log(value);
    var display = false;
    var ctx = this;

    fetch(URL.urlApp+'/signin', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'email='+value.Email+'&password='+value.Password
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      if(data == false) {
        this.setState({msgErr: 'Mince il y a des erreurs au niveau des champs', notConnected: true})

      } else {
        if(data._id){
          display = true;
          ctx.props.onSigninClick(data, display);
        }
        else {
          ctx.props.onSigninClick(data, display);
        }
        console.log("LE BIG TEST DE GILLES!");
        }
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
    this.setState({
      isVisible : false,
    })
  }


  render() {

    let sign = '';
    let errConnect = '';

    if(this.state.signUp == true) {
        console.log("je suis rentré dans la condition de SIGNUP");
      sign = <SignUp onSubmit={this.SubmitsignUp} />
    }
    if(this.state.signIn == true) {
      console.log("je suis rentré dans la condition de SIGNIN");
      sign = <SignIn onSubmit={this.SubmitsignIn} />
    }
    if(this.state.notConnected ==true) {
      errConnect = this.state.msgErr
      console.log(errConnect);
    }
    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
          <Text h1 style={{color: "red", fontSize: 20, marginBottom: 20, textAlign: 'center', padding: 5}}>{errConnect}</Text>
              <Text h1 style={{color: "#FFFFFF", fontSize: 50, fontWeight: "700", marginBottom: 20}}> WanPada</Text>
              <Text h3 style={{color: "#FFFFFF", fontSize: 20, fontWeight: "500", marginBottom: 50}}> Le Conseil au bout des doigts</Text>
              <Button title="Connexion"
                      textStyle={{ fontWeight: "300", color: "#FFFFFF" }}
                      buttonStyle={{
                      backgroundColor: "#00A6FB",
                      width: 250,
                      height: 45,
                      borderColor: "transparent",
                      borderWidth: 0,
                      borderRadius: 20
                    }} onPress={this.signIn/*() => this.setState({isVisible: true})*/}></Button>
              <Button title="Inscription"
                      textStyle={{ fontWeight: "300" }}
                      buttonStyle={{
                      backgroundColor: "#00A6FB",
                      width: 250,
                      height: 45,
                      borderColor: "transparent",
                      borderWidth: 0,
                      borderRadius: 20,
                      marginTop: 20,
                    }} onPress={ this.signUp/*() => this.setState({isVisible: true})*/}></Button>
              <Modal animationType='slide' onRequestClose={() => null} transparent={true}  visible = {this.state.isVisible}>
                <Overlay isVisible={this.state.isVisible}>
                  <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                    <View style={{position: 'absolute', top: 0, right: 0}}>
                      <Icon
                        name='ios-close'
                        type='ionicon'
                        color='#00A6FB'
                         onPress={this.returnHome}
                      />
                    </View>
                    {sign}
                  </View>
                </Overlay>
              </Modal>
        </View>
      </ImageBackground>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSigninClick: function(user) {
        dispatch({ type: 'userSignIn', user });
    },
    onSignUpClick: function(user, display) {
        dispatch( {type: 'userSignUp', user } );
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(LandingScreen);
