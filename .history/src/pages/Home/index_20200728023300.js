import React from 'react'
import { View, Image, Text } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>23 vagas</Text> disponíveis
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo(a)!</Text>
      <Text style={styles.description}>Encontre uma vaga ou adicione uma</Text>

    </View>
  )
}