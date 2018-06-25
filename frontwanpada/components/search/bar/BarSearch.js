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
      placeholder='Recherche ....'
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
        <Field
          name="search"
          component={textInput}
        />

        <Button
          onPress={this.props.handleSubmit}
          icon={
            <Icon
             name='search'
             size={24}
             color='white'
            />
          }
          buttonStyle={styles.containerButton}
          containerStyle={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'bar-search'
})(BarSearch);
