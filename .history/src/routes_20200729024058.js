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
                ? 'ios-home'
                : 'ios-home-outline';
            }
            else if (route.name === 'Config') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Buscar') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Adicionar') {
              iconName = focused ? 'ios-add-circle' : 'ios-list';
            }
            else if (route.name === 'Perfil') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Configurações') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#272e39',
          inactiveTintColor: 'gray',
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
