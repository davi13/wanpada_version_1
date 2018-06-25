import React, { Component } from 'react';
import { View, ListItem } from 'react-native'

const ListItemHome = (props) => {
  return (
    <View style={{marginBottom: 1, borderColor: '#979797', }}>
      <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="John Doe"
        subtitle="De rien =) ! "
      />
    </View>
  );
}

export default ListItemHome;
