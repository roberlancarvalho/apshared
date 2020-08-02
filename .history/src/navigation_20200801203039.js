import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator({
  Detalhes: {
    navigationOptions: {
      header: null,
    },
  },

});

import Login from './pages/Login'
import Detalhes from './pages/Detalhes'

export default function Navigation({ navigation }) {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  )
}