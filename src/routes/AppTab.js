import React from 'react'

import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Buscar from '../pages/Buscar'
import Adicionar from '../pages/Adicionar'
import Perfil from '../pages/Perfil'
import Config from '../pages/Config'

const { Navigator, Screen } = createBottomTabNavigator()

function AppTab() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'md-home' : 'md-home';
          }
          else if (route.name === 'Buscar') {
            iconName = focused ? 'md-search' : 'md-search';
          }
          else if (route.name === 'Adicionar') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
          }
          else if (route.name === 'Perfil') {
            iconName = focused ? 'md-person' : 'md-person';
          }
          else if (route.name === 'Configurações') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#62b0d3',
        inactiveTintColor: '#272e39',
        showLabel: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Buscar" component={Buscar} />
      <Screen name="Adicionar" component={Adicionar} />
      <Screen name="Perfil" component={Perfil} />
      <Screen name="Configurações" component={Config} />
    </Navigator>
  );
}

export default AppTab
