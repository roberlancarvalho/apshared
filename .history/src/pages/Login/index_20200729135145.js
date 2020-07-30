
import React, { Component } from 'react'
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

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
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => { this.logar() }}
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.alternativaLogin}>Fazer login com:</Text>

        <View style={styles.sociaisIcons}>
          <AntDesign style={styles.facebook} name="facebook-square" size={34} color="#fff" />
          <AntDesign style={styles.google} name="google" size={34} color="#fff" />
        </View>


      </View>
    )
  }
}

