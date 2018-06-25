import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Header, Input, Button, Overlay, ListItem  } from 'react-native-elements';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import {
  Image, Platform, ScrollView, StyleSheet, Text,
  TouchableOpacity, View, ImageBackground, Modal, } from 'react-native';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';


import ListItemHome from '../listItem/ListItemHome';
import { styles } from './style'


class ModalHome extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  handleClick_publication(){
    console.log('publication');
    var publication_timeline= !this.state.post_timeline;
    this.setState({
      post_timeline: publication_timeline,
      modalVisible: true
    });

    if (publication_timeline == true){
      this.setState({ title_modal : 'Nouvelle publication', })
    }
  }


  render() {
    return(
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
                      onPress={() => {this.setModalVisible(false)}}
                    />
                  </View>

                  <View style={styles.comment}>
                    <ListItemHome />
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
                      value={this.state.text}
                    />

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
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
export default ModalHome
