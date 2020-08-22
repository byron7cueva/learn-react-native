import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Text
} from 'react-native'

import { Home } from './src/screens/home'
import { Login } from './src/screens/login'
import { About } from './src/screens/about'
import { Profile } from './src/screens/profile'

const Stack = createStackNavigator()

const App: () => React$Node = () => {
return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        title: 'Titulo generico', // Un titulo que se pone a todas las pantalla si estas no tienen configuradas la propiedad title
        headerTitleAllowFontScaling: true, // Para que pueda escalar la fuente dependiendo de la configuracion del usuario
        // Definir mi propio header
        /* header: ({ scene, previous, navigation }) => {
          return <Text>Esto es un header</Text>
        }*/
        headerBackTitle: 'Atras', // Texto que le acompaña al icono back
        gestureEnabled: true, // Habilitar los gestos de arrastrar para regresar
        // Redefiniendo el boton back
        headerBackImage: () => {
          return <Text>Atr</Text>
        },
        cardStyle: {
          borderWidth: 2,
          backgroundColor: 'red'
        }
      }}
      headerMode='screen'
      mode='card'
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen 
        name='Login'
        options={{
          title: 'Pantalla Login'
        }}
        component={Login}
        key='login'
        initialParams={{ name: 'Byron' }}
      />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;
