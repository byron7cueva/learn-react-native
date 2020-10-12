import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

class About extends Component {
  handlePress = () => {
    // Enviando parametros
    // navigate(name, parametros)
    this.props.navigation.navigate('Profile', {
      name: 'Byron Cueva'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
        <Button
          title='Ir a Perfil'
          onPress={this.handlePress}
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
  About
}