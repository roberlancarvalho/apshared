import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

import Home from './pages/Home'
import Buscar from './pages/Buscar'
import Add from './pages/Add'
import Perfil from './pages/Perfil'
import Config from './pages/Config'
import Login from './pages/Login'
import Detalhes from './pages/Detalhes'

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
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
              else if (route.name === 'Login') {
                iconName = focused ? 'ios-settings' : 'ios-settings';
              }

              return <Ionicons name={iconName} size={35} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#62b0d3',
            inactiveTintColor: '#272e39',
            showLabel: false,
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Buscar" component={Buscar} />
          <Tab.Screen name="Adicionar" component={Add} />
          <Tab.Screen name="Perfil" component={Perfil} />
          <Tab.Screen name="Configurações" component={Config} />
          {/* <Tab.Screen name="Detalhes" component={Detalhes} /> */}
          {/* <Tab.Screen name="Login" component={Login} /> */}
        </Tab.Navigator>  
      </NavigationContainer>

      {/* <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Detalhes" component={Detalhes} />
        </AppStack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        
      </NavigationContainer>
    </>
  );
}