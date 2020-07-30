import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from './pages/Home'
import Buscar from './pages/Buscar'
import Add from './pages/Add'
import Perfil from './pages/Perfil'
import Config from './pages/Config'
import Detalhes from '.pages/Detalhes'

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Buscar" component={Buscar} />
        <Tab.Screen name="Adicionar" component={Add} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Configurações" component={Config} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}