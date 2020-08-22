// Los screens se recomienda que sean componentes de clase - stateFull
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

class Home extends Component {
  handlePress = () => {
    // Navegando a otra pantalla
    // Al ser un screen se inyecta la propiedad navigation
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title='Login'
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
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export {
  Home
}