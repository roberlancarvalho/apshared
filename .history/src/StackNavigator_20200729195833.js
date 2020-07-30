import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login'
import Detalhes from './pages/Detalhes'

export default function Stack() {

  return (

    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
      </AppStack.Navigator>
    </NavigationContainer>

  )
}