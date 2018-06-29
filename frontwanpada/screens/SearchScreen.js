import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Avatar, Badge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';

import HeaderApp from '../components/HeaderApp';
import { MonoText } from '../components/StyledText';
import SearchContainer from '../components/search/SearchContainer';
import CardSearch from '../components/search/cards/CardSearch';
import { styles } from '../styles/styleSearch';
import URL from '../constants/Connect'

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      users:[]
    }
  }


  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
  // Ici, nous sauvegardons la valeur de this dans ctx, afin de pouvoir y accéder depuis notre fonction fetch
  const ctx = this;
  // Ici, nous effectuons un appel asynchrone (fetch) de l'url qui contient notre liste d'utilisateurs
  fetch(URL.urlApp+'/users')
  .then(function(response) {
    // Une fois, la data récupérée, nous la transformons en json
    return response.json();
  })
  .then(function(data) {
    // Une fois transformée, en json, nous passons la data à notre state de users.
    ctx.setState({ users: data });
  })
  .catch(function(err) {
    console.log(err);
  })
}

  render() {

    var users = this.state.users.map((user, i) => {
      // var i = 0;
      return (
        <CardSearch key={i} name={user.nom} comp={user.competences} id={user._id} />
      )
    }
  )


    return (
      <ImageBackground style={styles.container} source={require("../assets/images/backgroundofficial.jpg")}>
        <HeaderApp title="Recherches" />
        <View style={styles.container}>
          <SearchContainer />
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            { users }
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
