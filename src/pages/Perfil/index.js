import React from 'react'
import { Alert, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {

  const navigation = useNavigation()

  function navigateToMensagem() {
    navigation.navigate('Mensagem')
  }

  return (
    <>
      <View style={styles.container}>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap.png')}>
          <View style={styles.conteudo}>
            <Text style={styles.title}>Perfil de usuário</Text>
          </View>
        </ImageBackground>

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

          <TouchableOpacity
            style={styles.botaoSeguir}
            onPress={() => { }}
          >
            <Entypo style={styles.icone} name="edit" />
            <Text style={styles.botaoText}>EDITAR INFORMAÇÕES
            
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoEnviar}
            onPress={() => { navigateToMensagem() }}
          >
          <Ionicons style={styles.icone} name="md-chatboxes" />
            <Text style={styles.botaoText}>MINHAS MENSAGENS</Text>
          </TouchableOpacity>
        </View>


      </View>

    </>
  )
}