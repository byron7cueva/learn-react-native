import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

export const LayoutBackground = (props) => (
  <ImageBackground
    source={require('../../../assets/backgronund.png')}
    style={styles.container}
  >
    <Text style={styles.title}>{props.title}</Text>
    {props.children}
  </ImageBackground>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})