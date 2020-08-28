import React, { useState, Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { Fontisto, Feather } from '@expo/vector-icons';
// import PasswordInputText from 'react-native-hide-show-password-input';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function CadastroTres() {

  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToSucesso() {
    navigation.navigate('Sucesso')
  }

  return (
    <>

      <View style={styles.container} >

        <View style={styles.seta}>
          <TouchableOpacity onPress={navigateBack} >
            <Feather name="arrow-left" size={26} color="#62b0d3" />
          </TouchableOpacity>

        </View>
        
        <View style={styles.icones}>
          <Fontisto style={styles.i} name="ellipse" size={6} color="#fff" />
          <Fontisto style={styles.ii} name="ellipse" size={6} color="#fff" />
          <Fontisto style={styles.iii} name="ellipse" size={6} color="#62b0d3" />
        </View>

        <View style={styles.conteudo}>

          <View style={styles.topo}>
            <Text style={styles.title}>Crie sua conta gratuita </Text>
            <Text style={styles.description}>Basta preencher esses dados
             e você estará conosco.</Text>
          </View>

          <Text style={styles.formTitle} >03. E-mail e senha</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
            />

            <View style={styles.inputSenha}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
              />
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => { navigateToSucesso() }}
            >

              <Text style={styles.botaoText}>PRÓXIMO</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </>
  )
}

export default CadastroTres

