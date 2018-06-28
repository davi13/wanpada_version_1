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

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import { Button, ListItem, Overlay } from 'react-native-elements'


import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'

import {MonoText} from '../components/StyledText';

import PublishReduxForm from './PublishReduxForm';

class Publish extends React.Component {
  constructor() {
    super();
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = {
    //   modalVisible: false
    // }
  }
  static navigationOptions = {
    header: null
  };

  // setModalVisible(visible) {
  //    this.setState({modalVisible: visible});
  //  }


   handleSubmit(values){
     console.log("initiation du fetch")
     console.log(values)

     var ctx = this;
     fetch('http://10.2.1.197:3000/newmessage', {
             method: 'POST',
             headers: {'Content-Type':'application/x-www-form-urlencoded'},
             body: 'userid='+values.message+'&date='+values.message+'&nbOfLikes='+values.message+'&comments='+values.message+'&message='+values.message
           }).then(function(response) {
             console.log("CONNECTÉ AU BACKEND")
             console.log(response)
             return response.json();

             })
             .then(function(data) {
                 console.log("VOICI LES DATAS RETOURNÉS PAR LE BACKEND")
                 console.log(data);
             }).catch(function(error) {
                 console.log('Request failed', error)
             });




   }


  render() {

    var modal = false

    // if (Platform.OS === 'ios') {

      return (
        
        <View>

           {/*ICON POUR PUBLIER*/}
          <Ionicons
            name="ios-paper-plane" size={30}
            color='#D8D8D8'
            style={{marginRight: 10, marginBottom: 2}}
            underlayColor="transparent"
            onPress={() => this.props.setModalVisible(modal) }/>


          {/* MODAL DE LA PUBLICATION*/}
          <View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.props.modal}
              onRequestClose={() => {
                alert('Modal has been closed.');
              }}>

              <PublishReduxForm onSubmit={this.handleSubmit}/>

            </Modal>
          </View>

        </View>



      );
    // // // }
    // // // else {
    // //   return (
    // //     <Ionicons
    // //       name="ios-power" size={30}
    // //       color='#D8D8D8'
    // //       style={{marginRight: 10,  marginTop: 10}}
    // //       underlayColor="transparent"
    // //       onPress={() => this.handlePublishClick() }/>
    // //   );
    // }
  }
}





function mapDispatchToProps(dispatch){
  return {
    onSendMessageClick: function(message) {
      dispatch( {type: 'newmessage', message })
    },
    setModalVisible: function(modal) {
      dispatch( {type: 'openmodal', modal })
    }
  }
}

function mapStateToProps(state) {
  return { modal: state.modal}
}






const comment_part = StyleSheet.create({
 comment:{
   height: 350,
   borderColor: 'rgba(151,151,151,0.39)',
   borderBottomWidth: 1
 }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publish);


