
import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'

import styles from './styles'

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
