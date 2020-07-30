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
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Cadastro" component={CadastroScreen} />
        <Tab.Screen name="Apartamentos" component={ApartamentosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}