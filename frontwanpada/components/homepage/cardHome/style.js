import React from 'react'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 150,
    width: 350,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
    borderRadius: 10
  },
  title_profile:{
    fontSize: 25,
    marginTop: 23,
    color: '#00A6FB',
    fontWeight: 'bold'
  },
  text_profile:{
    color: '#979797',
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    textAlign: 'left'
  },
  icons:{
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 15
  }
});
