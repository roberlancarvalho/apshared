import React from 'react'
import { AntDesign } from '@expo/vector-icons';
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

            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <AntDesign name="questioncircle" size={24} color="#fff" />
          </TouchableOpacity>

        </View>
      </View>

    </View>
  )
}