import React, { useState, Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

import { Feather, Fontisto } from '@expo/vector-icons'
// import PasswordInputText from 'react-native-hide-show-password-input';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Sucesso() {

  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToLogin() {
    navigation.navigate('Login')
  }

  return (
    <>

      <View style={styles.container} >

        <View style={styles.seta}>
          <TouchableOpacity onPress={navigateBack} >
            <Feather name="arrow-left" size={26} color="#62b0d3" />
          </TouchableOpacity>

        </View>


        <View style={styles.conteudo}>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

          <View style={styles.sucesso}>
            <Fontisto name="checkbox-active" size={65} color="#62b0d3" />
            <Text style={styles.sucessoText}>{`
            Cadastro
            concluído!
            `}</Text>
          </View>

          <Text style={styles.description}>{`
          Agora você está pronto para
          encontrar o seu AP
          `}</Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => { navigateToLogin() }}
          >
            <Text style={styles.botaoText}>FAZER LOGIN</Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  )
}

export default Sucesso

