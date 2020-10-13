import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './screens/containers/home'
import { Movie } from './screens/containers/movie'

const Main = createStackNavigator()

export const AppNavigator = () => (
    <Main.Navigator>
        <Main.Screen name='Home' component={Home} options={Home.navigationOptions} />
        <Main.Screen name='Movie' component={Movie} options={Movie.navigationOptions} />
    </Main.Navigator>
)