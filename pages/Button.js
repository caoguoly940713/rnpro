import React, { Component } from 'react';
// import { navigation } from 'react-navigation';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonView extends Component {

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
            ></Button>
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

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Tests')}
            title="Tests">
          </Button>
          </View>

          <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Scales')}
            title="Scales">
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
