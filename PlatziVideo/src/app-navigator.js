import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Header } from './sections/components/header'
import { Home } from './screens/containers/home'
import { Movie } from './screens/containers/movie'
import { Category } from './screens/containers/category'
import { About } from './screens/containers/about'
import { Lucky } from './screens/containers/lucky'
import { Profile } from './screens/containers/profile'
import { Icon } from './sections/components/icon'

const Main = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
    <Main.Navigator
        screenOptions={{
            header: Header
        }}
    >
        <Main.Screen name='Home' component={Home} options={Home.navigationOptions} />
        <Main.Screen name='Movie' component={Movie} options={Movie.navigationOptions} />
        <Main.Screen name='Category' component={Category} options={Category.navigationOptions} />
    </Main.Navigator>
)

export const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: '#65a721'
        }}
    >
        <Tab.Screen
            name='Home'
            component={MainNavigator}
            options={{
                title: 'Inicio',
                tabBarIcon: () => <Icon icon='🏠' />
            }}
        />
        <Tab.Screen
            name='About'
            component={About}
            options={{
                title: 'Sobre esta app',
                tabBarIcon: () => <Icon icon='ℹ️' />
            }}
        />
        <Tab.Screen
            name='Lucky'
            component={Lucky}
            options={{
                title: 'Voy a tener suerte',
                tabBarIcon: () => <Icon icon='🌟' />
            }}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                title: 'Perfil',
                tabBarIcon: () => <Icon icon='😎' />
            }}
        />
    </Tab.Navigator>
)