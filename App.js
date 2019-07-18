import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { StackNavigator,createStackNavigator,createAppContainer } from 'react-navigation';
import ListView from "./pages/Movie";
import BlinkView from "./pages/Blink";
import ButtonView from "./pages/Button";



var route = {
  Blinks: {screen: BlinkView},
  Lists: { screen: ListView},
  Buttons: {screen: ButtonView}
}

var config = {
   initialRouteName: 'Buttons',
}

const RootStack = createStackNavigator(route,config);
const AppContainer = createAppContainer(RootStack);

export default class Main extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <AppContainer/>
      )
  }
}








