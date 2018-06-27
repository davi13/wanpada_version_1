import React from 'react';
import { Image, Text, View, } from 'react-native';
import { WebBrowser } from 'expo';
import { Badge, Rating } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';

import { styles } from '../../../styles/styleSearch';


class CardSearch extends React.Component {
  constructor(props) {
    super(props);
    this.HandleOnPressLike = this.HandleOnPressLike.bind(this)

    this.state = {
      like: false,
      color: '#333'
    }
  }

  HandleOnPressLike() {
    let disLike = !this.state.like;
    this.setState({like: disLike});
    this.props.clickFollow(this.props.name, this.props.comp, this.props.id)
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
              <View>

                <Text h1 style={styles.title_profile}>
                  {this.props.name}
                </Text>
                <Rating
                  type="star"
                  fractions={1}
                  imageSize={20}
                  style={{ paddingVertical: 10 }}
                />

              </View>
            </View>
          </View>
          <View style={{position: 'absolute', top: 20, right: 15}}>

          <Badge containerStyle={styles.dist_profile}
            value={this.props.dist}
            textStyle={{ color: 'white' }}
          />

          </View>
        </View>

        <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, flexDirection: 'row'}}>
          <Badge containerStyle={{   width: 100,
            backgroundColor: '#00A6FB',
            marginRight: 10,
            height: 20,
            borderRadius: 8}}>
            <Text style={styles.text}>Competences</Text>
          </Badge>
          <Badge containerStyle={{   width: 100,
            backgroundColor: '#00A6FB',
            marginRight: 10,
            height: 20,
            borderRadius: 8}}>
            <Text style={styles.text}>Compétences</Text>
          </Badge>
          <Badge containerStyle={{   width: 100,
            backgroundColor: '#00A6FB',
            marginRight: 10,
            height: 20,
            borderRadius: 8}}>
            <Text style={styles.text}>Competences</Text>
          </Badge>
        </View>

        <View style={styles.iconLike}>
          <View style={{marginRight:10}}>
            <Ionicons name="md-heart" size={20} color={this.state.color} key
              onPress={this.HandleOnPressLike}
            />
          </View>

          <Ionicons name="md-chatbubbles" size={20} color="#333"  />

        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clickFollow: function(name, comp, id) {
      // Ici, on dispatch les informations que l'on souhaite traiter dans notre reducer.
      dispatch({ type: 'follow', name: name, comp: comp, id:id })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CardSearch);
