import React from 'react'
import { Octicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Detalhes() {
  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
      </View>

      <View style={styles.icone}>
        <TouchableOpacity onPress={navigateBack} >
          <Feather name="arrow-left" size={32} color="#62b0d3" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Vaga em Apartamento</Text>
      <Text style={styles.description}>Local: Centro de Quixadá</Text>

      <View style={styles.apList}>
        <View style={styles.ap}>
          {/* <Image style={styles.apImg}
            source={apImg}
          /> */}

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}
          >

            <Text style={styles.detailsButtonText}>Conhecer Fulano </Text>
            <Octicons name="person" size={24} color="#62b0d3" />
          </TouchableOpacity>

        </View>
      </View>

    </View>
  )
}