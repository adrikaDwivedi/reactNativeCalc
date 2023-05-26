import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Mainscreen from './src/Views/Mainscreen';
import IntroScreen from './src/Views/IntroScreen';


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true)
  }, 2000)
  return (
    <View style={styles.container}>
      {isLoaded? <Mainscreen/> : <IntroScreen/>}

    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})