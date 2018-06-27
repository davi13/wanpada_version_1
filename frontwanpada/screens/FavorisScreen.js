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
} from 'react-native';
import { WebBrowser } from 'expo';

import {connect} from 'react-redux';

import HeaderApp from '../components/HeaderApp';
import { MonoText } from '../components/StyledText';

class FavorisScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    var followings = this.props.followings.map((user, i) => {
        return(
          <CardSearch key={i} name={user.name} comp={user.comp} id={user.id}/>
        )
      }
    )

    return (
      <ImageBackground style={{flex: 1}} source={require("../assets/images/backgroundofficial.jpg")}>
        <View style={styles.container}>
          <HeaderApp title="Favories" />

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            {followings}

          </ScrollView>


        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  // Ici, on rend notre state.followings accessible à notre vue depuis props.followings
  return { followings: followings }
}

export default connect(
  mapStateToProps,
  null
)(FavorisScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
