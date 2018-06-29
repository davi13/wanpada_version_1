import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { styles } from './style'

function textInput(props) {
  const { input } = props;
  return (

    <Input
      onChangeText={input.onChange}
      value={input.value}
      underlineColorAndroid={'transparent'}
      placeholder='Recherche '
    />
  );
}

class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champs: ''
    }
  }

  render() {
    return(
      <View style={ styles.containerBar }>
      <Icon
      style={{marginTop:5, marginRight:5}}
       name='search'
       size={22}
       color='white'
       onPress={this.props.handleSubmit}
      />
        <Field
          name="search"
          component={textInput}
        />


      </View>
    );
  }
}

export default reduxForm({
  form: 'bar-search'
})(BarSearch);
