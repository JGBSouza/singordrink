import React, {useState}  from 'react'
import ReactDOM from "react-dom/client";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Header(){
	return(
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity 
					style={styles.button}>
				</TouchableOpacity>
					
				<Text style={styles.modeText}>Mode Name</Text>
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
