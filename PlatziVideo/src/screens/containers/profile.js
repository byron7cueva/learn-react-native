import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Profile = (props) => {
  const navigation = useNavigation()

  const handleFocus = () => {
    StatusBar.setBarStyle('dark-content')
    
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white')
    }
  }

  const handleLogout = () => {
    props.dispatch({
      type: 'REMOVE_USER'
    })
    navigation.navigate('Loading')
  }

  //componentDidMount
  useEffect(() => {
    navigation.addListener('focus', handleFocus)
    return () => {
      navigation.removeListener('focus', handleFocus)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>{props.user.username}</Text>
      <Button
        title="Cerrar sesión"
        color="#67a52e"
        onPress={handleLogout}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const connected = connect(mapStateToProps)(Profile)

export {
  connected as Profile
}