import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import Home from './pages/Home'
import Buscar from './pages/Buscar'
import Add from './pages/Add'
import Perfil from './pages/Perfil'
import Config from './pages/Config'

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Buscar" component={Buscar} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Config" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}