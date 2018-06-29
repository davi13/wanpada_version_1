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



class Posts_user extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      seeMoreAvis: false,
      seeMorePosts: false,

      seeAvis:'',
      seePosts:'',
      listAvis:[
        <ListItem
        key={1}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}


        subtitle="Super journée ! "
        />,
        <ListItem
        key={2}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        subtitle="Nouveau Job ! "
        />,
        <ListItem
        key={3}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        subtitle="Merci, pour vos messages ! "
        />,
        <ListItem
        key={4}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        subtitle="Super conférence ! "
        />,
        <ListItem
        key={5}
          leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
          subtitle="Merci pour cette journée d'accueil ! "
        />,
        <ListItem
        key={6}
         
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        subtitle="Début des vacances !! "
        />
      ],
      listPosts:[
        <ListItem
        key={7}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}

        title="Marie S."
        subtitle="Super Padawan ! "
        />,
        <ListItem
        key={8}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Sophiane A."
        subtitle="Merci pour tous ces conseils ! "
        />,
        <ListItem
        key={9}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel A."
        subtitle="Merci, je recommande ! "
        />,
        <ListItem
        key={10}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}

        title="Marie S."
        subtitle="A refaire ! "
        />,
        <ListItem
        key={11}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Sophiane A."
        subtitle="Merci ! "
        />,
        <ListItem
        key={12}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel A."
        subtitle="Merci, je recommanderais à tous mes amis! "
        />
      ]
    };
  }




  render() {

    var displayPost = this.props.posts;


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

    /* CONDITION POUR DEROULER LES POSTS*/
    var copylistPosts= this.state.listPosts.concat()
    if (this.state.seeMorePosts == false) {
      this.state.seePosts = '+'
      copylistPosts= this.state.listPosts.slice(0,3)
    }
    else{
      this.state.seePosts = '-'
      copylistPosts= this.state.listPosts
    }

    return (
      <View>
        <View style={{borderBottomWidth: 0.5, borderColor: '#D8D8D8', marginBottom:5}}>
          <Text h2 style={profile.profile_title}> Mes avis </Text>

          {copylistPosts}

          <Button
            title={this.state.seePosts}
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{ borderRadius: 40, marginTop: 20, marginBottom: 20, width: 37, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#00A6FB' }}
            textStyle={{ fontWeight: 'bold', fontSize: 23 }}
            onPress={() => this.props.handleClickSeePosts()}
            underlayColor="transparent"
          />

        </View>
        <Text h2 style={profile.profile_title}> Mes publications </Text>

        <View>
          {copylistAvis}
        </View>

        <Button
          title={this.state.seeAvis}
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{ borderRadius: 40, marginTop: 20, marginBottom: 20, width: 37, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#00A6FB' }}
          textStyle={{ fontWeight: 'bold', fontSize: 23 }}
          onPress={() => this.propos.handleClickSeeAvis()}
          underlayColor="transparent"
        />
      </View>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleClickSeeAvis: function() {
      dispatch({type: 'posts'});
    }
  }
}

export default connect(null, mapDispatchToProps,)(Posts_user);


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
