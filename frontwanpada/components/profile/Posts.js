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



class Posts extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
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




  render() {
    console.log("HOLALALAL")

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

    return (


<View>
    <View style={{borderBottomWidth: 0.5, borderColor: '#D8D8D8', marginBottom:5}}>
        <Text h2 style={profile.profile_title}> Mes avis </Text>



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
        onPress={() => this.props.handleClickSeePosts()}


        underlayColor="transparent"
        />
        ///////FIN ///////////


    </View>
    <Text h2 style={profile.profile_title}> Mes publications </Text>

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
    onPress={() => this.propos.handleClickSeeAvis()}


    underlayColor="transparent"
    />
    ///////FIN ///////////

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

export default connect(null, mapDispatchToProps,)(Posts);


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
