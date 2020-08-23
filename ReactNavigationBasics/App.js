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

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName='Home'
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
    <HomeStack.Screen name='Home' component={Home} />
    <HomeStack.Screen name='About' component={About} />
    <HomeStack.Screen
      name='Profile'
      component={Profile}
      options={
        ({ route }) => ({
          title: `${route.params.name} ${route.params?.age ?? '32'}`
        })
      }
    />
  </HomeStack.Navigator>
)

const AppStack = createStackNavigator()

// Combinando rutas
const App: () => React$Node = () => {
return (
  <NavigationContainer>
    <AppStack.Navigator
      mode='modal'
      headerMode='none'
    >
      <AppStack.Screen name='Home' component={HomeStackScreen} />
      <AppStack.Screen 
      name='Login'
      options={{
        title: 'Pantalla Login'
      }}
      component={Login}
      key='login'
      initialParams={{ name: 'Byron' }}
    />
    </AppStack.Navigator>
  </NavigationContainer>
);
};

export default App;
