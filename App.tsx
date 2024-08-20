import React from 'react';
import styled from 'styled-components/native';
import {Text, useColorScheme, View} from 'react-native';
import Root from './src/routes/Root';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default App;
