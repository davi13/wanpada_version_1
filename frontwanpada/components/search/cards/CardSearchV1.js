import React, {Component} from 'react';
import { Image, Text, View, } from 'react-native';
import { WebBrowser } from 'expo';
import { Badge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../../../styles/styleSearch';


export default class CardSearch extends Component {

  constructor(props) {
    super(props)
    this.HandleOnPressLike = this.HandleOnPressLike.bind(this)

    this.state = {
      like: false,
      color: '#333'
    }
  }

  HandleOnPressLike() {
    let disLike = !this.state.like;
    this.setState({like: disLike});
    if(disLike == true) {
      this.setState({color: 'red'})
    }
    else {
        this.setState({color: '#333'})
    }
  }

  render() {
    let competences = this.props.comp;
    console.log(competences);
    return (
      <View style={styles.card}>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between', alignItems: 'stretch'}}>
          <View >
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.containerImage}
                source={require("../../../assets/images/Avatar.jpg")}
              />
              <View h1 style={styles.title_profile}>
                <Text>
                  {this.props.name}
                </Text>
                <Text>
                  <Ionicons name="md-star" size={20} color="#f7e28f" />
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingRight: 5}}>
            <Text h1 style={styles.dist_profile}> {this.props.dist} </Text>
          </View>
        </View>

        <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, flexDirection: 'row'}}>
          <Badge containerStyle={{ backgroundColor: '#00A6FB', width: 120, marginRight: 5}}>
            <Text TextStyle={{color: '#FFFFFF'}}>Competences</Text>
          </Badge>
          <Badge containerStyle={{ backgroundColor: '#00A6FB', width: 80, marginRight: 5}}>
            <Text Style={{color: '#FFFFFF'}}>Comp</Text>
          </Badge>
          <Badge containerStyle={{ backgroundColor: '#00A6FB', width: 120, marginRight: 5}}>
            <Text TextStyle={{color: '#FFFFFF'}}>Competences</Text>
          </Badge>
        </View>

        <View style={styles.iconLike}>
          <Text>
            <Ionicons name="md-heart" size={20} color={this.state.color} key
              onPress={this.HandleOnPressLike}
            />
          </Text>
          <Text>
            <Ionicons name="md-chatbubbles" size={20} color="#333" />
          </Text>
        </View>
      </View>
    );
  }
}
