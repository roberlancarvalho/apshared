import React from 'react'
import { Alert, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';
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
            <Text style={styles.title}>Meu perfil</Text>
          </View>
        </ImageBackground>

        <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />


        <View style={styles.sobre}>
          <Text style={styles.propriedade}>Nome:
            <Text style={styles.valor}> Roberlan Oliveira de Carvalho;</Text>
          </Text>

          <Text style={styles.propriedade}>Idade:
            <Text style={styles.valor}> 32;</Text>
          </Text> 

          <Text style={styles.propriedade}>Curso:
            <Text style={styles.valor}> Sistemas de Informação;</Text>
          </Text>

          <Text style={styles.propriedade}>Instituição:
            <Text style={styles.valor}> Unicatólica;</Text>
          </Text>

          <Text style={styles.propriedade}>Cidade de origem:
            <Text style={styles.valor}> Mombaça-CE.</Text>
          </Text>

          <Text style={styles.valor}>Link das Redes Sociais:</Text>

          <TouchableOpacity>
            <Text>
              <Feather name="facebook" size={20} color="#62b0d3" />
              <Text style={styles.face}> /roberlancarvalho</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text>
                <AntDesign name="instagram" size={20} color="#62b0d3" />
                <Text style={styles.insta}> /roberlancarvalho</Text>
              </Text>
            </TouchableOpacity>        

            <View style={styles.botoes}>
          <TouchableOpacity
              style={styles.botaoEditar}
              onPress={() => { }}
            >
              <Entypo style={styles.icone} name="edit" />
              <Text style={styles.botaoText}>EDITAR INFORMAÇÕES
              
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoMensagens}
              onPress={() => { navigateToMensagem() }}
            >
            <Ionicons style={styles.icone} name="md-chatboxes" />
              <Text style={styles.botaoText}>MINHAS MENSAGENS</Text>
            </TouchableOpacity>
        </View>  
        </View>
          
      </View>

    </>
  )
}