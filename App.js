import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('screen')
const SIZE = width *  0.9




export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.big]} />
      <View style={[styles.medium]} />
      <View style={[styles.small]} />

      <View style={[styles.mover]} >
        <View style={[styles.hours]} />
      </View>
      <View style={[styles.mover]} >
        <View style={[styles.minutes]} />
      </View>
      <View style={[styles.mover]} >
        <View style={[styles.seconds]} />
      </View>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mover: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE/2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  hours: {
    position: 'absolute',

    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '35%',
    marginTop: '15%',
    width: 4,
    borderRadius: 4
  },
  minutes: {
    position: 'absolute',

    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '45%',
    marginTop: '5%',
    width: 3,
    borderRadius: 3,
  },
  seconds: {
    backgroundColor: 'rgba(227, 71, 134, 1)',
    height: '50%',
    width: 2,
    borderRadius: 2
  },
  big: {
    position: 'absolute',
    width: SIZE * 0.8,
    height: SIZE * 0.8,
    borderRadius: SIZE * 0.4,
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
  },
  medium: {
    position: 'absolute',
    width: SIZE * 0.5,
    height: SIZE * 0.5,
    borderRadius: SIZE * 0.25,
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
  },
  small: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(227, 71, 134, 1)',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
