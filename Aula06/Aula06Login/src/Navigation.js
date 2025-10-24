import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import DadosCadastroScreen from './screens/DadosCadastroScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Acesso' }} 
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Boas-vindas' }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ title: 'Novo Cadastro' }} 
        />
        <Stack.Screen 
          name="DadosCadastro" 
          component={DadosCadastroScreen} 
          options={{ 
            title: 'Dados do Cadastro',
            headerBackVisible: false // Esconde o botão de voltar
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}