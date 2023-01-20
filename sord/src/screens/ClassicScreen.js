import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";

let screenName={
	title: 'Classic'
};

export default function Classic({navigation, route}) {
  return (
    <View style={styles.container}>
      <Header props={screenName} navigation={navigation}/>
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
