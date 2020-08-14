import React from 'react'
import { View, Text, Image, FlatList, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import logoImg from '../../assets/logo.png'
import apImg from '../../assets/aps/ap1.png'

export default function Mensagem() {

  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToDetalhe() {
    navigation.navigate('Detalhes')
  }

  return (
    <>
      <View style={styles.container}>

        <View style={styles.seta}>
          <TouchableOpacity onPress={navigateBack} >
            <Feather name="arrow-left" size={28} color="#62b0d3" />
          </TouchableOpacity>
        </View>

        <View style={styles.formEnviar}>
          <TextInput
            style={styles.inputEnviar}
            placeholder="Escrever mensagem"
            placeholderTextColor="#999"
            autoCapitalize="sentences"
            autoCorrect={false}
            autoFocus
          />

          <TouchableOpacity onPress={() => { }} style={styles.botaoEnviar} >
            <FontAwesome name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}