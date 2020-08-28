import React from 'react'
import { Octicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'
import apImg from '../../assets/aps/ap1.png'

import styles from './styles'

export default function Detalhes() {
  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToMorador() {
    navigation.navigate('Morador')
  }

  return (
    <View style={styles.container}>

      <View style={styles.seta}>
        <TouchableOpacity onPress={navigateBack} >
          <Feather name="arrow-left" size={26} color="#62b0d3" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
      </View>

      <Text style={styles.title}>Detalhes do AP</Text>

      <Image style={styles.apImg}
        source={apImg}
      />
      <Image style={styles.apImg}
        source={apImg}
      />

      <TouchableOpacity style={styles.detailsButton} onPress={navigateToMorador()}>
        <Text style={styles.detailsButtonText}>Conhecer Roberlan </Text>
        <Octicons name="person" size={20} color="#62b0d3" />
      </TouchableOpacity>

    </View>
  )
}