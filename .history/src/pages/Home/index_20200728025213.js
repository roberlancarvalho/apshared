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

      <View style={styles.apList}>
        <View style={styles.ap}>
          <Image />
          <Text style={styles.apPropriedade}>Local:</Text>
          <Text style={styles.apValor}>Centro</Text>

          <Text style={styles.apPropriedade}>Valor:</Text>
          <Text style={styles.apValor}>R$ 150,00</Text>

          <Text style={styles.apPropriedade}>Vagas:</Text>
          <Text style={styles.apValor}>1</Text>

          <Text style={styles.ap}>Morador:</Text>
          <Text style={styles.vagas}>Fulano</Text>

        </View>
      </View>

    </View>
  )
}