import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Image } from 'react-native';

export default class TestPage extends Component {

constructor(props){
	 super(props);
     this.state = { 
		mystyle:styles.picture1
      };
}

changeStyle(){
 		var mystyle = JSON.stringify(this.state.mystyle);
	var s1= JSON.stringify(styles.picture1);
	var s2= JSON.stringify(styles.picture2);

		if(mystyle==s1){
			this.setState({
				mystyle:styles.picture2
			})

		}else{
		this.setState({
				mystyle:styles.picture1
			})
		}
	}


 render() {
    return (
    	<View style = {styles.main}>

      <View style = {styles.v1}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       		style= {
       			this.state.mystyle
       		} />

      </View>

       <View style = {styles.v2}>

       <Button
       		title="change picture"
       		onPress={() => this.changeStyle() 
       	 }
       ></Button>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

	main:{
		flex:1,
		 justifyContent: 'flex-start',
	},

	v1:{
		margin: 10
	},

	v2:{
		margin: 10,
		width: 200
	},

	picture1:{
		width: 400,
		height: 300
	},

	picture2:{
		width: 200,
		height: 200
	}
});