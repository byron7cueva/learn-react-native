import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

import { Name } from '../profile/components/name'

class Profile extends Component {
  componentDidMount() {
    // Cambiando propiedad de la navegacion desde el screen
    /*this.props.navigation.setOptions({
      // Cambiando el titulo del header pr el paramtro recibido
      title: this.props.route.params.name
    })*/
  }

  handlePress = () => {
    this.props.navigation.navigate('Home')
  }

  handleChangeParams = () => {
    // Cmabiando parametros
    this.props.navigation.setParams({
      name: 'Luis'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title='Ir a Home'
          onPress={this.handlePress}
        />
        <Button
          title='Cambiar nombre'
          onPress={this.handleChangeParams}
        />
        <Name />
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
  Profile
}