import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import FavorisScreen from '../screens/FavorisScreen';
import LandingScreen from '../screens/LandingScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';


import ChatScreen1 from '../screens/ChatScreen1';
import ChatScreen2 from '../screens/ChatScreen2';

/////////////////////////
//                     //
//   STYLING METHODS   //
//                     //
/////////////////////////

// EXEMPLE

// tabBarOptions: {
//    activeTintColor: '#0D122F',
//    inactiveTintColor: '#3F64A6',
//    labelStyle: {
//      fontSize: 10,
//      fontFamily: 'Arial'
//    },
//    style: {
//      height: 50,
//      backgroundColor: '#3F64A6',
//      borderTopWidth: 3,
//      borderTopColor: '#0D122F',
//    },
//  },




/////////////////////////
//                     //
//      PAGE CHAT      //
//                     //
/////////////////////////

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
});

ChatStack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'}
    />
  ),
};


/////////////////////////
//                     //
//    PAGE FAVORIS     //
//                     //
/////////////////////////

const FavorisStack = createStackNavigator({
  Favoris: FavorisScreen,
});

FavorisStack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Favoris',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star'}
    />
  ),
};


/////////////////////////
//                     //
//      PAGE HOME      //
//                     //
/////////////////////////

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};


/////////////////////////
//                     //
//    PAGE LANDING     //
//                     //
/////////////////////////

const LandingStack = createStackNavigator({
  Landing: LandingScreen,
});

LandingStack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Landing',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


/////////////////////////
//                     //
//     PAGE SEARCH     //
//                     //
/////////////////////////

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
      style={{ color: '#33A3F4'}}
    />
  ),
};


/////////////////////////
//                     //
//    PAGE SETTINGS    //
//                     //
/////////////////////////

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Profil',
  tabBarIcon: ({ style={ color: focused ? 'black' : 'black'}, focused }) => (
    <TabBarIcon

      focused={focused}
      name={Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people'}
    />
  ),
};












const Chat1Stack = createStackNavigator({
  Chat1: ChatScreen1,
});

Chat1Stack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Login',
  tabBarIcon: ({ style={ color: focused ? 'black' : 'black'}, focused }) => (
    <TabBarIcon

      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-contact'}
    />
  ),
};

const Chat2Stack = createStackNavigator({
  Chat2: ChatScreen2,
});

Chat2Stack.navigationOptions = {
  tabBarOptions: {
     activeTintColor: '#FFFFFF',
     inactiveTintColor: '#00A6FB',
     labelStyle: {
       fontSize: 10,
       // fontFamily: 'Arial'
     },
     style: {
       height: 50,
       backgroundColor: '#00A6FB',
       borderTopWidth: 0,
       borderTopColor: '#0D122F',
     },
   },
  tabBarLabel: 'Talk',
  tabBarIcon: ({ style={ color: focused ? 'black' : 'black'}, focused }) => (
    <TabBarIcon

      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contact'}
    />
  ),
};






export default createBottomTabNavigator({
  // LandingStack,
  HomeStack,
  SearchStack,
  FavorisStack,
  ChatStack,
  SettingsStack,
});
