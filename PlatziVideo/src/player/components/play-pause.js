import React from 'react'
import {
  TouchableHighlight, // Mientras se tenga el dedo sobre el boton va hacer un hightlight de algun tipo de color
  TouchableOpacity, // Cuando se lo tope va hacer un destello
  TouchableWithoutFeedback, // Va reaccionar cuando se precione
  StyleSheet,
  Text
} from 'react-native'

export const PlayPause = (props) => (
  <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    underlayColor='red'
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5
    }}
  >
    { props.paused ?
      <Text style={styles.button}>PLAY</Text>
      :
      <Text style={styles.button}>PAUSE</Text>
    }
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray'
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})