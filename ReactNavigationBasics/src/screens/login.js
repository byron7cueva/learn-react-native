import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import { NavigationActions } from '@react-navigation/compat'

class Login extends Component {
  hadlePress = () => {
    // Leendo parametro pasado en la navegacion
    // console.log(this.props.route.params.name)
    // this.props.navigation.navigate('About')
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'About'
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login - Hola {this.props.route.params.name}</Text>
        <Button
          title='Ir a About'
          onPress={this.hadlePress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export {
  Login
}