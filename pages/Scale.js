import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image,Slider } from 'react-native';

export default class ScaleView extends Component {

	constructor(props){
	 super(props);
     this.state = { 
			
			iWidth:0,
			iHeight:0
      };
	}

	onSliderValueChange(douVal){

		this.setState({
				iWidth:200 * douVal,
				iHeight:200 * douVal
			})
	}

	render() {

	    return (
		    <View style = {styles.main}>

		        <Image style = {{width: this.state.iWidth,height: this.state.iHeight}} 
		        		source={{uri: 'https://reactjs.org/logo-og.png'}}/>
		       		

				<View style = {{ margin:20, width: 350 }}>
		        <Slider
		       		 onValueChange = { (douVal)=>this.onSliderValueChange(douVal) }
		       		 />
				</View>
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