import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import Footer from './src/components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header style={styles.header}/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEB7D6',
    justifyContent: 'space-between',

  }
});
