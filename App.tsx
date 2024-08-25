import React from 'react';
import styled from 'styled-components/native';
import {Text, useColorScheme, View} from 'react-native';
import Root from './src/routes/Root';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
