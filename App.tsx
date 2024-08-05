/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Onboarding from './screens/Onboarding/Onboarding';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  }
});

export default App;