import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
          title: 'Titulo generico'
        }}
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
