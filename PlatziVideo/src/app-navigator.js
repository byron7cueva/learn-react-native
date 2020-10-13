import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {Header} from './sections/components/header'
import {Home} from './screens/containers/home'
import {Movie} from './screens/containers/movie'
import {Category} from './screens/containers/category'
import {About} from './screens/containers/about'
import {Lucky} from './screens/containers/lucky'
import {Profile} from './screens/containers/profile'
import {Login} from './screens/containers/login'
import {Loading} from './screens/containers/loading'
import {Icon} from './sections/components/icon'
import { DrawerContent } from './sections/components/drawer'

const Main = createStackNavigator()
const Tab = createBottomTabNavigator()
const App = createStackNavigator()
const Modal = createStackNavigator()
const Drawer = createDrawerNavigator()

const MainNavigator = () => (
  <Main.Navigator
    screenOptions={{
      header: Header,
      cardStyle: {
        backgroundColor: 'white',
      },
    }}>
    <Main.Screen
      name="Home"
      component={Home}
      options={Home.navigationOptions}
    />
    <Main.Screen
      name="Category"
      component={Category}
      options={Category.navigationOptions}
    />
  </Main.Navigator>
)

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721',
    }}>
    <Tab.Screen
      name="Home"
      component={MainNavigator}
      options={{
        title: 'Inicio',
        tabBarIcon: () => <Icon icon="🏠" />,
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        title: 'Sobre esta app',
        tabBarIcon: () => <Icon icon="ℹ️" />,
      }}
    />
    <Tab.Screen
      name="Lucky"
      component={Lucky}
      options={{
        title: 'Voy a tener suerte',
        tabBarIcon: () => <Icon icon="🌟" />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Perfil',
        tabBarIcon: () => <Icon icon="😎" />,
      }}
    />
  </Tab.Navigator>
)

const WithModal = () => (
  <Modal.Navigator
    mode="modal"
    initialRouteName="Main"
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
      },
      gestureEnabled: true
    }
    }>
    <Modal.Screen
      name="Movie"
      component={Movie}
      options={Movie.navigationOptions}
    />
    <Modal.Screen name="Main" component={TabNavigator} />
  </Modal.Navigator>
)

const DrawerNavigator = () => (
    <Drawer.Navigator
        drawerContent={DrawerContent}
        drawerStyle={{
            width: 200,
            backgroundColor: '#f6f6f6'
        }}
        drawerContentOptions={{
            activeBackgroundColor: '#7aba2f',
            activeTintColor: 'white',
            inactiveTintColor: '#828282',
            inactiveBackgroundColor: 'white',
            itemStyle: {
                borderBottomWidth: 5,
                borderBottomColor: 'rgba(0,0,0,0.3)',
                marginHorizontal: 0,
                borderRadius: 0
            },
            labelStyle: {
                marginHorizontal: 0
            },
            contentContainerStyle: {
                marginHorizontal: 0,
                paddingHorizontal: 0
            }
        }}
    >
        <Drawer.Screen
            name='Main'
            component={WithModal}
            options={{
                title: 'Inicio',
                drawerIcon: () => <Icon icon="🏠" />
            }}
        />
        <Drawer.Screen
            name='Sobre'
            component={About}
            options={{
                title: 'Sobre esta app',
                drawerIcon: () => <Icon icon="ℹ️" />
            }}
        />
        <Drawer.Screen
            name='Suerte'
            component={Lucky}
            options={{
                title: 'Voy a tener suerte',
                drawerIcon: () => <Icon icon="🌟" />
            }}
        />
    </Drawer.Navigator>
)

export const AppNavigator = () => (
  <App.Navigator initialRouteName="Loading" headerMode="none">
    <App.Screen name="Loading" component={Loading} />
    <App.Screen name="Login" component={Login} />
    <App.Screen name="App" component={DrawerNavigator} />
  </App.Navigator>
)
