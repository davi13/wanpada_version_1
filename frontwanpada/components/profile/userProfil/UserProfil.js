import React from 'react';
import { Header, Input, Button, Overlay, ListItem, Rating  } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground, Animated
} from 'react-native';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux'

import Profile from '../Profile';
import Posts from '../Posts';

class UserProfil extends React.Component {
  static navigationOptions = {
    header: null,
  };





  handleClick(){
    /// POUR LIKER
    var isLike = !this.state.like;
    this.setState(
      {like : isLike}
    );
  }
  ///////FIN ///////////




  render() {
    console.log("HOLALALAL")


    return (
      
        <View>
          <Header
          statusBarProps={{ barStyle: 'light-content'}}
          centerComponent={{ text: "Timeline", style: { color: '#fff', fontSize: 20 } }}
          outerContainerStyles={{ backgroundColor: '#00A6FB' }}
          />

          <View style={styles.container}>
          <View style={profile.profile_card}>
             <ScrollView>

               <Profile/>

               <Posts/>


             </ScrollView>
            </View>
          </View>
        </View>
      );
    }
  }

  function mapStateToProps(state) {
      return { profile: state.profile,
               posts: state.posts,
               avis: state.avis
            }
  }

  export default connect(
      mapStateToProps,
          null
  )(UserProfil);

  const profile = StyleSheet.create({
    profile_section:{
      flex: 1,
      flexDirection: 'column',
      marginLeft:'auto',
      marginRight:'auto'
    },
    profile_title:{
      flexDirection: 'column',
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:15,
      fontSize: 20,
      color: '#00A6FB',
      fontWeight: 'bold',
    },
    profile_card:{
      flex:1,
      backgroundColor: '#fff',
      margin: 10,
      borderRadius:5,
      borderColor: 'rgba(151,151,151,0.39)',
      borderBottomWidth: 1
    },
    title_profile:{
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      color: '#00A6FB',
      fontWeight: 'bold'
    },
    text_profile:{
      fontSize: 17,
      marginTop: 5,
      color: '#D8D8D8',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    competence_card:{
      width: 100,
      backgroundColor: '#00A6FB',
      marginRight: 10,
      height: 20,
      borderRadius: 8
    },
    competence_text:{
      fontSize:10,
      color: '#fff',
      textAlign:'center',
      marginTop: 'auto',
      marginBottom:'auto'
    }
  })



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });
