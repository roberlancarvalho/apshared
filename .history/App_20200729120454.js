import React, { Component } from 'react'
import { StatusBar, StyleSheet, View, Text } from 'react-native'
import Routes from './src/routes'

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container} >
          <Text> textInComponent </Text>
        </View>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="#272e39" />

      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})
