import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";

let screenName = {
	title: 'Challenge'
};

export default function ChallengeScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Header props={screenName} navigation={navigation} />
      <View style={styles.linkContainer}>
      	<Text style={styles.textStyle}>Playlist Link</Text>
     	<TextInput style={styles.textInput}></TextInput>
      </View>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEB7D6',
    justifyContent: 'space-between',


  },
  
  linkContainer: {
  	flex: 1,
  	width: '100%',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  
  textInput: {
  	backgroundColor:'white',
 	width: '70%',
 	height: '3em',
 	marginLeft: 'auto',
 	marginRight: 'auto',
  },
  
  textStyle: {
  	fontFamily: 'Kite One',
  	fontSize: '3em',
  	color: '#30151C'
  },
});
