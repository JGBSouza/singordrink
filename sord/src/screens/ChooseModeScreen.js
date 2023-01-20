import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";

let screenName = {
	title: 'Choose Mode'
};
export default function ChallengeScreen({navigation, route}) {
	
	const modeImage = require('../../assets/singTheSong.png');
	
	return (
	<SafeAreaView style={styles.container}>
		<Header props={screenName} navigation={navigation}/>
		
		<ScrollView style={styles.imageContainer}>

		      	<TouchableOpacity
		      		onPress={() => navigation.navigate("SingTheSongScreen")}>
			      	<Image 
			      		source={{modeImage}} 
			      		style={styles.image}/>
		      	</TouchableOpacity>
		      	
		      	<TouchableOpacity
		      		onPress={() => navigation.navigate("GuessTheSongScreen")}>
			      	<Image 
			      		source={{modeImage}} 
			      		style={styles.image}/>
		      	</TouchableOpacity>
		      	
		      	<TouchableOpacity
		      		onPress={() => navigation.navigate("ChallengeScreen")}>
			      	<Image 
			      		source={{modeImage}} 
			      		style={styles.image}/>
		      	</TouchableOpacity>
		      
		</ScrollView>

		<Footer/>
	</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEB7D6',
    justifyContent: 'space-between',

  },
  
  imageContainer: {
 	flex: 1,
  	margin: 'auto',
  	width: '100%',
  }, 
  
  image: {
  	width: '28em',
  	height: '14em',
  	margin: 'auto',
  	marginTop: '4em',
  	marginBottom: '4em',
  }
});
