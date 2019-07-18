import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';

export default class ScaleView extends Component {

	render() {

	    return (
		    <View style = {styles.main}>

		        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
		       		style = {{
		       			width: 200,
		       			height: 200
		       		}} />

		      </View>
    );
  }
}

const styles = StyleSheet.create({
	main:{
		flex:1,
		 justifyContent: 'flex-start',
	}
})