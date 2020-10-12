import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native'

// SafeAreaView Renderiza el contenido en un area segura

export const Header = (props) => (
  <SafeAreaView>
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <View style={styles.right}>
        { props.children}
      </View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain' // Por defecto viene con cover
  },
  container: {
    padding: 10,
    // El flexDerection por defecto viene en columns
    flexDirection: 'row'
    // paddingLeft, paddingRight, paddingVertical, paddingHorizontal
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})