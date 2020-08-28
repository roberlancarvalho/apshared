import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Entypo, Feather } from '@expo/vector-icons'
import styles from './styles'

export default function Morador() {

  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToMensagem() {
    navigation.navigate('Mensagem')
  }

  return (
    <>
      <View style={styles.container}>

      <View style={styles.seta}>
        <TouchableOpacity onPress={ navigateBack() } >
          <Feather name="arrow-left" size={26} color="#62b0d3" />
        </TouchableOpacity>
      </View>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
          <View style={styles.conteudo}>
            <Text style={styles.title}>Perfil do Morador</Text>
          </View>
        </ImageBackground>

        <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />


        <View style={styles.sobre}>
          <Text style={styles.propriedade}>Nome:
            <Text style={styles.valor}>Roberlan Oliveira de Carvalho</Text>
          </Text>
          

          <Text style={styles.propriedade}>Idade:</Text>
          <Text style={styles.valor}>32</Text>

          <Text style={styles.propriedade}>Curso:</Text>
          <Text style={styles.valor}>Sistemas de Informação</Text>

          <Text style={styles.propriedade}>Instituição:</Text>
          <Text style={styles.valor}>Unictólica</Text>

          <Text style={styles.propriedade}>Cidade de origem:</Text>
          <Text style={styles.valor}>Mombaça-CE</Text>

          <TouchableOpacity
            style={styles.botaoSeguir}
            onPress={() => { }}
          >
            <Entypo style={styles.icone} name="edit" />
            <Text style={styles.botaoText}>SEGUIR
            
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoEnviar}
            onPress={() => { navigateToMensagem() }}
          >
          <Ionicons style={styles.icone} name="md-chatboxes" />
            <Text style={styles.botaoText}>ENVIAR MENSAGEM</Text>
          </TouchableOpacity>
        </View>


      </View>

    </>
  )
}