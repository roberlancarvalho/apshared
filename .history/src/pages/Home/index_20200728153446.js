import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'
import apImg from '../../assets/aps/ap1.png'

import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>23 vagas</Text> disponíveis
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo(a)!</Text>
      <Text style={styles.description}>Encontre uma vaga ou adicione uma</Text>

      <FlatList style={styles.apList}
        data={[1, 2, 3]}
        renderItem={() => (

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
              <AntDesign name="questioncircle" size={24} color="#fff" />
            </TouchableOpacity>

          </View>

        )}
      />

      <View>

      </View>

    </View>
  )
}