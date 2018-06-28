import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import {WebBrowser} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'

import {MonoText} from '../components/StyledText';
import { Icon } from 'react-native-elements';

class ExitModalPublish extends React.Component {
  constructor() {
    super();

  }
  static navigationOptions = {
    header: null
  };

  render() {
    var modal = false;
    return (
    <View style={{position: 'absolute', top: -20, right: -30}}>
      <Icon
        raised
        name='ios-close'
        type='ionicon'
        color='#00A6FB'
        onPress={() => this.props.exitModalPublish(modal)}
        />
    </View>
    );
  }
}
function mapDispatchToProps(dispatch) {
    return {
      exitModalPublish: function(modal) {
        dispatch({type: 'exitmodal', modal});
      }
    }
  }

export default connect(null, mapDispatchToProps,)(ExitModalPublish);
