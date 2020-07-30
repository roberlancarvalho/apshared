
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Login extends Component {

  logar = () => {
    const navigation = useNavigation()
    Alert.alert("AP Shared", "Login realizado com sucesso")
    navigation.navigate('Home')
  }
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
        style={styles.botao}
        onPress={() => { this.logar() }}
      >
        <Text style={styles.botaoText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  )
}
}

