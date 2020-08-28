import React, { useRef, useState } from 'react'
import { View, Text, Picker, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Input from '../../components/Input';
import { Form } from '@unform/mobile';

import styles from './styles'

export default function Configuracoes() {
  return (
    <>
      <View style={styles.container}>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
        </ImageBackground>

        <View style={styles.conteudo}>
          <Text style={styles.title}>Configurações</Text>
        </View>

      </View>

    </>
  )
}