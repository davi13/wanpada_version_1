import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Modal,
} from 'react-native';
import { WebBrowser } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';


import { Card, ListItem, Button, Avatar, List, Badge, Overlay } from 'react-native-elements'

import { MonoText } from '../components/StyledText';

import Chat from './ChatScreen2';

export default class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
    // Ici, on définit notre liste de states. En l'occurence, un tableau users vide.
    this.state = { users: [], isvisible: false };
  }

  static navigationOptions = {
    header: null,

  };

  // Le componentDidMount est appelé après le chargement du component
componentDidMount() {
  // Ici, nous sauvegardons la valeur de this dans ctx, afin de pouvoir y accéder depuis notre fonction fetch
  const ctx = this;
  // Ici, nous effectuons un appel asynchrone (fetch) de l'url qui contient notre liste d'utilisateurs
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(data) {
    // Une fois, la data récupérée, nous la transformons en json
    return data.json();
  })
  .then(function(response) {
    // Une fois transformée, en json, nous passons la data à notre state de users.
    ctx.setState({ users: response });
  })
  .catch(function(err) {
    console.log(err);
  })
}

openConversation() {
  alert("ITS WORKS")
}

  render() {

    const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]


    var users = this.state.users.map((user, i) => {
      var numberMinutes = "Dernier message il y a " + i + " min";
      if (i > 0){
        return (
          <View key={i}>
            <ListItem
              chevron
              key={i}
              onPress={() => this.setState({isvisible: true})}
              leftAvatar={{ source: { uri: list.avatar_url } }}
              title={user.name}
              subtitle={numberMinutes}
            />
            <Text style={{width:30, borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 10, textAlign: 'center', backgroundColor: '#00A6FB', color: '#FFFFFF', overflow: 'hidden', position: 'absolute', top: 22, left: 320}}>{i}</Text>
          </View>
        )
      } else {
        return (
          <View key={i}>
            <ListItem
              chevron
              key={i}
              onPress={() => this.setState({isvisible: true})}
              leftAvatar={{ source: { uri: list.avatar_url } }}
              title={user.name}
              subtitle={"Dernier message à l'instant"}
            />
            <Text style={{position: 'absolute', top: 24, left: 295}}>Tous lus</Text>
          </View>
        )
      }
        });



    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {users}
            <Modal  visible={this.state.isvisible} animationType="slide">
              <Button
                onPress={() => this.setState({isvisible: false})}
                icon={
                  <Icon
                    name='arrow-left'
                    size={15}
                    color='white'
                  />
                }
                iconLeft
                title='Retour'
                buttonStyle={{
                  marginTop: 50,

                }}
              />
              <Chat/>

            </Modal>
          </ScrollView>

        </View>
      </ImageBackground>


    );



  }

}


{/* <View style={styles.container}>
  {users}
  <Overlay  isVisible={this.state.isvisible}>
    <Chat/>
  </Overlay>

</View> */}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ratingText: {
    marginLeft: 10,
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
