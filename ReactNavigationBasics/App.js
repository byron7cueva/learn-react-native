import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderStyleInterpolators  } from '@react-navigation/stack'
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
      // Cada screen se encuentra dentro de un card, con la siguiente propiedad se le puede asignar estilos
      cardStyle: {
        borderWidth: 2,
        backgroundColor: 'red'
      },
      headerStyleInterpolator: HeaderStyleInterpolators .forUIKit
    }}
    // Por defecto android:screen y en ios=float
    headerMode='screen' // Para saber si esta flotando o junto con la pantalla. Tiene valores de float, screen y none
    mode='card' // Para saber si es un card (entran pantallas desde un costado) o un modal (Entran las pantallas desde abajo)
    // En android siempr sera card
  >
    <HomeStack.Screen
      name='Home'
      component={Home}
      options={{
        title: 'Esta es la home'
      }}
    />
    <HomeStack.Screen name='About' component={About} />
    <HomeStack.Screen
      name='Profile'
      component={Profile}
      options={
        // navigation options
        ({ route }) => ({
          // Obteniendo parametros y asignandole al title del screen
          title: `${route.params.name} ${route.params?.age ?? '32'}`
        })
      }
    />
  </HomeStack.Navigator>
)

const MainStack = createStackNavigator()

// Combinando rutas
const App: () => React$Node = () => {
return (
  <NavigationContainer>
    <MainStack.Navigator
      mode='modal'
      headerMode='none'
    >
      <MainStack.Screen name='Home' component={HomeStackScreen} />
      <MainStack.Screen 
      name='Login'
      options={{
        title: 'Pantalla Login'
      }}
      component={Login}
      key='login'
      initialParams={{ name: 'Byron' }}
    />
    </MainStack.Navigator>
  </NavigationContainer>
);
};

export default App;
