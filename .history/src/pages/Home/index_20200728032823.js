import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'
import apImg from '../../assets/aps/ap1.png'

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
          <Image style={styles.apImg}
            source={apImg}
          />

          <Text style={styles.apPropriedade}>Local:</Text>
          <Text style={styles.apValor}>Centro</Text>

          <Text style={styles.apPropriedade}>Valor:</Text>
          <Text style={styles.apValor}>R$ 150,00</Text>

          <Text style={styles.apPropriedade}>Vagas:</Text>
          <Text style={styles.apValor}>1</Text>

          <Text style={styles.apPropriedade}>Morador:</Text>
          <Text style={styles.apValor}>Fulano</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}
          >

            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <MaterialIcons name="details" size={20} color="#62b0d3" />
          </TouchableOpacity>

        </View>
      </View>

    </View>
  )
}