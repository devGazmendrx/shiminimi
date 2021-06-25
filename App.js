/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten shiminimi
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './views/Landing/Landing';
import NextMatchDetails from './views/Landing/Lobby/PlayScreen/NextMatch/NextMatchDetails/NextMatchDetails';

const Routes = createStackNavigator();

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <IconRegistry icons={EvaIconsPack}/>
    <NavigationContainer>
      <Routes.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
          <Routes.Screen name="Landing" component={Landing} />
          <Routes.Screen name="NextMatchDetails" component={NextMatchDetails} />    
      </Routes.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
);


