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

import { MonoText } from '../components/StyledText';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);


    this.state = {
      like : false,
      ///POUR VOIR PLUS D'AVIS///
      seeMoreAvis: false,
      ///////FIN ///////////
      ///POUR VOIR PLUS DE POSTS///
      seeMorePosts: false,
      ///////FIN ///////////

      seeAvis:'',
      seePosts:'',
      listAvis:[
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}

        title="Marie S."
        subtitle="Super Padawan ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Sophiane A."
        subtitle="Merci pour tous ces conseils ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel A."
        subtitle="Merci, je recommande ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}

        title="Marie S."
        subtitle="A refaire ! "
        />,
        <ListItem
          leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
          title="Sophiane A."
          subtitle="Merci ! "
        />,
        <ListItem
          leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel A."
        subtitle="Merci, je recommanderais à tous mes amis! "
        />
      ],
      listPosts:[
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}

        title="Marie S."
        subtitle="Super Padawan ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Sophiane A."
        subtitle="Merci pour tous ces conseils ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel A."
        subtitle="Merci, je recommande ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}

        title="Marie S."
        subtitle="A refaire ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Sophiane A."
        subtitle="Merci ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel A."
        subtitle="Merci, je recommanderais à tous mes amis! "
        />
      ]
    };
  }



  handleClick(){
    /// POUR LIKER
    var isLike = !this.state.like;
    this.setState(
      {like : isLike}
    );
  }
  ///////FIN ///////////

  ///DEROULER LES AVIS
  handleClickSeeAvis() {


    this.setState({
      seeMoreAvis: !this.state.seeMoreAvis,
    })
  }
  ///////FIN ///////////

  ///DEROULER LES POSTS///
  handleClickSeePosts() {


    this.setState({
      seeMorePosts: !this.state.seeMorePosts,
    })
  }
  ///////FIN ///////////



  render() {
    //// CONDITION POUR DEROULER LES AVIS///
    var copylistAvis= this.state.listAvis.concat()
    if (this.state.seeMoreAvis == false) {
      this.state.seeAvis = '+'
      copylistAvis= this.state.listAvis.slice(0,3)
    }
    else{
      this.state.seeAvis = '-'
      copylistAvis= this.state.listAvis
    }
    ///////FIN ///////////

    /// CONDITION POUR DEROULER LES POSTS///
    var copylistPosts= this.state.listPosts.concat()
    if (this.state.seeMorePosts == false) {
      this.state.seePosts = '+'
      copylistPosts= this.state.listPosts.slice(0,3)
    }
    else{
      this.state.seePosts = '-'
      copylistPosts= this.state.listPosts
    }
    ///////FIN ///////////


    var colorHeart = {
    };

    if(this.state.like == true) {
      colorHeart = {
        color: "red",
      }
    }

    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>

      <Header
      statusBarProps={{ barStyle: 'light-content'}}
      centerComponent={{ text: "Timeline", style: { color: '#fff', fontSize: 20 } }}
      outerContainerStyles={{ backgroundColor: '#00A6FB' }}
      />

      <View style={styles.container}>

      <View style={profile.profile_card}>
      <View style={profile.profile_section}>
      <Image style={{borderRadius: 30, height: 60, width: 60, marginTop:20, marginRight: 'auto', marginLeft:'auto'}} source={require("../assets/images/avatar-1.jpg")} />

      <View style={{position: 'absolute', top: 20, right: -5}}>
      <Ionicons name="md-heart" size={32} style={colorHeart}
      onPress={() => console.log('hello')}
      onPress={() => {
        this.handleClick(false);}}/>
        </View>

        <Text h1 style={profile.title_profile}> John Doe </Text>
        <ScrollView>

        <Text h2 style={profile.text_profile}> La Capsule academy</Text>

        <Text h2 style={profile.text_profile}> La Sorbonne</Text>

        <View style={{display: 'flex', flexDirection: 'row', marginTop:10}}>

        <View style={profile.competence_card}>
        <Text style={profile.competence_text}> Web developpeur </Text>
        </View>

        <View style={profile.competence_card}>
        <Text style={profile.competence_text}> Intégrateur </Text>
        </View>

        <View style={profile.competence_card}>
        <Text style={profile.competence_text}> Web designer </Text>
        </View>

        </View>

        /// PARTIES ETOILES NOTES///
        <View>
        <Rating

        type="star"
        fractions={1}
        imageSize={30}
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }}
        />
        </View>
        ///////FIN ///////////



        <View>
        <View style={{borderBottomWidth: 0.5, borderColor: '#D8D8D8', marginBottom:5}}>
        <Text h2 style={profile.profile_title}> Mes avis </Text>


        <ScrollView>

        ///AFFICHAGES LISTE POSTS///
        {copylistPosts}
        ///////FIN ///////////

        ///BOUTONS POUR DEROULER LES POSTS///
        <Button
        title={this.state.seePosts}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{ borderRadius: 40, marginTop: 20, marginBottom: 20, width: 37, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#00A6FB' }}

        textStyle={{ fontWeight: 'bold', fontSize: 23 }}
        onPress={() => this.handleClickSeePosts()}


        underlayColor="transparent"
        />
        ///////FIN ///////////


        </ScrollView>
        </View>
        <Text h2 style={profile.profile_title}> Mes publications </Text>

        <ScrollView>

        <View>
        /// AFFICHAGE LISTE D'AVIS///
        {copylistAvis}
        ///////FIN ///////////

        </View>


        /// BOUTON POUR DEROULER LES AVIS ///
        <Button
        title={this.state.seeAvis}
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{ borderRadius: 40, marginTop: 20, marginBottom: 20, width: 37, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#00A6FB' }}
        textStyle={{ fontWeight: 'bold', fontSize: 23 }}
        onPress={() => this.handleClickSeeAvis()}


        underlayColor="transparent"
        />
        ///////FIN ///////////


        </ScrollView>

        </View>

        </ScrollView>

        </View>

        </View>



        </View>
        </ImageBackground>
      );
    }
  }


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
