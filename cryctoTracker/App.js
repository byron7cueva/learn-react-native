import React from 'react';
import {Image} from 'react-native';
// NavigationContainer: Nos ayuda a mantener el estado de la navegacion en general
// tanto de tabs como de stack
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CoinsStack from './src/components/coins/CoinsStack';
import Colors from './src/res/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
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
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
