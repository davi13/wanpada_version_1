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
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}

        title="Richard"
        subtitle="Super Conseiller ! Je recommande il m'a aidé a devenir développeur "
        />,
        <ListItem
        key={2}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Francois"
        subtitle="Merci pour tous ces conseils ! "
        />,
        <ListItem
        key={3}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Abdel"
        subtitle="Merci, Daviel ! T'es le meilleur ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}

        title="Gillou"
        subtitle="A refaire ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Victor"
        subtitle="Merci ! "
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        title="Flora"
        subtitle="Merci, je recommanderais à tous mes amis! "
        />
      ],
      listPosts:[
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}

        title="Daviel"
        subtitle="Super, j'ai donné mon premier conseil ! "
        />,
        <ListItem
        key={8}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel"
        subtitle="Je reviens de République Dominicaine je suis ko, j'ai trop dansé de bachata ! "
        />,
        <ListItem
        key={9}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel"
        subtitle="Mon troisième enfant est né ce matin ! Merci pour vos messages"
        />,
        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}

        title="Daviel"
        subtitle="La capsule est enfin fini ! J'en pouvais plus de voir les Alexis tous les jours"
        />,
        <ListItem
        key={11}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel"
        subtitle="Les Alexis vont me manquer =( ainsi que Gillou "
        />,
        <ListItem
        key={12}
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Daviel"
        subtitle=" Git et Redux Grrrrr ! @$#% !!!! "
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

        <View>
          <View style={{borderBottomWidth: 0.5, borderColor: '#D8D8D8', marginBottom:5}}>
              <Text h2 style={profile.profile_title}> Mes publications </Text>


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
            <Text h2 style={profile.profile_title}> Mes avis </Text>

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

      );
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
