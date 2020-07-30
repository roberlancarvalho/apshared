import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'
import apImg from '../../assets/aps/ap1.png'

import styles from './styles'

export default function Home() {
  const navigation = useNavigation()

  function navigateToDetalhe() {
    navigation.navigate('Detalhes')
  }

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

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        style={styles.apList}
        keyExtractor={ap => String(ap)}
        // showsVerticalScrollIndicator={false}
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
              onPress={navigateToDetalhe}
            >

              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Octicons name="person" size={24} color="#62b0d3" />
            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  )
}