import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Loading as LoadingLayout } from '../../sections/components/loading'

const Loading = (props) => {
  const navigation = useNavigation()

  // ComponentDidUpdate
  useEffect(() => {
    if (props.user) {
      navigation.navigate('App')
    } else {
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