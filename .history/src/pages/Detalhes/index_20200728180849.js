import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
      </View>

      <Text style={styles.title}>Aprtamento</Text>
      <Text style={styles.description}>Centro de Quixadá</Text>

      <View style={styles.apList}>
        <View style={styles.ap}>
          {/* <Image style={styles.apImg}
            source={apImg}
          /> */}

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}
          >

            <Text style={styles.detailsButtonText}>Conhecer Fulano</Text>
            <Ionicons name="ios-person" size={24} color="black" />
          </TouchableOpacity>

        </View>
      </View>

    </View>
  )
}