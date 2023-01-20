import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ChallengeScreen from "./src/screens/ChallengeScreen";
import ChooseModeScreen from "./src/screens/ChooseModeScreen";
import GuessTheSongScreen from "./src/screens/GuessTheSongScreen";
import SingTheSongScreen from "./src/screens/SingTheSongScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    	<Stack.Navigator
    		screenOptions={{headerShown:false}}>
    		<Stack.Screen
    			name="HomeScreen"
    			component={HomeScreen}
    		/>
    		
    		<Stack.Screen
    			name="ChallengeScreen"
    			component={ChallengeScreen}
    		/>
    		
    		<Stack.Screen
    			name="ChooseModeScreen"
    			component={ChooseModeScreen}
    		/>
    		
    		<Stack.Screen
    			name="GuessTheSongScreen"
    			component={GuessTheSongScreen}
    		/>
    		
    		<Stack.Screen
    			name="SingTheSongScreen"
    			component={SingTheSongScreen}
    		/>
    	</Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEB7D6',
    justifyContent: 'space-between',

  }
});
