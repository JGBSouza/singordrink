import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'


export default function HSText({ navigation }) {
  return (  	
	    	<View style={styles.titleLogo}>
				<View style={styles.logo}>
							<Image source={require('../../../assets/logoIcon.png')} style={styles.image} 
							style={styles.logoImage}/>
				</View>

				<View style={styles.title}>
				  <Text style={styles.titleText}>Sing</Text>
				  <Text style={[styles.titleText, styles.orText]}>or</Text>
				  <Text style={[styles.titleText, styles.drinkText]}>Drink</Text>
			  	</View>
		</View>
		
  );
}

const styles = StyleSheet.create({
  
   titleLogo: {
  	flex: 1,
  	flexDirection: 'row',
  	width: '100%',
  },
  
  logo: {
  	width: '50%',
  	alignItems: 'center',
  	justifyContent: 'start',
  	marginTop: '5em',

  },
  
  logoImage: {
  	width: '8em',
  	height: '8em',
  	backgroundColor: '#CEB7D6',
  	borderRadius: '2em',
  },
  
  title: {
  	width: '50%',
  	marginTop: '3em',
  },
  
  titleText: {
	fontSize: '4em',
	fontFamily: 'Kite One',
	color: '#30151C',

  },
  
  orText: {
  	marginLeft: '10%',
  },
  
  drinkText: {
  	marginLeft: '15%',
  },
  
});
