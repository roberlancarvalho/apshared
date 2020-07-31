import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Add() {
  return (
    <>
      <View style={styles.container}>

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
        </ImageBackground>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <View style={styles.conteudo}>
          <Text style={styles.title}>Cadastre uma nova vaga</Text>
          <Text style={styles.description}>Adicione todos os detalhes importantes do AP ou casa</Text>
        </View>
      </View>

    </>
  )
}