import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Apartamentos from './pages/Apartamentos'

// function Login() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Login!</Text>
//     </View>
//   );
// }

// function Cadastro() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Cadastro!</Text>
//     </View>
//   );
// }

// function Apartamentos() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Apartamentos!</Text>
//     </View>
//   );
// }

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