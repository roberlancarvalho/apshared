import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import CadastroDois from '../pages/CadastroDois'
import CadastroTres from '../pages/CadastroTres'
import Sucesso from '../pages/Sucesso'
import Detalhes from '../pages/Detalhes'
import Morador from '../pages/Morador'
import Buscar from '../pages/Buscar'
import Mensagem from '../pages/Mensagem'
import AppTab from './AppTab';

const { Navigator, Screen } = createStackNavigator()

function AppStack() {

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Login" component={Login} />
        <Screen name="Cadastro" component={Cadastro} />
        <Screen name="CadastroDois" component={CadastroDois} />
        <Screen name="CadastroTres" component={CadastroTres} />
        <Screen name="Sucesso" component={Sucesso} />
        <Screen name="Detalhes" component={Detalhes} />
        <Screen name="Morador" component={Morador} />
        <Screen name="Buscar" component={Buscar} />
        <Screen name="Mensagem" component={Mensagem} />
        <Screen name="Home" component={AppTab} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack