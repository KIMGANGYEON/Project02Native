import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UploadProduct from '../screens/UploadProduct';
import Menu from '../screens/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Book"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={'black'}
                size={28}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UploadProduct"
        component={UploadProduct}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <AntDesign
                name={focused ? 'pluscircle' : 'pluscircleo'}
                color={'black'}
                size={28}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={Menu}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesome
                name={focused ? 'user' : 'user-o'}
                color={'black'}
                size={28}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesome6
                name={focused ? 'bars-staggered' : 'bars'}
                color={'black'}
                size={28}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
