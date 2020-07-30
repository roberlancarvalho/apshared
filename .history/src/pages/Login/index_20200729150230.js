
import React, { Component } from 'react'
import { Alert, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
// import PasswordInputText from 'react-native-hide-show-password-input';

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

        <View style={styles.links}>
          <TouchableOpacity
            style={styles.recuperar}
            onPress={() => { }}
          >
            <Text style={styles.link}>Esqueci minha senha</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.recuperar}
            onPress={() => { }}
          >
            <Text style={styles.link}>Realizar cadastro</Text>

          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => { this.logar() }}
        >
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.alternativaLogin}>Fazer login com:</Text>

        <View style={styles.sociaisIcons}>
          <AntDesign style={styles.facebook} name="facebook-square" size={45} color="#62b0d3" />
          <AntDesign style={styles.google} name="google" size={45} color="#62b0d3" />
        </View>


      </View>
    )
  }
}

