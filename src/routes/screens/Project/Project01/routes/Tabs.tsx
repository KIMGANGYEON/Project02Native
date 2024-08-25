import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UploadProduct from '../screens/UploadProduct';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Book" component={Home} />
      <Tab.Screen name="UploadProduct" component={UploadProduct} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export default Tabs;
