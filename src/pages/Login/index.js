import React, { useState, Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  CheckBox
} from 'react-native'
// import PasswordInputText from 'react-native-hide-show-password-input';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Login() {

  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }
  
  function navigateToCadastro() {
    navigation.navigate('Cadastro')
  }

  return (
    <>

      <View style={styles.container} >

        {/* <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../../assets/ap2.png')}>
        </ImageBackground> */}

        <View style={styles.conteudo}>

          <Image source={require('../../assets/logo.png')} style={styles.logo} />

          <View style={styles.topo}>
            <Text style={styles.fazerLogin}>Fazer login: </Text>
            
            <TouchableOpacity
              style={styles.criarConta}
              onPress={() => { navigateToCadastro() }}
            >
              <Text style={styles.criarContaTexto}>Criar conta</Text>
            </TouchableOpacity>
          </View>


          <TextInput
            style={styles.input}
            placeholder="E-mail"
          />

          <View style={styles.inputSenha}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
            />
            {/* <Feather style={styles.senhaIcon} name="eye-off" size={20} color="black" /> */}
          </View>

          <View style={styles.links}>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                tintColors={{ true: '#62b0d3', false: '#fff' }}
              />
              <Text style={styles.label}>Lembrar-me</Text>
            </View>

            <TouchableOpacity
              style={styles.recuperar}
              onPress={() => { }}
            >
              <Text style={styles.recuperarTexto}>Esqueci a senha</Text>

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

            <TouchableOpacity>
              <Image style={styles.facebook} source={require('../../assets/icons/facebook.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.google} source={require('../../assets/icons/google.png')} />
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <AntDesign style={styles.facebook} name="facebook-square" size={45} color="#62b0d3" />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign style={styles.google} name="google" size={45} color="#62b0d3" />
            </TouchableOpacity> */}
          </View>

        </View>

      </View>
    </>
  )
}

export default Login

