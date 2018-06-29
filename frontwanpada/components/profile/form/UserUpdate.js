import React from 'react';
import { View , TextInput, Text} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";
import {connect} from 'react-redux';



function textInput(props) {
  const { input } = props;
  return (
    <View>
      <Text style={{color: '#dddddd', marginTop: 8}}>{input.name}</Text>
      <Input
        onChangeText={input.onChange}
        value={input.value}
      />
    </View>
  );
}

function passwordInput(props) {
  const { input } = props;
  return (
    <View>
      <Text style={{color: '#dddddd', marginTop: 8 }}>{input.name}</Text>
      <Input
        onChangeText={input.onChange}
        value={input.value}
        secureTextEntry={true}
        password={true}
      />
    </View>
  );
}

class UserUpdate extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
      console.log('coicoidojscoijc   ovosdjosdjvsoijo odjfoid');
      let User = this.props.user
      this.props.initialize({
        Nom: User.nom,
        Prenom: User.prenom,
        Email: User.email,
        Pasword: User.password,
        Ville: User.ville,
        Company: User.company,
        University: User.university
      }
      )}



  render() {

    return (
      <View >

        <Field name="Nom"
          component={textInput}
        />

         <Field name="Prenom"
          component={textInput}
        />
         <Field name="Email"
          component={textInput}
        />
         <Field name="Password"
          component={passwordInput}
        />
        <Field name="Ville"
          component={textInput}
        />


        <Field name="Company"
          component={textInput}
        />


        <Field name="University"
          component={textInput}
        />

        <Button
          onPress={this.props.handleSubmit}
          title="Update"
          textStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#00A6FB",
            width: 200,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

export default reduxForm({
  form: 'UserUpdate-form'
})(UserUpdate)
