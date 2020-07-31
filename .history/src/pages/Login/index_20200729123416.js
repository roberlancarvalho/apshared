
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
        />

        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272e39'
  },
  logo: {
    width: 170,
    height: 70,
    marginBottom: 40
  },
  input:{
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
    width: 320,
    height: 40,
    backgroundColor: '#fff',
    fontSize: 16,
    // fontWeight: 'bold',
    borderRadius: 3
  }
})