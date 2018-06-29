import React from 'react';
import { Header, Input, Button, Overlay, ListItem, Rating, Icon  } from 'react-native-elements';
import {
  Modal,Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground, Animated
} from 'react-native';
import {WebBrowser} from 'expo';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import UserUpdate from './form/UserUpdate';
import URL from '../../constants/Connect';





class Profile extends React.Component {

  constructor() {
    super();
    this.state = {visible : false,  isVisible: false, update: false }
    this.onSubmitUserUpdate = this.onSubmitUserUpdate.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.returnHomePage = this.returnHomePage.bind(this);
  }

  static navigationOptions = {
    header: null
  };
  returnHome(){
    this.setState({isVisible: false})
  }

  onSubmitUserUpdate(values) {
    newUpdate = false;

    this.setState({ isVisible: false });
    ctx = this;
    //10.2.1.38
    //192.168.1.13
    fetch(URL.urlApp+'/update', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'id='+this.props.user._id+'&nom='+values.Nom+'&prenom='+values.Prenom+'&email='+values.Email+'&password='+values.Password+'&ville='+values.Ville+'&company='+values.Company+'&university='+values.University
    })
    .then((res) => res.json())

    .then((data) => {

      // ctx.setState({update: true})

      // var changeState =  this.state.update

      // if(this.state.update){



        ctx.props.onUpdateClick(values.Nom, values.Prenom, values.Email, values.Password, values.Ville, values.Company, values.University)
      // }

    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
  }

    returnHomePage() {
        console.log('gilles')
        this.props.ParentReturnHome(false)
    }


  render(){
    
    console.log('ici en bas la reponse PROPS profile');
   //console.log(this.props.user);
    var displayProfile = this.props.profile;
    var colorHeart = {};


    if(displayProfile == true) {
      colorHeart = { color: "red", }
    }




      return(

      <View style={profile.profile_section}>
        <Image style={{borderRadius: 30, height: 60, width: 60, marginTop:20, marginRight: 'auto', marginLeft:'auto'}} source={require("../../assets/images/avatar-1.jpg")} />

        <View style={{position: 'absolute', top: 20, right: -5}}>
          <Ionicons name="md-heart" size={32} style={colorHeart}
            // activation de la fonction contenue dans le dispatch
            onPress={() => { this.props.handleProfile() }} />
        </View>
        
        <View style={{position: 'absolute', top: 0, left: 0, }}>
                      <Icon
                        raised
                        name='ios-close'
                        type='ionicon'
                        color='#D8D8D8'
                        onPress={this.returnHomePage}
                      />
              </View>
        
          

        <Modal animationType='slide' transparent={false}  visible={this.state.isVisible}>
          <Overlay fullScreen={true} isVisible={this.state.isVisible}>
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
            
              

            </View>
          </Overlay>
        </Modal>

        <Text h1 style={profile.title_profile}>{this.props.user.nom}</Text>
        <Text h2 style={profile.text_profile}> {this.props.user.company}</Text>
      <Text h2 style={profile.text_profile}>{this.props.user.university}</Text>

        <View style={{display: 'flex', flexDirection: 'row', marginTop:10}}>

          <View style={profile.competence_card}>
            <Text style={profile.competence_text}> Web developpeur </Text>
          </View>

          <View style={profile.competence_card}>
            <Text style={profile.competence_text}> Intégrateur </Text>
          </View>

          <View style={profile.competence_card}>
            <Text style={profile.competence_text}> Web designer </Text>
          </View>

        </View>

          {/*PARTIES ETOILES NOTES*/}
          <Rating

          type="star"
          fractions={1}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </View>

        /*****FIN ***********/

      )

  }
}
function mapStateToProps(state) {
  return { user: state.user}
}



function mapDispatchToProps(dispatch) {
  return {
    onUpdateClick: function(nom, prenom, email, password, ville, entreprise, universite) {
        dispatch({ type: 'update', nom, prenom, email, password, ville, entreprise, universite  });
    },
  }
}


// function mapDispatchToProps(dispatch) {

//   return {
//     onUpdateClick: function() {
//       dispatch({type: 'USER_UPDATE', data});
//     }
//   }
// }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);


const profile = StyleSheet.create({
  profile_section:{
    flex: 1,
    flexDirection: 'column',
    marginLeft:'auto',
    marginRight:'auto'
  },
  profile_title:{
    flexDirection: 'column',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:15,
    fontSize: 20,
    color: '#00A6FB',
    fontWeight: 'bold',
  },
  profile_card:{
    flex:1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius:5,
    borderColor: 'rgba(151,151,151,0.39)',
    borderBottomWidth: 1
  },
  title_profile:{
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#00A6FB',
    fontWeight: 'bold'
  },
  text_profile:{
    fontSize: 17,
    marginTop: 5,
    color: '#D8D8D8',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  competence_card:{
    width: 100,
    backgroundColor: '#00A6FB',
    marginRight: 10,
    height: 20,
    borderRadius: 8
  },
  competence_text:{
    fontSize:10,
    color: '#fff',
    textAlign:'center',
    marginTop: 'auto',
    marginBottom:'auto'
  }
})
