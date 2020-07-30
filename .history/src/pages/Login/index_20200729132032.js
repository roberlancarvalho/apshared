
import React, { Component } from 'react'
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Login extends Component {
  logar = () => {
    Alert.alert("AP Shared", "Login realizado com sucesso")

  }

  render() {
    return (
      <View style={styles.container} >
        <Image source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Realize seu login: </Text>

        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Insira sua senha"
        />

        <TouchableOpacity
          style={styles.recuperar}
          onPress={() => { }}
        >
          <Text style={styles.botaoText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => { this.logar() }}
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.description}>Fazer login com:</Text>

      </View>
    )
  }
}

