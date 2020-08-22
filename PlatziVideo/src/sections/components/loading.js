import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator // Es una imagen de loading
} from 'react-native'

export const Loading = (props) => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/logo.png')}
      style={styles.logo}
    />
    <ActivityIndicator color='red' />
  </View>
)

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain', //Se ajuste al contenedor la imagen
    marginBottom: 10,

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})