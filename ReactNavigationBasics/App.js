import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HomeScream = () => (
  <Text>Hola Mundo desde ract navigation</Text>
)

 const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScream} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
