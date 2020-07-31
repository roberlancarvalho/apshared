import React from 'react'
import { View, Text, Image, FlatList, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Home() {
  const navigation = useNavigation()

  function navigateToDetalhe() {
    navigation.navigate('Detalhes')
  }

  export default function Add() {
    return (
      <>
        <View style={styles.container}>

          <ImageBackground style={styles.imgBackground}
            resizeMode='cover'
            source={require('../../assets/ap.png')}>
          </ImageBackground>

          <Image source={require('../../assets/logo.png')} style={styles.logo} />

          <View style={styles.conteudo}>
            <Text style={styles.title}>Cadastre uma nova vaga</Text>
            <Text style={styles.description}>Adicione todos os detalhes importantes do AP ou casa</Text>

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
            />
          </View>
        </View>

      </>
    )
  }