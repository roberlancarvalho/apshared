import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a) ao Ap Shared</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62b0d3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
