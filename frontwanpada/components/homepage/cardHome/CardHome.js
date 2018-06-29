import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header, Input, Button, Overlay, ListItem  } from 'react-native-elements';
import { styles } from './style';


class CardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like : false,
      modalVisible: false,
      post_timeline: false,
      commentaire_timeline: false,
      title_modal: '',
    }
  }

  handleClick(){
    var isLike = !this.state.like;
    this.setState({like : isLike});
  }


  handleClick_commentaire(){
    console.log('COMMENTAIRE')
    var commentaire_timeline= !this.state.commentaire_timeline

    this.setState({
      commentaire_timeline: commentaire_timeline,
      modalVisible: true
    })

    if (commentaire_timeline == true){
      this.setState({ title_modal : 'Nouveau commentaire', })
    }
  }

  ShowProfilUser() {
    this.props.ParentShowProfilUser(this.props.id)
  }

  render() {
    var colorHeart = {};

    if(this.state.like == true) {
      colorHeart = {
        color: "red",
      }
    }

    return(
      <View style={styles.card}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{borderRadius: 30, height: 60, width: 60, marginLeft:10, marginTop:10, marginRight: 20}}
            source={require("../../../assets/images/avatar-1.jpg")} />
          <Text h1 style={styles.title_profile} onPress={() => this.ShowProfilUser()}> {this.props.name}  </Text>

          <View style={styles.icons}>

            <View >
              <Ionicons   name="md-chatbubbles" size={32} color='#D8D8D8' style={{marginRight: 10}}
                underlayColor="transparent"
                onPress={() => this.handleClick_commentaire()}
              />
              <Text h5 style={{marginLeft: 5, marginRight: 'auto', color: '#979797' }}> 3 </Text>
            </View>

            <View >
              <Ionicons name="md-heart" size={32} style={colorHeart}
                onPress={() => this.handleClick(false)}
              />
              <Text h5 style={{marginLeft: 5, marginRight: 'auto', color: '#979797'}}> 5 </Text>
            </View>

          </View>
        </View>
        <Text h3 style={styles.text_profile}> {this.props.msg}</Text>
      </View>
    );
  }
}
export default CardHome;
