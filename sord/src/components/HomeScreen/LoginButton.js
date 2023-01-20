import React from 'react';
import {useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'
import { StatusBar } from 'expo-status-bar';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function authHandler({acessToken, setAcessToken, logged, setLogged}) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '0190abf624bb495999df5f26efd325e6',
      scopes: ['user-read-email', 'playlist-modify-public'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'http://localhost:19006',
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
    	const { code } = response.params;
	setAcessToken(response.params);
	setLogged(true);
	
    }
    console.log("logged sucessfully")
  }, [response]);
	

return (
	<TouchableOpacity
		disabled={true}
		style={styles.button}
		onPress={() => {promptAsync();}}>
		
		<Text style={styles.buttonText}>Login</Text> 
	</TouchableOpacity> 
  );
  
  

}

const styles = StyleSheet.create({
  button: {
  	width: '15em',
  	height: '5em',
	backgroundColor: '#6C3C53',
  	margin: '3em',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  
  buttonText: {
  	fontSize: '2em',
  	fontFamily: 'Kite One',
  	color: '#30151C',
  }, 
  
    modeButtons:{
  	justifyContent: 'center',
  	alignItems: 'center',
  	height: '50%'
  },
});

