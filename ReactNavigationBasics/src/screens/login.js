import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

class Login extends Component {
  hadlePress = () => {
    this.props.navigation.navigate('About')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
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