/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,

  StyleSheet,

} from 'react-native';
import MainStack from './navigation/MainStack';



function App() {

  return (
    <SafeAreaView style={[styles.container]}>
      <MainStack />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
});

export default App;
