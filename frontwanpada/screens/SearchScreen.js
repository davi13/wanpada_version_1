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

import { MonoText } from '../components/StyledText';
import SearchContainer from '../components/search/SearchContainer';
import CardSearch from '../components/search/cards/CardSearch';
import { styles } from '../styles/styleSearch'

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };



  render() {
    const users = [
      {
        name: 'Alexis hnr',
        avatar: '../assets/images/avatar.jpg',
        dist: '120km',
        comp: ['Javascript', 'php', 'sass']
       },
      {
        name: 'Daviel',
        avatar: '../assets/images/avatar.jpg',
        dist: '20km',
        comp: ['Javascript', 'php', 'sass']
      },
      {
        name: 'Alexis',
        avatar: '../assets/images/avatar.jpg',
        dist: '200km',
        comp: ['Javascript', 'php', 'sass']
      },
      {
        name: 'Gilles',
        avatar: '../assets/images/avatar.jpg',
        dist: '850km',
        comp: ['Javascript', 'php', 'sass']
      },
      {
        name: 'Alexis hnr 1',
        avatar: '../assets/images/avatar.jpg',
        dist: '500km',
        comp: ['Javascript', 'php', 'sass']
      },
      {
        name: 'Daviel 1',
        avatar: '../assets/images/avatar.jpg',
        dist: '1km',
        comp: ['Javascript', 'php', 'sass']
      },
      {
        name: 'Alexis 1',
        avatar: '../assets/images/avatar.jpg',
        dist: '60km',
        comp: ['Javascript', 'php', 'sass']
      },
      {
        name: 'Gilles pro',
        avatar: '../assets/images/avatar.jpg',
        dist: '60m',
        comp: ['Javascript', 'php', 'sass']
      },
    ];

    let usersItem = users.map((user, i) => <CardSearch key={i} name={user.name} dist={user.dist} comp={user.comp} />);

    return (
      <ImageBackground style={styles.container} source={require("../assets/images/backgroundofficial.jpg")}>
        <View style={styles.container}>
          <SearchContainer />
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            { usersItem }
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
