import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'

import styles from './styles'

export default function Notificacoes() {
  return (
    <>
      <View style={styles.container}>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
        </ImageBackground>

        <View style={styles.conteudo}>
          <Text style={styles.title}>Notificações</Text>
        </View>

      </View>

    </>
  )
}