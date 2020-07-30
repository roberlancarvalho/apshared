
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../assets/logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 110,
  }
})