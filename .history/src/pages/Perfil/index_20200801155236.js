import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Perfil() {
  return (
    <>
      <View style={styles.container}>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
        </ImageBackground>


        <View style={styles.conteudo}>
          <Text style={styles.title}>Perfil de usuário</Text>
        </View>

        <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />

        <View style={styles.sobre}>
          <Text style={styles.propriedade}>Nome:</Text>
          <Text style={styles.valor}>Roberlan Oliveira de Carvalho</Text>
          
          <Text style={styles.propriedade}>Idade:</Text>
          <Text style={styles.valor}>32</Text>

          <Text style={styles.propriedade}>Curso:</Text>
          <Text style={styles.valor}>Sistemas de Informação</Text>

          <Text style={styles.propriedade}>Instituição:</Text>
          <Text style={styles.valor}>Unictólica</Text>

          <Text style={styles.propriedade}>Cidade de origem:</Text>
          <Text style={styles.valor}>Mombaça-CE</Text>
        </View>

      </View>

    </>
  )
}