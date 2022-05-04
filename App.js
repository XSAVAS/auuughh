import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 56,
    height: 48,
  },

  augh: {
    width: 56,
    height: 48,

  },
});

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image 
      style={styles.augh}
       source={{
          uri: 'https://tenor.com/view/disintegrating-aughhh-gif-24532719',
       }}
       />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


