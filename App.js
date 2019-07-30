
/*
import React, {Component} from 'react';
import ReProblem from './Components/ReProblem';
import Home from './Components/Home';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {  createAppContainer, createStackNavigator} from 'react-navigation';
const RootStack = createStackNavigator({
  Home: Home, //might need to get rid of comma
  
})
const App = createAppContainer(RootStack);

export default App;
*/
import React from 'react';
import { Text, View } from 'react-native';
import ReProblem from './Components/ReProblem';
import Home from './Components/Home';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import OneSignal from 'react-native-onesignal';

const title1='Report A Problem';

const TabNavigator = createBottomTabNavigator({
  
  Home: Home,
  Issues: ReProblem
});

export default createAppContainer(TabNavigator);
