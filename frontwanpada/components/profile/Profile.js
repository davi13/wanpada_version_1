import React from 'react';
import { Header, Input, Button, Overlay, ListItem, Rating  } from 'react-native-elements';
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
import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux';


class Profile extends React.Component {

  constructor() {
    super();
    this.state = {visible : false }
  }
  static navigationOptions = {
    header: null
  }

  render(){
    var displayProfile = this.props.profile;
    var colorHeart = {};


    if(displayProfile == true) {
      colorHeart = { color: "red", }
    }

    return(

      <View style={profile.profile_section}>
        <Image style={{borderRadius: 30, height: 60, width: 60, marginTop:20, marginRight: 'auto', marginLeft:'auto'}} source={require("../../assets/images/avatar-1.jpg")} />

        <View style={{position: 'absolute', top: 20, right: -5}}>
          <Ionicons name="md-heart" size={32} style={colorHeart}
            onPress={() => { this.props.handleProfile() }}
          />
        </View>

        <Text h1 style={profile.title_profile}> John Doe </Text>
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

        <Rating
          type="star"
          fractions={1}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </View>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    handleProfile: function() {
      dispatch({type: 'profile'});
    }
  }
}

export default connect(null, mapDispatchToProps,)(Profile);


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
