import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './screens/containers/home'
import { Movie } from './screens/containers/movie'
import { Category } from './screens/containers/category'
import { Header } from './sections/components/header'

const Main = createStackNavigator()

export const AppNavigator = () => (
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