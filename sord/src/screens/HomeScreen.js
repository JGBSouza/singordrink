//import components from external librarys
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'

//import components from src/components
import HomeScreenTopView from '../components/HomeScreen/HomeScreenTopView.js'

import LogoutButton from '../components/HomeScreen/LogoutButton.js'
import StartButton from '../components/HomeScreen/StartButton.js'
import AuthHandler from '../components/HomeScreen/LoginButton.js'


//main function, display HomeScreen
export default function HomeScreen({ navigation }) {

	const backgroundImage = require('../../assets/homeScreenArt.png');
	
	//used to determinate if user logged on spotify
	const [logged, setLogged] = useState(false)
	
	//acessToken recieved from LoginButton after Spotify Authentication
	const [acessToken, setAcessToken] = useState("")
	
	//login, logout and start buttons displayed on HomeScreen
	const loginButton = <AuthHandler acessToken={acessToken} setAcessToken={setAcessToken} logged={logged} setLogged={setLogged}/>;
	
	const startButton = <StartButton navigation={navigation} logged={logged}/>;
	
	const logoutButton = <LogoutButton logged={logged} acessToken={acessToken} setAcessToken={setAcessToken}/>;
	
	//Displays Homescreen
	return (
		<View style={styles.container}>
		
		 	<View style={styles.backgroundImageContainer}>
				<Image source={backgroundImage} style={styles.backgroundImage}/>
			</View>
				
			<View style={styles.homePage}>
				    	
				<HomeScreenTopView/>
			
				<View style={styles.modeButtons}>
					{loginButton}
					{logoutButton}
					{startButton}
				</View>	
			</View>
		
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#CEB7D6',

		linearGradient: '(#E66465, #9198E5)',
	},

	homePage: {
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
	},

	backgroundImageContainer: {
		flex: 1,
		position: 'relative',
		alignItems: 'end',
		justifyContent: 'end',

	},

	backgroundImage: {
		width: '35em',
		height: '35em',
	},

	modeButtons:{
		justifyContent: 'center',
		alignItems: 'center',
		height: '50%'
	},

  
});
