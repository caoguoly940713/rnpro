import React, { Component } from 'react';
// import { navigation } from 'react-navigation';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonView extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Blinks')}
            title="Blinks"></Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Lists')}
            title="Lists"
            color="#841584"></Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Scrolls')}
            title="Scrolls">
          </Button>
        </View>

      <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('BaseList')}
            title="BaseList">
          </Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    flexDirection: 'column',
   alignItems: 'center',
   flexWrap: 'nowrap',
   justifyContent: 'center',
  },
  buttonContainer: {
    width: 300,
    margin: 20
  },

})

// skip this line if using Create React Native App
// AppRegistry.registerComponent('rnpro', () => ButtonBasics);