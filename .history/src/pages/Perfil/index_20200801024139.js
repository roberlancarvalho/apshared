import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Perfil() {
  return (
    <>
      <View style={styles.container}>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
        </ImageBackground>


        <View style={styles.conteudo}>
          <Text style={styles.title}>Perfil de usuário</Text>
        </View>

        <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />

        <View style={styles.sobre}>
          <Text style={styles.apPropriedade}>Nome:</Text>
          <Text style={styles.apValor}>Roberlan Oliveira de Carvalho</Text>
          
          <Text style={styles.apPropriedade}>Nome:</Text>
          <Text style={styles.apValor}>Roberlan Oliveira de Carvalho</Text>
          
          <Text style={styles.apPropriedade}>Nome:</Text>
          <Text style={styles.apValor}>Roberlan Oliveira de Carvalho</Text>

          <Text style={styles.apPropriedade}>Nome:</Text>
          <Text style={styles.apValor}>Roberlan Oliveira de Carvalho</Text>

          <Text style={styles.apPropriedade}>Nome:</Text>
          <Text style={styles.apValor}>Roberlan Oliveira de Carvalho</Text>
        </View>

      </View>

    </>
  )
}