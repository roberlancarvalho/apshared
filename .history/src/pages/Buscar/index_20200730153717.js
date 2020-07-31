import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Buscar() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.formBuscar}>
          <TextInput
            style={styles.inputBuscar}
            placeholder="Buscar vaga"
            placeholderTextColor="#999"
            autoCapitalize="sentences"
            autoCorrect={false}
            autoFocus
          />

          <TouchableOpacity onPress={() => { }} style={styles.botaoBuscar} >
            <FontAwesome name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
          <Image source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </ImageBackground>
      </View>
    </>
  )
}