import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import ShowProject from './screens/ShowProject';
import Project01 from './screens/Project/Project01/Project01';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="ShowProject"
        component={ShowProject}
        options={{presentation: 'card'}}
      />
      <Stack.Screen
        name="Project01"
        component={Project01}
        options={{presentation: 'card'}}
      />
    </Stack.Navigator>
  );
};

export default Root;
