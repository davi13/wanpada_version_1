/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react';
import { Text } from 'react-native';
import NavBar, { NavTitle, NavButton } from 'react-native-nav';
import app from './app.json';

export default function NavBarCustom() {
  return (
    <NavBar>
      <NavButton />
      <NavTitle>
        WanPada Chat 💬 {'\n'}
        <Text style={{ fontSize: 10, color: '#aaa' }}>Débutez la conversation ! Poursuivez votre avenir !</Text>
      </NavTitle>
      <NavButton />
    </NavBar>
  );
}
