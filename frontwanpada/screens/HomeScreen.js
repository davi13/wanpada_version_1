import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Header, Input, Button, Overlay, ListItem  } from 'react-native-elements';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground, Modal,
} from 'react-native';
import { WebBrowser } from 'expo';

import {connect} from 'react-redux'

import PowerOff from '../components/PowerOff'

import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);


    this.state = {
    like : false,
    modalVisible: false,
    post_timeline: false,
    commentaire_timeline: false,
    title_modal: '',
    pageName: 'Timeline'
  }
}

///// APPARITION MODAL//////
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  ///////FIN ///////////

/////CLICK HEART/////
  handleClick(){

    var isLike = !this.state.like;
    this.setState(
      {like : isLike}
    );}
    ///////FIN ///////////

// CLICK PUBLICATION POUR RENDRE MODAL DYNAMIQUE ///////
    handleClick_publication(){
      console.log('publication')

     var publication_timeline= !this.state.post_timeline

      this.setState(
        {
          post_timeline: publication_timeline,
          modalVisible: true
        }
      )
      if (publication_timeline == true){
        this.setState({
          title_modal : 'Nouvelle publication',
        })
    }
      }
      ///////FIN ///////////

      // CLICK COMMENTAIRE POUR RENDRE MODAL DYNAMIQUE ///////

      handleClick_commentaire(){
        console.log('COMMENTAIRE')

       var commentaire_timeline= !this.state.commentaire_timeline

        this.setState(
          {
            commentaire_timeline: commentaire_timeline,
            modalVisible: true
          }
        )
        if (commentaire_timeline == true){
          this.setState({
            title_modal : 'Nouveau commentaire',
          })
      }
        }
        ///////FIN ///////////







  render() {

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
          centerComponent={{ text: "Timeline", style: { color: '#fff', fontSize: 20} }}
          outerContainerStyles={{ backgroundColor: '#00A6FB', height:90 }}


          //// POUR PUBLIER NOUVELLE PUBLICATION ///////
          rightComponent={
            <Ionicons   name="ios-paper-plane" size={30} color='#D8D8D8' style={{marginRight: 10, marginBottom:10}}
              underlayColor="transparent"
              onPress={() => {
                this.handleClick_publication()
              }}
            />
          }
          ///////FIN ///////////

          leftComponent={
            <PowerOff/>
          }
        />

        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>


            <View style={card.card}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={{borderRadius: 30, height: 60, width: 60, marginLeft:10, marginTop:10, marginRight: 20}} source={require("../assets/images/avatar-1.jpg")} />


                <Text h1 style={card.title_profile}> John Doe </Text>
                <View style={card.icons}>

                  <View style={{display:'flex'}}>
                    //// POUR VOIR LES COMMENTAIRES ///////
                    <Ionicons   name="md-chatbubbles" size={32} color='#D8D8D8' style={{marginRight: 10}}
                      underlayColor="transparent"
                      onPress={() => {
                        this.handleClick_commentaire()
                      }}
                    />
                    ///////FIN ///////////

                    <Text h5 style={{marginLeft: 5, marginRight: 'auto', color: '#979797' }}> 3 </Text>
                  </View>

                  ///POUR LIKER///
                  <View style={{display:'flex'}}>
                    <Ionicons name="md-heart" size={32} style={colorHeart}
                      onPress={() => console.log('hello')}
                      onPress={() => {
                        this.handleClick(false);}}/>
                    ///////FIN ///////////

                    <Text h5 style={{marginLeft: 5, marginRight: 'auto', color: '#979797'}}> 5 </Text>
                  </View>

                </View>
              </View>
              <Text h3 style={card.text_profile}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, libero non tempor efficitur, neque nulla venenatis eros.</Text>
            </View>


            /////// MODAL COMMENTAIRES /////////
            <View>

              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                  <View>

                    <View style={styles.getStartedContainer}>
                      <Overlay style={{margin: 'auto', marginTop: 0, backgroundColor: 'transparent'}} isVisible>


                        <View style={{flexDirection: 'row'}}>
                          <Text H1 style={{fontSize: 25, color: '#00A6FB',
                          fontWeight: 'bold', marginBottom: 50, marginLeft: 'auto', marginRight: 'auto'}}> {this.state.title_modal} </Text>
                          <Ionicons
                            style={{position:'relative', right:-20, top: -10}}
                            name="ios-close" size={40}  color='#D8D8D8'
          onPress={() => console.log('hello')}
          onPress={() => {
            this.setModalVisible(false)}}
            />
            </View>



            <View style={comment_part.comment}>

            <View style={{marginBottom: 1, borderColor: '#979797',

          }}>


          <ListItem
          leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
          title="John Doe"
          subtitle="Ahah super photo ! "
          />



          </View>

          <View style={{marginBottom: 1, borderColor: '#979797'

        }}>


        <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        title="Marie Doe"
        subtitle="Merci petit frère ! "
        />



        </View>

        <View style={{marginBottom: 1, borderColor: '#979797',

      }}>


      <ListItem
      leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
      title="John Doe"
      subtitle="De rien =) ! "
      />



      </View>
      </View>
      <View style={{position:'relative',   position: 'absolute',
      bottom: -150,
      left: 0,
      right: 0}}>
      <AutoGrowingTextInput
      minHeight={70}
      maxHeight={70}
      Inputstyle={{height:'100%'}}
      placeholder='Votre message'
      multiline={true}
      numberOfLines={4}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}/>


      <Button
      title='Envoyer'
      loading={false}
      loadingProps={{ size: 'small', color: 'white' }}
      buttonStyle={{ borderRadius: 5, marginTop: 20, marginBottom: 20, width: 100, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#00A6FB' }}

      textStyle={{ fontWeight: 'bold', fontSize: 23 }}
      onPress={() => console.log('hello')}
      underlayColor="transparent"
      />
      </View>

      </Overlay>
      </View>
    )};
  }
  </View>
  </View>

  </Modal>
  </View>
  ///////FIN ///////////







  </ScrollView>


  </View>
  </ImageBackground>
);
}
}



function mapStateToProps(state) {
    return { display: state.display }
}

export default connect(
    mapStateToProps,
        null
)(HomeScreen);


const card = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    height: 150,
    width: 350,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
    borderRadius: 10
  }
  ,
  title_profile:{
    fontSize: 25,
    marginTop: 23,
    color: '#00A6FB',
    fontWeight: 'bold'
  },
  text_profile:{
    color: '#979797',
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    textAlign: 'left'
  },
  icons:{
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 15
  }
})

const comment_part = StyleSheet.create({
  comment:{
    height: 350,
    borderColor: 'rgba(151,151,151,0.39)',
    borderBottomWidth: 1
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
    // marginHorizontal: 50,
  },
  getContainerModal: {
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
