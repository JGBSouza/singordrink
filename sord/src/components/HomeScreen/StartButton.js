import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'


function Start({navigation, logged}){
	if({logged} == true){
		navigation.navigate("ChooseModeScreen")
	}
	
}

export default function StartButtons({ navigation, logged }) {

	return(
				  <TouchableOpacity 
				  	style={styles.button} 
				  	onPress={() => Start({navigation, logged})}>
				  	<Text style={styles.buttonText}>Start</Text>
				  </TouchableOpacity >
	)
}

const styles = StyleSheet.create({

  
  button: {
  	width: '15em',
  	height: '5em',
	backgroundColor: '#6C3C53',
  	marginBottom: '3em',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  
  buttonText: {
  	fontSize: '2em',
  	fontFamily: 'Kite One',
  	color: '#30151C',
  }, 
  
});
