/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigation from './src/navigation/AuthNavigator';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </>
  );
}

export default App;
