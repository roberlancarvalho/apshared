import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
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
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logoImg} />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>23 vagas</Text> disponíveis
        </Text>
        </View>

        <Text style={styles.title}>Bem vindo(a)!</Text>
        <Text style={styles.description}>Encontre uma vaga ou adicione uma</Text>

        <Text style={styles.tituloBloco}>Cadastrados recentemente</Text>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          style={styles.apList}
          keyExtractor={ap => String(ap)}
          renderItem={() => (

            <View style={styles.ap}>

              <View style={styles.sobre}>
                <Text style={styles.apPropriedade}>Quantidade de vagas:</Text>
                <Text style={styles.apValor}>1</Text>
              </View>

              <Image style={styles.apImg}
                source={apImg}
              />

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={navigateToDetalhe}
              >

                <Text style={styles.detailsButtonText}>Ver detalhes da vaga</Text>
                <AntDesign name="questioncircle" size={18} color="#62b0d3" />
              </TouchableOpacity>

            </View>

          )}
        />

        <Text style={styles.tituloBloco}>Mais procurados</Text>

        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]}
          style={styles.apList}
          keyExtractor={ap => String(ap)}
          // showsVerticalScrollIndicator={false}
          renderItem={() => (

            <View style={styles.ap}>

              <View style={styles.sobre}>
                <Text style={styles.apPropriedade}>Quantidade de vagas:</Text>
                <Text style={styles.apValor}>2</Text>
              </View>

              <Image style={styles.apImg}
                source={apImg}
              />

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={navigateToDetalhe}
              >

                <Text style={styles.detailsButtonText}>Ver detalhes da vaga</Text>
                <AntDesign name="questioncircle" size={18} color="#62b0d3" />
              </TouchableOpacity>

            </View>

          )}
        />
      </View>
    </>
  )
}