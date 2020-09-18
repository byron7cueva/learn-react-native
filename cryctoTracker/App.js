import React from 'react';
import {Image} from 'react-native';
// NavigationContainer: Nos ayuda a mantener el estado de la navegacion en general
// tanto de tabs como de stack
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from './src/res/colors';
import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tabs.Navigator
      tabBarOptions={{
        tintColor: '#fefefe',
        style: {
          backgroundColor: Colors.blackPearl,
        },
      }}>
      <Tabs.Screen
        name="Coins"
        component={CoinsStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('./src/assets/bank.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('./src/assets/star.png')}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  </NavigationContainer>
);

export default App;
