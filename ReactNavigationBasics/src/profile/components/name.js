import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  useRoute
} from '@react-navigation/native'

// Accediendo a los parametros desde un componente
// Esto permitiria acceder a esta informacion asi el componente se encuentre
// muy debajo del arbol de componentes

export const Name = (props) => {
  const route = useRoute()
  const { params: {name} } = route

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}