import React, {useState, useEffect}  from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Header({props, navigation}){
	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.navigate("HomeScreen")}
					style={styles.button}>
				</TouchableOpacity>
					
				<Text style={styles.modeText}>{props.title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width:'100%',
		alignItems: 'center',
		justifyContent: 'start'
	
	},
	header: {
		flexDirection: 'row',
		flexWrap: 'wrap',

		alignItems: 'center',
		width: '100%',
		height: '6em',
		backgroundColor: '#30151C'

	},
	button: {
		backgroundColor: '#CEB7D6',
		width: '3em',
		height: '3em',
		marginLeft: '1.5em',
	
	},
	modeText: {
		fontSize:'2em',
		marginLeft: '16%',
		color: '#CEB7D6',
		fontFamily: 'Kite One'
	}
	

});
