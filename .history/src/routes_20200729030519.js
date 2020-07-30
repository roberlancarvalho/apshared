import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from './pages/Home'
import Buscar from './pages/Buscar'
import Add from './pages/Add'
import Perfil from './pages/Perfil'
import Config from './pages/Config'
import Detalhes from './pages/Detalhes'

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home' : 'md-home';
            }
            else if (route.name === 'Config') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={26} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#62b0d3',
          inactiveTintColor: '#272e39',
        }}
      >
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
