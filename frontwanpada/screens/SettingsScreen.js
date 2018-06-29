/*import React from 'react';
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

import Profile from '../components/profile/Profile';
import Posts from '../components/profile/Posts';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleClick(){
    var isLike = !this.state.like;
    this.setState(
      {like : isLike}
    );
  }

  render() {


    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>

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
      </ImageBackground>
      );
    }
  }

  function mapStateToProps(state) {
    return { profile: state.profile, posts: state.posts, avis: state.avis }
  }

  export default connect(
    mapStateToProps,
    null
  )(SettingsScreen);

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
  });*/
  import React from 'react';
import { Header, Input, Button, Overlay, ListItem, Rating  } from 'react-native-elements';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

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
import Navigation from '../components/Navigation'

import Profile from '../components/profile/Profile';
import Posts from '../components/profile/Posts';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {maps: false  };
    this.handleClickMaps = this.handleClickMaps.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickMaps= ()=> {
    this.setState({
      maps:true
    })
  }

  handleClickClose= ()=> {
    this.setState({
      maps:false
    })
  }

  handleClick(){
    var isLike = !this.state.like;
    this.setState(
      {like : isLike,
        location: null,
        errorMessage: null,
        adress: null,
        gps: null,
        isVisible: false,
        selectedIndex: 2
      }
    );
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }

  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    console.log(location)
    console.log()

    let adress = await Location.reverseGeocodeAsync({latitude:location.coords.latitude, longitude:location.coords.longitude})
    this.setState({ adress });
    console.log(adress[0].city)

    var gps = adress[0].name + ", " + adress[0].postalCode + ", " + adress[0].city
    this.setState({ gps });
    console.log("gps -->", gps)

  }

  render() {

          if (this.state.maps == true){
          mapsVisible= {position: 'absolute', top: 0, bottom:0, left: 0, right: 0, zIndex: 1000}
        }else{
          mapsVisible= {display:'none'}
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
             <ScrollView>
             <View style={mapsVisible}>
             <MaterialCommunityIcons name="close" size={32}
             style={{zIndex: 1001, position: 'absolute', top: 5, left: 15, color: '#00A6FB'}}
             onPress={() => this.handleClickClose()} />
               <Navigation/>
             </View>

               <Profile/>
               <MaterialCommunityIcons name="map" size={32}
               style= {{marginLeft: 10, color:'#00A6FB'}}
               onPress={() => this.handleClickMaps()} />
               <Posts/>


             </ScrollView>
            </View>
          </View>
      </ImageBackground>
      );
    }
  }

  function mapStateToProps(state) {
    return { profile: state.profile, posts: state.posts, avis: state.avis }
  }

  export default connect(
    mapStateToProps,
    null
  )(SettingsScreen);

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
