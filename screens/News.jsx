import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
const {SafeAreaView} = require('react-native');

function News() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.text}>News</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 40,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default News;
