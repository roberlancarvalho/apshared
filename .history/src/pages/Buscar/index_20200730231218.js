import React from 'react'
import { View, Text, Image, FlatList, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import logoImg from '../../assets/logo.png'
import apImg from '../../assets/aps/ap1.png'

export default function Buscar() {

  const navigation = useNavigation()

  function navigateToDetalhe() {
    navigation.navigate('Detalhes')
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formBuscar}>
          <TextInput
            style={styles.inputBuscar}
            placeholder="Buscar vaga"
            placeholderTextColor="#999"
            autoCapitalize="sentences"
            autoCorrect={false}
            autoFocus
          />

          <TouchableOpacity onPress={() => { }} style={styles.botaoBuscar} >
            <FontAwesome name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* <Text style={styles.tituloBloco}>Todas as vagas disponíveis</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          style={styles.apList}
          keyExtractor={ap => String(ap)}
          renderItem={() => (


            <View style={styles.ap}>

              <View style={styles.sobre}>
                <Text style={styles.apPropriedade}>AP Localizado:</Text>
                <Text style={styles.apValor}>Centro</Text>
              </View>

              <Image style={styles.apImg}
                source={apImg}
              />

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={navigateToDetalhe}
              >

                <Text style={styles.detailsButtonText}>Ver detalhes da vaga</Text>
                <AntDesign name="questioncircle" size={22} color="#62b0d3" />
              </TouchableOpacity>

            </View>

          )}
        /> */}
      </View>
    </>
  )
}