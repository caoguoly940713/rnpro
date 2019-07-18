import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { StackNavigator,createStackNavigator,createAppContainer } from 'react-navigation';
import ListView from "./pages/Movie";
import BlinkView from "./pages/Blink";
import ButtonView from "./pages/Button";
import RNScrollView from "./pages/Scroll";
import FlatListBase from "./pages/BaseList";
import TestPage from "./pages/Test";
import ScaleView from "./pages/Scale"

var route = {
  Blinks: {screen: BlinkView},
  Lists: { screen: ListView},
  Buttons: {screen: ButtonView},
  Scrolls: {screen: RNScrollView},
   BaseList: {screen: FlatListBase},
   Tests: {screen: TestPage},
    Scales: {screen: ScaleView}
}

var config = {
   initialRouteName: 'Buttons',
}

const RootStack = createStackNavigator(route,config);
const AppContainer = createAppContainer(RootStack);

export default class Main extends Component {

  render() {
    return (
      <AppContainer/>
      )
  }
}








