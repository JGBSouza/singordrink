import React, {useState}  from 'react'
import ReactDOM from "react-dom/client";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Footer(){
	return(
		<View style={styles.container}>
			<View style={styles.footer}>
			
				<Text style={styles.footerText}>APP Criado pelo JG</Text>
					
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width:'100%',
		alignItems: 'center',
		justifyContent: 'end'
	},
	footer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '6em',
		backgroundColor: '#30151C'

	},
	footerText: {
		fontSize:'1em',
		color: '#CEB7D6',
		fontFamily: 'Kite One',
	}
	

});
