import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Apartamentos from './pages/Apartamentos'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Apartamentos" component={Apartamentos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}