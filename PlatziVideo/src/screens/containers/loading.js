import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Loading as LoadingLayout } from '../../sections/components/loading'

const Loading = (props) => {
  const navigation = useNavigation()

  // ComponentDidUpdate
  useEffect(() => {
    console.log('User', props.user)
    if (props.user) {
      console.log('Navegando a APP')
      navigation.navigate('App')
    } else {
      console.log('Navgando a LOGIN')
      navigation.navigate('Login')
    }
  })

  return (
    <LoadingLayout />
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const connected = connect(mapStateToProps)(Loading)

export {
  connected as Loading
}