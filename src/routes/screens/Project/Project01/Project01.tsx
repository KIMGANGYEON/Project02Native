import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {View, Text, Dimensions, ScrollView, Animated} from 'react-native';
import styled from 'styled-components/native';
import Tabs from './routes/Tabs';

const Nav = createNativeStackNavigator();

const Project01 = () => (
  <Nav.Navigator screenOptions={{headerShown: false}}>
    <Nav.Screen name="Tabs" component={Tabs} />
  </Nav.Navigator>
);

export default Project01;
