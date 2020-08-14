import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'
import Detalhes from '../pages/Detalhes'
import Mensagem from '../pages/Mensagem'
import AppTab from './AppTab';

const { Navigator, Screen } = createStackNavigator()

function AppStack() {

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Login" component={Login} />
        <Screen name="Detalhes" component={Detalhes} />
        <Screen name="Mensagem" component={Mensagem} />
        <Screen name="Home" component={AppTab} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack