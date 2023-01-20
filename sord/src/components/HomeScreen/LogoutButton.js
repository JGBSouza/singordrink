//imports from external librarys
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'

//Logout function
function Logout({logged, acessToken, setAcessToken}){
	if({logged} == true){
		setAcessToken("")
	}
	console.log("loggout sucessfully")
}

//Main function that displays Logout Button
export default function LogoutButtons({logged, acessToken, setAcessToken}) {
	return(
		      	<TouchableOpacity 
			  	style={styles.button}
			  	onPress={()=>{Logout({logged, acessToken, setAcessToken})}}
	
			>
				<Text style={styles.buttonText}>Logout</Text>
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
