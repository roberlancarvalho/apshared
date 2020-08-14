import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
// import PasswordInputText from 'react-native-hide-show-password-input';
import { useNavigation } from '@react-navigation/native'


import styles from './styles'

function Login() {

  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }

  return (
    <>

      <View style={styles.container} >

        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap2.png')}>
        </ImageBackground>


        <View style={styles.conteudo}>

          <Text style={styles.title}>Realize seu login: </Text>

          <TextInput
            style={styles.input}
            placeholder="Insira seu e-mail"
          />

          <View style={styles.inputSenha}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Insira sua senha"
            />
            {/* <Feather style={styles.senhaIcon} name="eye-off" size={20} color="black" /> */}
          </View>

          <View style={styles.links}>
            <TouchableOpacity
              style={styles.recuperar}
              onPress={() => { }}
            >
              <Text style={styles.link}>Esqueci minha senha</Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.recuperar}
              onPress={() => { }}
            >
              <Text style={styles.link}>Realizar cadastro</Text>

            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => { navigateToHome() }}
          >

            <Text style={styles.botaoText}>ENTRAR</Text>
          </TouchableOpacity>

          <Text style={styles.alternativaLogin}>Fazer login com:</Text>

          <View style={styles.sociaisIcons}>
            <AntDesign style={styles.facebook} name="facebook-square" size={45} color="#62b0d3" />
            <AntDesign style={styles.google} name="google" size={45} color="#62b0d3" />
          </View>

        </View>

      </View>
    </>
  )
}

export default Login

