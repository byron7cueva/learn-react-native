import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

class About extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Profile')
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