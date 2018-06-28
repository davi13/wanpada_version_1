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

import { Button, ListItem, Overlay, Input } from 'react-native-elements'


import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'

import {MonoText} from '../components/StyledText';

import { reduxForm, Field } from "redux-form";

import ExitModalPublish from "./exitModalpublish";


function messageInput(props) {
  const { input } = props;
  return (

    // DEBUT DU REDUX FORM
    <View>

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
          onChangeText={input.onChange}
          value={input.value}
        />

      </View>

    </View>
    // FIN DU REDUX FORM

  );
}

class PublishReduxForm extends React.Component {
  constructor() {
    super();

    this.state = {
      /*isVisible: false,
      signUp: false,
      signIn: false,
      modalVisible: false*/
    }
  }
  static navigationOptions = {
    header: null
  };

  /*setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }*/



  render() {
    return (
      <View style={{marginTop: 22}}>
        <View>
          <View style={{alignItems: 'center'}}>
            <Overlay style={{margin: 'auto', marginTop: 0, backgroundColor: 'transparent'}} isVisible>
              {/* VIEW POUR METTRE EN FORME LE HAUT DE PAGE*/}
              <View style={{flexDirection: 'row'}}>
                <Text H1 style={{fontSize: 25, color: '#00A6FB',
                fontWeight: 'bold', marginBottom: 50, marginLeft: 'auto', marginRight: 'auto'}}> Publier </Text>

                {/*BOUTTON EXIT DU MODAL NON FONCTIONNEL POUR LE MOMENT*/}
                <ExitModalPublish/>
              </View>
              {/* FIELD POUR RECEVOIR LE COMPOSANT DE LA FONCTION REDUX FORM PLUS HAUT SUR CETTE PAGE*/}
              <Field
                name="message"
                component={messageInput}
              />
              {/* BUTTON POUR ENVOYER AVEC REDUX FORM*/}
              <Button
                title='Envoyer'
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{ borderRadius: 5, marginTop: 20, marginBottom: 20, width: 100, marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#00A6FB' }}
                textStyle={{ fontWeight: 'bold', fontSize: 23 }}
                onPress={this.props.handleSubmit}
                underlayColor="transparent"
              />
            </Overlay>
          </View>
        </View>
      </View>
    );
  }
}





const comment_part = StyleSheet.create({
 comment:{
   height: 350,
   borderColor: 'rgba(151,151,151,0.39)',
   borderBottomWidth: 1
 }
})




export default reduxForm({
  form: 'message'
})(PublishReduxForm)
